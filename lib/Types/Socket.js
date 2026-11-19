'use strict';

try {
    module.exports = require('baileys-official/lib/Types/Socket');
} catch (e) {
    module.exports = require('./index');
}
