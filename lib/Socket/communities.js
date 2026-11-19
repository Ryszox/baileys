'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/communities');
} catch (e) {
    module.exports = require('./index');
}
