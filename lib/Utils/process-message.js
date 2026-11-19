'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/process-message');
} catch (e) {
    module.exports = require('./index');
}
