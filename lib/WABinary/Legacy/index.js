'use strict';

try {
    module.exports = require('baileys-official/lib/WABinary/Legacy/index');
} catch (e) {
    module.exports = require('../index');
}
