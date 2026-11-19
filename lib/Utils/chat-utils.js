'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/chat-utils');
} catch (e) {
    module.exports = require('./index');
}
