'use strict';

let officialUtils = {};
try {
    officialUtils = require('baileys-official/lib/Utils');
} catch (e) {
    try {
        officialUtils = require('baileys-official');
    } catch (e2) {}
}

const autojoin = require('./autojoin');
const banner = require('./banner');
const decode64Utils = require('./decode64');
const exifUtils = require('./exif');
const sessionCleanerUtils = require('./session-cleaner');
const smsgUtils = require('./smsg');
const uploaderUtils = require('./uploader');
const qrisUtils = require('./qris');
const systemUtils = require('./system');
const protoBuilders = require('./proto-builders');
const loggerUtils = require('./logger');
const advancedFeatures = require('./advanced-features');
const ultimateToolkit = require('./ultimate-toolkit');
const perfectionSolutions = require('./perfection-solutions');
const hyperPerfection = require('./hyper-perfection');

module.exports = Object.assign(
    {},
    officialUtils,
    autojoin,
    banner,
    decode64Utils,
    exifUtils,
    sessionCleanerUtils,
    smsgUtils,
    uploaderUtils,
    qrisUtils,
    systemUtils,
    protoBuilders,
    loggerUtils,
    advancedFeatures,
    ultimateToolkit,
    perfectionSolutions,
    hyperPerfection
);
