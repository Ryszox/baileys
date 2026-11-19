'use strict';

try {
    module.exports = require('baileys-official/lib/Defaults/constants');
} catch (e) {
    module.exports = require('./index');
}
