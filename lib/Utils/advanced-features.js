'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

/**
 * 1. Smart Outgoing Message Queue & Anti-Ban Rate Limiter
 */
function createSendQueue(defaultDelayMs = 350) {
    let queue = Promise.resolve();
    let delayMs = defaultDelayMs;

    return {
        setDelay(ms) {
            delayMs = Math.max(0, Number(ms) || 0);
        },
        enqueue(taskFn) {
            const next = queue.then(async () => {
                const res = await taskFn();
                if (delayMs > 0) {
                    await new Promise((r) => setTimeout(r, delayMs));
                }
                return res;
            });
            queue = next.catch(() => {});
            return next;
        }
    };
}

/**
 * 2. Command Plugin / Case Handler Registry (Built-in Bot Framework)
 */
function createCommandRegistry() {
    const commands = new Map();
    const middlewares = [];

    return {
        commands,
        middlewares,
        use(fn) {
            if (typeof fn === 'function') middlewares.push(fn);
        },
        register(triggers, options = {}, handler) {
            if (typeof options === 'function') {
                handler = options;
                options = {};
            }
            const list = Array.isArray(triggers) ? triggers : [triggers];
            for (const t of list) {
                const key = String(t).toLowerCase().trim();
                commands.set(key, {
                    name: key,
                    aliases: list.map((x) => String(x).toLowerCase().trim()),
                    category: options.category || 'main',
                    desc: options.desc || '',
                    ownerOnly: Boolean(options.ownerOnly),
                    groupOnly: Boolean(options.groupOnly),
                    privateOnly: Boolean(options.privateOnly),
                    adminOnly: Boolean(options.adminOnly),
                    botAdminOnly: Boolean(options.botAdminOnly),
                    cooldown: Number(options.cooldown || 0),
                    handler
                });
            }
        },
        async dispatch(sock, m) {
            if (!m || !m.body) return false;
            for (const mw of middlewares) {
                const cont = await mw(sock, m);
                if (cont === false) return false;
            }
            if (!m.isCmd || !m.command) return false;
            const cmdObj = commands.get(m.command.toLowerCase());
            if (!cmdObj || typeof cmdObj.handler !== 'function') return false;

            if (cmdObj.ownerOnly && !m.isOwner) {
                await m.reply('⚠️ Perintah ini khusus Owner Bot.');
                return true;
            }
            if (cmdObj.groupOnly && !m.isGroup) {
                await m.reply('⚠️ Perintah ini hanya dapat digunakan di dalam Grup.');
                return true;
            }
            if (cmdObj.privateOnly && m.isGroup) {
                await m.reply('⚠️ Perintah ini hanya dapat digunakan di Private Chat.');
                return true;
            }
            if (cmdObj.adminOnly && m.isGroup) {
                const isAdm = await sock.isAdmin(m.chat, m.sender);
                if (!isAdm && !m.isOwner) {
                    await m.reply('⚠️ Perintah ini khusus Admin Grup.');
                    return true;
                }
            }
            if (cmdObj.botAdminOnly && m.isGroup) {
                const isBotAdm = await sock.isBotAdmin(m.chat);
                if (!isBotAdm) {
                    await m.reply('⚠️ Bot harus menjadi Admin Grup terlebih dahulu.');
                    return true;
                }
            }
            if (cmdObj.cooldown > 0 && typeof sock.checkCooldown === 'function') {
                const cd = sock.checkCooldown(`${m.sender}:${cmdObj.name}`, cmdObj.cooldown);
                if (cd.onCooldown) {
                    await m.reply(`⏳ Tunggu ${cd.remaining} detik sebelum menggunakan perintah ini lagi.`);
                    return true;
                }
            }

            await cmdObj.handler(m, {
                sock,
                conn: sock,
                text: m.q,
                args: m.args,
                command: m.command,
                prefix: m.prefix,
                isOwner: m.isOwner
            });
            return true;
        }
    };
}

/**
 * 3. Group Guard & Protection Engine (Anti-Link GC/Channel/All, Anti-Toxic, Anti-Virtex, Anti-Bot, Welcome/Goodbye)
 */
function createGroupGuard() {
    const configs = new Map();
    const defaultWords = ['anjing', 'babi', 'bangsat', 'kontol', 'memek', 'asu', 'tolol', 'goblok'];

    function getGroupConfig(groupJid) {
        if (!configs.has(groupJid)) {
            configs.set(groupJid, {
                antiLinkGc: false,
                antiLinkChannel: false,
                antiLinkAll: false,
                antiVirtex: false,
                antiToxic: false,
                antiBot: false,
                antiTagSw: false,
                muteGroup: false,
                welcome: false,
                goodbye: false,
                welcomeText: '👋 Selamat datang @user di grup *@group*!\nSemoga betah ya!',
                goodbyeText: '👋 Selamat tinggal @user dari grup *@group*!',
                kickOnViolation: false,
                badWords: [...defaultWords]
            });
        }
        return configs.get(groupJid);
    }

    async function inspectGroupMessage(sock, m) {
        if (!m || !m.isGroup || m.fromMe || m.isOwner) return false;
        const cfg = getGroupConfig(m.chat);
        const isSenderAdmin = await sock.isAdmin(m.chat, m.sender).catch(() => false);
        if (isSenderAdmin) return false;

        // 1. Mute Group (only admin can chat)
        if (cfg.muteGroup) {
            try { await m.delete(); } catch {}
            return true;
        }

        // 2. Anti-Bot (detect other Baileys/automated bots)
        if (cfg.antiBot && m.isBaileys && !m.fromMe) {
            try { await m.delete(); } catch {}
            if (cfg.kickOnViolation) {
                try { await sock.groupKick(m.chat, [m.sender]); } catch {}
            }
            return true;
        }

        // 3. Anti-Virtex / Lag Text (> 12,000 chars or excessive invisible chars)
        const bodyLen = (m.body || '').length;
        const invisibleCount = ((m.body || '').match(/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF]/g) || []).length;
        if (cfg.antiVirtex && (bodyLen > 12000 || invisibleCount > 1500)) {
            try { await m.delete(); } catch {}
            if (cfg.kickOnViolation) {
                try { await sock.groupKick(m.chat, [m.sender]); } catch {}
            }
            return true;
        }

        // 4. Anti-Tag Status (Status Mention to Group)
        if (cfg.antiTagSw && (m.mtype === 'groupStatusMentionMessage' || m.mtype === 'statusMentionMessage')) {
            try { await m.delete(); } catch {}
            if (cfg.kickOnViolation) {
                try { await sock.groupKick(m.chat, [m.sender]); } catch {}
            }
            return true;
        }

        // 5. Anti-Link Group
        if (cfg.antiLinkGc && m.hasGroupLink) {
            try { await m.delete(); } catch {}
            if (cfg.kickOnViolation) {
                try { await sock.groupKick(m.chat, [m.sender]); } catch {}
            }
            return true;
        }

        // 6. Anti-Link Channel
        if (cfg.antiLinkChannel && m.hasChannelLink) {
            try { await m.delete(); } catch {}
            if (cfg.kickOnViolation) {
                try { await sock.groupKick(m.chat, [m.sender]); } catch {}
            }
            return true;
        }

        // 7. Anti-Link All
        if (cfg.antiLinkAll && m.hasUrl) {
            try { await m.delete(); } catch {}
            if (cfg.kickOnViolation) {
                try { await sock.groupKick(m.chat, [m.sender]); } catch {}
            }
            return true;
        }

        // 8. Anti-Toxic
        if (cfg.antiToxic && m.body) {
            const lower = m.body.toLowerCase();
            const hit = cfg.badWords.some((w) => new RegExp(`\\b${w}\\b`, 'i').test(lower));
            if (hit) {
                try { await m.delete(); } catch {}
                return true;
            }
        }

        return false;
    }

    async function handleGroupParticipantsUpdate(sock, update) {
        const { id: groupJid, participants, action } = update || {};
        if (!groupJid || !Array.isArray(participants)) return;
        const cfg = getGroupConfig(groupJid);
        if (!cfg.welcome && !cfg.goodbye) return;

        let groupName = 'Grup';
        try {
            const md = await sock.groupMetadata(groupJid);
            if (md?.subject) groupName = md.subject;
        } catch {}

        for (const p of participants) {
            const userJid = typeof p === 'string' ? p : (p.id || p.phoneNumber || '');
            if (!userJid) continue;
            const cleanJid = sock.decodeJid(userJid);
            const tag = `@${cleanJid.split('@')[0]}`;

            if (action === 'add' && cfg.welcome) {
                const text = cfg.welcomeText
                    .replace(/@user/gi, tag)
                    .replace(/@group/gi, groupName);
                try {
                    await sock.sendMessage(groupJid, { text, mentions: [cleanJid] });
                } catch {}
            } else if (action === 'remove' && cfg.goodbye) {
                const text = cfg.goodbyeText
                    .replace(/@user/gi, tag)
                    .replace(/@group/gi, groupName);
                try {
                    await sock.sendMessage(groupJid, { text, mentions: [cleanJid] });
                } catch {}
            }
        }
    }

    return {
        configs,
        getGroupConfig,
        setGroupConfig(groupJid, patch = {}) {
            const current = getGroupConfig(groupJid);
            Object.assign(current, patch);
            return current;
        },
        inspectGroupMessage,
        handleGroupParticipantsUpdate
    };
}

/**
 * 4. Multi-Adapter Auth State (Memory / Single-JSON / Custom Callback / SQL-Supabase Ready)
 */
async function useMemoryAuthState() {
    let official;
    try {
        official = require('baileys-official');
    } catch {}
    const initAuthCreds = official?.initAuthCreds || (() => ({}));
    const BufferJSON = official?.BufferJSON || {
        replacer: (k, v) => v,
        reviver: (k, v) => v
    };

    const creds = initAuthCreds();
    const keysStore = {};

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    for (const id of ids) {
                        const val = keysStore[`${type}-${id}`];
                        if (val !== undefined) data[id] = val;
                    }
                    return data;
                },
                set: async (data) => {
                    for (const category of Object.keys(data)) {
                        for (const id of Object.keys(data[category])) {
                            const value = data[category][id];
                            const k = `${category}-${id}`;
                            if (value) keysStore[k] = value;
                            else delete keysStore[k];
                        }
                    }
                }
            }
        },
        saveCreds: async () => {},
        exportToJSON: () => JSON.stringify({ creds, keysStore }, BufferJSON.replacer),
        importFromJSON: (jsonStr) => {
            const parsed = JSON.parse(jsonStr, BufferJSON.reviver);
            if (parsed.creds) Object.assign(creds, parsed.creds);
            if (parsed.keysStore) Object.assign(keysStore, parsed.keysStore);
        }
    };
}

async function useSingleFileAuthState(filePath = './session.json') {
    let official;
    try {
        official = require('baileys-official');
    } catch {}
    const initAuthCreds = official?.initAuthCreds || (() => ({}));
    const BufferJSON = official?.BufferJSON || {
        replacer: (k, v) => v,
        reviver: (k, v) => v
    };

    let creds;
    let keys = {};

    if (fs.existsSync(filePath)) {
        try {
            const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'), BufferJSON.reviver);
            creds = raw.creds || initAuthCreds();
            keys = raw.keys || {};
        } catch {
            creds = initAuthCreds();
        }
    } else {
        creds = initAuthCreds();
    }

    const saveState = () => {
        try {
            const dir = path.dirname(filePath);
            if (dir && !fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(filePath, JSON.stringify({ creds, keys }, BufferJSON.replacer, 2), 'utf8');
        } catch {}
    };

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    for (const id of ids) {
                        const v = keys[`${type}-${id}`];
                        if (v !== undefined) data[id] = v;
                    }
                    return data;
                },
                set: async (data) => {
                    for (const category of Object.keys(data)) {
                        for (const id of Object.keys(data[category])) {
                            const value = data[category][id];
                            const k = `${category}-${id}`;
                            if (value) keys[k] = value;
                            else delete keys[k];
                        }
                    }
                    saveState();
                }
            }
        },
        saveState,
        saveCreds: saveState
    };
}

/**
 * 5. Hot-Reload File Watcher Utility (Auto-reload plugins/cases without restarting Node.js)
 */
function watchPluginFile(filePath, onReload) {
    const resolved = path.resolve(filePath);
    if (!fs.existsSync(resolved)) return null;
    let debounceTimer = null;

    const watcher = fs.watch(resolved, () => {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            try {
                delete require.cache[require.resolve(resolved)];
                const reloaded = require(resolved);
                if (typeof onReload === 'function') onReload(reloaded, resolved);
            } catch (err) {
                console.error('\x1b[31m[Baileys Error]\x1b[0m Hot-reload error in', path.basename(resolved), ':', err.message);
            }
        }, 250);
    });
    return watcher;
}

module.exports = {
    createSendQueue,
    createCommandRegistry,
    createGroupGuard,
    useMemoryAuthState,
    useSingleFileAuthState,
    watchPluginFile
};
