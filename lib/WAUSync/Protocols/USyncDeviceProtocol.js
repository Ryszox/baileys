'use strict';

try {
    module.exports = require('baileys-official/lib/WAUSync/Protocols/USyncDeviceProtocol');
} catch (e) {
    module.exports = require('../index');
}
