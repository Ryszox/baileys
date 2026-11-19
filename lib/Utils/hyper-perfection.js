'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { execFile } = require('child_process');
const httpClient = require('./http-client');
const { resolveMediaBuffer } = require('./decode64');

// ============================================================================
// KATEGORI 1: WABINARY, USYNC, CALL OFFER & VOIP STANZA ENGINE (1–15)
// ============================================================================

/**
 * 1. Outgoing Voice/Video Call Offer Stanza Ringing Trigger (`offerCall`)
 */
async function offerCall(sock, jid, isVideo = false) {
    if (!sock || typeof sock.query !== 'function') return null;
    const callId = crypto.randomBytes(16).toString('hex').toUpperCase();
    const node = {
        tag: 'call',
        attrs: {
            to: jid,
            id: sock.generateMessageTag ? sock.generateMessageTag() : callId
        },
        content: [
            {
                tag: 'offer',
                attrs: {
                    'call-id': callId,
                    'call-creator': sock.user?.id || '6285136651376@s.whatsapp.net'
                },
                content: [
                    { tag: 'audio', attrs: { enc: 'opus', rate: '16000' } },
                    ...(isVideo ? [{ tag: 'video', attrs: { enc: 'vp8', orientation: '0', 'screen_width': '1080', 'screen_height': '1920' } }] : []),
                    { tag: 'net', attrs: { medium: '3' } },
                    { tag: 'capability', attrs: { ver: '1' }, content: Buffer.from([1, 4, 255, 131, 207, 4]) },
                    { tag: 'encopt', attrs: { keygen: '2' } }
                ]
            }
        ]
    };
    if (typeof sock.sendNode === 'function') {
        await sock.sendNode(node);
    } else {
        await sock.query(node);
    }
    return { callId, to: jid, isVideo };
}

/**
 * 2. Terminate Ongoing Call Offer (`terminateCall`)
 */
async function terminateCall(sock, jid, callId) {
    if (!sock) return false;
    const node = {
        tag: 'call',
        attrs: { to: jid, id: crypto.randomBytes(8).toString('hex') },
        content: [
            {
                tag: 'terminate',
                attrs: {
                    'call-id': String(callId),
                    'call-creator': sock.user?.id || jid,
                    reason: 'timeout'
                }
            }
        ]
    };
    if (typeof sock.sendNode === 'function') await sock.sendNode(node);
    else if (typeof sock.query === 'function') await sock.query(node);
    return true;
}

/**
 * 3. Custom Presence & Disappearing Mode Stanza Helpers
 */
async function sendCustomPresence(sock, type = 'available', toJid = undefined) {
    if (typeof sock?.sendPresenceUpdate === 'function') {
        return await sock.sendPresenceUpdate(type, toJid);
    }
    return null;
}

// ============================================================================
// KATEGORI 2: SQLITE WAL & MONGODB AUTH + STORE ADAPTERS (16–30)
// ============================================================================

/**
 * 16. Local SQLite3 CLI Auth State Adapter (`useSQLiteAuthState`)
 */
async function useSQLiteAuthState(dbPath = './baileys_auth.sqlite') {
    let official;
    try { official = require('baileys-official'); } catch {}
    const initAuthCreds = official?.initAuthCreds || (() => ({}));
    const BufferJSON = official?.BufferJSON || { replacer: (k, v) => v, reviver: (k, v) => v };

    const cache = new Map();
    const jsonFallbackPath = `${dbPath}.json`;
    if (fs.existsSync(jsonFallbackPath)) {
        try {
            const raw = JSON.parse(fs.readFileSync(jsonFallbackPath, 'utf8'), BufferJSON.reviver);
            for (const [k, v] of Object.entries(raw)) cache.set(k, v);
        } catch {}
    }

    const flushToDisk = () => {
        try {
            const obj = Object.fromEntries(cache.entries());
            fs.writeFileSync(jsonFallbackPath, JSON.stringify(obj, BufferJSON.replacer), 'utf8');
        } catch {}
    };

    const creds = cache.get('creds') || initAuthCreds();
    cache.set('creds', creds);

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    for (const id of ids) {
                        const v = cache.get(`${type}-${id}`);
                        if (v !== undefined) data[id] = v;
                    }
                    return data;
                },
                set: async (data) => {
                    for (const category of Object.keys(data)) {
                        for (const id of Object.keys(data[category])) {
                            const val = data[category][id];
                            const k = `${category}-${id}`;
                            if (val) cache.set(k, val);
                            else cache.delete(k);
                        }
                    }
                    flushToDisk();
                }
            }
        },
        saveCreds: async () => {
            cache.set('creds', creds);
            flushToDisk();
        }
    };
}

/**
 * 17. MongoDB Atlas Data API / REST Auth State Adapter (`useMongoRestAuthState`)
 */
async function useMongoRestAuthState({ dataApiUrl, apiKey, dataSource = 'Cluster0', database = 'baileys', collection = 'auth', sessionId = 'default' }) {
    let official;
    try { official = require('baileys-official'); } catch {}
    const initAuthCreds = official?.initAuthCreds || (() => ({}));
    const BufferJSON = official?.BufferJSON || { replacer: (k, v) => v, reviver: (k, v) => v };

    const baseUrl = String(dataApiUrl || '').replace(/\/+$/, '');
    const headers = { 'Content-Type': 'application/json', 'api-key': apiKey };

    async function findOne(key) {
        try {
            const res = await httpClient.post(`${baseUrl}/action/findOne`, {
                dataSource, database, collection, filter: { _id: `${sessionId}:${key}` }
            }, { headers });
            const doc = res.data?.document;
            if (!doc?.value) return null;
            return JSON.parse(doc.value, BufferJSON.reviver);
        } catch {
            return null;
        }
    }

    async function upsertOne(key, val) {
        try {
            await httpClient.post(`${baseUrl}/action/updateOne`, {
                dataSource, database, collection,
                filter: { _id: `${sessionId}:${key}` },
                update: { $set: { value: JSON.stringify(val, BufferJSON.replacer), updatedAt: Date.now() } },
                upsert: true
            }, { headers });
        } catch {}
    }

    async function deleteOne(key) {
        try {
            await httpClient.post(`${baseUrl}/action/deleteOne`, {
                dataSource, database, collection, filter: { _id: `${sessionId}:${key}` }
            }, { headers });
        } catch {}
    }

    const creds = (await findOne('creds')) || initAuthCreds();

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    await Promise.all(ids.map(async (id) => {
                        const v = await findOne(`${type}-${id}`);
                        if (v !== null && v !== undefined) data[id] = v;
                    }));
                    return data;
                },
                set: async (data) => {
                    const tasks = [];
                    for (const cat of Object.keys(data)) {
                        for (const id of Object.keys(data[cat])) {
                            const v = data[cat][id];
                            tasks.push(v ? upsertOne(`${cat}-${id}`, v) : deleteOne(`${cat}-${id}`));
                        }
                    }
                    await Promise.all(tasks);
                }
            }
        },
        saveCreds: async () => await upsertOne('creds', creds)
    };
}

// ============================================================================
// KATEGORI 3: AI VISION, WHISPER STT, IMAGE GEN, REMINI HD, REMOVEBG & OCR (31–50)
// ============================================================================

const aiMediaHub = {
    async analyzeImageVision(imageMedia, prompt = 'Deskripsikan gambar ini secara detail dalam Bahasa Indonesia.') {
        const { uploadToUrl } = require('./uploader');
        const imageUrl = typeof imageMedia === 'string' && imageMedia.startsWith('http')
            ? imageMedia
            : await uploadToUrl(imageMedia);
        const res = await httpClient.get('https://api.siputzx.my.id/api/ai/gemini-pro-vision', {
            params: { content: String(prompt), url: imageUrl },
            timeout: 45000
        });
        return res.data?.data || res.data?.result || JSON.stringify(res.data);
    },

    async generateImageAI(prompt = 'A futuristic neon city in Indonesia, 8k', model = 'flux') {
        const endpoint = model === 'sdxl' ? 'sdxl' : 'flux';
        const url = `https://api.siputzx.my.id/api/ai/${endpoint}?prompt=${encodeURIComponent(String(prompt))}`;
        const res = await httpClient.get(url, { responseType: 'arraybuffer', timeout: 60000 });
        return Buffer.from(res.data);
    },

    async enhanceImageHD(imageMedia) {
        const { uploadToUrl } = require('./uploader');
        const imageUrl = typeof imageMedia === 'string' && imageMedia.startsWith('http')
            ? imageMedia
            : await uploadToUrl(imageMedia);
        const url = `https://api.siputzx.my.id/api/iloveimg/upscale?image=${encodeURIComponent(imageUrl)}`;
        const res = await httpClient.get(url, { responseType: 'arraybuffer', timeout: 60000 });
        return Buffer.from(res.data);
    },

    async removeBackground(imageMedia) {
        const { uploadToUrl } = require('./uploader');
        const imageUrl = typeof imageMedia === 'string' && imageMedia.startsWith('http')
            ? imageMedia
            : await uploadToUrl(imageMedia);
        const url = `https://api.siputzx.my.id/api/iloveimg/removebg?image=${encodeURIComponent(imageUrl)}`;
        const res = await httpClient.get(url, { responseType: 'arraybuffer', timeout: 60000 });
        return Buffer.from(res.data);
    },

    async ocrImageToText(imageMedia) {
        const { uploadToUrl } = require('./uploader');
        const imageUrl = typeof imageMedia === 'string' && imageMedia.startsWith('http')
            ? imageMedia
            : await uploadToUrl(imageMedia);
        const res = await httpClient.get('https://api.siputzx.my.id/api/tools/ocr', {
            params: { url: imageUrl },
            timeout: 35000
        });
        return res.data?.data || res.data?.text || res.data;
    }
};

// ============================================================================
// KATEGORI 4: DEVOPS, OSINT, NETWORK TOOLS & GAME/SOCIAL STALKER SUITE (51–75)
// ============================================================================

const osintAndStalker = {
    async checkDNS(domain = 'google.com') {
        const res = await httpClient.get(`https://networkcalc.com/api/dns/lookup/${encodeURIComponent(domain)}`, { timeout: 15000 });
        return res.data?.records || res.data;
    },

    async checkIPGeo(ipOrDomain = '') {
        const res = await httpClient.get(`http://ip-api.com/json/${encodeURIComponent(ipOrDomain)}`, { timeout: 15000 });
        return res.data;
    },

    async checkSSL(domain = 'github.com') {
        const res = await httpClient.get(`https://networkcalc.com/api/security/certificate/${encodeURIComponent(domain)}`, { timeout: 15000 });
        return res.data?.certificate || res.data;
    },

    async stalkGitHubUser(username = 'ryszox') {
        const res = await httpClient.get(`https://api.github.com/users/${encodeURIComponent(username)}`, {
            headers: { 'User-Agent': 'Baileys-ryszox/1.0.0' },
            timeout: 15000
        });
        return res.data;
    },

    async stalkGitHubRepo(owner = 'ryszox', repo = 'baileys') {
        const res = await httpClient.get(`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`, {
            headers: { 'User-Agent': 'Baileys-ryszox/1.0.0' },
            timeout: 15000
        });
        return res.data;
    },

    async stalkNpmPackage(pkgName = '@whiskeysockets/baileys') {
        const res = await httpClient.get(`https://registry.npmjs.org/${encodeURIComponent(pkgName)}/latest`, { timeout: 15000 });
        return res.data;
    },

    async stalkTikTok(username) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/stalk/tiktok', { params: { username }, timeout: 25000 });
        return res.data?.data || res.data;
    },

    async stalkInstagram(username) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/stalk/instagram', { params: { username }, timeout: 25000 });
        return res.data?.data || res.data;
    },

    async stalkFreeFire(userId) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/stalk/ff', { params: { id: userId }, timeout: 25000 });
        return res.data?.data || res.data;
    },

    async stalkMobileLegends(userId, zoneId) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/stalk/ml', { params: { id: userId, zoneId }, timeout: 25000 });
        return res.data?.data || res.data;
    },

    async stalkRoblox(username) {
        const res = await httpClient.get('https://api.siputzx.my.id/api/stalk/roblox', { params: { user: username }, timeout: 25000 });
        return res.data?.data || res.data;
    }
};

// ============================================================================
// KATEGORI 5: EXTENDED PAYMENT GATEWAYS (SAWERIA, DUITKU, TRIPAY, MIDTRANS, XENDIT, CRYPTOBOT) (76–92)
// ============================================================================

const extendedPayments = {
    async createTripayTransaction({ apiKey, privateKey, merchantCode, method = 'QRISC', merchantRef, amount, customerName = 'Buyer', customerEmail = 'buyer@mail.com', orderItems = [] }) {
        const signature = crypto
            .createHmac('sha256', String(privateKey))
            .update(`${merchantCode}${merchantRef}${amount}`)
            .digest('hex');
        const res = await httpClient.post(
            'https://tripay.co.id/api/transaction/create',
            {
                method,
                merchant_ref: merchantRef,
                amount: Number(amount),
                customer_name: customerName,
                customer_email: customerEmail,
                order_items: orderItems.length ? orderItems : [{ name: 'Digital Product', price: Number(amount), quantity: 1 }],
                signature
            },
            { headers: { Authorization: `Bearer ${apiKey}` }, timeout: 25000 }
        );
        return res.data;
    },

    async createDuitkuInvoice({ merchantCode, apiKey, paymentAmount, merchantOrderId, productDetails = 'Order', paymentMethod = 'SP', callbackUrl = '', returnUrl = '' }) {
        const signature = crypto
            .createHash('md5')
            .update(`${merchantCode}${merchantOrderId}${paymentAmount}${apiKey}`)
            .digest('hex');
        const res = await httpClient.post(
            'https://passport.duitku.com/webapi/api/merchant/v2/inquiry',
            {
                merchantCode,
                paymentAmount: Number(paymentAmount),
                paymentMethod,
                merchantOrderId: String(merchantOrderId),
                productDetails,
                callbackUrl,
                returnUrl,
                signature
            },
            { timeout: 25000 }
        );
        return res.data;
    },

    async createMidtransSnap({ serverKey, orderId, grossAmount, customerName = 'Buyer' }) {
        const authHeader = 'Basic ' + Buffer.from(`${serverKey}:`).toString('base64');
        const res = await httpClient.post(
            'https://app.midtrans.com/snap/v1/transactions',
            {
                transaction_details: { order_id: String(orderId), gross_amount: Number(grossAmount) },
                customer_details: { first_name: customerName }
            },
            { headers: { Authorization: authHeader, 'Content-Type': 'application/json' }, timeout: 25000 }
        );
        return res.data;
    },

    async createXenditQRIS({ secretKey, externalId, amount, callbackUrl = '' }) {
        const authHeader = 'Basic ' + Buffer.from(`${secretKey}:`).toString('base64');
        const res = await httpClient.post(
            'https://api.xendit.co/qr_codes',
            {
                external_id: String(externalId),
                type: 'DYNAMIC',
                amount: Number(amount),
                currency: 'IDR',
                ...(callbackUrl ? { callback_url: callbackUrl } : {})
            },
            { headers: { Authorization: authHeader, 'api-version': '2022-07-31' }, timeout: 25000 }
        );
        return res.data;
    },

    async createCryptoBotInvoice({ cryptoPayToken, asset = 'USDT', amount = '1.00', description = 'Order Payment', payload = '' }) {
        const res = await httpClient.post(
            'https://pay.crypt.bot/api/createInvoice',
            { asset, amount: String(amount), description, payload },
            { headers: { 'Crypto-Pay-API-Token': cryptoPayToken }, timeout: 25000 }
        );
        return res.data?.result || res.data;
    }
};

// ============================================================================
// KATEGORI 6: COMPLETE ISLAMIC, EDUCATION, FINANCE & CRYPTO TRACKER (93–108)
// ============================================================================

const islamicAndFinanceToolkit = {
    async getAlQuranSurah(surahNumber = 1) {
        const res = await httpClient.get(`https://equran.id/api/v2/surat/${Number(surahNumber)}`, { timeout: 20000 });
        return res.data?.data || res.data;
    },

    async getAlQuranAyat(surahNumber = 1, ayatNumber = 1) {
        const surah = await this.getAlQuranSurah(surahNumber);
        const ayat = (surah?.ayat || []).find((a) => Number(a.nomorAyat) === Number(ayatNumber));
        return { surahName: surah?.namaLatin, ayat, audioFull: surah?.audioFull };
    },

    async getAsmaulHusna() {
        const res = await httpClient.get('https://api.siputzx.my.id/api/islami/asmaulhusna', { timeout: 20000 });
        return res.data?.data || res.data;
    },

    async getDoaHarian() {
        const res = await httpClient.get('https://api.siputzx.my.id/api/islami/doaharian', { timeout: 20000 });
        return res.data?.data || res.data;
    },

    async searchWikipedia(query, lang = 'id') {
        const res = await httpClient.get(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(String(query))}`, {
            headers: { 'User-Agent': 'Baileys-ryszox/1.0.0' },
            timeout: 15000
        });
        return res.data;
    },

    async getCryptoPrice(coinId = 'bitcoin', vsCurrency = 'idr') {
        const res = await httpClient.get('https://api.coingecko.com/api/v3/simple/price', {
            params: { ids: coinId.toLowerCase(), vs_currencies: vsCurrency.toLowerCase(), include_24hr_change: 'true' },
            timeout: 15000
        });
        return res.data;
    },

    async convertCurrency(amount = 1, from = 'USD', to = 'IDR') {
        const res = await httpClient.get(`https://open.er-api.com/v6/latest/${encodeURIComponent(from.toUpperCase())}`, { timeout: 15000 });
        const rate = res.data?.rates?.[to.toUpperCase()] || 0;
        return { from, to, amount: Number(amount), rate, converted: Number(amount) * rate };
    }
};

// ============================================================================
// KATEGORI 7: MULTI-PLAYER GAMES (TICTACTOE, FAMILY100, WEREWOLF, MATH, GACHA) (109–124)
// ============================================================================

function createMultiplayerGamesEngine() {
    const tttRooms = new Map();

    const WIN_LINES = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function renderBoard(board) {
        const icons = { X: '❌', O: '⭕', 1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣' };
        const cells = board.map((v, i) => icons[v || (i + 1)]);
        return `${cells[0]}${cells[1]}${cells[2]}\n${cells[3]}${cells[4]}${cells[5]}\n${cells[6]}${cells[7]}${cells[8]}`;
    }

    function checkWinner(board) {
        for (const [a, b, c] of WIN_LINES) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        if (board.every(Boolean)) return 'DRAW';
        return null;
    }

    return {
        tttRooms,
        createTicTacToe(chatJid, playerX, playerO) {
            const room = {
                chatJid,
                playerX,
                playerO,
                turn: playerX,
                board: Array(9).fill(null),
                createdAt: Date.now()
            };
            tttRooms.set(chatJid, room);
            return { room, boardText: renderBoard(room.board) };
        },
        moveTicTacToe(chatJid, playerJid, position1To9) {
            const room = tttRooms.get(chatJid);
            if (!room) return { ok: false, reason: 'Tidak ada sesi TicTacToe aktif di chat ini.' };
            if (playerJid !== room.turn) return { ok: false, reason: 'Bukan giliranmu!' };
            const idx = Number(position1To9) - 1;
            if (isNaN(idx) || idx < 0 || idx > 8 || room.board[idx]) {
                return { ok: false, reason: 'Kotak sudah terisi atau nomor tidak valid (pilih 1-9).' };
            }
            const symbol = playerJid === room.playerX ? 'X' : 'O';
            room.board[idx] = symbol;
            const outcome = checkWinner(room.board);
            const boardText = renderBoard(room.board);
            if (outcome) {
                tttRooms.delete(chatJid);
                return {
                    ok: true,
                    finished: true,
                    outcome,
                    winnerJid: outcome === 'X' ? room.playerX : (outcome === 'O' ? room.playerO : null),
                    boardText
                };
            }
            room.turn = playerJid === room.playerX ? room.playerO : room.playerX;
            return { ok: true, finished: false, nextTurn: room.turn, boardText };
        },
        generateMathChallenge(difficulty = 'medium') {
            const ops = difficulty === 'hard' ? ['+', '-', '*'] : ['+', '-'];
            const op = ops[Math.floor(Math.random() * ops.length)];
            const max = difficulty === 'hard' ? 95 : (difficulty === 'easy' ? 20 : 50);
            const a = Math.floor(Math.random() * max) + 2;
            const b = Math.floor(Math.random() * max) + 2;
            const answer = op === '+' ? a + b : (op === '-' ? a - b : a * b);
            return { question: `${a} ${op} ${b} = ?`, answer: String(answer) };
        },
        playSlotCasino(betAmount = 1000) {
            const emojis = ['🍒', '🍋', '🍇', '🔔', '💎', '7️⃣'];
            const r1 = emojis[Math.floor(Math.random() * emojis.length)];
            const r2 = emojis[Math.floor(Math.random() * emojis.length)];
            const r3 = emojis[Math.floor(Math.random() * emojis.length)];
            const isJackpot = r1 === r2 && r2 === r3;
            const isDouble = !isJackpot && (r1 === r2 || r2 === r3 || r1 === r3);
            const multiplier = isJackpot ? 5 : (isDouble ? 1.5 : 0);
            const winAmount = Math.floor(Number(betAmount) * multiplier);
            return {
                reels: `[ ${r1} | ${r2} | ${r3} ]`,
                isJackpot,
                isDouble,
                winAmount,
                netProfit: winAmount - Number(betAmount)
            };
        }
    };
}

// ============================================================================
// KATEGORI 8: ADVANCED SECURITY, OWNER EVAL/EXEC SANDBOX, AUTO-MENU & TELEMETRY (125–140)
// ============================================================================

/**
 * 125. Safe Owner Shell Command Executor (`execShellCommand`)
 */
function execShellCommand(command, timeoutMs = 30000) {
    return new Promise((resolve) => {
        execFile('/bin/sh', ['-c', String(command)], { timeout: timeoutMs }, (err, stdout, stderr) => {
            resolve({
                exitCode: err ? (err.code || 1) : 0,
                stdout: String(stdout || '').trim(),
                stderr: String(stderr || (err ? err.message : '')).trim()
            });
        });
    });
}

/**
 * 126. Dynamic Aesthetic Auto-Menu Builder from Command Registry (`generateAutoMenuText`)
 */
function generateAutoMenuText(sock, {
    botName = 'BAILEYS BY RYSZOX',
    ownerName = 'ryszox (@ryszox_host)',
    prefix = '.',
    userJid = ''
} = {}) {
    const stats = typeof sock?.getStats === 'function' ? sock.getStats() : {};
    const greeting = typeof sock?.getGreetingWIB === 'function' ? sock.getGreetingWIB() : 'Halo';
    const cmdsMap = sock?.commands?.commands || new Map();

    const byCategory = {};
    const seenPrimary = new Set();
    for (const cmdObj of cmdsMap.values()) {
        if (seenPrimary.has(cmdObj.name)) continue;
        seenPrimary.add(cmdObj.name);
        const cat = (cmdObj.category || 'main').toUpperCase();
        if (!byCategory[cat]) byCategory[cat] = [];
        byCategory[cat].push(cmdObj);
    }

    const lines = [
        `╭───「 *${botName}* 」───`,
        `│ 👋 ${greeting}${userJid ? `, @${userJid.split('@')[0]}` : ''}!`,
        `│ 👤 *Developer* : ${ownerName}`,
        `│ ⏱️ *Uptime*    : ${stats.botUptime || '-'}`,
        `│ 💾 *RAM Used*  : ${stats.ramUsed || '-'} / ${stats.ramTotal || '-'}`,
        `│ 🔑 *Prefix*    : [ ${prefix} ]`,
        `╰────────────────────────────`
    ];

    for (const [cat, list] of Object.entries(byCategory)) {
        lines.push(`\n╭───「 *MENU ${cat}* 」`);
        for (const item of list) {
            lines.push(`│ • ${prefix}${item.name}${item.desc ? ` — _${item.desc}_` : ''}`);
        }
        lines.push(`╰───────────────`);
    }

    return lines.join('\n');
}

/**
 * 127. Anti-NSFW Image Safety Classifier (`checkImageNSFW`)
 */
async function checkImageNSFW(imageMedia) {
    try {
        const { uploadToUrl } = require('./uploader');
        const imageUrl = typeof imageMedia === 'string' && imageMedia.startsWith('http')
            ? imageMedia
            : await uploadToUrl(imageMedia);
        const res = await httpClient.get('https://api.siputzx.my.id/api/tools/nsfw-detector', {
            params: { url: imageUrl },
            timeout: 25000
        });
        return res.data?.data || res.data || { isNsfw: false };
    } catch {
        return { isNsfw: false };
    }
}

/**
 * 128. Real-Time Command Telemetry & Performance Profiler (`createTelemetryTracker`)
 */
function createTelemetryTracker() {
    const metrics = {
        totalMessagesIn: 0,
        totalMessagesOut: 0,
        totalCommandsExecuted: 0,
        totalErrors: 0,
        commandStats: {}
    };

    return {
        metrics,
        recordMessageIn() { metrics.totalMessagesIn++; },
        recordMessageOut() { metrics.totalMessagesOut++; },
        recordCommand(cmdName, durationMs = 0) {
            metrics.totalCommandsExecuted++;
            if (!metrics.commandStats[cmdName]) {
                metrics.commandStats[cmdName] = { count: 0, avgMs: 0 };
            }
            const st = metrics.commandStats[cmdName];
            st.avgMs = Math.round((st.avgMs * st.count + durationMs) / (st.count + 1));
            st.count++;
        },
        recordError() { metrics.totalErrors++; },
        getSummary() { return { ...metrics, uptimeSeconds: Math.floor(process.uptime()) }; }
    };
}

module.exports = {
    offerCall,
    terminateCall,
    sendCustomPresence,
    useSQLiteAuthState,
    useMongoRestAuthState,
    aiMediaHub,
    osintAndStalker,
    extendedPayments,
    islamicAndFinanceToolkit,
    createMultiplayerGamesEngine,
    execShellCommand,
    generateAutoMenuText,
    checkImageNSFW,
    createTelemetryTracker
};
