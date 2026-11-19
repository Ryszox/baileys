'use strict';

try {
    module.exports = require('baileys-official/lib/Store/object-repository');
} catch (e) {
    module.exports = require('./index');
}
