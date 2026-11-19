'use strict';

try {
    module.exports = require('baileys-official/lib/WAUSync/USyncQuery');
} catch (e) {
    module.exports = require('./index');
}
