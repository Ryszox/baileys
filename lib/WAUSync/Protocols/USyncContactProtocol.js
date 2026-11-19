'use strict';

try {
    module.exports = require('baileys-official/lib/WAUSync/Protocols/USyncContactProtocol');
} catch (e) {
    module.exports = require('../index');
}
