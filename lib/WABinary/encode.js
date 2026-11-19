'use strict';

try {
    module.exports = require('baileys-official/lib/WABinary/encode');
} catch (e) {
    module.exports = require('./index');
}
