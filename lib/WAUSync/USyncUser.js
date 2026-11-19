'use strict';

try {
    module.exports = require('baileys-official/lib/WAUSync/USyncUser');
} catch (e) {
    module.exports = require('./index');
}
