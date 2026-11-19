'use strict';

try {
    module.exports = require('baileys-official/lib/WAM/constants');
} catch (e) {
    module.exports = require('./index');
}
