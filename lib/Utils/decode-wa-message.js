'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/decode-wa-message');
} catch (e) {
    module.exports = require('./index');
}
