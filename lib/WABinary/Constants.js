'use strict';

try {
    module.exports = require('baileys-official/lib/WABinary/Constants');
} catch (e) {
    module.exports = require('./index');
}
