'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/Client/index');
} catch (e) {
    module.exports = require('../index');
}
