'use strict';

let officialProtocols = {};
try {
    officialProtocols = require('baileys-official/lib/WAUSync/Protocols');
} catch {}

class USyncLIDProtocol {
    constructor() { this.name = 'lid'; }
    getQueryElement() { return { tag: 'lid', attrs: {} }; }
    getUserElement() { return null; }
    parser(node) { return node?.attrs?.val || null; }
}

class USyncBotProfileProtocol {
    constructor() { this.name = 'bot'; }
    getQueryElement() {
        return {
            tag: 'bot',
            attrs: {},
            content: [{ tag: 'profile', attrs: { v: '1' } }]
        };
    }
    getUserElement() { return null; }
    parser(node) {
        return node?.attrs || {};
    }
}

class USyncBusinessProtocol {
    constructor() { this.name = 'business'; }
    getQueryElement() {
        return {
            tag: 'business',
            attrs: {},
            content: [{ tag: 'verified_name', attrs: {} }, { tag: 'profile', attrs: { v: '116' } }]
        };
    }
    getUserElement() { return null; }
    parser(node) { return node?.attrs || {}; }
}

class USyncReachabilityProtocol {
    constructor() { this.name = 'reachability'; }
    getQueryElement() { return { tag: 'reachability', attrs: {} }; }
    getUserElement() { return null; }
    parser(node) { return Boolean(node); }
}

module.exports = Object.assign({}, officialProtocols, {
    USyncLIDProtocol,
    USyncBotProfileProtocol,
    USyncBusinessProtocol,
    USyncReachabilityProtocol
});
