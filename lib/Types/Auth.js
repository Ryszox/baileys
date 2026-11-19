'use strict';

try {
    module.exports = require('baileys-official/lib/Types/Auth');
} catch (e) {
    module.exports = require('./index');
}
