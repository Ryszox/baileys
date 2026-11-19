'use strict';

const crypto = require('crypto');

function calculateCRC16(str) {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
        crc ^= str.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if ((crc & 0x8000) !== 0) {
                crc = ((crc << 1) ^ 0x1021) & 0xFFFF;
            } else {
                crc = (crc << 1) & 0xFFFF;
            }
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

function generateDynamicQRIS(staticQris, amount, options = {}) {
    if (!staticQris || typeof staticQris !== 'string') {
        throw new Error('[Baileys by ryszox] String QRIS statis tidak valid.');
    }
    const cleanAmount = String(Math.floor(Number(amount) || 0));
    if (!cleanAmount || Number(cleanAmount) <= 0) {
        throw new Error('[Baileys by ryszox] Nominal QRIS dinamis harus lebih dari 0.');
    }

    const withoutCrc = staticQris.trim().replace(/6304[A-Fa-f0-9]{4}$/, '');
    const dynamicBase = withoutCrc.replace('010211', '010212');

    const splitParts = dynamicBase.split('5802ID');
    if (splitParts.length < 2) {
        throw new Error('[Baileys by ryszox] Format string QRIS tidak dikenali.');
    }

    const amountTag = `54${String(cleanAmount.length).padStart(2, '0')}${cleanAmount}`;
    let feeTag = '';

    if (options.fee && Number(options.fee) > 0) {
        const feeVal = String(Math.floor(Number(options.fee)));
        if (options.feeType === 'percent' || options.feeType === '%') {
            feeTag = `55020357${String(feeVal.length).padStart(2, '0')}${feeVal}`;
        } else {
            feeTag = `55020256${String(feeVal.length).padStart(2, '0')}${feeVal}`;
        }
    }

    const payloadToSign = `${splitParts[0]}${amountTag}${feeTag}5802ID${splitParts[1]}6304`;
    const crcHex = calculateCRC16(payloadToSign);
    return `${payloadToSign}${crcHex}`;
}

function parseQRISMerchantInfo(qrisString = '') {
    const extractTag = (tag) => {
        const regex = new RegExp(`${tag}(\d{2})`);
        const match = qrisString.match(regex);
        if (!match) return '';
        const len = parseInt(match[1], 10);
        const start = match.index + 4;
        return qrisString.slice(start, start + len);
    };
    return {
        merchantName: extractTag('59') || 'QRIS Merchant',
        merchantCity: extractTag('60') || 'Indonesia',
        postalCode: extractTag('61') || ''
    };
}

function formatRupiah(amount = 0, withPrefix = true) {
    const formatted = Number(amount || 0).toLocaleString('id-ID');
    return withPrefix ? `Rp ${formatted}` : formatted;
}

function generateInvoiceId(prefix = 'INV-RYSZOX') {
    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randPart = crypto.randomBytes(3).toString('hex').toUpperCase();
    return `${prefix}-${datePart}-${randPart}`;
}

module.exports = {
    calculateCRC16,
    generateDynamicQRIS,
    parseQRISMerchantInfo,
    formatRupiah,
    generateInvoiceId
};
