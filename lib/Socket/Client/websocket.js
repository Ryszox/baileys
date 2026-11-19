'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/Client/websocket');
} catch (e) {
    module.exports = require('../index');
}
