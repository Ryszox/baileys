'use strict';

try {
    module.exports = require('baileys-official/lib/Types/Message');
} catch (e) {
    module.exports = require('./index');
}
