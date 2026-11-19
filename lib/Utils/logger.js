'use strict';

/**
 * Clean Error-Only Logger & Console Noise Filter for Baileys by ryszox
 * Keeps ONLY:
 *   1. Boot & Connected Banners (lib/Utils/banner.js)
 *   2. Real Error Logs (error / fatal)
 * Suppresses:
 *   - Pino info/debug/trace/warn JSON dumps
 *   - libsignal session dump logs ("Closing open session...", "SessionEntry", "<Buffer ...>", "Bad MAC", "Failed to decrypt...")
 */

const NOISY_PATTERNS = [
    /Closing open session/i,
    /Closing session:/i,
    /Opening session/i,
    /Removing old closed session/i,
    /SessionEntry/i,
    /_chains:/i,
    /registrationId:/i,
    /currentRatchet:/i,
    /ephemeralKeyPair:/i,
    /indexInfo:/i,
    /pendingPreKey:/i,
    /baseKey:/i,
    /remoteIdentityKey:/i,
    /Failed to decrypt message with any known session/i,
    /Bad MAC/i,
    /No matching sessions found for message/i,
    /Invalid PreKey ID/i,
    / Over2000Messages /i,
    /Decrypted message with closed session/i,
    /Migrating session to/i
];

function isNoisyLog(args = []) {
    for (const arg of args) {
        if (!arg) continue;
        const str = typeof arg === 'string'
            ? arg
            : (arg?.message || (typeof arg === 'object' ? JSON.stringify(arg) : String(arg)));
        for (const regex of NOISY_PATTERNS) {
            if (regex.test(str)) return true;
        }
    }
    return false;
}

let consoleFilterInstalled = false;

function installCleanConsoleFilter() {
    if (consoleFilterInstalled) return;
    consoleFilterInstalled = true;

    const origLog = console.log.bind(console);
    const origInfo = console.info.bind(console);
    const origWarn = console.warn.bind(console);
    const origDebug = console.debug ? console.debug.bind(console) : origLog;
    const origError = console.error.bind(console);

    console.log = (...args) => {
        if (isNoisyLog(args)) return;
        origLog(...args);
    };

    console.info = (...args) => {
        if (isNoisyLog(args)) return;
        // Suppress internal info dumps from libsignal/baileys while keeping user logs
        origInfo(...args);
    };

    console.warn = (...args) => {
        if (isNoisyLog(args)) return;
        // Suppress noisy warnings
    };

    console.debug = (...args) => {
        // Completely silence debug spam
    };

    console.error = (...args) => {
        if (isNoisyLog(args)) return;
        origError(...args);
    };

    if (process.stdout && typeof process.stdout.write === 'function') {
        const origStdoutWrite = process.stdout.write.bind(process.stdout);
        process.stdout.write = (chunk, encoding, callback) => {
            const text = Buffer.isBuffer(chunk) ? chunk.toString('utf8') : String(chunk || '');
            // Filter out raw pino JSON info/debug/trace/warn lines and libsignal dumps
            if (
                text.includes('Closing open session') ||
                text.includes('SessionEntry') ||
                text.includes('currentRatchet') ||
                text.includes('ephemeralKeyPair') ||
                (text.startsWith('{"level":') && !text.startsWith('{"level":50') && !text.startsWith('{"level":60'))
            ) {
                if (typeof encoding === 'function') encoding();
                else if (typeof callback === 'function') callback();
                return true;
            }
            return origStdoutWrite(chunk, encoding, callback);
        };
    }
}

function createCleanLogger(options = {}) {
    const noop = () => {};
    const formatError = (...args) => {
        if (isNoisyLog(args)) return;
        const msg = args
            .map((a) => (typeof a === 'string' ? a : a?.stack || a?.message || JSON.stringify(a)))
            .join(' ');
        if (!msg || msg === '{}') return;
        console.error('\x1b[31m[Baileys Error]\x1b[0m', msg);
    };

    const loggerObj = {
        level: options.level || 'error',
        trace: noop,
        debug: noop,
        info: noop,
        warn: noop,
        error: formatError,
        fatal: formatError,
        child: () => loggerObj
    };

    return loggerObj;
}

const defaultLogger = createCleanLogger();

module.exports = defaultLogger;
module.exports.default = defaultLogger;
module.exports.logger = defaultLogger;
module.exports.createCleanLogger = createCleanLogger;
module.exports.installCleanConsoleFilter = installCleanConsoleFilter;
module.exports.isNoisyLog = isNoisyLog;
