'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { execFile } = require('child_process');
const httpClient = require('./http-client');
const { resolveMediaBuffer } = require('./decode64');
const { writeExifToWebp } = require('./exif');

// ============================================================================
// KATEGORI 1: CONNECTION RESILIENCE, ANTI-BAN & SIGNAL SELF-HEALING (1–12)
// ============================================================================

/**
 * 1. Exponential Backoff with Full Jitter Reconnect Calculator
 */
function computeReconnectBackoff(attempt = 1, baseDelayMs = 1500, maxDelayMs = 60000) {
    const exp = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, Math.max(0, attempt - 1)));
    const jitter = Math.floor(Math.random() * (exp * 0.4));
    return Math.min(maxDelayMs, Math.floor(exp * 0.8 + jitter));
}

/**
 * 2. WebSocket Ping/Pong Dead-Socket Watchdog
 */
function startSocketWatchdog(sock, intervalMs = 45000) {
    const timer = setInterval(() => {
        try {
            if (sock?.ws?.readyState === 1 && typeof sock.ws.ping === 'function') {
                sock.ws.ping();
            }
        } catch {}
    }, intervalMs);
    if (typeof timer.unref === 'function') timer.unref();
    return timer;
}

/**
 * 3. Signal Bad-MAC / Corrupt Session Auto-Purger
 */
function purgeCorruptSignalSession(sessionDir = 'sessions', jid = '') {
    try {
        const cleanUser = String(jid).split('@')[0].split(':')[0].replace(/[^0-9a-zA-Z_-]/g, '');
        if (!cleanUser || !fs.existsSync(sessionDir)) return 0;
        let removed = 0;
        for (const f of fs.readdirSync(sessionDir)) {
            if (f.startsWith('session-') && f.includes(cleanUser)) {
                try {
                    fs.unlinkSync(path.join(sessionDir, f));
                    removed++;
                } catch {}
            }
        }
        return removed;
    } catch {
        return 0;
    }
}

/**
 * 4. Token-Bucket Per-JID & Global Anti-Ban Rate Limiter
 */
function createTokenBucketLimiter(capacity = 12, refillPerSec = 3) {
    const buckets = new Map();
    return {
        consume(key = 'global', tokens = 1) {
            const now = Date.now();
            const state = buckets.get(key) || { tokens: capacity, lastRefill: now };
            const elapsedSec = (now - state.lastRefill) / 1000;
            state.tokens = Math.min(capacity, state.tokens + elapsedSec * refillPerSec);
            state.lastRefill = now;
            if (state.tokens >= tokens) {
                state.tokens -= tokens;
                buckets.set(key, state);
                return { allowed: true, waitMs: 0 };
            }
            const needed = tokens - state.tokens;
            const waitMs = Math.ceil((needed / refillPerSec) * 1000);
            buckets.set(key, state);
            return { allowed: false, waitMs };
        }
    };
}

/**
 * 5. Humanized Typing & Recording Cadence Simulator
 */
async function simulateHumanCadence(sock, jid, textLength = 40, isAudio = false) {
    if (!jid || jid.endsWith('@newsletter') || typeof sock?.sendPresenceUpdate !== 'function') return;
    const baseMs = Math.min(3200, Math.max(650, textLength * 22));
    const jitterMs = Math.floor(Math.random() * 350);
    try {
        await sock.sendPresenceUpdate(isAudio ? 'recording' : 'composing', jid);
        await new Promise((r) => setTimeout(r, baseMs + jitterMs));
        await sock.sendPresenceUpdate('paused', jid);
    } catch {}
}

/**
 * 6. Message Deduplication Filter (Prevent Double Execution on Re-delivery)
 */
function createMessageDeduplicator(ttlMs = 120000) {
    const seen = new Map();
    return {
        isDuplicate(msgId) {
            if (!msgId) return false;
            const now = Date.now();
            if (seen.size > 2000) {
                for (const [k, exp] of seen.entries()) {
                    if (now > exp) seen.delete(k);
                }
            }
            const exp = seen.get(msgId);
            if (exp && now < exp) return true;
            seen.set(msgId, now + ttlMs);
            return false;
        }
    };
}

/**
 * 7. Outbox Dead-Letter Retry Queue (Auto-resend failed messages on reconnect)
 */
function createDeadLetterOutbox() {
    const queue = [];
    return {
        queue,
        push(jid, content, options = {}) {
            if (queue.length < 150) {
                queue.push({ jid, content, options, timestamp: Date.now() });
            }
        },
        async flush(sock) {
            const items = queue.splice(0, queue.length);
            let flushed = 0;
            for (const item of items) {
                try {
                    await sock.sendMessage(item.jid, item.content, item.options);
                    flushed++;
                } catch {}
            }
            return flushed;
        }
    };
}

/**
 * 8. Atomic Creds Backup & Self-Recovery (Prevent 0-byte creds.json corruption)
 */
function safeBackupAndRestoreCreds(sessionDir = 'sessions') {
    const credsPath = path.join(sessionDir, 'creds.json');
    const bakPath = path.join(sessionDir, 'creds.bak.json');
    try {
        if (fs.existsSync(credsPath)) {
            const raw = fs.readFileSync(credsPath, 'utf8').trim();
            if (raw.length > 20) {
                JSON.parse(raw);
                fs.writeFileSync(bakPath, raw, 'utf8');
                return { status: 'backed_up' };
            }
        }
        if (fs.existsSync(bakPath)) {
            const bakRaw = fs.readFileSync(bakPath, 'utf8').trim();
            if (bakRaw.length > 20) {
                JSON.parse(bakRaw);
                fs.writeFileSync(credsPath, bakRaw, 'utf8');
                return { status: 'restored_from_backup' };
            }
        }
    } catch {
        if (fs.existsSync(bakPath)) {
            try {
                fs.copyFileSync(bakPath, credsPath);
                return { status: 'restored_from_backup' };
            } catch {}
        }
    }
    return { status: 'noop' };
}

/**
 * 9. Heap Memory Pressure Auto-GC & Cache Trimmer
 */
function startMemoryGuard(caches = [], maxHeapMB = 450, intervalMs = 60000) {
    const timer = setInterval(() => {
        const heapMB = process.memoryUsage().heapUsed / (1024 * 1024);
        if (heapMB > maxHeapMB) {
            for (const c of caches) {
                try {
                    if (typeof c?.flushAll === 'function') c.flushAll();
                    else if (typeof c?.clear === 'function') c.clear();
                } catch {}
            }
            if (typeof global.gc === 'function') {
                try { global.gc(); } catch {}
            }
        }
    }, intervalMs);
    if (typeof timer.unref === 'function') timer.unref();
    return timer;
}

/**
 * 10. Process Graceful Shutdown Hook (Flush Store & Close Sockets on SIGINT/SIGTERM)
 */
function registerGracefulShutdown(callbacks = []) {
    const handler = async () => {
        for (const cb of callbacks) {
            try { await cb(); } catch {}
        }
    };
    process.once('SIGINT', handler);
    process.once('SIGTERM', handler);
}

// ============================================================================
// KATEGORI 2: CLOUD DATABASE AUTH ADAPTERS (SUPABASE, SQLITE, REDIS, MONGO) (11–20)
// ============================================================================

/**
 * 11. Supabase PostgreSQL REST Auth State Adapter (`useSupabaseAuthState`)
 */
async function useSupabaseAuthState({ supabaseUrl, supabaseKey, tableName = 'baileys_auth', sessionId = 'default' }) {
    let official;
    try { official = require('baileys-official'); } catch {}
    const initAuthCreds = official?.initAuthCreds || (() => ({}));
    const BufferJSON = official?.BufferJSON || { replacer: (k, v) => v, reviver: (k, v) => v };

    const baseUrl = `${String(supabaseUrl).replace(/\/+$/, '')}/rest/v1/${tableName}`;
    const headers = {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates'
    };

    async function readRow(key) {
        try {
            const fullKey = `${sessionId}:${key}`;
            const res = await httpClient.get(baseUrl, {
                params: { id: `eq.${fullKey}`, select: 'value' },
                headers
            });
            const row = Array.isArray(res.data) ? res.data[0] : null;
            if (!row?.value) return null;
            return JSON.parse(typeof row.value === 'string' ? row.value : JSON.stringify(row.value), BufferJSON.reviver);
        } catch {
            return null;
        }
    }

    async function writeRow(key, val) {
        try {
            const fullKey = `${sessionId}:${key}`;
            const serialized = JSON.stringify(val, BufferJSON.replacer);
            await httpClient.post(baseUrl, { id: fullKey, value: serialized, updated_at: new Date().toISOString() }, { headers });
        } catch {}
    }

    async function deleteRow(key) {
        try {
            const fullKey = `${sessionId}:${key}`;
            await httpClient.delete(`${baseUrl}?id=eq.${encodeURIComponent(fullKey)}`, { headers });
        } catch {}
    }

    const creds = (await readRow('creds')) || initAuthCreds();

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    await Promise.all(
                        ids.map(async (id) => {
                            const val = await readRow(`${type}-${id}`);
                            if (val !== null && val !== undefined) data[id] = val;
                        })
                    );
                    return data;
                },
                set: async (data) => {
                    const tasks = [];
                    for (const category of Object.keys(data)) {
                        for (const id of Object.keys(data[category])) {
                            const value = data[category][id];
                            const key = `${category}-${id}`;
                            tasks.push(value ? writeRow(key, value) : deleteRow(key));
                        }
                    }
                    await Promise.all(tasks);
                }
            }
        },
        saveCreds: async () => await writeRow('creds', creds)
    };
}

/**
 * 12. Encrypted AES-256-GCM Local Auth State (`useEncryptedAuthState`)
 */
async function useEncryptedAuthState(filePath = './session.enc', secretPassphrase = 'ryszox-default-secret') {
    let official;
    try { official = require('baileys-official'); } catch {}
    const initAuthCreds = official?.initAuthCreds || (() => ({}));
    const BufferJSON = official?.BufferJSON || { replacer: (k, v) => v, reviver: (k, v) => v };

    const key = crypto.createHash('sha256').update(String(secretPassphrase)).digest();

    function encryptText(plainText) {
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
        const enc = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()]);
        const tag = cipher.getAuthTag();
        return Buffer.concat([iv, tag, enc]).toString('base64');
    }

    function decryptText(b64) {
        const raw = Buffer.from(b64, 'base64');
        const iv = raw.subarray(0, 12);
        const tag = raw.subarray(12, 28);
        const enc = raw.subarray(28);
        const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag(tag);
        return Buffer.concat([decipher.update(enc), decipher.final()]).toString('utf8');
    }

    let creds = initAuthCreds();
    let keys = {};

    if (fs.existsSync(filePath)) {
        try {
            const dec = decryptText(fs.readFileSync(filePath, 'utf8'));
            const parsed = JSON.parse(dec, BufferJSON.reviver);
            creds = parsed.creds || creds;
            keys = parsed.keys || {};
        } catch {}
    }

    const saveState = () => {
        try {
            const jsonStr = JSON.stringify({ creds, keys }, BufferJSON.replacer);
            fs.writeFileSync(filePath, encryptText(jsonStr), 'utf8');
        } catch {}
    };

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const res = {};
                    for (const id of ids) {
                        const v = keys[`${type}-${id}`];
                        if (v !== undefined) res[id] = v;
                    }
                    return res;
                },
                set: async (data) => {
                    for (const cat of Object.keys(data)) {
                        for (const id of Object.keys(data[cat])) {
                            const v = data[cat][id];
                            if (v) keys[`${cat}-${id}`] = v;
                            else delete keys[`${cat}-${id}`];
                        }
                    }
                    saveState();
                }
            }
        },
        saveCreds: saveState
    };
}

// ============================================================================
// KATEGORI 3: FFmpeg STUDIO, VIDEO, AUDIO, STICKER & CANVAS SUITE (21–38)
// ============================================================================

function runFfmpeg(args = [], timeout = 25000) {
    return new Promise((resolve, reject) => {
        execFile('ffmpeg', ['-y', ...args], { timeout }, (err, stdout, stderr) => {
            if (err) return reject(err);
            resolve({ stdout, stderr });
        });
    });
}

/**
 * 21. Sticker To Image (WebP -> PNG Buffer) (`webpToPng`)
 */
async function webpToPng(webpInput) {
    const buf = await resolveMediaBuffer(webpInput);
    const id = crypto.randomBytes(6).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `w2p_in_${id}.webp`);
    const tmpOut = path.join(os.tmpdir(), `w2p_out_${id}.png`);
    try {
        fs.writeFileSync(tmpIn, buf);
        await runFfmpeg(['-i', tmpIn, tmpOut]);
        return fs.readFileSync(tmpOut);
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
}

/**
 * 22. Animated Sticker / GIF To MP4 Video (`webpToMp4`)
 */
async function webpToMp4(webpInput) {
    const buf = await resolveMediaBuffer(webpInput);
    const id = crypto.randomBytes(6).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `w2v_in_${id}.webp`);
    const tmpOut = path.join(os.tmpdir(), `w2v_out_${id}.mp4`);
    try {
        fs.writeFileSync(tmpIn, buf);
        await runFfmpeg(['-i', tmpIn, '-movflags', 'faststart', '-pix_fmt', 'yuv420p', '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', tmpOut]);
        return fs.readFileSync(tmpOut);
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
}

/**
 * 23. Video To Audio MP3 Extractor (`videoToMp3`)
 */
async function videoToMp3(videoInput) {
    const buf = await resolveMediaBuffer(videoInput);
    const id = crypto.randomBytes(6).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `v2a_in_${id}.mp4`);
    const tmpOut = path.join(os.tmpdir(), `v2a_out_${id}.mp3`);
    try {
        fs.writeFileSync(tmpIn, buf);
        await runFfmpeg(['-i', tmpIn, '-vn', '-acodec', 'libmp3lame', '-q:a', '2', tmpOut]);
        return fs.readFileSync(tmpOut);
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
}

/**
 * 24. Trim Audio or Video by Timestamp (`trimMedia`)
 */
async function trimMedia(mediaInput, startSec = 0, durationSec = 15, ext = 'mp4') {
    const buf = await resolveMediaBuffer(mediaInput);
    const id = crypto.randomBytes(6).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `trim_in_${id}.${ext}`);
    const tmpOut = path.join(os.tmpdir(), `trim_out_${id}.${ext}`);
    try {
        fs.writeFileSync(tmpIn, buf);
        await runFfmpeg(['-ss', String(startSec), '-t', String(durationSec), '-i', tmpIn, '-c', 'copy', tmpOut]);
        return fs.readFileSync(tmpOut);
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
}

/**
 * 25. Meme Text Overlay on Image (Top & Bottom Impact Text via FFmpeg) (`createMemeImage`)
 */
async function createMemeImage(imageInput, topText = '', bottomText = '') {
    const buf = await resolveMediaBuffer(imageInput);
    const id = crypto.randomBytes(6).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `meme_in_${id}.jpg`);
    const tmpOut = path.join(os.tmpdir(), `meme_out_${id}.jpg`);
    const cleanTop = String(topText).replace(/[':]/g, '');
    const cleanBot = String(bottomText).replace(/[':]/g, '');
    const filters = [];
    if (cleanTop) {
        filters.push(`drawtext=text='${cleanTop}':fontcolor=white:fontsize=h/10:borderw=3:bordercolor=black:x=(w-text_w)/2:y=25`);
    }
    if (cleanBot) {
        filters.push(`drawtext=text='${cleanBot}':fontcolor=white:fontsize=h/10:borderw=3:bordercolor=black:x=(w-text_w)/2:y=h-text_h-25`);
    }
    if (filters.length === 0) return buf;
    try {
        fs.writeFileSync(tmpIn, buf);
        await runFfmpeg(['-i', tmpIn, '-vf', filters.join(','), tmpOut]);
        return fs.readFileSync(tmpOut);
    } catch {
        return buf;
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
}

/**
 * 26.Brat Text Sticker Generator (`generateBratSticker`)
 */
async function generateBratSticker(text = 'baileys by ryszox') {
    const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(String(text))}`;
    const res = await httpClient.get(url, { responseType: 'arraybuffer', timeout: 25000 });
    return Buffer.from(res.data);
}

/**
 * 27. Carbon Code Snippet Image Generator (`generateCarbonCodeImage`)
 */
async function generateCarbonCodeImage(code = 'console.log("Baileys by ryszox");') {
    const res = await httpClient.post(
        'https://carbonara.solopov.dev/api/cook',
        { code: String(code), backgroundColor: '#1F2937', theme: 'one-dark' },
        { responseType: 'arraybuffer', timeout: 30000 }
    );
    return Buffer.from(res.data);
}

/**
 * 28. Welcome / Goodbye / Level-Up Banner Card URL Builder (`buildCanvasCardUrl`)
 */
function buildCanvasCardUrl({
    type = 'welcome',
    username = 'Member',
    guildName = 'WhatsApp Group',
    memberCount = 100,
    avatarUrl = 'https://i.ibb.co/3Fh9V6p/avatar-default.png',
    backgroundUrl = 'https://i.ibb.co/4YBNyvP/images-76.jpg'
}) {
    const endpoint = type === 'goodbye' ? 'goodbye-v1' : 'welcome-v1';
    const qs = new URLSearchParams({
        username: String(username),
        guildName: String(guildName),
        memberCount: String(memberCount),
        avatar: String(avatarUrl),
        background: String(backgroundUrl)
    }).toString();
    return `https://api.siputzx.my.id/api/canvas/${endpoint}?${qs}`;
}

/**
 * 29. Google TTS Multi-Language Audio Buffer Generator (`textToSpeechBuffer`)
 */
async function textToSpeechBuffer(text = 'Halo', lang = 'id') {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(String(text).slice(0, 200))}&tl=${encodeURIComponent(lang)}&client=tw-ob`;
    const res = await httpClient.get(url, {
        responseType: 'arraybuffer',
        headers: { 'User-Agent': 'Mozilla/5.0' },
        timeout: 20000
    });
    return Buffer.from(res.data);
}

/**
 * 30. Sticker Watermark Stealer / Re-Packer (`stealSticker`)
 */
async function stealSticker(stickerMedia, packName = 'Baileys by ryszox', authorName = '@ryszox_host', emojis = ['🔥']) {
    const buf = await resolveMediaBuffer(stickerMedia);
    return writeExifToWebp(buf, { packName, packPublish: authorName, emojis });
}

// ============================================================================
// KATEGORI 4: RPG LEVELING, ECONOMY, LEADERBOARD, GACHA, SEWA GRUP & PREMIUM (31–50)
// ============================================================================

/**
 * 31. Full RPG Leveling, XP, Balance, Limit, Daily Claim & Leaderboard Engine
 */
function createEconomyRPGEngine(dbFilePath = './database_rpg.json') {
    let data = { users: {}, redeemedCodes: {}, groupsRental: {} };
    if (fs.existsSync(dbFilePath)) {
        try { data = Object.assign(data, JSON.parse(fs.readFileSync(dbFilePath, 'utf8'))); } catch {}
    }

    const save = () => {
        try { fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8'); } catch {}
    };

    const ROLES = [
        { minLevel: 0, name: 'Bronze I' },
        { minLevel: 5, name: 'Silver II' },
        { minLevel: 10, name: 'Gold III' },
        { minLevel: 20, name: 'Platinum IV' },
        { minLevel: 35, name: 'Diamond V' },
        { minLevel: 50, name: 'Mythic Glory' },
        { minLevel: 100, name: 'Immortal Ryszox' }
    ];

    function getRole(level) {
        let role = ROLES[0].name;
        for (const r of ROLES) {
            if (level >= r.minLevel) role = r.name;
        }
        return role;
    }

    function getUser(jid) {
        if (!data.users[jid]) {
            data.users[jid] = {
                jid,
                xp: 0,
                level: 1,
                role: 'Bronze I',
                balance: 0,
                bank: 0,
                limit: 25,
                premium: false,
                premiumUntil: 0,
                banned: false,
                banReason: '',
                lastDaily: 0,
                registered: false,
                regName: '',
                regAge: 0,
                sn: ''
            };
            save();
        }
        const u = data.users[jid];
        if (u.premium && u.premiumUntil > 0 && Date.now() > u.premiumUntil) {
            u.premium = false;
            u.premiumUntil = 0;
            save();
        }
        return u;
    }

    return {
        data,
        save,
        getUser,
        addXP(jid, amount = 15) {
            const u = getUser(jid);
            u.xp += Number(amount) || 0;
            const needed = u.level * 100;
            let leveledUp = false;
            while (u.xp >= u.level * 100) {
                u.xp -= u.level * 100;
                u.level += 1;
                u.role = getRole(u.level);
                leveledUp = true;
            }
            save();
            return { leveledUp, level: u.level, xp: u.xp, needed, role: u.role };
        },
        addBalance(jid, amount = 0) {
            const u = getUser(jid);
            u.balance = Math.max(0, u.balance + Number(amount));
            save();
            return u.balance;
        },
        transferBalance(fromJid, toJid, amount) {
            const amt = Math.floor(Number(amount) || 0);
            if (amt <= 0) return { success: false, reason: 'Invalid amount' };
            const sender = getUser(fromJid);
            if (sender.balance < amt) return { success: false, reason: 'Insufficient balance' };
            const receiver = getUser(toJid);
            sender.balance -= amt;
            receiver.balance += amt;
            save();
            return { success: true, senderBalance: sender.balance, receiverBalance: receiver.balance };
        },
        useLimit(jid, cost = 1) {
            const u = getUser(jid);
            if (u.premium) return { allowed: true, remaining: Infinity };
            if (u.limit < cost) return { allowed: false, remaining: u.limit };
            u.limit -= cost;
            save();
            return { allowed: true, remaining: u.limit };
        },
        claimDaily(jid, rewardBalance = 5000, rewardXp = 150, rewardLimit = 5) {
            const u = getUser(jid);
            const now = Date.now();
            const cooldown = 24 * 3600 * 1000;
            if (now - u.lastDaily < cooldown) {
                const remMs = cooldown - (now - u.lastDaily);
                return { success: false, remainingHours: (remMs / 3600000).toFixed(1) };
            }
            u.lastDaily = now;
            u.balance += rewardBalance;
            u.limit += rewardLimit;
            this.addXP(jid, rewardXp);
            save();
            return { success: true, balance: u.balance, limit: u.limit, level: u.level };
        },
        setPremium(jid, days = 30) {
            const u = getUser(jid);
            u.premium = days > 0;
            u.premiumUntil = days > 0 ? Date.now() + days * 86400 * 1000 : 0;
            save();
            return u;
        },
        setBanned(jid, banned = true, reason = 'Melanggar aturan bot') {
            const u = getUser(jid);
            u.banned = Boolean(banned);
            u.banReason = banned ? String(reason) : '';
            save();
            return u;
        },
        registerUser(jid, name, age) {
            const u = getUser(jid);
            u.registered = true;
            u.regName = String(name || 'User');
            u.regAge = Number(age || 17);
            u.sn = `SN-${crypto.randomBytes(6).toString('hex').toUpperCase()}`;
            save();
            return u;
        },
        createRedeemCode(code, { balance = 10000, limit = 10, xp = 250, maxClaims = 10 } = {}) {
            data.redeemedCodes[code] = { code, balance, limit, xp, maxClaims, claimedBy: [] };
            save();
            return data.redeemedCodes[code];
        },
        claimRedeemCode(jid, code) {
            const c = data.redeemedCodes[code];
            if (!c) return { success: false, reason: 'Kode redeem tidak ditemukan.' };
            if (c.claimedBy.includes(jid)) return { success: false, reason: 'Kamu sudah pernah mengklaim kode ini.' };
            if (c.claimedBy.length >= c.maxClaims) return { success: false, reason: 'Kuota kode redeem sudah habis.' };
            c.claimedBy.push(jid);
            const u = getUser(jid);
            u.balance += c.balance;
            u.limit += c.limit;
            this.addXP(jid, c.xp);
            save();
            return { success: true, reward: { balance: c.balance, limit: c.limit, xp: c.xp } };
        },
        getLeaderboard(field = 'balance', topN = 10) {
            return Object.values(data.users)
                .sort((a, b) => (Number(b[field]) || 0) - (Number(a[field]) || 0))
                .slice(0, topN);
        },
        setGroupRental(groupJid, days = 30) {
            const expireAt = Date.now() + days * 86400 * 1000;
            data.groupsRental[groupJid] = { groupJid, expireAt, active: true };
            save();
            return data.groupsRental[groupJid];
        },
        checkExpiredRentals() {
            const now = Date.now();
            const expired = [];
            for (const [gid, info] of Object.entries(data.groupsRental)) {
                if (info.active && now > info.expireAt) {
                    info.active = false;
                    expired.push(gid);
                }
            }
            if (expired.length > 0) save();
            return expired;
        }
    };
}

// ============================================================================
// KATEGORI 5: DIGITAL STOREFRONT, AUTO-DELIVERY, VOUCHER, INVOICE & TICKETS (51–68)
// ============================================================================

/**
 * 51. Complete Digital Store & Auto-Delivery Inventory Engine (Vouchers, Stock Queue, Escrow, Warranty Tickets)
 */
function createDigitalStoreEngine(storeFilePath = './database_store.json') {
    let db = { products: {}, vouchers: {}, orders: {}, tickets: {} };
    if (fs.existsSync(storeFilePath)) {
        try { db = Object.assign(db, JSON.parse(fs.readFileSync(storeFilePath, 'utf8'))); } catch {}
    }

    const save = () => {
        try { fs.writeFileSync(storeFilePath, JSON.stringify(db, null, 2), 'utf8'); } catch {}
    };

    return {
        db,
        save,
        upsertProduct({ code, name, price, category = 'Digital', description = '', warrantyDays = 7 }) {
            const existing = db.products[code] || { stockItems: [], soldCount: 0 };
            db.products[code] = {
                ...existing,
                code: String(code),
                name: String(name),
                price: Number(price),
                category: String(category),
                description: String(description),
                warrantyDays: Number(warrantyDays)
            };
            save();
            return db.products[code];
        },
        addProductStock(code, items = []) {
            const p = db.products[code];
            if (!p) throw new Error(`Product ${code} not found`);
            const list = Array.isArray(items) ? items : [items];
            p.stockItems.push(...list.map(String));
            save();
            return p.stockItems.length;
        },
        popProductStock(code, quantity = 1) {
            const p = db.products[code];
            if (!p || p.stockItems.length < quantity) return null;
            const popped = p.stockItems.splice(0, quantity);
            p.soldCount = (p.soldCount || 0) + quantity;
            save();
            return popped;
        },
        createDiscountVoucher(code, { discountPercent = 10, maxDiscount = 50000, minOrder = 0, quota = 50 } = {}) {
            db.vouchers[code] = { code, discountPercent, maxDiscount, minOrder, quota, used: 0 };
            save();
            return db.vouchers[code];
        },
        applyVoucher(code, orderAmount) {
            const v = db.vouchers[code];
            if (!v || v.used >= v.quota || orderAmount < v.minOrder) {
                return { valid: false, discount: 0, finalAmount: orderAmount };
            }
            const rawDisc = Math.floor((orderAmount * v.discountPercent) / 100);
            const discount = Math.min(v.maxDiscount, rawDisc);
            v.used += 1;
            save();
            return { valid: true, discount, finalAmount: Math.max(0, orderAmount - discount) };
        },
        generateTxtInvoice({ invoiceId, buyerJid, productName, quantity = 1, totalPaid, deliveredItems = [], warrantyDays = 7 }) {
            const nowStr = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
            const lines = [
                '====================================================',
                '           OFFICIAL DIGITAL STORE INVOICE           ',
                '              Powered by Baileys by ryszox          ',
                '====================================================',
                `Invoice ID     : ${invoiceId}`,
                `Tanggal (WIB)  : ${nowStr}`,
                `Pembeli        : ${buyerJid}`,
                `Produk         : ${productName} (x${quantity})`,
                `Total Dibayar  : Rp ${Number(totalPaid).toLocaleString('id-ID')}`,
                `Masa Garansi   : ${warrantyDays} Hari`,
                '----------------------------------------------------',
                'DATA AKUN / PRODUK YANG DIKIRIM:',
                ...(deliveredItems.length ? deliveredItems.map((it, i) => `[#${i + 1}] ${it}`) : ['(Terlampir)']),
                '====================================================',
                'Simpan struk .txt ini sebagai bukti klaim garansi.  '
            ];
            return Buffer.from(lines.join('\n'), 'utf8');
        },
        openWarrantyTicket({ invoiceId, buyerJid, reason }) {
            const ticketId = `TCK-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
            db.tickets[ticketId] = {
                ticketId,
                invoiceId,
                buyerJid,
                reason: String(reason),
                status: 'OPEN',
                createdAt: Date.now()
            };
            save();
            return db.tickets[ticketId];
        }
    };
}

// ============================================================================
// KATEGORI 6: SOCIAL MEDIA DOWNLOADER, SEARCH, ANIME & ISLAMIC UTILITIES (69–88)
// ============================================================================

const socialToolkit = {
    async downloadTikTok(url) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/d/tiktok', { params: { url }, timeout: 30000 });
        return res.data?.data || res.data;
    },
    async downloadInstagram(url) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/d/igdl', { params: { url }, timeout: 30000 });
        return res.data?.data || res.data;
    },
    async downloadYouTubeMp3(url) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/d/ytmp3', { params: { url }, timeout: 35000 });
        return res.data?.data || res.data;
    },
    async downloadYouTubeMp4(url) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/d/ytmp4', { params: { url }, timeout: 35000 });
        return res.data?.data || res.data;
    },
    async downloadSpotify(url) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/d/spotify', { params: { url }, timeout: 30000 });
        return res.data?.data || res.data;
    },
    async downloadMediafire(url) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/d/mediafire', { params: { url }, timeout: 30000 });
        return res.data?.data || res.data;
    },
    async searchPinterest(query) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/s/pinterest', { params: { query }, timeout: 25000 });
        return res.data?.data || res.data;
    },
    async searchSpotify(query) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/s/spotify', { params: { query }, timeout: 25000 });
        return res.data?.data || res.data;
    },
    async getJadwalSholat(kota = 'trenggalek') {
        const res = await httpClient.get('https://api.siputzx.my.id/api/jadwalsholat', { params: { kota }, timeout: 20000 });
        return res.data?.data || res.data;
    },
    async getWeatherInfo(city = 'Trenggalek') {
        const res = await httpClient.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`, { timeout: 15000 });
        return res.data;
    },
    async getBMKGGempa() {
        const res = await httpClient.get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json', { timeout: 15000 });
        return res.data?.Infogempa?.gempa || res.data;
    }
};

// ============================================================================
// KATEGORI 7: TEXT STYLING, PARSING, FUZZY TYPO & INTERACTIVE GAMES (89–108)
// ============================================================================

/**
 * 89. Levenshtein Distance & Fuzzy Command Typo Auto-Corrector (`didYouMean`)
 */
function levenshteinDistance(a = '', b = '') {
    const s = String(a).toLowerCase();
    const t = String(b).toLowerCase();
    const dp = Array.from({ length: s.length + 1 }, () => Array(t.length + 1).fill(0));
    for (let i = 0; i <= s.length; i++) dp[i][0] = i;
    for (let j = 0; j <= t.length; j++) dp[0][j] = j;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            const cost = s[i - 1] === t[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
    }
    return dp[s.length][t.length];
}

function didYouMean(inputCmd, validCommands = [], maxDistance = 2) {
    let best = null;
    let bestDist = Infinity;
    for (const cmd of validCommands) {
        const d = levenshteinDistance(inputCmd, cmd);
        if (d < bestDist && d <= maxDistance) {
            bestDist = d;
            best = cmd;
        }
    }
    if (!best) return null;
    const maxLen = Math.max(String(inputCmd).length, String(best).length, 1);
    const similarity = Math.round(((maxLen - bestDist) / maxLen) * 100);
    return { suggestion: best, distance: bestDist, similarity };
}

/**
 * 90. Unicode Aesthetic Font Transformer (`styleText`)
 */
const FONT_MAPS = {
    monospace: (c) => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d670 + (code - 65));
        if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d68a + (code - 97));
        if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7f6 + (code - 48));
        return c;
    },
    boldSans: (c) => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d5d4 + (code - 65));
        if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d5ee + (code - 97));
        if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7ec + (code - 48));
        return c;
    },
    smallCaps: (c) => {
        const map = {
            a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
            j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
            s: 'ꜱ', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
        };
        return map[c.toLowerCase()] || c;
    }
};

function styleText(text = '', style = 'smallCaps') {
    const fn = FONT_MAPS[style] || FONT_MAPS.smallCaps;
    return Array.from(String(text)).map(fn).join('');
}

/**
 * 91. CLI-Style Flag & Option Parser (`parseCommandFlags`)
 * Parses `--hd --lang=id --count 5` from command text
 */
function parseCommandFlags(text = '') {
    const tokens = String(text).trim().split(/\s+/).filter(Boolean);
    const flags = {};
    const cleanArgs = [];
    for (let i = 0; i < tokens.length; i++) {
        const tok = tokens[i];
        if (tok.startsWith('--')) {
            const raw = tok.slice(2);
            if (raw.includes('=')) {
                const [k, ...v] = raw.split('=');
                flags[k] = v.join('=');
            } else if (i + 1 < tokens.length && !tokens[i + 1].startsWith('-')) {
                flags[raw] = tokens[i + 1];
                i++;
            } else {
                flags[raw] = true;
            }
        } else if (tok.startsWith('-') && tok.length > 1 && isNaN(Number(tok))) {
            flags[tok.slice(1)] = true;
        } else {
            cleanArgs.push(tok);
        }
    }
    return { flags, cleanText: cleanArgs.join(' '), cleanArgs };
}

/**
 * 92. Interactive Multi-Step Wizard / Conversation Session State Machine (`createWizardSession`)
 */
function createWizardManager() {
    const sessions = new Map();
    return {
        sessions,
        start(jid, steps = [], onComplete, timeoutMs = 180000) {
            const state = {
                jid,
                stepIndex: 0,
                steps,
                answers: {},
                onComplete,
                expiresAt: Date.now() + timeoutMs
            };
            sessions.set(jid, state);
            return state.steps[0]?.prompt || '';
        },
        async handleInput(jid, text, sock, m) {
            const s = sessions.get(jid);
            if (!s) return null;
            if (Date.now() > s.expiresAt) {
                sessions.delete(jid);
                return null;
            }
            if (/^(batal|cancel|\.cancel)$/i.test(String(text).trim())) {
                sessions.delete(jid);
                await m.reply('❌ Sesi formulir dibatalkan.');
                return true;
            }
            const currentStep = s.steps[s.stepIndex];
            if (currentStep) {
                s.answers[currentStep.key || `step_${s.stepIndex}`] = text;
            }
            s.stepIndex += 1;
            if (s.stepIndex < s.steps.length) {
                const nextPrompt = s.steps[s.stepIndex].prompt;
                await m.reply(nextPrompt);
                return true;
            }
            sessions.delete(jid);
            if (typeof s.onComplete === 'function') {
                await s.onComplete(s.answers, sock, m);
            }
            return true;
        }
    };
}

/**
 * 93. Interactive Chat Game Session Manager (Tebak Gambar, Asah Otak, Cak Lontong, TicTacToe)
 */
function createGameRoomManager() {
    const rooms = new Map();
    return {
        rooms,
        startQuizRoom(chatJid, { gameName = 'Tebak Kata', question, answer, rewardBalance = 2500, timeoutMs = 60000 }, onTimeout) {
            if (rooms.has(chatJid)) clearTimeout(rooms.get(chatJid).timer);
            const timer = setTimeout(() => {
                const r = rooms.get(chatJid);
                rooms.delete(chatJid);
                if (r && typeof onTimeout === 'function') onTimeout(r);
            }, timeoutMs);
            const room = { chatJid, gameName, question, answer: String(answer).toLowerCase().trim(), rewardBalance, timer };
            rooms.set(chatJid, room);
            return room;
        },
        checkAnswer(chatJid, userText) {
            const room = rooms.get(chatJid);
            if (!room) return null;
            const clean = String(userText || '').toLowerCase().trim();
            if (clean === room.answer) {
                clearTimeout(room.timer);
                rooms.delete(chatJid);
                return { correct: true, room };
            }
            const dist = levenshteinDistance(clean, room.answer);
            if (dist === 1 && room.answer.length >= 4) {
                return { correct: false, almost: true, room };
            }
            return { correct: false, almost: false, room };
        }
    };
}

// ============================================================================
// KATEGORI 8: WEBHOOK SERVER, SSE, IOT SENSOR BRIDGE & CROSS-CHAT RELAY (109–125)
// ============================================================================

/**
 * 109. Built-in Lightweight HTTP Webhook & REST API Server (Zero Express dependency)
 * Receives payment callbacks (Pakasir/Saweria/Tripay), ESP32 IoT sensor payloads, or health checks!
 */
function createWebhookServer(sock, { port = 3080, apiKey = '' } = {}) {
    const routes = new Map();

    const server = http.createServer((req, res) => {
        const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        const pathname = urlObj.pathname;

        if (req.method === 'GET' && pathname === '/health') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true, bot: sock?.user?.id || null, uptime: process.uptime() }));
            return;
        }

        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', async () => {
            let parsed = {};
            try { parsed = body ? JSON.parse(body) : {}; } catch { parsed = { raw: body }; }

            if (apiKey && req.headers['x-api-key'] !== apiKey && urlObj.searchParams.get('key') !== apiKey) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: false, error: 'Unauthorized' }));
                return;
            }

            // Built-in /send endpoint for IoT ESP32 / external web apps
            if (req.method === 'POST' && pathname === '/send') {
                try {
                    const jid = parsed.jid || parsed.to;
                    const text = parsed.text || parsed.message || '';
                    const sent = await sock.sendMessage(jid, { text: String(text) });
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: true, id: sent?.key?.id }));
                } catch (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ ok: false, error: err.message }));
                }
                return;
            }

            const customHandler = routes.get(`${req.method}:${pathname}`);
            if (typeof customHandler === 'function') {
                try {
                    const out = await customHandler(parsed, req, res, sock);
                    if (!res.writableEnded) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(out ?? { ok: true }));
                    }
                } catch (err) {
                    if (!res.writableEnded) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ ok: false, error: err.message }));
                    }
                }
                return;
            }

            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: false, error: 'Not Found' }));
        });
    });

    return {
        server,
        onPost(pathRoute, fn) { routes.set(`POST:${pathRoute}`, fn); },
        onGet(pathRoute, fn) { routes.set(`GET:${pathRoute}`, fn); },
        start(customPort = port) {
            return new Promise((resolve) => {
                server.listen(customPort, () => resolve(customPort));
            });
        },
        stop() {
            return new Promise((resolve) => server.close(() => resolve()));
        }
    };
}

/**
 * 110. Anonymous Confess / Menfess & Live CS Partner Relay Engine
 */
function createMenfessAndRelayManager() {
    const activeRelays = new Map(); // userA -> userB
    return {
        activeRelays,
        linkPair(jidA, jidB) {
            activeRelays.set(jidA, jidB);
            activeRelays.set(jidB, jidA);
        },
        unlinkPair(jid) {
            const partner = activeRelays.get(jid);
            activeRelays.delete(jid);
            if (partner) activeRelays.delete(partner);
            return partner || null;
        },
        getPartner(jid) {
            return activeRelays.get(jid) || null;
        }
    };
}

module.exports = {
    computeReconnectBackoff,
    startSocketWatchdog,
    purgeCorruptSignalSession,
    createTokenBucketLimiter,
    simulateHumanCadence,
    createMessageDeduplicator,
    createDeadLetterOutbox,
    safeBackupAndRestoreCreds,
    startMemoryGuard,
    registerGracefulShutdown,
    useSupabaseAuthState,
    useEncryptedAuthState,
    webpToPng,
    webpToMp4,
    videoToMp3,
    trimMedia,
    createMemeImage,
    generateBratSticker,
    generateCarbonCodeImage,
    buildCanvasCardUrl,
    textToSpeechBuffer,
    stealSticker,
    createEconomyRPGEngine,
    createDigitalStoreEngine,
    socialToolkit,
    levenshteinDistance,
    didYouMean,
    styleText,
    parseCommandFlags,
    createWizardManager,
    createGameRoomManager,
    createWebhookServer,
    createMenfessAndRelayManager
};
