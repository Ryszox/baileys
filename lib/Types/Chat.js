'use strict';

try {
    module.exports = require('baileys-official/lib/Types/Chat');
} catch (e) {
    module.exports = require('./index');
}
