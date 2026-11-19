'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/socket');
} catch (e) {
    module.exports = require('./index');
}
