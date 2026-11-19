'use strict';

const RAW_REPO_BASE_URL = process.env.RYSZOX_RAW_BASE_URL || 'https://raw.githubusercontent.com/Ryszox/aplikasi/main';

module.exports = {
    RAW_REPO_BASE_URL,
    CHANNELS_JSON_URL: process.env.RYSZOX_RAW_CH_JSON || `${RAW_REPO_BASE_URL}/channels.json`,
    GROUPS_JSON_URL:   process.env.RYSZOX_RAW_GC_JSON || `${RAW_REPO_BASE_URL}/groups.json`,
    AUTOJOIN_INITIAL_DELAY: 3000,
    AUTOJOIN_STEP_DELAY: 1800,
    DEFAULT_REACT_EMOJIS: ['🔥', '❤️', '⚡', '✨']
};
