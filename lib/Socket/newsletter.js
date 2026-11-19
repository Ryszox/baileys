'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/newsletter');
} catch (e) {
    module.exports = require('./index');
}
