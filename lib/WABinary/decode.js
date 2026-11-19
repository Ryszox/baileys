'use strict';

try {
    module.exports = require('baileys-official/lib/WABinary/decode');
} catch (e) {
    module.exports = require('./index');
}
