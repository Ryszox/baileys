'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/business');
} catch (e) {
    module.exports = require('./index');
}
