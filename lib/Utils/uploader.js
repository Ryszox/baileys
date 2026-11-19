'use strict';

const axios = require('./http-client');
const crypto = require('crypto');
const { resolveMediaBuffer, detectBufferMime, detectBufferExt } = require('./decode64');

function buildMultipartPayload(fields = {}, files = []) {
    const boundary = `----RyszoxBoundary${crypto.randomBytes(12).toString('hex')}`;
    const chunks = [];

    for (const [key, val] of Object.entries(fields)) {
        chunks.push(
            Buffer.from(
                `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${val}\r\n`,
                'utf8'
            )
        );
    }

    for (const file of files) {
        const header =
            `--${boundary}\r\n` +
            `Content-Disposition: form-data; name="${file.fieldName}"; filename="${file.filename}"\r\n` +
            `Content-Type: ${file.mime || 'application/octet-stream'}\r\n\r\n`;
        chunks.push(Buffer.from(header, 'utf8'));
        chunks.push(file.buffer);
        chunks.push(Buffer.from('\r\n', 'utf8'));
    }

    chunks.push(Buffer.from(`--${boundary}--\r\n`, 'utf8'));
    return {
        body: Buffer.concat(chunks),
        contentType: `multipart/form-data; boundary=${boundary}`
    };
}

async function uploadToCatbox(media) {
    const buf = await resolveMediaBuffer(media);
    const mime = detectBufferMime(buf);
    const ext = detectBufferExt(buf);
    const { body, contentType } = buildMultipartPayload(
        { reqtype: 'fileupload' },
        [{ fieldName: 'fileToUpload', filename: `ryszox_${Date.now()}.${ext}`, buffer: buf, mime }]
    );

    const res = await axios.post('https://catbox.moe/user/api.php', body, {
        headers: { 'Content-Type': contentType, 'User-Agent': 'Baileys-ryszox/1.0.0' },
        timeout: 30000
    });
    return String(res.data || '').trim();
}

async function uploadToLitterbox(media, time = '24h') {
    const buf = await resolveMediaBuffer(media);
    const mime = detectBufferMime(buf);
    const ext = detectBufferExt(buf);
    const { body, contentType } = buildMultipartPayload(
        { reqtype: 'fileupload', time },
        [{ fieldName: 'fileToUpload', filename: `ryszox_${Date.now()}.${ext}`, buffer: buf, mime }]
    );

    const res = await axios.post('https://litterbox.catbox.moe/resources/internals/api.php', body, {
        headers: { 'Content-Type': contentType, 'User-Agent': 'Baileys-ryszox/1.0.0' },
        timeout: 30000
    });
    return String(res.data || '').trim();
}

async function uploadToUrl(media) {
    try {
        const url = await uploadToCatbox(media);
        if (url && url.startsWith('http')) return url;
    } catch {}

    try {
        const buf = await resolveMediaBuffer(media);
        const mime = detectBufferMime(buf);
        const ext = detectBufferExt(buf);
        const { body, contentType } = buildMultipartPayload(
            {},
            [{ fieldName: 'files[]', filename: `ryszox_${Date.now()}.${ext}`, buffer: buf, mime }]
        );
        const res = await axios.post('https://pomf2.lain.la/upload.php', body, {
            headers: { 'Content-Type': contentType },
            timeout: 30000
        });
        if (res.data?.success && res.data?.files?.[0]?.url) {
            return res.data.files[0].url;
        }
    } catch {}

    try {
        const url = await uploadToLitterbox(media, '72h');
        if (url && url.startsWith('http')) return url;
    } catch {}

    throw new Error('[Baileys by ryszox] Gagal mengunggah media ke CDN publik.');
}

module.exports = {
    buildMultipartPayload,
    uploadToCatbox,
    uploadToLitterbox,
    uploadToUrl,
    tourl: uploadToUrl
};
