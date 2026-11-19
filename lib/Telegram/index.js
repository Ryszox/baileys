'use strict';

const { Telegraf, Markup } = require('telegraf');
const axios = require('axios');
const crypto = require('crypto');
const { printBootBanner } = require('../Utils/banner');
const {
    decode64,
    encode64,
    isBase64,
    resolveMediaBuffer
} = require('../Utils/decode64');
const { uploadToUrl } = require('../Utils/uploader');
const { generateDynamicQRIS, parseQRISMerchantInfo, formatRupiah, generateInvoiceId } = require('../Utils/qris');
const { getSystemStats } = require('../Utils/system');

const TELEGRAM_EFFECTS = {
    fire: '5104841245755180586',
    like: '5107584321108051014',
    dislike: '5104858069142078462',
    heart: '5159385139981059251',
    confetti: '5046509860389126442',
    poop: '5046589136895476101'
};

function escapeMarkdownV2(text = '') {
    return String(text).replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

function escapeHTML(text = '') {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function buildInlineKeyboard(buttons = []) {
    if (!Array.isArray(buttons) || buttons.length === 0) return undefined;

    const toBtn = (btn) => {
        if (!btn) return null;
        const text = btn.text || btn.displayText || 'Button';
        if (btn.url) return { text, url: btn.url };
        if (btn.web_app || btn.webAppUrl) {
            return { text, web_app: { url: btn.web_app?.url || btn.webAppUrl } };
        }
        if (btn.copy || btn.copy_text) {
            return { text, copy_text: { text: String(btn.copy || btn.copy_text) } };
        }
        if (btn.switch_inline_query !== undefined) {
            return { text, switch_inline_query: btn.switch_inline_query };
        }
        if (btn.switch_inline_query_current_chat !== undefined) {
            return { text, switch_inline_query_current_chat: btn.switch_inline_query_current_chat };
        }
        if (btn.pay) return { text, pay: true };
        return { text, callback_data: String(btn.id || btn.callback_data || btn.command || 'btn') };
    };

    const rows = [];
    for (const item of buttons) {
        if (Array.isArray(item)) {
            rows.push(item.map(toBtn).filter(Boolean));
        } else {
            const built = toBtn(item);
            if (built) rows.push([built]);
        }
    }
    return { inline_keyboard: rows };
}

async function resolveTelegramInputFile(input, filename = 'file.bin') {
    if (!input) return input;
    if (Buffer.isBuffer(input)) return { source: input, filename };
    if (typeof input === 'object' && (input.source || input.url)) return input;

    if (typeof input === 'string') {
        const trimmed = input.trim();
        if (trimmed.startsWith('data:') || trimmed.toLowerCase().startsWith('base64:') || isBase64(trimmed)) {
            return { source: decode64(trimmed), filename };
        }
        if (/^https?:\/\//i.test(trimmed)) {
            return { url: trimmed, filename };
        }
        return trimmed;
    }
    return input;
}

function verifyTelegramWebAppData(botToken, initDataString) {
    if (!botToken || !initDataString) return false;
    try {
        const urlParams = new URLSearchParams(initDataString);
        const hash = urlParams.get('hash');
        if (!hash) return false;
        urlParams.delete('hash');

        const dataCheckArr = [];
        for (const [key, val] of [...urlParams.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
            dataCheckArr.push(`${key}=${val}`);
        }
        const dataCheckString = dataCheckArr.join('\n');
        const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest();
        const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
        return calculatedHash === hash;
    } catch {
        return false;
    }
}

function makeTeleSocket(token, options = {}) {
    if (!token) {
        throw new Error('[Baileys by ryszox] Token diperlukan untuk menjalankan makeTeleSocket!');
    }
    if (options.printBanner !== false) {
        printBootBanner();
    }

    const bot = new Telegraf(token, options.telegrafOptions || {});
    const replyAwaiters = new Map();
    const cooldownStore = new Map();
    const sessionStore = new Map();
    const ownerIds = new Set((options.owners || []).map((id) => String(id)));

    if (bot.telegram && typeof bot.telegram.callApi === 'function') {
        const origCallApi = bot.telegram.callApi.bind(bot.telegram);
        bot.telegram.callApi = async (method, payload, callOpts) => {
            const maxRetries = options.maxRetries ?? 3;
            let attempt = 0;
            while (true) {
                try {
                    return await origCallApi(method, payload, callOpts);
                } catch (err) {
                    const msg = String(err?.description || err?.message || '');
                    if (method === 'answerCallbackQuery' && /query is too old|query ID is invalid/i.test(msg)) {
                        return false;
                    }
                    const retryAfter = err?.response?.parameters?.retry_after || err?.parameters?.retry_after;
                    if (retryAfter && attempt < maxRetries) {
                        attempt++;
                        await new Promise((r) => setTimeout(r, (Number(retryAfter) + 1) * 1000));
                        continue;
                    }
                    throw err;
                }
            }
        };
    }

    bot.use(async (ctx, next) => {
        const msg = ctx.message || ctx.editedMessage;
        if (msg) {
            const rawText = msg.text || msg.caption || '';
            const prefixRegex = /^[\/!#$.]/;
            const firstChar = rawText.trim().charAt(0);
            ctx.isCmd = prefixRegex.test(firstChar);
            ctx.prefix = ctx.isCmd ? firstChar : '';
            const parts = rawText.trim().split(/\s+/);
            ctx.command = ctx.isCmd ? parts[0].slice(1).split('@')[0].toLowerCase() : '';
            ctx.args = ctx.isCmd ? parts.slice(1) : parts;
            ctx.q = ctx.args.join(' ');
            ctx.query = ctx.q;
            ctx.isOwner = Boolean(ctx.from && (ownerIds.has(String(ctx.from.id)) || ctx.from.username === 'ryszox_host'));

            const keyAwait = `${ctx.chat?.id}:${ctx.from?.id}`;
            if (replyAwaiters.has(keyAwait)) {
                const resolveFn = replyAwaiters.get(keyAwait);
                replyAwaiters.delete(keyAwait);
                resolveFn(ctx);
            }
        }
        return await next();
    });

    bot.decode64 = decode64;
    bot.encode64 = encode64;
    bot.isBase64 = isBase64;
    bot.getBuffer = resolveMediaBuffer;
    bot.uploadToUrl = uploadToUrl;
    bot.tourl = uploadToUrl;
    bot.getStats = getSystemStats;
    bot.effects = TELEGRAM_EFFECTS;
    bot.escapeMarkdownV2 = escapeMarkdownV2;
    bot.escapeHTML = escapeHTML;
    bot.verifyWebAppData = (initData) => verifyTelegramWebAppData(token, initData);

    bot.useSession = () => {
        return async (ctx, next) => {
            const key = `${ctx.chat?.id || 'global'}:${ctx.from?.id || 'anon'}`;
            if (!sessionStore.has(key)) sessionStore.set(key, {});
            ctx.session = sessionStore.get(key);
            return await next();
        };
    };

    bot.awaitReply = (chatId, userId, timeoutMs = 60000) => {
        const key = `${chatId}:${userId}`;
        return new Promise((resolve, reject) => {
            replyAwaiters.set(key, resolve);
            setTimeout(() => {
                if (replyAwaiters.has(key)) {
                    replyAwaiters.delete(key);
                    reject(new Error('Timeout waiting for Telegram reply'));
                }
            }, timeoutMs);
        });
    };

    bot.setCommands = async (commands = [], scope = undefined) => {
        const formatted = commands.map((c) => ({
            command: String(c.command || c.cmd || '').replace(/^\//, ''),
            description: String(c.description || c.desc || 'Command')
        }));
        return await bot.telegram.setMyCommands(formatted, scope ? { scope } : undefined);
    };

    async function sendLongMessageOrRich(chatId, text, sendFn, baseOpts) {
        if (typeof text !== 'string' || text.length <= 4096) {
            return await sendFn(chatId, text, baseOpts);
        }
        const chunks = [];
        let curr = text;
        while (curr.length > 0) {
            if (curr.length <= 4096) {
                chunks.push(curr);
                break;
            }
            let sliceIdx = curr.lastIndexOf('\n', 4096);
            if (sliceIdx === -1 || sliceIdx < 2000) sliceIdx = 4096;
            chunks.push(curr.slice(0, sliceIdx));
            curr = curr.slice(sliceIdx).trimStart();
        }
        let lastRes;
        for (const chunk of chunks) {
            lastRes = await sendFn(chatId, chunk, baseOpts);
        }
        return lastRes;
    }

    bot.sendRichMessage = async (chatId, content = {}, extra = {}) => {
        if (typeof content === 'string') {
            content = { text: content };
        }

        const {
            text = '',
            caption = '',
            parseMode = 'HTML',
            buttons = [],
            replyKeyboard = null,
            image,
            photo,
            video,
            audio,
            voice,
            document: doc,
            animation,
            sticker,
            videoNote,
            spoiler = false,
            protect = false,
            silent = false,
            effect = null,
            linkPreview = null,
            quote = null,
            replyToMessageId = null,
            threadId = null
        } = content;

        const sendOpts = {
            parse_mode: parseMode,
            has_spoiler: Boolean(spoiler),
            protect_content: Boolean(protect),
            disable_notification: Boolean(silent),
            ...(threadId ? { message_thread_id: threadId } : {}),
            ...extra
        };

        if (effect) {
            sendOpts.message_effect_id = TELEGRAM_EFFECTS[effect] || effect;
        }

        if (linkPreview !== null) {
            if (typeof linkPreview === 'boolean') {
                sendOpts.link_preview_options = { is_disabled: !linkPreview };
            } else if (typeof linkPreview === 'object') {
                sendOpts.link_preview_options = linkPreview;
            }
        }

        if (quote && typeof quote === 'object') {
            sendOpts.reply_parameters = {
                message_id: quote.message_id || quote.id || replyToMessageId,
                quote: quote.text || quote.quote,
                allow_sending_without_reply: true
            };
        } else if (replyToMessageId) {
            sendOpts.reply_parameters = {
                message_id: replyToMessageId,
                allow_sending_without_reply: true
            };
        }

        if (buttons && buttons.length > 0) {
            sendOpts.reply_markup = buildInlineKeyboard(buttons);
        } else if (replyKeyboard) {
            sendOpts.reply_markup = replyKeyboard;
        }

        const finalCaption = caption || text || '';

        if (image || photo) {
            const file = await resolveTelegramInputFile(image || photo, 'photo.jpg');
            return await bot.telegram.sendPhoto(chatId, file, { ...sendOpts, caption: finalCaption });
        }
        if (video) {
            const file = await resolveTelegramInputFile(video, 'video.mp4');
            return await bot.telegram.sendVideo(chatId, file, { ...sendOpts, caption: finalCaption });
        }
        if (animation) {
            const file = await resolveTelegramInputFile(animation, 'animation.gif');
            return await bot.telegram.sendAnimation(chatId, file, { ...sendOpts, caption: finalCaption });
        }
        if (audio) {
            const file = await resolveTelegramInputFile(audio, 'audio.mp3');
            return await bot.telegram.sendAudio(chatId, file, { ...sendOpts, caption: finalCaption });
        }
        if (voice) {
            const file = await resolveTelegramInputFile(voice, 'voice.ogg');
            return await bot.telegram.sendVoice(chatId, file, { ...sendOpts, caption: finalCaption });
        }
        if (videoNote) {
            const file = await resolveTelegramInputFile(videoNote, 'videonote.mp4');
            return await bot.telegram.sendVideoNote(chatId, file, sendOpts);
        }
        if (doc) {
            const file = await resolveTelegramInputFile(doc, content.fileName || 'document.pdf');
            return await bot.telegram.sendDocument(chatId, file, { ...sendOpts, caption: finalCaption });
        }
        if (sticker) {
            const file = await resolveTelegramInputFile(sticker, 'sticker.webp');
            return await bot.telegram.sendSticker(chatId, file, sendOpts);
        }

        return await sendLongMessageOrRich(
            chatId,
            finalCaption,
            async (cId, txt, opts) => await bot.telegram.sendMessage(cId, txt, opts),
            sendOpts
        );
    };

    bot.sendButton = async (chatId, text, buttons = [], extra = {}) => {
        return await bot.sendRichMessage(chatId, { text, buttons }, extra);
    };
    bot.sendInlineButtons = bot.sendButton;

    bot.sendCopyButton = async (chatId, text, buttonLabel, copyText, extra = {}) => {
        return await bot.sendRichMessage(chatId, {
            text,
            buttons: [[{ text: buttonLabel, copy: copyText }]]
        }, extra);
    };

    bot.sendShareButton = async (chatId, text, buttonLabel, shareUrl, shareText = '', extra = {}) => {
        const fullShareUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        return await bot.sendRichMessage(chatId, {
            text,
            buttons: [[{ text: buttonLabel, url: fullShareUrl }]]
        }, extra);
    };

    bot.sendQRISPayment = async (chatId, staticQris, amount, options = {}) => {
        const dynamicPayload = generateDynamicQRIS(staticQris, amount, options);
        const merchantInfo = parseQRISMerchantInfo(dynamicPayload);
        const invoiceId = options.invoiceId || generateInvoiceId();
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=15&data=${encodeURIComponent(dynamicPayload)}`;

        const captionText =
            `💳 <b>TAGIHAN PEMBAYARAN QRIS</b>\n\n` +
            `• <b>ID Invoice</b> : <code>${invoiceId}</code>\n` +
            `• <b>Merchant</b>   : ${escapeHTML(merchantInfo.merchantName)}\n` +
            `• <b>Total Bayar</b>: <b>${formatRupiah(amount)}</b>\n\n` +
            `${options.note || 'Silakan scan kode QRIS di atas menggunakan E-Wallet / M-Banking Anda.'}`;

        return await bot.sendRichMessage(chatId, {
            photo: qrApiUrl,
            caption: captionText,
            parseMode: 'HTML',
            buttons: [
                [{ text: '📋 Salin Nominal', copy: String(amount) }],
                [{ text: '✅ Cek Status Pembayaran', id: `check_qris:${invoiceId}` }]
            ]
        });
    };

    bot.sendReplyKeyboard = async (chatId, text, rows = [], options = {}) => {
        const keyboard = rows.map((row) => {
            const arr = Array.isArray(row) ? row : [row];
            return arr.map((b) => (typeof b === 'string' ? { text: b } : b));
        });

        const reply_markup = {
            keyboard,
            resize_keyboard: options.resize ?? true,
            one_time_keyboard: options.oneTime ?? false,
            is_persistent: options.persistent ?? false,
            ...(options.placeholder ? { input_field_placeholder: options.placeholder } : {})
        };

        return await bot.telegram.sendMessage(chatId, text, {
            parse_mode: options.parseMode || 'HTML',
            reply_markup,
            ...options.extra
        });
    };

    bot.removeKeyboard = async (chatId, text = 'Keyboard removed.') => {
        return await bot.telegram.sendMessage(chatId, text, {
            reply_markup: { remove_keyboard: true }
        });
    };

    bot.checkSubscription = async (userId, channelUsername) => {
        try {
            const chat = channelUsername.startsWith('@') ? channelUsername : `@${channelUsername}`;
            const member = await bot.telegram.getChatMember(chat, userId);
            return ['creator', 'administrator', 'member'].includes(member?.status);
        } catch {
            return false;
        }
    };

    bot.useForceSub = (channels = [], options = {}) => {
        const chList = Array.isArray(channels) ? channels : [channels];
        return async (ctx, next) => {
            const userId = ctx.from?.id;
            if (!userId) return next();
            for (const ch of chList) {
                const isSub = await bot.checkSubscription(userId, ch);
                if (!isSub) {
                    const chName = ch.startsWith('@') ? ch : `@${ch}`;
                    const joinUrl = `https://t.me/${chName.replace('@', '')}`;
                    const text = options.text || `⚠️ <b>Anda harus bergabung ke channel kami terlebih dahulu untuk menggunakan bot ini!</b>\n\nSilakan join ke ${chName} lalu klik tombol di bawah.`;
                    const buttons = [
                        [{ text: '📢 Join Channel', url: joinUrl }],
                        [{ text: '✅ Saya Sudah Join', callback_data: 'ryszox_forcesub_check' }]
                    ];
                    if (ctx.callbackQuery) {
                        try {
                            await ctx.answerCbQuery('⚠️ Anda belum bergabung ke channel!', { show_alert: true });
                        } catch {}
                        return;
                    }
                    return await ctx.replyWithHTML(text, { reply_markup: buildInlineKeyboard(buttons) });
                }
            }
            return next();
        };
    };

    bot.action('ryszox_forcesub_check', async (ctx) => {
        await ctx.answerCbQuery('✅ Terima kasih sudah bergabung!');
        try { await ctx.deleteMessage(); } catch {}
    });

    bot.useCooldown = (seconds = 3) => {
        return async (ctx, next) => {
            const userId = ctx.from?.id;
            if (!userId) return next();
            const now = Date.now();
            const lastTime = cooldownStore.get(userId) || 0;
            if (now - lastTime < seconds * 1000) {
                const remaining = Math.ceil((seconds * 1000 - (now - lastTime)) / 1000);
                if (ctx.callbackQuery) {
                    try { await ctx.answerCbQuery(`⏳ Harap tunggu ${remaining} detik.`, { show_alert: true }); } catch {}
                    return;
                }
                return;
            }
            cooldownStore.set(userId, now);
            return next();
        };
    };

    const paginationStore = new Map();
    bot.sendPaginatedMessage = async (chatId, pages = [], options = {}) => {
        if (!Array.isArray(pages) || pages.length === 0) return null;
        const sessionId = crypto.randomBytes(4).toString('hex');
        paginationStore.set(sessionId, { pages, options, currentPage: 0 });
        const timer = setTimeout(() => paginationStore.delete(sessionId), 30 * 60 * 1000);
        if (typeof timer.unref === 'function') timer.unref();

        const renderMarkup = (pageIndex) => {
            const total = pages.length;
            const navRow = [
                { text: '⬅️ Prev', id: `ryszox_pg:${sessionId}:${(pageIndex - 1 + total) % total}` },
                { text: `${pageIndex + 1} / ${total}`, id: `ryszox_pg:${sessionId}:noop` },
                { text: 'Next ➡️', id: `ryszox_pg:${sessionId}:${(pageIndex + 1) % total}` }
            ];
            const extraButtons = options.buttons ? [...options.buttons, navRow] : [navRow];
            return buildInlineKeyboard(extraButtons);
        };

        const firstText = typeof pages[0] === 'string' ? pages[0] : pages[0].text;
        return await bot.telegram.sendMessage(chatId, firstText, {
            parse_mode: options.parseMode || 'HTML',
            reply_markup: renderMarkup(0)
        });
    };

    bot.action(/^ryszox_pg:([a-f0-9]+):(.+)$/, async (ctx) => {
        const [, sessionId, target] = ctx.match;
        if (target === 'noop') return await ctx.answerCbQuery();
        const session = paginationStore.get(sessionId);
        if (!session) return await ctx.answerCbQuery('Session expired');

        const pageIndex = Number(target);
        session.currentPage = pageIndex;
        const total = session.pages.length;
        const navRow = [
            { text: '⬅️ Prev', id: `ryszox_pg:${sessionId}:${(pageIndex - 1 + total) % total}` },
            { text: `${pageIndex + 1} / ${total}`, id: `ryszox_pg:${sessionId}:noop` },
            { text: 'Next ➡️', id: `ryszox_pg:${sessionId}:${(pageIndex + 1) % total}` }
        ];
        const extraButtons = session.options.buttons ? [...session.options.buttons, navRow] : [navRow];
        const pageContent = typeof session.pages[pageIndex] === 'string'
            ? session.pages[pageIndex]
            : session.pages[pageIndex].text;

        await ctx.editMessageText(pageContent, {
            parse_mode: session.options.parseMode || 'HTML',
            reply_markup: buildInlineKeyboard(extraButtons)
        });
        await ctx.answerCbQuery();
    });

    bot.answerInlineArticle = async (ctx, articles = [], extra = {}) => {
        const results = articles.map((item, idx) => ({
            type: 'article',
            id: String(item.id || idx),
            title: item.title || `Result #${idx + 1}`,
            description: item.description || '',
            thumbnail_url: item.thumb || item.thumbnailUrl,
            input_message_content: {
                message_text: item.text || item.messageText || item.title || '',
                parse_mode: item.parseMode || 'HTML'
            },
            ...(item.buttons ? { reply_markup: buildInlineKeyboard(item.buttons) } : {})
        }));
        return await ctx.answerInlineQuery(results, { cache_time: 10, ...extra });
    };

    bot.createTopic = async (chatId, name, extra = {}) => await bot.telegram.createForumTopic(chatId, name, extra);
    bot.closeTopic = async (chatId, threadId) => await bot.telegram.closeForumTopic(chatId, threadId);
    bot.reopenTopic = async (chatId, threadId) => await bot.telegram.reopenForumTopic(chatId, threadId);
    bot.deleteTopic = async (chatId, threadId) => await bot.telegram.deleteForumTopic(chatId, threadId);

    bot.createInviteLink = async (chatId, opts = {}) => await bot.telegram.createChatInviteLink(chatId, opts);
    bot.revokeInviteLink = async (chatId, link) => await bot.telegram.revokeChatInviteLink(chatId, link);
    bot.approveJoinRequest = async (chatId, userId) => await bot.telegram.approveChatJoinRequest(chatId, userId);
    bot.declineJoinRequest = async (chatId, userId) => await bot.telegram.declineChatJoinRequest(chatId, userId);

    bot.sendAlbum = async (chatId, medias = [], extra = {}) => {
        const mediaGroup = [];
        for (let i = 0; i < medias.length; i++) {
            const m = medias[i];
            const type = m.type || (m.video ? 'video' : m.document ? 'document' : m.audio ? 'audio' : 'photo');
            const rawMedia = m.media || m.photo || m.image || m.video || m.document || m.audio;
            const resolved = await resolveTelegramInputFile(rawMedia, `media_${i}`);
            mediaGroup.push({
                type,
                media: resolved,
                caption: m.caption || (i === 0 ? extra.caption : undefined),
                parse_mode: m.parseMode || extra.parse_mode || 'HTML',
                has_spoiler: Boolean(m.spoiler || extra.has_spoiler)
            });
        }
        return await bot.telegram.sendMediaGroup(chatId, mediaGroup, extra);
    };

    bot.sendPoll = async (chatId, question, optionsList = [], extra = {}) => {
        return await bot.telegram.sendPoll(chatId, question, optionsList, {
            is_anonymous: extra.isAnonymous ?? false,
            allows_multiple_answers: extra.multiple ?? false,
            ...extra
        });
    };

    bot.sendQuiz = async (chatId, question, optionsList = [], correctOptionId = 0, explanation = '', extra = {}) => {
        return await bot.telegram.sendPoll(chatId, question, optionsList, {
            type: 'quiz',
            correct_option_id: correctOptionId,
            explanation,
            is_anonymous: extra.isAnonymous ?? false,
            ...extra
        });
    };

    bot.sendPaidMedia = async (chatId, starCount, medias = [], caption = '', extra = {}) => {
        const mediaGroup = [];
        for (let i = 0; i < medias.length; i++) {
            const m = medias[i];
            const type = m.type || (m.video ? 'video' : 'photo');
            const resolved = await resolveTelegramInputFile(m.media || m.photo || m.image || m.video, `paid_${i}`);
            mediaGroup.push({ type, media: resolved });
        }
        return await bot.telegram.callApi('sendPaidMedia', {
            chat_id: chatId,
            star_count: Number(starCount),
            media: mediaGroup,
            caption,
            parse_mode: extra.parseMode || 'HTML',
            ...extra
        });
    };

    bot.refundStarPayment = async (userId, telegramPaymentChargeId) => {
        return await bot.telegram.callApi('refundStarPayment', {
            user_id: userId,
            telegram_payment_charge_id: telegramPaymentChargeId
        });
    };

    bot.sendWebApp = async (chatId, text, buttonText, webAppUrl, extra = {}) => {
        return await bot.sendRichMessage(chatId, { text, buttons: [[{ text: buttonText, webAppUrl }]] }, extra);
    };

    bot.sendInvoicePayment = async (chatId, invoice = {}) => {
        return await bot.telegram.sendInvoice(chatId, {
            title: invoice.title || 'Order Payment',
            description: invoice.description || 'Payment via Telegram Bot',
            payload: invoice.payload || `payload_${Date.now()}`,
            provider_token: invoice.providerToken || '',
            currency: invoice.currency || 'XTR',
            prices: invoice.prices || [{ label: invoice.title || 'Item', amount: invoice.amount || 1 }],
            ...invoice.extra
        });
    };

    bot.sendDiceGame = async (chatId, emoji = '🎲', extra = {}) => await bot.telegram.sendDice(chatId, { emoji, ...extra });
    bot.setReaction = async (chatId, messageId, emoji = '🔥', isBig = false) => await bot.telegram.callApi('setMessageReaction', { chat_id: chatId, message_id: messageId, reaction: emoji ? [{ type: 'emoji', emoji }] : [], is_big: Boolean(isBig) });
    bot.editRichMessage = async (chatId, messageId, text, buttons = [], extra = {}) => await bot.telegram.editMessageText(chatId, messageId, undefined, text, { parse_mode: extra.parseMode || 'HTML', ...(buttons.length > 0 ? { reply_markup: buildInlineKeyboard(buttons) } : {}), ...extra });
    bot.deleteMsg = async (chatId, messageId) => await bot.telegram.deleteMessage(chatId, messageId);
    bot.sendTyping = async (chatId) => await bot.telegram.sendChatAction(chatId, 'typing');

    bot.withChatAction = async (chatId, action = 'typing', asyncTaskFn) => {
        const interval = setInterval(() => {
            bot.telegram.sendChatAction(chatId, action).catch(() => {});
        }, 4000);
        try {
            await bot.telegram.sendChatAction(chatId, action).catch(() => {});
            return await asyncTaskFn();
        } finally {
            clearInterval(interval);
        }
    };

    bot.downloadFile = async (fileId, asBase64 = false) => {
        const fileLink = await bot.telegram.getFileLink(fileId);
        const url = typeof fileLink === 'string' ? fileLink : fileLink.href;
        const res = await axios.get(url, { responseType: 'arraybuffer' });
        const buf = Buffer.from(res.data);
        return asBase64 ? encode64(buf) : buf;
    };

    bot.uploadMedia = async (ctx) => {
        const msg = ctx.message || ctx.update?.message || ctx;
        const fileId =
            (msg.photo && msg.photo[msg.photo.length - 1]?.file_id) ||
            msg.video?.file_id ||
            msg.document?.file_id ||
            msg.audio?.file_id ||
            msg.voice?.file_id ||
            msg.sticker?.file_id;
        if (!fileId) throw new Error('Tidak ada media pada pesan Telegram ini.');
        const buf = await bot.downloadFile(fileId, false);
        return await uploadToUrl(buf);
    };

    bot.isAdmin = async (chatId, userId) => {
        try {
            const member = await bot.telegram.getChatMember(chatId, userId);
            return ['creator', 'administrator'].includes(member?.status);
        } catch {
            return false;
        }
    };
    bot.banMember = async (chatId, userId) => await bot.telegram.banChatMember(chatId, userId);
    bot.unbanMember = async (chatId, userId) => await bot.telegram.unbanChatMember(chatId, userId);
    bot.muteMember = async (chatId, userId, untilDate) => await bot.telegram.restrictChatMember(chatId, userId, { permissions: { can_send_messages: false }, until_date: untilDate });
    bot.unmuteMember = async (chatId, userId) => await bot.telegram.restrictChatMember(chatId, userId, { permissions: { can_send_messages: true, can_send_media_messages: true, can_send_other_messages: true, can_add_web_page_previews: true } });
    bot.pinMsg = async (chatId, messageId) => await bot.telegram.pinChatMessage(chatId, messageId);
    bot.unpinMsg = async (chatId, messageId) => await bot.telegram.unpinChatMessage(chatId, messageId);

    bot.broadcast = async (chatIdList = [], content = {}, delayMs = 1500) => {
        let success = 0;
        let failed = 0;
        for (const cId of chatIdList) {
            try {
                await bot.sendRichMessage(cId, content);
                success++;
                if (delayMs > 0) await new Promise((r) => setTimeout(r, delayMs));
            } catch {
                failed++;
            }
        }
        return { total: chatIdList.length, success, failed };
    };

    bot.forwardToWhatsApp = async (waSock, waJid, ctx, options = {}) => {
        const msg = ctx.message || ctx.update?.message || ctx;
        const text = msg.text || msg.caption || '';
        const senderName = msg.from ? `${msg.from.first_name || ''} (@${msg.from.username || msg.from.id})` : 'Telegram';
        const caption = options.header !== false ? `*[Telegram: ${senderName}]*\n${text}` : text;

        if (msg.photo && msg.photo.length > 0) {
            const largestPhoto = msg.photo[msg.photo.length - 1];
            const buf = await bot.downloadFile(largestPhoto.file_id, false);
            return await waSock.sendMessage(waJid, { image: buf, caption });
        }
        if (msg.video) {
            const buf = await bot.downloadFile(msg.video.file_id, false);
            return await waSock.sendMessage(waJid, { video: buf, caption });
        }
        if (msg.voice) {
            const buf = await bot.downloadFile(msg.voice.file_id, false);
            return await waSock.sendVoiceNote(waJid, buf);
        }
        if (msg.audio) {
            const buf = await bot.downloadFile(msg.audio.file_id, false);
            return await waSock.sendMessage(waJid, { audio: buf, mimetype: 'audio/mp4' });
        }
        if (msg.document) {
            const buf = await bot.downloadFile(msg.document.file_id, false);
            return await waSock.sendMessage(waJid, {
                document: buf,
                fileName: msg.document.file_name || 'file',
                mimetype: msg.document.mime_type || 'application/octet-stream',
                caption
            });
        }
        return await waSock.sendMessage(waJid, { text: caption });
    };

    // --- Extended Telegram Bot API 7.x / 8.x Parity Helpers ---
    bot.getStarTransactions = async (offset = 0, limit = 100) => {
        return await bot.telegram.callApi('getStarTransactions', { offset, limit });
    };

    bot.createStarInvoiceLink = async (title, description, payload, starAmount, extra = {}) => {
        return await bot.telegram.callApi('createInvoiceLink', {
            title: String(title || 'Star Item'),
            description: String(description || 'Digital Purchase'),
            payload: String(payload || `star_${Date.now()}`),
            provider_token: '',
            currency: 'XTR',
            prices: [{ label: String(title || 'Stars'), amount: Number(starAmount || 1) }],
            ...extra
        });
    };

    bot.setEmojiStatus = async (userId, emojiStatusCustomEmojiId = '', expirationDate = undefined) => {
        return await bot.telegram.callApi('setUserEmojiStatus', {
            user_id: userId,
            ...(emojiStatusCustomEmojiId ? { emoji_status_custom_emoji_id: emojiStatusCustomEmojiId } : {}),
            ...(expirationDate ? { emoji_status_expiration_date: expirationDate } : {})
        });
    };

    bot.getAvailableGifts = async () => {
        return await bot.telegram.callApi('getAvailableGifts', {});
    };

    bot.sendGift = async (userId, giftId, text = '', payForUpgrade = false) => {
        return await bot.telegram.callApi('sendGift', {
            user_id: userId,
            gift_id: String(giftId),
            ...(text ? { text: String(text) } : {}),
            ...(payForUpgrade ? { pay_for_upgrade: true } : {})
        });
    };

    bot.savePreparedInlineMessage = async (userId, result, allowUserChats = true, allowBotChats = true, allowGroupChats = true, allowChannelChats = true) => {
        return await bot.telegram.callApi('savePreparedInlineMessage', {
            user_id: userId,
            result,
            allow_user_chats: allowUserChats,
            allow_bot_chats: allowBotChats,
            allow_group_chats: allowGroupChats,
            allow_channel_chats: allowChannelChats
        });
    };

    bot.deleteMessages = async (chatId, messageIds = []) => {
        return await bot.telegram.callApi('deleteMessages', {
            chat_id: chatId,
            message_ids: Array.isArray(messageIds) ? messageIds : [messageIds]
        });
    };

    bot.forwardMessages = async (chatId, fromChatId, messageIds = [], extra = {}) => {
        return await bot.telegram.callApi('forwardMessages', {
            chat_id: chatId,
            from_chat_id: fromChatId,
            message_ids: Array.isArray(messageIds) ? messageIds : [messageIds],
            ...extra
        });
    };

    bot.copyMessages = async (chatId, fromChatId, messageIds = [], extra = {}) => {
        return await bot.telegram.callApi('copyMessages', {
            chat_id: chatId,
            from_chat_id: fromChatId,
            message_ids: Array.isArray(messageIds) ? messageIds : [messageIds],
            ...extra
        });
    };

    bot.getUserChatBoosts = async (chatId, userId) => {
        return await bot.telegram.callApi('getUserChatBoosts', {
            chat_id: chatId,
            user_id: userId
        });
    };

    bot.getBusinessConnection = async (businessConnectionId) => {
        return await bot.telegram.callApi('getBusinessConnection', {
            business_connection_id: String(businessConnectionId)
        });
    };

    bot.startLaunch = async (launchOptions = {}) => {
        await bot.launch(launchOptions);
        return bot;
    };

    return bot;
}

module.exports = {
    makeTeleSocket,
    Telegraf,
    Markup,
    TELEGRAM_EFFECTS,
    escapeMarkdownV2,
    escapeHTML,
    buildInlineKeyboard,
    verifyTelegramWebAppData
};
