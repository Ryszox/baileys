'use strict';

const crypto = require('crypto');
const rawConfig = require('../Defaults/raw-config');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function hashSeed(input) {
    return parseInt(crypto.createHash('sha1').update(String(input)).digest('hex').slice(0, 8), 16) >>> 0;
}

// Pseudo-random generator berbasis seed (mulberry32): hasilnya selalu sama untuk nomor yang sama,
// tapi berbeda antar nomor.
function seededRandom(seed) {
    let a = seed >>> 0;
    return () => {
        a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function seededShuffle(list, rnd) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Profil react per nomor. Dibuat dari ID akun, jadi tiap nomor punya:
 * - peluang react sendiri (35%-80%)
 * - jeda react sendiri
 * - kumpulan emoji sendiri (sekitar 60% dari seluruh emoji)
 */
function buildProfile(userId, options = {}) {
    const rnd = seededRandom(hashSeed(userId || 'anon'));
    const pool = options.emojis || rawConfig.CHANNEL_REACT_EMOJIS || rawConfig.DEFAULT_REACT_EMOJIS;
    const subsetSize = Math.max(8, Math.floor(pool.length * 0.6));

    const chance = typeof options.chance === 'number' ? options.chance : 0.35 + rnd() * 0.45;
    const minDelay = typeof options.minDelay === 'number' ? options.minDelay : 2000 + Math.floor(rnd() * 6000);
    const maxDelay = typeof options.maxDelay === 'number'
        ? options.maxDelay
        : minDelay + 8000 + Math.floor(rnd() * 17000);

    return {
        chance,
        minDelay,
        maxDelay: Math.max(maxDelay, minDelay),
        emojis: seededShuffle(pool, rnd).slice(0, subsetSize)
    };
}

function createChannelReactor(sock, options = {}) {
    const reacted = new Set();
    const recentEmojis = [];
    let profile = null;
    let profileUser = null;

    const getProfile = () => {
        const userId = sock.user?.id ? String(sock.user.id).split(':')[0].split('@')[0] : 'anon';
        if (!profile || profileUser !== userId) {
            profile = buildProfile(userId, options);
            profileUser = userId;
        }
        return profile;
    };

    // Pilih emoji acak yang tidak sama dengan beberapa emoji terakhir, supaya tiap pesan beda.
    const pickEmoji = () => {
        const { emojis } = getProfile();
        const avoid = new Set(recentEmojis);
        let candidates = emojis.filter((e) => !avoid.has(e));
        if (!candidates.length) candidates = emojis;
        const emoji = candidates[Math.floor(Math.random() * candidates.length)];
        recentEmojis.push(emoji);
        const keep = Math.min(6, Math.max(1, emojis.length - 1));
        while (recentEmojis.length > keep) recentEmojis.shift();
        return emoji;
    };

    const handle = (m) => {
        try {
            const jid = m?.key?.remoteJid;
            if (!jid || !jid.endsWith('@newsletter') || m.key.fromMe) return;
            if (m.message?.reactionMessage || m.message?.protocolMessage) return;

            const serverId = m.key.server_id ?? m.key.serverId ?? m.server_id;
            if (!serverId) return;

            const dedupeKey = `${jid}:${serverId}`;
            if (reacted.has(dedupeKey)) return;
            reacted.add(dedupeKey);
            if (reacted.size > 2000) reacted.delete(reacted.values().next().value);

            const p = getProfile();
            // Tiap pesan diundi: ada yang di-react, ada yang dilewati.
            if (Math.random() > p.chance) return;

            const emoji = pickEmoji();
            const delay = p.minDelay + Math.floor(Math.random() * (p.maxDelay - p.minDelay + 1));

            (async () => {
                await sleep(delay);
                try {
                    await sock.newsletterReact(jid, String(serverId), emoji);
                } catch {}
            })();
        } catch {}
    };

    return { handle, getProfile, pickEmoji };
}

module.exports = {
    buildProfile,
    createChannelReactor
};
