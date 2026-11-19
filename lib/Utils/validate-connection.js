'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/validate-connection');
} catch (e) {
    module.exports = require('./index');
}
