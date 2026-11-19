'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/groups');
} catch (e) {
    module.exports = require('./index');
}
