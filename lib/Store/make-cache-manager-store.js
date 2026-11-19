'use strict';

try {
    module.exports = require('baileys-official/lib/Store/make-cache-manager-store');
} catch (e) {
    module.exports = require('./index');
}
