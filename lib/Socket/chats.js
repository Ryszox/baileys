'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/chats');
} catch (e) {
    module.exports = require('./index');
}
