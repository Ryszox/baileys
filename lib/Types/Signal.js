'use strict';

try {
    module.exports = require('baileys-official/lib/Types/Signal');
} catch (e) {
    module.exports = require('./index');
}
