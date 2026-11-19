'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/make-mutex');
} catch (e) {
    module.exports = require('./index');
}
