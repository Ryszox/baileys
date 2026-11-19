'use strict';

try {
    module.exports = require('baileys-official/lib/Store/make-ordered-dictionary');
} catch (e) {
    module.exports = require('./index');
}
