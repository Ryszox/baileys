'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/messages-recv');
} catch (e) {
    module.exports = require('./index');
}
