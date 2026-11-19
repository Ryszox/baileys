'use strict';

const os = require('os');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const axios = require('./http-client');
const { formatSize } = require('./decode64');

function formatRuntime(seconds = process.uptime()) {
    seconds = Number(seconds) || 0;
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const parts = [];
    if (d > 0) parts.push(`${d} Hari`);
    if (h > 0) parts.push(`${h} Jam`);
    if (m > 0) parts.push(`${m} Menit`);
    parts.push(`${s} Detik`);
    return parts.join(', ');
}

function getGreetingWIB() {
    const hour = Number(
        new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Jakarta',
            hour: 'numeric',
            hour12: false
        }).format(new Date())
    );
    if (hour >= 4 && hour < 11) return 'Selamat Pagi';
    if (hour >= 11 && hour < 15) return 'Selamat Siang';
    if (hour >= 15 && hour < 18) return 'Selamat Sore';
    return 'Selamat Malam';
}

function formatDateWIB(date = new Date()) {
    return new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        dateStyle: 'full',
        timeStyle: 'long'
    }).format(date);
}

function getSystemStats() {
    const mem = process.memoryUsage();
    const cpus = os.cpus() || [];
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;

    return {
        botUptime: formatRuntime(process.uptime()),
        osUptime: formatRuntime(os.uptime()),
        ramUsed: formatSize(usedMem),
        ramTotal: formatSize(totalMem),
        heapUsed: formatSize(mem.heapUsed),
        rss: formatSize(mem.rss),
        cpuModel: cpus[0]?.model ? cpus[0].model.trim() : 'Virtual CPU',
        cpuCores: cpus.length || 1,
        platform: `${os.platform()} (${os.arch()})`,
        nodeVersion: process.version
    };
}

function checkCooldown(userId, seconds = 3) {
    if (!userId) return { onCooldown: false, remaining: 0 };
    const now = Date.now();
    const exp = cooldownMap.get(userId) || 0;
    if (now < exp) {
        return {
            onCooldown: true,
            remaining: Number(((exp - now) / 1000).toFixed(1))
        };
    }
    cooldownMap.set(userId, now + seconds * 1000);
    return { onCooldown: false, remaining: 0 };
}
const cooldownMap = new Map();

function exportSessionString(sessionDir = 'sessions') {
    const credsPath = path.join(sessionDir, 'creds.json');
    if (!fs.existsSync(credsPath)) {
        throw new Error(`[Baileys by ryszox] File creds.json tidak ditemukan di ${sessionDir}`);
    }
    const raw = fs.readFileSync(credsPath);
    const compressed = zlib.gzipSync(raw);
    return `RYSZOX~${compressed.toString('base64')}`;
}

function importSessionString(sessionString, sessionDir = 'sessions') {
    if (!sessionString || typeof sessionString !== 'string') return false;
    const cleaned = sessionString.trim().replace(/^RYSZOX~/i, '');
    const buf = Buffer.from(cleaned, 'base64');
    let jsonBuf;
    try {
        jsonBuf = zlib.gunzipSync(buf);
    } catch {
        jsonBuf = buf;
    }
    JSON.parse(jsonBuf.toString('utf8'));
    if (!fs.existsSync(sessionDir)) {
        fs.mkdirSync(sessionDir, { recursive: true });
    }
    fs.writeFileSync(path.join(sessionDir, 'creds.json'), jsonBuf);
    return true;
}

function createJsonDB(filePath = './database.json', defaultData = {}) {
    let data = { ...defaultData };
    if (fs.existsSync(filePath)) {
        try {
            data = Object.assign({}, defaultData, JSON.parse(fs.readFileSync(filePath, 'utf8')));
        } catch {}
    }

    const save = () => {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    };

    return {
        get data() { return data; },
        get(key, fallback = undefined) { return data[key] ?? fallback; },
        set(key, val) { data[key] = val; save(); return val; },
        delete(key) { delete data[key]; save(); },
        save
    };
}

async function fetchJson(url, options = {}) {
    const res = await axios.get(url, {
        timeout: options.timeout || 15000,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Baileys-ryszox/1.0.0',
            ...(options.headers || {})
        },
        ...options
    });
    return res.data;
}

module.exports = {
    formatRuntime,
    getGreetingWIB,
    formatDateWIB,
    getSystemStats,
    checkCooldown,
    exportSessionString,
    importSessionString,
    createJsonDB,
    fetchJson
};
