'use strict';
const rawConfig = require('./raw-config');
let officialDefaults = {};
try {
    officialDefaults = require('baileys-official/lib/Defaults');
} catch (e) {
    const official = require('baileys-official');
    officialDefaults = official.DEFAULT_CONNECTION_CONFIG || official;
}
module.exports = Object.assign({}, officialDefaults, { rawConfig });
