'use strict';

try {
    module.exports = require('baileys-official/lib/Utils/baileys-event-emitter');
} catch (e) {
    module.exports = require('./index');
}
