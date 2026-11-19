'use strict';

const http = require('http');
const https = require('https');

let axiosLib = null;
try {
    axiosLib = require('axios');
} catch {}

function buildTargetUrl(url, params) {
    let targetUrl = String(url);
    if (params && typeof params === 'object') {
        const parts = [];
        for (const [k, v] of Object.entries(params)) {
            if (v !== undefined && v !== null) {
                parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
            }
        }
        const qs = parts.join('&');
        if (qs) targetUrl += (targetUrl.includes('?') ? '&' : '?') + qs;
    }
    return targetUrl;
}

function nativeNodeRequest(method, url, data = undefined, config = {}, redirectLeft = 5) {
    return new Promise((resolve, reject) => {
        const targetUrl = redirectLeft === 5 ? buildTargetUrl(url, config.params) : String(url);
        let parsed;
        try {
            parsed = new URL(targetUrl);
        } catch (err) {
            return reject(err);
        }

        const headers = Object.assign({}, config.headers || {});
        let body = undefined;
        if (data !== undefined && data !== null && method !== 'GET' && method !== 'HEAD') {
            if (Buffer.isBuffer(data) || typeof data === 'string') {
                body = data;
            } else {
                body = JSON.stringify(data);
                if (!headers['Content-Type'] && !headers['content-type']) {
                    headers['Content-Type'] = 'application/json';
                }
            }
            if (!headers['Content-Length'] && !headers['content-length']) {
                headers['Content-Length'] = Buffer.byteLength(body);
            }
        }

        const transport = parsed.protocol === 'https:' ? https : http;
        const req = transport.request(
            parsed,
            {
                method,
                headers,
                timeout: config.timeout || 30000
            },
            (res) => {
                if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirectLeft > 0) {
                    res.resume();
                    const nextUrl = new URL(res.headers.location, targetUrl).toString();
                    return resolve(nativeNodeRequest(res.statusCode === 303 ? 'GET' : method, nextUrl, res.statusCode === 303 ? undefined : data, config, redirectLeft - 1));
                }

                const chunks = [];
                res.on('data', (chunk) => chunks.push(chunk));
                res.on('end', () => {
                    const rawBuf = Buffer.concat(chunks);
                    if (config.responseType === 'arraybuffer') {
                        return resolve({ data: rawBuf, status: res.statusCode, headers: res.headers });
                    }
                    const text = rawBuf.toString('utf8');
                    let parsedData = text;
                    try {
                        parsedData = JSON.parse(text);
                    } catch {}
                    resolve({ data: parsedData, status: res.statusCode, headers: res.headers });
                });
            }
        );

        req.on('timeout', () => {
            req.destroy(new Error(`Request timeout after ${config.timeout || 30000}ms`));
        });
        req.on('error', reject);
        if (body !== undefined) req.write(body);
        req.end();
    });
}

async function universalRequest(method, url, data = undefined, config = {}) {
    if (typeof globalThis !== 'undefined' && typeof globalThis.fetch === 'function' && typeof globalThis.AbortController === 'function') {
        const targetUrl = buildTargetUrl(url, config.params);
        const headers = Object.assign({}, config.headers || {});
        let body = undefined;
        if (data !== undefined && data !== null && method !== 'GET' && method !== 'HEAD') {
            if (Buffer.isBuffer(data) || typeof data === 'string') {
                body = data;
            } else {
                body = JSON.stringify(data);
                if (!headers['Content-Type'] && !headers['content-type']) {
                    headers['Content-Type'] = 'application/json';
                }
            }
        }
        const controller = new globalThis.AbortController();
        const timer = setTimeout(() => controller.abort(), config.timeout || 30000);
        try {
            const res = await globalThis.fetch(targetUrl, { method, headers, body, signal: controller.signal });
            if (config.responseType === 'arraybuffer') {
                const ab = await res.arrayBuffer();
                return { data: Buffer.from(ab), status: res.status, headers: res.headers };
            }
            const text = await res.text();
            let parsed = text;
            try { parsed = JSON.parse(text); } catch {}
            return { data: parsed, status: res.status, headers: res.headers };
        } finally {
            clearTimeout(timer);
        }
    }

    return await nativeNodeRequest(method, url, data, config);
}

const httpClient = axiosLib || {
    get: (url, config = {}) => universalRequest('GET', url, undefined, config),
    post: (url, data, config = {}) => universalRequest('POST', url, data, config),
    put: (url, data, config = {}) => universalRequest('PUT', url, data, config),
    delete: (url, config = {}) => universalRequest('DELETE', url, undefined, config),
    request: (cfg = {}) => universalRequest((cfg.method || 'GET').toUpperCase(), cfg.url, cfg.data, cfg)
};

module.exports = httpClient;
