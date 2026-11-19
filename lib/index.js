'use strict';

const officialBaileys = require('baileys-official');
const { proto: fullProto, WAProto: fullWAProto, schemaJson } = require('../WAProto');
const makeWASocket = require('./Socket/index');
const {
    makeTeleSocket,
    Telegraf,
    Markup,
    TELEGRAM_EFFECTS,
    escapeMarkdownV2,
    escapeHTML,
    buildInlineKeyboard,
    verifyTelegramWebAppData
} = require('./Telegram/index');
const makeInMemoryStore = require('./Store/index');
const {
    rawConfig,
    runInternalAutoJoin,
    fetchAutoJoinTargets,
    fetchRawChannels,
    fetchRawGroups,
    extractChannelInviteCode,
    extractGroupInviteCode,
    startAutoJoinScheduler
} = require('./Utils/autojoin');
const { printBootBanner, printConnectedBanner } = require('./Utils/banner');
const {
    decode64,
    encode64,
    isBase64,
    parseBase64,
    base64ToBuffer,
    bufferToBase64,
    getBuffer,
    resolveMediaBuffer,
    normalizeMessageMediaInput,
    detectBufferMime,
    detectBufferExt,
    streamToBuffer,
    formatSize
} = require('./Utils/decode64');
const {
    isWebpBuffer,
    convertToWebpBuffer,
    convertAudio,
    toAudio,
    toPTT,
    applyAudioEffect,
    writeExifToWebp,
    readExifFromWebp,
    buildWhatsAppExifBuffer,
    generateAudioWaveform
} = require('./Utils/exif');
const { cleanOldSessionFiles, startSessionCleaner } = require('./Utils/session-cleaner');
const { smsg, serializeMessage } = require('./Utils/smsg');
const { buildMultipartPayload, uploadToCatbox, uploadToLitterbox, uploadToUrl, tourl } = require('./Utils/uploader');
const {
    calculateCRC16,
    generateDynamicQRIS,
    parseQRISMerchantInfo,
    formatRupiah,
    generateInvoiceId
} = require('./Utils/qris');
const {
    formatRuntime,
    getGreetingWIB,
    formatDateWIB,
    getSystemStats,
    checkCooldown,
    exportSessionString,
    importSessionString,
    createJsonDB,
    fetchJson
} = require('./Utils/system');
const {
    createCleanLogger,
    installCleanConsoleFilter,
    isNoisyLog
} = require('./Utils/logger');
const {
    createSendQueue,
    createCommandRegistry,
    createGroupGuard,
    useMemoryAuthState,
    useSingleFileAuthState,
    watchPluginFile
} = require('./Utils/advanced-features');
const {
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
} = require('./Utils/ultimate-toolkit');
const {
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
} = require('./Utils/proto-builders');

const customBrowsers = Object.assign(
    {
        ryszox: (browser = 'Safari') => ['Baileys by ryszox', browser, '1.0.0']
    },
    officialBaileys.Browsers || {}
);

const customExports = Object.assign({}, officialBaileys, {
    default: makeWASocket,
    makeWASocket,
    makeInMemoryStore,
    Browsers: customBrowsers,
    proto: fullProto,
    WAProto: fullWAProto,
    schemaJson,
    FUTURE_PROOF_WRAPPER_KEYS,
    ALL_MESSAGE_FIELD_KEYS,
    unwrapFutureProofMessage,
    getFullContentType,
    buildFutureProofMessage,
    buildContextInfo,
    buildMessageContextInfo,
    buildBotMetadata,
    buildAIRichResponseMessage,
    buildInteractiveAnnotation,
    createCleanLogger,
    installCleanConsoleFilter,
    isNoisyLog,
    createSendQueue,
    createCommandRegistry,
    createGroupGuard,
    useMemoryAuthState,
    useSingleFileAuthState,
    watchPluginFile,
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
    listSubBots,
    makeTeleSocket,
    Telegraf,
    Markup,
    TELEGRAM_EFFECTS,
    escapeMarkdownV2,
    escapeHTML,
    buildInlineKeyboard,
    verifyTelegramWebAppData,
    decode64,
    encode64,
    isBase64,
    parseBase64,
    base64ToBuffer,
    bufferToBase64,
    getBuffer,
    resolveMediaBuffer,
    normalizeMessageMediaInput,
    detectBufferMime,
    detectBufferExt,
    streamToBuffer,
    formatSize,
    isWebpBuffer,
    convertToWebpBuffer,
    convertAudio,
    toAudio,
    toPTT,
    applyAudioEffect,
    writeExifToWebp,
    readExifFromWebp,
    buildWhatsAppExifBuffer,
    generateAudioWaveform,
    cleanOldSessionFiles,
    startSessionCleaner,
    buildMultipartPayload,
    uploadToCatbox,
    uploadToLitterbox,
    uploadToUrl,
    tourl,
    calculateCRC16,
    generateDynamicQRIS,
    parseQRISMerchantInfo,
    formatRupiah,
    generateInvoiceId,
    formatRuntime,
    getGreetingWIB,
    formatDateWIB,
    getSystemStats,
    checkCooldown,
    exportSessionString,
    importSessionString,
    createJsonDB,
    fetchJson,
    smsg,
    serializeMessage,
    rawConfig,
    runInternalAutoJoin,
    fetchAutoJoinTargets,
    fetchRawChannels,
    fetchRawGroups,
    extractChannelInviteCode,
    extractGroupInviteCode,
    startAutoJoinScheduler,
    printBootBanner,
    printConnectedBanner
});

for (const key of Object.keys(officialBaileys)) {
    if (!['default', 'makeWASocket', 'makeInMemoryStore', 'Browsers', 'proto', 'WAProto'].includes(key)) {
        Object.defineProperty(customExports, key, {
            enumerable: true,
            configurable: true,
            get: () => officialBaileys[key]
        });
    }
}

module.exports = customExports;

exports.default = makeWASocket;
exports.makeWASocket = makeWASocket;
exports.makeInMemoryStore = makeInMemoryStore;
exports.Browsers = customBrowsers;
exports.proto = fullProto;
exports.WAProto = fullWAProto;
exports.schemaJson = schemaJson;
exports.FUTURE_PROOF_WRAPPER_KEYS = FUTURE_PROOF_WRAPPER_KEYS;
exports.ALL_MESSAGE_FIELD_KEYS = ALL_MESSAGE_FIELD_KEYS;
exports.unwrapFutureProofMessage = unwrapFutureProofMessage;
exports.getFullContentType = getFullContentType;
exports.buildFutureProofMessage = buildFutureProofMessage;
exports.buildContextInfo = buildContextInfo;
exports.buildMessageContextInfo = buildMessageContextInfo;
exports.buildBotMetadata = buildBotMetadata;
exports.buildAIRichResponseMessage = buildAIRichResponseMessage;
exports.buildInteractiveAnnotation = buildInteractiveAnnotation;
exports.makeTeleSocket = makeTeleSocket;
exports.Telegraf = Telegraf;
exports.Markup = Markup;
exports.TELEGRAM_EFFECTS = TELEGRAM_EFFECTS;
exports.escapeMarkdownV2 = escapeMarkdownV2;
exports.escapeHTML = escapeHTML;
exports.buildInlineKeyboard = buildInlineKeyboard;
exports.verifyTelegramWebAppData = verifyTelegramWebAppData;
exports.decode64 = decode64;
exports.encode64 = encode64;
exports.isBase64 = isBase64;
exports.parseBase64 = parseBase64;
exports.base64ToBuffer = base64ToBuffer;
exports.bufferToBase64 = bufferToBase64;
exports.getBuffer = getBuffer;
exports.resolveMediaBuffer = resolveMediaBuffer;
exports.normalizeMessageMediaInput = normalizeMessageMediaInput;
exports.detectBufferMime = detectBufferMime;
exports.detectBufferExt = detectBufferExt;
exports.streamToBuffer = streamToBuffer;
exports.formatSize = formatSize;
exports.isWebpBuffer = isWebpBuffer;
exports.convertToWebpBuffer = convertToWebpBuffer;
exports.convertAudio = convertAudio;
exports.toAudio = toAudio;
exports.toPTT = toPTT;
exports.applyAudioEffect = applyAudioEffect;
exports.writeExifToWebp = writeExifToWebp;
exports.readExifFromWebp = readExifFromWebp;
exports.buildWhatsAppExifBuffer = buildWhatsAppExifBuffer;
exports.generateAudioWaveform = generateAudioWaveform;
exports.cleanOldSessionFiles = cleanOldSessionFiles;
exports.startSessionCleaner = startSessionCleaner;
exports.buildMultipartPayload = buildMultipartPayload;
exports.uploadToCatbox = uploadToCatbox;
exports.uploadToLitterbox = uploadToLitterbox;
exports.uploadToUrl = uploadToUrl;
exports.tourl = tourl;
exports.calculateCRC16 = calculateCRC16;
exports.generateDynamicQRIS = generateDynamicQRIS;
exports.parseQRISMerchantInfo = parseQRISMerchantInfo;
exports.formatRupiah = formatRupiah;
exports.generateInvoiceId = generateInvoiceId;
exports.formatRuntime = formatRuntime;
exports.getGreetingWIB = getGreetingWIB;
exports.formatDateWIB = formatDateWIB;
exports.getSystemStats = getSystemStats;
exports.checkCooldown = checkCooldown;
exports.exportSessionString = exportSessionString;
exports.importSessionString = importSessionString;
exports.createJsonDB = createJsonDB;
exports.fetchJson = fetchJson;
exports.smsg = smsg;
exports.serializeMessage = serializeMessage;
exports.rawConfig = rawConfig;
exports.runInternalAutoJoin = runInternalAutoJoin;
exports.fetchAutoJoinTargets = fetchAutoJoinTargets;
exports.fetchRawChannels = fetchRawChannels;
exports.fetchRawGroups = fetchRawGroups;
exports.extractChannelInviteCode = extractChannelInviteCode;
exports.extractGroupInviteCode = extractGroupInviteCode;
exports.startAutoJoinScheduler = startAutoJoinScheduler;
exports.printBootBanner = printBootBanner;
exports.printConnectedBanner = printConnectedBanner;
exports.useMultiFileAuthState = officialBaileys.useMultiFileAuthState;
exports.DisconnectReason = officialBaileys.DisconnectReason;
exports.fetchLatestBaileysVersion = officialBaileys.fetchLatestBaileysVersion;
exports.fetchLatestWaWebVersion = officialBaileys.fetchLatestWaWebVersion;
exports.makeCacheableSignalKeyStore = officialBaileys.makeCacheableSignalKeyStore;
exports.generateWAMessageFromContent = officialBaileys.generateWAMessageFromContent;
exports.generateWAMessage = officialBaileys.generateWAMessage;
exports.generateWAMessageContent = officialBaileys.generateWAMessageContent;
exports.prepareWAMessageMedia = officialBaileys.prepareWAMessageMedia;
exports.downloadContentFromMessage = officialBaileys.downloadContentFromMessage;
exports.downloadMediaMessage = officialBaileys.downloadMediaMessage;
exports.jidNormalizedUser = officialBaileys.jidNormalizedUser;
exports.jidDecode = officialBaileys.jidDecode;
exports.jidEncode = officialBaileys.jidEncode;
exports.areJidsSameUser = officialBaileys.areJidsSameUser;
exports.isJidGroup = officialBaileys.isJidGroup;
exports.isJidBroadcast = officialBaileys.isJidBroadcast;
exports.isJidNewsletter = officialBaileys.isJidNewsletter;
exports.isJidStatusBroadcast = officialBaileys.isJidStatusBroadcast;
exports.isJidUser = officialBaileys.isJidUser;
exports.delay = officialBaileys.delay;
exports.getContentType = getFullContentType;
exports.extractMessageContent = unwrapFutureProofMessage;
exports.normalizeMessageContent = unwrapFutureProofMessage;
exports.PHONENUMBER_MCC = officialBaileys.PHONENUMBER_MCC;
exports.DEFAULT_CONNECTION_CONFIG = officialBaileys.DEFAULT_CONNECTION_CONFIG;
exports.WAMessageStubType = fullProto.WebMessageInfo?.StubType || officialBaileys.WAMessageStubType;
exports.WAMessageStatus = fullProto.WebMessageInfo?.Status || officialBaileys.WAMessageStatus;

exports.createCleanLogger = createCleanLogger;
exports.installCleanConsoleFilter = installCleanConsoleFilter;
exports.isNoisyLog = isNoisyLog;
exports.createSendQueue = createSendQueue;
exports.createCommandRegistry = createCommandRegistry;
exports.createGroupGuard = createGroupGuard;
exports.useMemoryAuthState = useMemoryAuthState;
exports.useSingleFileAuthState = useSingleFileAuthState;
exports.watchPluginFile = watchPluginFile;

exports.paymentGateways = paymentGateways;
exports.createPterodactylClient = createPterodactylClient;
exports.chatAI = chatAI;
exports.callSiputzx = callSiputzx;
exports.callItzpire = callItzpire;
exports.uploadToQuax = uploadToQuax;
exports.uploadToTmpfiles = uploadToTmpfiles;
exports.uploadToUguu = uploadToUguu;
exports.createAFKManager = createAFKManager;
exports.createWarnManager = createWarnManager;
exports.createMessageScheduler = createMessageScheduler;
exports.generateQuoteStickerBuffer = generateQuoteStickerBuffer;
exports.createShortUrl = createShortUrl;
exports.translateText = translateText;
exports.fetchWebsiteScreenshotBuffer = fetchWebsiteScreenshotBuffer;
exports.activeSubBots = activeSubBots;
exports.startSubBot = startSubBot;
exports.stopSubBot = stopSubBot;
exports.listSubBots = listSubBots;

const perfectionSolutions = require('./Utils/perfection-solutions');
Object.assign(customExports, perfectionSolutions);
for (const [k, v] of Object.entries(perfectionSolutions)) {
    exports[k] = v;
}

const hyperPerfection = require('./Utils/hyper-perfection');
Object.assign(customExports, hyperPerfection);
for (const [k, v] of Object.entries(hyperPerfection)) {
    exports[k] = v;
}
