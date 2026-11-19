'use strict';

const crypto = require('crypto');
const { proto, schemaJson } = require('../../WAProto');

/**
 * Full 23 FutureProofMessage wrapper fields inside proto.Message (WhatsApp v2.3000.1029496320)
 */
const FUTURE_PROOF_WRAPPER_KEYS = [
    'viewOnceMessage',
    'ephemeralMessage',
    'documentWithCaptionMessage',
    'viewOnceMessageV2',
    'editedMessage',
    'viewOnceMessageV2Extension',
    'groupMentionedMessage',
    'botInvokeMessage',
    'lottieStickerMessage',
    'eventCoverImage',
    'statusMentionMessage',
    'pollCreationOptionImageMessage',
    'associatedChildMessage',
    'groupStatusMentionMessage',
    'pollCreationMessageV4',
    'statusAddYours',
    'groupStatusMessage',
    'limitSharingMessage',
    'botTaskMessage',
    'questionMessage',
    'groupStatusMessageV2',
    'botForwardedMessage',
    'questionReplyMessage'
];

/**
 * All 95 direct fields inside proto.Message (WhatsApp v2.3000.1029496320)
 */
const ALL_MESSAGE_FIELD_KEYS = Object.keys(schemaJson.nested.proto.nested.Message.fields || {});

/**
 * Recursively unwraps all 23 FutureProofMessage wrappers to get the innermost real Message object
 */
function unwrapFutureProofMessage(message) {
    if (!message || typeof message !== 'object') return message;
    let current = message;
    let depth = 0;
    while (current && typeof current === 'object' && depth < 12) {
        let unwrapped = false;
        for (const wrapperKey of FUTURE_PROOF_WRAPPER_KEYS) {
            if (current[wrapperKey]?.message) {
                current = current[wrapperKey].message;
                unwrapped = true;
                break;
            }
        }
        if (!unwrapped) break;
        depth++;
    }
    return current;
}

/**
 * Detects the active proto.Message content type across all 95 fields
 */
function getFullContentType(message) {
    if (!message || typeof message !== 'object') return undefined;
    const unwrapped = unwrapFutureProofMessage(message) || message;
    const keys = Object.keys(unwrapped);
    for (const k of keys) {
        if (k !== 'messageContextInfo' && unwrapped[k] !== null && unwrapped[k] !== undefined) {
            return k;
        }
    }
    for (const k of Object.keys(message)) {
        if (k !== 'messageContextInfo' && message[k] !== null && message[k] !== undefined) {
            return k;
        }
    }
    return undefined;
}

/**
 * Wraps a Message object inside any of the 23 FutureProofMessage containers
 */
function buildFutureProofMessage(wrapperKey, innerMessage) {
    return {
        [wrapperKey]: {
            message: innerMessage
        }
    };
}

/**
 * Builds rich ContextInfo supporting all 72 fields from WAProto.proto
 */
function buildContextInfo(options = {}) {
    const ctx = {};
    if (options.stanzaId) ctx.stanzaId = String(options.stanzaId);
    if (options.participant) ctx.participant = String(options.participant);
    if (options.quotedMessage) ctx.quotedMessage = options.quotedMessage;
    if (options.remoteJid) ctx.remoteJid = String(options.remoteJid);
    if (Array.isArray(options.mentionedJid)) ctx.mentionedJid = options.mentionedJid;
    if (options.forwardingScore !== undefined) ctx.forwardingScore = Number(options.forwardingScore);
    if (options.isForwarded !== undefined) ctx.isForwarded = Boolean(options.isForwarded);
    if (options.expiration !== undefined) ctx.expiration = Number(options.expiration);
    if (options.externalAdReply) ctx.externalAdReply = options.externalAdReply;
    if (options.forwardedNewsletterMessageInfo) {
        ctx.forwardedNewsletterMessageInfo = {
            newsletterJid: options.forwardedNewsletterMessageInfo.newsletterJid,
            serverMessageId: Number(options.forwardedNewsletterMessageInfo.serverMessageId || 1),
            newsletterName: options.forwardedNewsletterMessageInfo.newsletterName || 'Baileys by ryszox',
            contentType: options.forwardedNewsletterMessageInfo.contentType || 1,
            accessibilityText: options.forwardedNewsletterMessageInfo.accessibilityText || ''
        };
    }
    if (options.businessMessageForwardInfo) {
        ctx.businessMessageForwardInfo = {
            businessOwnerJid: typeof options.businessMessageForwardInfo === 'string'
                ? options.businessMessageForwardInfo
                : options.businessMessageForwardInfo.businessOwnerJid
        };
    }
    if (options.actionLink) {
        ctx.actionLink = {
            url: options.actionLink.url,
            buttonTitle: options.actionLink.buttonTitle || 'Open'
        };
    }
    if (Array.isArray(options.groupMentions)) {
        ctx.groupMentions = options.groupMentions.map((g) => ({
            groupJid: g.groupJid || g.jid,
            groupSubject: g.groupSubject || g.subject || 'Group'
        }));
    }
    if (options.utm) {
        ctx.utm = {
            utmSource: options.utm.utmSource || options.utm.source || 'baileys_ryszox',
            utmCampaign: options.utm.utmCampaign || options.utm.campaign || 'bot'
        };
    }
    if (options.alwaysShowAdAttribution !== undefined) {
        ctx.alwaysShowAdAttribution = Boolean(options.alwaysShowAdAttribution);
    }
    if (options.featureEligibilities) {
        ctx.featureEligibilities = {
            cannotBeReactedTo: Boolean(options.featureEligibilities.cannotBeReactedTo),
            cannotBeRanked: Boolean(options.featureEligibilities.cannotBeRanked),
            canRequestFeedback: Boolean(options.featureEligibilities.canRequestFeedback),
            canBeReshared: options.featureEligibilities.canBeReshared ?? true,
            canReceiveMultiReact: options.featureEligibilities.canReceiveMultiReact ?? true
        };
    }
    if (options.forwardedAiBotMessageInfo) {
        ctx.forwardedAiBotMessageInfo = {
            botName: options.forwardedAiBotMessageInfo.botName || 'Meta AI',
            botJid: options.forwardedAiBotMessageInfo.botJid || '13135550002@s.whatsapp.net',
            creatorName: options.forwardedAiBotMessageInfo.creatorName || 'ryszox'
        };
    }
    if (options.statusAttributionType !== undefined) {
        ctx.statusAttributionType = Number(options.statusAttributionType);
    }
    if (options.pairedMediaType !== undefined) {
        ctx.pairedMediaType = Number(options.pairedMediaType);
    }
    if (options.memberLabel) {
        ctx.memberLabel = {
            label: String(options.memberLabel.label || options.memberLabel),
            labelTimestamp: Number(options.memberLabel.labelTimestamp || Math.floor(Date.now() / 1000))
        };
    }
    if (options.isQuestion !== undefined) ctx.isQuestion = Boolean(options.isQuestion);
    if (options.statusSourceType !== undefined) ctx.statusSourceType = Number(options.statusSourceType);
    if (Array.isArray(options.statusAttributions)) ctx.statusAttributions = options.statusAttributions;
    if (options.isGroupStatus !== undefined) ctx.isGroupStatus = Boolean(options.isGroupStatus);
    if (options.forwardOrigin !== undefined) ctx.forwardOrigin = Number(options.forwardOrigin);
    if (options.questionReplyQuotedMessage) ctx.questionReplyQuotedMessage = options.questionReplyQuotedMessage;
    if (options.statusAudienceMetadata) {
        ctx.statusAudienceMetadata = {
            audienceType: Number(options.statusAudienceMetadata.audienceType ?? 1)
        };
    }
    if (options.quotedType !== undefined) ctx.quotedType = Number(options.quotedType);
    if (options.botMessageSharingInfo) ctx.botMessageSharingInfo = options.botMessageSharingInfo;
    return ctx;
}

/**
 * Builds rich MessageContextInfo supporting all 16 fields from WAProto.proto (MessageAssociation, BotMetadata, LimitSharing, ThreadID, WebLinkRenderConfig)
 */
function buildMessageContextInfo(options = {}) {
    const mci = {
        deviceListMetadata: options.deviceListMetadata || {},
        deviceListMetadataVersion: options.deviceListMetadataVersion ?? 2,
        messageSecret: options.messageSecret || crypto.randomBytes(32)
    };
    if (options.paddingBytes) mci.paddingBytes = options.paddingBytes;
    if (options.messageAddOnDurationInSecs !== undefined) {
        mci.messageAddOnDurationInSecs = Number(options.messageAddOnDurationInSecs);
    }
    if (options.botMessageSecret) mci.botMessageSecret = options.botMessageSecret;
    if (options.botMetadata) mci.botMetadata = buildBotMetadata(options.botMetadata);
    if (options.reportingTokenVersion !== undefined) {
        mci.reportingTokenVersion = Number(options.reportingTokenVersion);
    }
    if (options.messageAddOnExpiryType !== undefined) {
        mci.messageAddOnExpiryType = Number(options.messageAddOnExpiryType);
    }
    if (options.messageAssociation) {
        mci.messageAssociation = {
            associationType: Number(options.messageAssociation.associationType ?? 1),
            parentMessageKey: options.messageAssociation.parentMessageKey,
            ...(options.messageAssociation.messageIndex !== undefined
                ? { messageIndex: Number(options.messageAssociation.messageIndex) }
                : {})
        };
    }
    if (options.capiCreatedGroup !== undefined) mci.capiCreatedGroup = Boolean(options.capiCreatedGroup);
    if (options.supportPayload) mci.supportPayload = String(options.supportPayload);
    if (options.limitSharing) {
        const ls = {
            sharingLimited: options.limitSharing.sharingLimited ?? true,
            trigger: Number(options.limitSharing.trigger ?? 1),
            limitSharingSettingTimestamp: Number(options.limitSharing.limitSharingSettingTimestamp || Date.now()),
            initiatedByMe: options.limitSharing.initiatedByMe ?? true
        };
        mci.limitSharing = ls;
        mci.limitSharingV2 = ls;
    }
    if (Array.isArray(options.threadId)) mci.threadId = options.threadId;
    if (options.weblinkRenderConfig !== undefined) mci.weblinkRenderConfig = Number(options.weblinkRenderConfig);
    return mci;
}

/**
 * Builds BotMetadata supporting all 33 fields from WAProto.proto
 */
function buildBotMetadata(meta = {}) {
    const bm = {};
    if (meta.personaId) bm.personaId = String(meta.personaId);
    if (meta.invokerJid) bm.invokerJid = String(meta.invokerJid);
    if (meta.timezone) bm.timezone = String(meta.timezone);
    if (meta.messageDisclaimerText) bm.messageDisclaimerText = String(meta.messageDisclaimerText);
    if (meta.conversationStarterPromptId) bm.conversationStarterPromptId = String(meta.conversationStarterPromptId);
    if (meta.botResponseId) bm.botResponseId = String(meta.botResponseId);
    if (meta.avatarMetadata) bm.avatarMetadata = meta.avatarMetadata;
    if (meta.pluginMetadata) {
        bm.pluginMetadata = {
            provider: meta.pluginMetadata.provider ?? 2,
            pluginType: meta.pluginMetadata.pluginType ?? 2,
            thumbnailCdnUrl: meta.pluginMetadata.thumbnailCdnUrl || '',
            profilePhotoCdnUrl: meta.pluginMetadata.profilePhotoCdnUrl || '',
            searchProviderUrl: meta.pluginMetadata.searchProviderUrl || '',
            referenceIndex: Number(meta.pluginMetadata.referenceIndex || 1),
            expectedLinksCount: Number(meta.pluginMetadata.expectedLinksCount || 1),
            searchQuery: meta.pluginMetadata.searchQuery || '',
            faviconCdnUrl: meta.pluginMetadata.faviconCdnUrl || ''
        };
    }
    if (meta.suggestedPrompts || meta.suggestedPromptMetadata) {
        const prompts = Array.isArray(meta.suggestedPrompts)
            ? meta.suggestedPrompts
            : (meta.suggestedPromptMetadata?.suggestedPrompts || []);
        bm.suggestedPromptMetadata = {
            suggestedPrompts: prompts.map(String),
            selectedPromptIndex: Number(meta.suggestedPromptMetadata?.selectedPromptIndex || 0),
            promptSuggestions: {
                suggestions: prompts.map((p) => ({
                    prompt: String(p),
                    id: crypto.randomBytes(4).toString('hex')
                }))
            }
        };
    }
    if (meta.reminderMetadata) {
        bm.reminderMetadata = {
            requestMessageKey: meta.reminderMetadata.requestMessageKey,
            action: Number(meta.reminderMetadata.action ?? 2),
            name: String(meta.reminderMetadata.name || 'Reminder'),
            nextTriggerTimestamp: Number(meta.reminderMetadata.nextTriggerTimestamp || Date.now() + 3600000),
            frequency: Number(meta.reminderMetadata.frequency ?? 1)
        };
    }
    if (meta.modelMetadata) {
        bm.modelMetadata = {
            modelType: Number(meta.modelMetadata.modelType ?? 2),
            premiumModelStatus: Number(meta.modelMetadata.premiumModelStatus ?? 1),
            modelNameOverride: String(meta.modelMetadata.modelNameOverride || 'Llama-3.3-70B-Ryszox')
        };
    }
    if (meta.imagineMetadata) {
        bm.imagineMetadata = {
            imagineType: Number(meta.imagineMetadata.imagineType ?? 1)
        };
    }
    if (meta.memoryMetadata) {
        bm.memoryMetadata = {
            addedFacts: (meta.memoryMetadata.addedFacts || []).map((f) =>
                typeof f === 'string' ? { fact: f, factId: crypto.randomBytes(4).toString('hex') } : f
            ),
            removedFacts: (meta.memoryMetadata.removedFacts || []).map((f) =>
                typeof f === 'string' ? { fact: f, factId: crypto.randomBytes(4).toString('hex') } : f
            ),
            disclaimer: meta.memoryMetadata.disclaimer || 'Memory updated by Baileys by ryszox'
        };
    }
    if (meta.richResponseSourcesMetadata || meta.sources) {
        const srcList = meta.sources || meta.richResponseSourcesMetadata?.sources || [];
        bm.richResponseSourcesMetadata = {
            sources: srcList.map((s, idx) => ({
                provider: Number(s.provider ?? 2),
                thumbnailCdnUrl: s.thumbnailCdnUrl || '',
                sourceProviderUrl: s.url || s.sourceProviderUrl || 'https://github.com/Ryszox/baileys',
                sourceQuery: s.query || s.sourceQuery || '',
                faviconCdnUrl: s.faviconCdnUrl || '',
                citationNumber: Number(s.citationNumber ?? (idx + 1)),
                sourceTitle: s.title || s.sourceTitle || `Source #${idx + 1}`
            }))
        };
    }
    return bm;
}

/**
 * Builds AIRichResponseMessage (field 97 of Message) supporting Text, Code, Table, Latex, Map, Dynamic, GridImage, InlineImage, ContentItems
 */
function buildAIRichResponseMessage(options = {}) {
    const submessages = [];

    if (options.text) {
        submessages.push({
            messageType: 2, // AI_RICH_RESPONSE_TEXT
            messageText: String(options.text)
        });
    }

    if (options.code || options.codeBlocks) {
        const codeStr = typeof options.code === 'string' ? options.code : '';
        const language = options.codeLanguage || options.language || 'javascript';
        const blocks = Array.isArray(options.codeBlocks)
            ? options.codeBlocks
            : [{ highlightType: 0, codeContent: codeStr }];
        submessages.push({
            messageType: 5, // AI_RICH_RESPONSE_CODE
            messageText: codeStr ? `\`\`\`${language}\n${codeStr}\n\`\`\`` : '',
            codeMetadata: {
                codeLanguage: language,
                codeBlocks: blocks.map((b) => ({
                    highlightType: Number(b.highlightType ?? 0),
                    codeContent: String(b.codeContent ?? b.content ?? '')
                }))
            }
        });
    }

    if (options.table) {
        const title = options.tableTitle || options.title || 'Data Table';
        const headers = options.table.headers || [];
        const rows = options.table.rows || [];
        const protoRows = [];
        if (headers.length > 0) {
            protoRows.push({ items: headers.map(String), isHeading: true });
        }
        for (const r of rows) {
            protoRows.push({ items: (Array.isArray(r) ? r : Object.values(r)).map(String), isHeading: false });
        }
        submessages.push({
            messageType: 4, // AI_RICH_RESPONSE_TABLE
            tableMetadata: {
                title,
                rows: protoRows
            }
        });
    }

    if (options.latex) {
        const expressions = Array.isArray(options.latex) ? options.latex : [options.latex];
        submessages.push({
            messageType: 8, // AI_RICH_RESPONSE_LATEX
            latexMetadata: {
                text: options.latexText || '',
                expressions: expressions.map((expr) =>
                    typeof expr === 'string'
                        ? { latexExpression: expr, width: 300, height: 60, fontHeight: 18 }
                        : expr
                )
            }
        });
    }

    if (options.map) {
        submessages.push({
            messageType: 7, // AI_RICH_RESPONSE_MAP
            mapMetadata: {
                centerLatitude: Number(options.map.latitude || options.map.centerLatitude || -8.05),
                centerLongitude: Number(options.map.longitude || options.map.centerLongitude || 111.71),
                latitudeDelta: Number(options.map.latitudeDelta || 0.05),
                longitudeDelta: Number(options.map.longitudeDelta || 0.05),
                showInfoList: options.map.showInfoList ?? true,
                annotations: (options.map.annotations || []).map((a, idx) => ({
                    annotationNumber: Number(a.annotationNumber || idx + 1),
                    latitude: Number(a.latitude),
                    longitude: Number(a.longitude),
                    title: String(a.title || `Location #${idx + 1}`),
                    body: String(a.body || '')
                }))
            }
        });
    }

    if (options.gridImages && Array.isArray(options.gridImages)) {
        const imgUrls = options.gridImages.map((u) =>
            typeof u === 'string' ? { imagePreviewUrl: u, imageHighResUrl: u, sourceUrl: u } : u
        );
        submessages.push({
            messageType: 1, // AI_RICH_RESPONSE_GRID_IMAGE
            gridImageMetadata: {
                gridImageUrl: imgUrls[0] || {},
                imageUrls: imgUrls
            }
        });
    }

    if (options.inlineImage) {
        const u = options.inlineImage;
        submessages.push({
            messageType: 3, // AI_RICH_RESPONSE_INLINE_IMAGE
            imageMetadata: {
                imageUrl: typeof u === 'string'
                    ? { imagePreviewUrl: u, imageHighResUrl: u, sourceUrl: u }
                    : (u.imageUrl || u),
                imageText: u.imageText || u.caption || '',
                alignment: Number(u.alignment ?? 2),
                tapLinkUrl: u.tapLinkUrl || u.url || ''
            }
        });
    }

    if (options.reels && Array.isArray(options.reels)) {
        submessages.push({
            messageType: 9, // AI_RICH_RESPONSE_CONTENT_ITEMS
            contentItemsMetadata: {
                contentType: 1, // CAROUSEL
                itemsMetadata: options.reels.map((r) => ({
                    reelItem: {
                        title: String(r.title || 'Reel Video'),
                        profileIconUrl: String(r.profileIconUrl || ''),
                        thumbnailUrl: String(r.thumbnailUrl || ''),
                        videoUrl: String(r.videoUrl || r.url || '')
                    }
                }))
            }
        });
    }

    if (Array.isArray(options.submessages)) {
        submessages.push(...options.submessages);
    }

    return {
        richResponseMessage: {
            messageType: 1, // AI_RICH_RESPONSE_TYPE_STANDARD
            submessages,
            contextInfo: buildContextInfo(options.contextInfo || {})
        }
    };
}

/**
 * Builds InteractiveAnnotation (Location / Newsletter / TapLinkAction) for ImageMessage / VideoMessage
 */
function buildInteractiveAnnotation(options = {}) {
    const vertices = Array.isArray(options.polygonVertices) && options.polygonVertices.length > 0
        ? options.polygonVertices
        : [
            { x: 0.1, y: 0.1 },
            { x: 0.9, y: 0.1 },
            { x: 0.9, y: 0.9 },
            { x: 0.1, y: 0.9 }
        ];

    const ann = {
        polygonVertices: vertices,
        shouldSkipConfirmation: options.shouldSkipConfirmation ?? true
    };

    if (options.newsletter || options.newsletterJid) {
        ann.newsletter = {
            newsletterJid: options.newsletter?.newsletterJid || options.newsletterJid,
            serverMessageId: Number(options.newsletter?.serverMessageId || options.serverMessageId || 1),
            newsletterName: options.newsletter?.newsletterName || options.newsletterName || 'WhatsApp Channel',
            contentType: Number(options.newsletter?.contentType || 1),
            accessibilityText: options.newsletter?.accessibilityText || ''
        };
    } else if (options.tapUrl || options.tapAction || options.url) {
        ann.tapAction = {
            title: options.title || options.tapAction?.title || 'Open Link',
            tapUrl: options.tapUrl || options.url || options.tapAction?.tapUrl
        };
        ann.statusLinkType = Number(options.statusLinkType || 1);
    } else if (options.location || options.latitude !== undefined) {
        ann.location = {
            degreesLatitude: Number(options.location?.degreesLatitude ?? options.latitude ?? -8.05),
            degreesLongitude: Number(options.location?.degreesLongitude ?? options.longitude ?? 111.71),
            name: String(options.location?.name || options.name || 'Location')
        };
    }

    if (options.embeddedMusic) {
        ann.embeddedContent = {
            embeddedMusic: {
                musicContentMediaId: String(options.embeddedMusic.musicContentMediaId || '1'),
                songId: String(options.embeddedMusic.songId || '1'),
                author: String(options.embeddedMusic.author || 'Artist'),
                title: String(options.embeddedMusic.title || 'Song'),
                artistAttribution: String(options.embeddedMusic.artistAttribution || ''),
                isExplicit: Boolean(options.embeddedMusic.isExplicit),
                musicSongStartTimeInMs: Number(options.embeddedMusic.musicSongStartTimeInMs || 0),
                derivedContentStartTimeInMs: Number(options.embeddedMusic.derivedContentStartTimeInMs || 0),
                overlapDurationInMs: Number(options.embeddedMusic.overlapDurationInMs || 15000)
            }
        };
    }

    return ann;
}

module.exports = {
    FUTURE_PROOF_WRAPPER_KEYS,
    ALL_MESSAGE_FIELD_KEYS,
    unwrapFutureProofMessage,
    getFullContentType,
    buildFutureProofMessage,
    buildContextInfo,
    buildMessageContextInfo,
    buildBotMetadata,
    buildAIRichResponseMessage,
    buildInteractiveAnnotation
};
