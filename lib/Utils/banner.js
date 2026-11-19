'use strict';

const STYLE = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    gold: '\x1b[38;5;220m',
    softGold: '\x1b[38;5;222m',
    violet: '\x1b[38;5;177m',
    cyan: '\x1b[38;5;117m',
    emerald: '\x1b[38;5;84m',
    pearl: '\x1b[38;5;255m',
    silver: '\x1b[38;5;250m',
    slate: '\x1b[38;5;242m',
    border: '\x1b[38;5;239m'
};

function padRight(str, len) {
    const clean = String(str || '');
    return clean.length >= len ? clean.slice(0, len) : clean + ' '.repeat(len - clean.length);
}

function printBootBanner() {
    const s = STYLE;

    console.log('');
    console.log(`  ${s.border}╭────────────────────────────────────────────────────────────╮${s.reset}`);
    console.log(`  ${s.border}│${s.reset}                                                            ${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.gold}✦${s.reset}   ${s.bold}${s.pearl}B A I L E Y S${s.reset}   ${s.italic}${s.silver}by${s.reset}   ${s.bold}${s.gold}R Y S Z O X${s.reset}                   ${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}                                                            ${s.border}│${s.reset}`);
    console.log(`  ${s.border}├────────────────────────────────────────────────────────────┤${s.reset}`);
    console.log(`  ${s.border}│${s.reset}                                                            ${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Version${s.reset}      ${s.slate}›${s.reset}   ${s.softGold}${padRight('v1.0.0', 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Developer${s.reset}    ${s.slate}›${s.reset}   ${s.pearl}${padRight('ryszox', 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Number${s.reset}       ${s.slate}›${s.reset}   ${s.cyan}${padRight('6285136651376', 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Username${s.reset}     ${s.slate}›${s.reset}   ${s.violet}${padRight('@ryszox_host', 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}                                                            ${s.border}│${s.reset}`);
    console.log(`  ${s.border}╰────────────────────────────────────────────────────────────╯${s.reset}`);
    console.log('');
}

function printConnectedBanner(user = {}) {
    const s = STYLE;
    const rawId = user?.id || 'Unknown';
    const cleanNumber = rawId.includes(':') ? rawId.split(':')[0] : rawId.replace('@s.whatsapp.net', '');
    const name = user?.name || user?.verifiedName || 'Active Session';
    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    console.log('');
    console.log(`  ${s.border}╭────────────────────────────────────────────────────────────╮${s.reset}`);
    console.log(`  ${s.border}│${s.reset}   ${s.emerald}●${s.reset}  ${s.bold}${s.pearl}BAILEYS BY RYSZOX${s.reset}  ${s.slate}—${s.reset}  ${s.softGold}v1.0.0${s.reset}               ${s.slate}[${timeStr}]${s.reset} ${s.border}│${s.reset}`);
    console.log(`  ${s.border}├────────────────────────────────────────────────────────────┤${s.reset}`);
    console.log(`  ${s.border}│${s.reset}                                                            ${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Session${s.reset}      ${s.slate}›${s.reset}   ${s.bold}${s.pearl}${padRight(name, 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Account${s.reset}      ${s.slate}›${s.reset}   ${s.emerald}${padRight(cleanNumber, 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Contact${s.reset}      ${s.slate}›${s.reset}   ${s.cyan}${padRight('6285136651376', 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}     ${s.silver}Author${s.reset}       ${s.slate}›${s.reset}   ${s.violet}${padRight('@ryszox_host', 38)}${s.reset}${s.border}│${s.reset}`);
    console.log(`  ${s.border}│${s.reset}                                                            ${s.border}│${s.reset}`);
    console.log(`  ${s.border}╰────────────────────────────────────────────────────────────╯${s.reset}`);
    console.log('');
}

module.exports = {
    STYLE,
    COLORS: STYLE,
    printBootBanner,
    printConnectedBanner
};
