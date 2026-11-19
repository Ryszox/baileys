'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const axios = require('./http-client');
const { execFile } = require('child_process');
const { resolveMediaBuffer, detectBufferMime, detectBufferExt } = require('./decode64');
const { buildMultipartPayload } = require('./uploader');

/**
 * 1. Payment Gateway & Mutasi Client (Pakasir, Tokopay, Paydisini, Saweria)
 */
const paymentGateways = {
    async createPakasirDeposit({ project, apiKey, orderId, amount, method = 'qris' }) {
        const url = `https://app.pakasir.com/api/transactioncreate/${method}`;
        const res = await axios.post(
            url,
            { project, order_id: String(orderId), amount: Number(amount), api_key: apiKey },
            { headers: { 'Content-Type': 'application/json' }, timeout: 20000 }
        );
        return res.data;
    },

    async checkPakasirStatus({ project, apiKey, orderId, amount }) {
        const url = `https://app.pakasir.com/api/transactiondetail`;
        const res = await axios.get(url, {
            params: { project, order_id: String(orderId), amount: Number(amount), api_key: apiKey },
            timeout: 20000
        });
        return res.data;
    },

    async cancelPakasirDeposit({ project, apiKey, orderId, amount }) {
        const url = `https://app.pakasir.com/api/transactioncancel`;
        const res = await axios.post(
            url,
            { project, order_id: String(orderId), amount: Number(amount), api_key: apiKey },
            { headers: { 'Content-Type': 'application/json' }, timeout: 20000 }
        );
        return res.data;
    },

    async createTokopayOrder({ merchantId, secretKey, refId, nominal, metode = 'QRISREALTIME' }) {
        const res = await axios.get('https://api.tokopay.id/v1/order', {
            params: {
                merchant: merchantId,
                secret: secretKey,
                ref_id: String(refId),
                nominal: Number(nominal),
                metode
            },
            timeout: 20000
        });
        return res.data;
    },

    async createPaydisiniOrder({ apiKey, uniqueCode, service = '11', amount, note = 'Order Payment', validTime = 1800 }) {
        const rawSig = `${apiKey}${uniqueCode}${service}${amount}${validTime}NewTransaction`;
        const signature = crypto.createHash('md5').update(rawSig).digest('hex');
        const params = new URLSearchParams({
            key: apiKey,
            request: 'new',
            unique_code: String(uniqueCode),
            service: String(service),
            amount: String(amount),
            note: String(note),
            valid_time: String(validTime),
            type_fee: '1',
            signature
        });
        const res = await axios.post('https://api.paydisini.co.id/v1/', params.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            timeout: 20000
        });
        return res.data;
    },

    async checkPaydisiniStatus({ apiKey, uniqueCode }) {
        const rawSig = `${apiKey}${uniqueCode}StatusTransaction`;
        const signature = crypto.createHash('md5').update(rawSig).digest('hex');
        const params = new URLSearchParams({
            key: apiKey,
            request: 'status',
            unique_code: String(uniqueCode),
            signature
        });
        const res = await axios.post('https://api.paydisini.co.id/v1/', params.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            timeout: 20000
        });
        return res.data;
    },

    verifyWebhookSignature(payloadString, secretKey, signatureHeader, algorithm = 'sha256') {
        if (!payloadString || !secretKey || !signatureHeader) return false;
        const computed = crypto
            .createHmac(algorithm, String(secretKey))
            .update(typeof payloadString === 'string' ? payloadString : JSON.stringify(payloadString))
            .digest('hex');
        return computed.toLowerCase() === String(signatureHeader).toLowerCase();
    }
};

/**
 * 2. Pterodactyl Panel API Client (Application & Client API v1)
 */
function createPterodactylClient(domain, appApiKey, clientApiKey = '') {
    const baseUrl = String(domain || '').replace(/\/+$/, '');
    const appHeaders = {
        Authorization: `Bearer ${appApiKey}`,
        Accept: 'Application/vnd.pterodactyl.v1+json',
        'Content-Type': 'application/json'
    };
    const clientHeaders = {
        Authorization: `Bearer ${clientApiKey || appApiKey}`,
        Accept: 'Application/vnd.pterodactyl.v1+json',
        'Content-Type': 'application/json'
    };

    const TIER_PRESETS = {
        '1gb': { memory: 1024, disk: 1024, cpu: 40 },
        '2gb': { memory: 2048, disk: 2048, cpu: 60 },
        '3gb': { memory: 3072, disk: 3072, cpu: 80 },
        '4gb': { memory: 4096, disk: 4096, cpu: 100 },
        '5gb': { memory: 5120, disk: 5120, cpu: 120 },
        '6gb': { memory: 6144, disk: 6144, cpu: 140 },
        '7gb': { memory: 7168, disk: 7168, cpu: 160 },
        '8gb': { memory: 8192, disk: 8192, cpu: 180 },
        '9gb': { memory: 9216, disk: 9216, cpu: 200 },
        '10gb': { memory: 10240, disk: 10240, cpu: 220 },
        unli: { memory: 0, disk: 0, cpu: 0 },
        unlimited: { memory: 0, disk: 0, cpu: 0 }
    };

    return {
        TIER_PRESETS,
        async createUser({ email, username, firstName = 'User', lastName = 'Panel', password, rootAdmin = false }) {
            const res = await axios.post(
                `${baseUrl}/api/application/users`,
                {
                    email,
                    username,
                    first_name: firstName,
                    last_name: lastName,
                    language: 'en',
                    password,
                    root_admin: Boolean(rootAdmin)
                },
                { headers: appHeaders, timeout: 20000 }
            );
            return res.data?.attributes || res.data;
        },

        async listUsers(page = 1) {
            const res = await axios.get(`${baseUrl}/api/application/users?page=${page}`, {
                headers: appHeaders,
                timeout: 20000
            });
            return res.data?.data || [];
        },

        async deleteUser(userId) {
            await axios.delete(`${baseUrl}/api/application/users/${userId}`, {
                headers: appHeaders,
                timeout: 20000
            });
            return true;
        },

        async createServer({
            name,
            userId,
            eggId = 15,
            nestId = 5,
            locationId = 1,
            tier = '1gb',
            memory,
            disk,
            cpu,
            dockerImage = 'ghcr.io/parkervcp/yolks:nodejs_18',
            startup = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/node /home/container/{{CMD_RUN}}',
            cmdRun = 'index.js'
        }) {
            const preset = TIER_PRESETS[String(tier).toLowerCase()] || TIER_PRESETS['1gb'];
            const payload = {
                name: String(name || 'Ryszox Server'),
                user: Number(userId),
                egg: Number(eggId),
                docker_image: dockerImage,
                startup,
                environment: {
                    INST: 'npm',
                    USER_UPLOAD: '0',
                    AUTO_UPDATE: '0',
                    CMD_RUN: cmdRun
                },
                limits: {
                    memory: memory !== undefined ? Number(memory) : preset.memory,
                    swap: 0,
                    disk: disk !== undefined ? Number(disk) : preset.disk,
                    io: 500,
                    cpu: cpu !== undefined ? Number(cpu) : preset.cpu
                },
                feature_limits: {
                    databases: 2,
                    backups: 2,
                    allocations: 1
                },
                deploy: {
                    locations: [Number(locationId)],
                    dedicated_ip: false,
                    port_range: []
                }
            };
            const res = await axios.post(`${baseUrl}/api/application/servers`, payload, {
                headers: appHeaders,
                timeout: 25000
            });
            return res.data?.attributes || res.data;
        },

        async listServers(page = 1) {
            const res = await axios.get(`${baseUrl}/api/application/servers?page=${page}`, {
                headers: appHeaders,
                timeout: 20000
            });
            return res.data?.data || [];
        },

        async suspendServer(serverId) {
            await axios.post(`${baseUrl}/api/application/servers/${serverId}/suspend`, {}, { headers: appHeaders, timeout: 20000 });
            return true;
        },

        async unsuspendServer(serverId) {
            await axios.post(`${baseUrl}/api/application/servers/${serverId}/unsuspend`, {}, { headers: appHeaders, timeout: 20000 });
            return true;
        },

        async deleteServer(serverId, force = true) {
            const suffix = force ? '/force' : '';
            await axios.delete(`${baseUrl}/api/application/servers/${serverId}${suffix}`, { headers: appHeaders, timeout: 20000 });
            return true;
        },

        async powerAction(serverIdentifier, signal = 'restart') {
            // signal: 'start' | 'stop' | 'restart' | 'kill'
            await axios.post(
                `${baseUrl}/api/client/servers/${serverIdentifier}/power`,
                { signal },
                { headers: clientHeaders, timeout: 20000 }
            );
            return true;
        },

        async getServerResources(serverIdentifier) {
            const res = await axios.get(`${baseUrl}/api/client/servers/${serverIdentifier}/resources`, {
                headers: clientHeaders,
                timeout: 20000
            });
            return res.data?.attributes || res.data;
        }
    };
}

/**
 * 3. Multi-Provider AI Router & API Hub (OpenAI-Compatible, Siputzx, ITzpire)
 */
async function chatAI(prompt, options = {}) {
    const {
        system = 'You are a helpful AI assistant powered by Baileys by ryszox.',
        model = 'gpt-4o-mini',
        apiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY || '',
        baseUrl = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
        history = []
    } = options;

    if (apiKey) {
        const messages = [
            { role: 'system', content: system },
            ...history,
            { role: 'user', content: String(prompt) }
        ];
        const res = await axios.post(
            `${baseUrl.replace(/\/+$/, '')}/chat/completions`,
            { model, messages, temperature: options.temperature ?? 0.7 },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                timeout: 45000
            }
        );
        return res.data?.choices?.[0]?.message?.content || '';
    }

    // Fallback to Siputzx Public AI Endpoint
    const res = await axios.get('https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo', {
        params: { content: String(prompt) },
        timeout: 30000
    });
    return res.data?.data || res.data?.result || JSON.stringify(res.data);
}

async function callSiputzx(endpointPath, params = {}) {
    const cleanPath = String(endpointPath).replace(/^\/+/, '');
    const url = cleanPath.startsWith('api/')
        ? `https://api.siputzx.my.id/${cleanPath}`
        : `https://api.siputzx.my.id/api/${cleanPath}`;
    const res = await axios.get(url, { params, timeout: 35000 });
    return res.data;
}

async function callItzpire(endpointPath, params = {}) {
    const cleanPath = String(endpointPath).replace(/^\/+/, '');
    const url = `https://itzpire.my.id/${cleanPath}`;
    const res = await axios.get(url, { params, timeout: 35000 });
    return res.data;
}

/**
 * 4. Multi-Mirror Media Uploader Extensions (Qu.ax, Telegraph, Tmpfiles, Uguu)
 */
async function uploadToQuax(media) {
    const buf = await resolveMediaBuffer(media);
    const mime = detectBufferMime(buf);
    const ext = detectBufferExt(buf);
    const { body, contentType } = buildMultipartPayload(
        {},
        [{ fieldName: 'files[]', filename: `ryszox_${Date.now()}.${ext}`, buffer: buf, mime }]
    );
    const res = await axios.post('https://qu.ax/upload.php', body, {
        headers: { 'Content-Type': contentType },
        timeout: 30000
    });
    if (res.data?.success && res.data?.files?.[0]?.url) {
        return res.data.files[0].url;
    }
    throw new Error('Failed to upload to qu.ax');
}

async function uploadToTmpfiles(media) {
    const buf = await resolveMediaBuffer(media);
    const mime = detectBufferMime(buf);
    const ext = detectBufferExt(buf);
    const { body, contentType } = buildMultipartPayload(
        {},
        [{ fieldName: 'file', filename: `ryszox_${Date.now()}.${ext}`, buffer: buf, mime }]
    );
    const res = await axios.post('https://tmpfiles.org/api/v1/upload', body, {
        headers: { 'Content-Type': contentType },
        timeout: 30000
    });
    const rawUrl = res.data?.data?.url;
    if (rawUrl) {
        return rawUrl.replace('https://tmpfiles.org/', 'https://tmpfiles.org/dl/');
    }
    throw new Error('Failed to upload to tmpfiles.org');
}

async function uploadToUguu(media) {
    const buf = await resolveMediaBuffer(media);
    const mime = detectBufferMime(buf);
    const ext = detectBufferExt(buf);
    const { body, contentType } = buildMultipartPayload(
        {},
        [{ fieldName: 'files[]', filename: `ryszox_${Date.now()}.${ext}`, buffer: buf, mime }]
    );
    const res = await axios.post('https://uguu.se/upload.php', body, {
        headers: { 'Content-Type': contentType },
        timeout: 30000
    });
    if (res.data?.files?.[0]?.url) {
        return res.data.files[0].url;
    }
    throw new Error('Failed to upload to uguu.se');
}

/**
 * 5. AFK Manager, Anti-Spam Warn Engine, Scheduled Message Cron & Interactive Session Collector
 */
function createAFKManager() {
    const afkMap = new Map();

    return {
        afkMap,
        setAFK(jid, reason = 'Sibuk') {
            afkMap.set(jid, { reason: String(reason), since: Date.now() });
            return afkMap.get(jid);
        },
        removeAFK(jid) {
            const data = afkMap.get(jid);
            afkMap.delete(jid);
            return data || null;
        },
        getAFK(jid) {
            return afkMap.get(jid) || null;
        }
    };
}

function createWarnManager(maxWarnings = 3) {
    const warnMap = new Map();

    return {
        warnMap,
        addWarn(groupJid, userJid, reason = 'Violation') {
            const key = `${groupJid}:${userJid}`;
            const current = warnMap.get(key) || { count: 0, reasons: [] };
            current.count += 1;
            current.reasons.push({ reason, timestamp: Date.now() });
            warnMap.set(key, current);
            return {
                count: current.count,
                maxWarnings,
                reachedMax: current.count >= maxWarnings,
                reasons: current.reasons
            };
        },
        resetWarn(groupJid, userJid) {
            warnMap.delete(`${groupJid}:${userJid}`);
        },
        getWarn(groupJid, userJid) {
            return warnMap.get(`${groupJid}:${userJid}`) || { count: 0, reasons: [] };
        }
    };
}

function createMessageScheduler(sock) {
    const tasks = new Map();

    return {
        tasks,
        scheduleOnce(id, jid, content, delayMs, options = {}) {
            if (tasks.has(id)) clearTimeout(tasks.get(id).timer);
            const timer = setTimeout(async () => {
                tasks.delete(id);
                try {
                    if (typeof content === 'string') {
                        await sock.sendMessage(jid, { text: content }, options);
                    } else {
                        await sock.sendMessage(jid, content, options);
                    }
                } catch {}
            }, Number(delayMs));
            tasks.set(id, { id, type: 'once', jid, timer });
            return id;
        },
        scheduleInterval(id, jid, content, intervalMs, options = {}) {
            if (tasks.has(id)) clearInterval(tasks.get(id).timer);
            const timer = setInterval(async () => {
                try {
                    if (typeof content === 'string') {
                        await sock.sendMessage(jid, { text: content }, options);
                    } else {
                        await sock.sendMessage(jid, content, options);
                    }
                } catch {}
            }, Number(intervalMs));
            if (typeof timer.unref === 'function') timer.unref();
            tasks.set(id, { id, type: 'interval', jid, timer });
            return id;
        },
        cancel(id) {
            const item = tasks.get(id);
            if (!item) return false;
            if (item.type === 'once') clearTimeout(item.timer);
            else clearInterval(item.timer);
            tasks.delete(id);
            return true;
        }
    };
}

/**
 * 6. Quote Sticker (QC) Generator & Media Utility
 */
async function generateQuoteStickerBuffer({
    text = 'Hello!',
    name = 'ryszox',
    avatarUrl = 'https://i.ibb.co/3Fh9V6p/avatar-default.png',
    backgroundColor = '#1b1e23'
}) {
    const payload = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [
            {
                entities: [],
                avatar: true,
                from: {
                    id: 1,
                    name: String(name),
                    photo: { url: avatarUrl }
                },
                text: String(text),
                replyMessage: {}
            }
        ]
    };
    const res = await axios.post('https://bot.lyo.su/quote/generate', payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 25000
    });
    const base64Image = res.data?.result?.image;
    if (!base64Image) throw new Error('Failed to generate quote image');
    return Buffer.from(base64Image, 'base64');
}

/**
 * 7. Network & Utility Toolkit (Shortlink, Pastebin, Translate, OCR/SSWeb via public APIs)
 */
async function createShortUrl(targetUrl) {
    const res = await axios.get('https://tinyurl.com/api-create.php', {
        params: { url: String(targetUrl) },
        timeout: 15000
    });
    return String(res.data || targetUrl).trim();
}

async function translateText(text, targetLang = 'id', sourceLang = 'auto') {
    const res = await axios.get('https://translate.googleapis.com/translate_a/single', {
        params: {
            client: 'gtx',
            sl: sourceLang,
            tl: targetLang,
            dt: 't',
            q: String(text)
        },
        timeout: 15000
    });
    if (Array.isArray(res.data?.[0])) {
        return res.data[0].map((part) => part[0]).join('');
    }
    return String(text);
}

async function fetchWebsiteScreenshotBuffer(url, width = 1280, height = 720) {
    const target = `https://image.thum.io/get/width/${width}/crop/${height}/noanimate/${url}`;
    const res = await axios.get(target, { responseType: 'arraybuffer', timeout: 30000 });
    return Buffer.from(res.data);
}

/**
 * 8. Multi-Bot / CloneBot Session Manager (Jadibot Engine)
 */
const activeSubBots = new Map();

async function startSubBot(makeWASocketFn, id, config = {}) {
    if (activeSubBots.has(id)) {
        return activeSubBots.get(id);
    }
    const sessionDir = config.sessionDir || path.join(process.cwd(), 'sessions_jadibot', String(id));
    if (!fs.existsSync(sessionDir)) fs.mkdirSync(sessionDir, { recursive: true });

    let official;
    try {
        official = require('baileys-official');
    } catch {}
    const useMultiFileAuthState = official?.useMultiFileAuthState;
    let authConfig = config.auth;
    let saveCreds = async () => {};

    if (!authConfig && typeof useMultiFileAuthState === 'function') {
        const stateObj = await useMultiFileAuthState(sessionDir);
        authConfig = stateObj.state;
        saveCreds = stateObj.saveCreds;
    }

    const subSock = makeWASocketFn({
        ...config,
        printBanner: false,
        auth: authConfig
    });

    subSock.ev.on('creds.update', saveCreds);
    activeSubBots.set(id, subSock);
    return subSock;
}

function stopSubBot(id) {
    const sub = activeSubBots.get(id);
    if (!sub) return false;
    try {
        sub.end?.();
        sub.ws?.close?.();
    } catch {}
    activeSubBots.delete(id);
    return true;
}

function listSubBots() {
    return Array.from(activeSubBots.keys());
}

module.exports = {
    paymentGateways,
    createPterodactylClient,
    chatAI,
    callSiputzx,
    callItzpire,
    uploadToQuax,
    uploadToTmpfiles,
    uploadToUguu,
    createAFKManager,
    createWarnManager,
    createMessageScheduler,
    generateQuoteStickerBuffer,
    createShortUrl,
    translateText,
    fetchWebsiteScreenshotBuffer,
    activeSubBots,
    startSubBot,
    stopSubBot,
    listSubBots
};
