'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/signal');
} catch (e) {
    module.exports = require('./index');
}
