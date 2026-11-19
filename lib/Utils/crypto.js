'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/crypto');
} catch (e) {
    module.exports = require('./index');
}
