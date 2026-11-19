'use strict';

let officialGenericUtils = {};
try {
    officialGenericUtils = require('baileys-official/lib/WABinary/generic-utils');
} catch {}

function getBinaryNodeChildren(node, childTag) {
    if (Array.isArray(node?.content)) {
        return node.content.filter((item) => item && item.tag === childTag);
    }
    return [];
}

function getAllBinaryNodeChildren(node) {
    return Array.isArray(node?.content) ? node.content : [];
}

function getBinaryNodeChild(node, childTag) {
    if (Array.isArray(node?.content)) {
        return node.content.find((item) => item && item.tag === childTag);
    }
    return undefined;
}

function getBinaryNodeChildBuffer(node, childTag) {
    const child = getBinaryNodeChild(node, childTag)?.content;
    if (Buffer.isBuffer(child) || child instanceof Uint8Array) {
        return Buffer.from(child);
    }
    if (typeof child === 'string') {
        return Buffer.from(child, 'utf8');
    }
    return undefined;
}

function getBinaryNodeChildString(node, childTag) {
    const child = getBinaryNodeChild(node, childTag)?.content;
    if (Buffer.isBuffer(child) || child instanceof Uint8Array) {
        return Buffer.from(child).toString('utf8');
    }
    if (typeof child === 'string') {
        return child;
    }
    return undefined;
}

function getBinaryNodeChildUInt(node, childTag, length) {
    const buff = getBinaryNodeChildBuffer(node, childTag);
    if (buff && buff.length >= length) {
        return buff.readUIntBE(0, length);
    }
    return undefined;
}

function binaryNodeToString(node, indent = 0) {
    if (!node) return '';
    const pad = '  '.repeat(indent);
    if (typeof node === 'string') return `${pad}${node}`;
    if (Buffer.isBuffer(node) || node instanceof Uint8Array) return `${pad}<Buffer ${Buffer.from(node).toString('hex')}>`;
    const attrs = Object.entries(node.attrs || {})
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ');
    const openTag = `<${node.tag}${attrs ? ' ' + attrs : ''}>`;
    if (!node.content) return `${pad}${openTag}</${node.tag}>`;
    if (Array.isArray(node.content)) {
        const inner = node.content.map((c) => binaryNodeToString(c, indent + 1)).join('\n');
        return `${pad}${openTag}\n${inner}\n${pad}</${node.tag}>`;
    }
    return `${pad}${openTag}${binaryNodeToString(node.content, 0)}</${node.tag}>`;
}

module.exports = Object.assign({}, officialGenericUtils, {
    getBinaryNodeChildren: officialGenericUtils.getBinaryNodeChildren || getBinaryNodeChildren,
    getAllBinaryNodeChildren: officialGenericUtils.getAllBinaryNodeChildren || getAllBinaryNodeChildren,
    getBinaryNodeChild: officialGenericUtils.getBinaryNodeChild || getBinaryNodeChild,
    getBinaryNodeChildBuffer: officialGenericUtils.getBinaryNodeChildBuffer || getBinaryNodeChildBuffer,
    getBinaryNodeChildString: officialGenericUtils.getBinaryNodeChildString || getBinaryNodeChildString,
    getBinaryNodeChildUInt: officialGenericUtils.getBinaryNodeChildUInt || getBinaryNodeChildUInt,
    binaryNodeToString: officialGenericUtils.binaryNodeToString || binaryNodeToString
});
