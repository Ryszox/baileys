'use strict';

try {
    module.exports = require('baileys-official/lib/WAUSync/Protocols/USyncStatusProtocol');
} catch (e) {
    module.exports = require('../index');
}
