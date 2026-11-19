'use strict';

const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFile } = require('child_process');

function isWebpBuffer(buf) {
    return (
        Buffer.isBuffer(buf) &&
        buf.length >= 16 &&
        buf.toString('ascii', 0, 4) === 'RIFF' &&
        buf.toString('ascii', 8, 12) === 'WEBP'
    );
}

async function convertToWebpBuffer(inputBuffer, options = {}) {
    if (!Buffer.isBuffer(inputBuffer) || (isWebpBuffer(inputBuffer) && !options.mode)) {
        return inputBuffer;
    }

    const tmpId = crypto.randomBytes(8).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `ryszox_in_${tmpId}`);
    const tmpOut = path.join(os.tmpdir(), `ryszox_out_${tmpId}.webp`);

    let vfFilter = 'scale=512:512:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1';
    if (options.mode === 'crop' || options.crop) {
        vfFilter = 'scale=512:512:force_original_aspect_ratio=increase,crop=512:512,setsar=1';
    } else if (options.mode === 'circle') {
        vfFilter = "scale=512:512:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='if(lte(hypot(X-256,Y-256),256),alpha(X,Y),0)',setsar=1";
    }

    try {
        fs.writeFileSync(tmpIn, inputBuffer);
        await new Promise((resolve, reject) => {
            execFile(
                'ffmpeg',
                [
                    '-y',
                    '-i', tmpIn,
                    '-vf', vfFilter,
                    '-vcodec', 'libwebp',
                    '-lossless', '0',
                    '-q:v', '75',
                    '-preset', 'default',
                    '-loop', '0',
                    '-an',
                    '-vsync', '0',
                    tmpOut
                ],
                { timeout: 15000 },
                (err) => (err ? reject(err) : resolve())
            );
        });

        if (fs.existsSync(tmpOut)) {
            return fs.readFileSync(tmpOut);
        }
    } catch {
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }

    return inputBuffer;
}

async function convertAudio(inputBuffer, ptt = false) {
    const tmpId = crypto.randomBytes(8).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `ryszox_aud_in_${tmpId}`);
    const ext = ptt ? 'ogg' : 'mp3';
    const tmpOut = path.join(os.tmpdir(), `ryszox_aud_out_${tmpId}.${ext}`);

    const args = ptt
        ? ['-y', '-i', tmpIn, '-vn', '-c:a', 'libopus', '-b:a', '128k', '-vbr', 'on', '-compression_level', '10', tmpOut]
        : ['-y', '-i', tmpIn, '-vn', '-ac', '2', '-b:a', '128k', '-ar', '44100', '-f', 'mp3', tmpOut];

    try {
        fs.writeFileSync(tmpIn, inputBuffer);
        await new Promise((resolve, reject) => {
            execFile('ffmpeg', args, { timeout: 25000 }, (err) => (err ? reject(err) : resolve()));
        });
        if (fs.existsSync(tmpOut)) {
            return fs.readFileSync(tmpOut);
        }
    } catch {
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
    return inputBuffer;
}

async function applyAudioEffect(inputBuffer, effect = 'bass') {
    const filters = {
        bass: '-af equalizer=f=54:width_type=o:width=2:g=20',
        blown: '-af acrusher=.1:1:64:0:log',
        deep: '-af atempo=4/4,asetrate=44500*2/3',
        earrape: '-af volume=12',
        fast: '-filter:a "atempo=1.63,asetrate=44100"',
        fat: '-filter:a "atempo=1.6,asetrate=22100"',
        nightcore: '-filter:a atempo=1.06,asetrate=44100*1.25',
        reverse: '-filter_complex "areverse"',
        robot: `-filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75"`, 
        slow: '-filter:a "atempo=0.7,asetrate=44100"',
        tupai: '-filter:a "atempo=0.5,asetrate=65100"'
    };

    const chosen = filters[effect.toLowerCase()];
    if (!chosen) return inputBuffer;

    const tmpId = crypto.randomBytes(8).toString('hex');
    const tmpIn = path.join(os.tmpdir(), `ryszox_fx_in_${tmpId}`);
    const tmpOut = path.join(os.tmpdir(), `ryszox_fx_out_${tmpId}.mp3`);

    try {
        fs.writeFileSync(tmpIn, inputBuffer);
        const filterArgs = chosen.split(' ');
        await new Promise((resolve, reject) => {
            execFile('ffmpeg', ['-y', '-i', tmpIn, ...filterArgs, tmpOut], { timeout: 25000 }, (err) => (err ? reject(err) : resolve()));
        });
        if (fs.existsSync(tmpOut)) {
            return fs.readFileSync(tmpOut);
        }
    } catch {
    } finally {
        try { if (fs.existsSync(tmpIn)) fs.unlinkSync(tmpIn); } catch {}
        try { if (fs.existsSync(tmpOut)) fs.unlinkSync(tmpOut); } catch {}
    }
    return inputBuffer;
}

function buildWhatsAppExifBuffer(metadata = {}) {
    const packId = metadata.packId || crypto.randomBytes(16).toString('hex');
    const packname = metadata.packname ?? 'Baileys by ryszox';
    const author = metadata.author ?? '@ryszox_host';
    const emojis = Array.isArray(metadata.emojis) ? metadata.emojis : ['✨'];
    const isAvatar = metadata.isAvatar ? 1 : 0;

    const jsonPayload = {
        'sticker-pack-id': packId,
        'sticker-pack-name': String(packname),
        'sticker-pack-publisher': String(author),
        'emojis': emojis,
        'is-avatar-sticker': isAvatar,
        ...(metadata.extra || {})
    };

    const jsonBuff = Buffer.from(JSON.stringify(jsonPayload), 'utf-8');
    const exifAttr = Buffer.from([
        0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00,
        0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x16, 0x00, 0x00, 0x00
    ]);
    exifAttr.writeUIntLE(jsonBuff.length, 14, 4);
    return Buffer.concat([exifAttr, jsonBuff]);
}

function writeExifToWebp(webpBuffer, metadata = {}) {
    if (!isWebpBuffer(webpBuffer)) {
        return webpBuffer;
    }

    const exifPayload = buildWhatsAppExifBuffer(metadata);
    const padByte = exifPayload.length % 2 === 1 ? Buffer.from([0x00]) : Buffer.alloc(0);
    const exifChunkHeader = Buffer.alloc(8);
    exifChunkHeader.write('EXIF', 0, 4, 'ascii');
    exifChunkHeader.writeUInt32LE(exifPayload.length, 4);
    const fullExifChunk = Buffer.concat([exifChunkHeader, exifPayload, padByte]);

    const keptChunks = [];
    let offset = 12;

    while (offset + 8 <= webpBuffer.length) {
        const fourCC = webpBuffer.toString('ascii', offset, offset + 4);
        const chunkSize = webpBuffer.readUInt32LE(offset + 4);
        const paddedSize = chunkSize + (chunkSize % 2);
        const chunkEnd = Math.min(offset + 8 + paddedSize, webpBuffer.length);

        if (fourCC === 'VP8X') {
            const vp8xChunk = Buffer.from(webpBuffer.subarray(offset, chunkEnd));
            if (vp8xChunk.length >= 12) {
                vp8xChunk[8] = vp8xChunk[8] | 0x08;
            }
            keptChunks.push(vp8xChunk);
        } else if (fourCC !== 'EXIF') {
            keptChunks.push(webpBuffer.subarray(offset, chunkEnd));
        }

        offset = chunkEnd;
    }

    keptChunks.push(fullExifChunk);

    const bodyBuffer = Buffer.concat(keptChunks);
    const riffHeader = Buffer.alloc(12);
    riffHeader.write('RIFF', 0, 4, 'ascii');
    riffHeader.writeUInt32LE(4 + bodyBuffer.length, 4);
    riffHeader.write('WEBP', 8, 4, 'ascii');

    return Buffer.concat([riffHeader, bodyBuffer]);
}

function readExifFromWebp(webpBuffer) {
    if (!isWebpBuffer(webpBuffer)) return null;
    try {
        let offset = 12;
        while (offset + 8 <= webpBuffer.length) {
            const fourCC = webpBuffer.toString('ascii', offset, offset + 4);
            const chunkSize = webpBuffer.readUInt32LE(offset + 4);
            const paddedSize = chunkSize + (chunkSize % 2);
            const chunkEnd = Math.min(offset + 8 + paddedSize, webpBuffer.length);

            if (fourCC === 'EXIF') {
                const exifData = webpBuffer.subarray(offset + 8, chunkEnd);
                const jsonStart = exifData.indexOf(Buffer.from('{'));
                if (jsonStart !== -1) {
                    const jsonStr = exifData.subarray(jsonStart).toString('utf-8');
                    return JSON.parse(jsonStr);
                }
            }
            offset = chunkEnd;
        }
    } catch {}
    return null;
}

function generateAudioWaveform(audioBuffer, bars = 64) {
    const waveform = new Uint8Array(bars);
    if (!Buffer.isBuffer(audioBuffer) || audioBuffer.length === 0) {
        for (let i = 0; i < bars; i++) {
            waveform[i] = Math.floor(20 + Math.sin(i * 0.4) * 30 + Math.random() * 25);
        }
        return Buffer.from(waveform);
    }

    const step = Math.max(1, Math.floor(audioBuffer.length / bars));
    for (let i = 0; i < bars; i++) {
        let sum = 0;
        let count = 0;
        const start = i * step;
        const end = Math.min(start + step, audioBuffer.length);
        for (let j = start; j < end; j += Math.max(1, Math.floor(step / 32))) {
            sum += Math.abs(audioBuffer[j] - 128);
            count++;
        }
        const avg = count > 0 ? sum / count : 30;
        waveform[i] = Math.min(98, Math.max(12, Math.floor((avg / 90) * 85)));
    }
    return Buffer.from(waveform);
}

module.exports = {
    isWebpBuffer,
    convertToWebpBuffer,
    convertAudio,
    toAudio: (buf) => convertAudio(buf, false),
    toPTT: (buf) => convertAudio(buf, true),
    applyAudioEffect,
    buildWhatsAppExifBuffer,
    writeExifToWebp,
    readExifFromWebp,
    generateAudioWaveform
};
