'use strict';

try {
    module.exports = require('baileys-official/lib/WAM/encode');
} catch (e) {
    module.exports = require('./index');
}
