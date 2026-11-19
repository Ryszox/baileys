'use strict';

const fs = require('fs');
const path = require('path');

function cleanOldSessionFiles(sessionDir = 'sessions', options = {}) {
    const maxPreKeys = options.maxPreKeys || 150;
    const maxSenderKeys = options.maxSenderKeys || 200;

    try {
        if (!fs.existsSync(sessionDir)) return { removed: 0 };
        const files = fs.readdirSync(sessionDir);

        const preKeys = [];
        const senderKeys = [];

        for (const file of files) {
            if (file === 'creds.json' || file.startsWith('app-state-sync')) continue;
            const fullPath = path.join(sessionDir, file);
            let stat;
            try {
                stat = fs.statSync(fullPath);
            } catch {
                continue;
            }
            if (!stat.isFile()) continue;

            if (file.startsWith('pre-key-')) {
                preKeys.push({ file, fullPath, mtime: stat.mtimeMs });
            } else if (file.startsWith('sender-key-')) {
                senderKeys.push({ file, fullPath, mtime: stat.mtimeMs });
            }
        }

        let removed = 0;

        if (preKeys.length > maxPreKeys) {
            preKeys.sort((a, b) => a.mtime - b.mtime);
            const toDelete = preKeys.slice(0, preKeys.length - maxPreKeys);
            for (const item of toDelete) {
                try {
                    fs.unlinkSync(item.fullPath);
                    removed++;
                } catch {}
            }
        }

        if (senderKeys.length > maxSenderKeys) {
            senderKeys.sort((a, b) => a.mtime - b.mtime);
            const toDelete = senderKeys.slice(0, senderKeys.length - maxSenderKeys);
            for (const item of toDelete) {
                try {
                    fs.unlinkSync(item.fullPath);
                    removed++;
                } catch {}
            }
        }

        return { removed, totalFiles: files.length - removed };
    } catch {
        return { removed: 0 };
    }
}

function startSessionCleaner(sessionDir = 'sessions', options = {}) {
    const intervalMs = options.intervalMs || 30 * 60 * 1000;
    const timer = setInterval(() => {
        cleanOldSessionFiles(sessionDir, options);
    }, intervalMs);

    if (typeof timer.unref === 'function') {
        timer.unref();
    }
    return timer;
}

module.exports = {
    cleanOldSessionFiles,
    startSessionCleaner
};
