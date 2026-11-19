'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/messages-send');
} catch (e) {
    module.exports = require('./index');
}
