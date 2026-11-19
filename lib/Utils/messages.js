'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/messages');
} catch (e) {
    module.exports = require('./index');
}
