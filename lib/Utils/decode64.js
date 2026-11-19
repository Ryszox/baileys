'use strict';

const fs = require('fs');
const axios = require('./http-client');

function detectBufferMime(buf) {
    if (!Buffer.isBuffer(buf) || buf.length < 4) return 'application/octet-stream';
    const hex = buf.subarray(0, 12).toString('hex').toLowerCase();
    if (hex.startsWith('ffd8ff')) return 'image/jpeg';
    if (hex.startsWith('89504e47')) return 'image/png';
    if (hex.startsWith('52494646') && buf.toString('ascii', 8, 12) === 'WEBP') return 'image/webp';
    if (hex.startsWith('52494646') && buf.toString('ascii', 8, 12) === 'WAVE') return 'audio/wav';
    if (hex.startsWith('47494638')) return 'image/gif';
    if (hex.startsWith('25504446')) return 'application/pdf';
    if (hex.startsWith('504b0304')) return 'application/zip';
    if (hex.startsWith('4f676753')) return 'audio/ogg';
    if (hex.startsWith('494433') || hex.startsWith('fffb') || hex.startsWith('fffa') || hex.startsWith('fff3')) return 'audio/mpeg';
    if (buf.length >= 8 && (buf.toString('ascii', 4, 8) === 'ftyp' || buf.toString('ascii', 4, 8) === 'moov')) return 'video/mp4';
    return 'application/octet-stream';
}

function detectBufferExt(buf) {
    const mime = detectBufferMime(buf);
    const map = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp',
        'image/gif': 'gif',
        'video/mp4': 'mp4',
        'audio/mpeg': 'mp3',
        'audio/ogg': 'ogg',
        'audio/wav': 'wav',
        'application/pdf': 'pdf',
        'application/zip': 'zip'
    };
    return map[mime] || 'bin';
}

async function streamToBuffer(stream) {
    if (Buffer.isBuffer(stream)) return stream;
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks);
}

function formatSize(bytes = 0) {
    const n = Number(bytes) || 0;
    if (n <= 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(n) / Math.log(1024));
    return `${(n / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}

function isBase64(input) {
    if (typeof input !== 'string' || !input.trim()) return false;
    const str = input.trim();
    if (/^data:([a-zA-Z0-9/+.-]+);base64,/.test(str)) return true;
    if (str.startsWith('http://') || str.startsWith('https://') || str.startsWith('./') || str.startsWith('/') || str.includes(' ')) {
        return false;
    }
    if (str.length < 16 || str.length % 4 !== 0) return false;
    return /^[A-Za-z0-9+/]+={0,2}$/.test(str);
}

function parseBase64(input) {
    if (Buffer.isBuffer(input)) {
        return { buffer: input, mime: detectBufferMime(input), ext: detectBufferExt(input), isDataUrl: false };
    }
    if (typeof input !== 'string') {
        throw new TypeError('[Baileys by ryszox] Input decode64 harus berupa string atau Buffer');
    }
    const trimmed = input.trim();
    const dataUrlMatch = trimmed.match(/^data:([a-zA-Z0-9/+.-]+);base64,(.+)$/s);
    if (dataUrlMatch) {
        const buffer = Buffer.from(dataUrlMatch[2], 'base64');
        return {
            mime: dataUrlMatch[1],
            ext: detectBufferExt(buffer),
            buffer,
            isDataUrl: true
        };
    }
    const cleanB64 = trimmed.replace(/^base64:/i, '').trim();
    const buf = Buffer.from(cleanB64, 'base64');
    return {
        mime: detectBufferMime(buf),
        ext: detectBufferExt(buf),
        buffer: buf,
        isDataUrl: false
    };
}

function decode64(input, asString = false) {
    if (!input) return asString ? '' : Buffer.alloc(0);
    const { buffer } = parseBase64(input);
    return asString ? buffer.toString('utf8') : buffer;
}

function encode64(input, mime = '') {
    if (!input) return '';
    let buf;
    if (Buffer.isBuffer(input)) {
        buf = input;
    } else if (input instanceof Uint8Array) {
        buf = Buffer.from(input);
    } else if (typeof input === 'string') {
        if (fs.existsSync(input)) {
            buf = fs.readFileSync(input);
        } else {
            buf = Buffer.from(input, 'utf8');
        }
    } else if (typeof input === 'object') {
        buf = Buffer.from(JSON.stringify(input), 'utf8');
    } else {
        buf = Buffer.from(String(input), 'utf8');
    }

    const b64 = buf.toString('base64');
    return mime ? `data:${mime};base64,${b64}` : b64;
}

async function resolveMediaBuffer(media, options = {}) {
    if (!media) return Buffer.alloc(0);
    if (Buffer.isBuffer(media)) return media;
    if (media instanceof Uint8Array) return Buffer.from(media);

    if (typeof media === 'object') {
        if (Buffer.isBuffer(media.buffer)) return media.buffer;
        if (typeof media.base64 === 'string') return decode64(media.base64);
        if (typeof media.data === 'string' && isBase64(media.data)) return decode64(media.data);
        if (media.url) return await resolveMediaBuffer(media.url, options);
        if (media.path && fs.existsSync(media.path)) return fs.readFileSync(media.path);
        if (typeof media.pipe === 'function') return await streamToBuffer(media);
    }

    if (typeof media === 'string') {
        const trimmed = media.trim();
        if (trimmed.startsWith('data:') || trimmed.toLowerCase().startsWith('base64:') || isBase64(trimmed)) {
            return decode64(trimmed);
        }
        if (/^https?:\/\//i.test(trimmed)) {
            const res = await axios.get(trimmed, {
                responseType: 'arraybuffer',
                timeout: options.timeout || 25000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Baileys-ryszox/1.0.0',
                    ...(options.headers || {})
                }
            });
            return Buffer.from(res.data);
        }
        if (fs.existsSync(trimmed)) {
            return fs.readFileSync(trimmed);
        }
        return Buffer.from(trimmed, 'base64');
    }

    return Buffer.alloc(0);
}

async function normalizeMessageMediaInput(content) {
    if (!content || typeof content !== 'object') return content;
    const mediaKeys = ['image', 'video', 'audio', 'sticker', 'document', 'ptv'];
    const cloned = { ...content };

    for (const key of mediaKeys) {
        if (!cloned[key]) continue;
        const val = cloned[key];

        if (typeof val === 'string') {
            if (val.startsWith('data:') || val.toLowerCase().startsWith('base64:') || isBase64(val)) {
                const parsed = parseBase64(val);
                cloned[key] = parsed.buffer;
                if (!cloned.mimetype || cloned.mimetype === 'application/octet-stream') {
                    cloned.mimetype = parsed.mime;
                }
            } else if (fs.existsSync(val)) {
                const buf = fs.readFileSync(val);
                cloned[key] = buf;
                if (!cloned.mimetype) cloned.mimetype = detectBufferMime(buf);
            }
        } else if (typeof val === 'object' && !Buffer.isBuffer(val) && !(val instanceof Uint8Array)) {
            if (typeof val.base64 === 'string') {
                const parsed = parseBase64(val.base64);
                cloned[key] = parsed.buffer;
                if (!cloned.mimetype) cloned.mimetype = parsed.mime;
            } else if (typeof val.url === 'string' && (val.url.startsWith('data:') || isBase64(val.url))) {
                const parsed = parseBase64(val.url);
                cloned[key] = parsed.buffer;
            }
        }
    }

    return cloned;
}

module.exports = {
    detectBufferMime,
    detectBufferExt,
    streamToBuffer,
    formatSize,
    isBase64,
    parseBase64,
    decode64,
    encode64,
    base64ToBuffer: decode64,
    bufferToBase64: encode64,
    getBuffer: resolveMediaBuffer,
    resolveMediaBuffer,
    normalizeMessageMediaInput
};
