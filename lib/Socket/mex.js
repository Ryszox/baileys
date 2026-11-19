'use strict';

try {
    module.exports = require('baileys-official/lib/Socket/mex');
} catch (e) {
    module.exports = require('./index');
}
