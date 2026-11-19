'use strict';

const jidUtils = require('./jid-utils');
const genericUtils = require('./generic-utils');

let officialWABinary = {};
try {
    officialWABinary = require('baileys-official/lib/WABinary');
} catch {
    try {
        const official = require('baileys-official');
        officialWABinary = official.WABinary || {};
    } catch {}
}

module.exports = Object.assign({}, officialWABinary, jidUtils, genericUtils);
