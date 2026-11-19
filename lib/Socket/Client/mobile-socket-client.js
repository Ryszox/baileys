'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/Client/mobile-socket-client');
} catch (e) {
    module.exports = require('../index');
}
