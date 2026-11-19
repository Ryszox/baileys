'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/Client/abstract-socket-client');
} catch (e) {
    module.exports = require('../index');
}
