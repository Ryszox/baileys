'use strict';

const officialBaileys = require('baileys-official');
const { proto } = require('../../WAProto');
const { decode64, encode64 } = require('./decode64');
const { parseCommandFlags, styleText } = require('./perfection-solutions');
const {
    FUTURE_PROOF_WRAPPER_KEYS,
    unwrapFutureProofMessage,
    getFullContentType
} = require('./proto-builders');

const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^/\\-]/;

function smsg(sock, m, store) {
    if (!m) return m;
    const M = proto?.WebMessageInfo || officialBaileys.proto?.WebMessageInfo;

    if (m.key) {
        m.id = m.key.id;
        m.isBaileys = Boolean(
            m.id &&
            (m.id.startsWith('BAE5') ||
             m.id.startsWith('3EB0') ||
             m.id.startsWith('RYSZOX') ||
             m.id.length === 16)
        );
        m.isBot = m.isBaileys;
        m.chat = m.key.remoteJid;
        m.fromMe = m.key.fromMe;
        m.isGroup = Boolean(m.chat && m.chat.endsWith('@g.us'));
        m.isNewsletter = Boolean(m.chat && m.chat.endsWith('@newsletter'));
        m.isStatus = m.chat === 'status@broadcast';
        const rawSender = m.fromMe
            ? (sock.user?.id || '')
            : (m.participant || m.key.participant || m.key.participantPn || m.chat || '');
        m.sender = typeof sock.decodeJid === 'function' ? sock.decodeJid(rawSender) : rawSender;
        if (m.sender && m.sender.endsWith('@lid') && typeof sock.resolveLid === 'function') {
            m.sender = sock.resolveLid(m.sender);
        }
        m.isOwner = typeof sock.isOwner === 'function' ? sock.isOwner(m.sender) : m.fromMe;
    }

    m.pushName = m.pushName || m.verifiedBizName || '';

    if (m.message) {
        // Detect if wrapped in any of the 23 FutureProofMessage wrappers
        m.wrapperType = FUTURE_PROOF_WRAPPER_KEYS.find((k) => Boolean(m.message[k]?.message)) || null;
        const msgContent = unwrapFutureProofMessage(m.message) || m.message;

        m.mtype = getFullContentType(msgContent) || officialBaileys.getContentType?.(msgContent || m.message);
        m.msg = m.mtype ? (msgContent || m.message)[m.mtype] : null;
        m.messageContextInfo = msgContent.messageContextInfo || m.message.messageContextInfo || null;
        m.botMetadata = m.messageContextInfo?.botMetadata || null;
        m.messageAssociation = m.messageContextInfo?.messageAssociation || null;
        m.contextInfo = m.msg?.contextInfo || null;
        m.expiration = m.contextInfo?.expiration || 0;

        let interactiveId = '';
        let interactiveText = '';
        try {
            if (m.mtype === 'interactiveResponseMessage' && m.msg?.nativeFlowResponseMessage?.paramsJson) {
                const params = JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson);
                interactiveId = params.id || params.selectedId || params.rowId || params.flow_token || '';
                interactiveText = m.msg?.body?.text || interactiveId;
            }
        } catch {}

        if (m.mtype === 'pollUpdateMessage' && typeof sock.decryptPollVoteMessage === 'function') {
            try {
                const votes = sock.decryptPollVoteMessage(m, store);
                if (Array.isArray(votes) && votes.length > 0) {
                    m.pollVotes = votes;
                }
            } catch {}
        }

        // Extract text from AIRichResponseMessage if present
        let aiRichText = '';
        if (m.mtype === 'richResponseMessage' && Array.isArray(m.msg?.submessages)) {
            aiRichText = m.msg.submessages
                .map((sub) => sub.messageText || sub.codeMetadata?.codeBlocks?.map((b) => b.codeContent).join('') || '')
                .filter(Boolean)
                .join('\n');
        }

        m.body =
            (msgContent || m.message).conversation ||
            m.msg?.caption ||
            m.msg?.text ||
            m.msg?.contentText ||
            m.msg?.description ||
            m.msg?.title ||
            m.msg?.name ||
            m.msg?.note ||
            aiRichText ||
            (m.mtype === 'listResponseMessage' && m.msg?.singleSelectReply?.selectedRowId) ||
            (m.mtype === 'buttonsResponseMessage' && m.msg?.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.msg?.selectedId) ||
            (m.mtype === 'questionResponseMessage' && m.msg?.text) ||
            (m.mtype === 'statusQuestionAnswerMessage' && m.msg?.text) ||
            (m.mtype === 'statusQuotedMessage' && m.msg?.text) ||
            (m.mtype === 'commentMessage' && (m.msg?.message?.conversation || m.msg?.message?.extendedTextMessage?.text)) ||
            interactiveId ||
            interactiveText ||
            (Array.isArray(m.pollVotes) ? m.pollVotes.join(', ') : '') ||
            '';

        m.text = m.body;
        m.hasGroupLink = /chat\.whatsapp\.com\/[A-Za-z0-9]{18,28}/i.test(m.body);
        m.hasChannelLink = /whatsapp\.com\/channel\/[A-Za-z0-9_-]{15,35}/i.test(m.body);
        m.urls = m.body.match(/https?:\/\/[^\s]+/gi) || [];
        m.hasUrl = m.urls.length > 0;

        m.isMedia = [
            'imageMessage',
            'videoMessage',
            'audioMessage',
            'stickerMessage',
            'documentMessage',
            'ptvMessage',
            'stickerPackMessage'
        ].includes(m.mtype);
        m.isImage = m.mtype === 'imageMessage';
        m.isVideo = m.mtype === 'videoMessage' || m.mtype === 'ptvMessage';
        m.isPTV = m.mtype === 'ptvMessage';
        m.isAudio = m.mtype === 'audioMessage';
        m.isVoice = m.mtype === 'audioMessage' && Boolean(m.msg?.ptt);
        m.isSticker = m.mtype === 'stickerMessage';
        m.isStickerPack = m.mtype === 'stickerPackMessage';
        m.isDocument = m.mtype === 'documentMessage';
        m.isAlbum = m.mtype === 'albumMessage';
        m.isEvent = m.mtype === 'eventMessage';
        m.isPoll = ['pollCreationMessage', 'pollCreationMessageV2', 'pollCreationMessageV3', 'pollCreationMessageV4', 'pollCreationMessageV5'].includes(m.mtype);
        m.isAIRich = m.mtype === 'richResponseMessage';
        m.isInteractive = ['interactiveMessage', 'buttonsMessage', 'templateMessage', 'listMessage'].includes(m.mtype);
        m.isViewOnce = Boolean(
            m.message.viewOnceMessage ||
            m.message.viewOnceMessageV2 ||
            m.message.viewOnceMessageV2Extension ||
            m.msg?.viewOnce
        );
        m.mimetype = m.msg?.mimetype || '';

        const firstChar = m.body.trim().charAt(0);
        m.isCmd = prefixRegex.test(firstChar);
        m.prefix = m.isCmd ? firstChar : '';
        m.command = m.isCmd ? m.body.trim().slice(1).trim().split(/\s+/)[0].toLowerCase() : '';
        const argsAll = m.body.trim().split(/\s+/);
        m.args = m.isCmd ? argsAll.slice(1) : argsAll;
        m.q = m.args.join(' ');
        m.query = m.q;
        const parsedFlags = parseCommandFlags(m.q);
        m.flags = parsedFlags.flags;
        m.cleanQuery = parsedFlags.cleanText;
        m.cleanArgs = parsedFlags.cleanArgs;

        m.mentionedJid = (m.contextInfo?.mentionedJid || []).map((j) =>
            typeof sock.decodeJid === 'function' ? sock.decodeJid(j) : j
        );
        m.groupMentions = m.contextInfo?.groupMentions || [];

        const quoted = m.contextInfo?.quotedMessage;
        if (quoted) {
            const unwrappedQuoted = unwrapFutureProofMessage(quoted) || quoted;
            const qType = getFullContentType(unwrappedQuoted) || officialBaileys.getContentType?.(unwrappedQuoted);
            const qMsg = qType ? unwrappedQuoted[qType] : unwrappedQuoted;

            const qParticipant = m.contextInfo.participant;
            const decodedQSender = typeof sock.decodeJid === 'function' ? sock.decodeJid(qParticipant) : qParticipant;
            const resolvedQSender =
                decodedQSender && decodedQSender.endsWith('@lid') && typeof sock.resolveLid === 'function'
                    ? sock.resolveLid(decodedQSender)
                    : decodedQSender;

            m.quoted = {
                type: qType,
                mtype: qType,
                id: m.contextInfo.stanzaId,
                chat: m.contextInfo.remoteJid || m.chat,
                isBaileys: Boolean(m.contextInfo.stanzaId && m.contextInfo.stanzaId.startsWith('RYSZOX')),
                sender: resolvedQSender,
                fromMe: resolvedQSender === (sock.user?.id ? sock.decodeJid(sock.user.id) : ''),
                text:
                    (typeof qMsg === 'string' ? qMsg : '') ||
                    qMsg?.text ||
                    qMsg?.caption ||
                    qMsg?.contentText ||
                    qMsg?.description ||
                    unwrappedQuoted?.conversation ||
                    '',
                msg: qMsg,
                mimetype: qMsg?.mimetype || '',
                isMedia: ['imageMessage', 'videoMessage', 'audioMessage', 'stickerMessage', 'documentMessage', 'ptvMessage'].includes(qType),
                isViewOnce: Boolean(quoted.viewOnceMessage || quoted.viewOnceMessageV2 || quoted.viewOnceMessageV2Extension || qMsg?.viewOnce),
                key: {
                    remoteJid: m.contextInfo.remoteJid || m.chat,
                    fromMe: resolvedQSender === (sock.user?.id ? sock.decodeJid(sock.user.id) : ''),
                    id: m.contextInfo.stanzaId,
                    participant: resolvedQSender
                },
                download: async (asBase64 = false) => {
                    const buf = await sock.downloadMedia(
                        { key: m.quoted.key, message: { [qType]: qMsg } },
                        false
                    );
                    return asBase64 ? encode64(buf, qMsg?.mimetype) : buf;
                },
                delete: async () => await sock.sendMessage(m.chat, { delete: m.quoted.key }),
                react: async (emoji) => await sock.sendMessage(m.chat, { react: { text: emoji, key: m.quoted.key } }),
                copyNForward: async (jid = m.chat, forceForward = false, opts = {}) =>
                    await sock.copyNForward(jid, { key: m.quoted.key, message: quoted }, forceForward, opts)
            };
            m.quoted.getQuotedObj = m.quoted.getObject = () => m.quoted;
        } else {
            m.quoted = null;
        }
    }

    m.reply = async (text, chatId = m.chat, options = {}) => {
        if (Buffer.isBuffer(text)) {
            return await sock.sendMessage(chatId, { document: text, ...options }, { quoted: m });
        }
        return await sock.sendMessage(chatId, { text: String(text), ...options }, { quoted: m });
    };

    m.react = async (emoji) => {
        return await sock.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
    };

    m.delete = async () => {
        return await sock.sendMessage(m.chat, { delete: m.key });
    };

    m.edit = async (newText) => {
        return await sock.sendMessage(m.chat, { text: String(newText), edit: m.key });
    };

    m.pin = async (durationSeconds = 86400) => {
        return await sock.sendPinMessage(m.chat, m.key, durationSeconds, true);
    };

    m.unpin = async () => {
        return await sock.sendPinMessage(m.chat, m.key, 0, false);
    };

    m.keep = async (keep = true) => {
        return await sock.sendKeepInChat(m.chat, m.key, keep);
    };

    m.download = async (asBase64 = false) => {
        const buf = await sock.downloadMedia(m, false);
        return asBase64 ? encode64(buf, m.mimetype) : buf;
    };

    m.copy = () => (M && typeof M.fromObject === 'function' ? smsg(sock, M.fromObject(M.toObject(m))) : { ...m });
    m.copyNForward = async (jid = m.chat, forceForward = false, options = {}) => {
        return await sock.sendMessage(jid, { forward: m, force: forceForward, ...options });
    };

    m.forwardToTelegram = async (teleBot, tgChatId, extra = {}) => {
        return await sock.forwardToTelegram(teleBot, tgChatId, m, extra);
    };

    m.decode64 = decode64;
    m.encode64 = encode64;
    m.styleText = styleText;

    return m;
}

module.exports = { smsg, serializeMessage: smsg };
