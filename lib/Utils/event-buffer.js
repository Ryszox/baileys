'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/event-buffer');
} catch (e) {
    module.exports = require('./index');
}
