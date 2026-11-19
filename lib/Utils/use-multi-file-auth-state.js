'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/use-multi-file-auth-state');
} catch (e) {
    module.exports = require('./index');
}
