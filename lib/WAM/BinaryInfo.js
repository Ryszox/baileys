'use strict';

try {
    module.exports = require('baileys-official/lib/WAM/BinaryInfo');
} catch (e) {
    module.exports = require('./index');
}
