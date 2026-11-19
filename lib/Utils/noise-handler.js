'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/noise-handler');
} catch (e) {
    module.exports = require('./index');
}
