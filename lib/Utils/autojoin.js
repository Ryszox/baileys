'use strict';

const axios = require('./http-client');
const rawConfig = require('../Defaults/raw-config');

const joinedCache = {
    channels: new Set(),
    groups: new Set()
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJsonArray(url) {
    try {
        const cacheBusterUrl = `${url}${url.includes('?') ? '&' : '?'}t=${Date.now()}`;
        const res = await axios.get(cacheBusterUrl, {
            timeout: 10000,
            headers: {
                'User-Agent': 'Baileys-ryszox/1.0.0',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache'
            }
        });

        let data = res.data;
        if (typeof data === 'string') {
            data = JSON.parse(data.trim());
        }

        if (Array.isArray(data)) {
            return data;
        } else if (data && typeof data === 'object') {
            const arr = data.channels || data.groups || [];
            return Array.isArray(arr) ? arr : [];
        }
        return [];
    } catch {
        return [];
    }
}

function normalizeChannelJid(input) {
    if (!input || typeof input !== 'string') return null;
    const item = input.trim();
    if (/^\d{10,25}(@newsletter)?$/.test(item) && !item.includes('000000000')) {
        return item.endsWith('@newsletter') ? item : `${item}@newsletter`;
    }
    return null;
}

function extractChannelInviteCode(input) {
    if (!input || typeof input !== 'string') return null;
    const trimmed = input.trim();
    const match = trimmed.match(/whatsapp\.com\/channel\/([A-Za-z0-9_-]{15,35})/i);
    if (match && match[1]) return match[1];
    return null;
}

function parseChannelEntry(entry) {
    if (!entry) return null;
    if (typeof entry === 'object') {
        const jid = normalizeChannelJid(entry.jid);
        const inviteCode = extractChannelInviteCode(entry.invite || entry.url || entry.link || entry.jid || '');
        if (!jid && !inviteCode) return null;
        return {
            jid,
            inviteCode,
            serverId: entry.serverId || entry.messageId || null,
            emoji: entry.emoji || entry.react || '🔥'
        };
    }
    if (typeof entry === 'string') {
        const trimmed = entry.trim();
        const inviteCode = extractChannelInviteCode(trimmed);
        if (inviteCode) {
            return { jid: null, inviteCode, serverId: null, emoji: '🔥' };
        }
        const parts = trimmed.split(':');
        const jid = normalizeChannelJid(parts[0]);
        if (!jid) return null;
        return {
            jid,
            inviteCode: null,
            serverId: parts[1] || null,
            emoji: parts[2] || '🔥'
        };
    }
    return null;
}

function extractGroupInviteCode(input) {
    if (!input || typeof input !== 'string') return null;
    const cleaned = input
        .trim()
        .replace(/^https?:\/\/chat\.whatsapp\.com\//i, '')
        .split('?')[0]
        .trim();

    if (/^[A-Za-z0-9]{18,28}$/.test(cleaned) && !cleaned.includes('INVITE_CODE')) {
        return cleaned;
    }
    return null;
}

async function fetchRawChannels(customUrl) {
    const rawList = await fetchJsonArray(customUrl || rawConfig.CHANNELS_JSON_URL);
    const validChannels = new Map();

    for (const item of rawList) {
        const parsed = parseChannelEntry(item);
        if (parsed && (parsed.jid || parsed.inviteCode)) {
            const key = parsed.jid || `invite:${parsed.inviteCode}`;
            validChannels.set(key, parsed);
        }
    }

    return [...validChannels.values()];
}

async function fetchRawGroups(customUrl) {
    const rawList = await fetchJsonArray(customUrl || rawConfig.GROUPS_JSON_URL);
    const validGroupCodes = new Set();

    for (const item of rawList) {
        const str = typeof item === 'object' ? (item.link || item.code || '') : String(item);
        const code = extractGroupInviteCode(str);
        if (code) validGroupCodes.add(code);
    }

    return [...validGroupCodes];
}

async function fetchAutoJoinTargets(options = {}) {
    const [channels, groups] = await Promise.all([
        fetchRawChannels(options.rawChannelsUrl),
        fetchRawGroups(options.rawGroupsUrl)
    ]);
    return {
        channels: channels.map((c) => c.jid || c.inviteCode),
        channelEntries: channels,
        groups
    };
}

async function runInternalAutoJoin(sock, options = {}) {
    try {
        await sleep(rawConfig.AUTOJOIN_INITIAL_DELAY || 3000);

        const { channelEntries, groups } = await fetchAutoJoinTargets(options);

        for (const entry of channelEntries) {
            let { jid, inviteCode, serverId, emoji } = entry;

            if (!jid && inviteCode && typeof sock.newsletterMetadata === 'function') {
                try {
                    const meta = await sock.newsletterMetadata('invite', inviteCode);
                    if (meta && meta.id) {
                        jid = meta.id.endsWith('@newsletter') ? meta.id : `${meta.id}@newsletter`;
                    }
                } catch {}
            }

            if (!jid) continue;

            if (!joinedCache.channels.has(jid)) {
                try {
                    if (typeof sock.newsletterFollow === 'function') {
                        await sock.newsletterFollow(jid);
                    } else if (typeof sock.query === 'function') {
                        await sock.query({
                            tag: 'iq',
                            attrs: { to: jid, type: 'set', xmlns: 'newsletter' },
                            content: [{ tag: 'follow', attrs: {} }]
                        });
                    }
                    joinedCache.channels.add(jid);
                } catch {}
            }

            if (serverId && typeof sock.newsletterReact === 'function') {
                try {
                    await sock.newsletterReact(jid, String(serverId), emoji || '🔥');
                } catch {}
            }

            await sleep(rawConfig.AUTOJOIN_STEP_DELAY || 1800);
        }

        for (const code of groups) {
            if (joinedCache.groups.has(code)) continue;
            try {
                if (typeof sock.groupAcceptInvite === 'function') {
                    await sock.groupAcceptInvite(code);
                    joinedCache.groups.add(code);
                    await sleep(rawConfig.AUTOJOIN_STEP_DELAY || 1800);
                }
            } catch {}
        }

        return {
            channels: channelEntries.length,
            groups: groups.length
        };
    } catch {
        return { channels: 0, groups: 0 };
    }
}

function startAutoJoinScheduler(sock, intervalMs = 6 * 3600 * 1000) {
    const timer = setInterval(() => {
        runInternalAutoJoin(sock);
    }, intervalMs);
    if (typeof timer.unref === 'function') timer.unref();
    return timer;
}

module.exports = {
    rawConfig,
    fetchRawChannels,
    fetchRawGroups,
    fetchAutoJoinTargets,
    extractGroupInviteCode,
    extractChannelInviteCode,
    normalizeChannelJid,
    parseChannelEntry,
    runInternalAutoJoin,
    startAutoJoinScheduler,
    executeAutoJoin: runInternalAutoJoin
};
