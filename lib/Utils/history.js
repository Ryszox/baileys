'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/history');
} catch (e) {
    module.exports = require('./index');
}
