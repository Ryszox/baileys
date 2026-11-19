'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/usync');
} catch (e) {
    module.exports = require('./index');
}
