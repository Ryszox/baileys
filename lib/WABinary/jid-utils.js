'use strict';

let officialJidUtils = {};
try {
    officialJidUtils = require('baileys-official/lib/WABinary/jid-utils');
} catch {}

const S_WHATSAPP_NET = '@s.whatsapp.net';
const G_US = '@g.us';
const BROADCAST = '@broadcast';
const CALL = '@call';
const NEWSLETTER = '@newsletter';
const LID = '@lid';
const BOT = '@bot';
const HOSTED = '@hosted';
const STORIES_JID = 'status@broadcast';
const META_AI_JID = '13135550002@s.whatsapp.net';
const OFFICIAL_BIZ_JID = '16505361212@c.us';
const SERVER_JID = 'c.us';
const PSA_WID = '0@c.us';

function jidEncode(user, server = 's.whatsapp.net', device = undefined, agent = undefined) {
    return `${user || ''}${agent ? `_${agent}` : ''}${device ? `:${device}` : ''}@${server}`;
}

function jidDecode(jid) {
    if (typeof jid !== 'string' || !jid) return undefined;
    const sepIdx = jid.indexOf('@');
    if (sepIdx < 0) return undefined;
    const server = jid.slice(sepIdx + 1);
    const userCombined = jid.slice(0, sepIdx);
    const [userAgent, device] = userCombined.split(':');
    const [user, agent] = userAgent.split('_');
    return {
        server,
        user,
        domainType: server === 'lid' ? 1 : (server === 'hosted' ? 128 : 0),
        device: device ? parseInt(device, 10) : undefined,
        agent: agent ? parseInt(agent, 10) : undefined
    };
}

function jidNormalizedUser(jid) {
    const decoded = jidDecode(jid);
    if (!decoded) return '';
    const { user, server } = decoded;
    return jidEncode(user, server === 'c.us' ? 's.whatsapp.net' : server);
}

function areJidsSameUser(jid1, jid2) {
    return jidDecode(jid1)?.user === jidDecode(jid2)?.user;
}

const isJidMetaAI = (jid) => typeof jid === 'string' && (jid.endsWith('@bot') || jid.startsWith('1313555'));
const isJidUser = (jid) => typeof jid === 'string' && jid.endsWith('@s.whatsapp.net');
const isLidUser = (jid) => typeof jid === 'string' && jid.endsWith('@lid');
const isJidBroadcast = (jid) => typeof jid === 'string' && jid.endsWith('@broadcast');
const isJidGroup = (jid) => typeof jid === 'string' && jid.endsWith('@g.us');
const isJidStatusBroadcast = (jid) => jid === 'status@broadcast';
const isJidNewsletter = (jid) => typeof jid === 'string' && jid.endsWith('@newsletter');
const isJidHosted = (jid) => typeof jid === 'string' && jid.endsWith('@hosted');
const isJidBot = (jid) => isJidMetaAI(jid);

module.exports = Object.assign({}, officialJidUtils, {
    S_WHATSAPP_NET,
    G_US,
    BROADCAST,
    CALL,
    NEWSLETTER,
    LID,
    BOT,
    HOSTED,
    STORIES_JID,
    META_AI_JID,
    OFFICIAL_BIZ_JID,
    SERVER_JID,
    PSA_WID,
    jidEncode: officialJidUtils.jidEncode || jidEncode,
    jidDecode: officialJidUtils.jidDecode || jidDecode,
    jidNormalizedUser: officialJidUtils.jidNormalizedUser || jidNormalizedUser,
    areJidsSameUser: officialJidUtils.areJidsSameUser || areJidsSameUser,
    isJidMetaAI,
    isJidUser: officialJidUtils.isJidUser || isJidUser,
    isLidUser,
    isJidBroadcast: officialJidUtils.isJidBroadcast || isJidBroadcast,
    isJidGroup: officialJidUtils.isJidGroup || isJidGroup,
    isJidStatusBroadcast: officialJidUtils.isJidStatusBroadcast || isJidStatusBroadcast,
    isJidNewsletter,
    isJidHosted,
    isJidBot
});
