'use strict';

try {
    module.exports = require('baileys-official/lib/WAUSync/Protocols/USyncDisappearingModeProtocol');
} catch (e) {
    module.exports = require('../index');
}
