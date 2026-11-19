'use strict';

const fs = require('fs');

function createFallbackInMemoryStore(config = {}) {
    const chats = new Map();
    const messages = {};
    const contacts = {};
    const groupMetadata = {};
    const presences = {};
    const maxMessagesPerChat = config.maxMessagesPerChat || 250;

    const storeObj = {
        chats,
        messages,
        contacts,
        groupMetadata,
        presences,
        bind(ev) {
            if (!ev || typeof ev.on !== 'function') return;
            ev.on('chats.set', ({ chats: newChats }) => {
                for (const c of newChats || []) chats.set(c.id, c);
            });
            ev.on('chats.upsert', (newChats) => {
                for (const c of newChats || []) chats.set(c.id, Object.assign(chats.get(c.id) || {}, c));
            });
            ev.on('chats.update', (updates) => {
                for (const u of updates || []) {
                    if (chats.has(u.id)) chats.set(u.id, Object.assign(chats.get(u.id), u));
                }
            });
            ev.on('contacts.upsert', (newContacts) => {
                for (const c of newContacts || []) {
                    contacts[c.id] = Object.assign(contacts[c.id] || {}, c);
                }
            });
            ev.on('contacts.update', (updates) => {
                for (const u of updates || []) {
                    if (contacts[u.id]) Object.assign(contacts[u.id], u);
                }
            });
            ev.on('groups.upsert', (newGroups) => {
                for (const g of newGroups || []) groupMetadata[g.id] = g;
            });
            ev.on('groups.update', (updates) => {
                for (const u of updates || []) {
                    if (groupMetadata[u.id]) Object.assign(groupMetadata[u.id], u);
                }
            });
            ev.on('presence.update', ({ id, presences: updatePresences }) => {
                presences[id] = Object.assign(presences[id] || {}, updatePresences);
            });
            ev.on('messages.upsert', ({ messages: newMsgs }) => {
                for (const m of newMsgs || []) {
                    const jid = m?.key?.remoteJid;
                    if (!jid) continue;
                    if (!messages[jid]) messages[jid] = [];
                    messages[jid].push(m);
                    if (messages[jid].length > maxMessagesPerChat) messages[jid].shift();
                }
            });
        },
        loadMessage(jid, id) {
            const list = messages[jid];
            if (!list) return undefined;
            return list.find((m) => m?.key?.id === id);
        },
        mostRecentMessage(jid) {
            const list = messages[jid];
            if (!list || list.length === 0) return undefined;
            return list[list.length - 1];
        },
        searchMessages(query = '', jid = null, limit = 25) {
            const q = String(query).toLowerCase().trim();
            if (!q) return [];
            const results = [];
            const targetJids = jid ? [jid] : Object.keys(messages);
            for (const chatJid of targetJids) {
                const list = messages[chatJid] || [];
                for (let i = list.length - 1; i >= 0; i--) {
                    const m = list[i];
                    const text =
                        m?.message?.conversation ||
                        m?.message?.extendedTextMessage?.text ||
                        m?.message?.imageMessage?.caption ||
                        m?.message?.videoMessage?.caption ||
                        '';
                    if (text && text.toLowerCase().includes(q)) {
                        results.push(m);
                        if (results.length >= limit) return results;
                    }
                }
            }
            return results;
        },
        getStats() {
            let totalMessages = 0;
            for (const k of Object.keys(messages)) {
                totalMessages += messages[k].length;
            }
            return {
                chatsCount: chats.size,
                contactsCount: Object.keys(contacts).length,
                groupsCount: Object.keys(groupMetadata).length,
                messagesCount: totalMessages
            };
        },
        writeToFile(filePath) {
            try {
                const chatsObj = Object.fromEntries(chats.entries());
                fs.writeFileSync(
                    filePath,
                    JSON.stringify({ chats: chatsObj, contacts, groupMetadata, messages }, null, 2)
                );
            } catch {}
        },
        readFromFile(filePath) {
            try {
                if (fs.existsSync(filePath)) {
                    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                    if (data.chats) {
                        for (const [k, v] of Object.entries(data.chats)) chats.set(k, v);
                    }
                    if (data.contacts) Object.assign(contacts, data.contacts);
                    if (data.groupMetadata) Object.assign(groupMetadata, data.groupMetadata);
                    if (data.messages) Object.assign(messages, data.messages);
                }
            } catch {}
        },
        startAutoSave(filePath = './baileys_store.json', intervalMs = 15000) {
            storeObj.readFromFile(filePath);
            const timer = setInterval(() => {
                storeObj.writeToFile(filePath);
            }, intervalMs);
            if (typeof timer.unref === 'function') timer.unref();
            return timer;
        }
    };

    return storeObj;
}

let makeInMemoryStoreFn = createFallbackInMemoryStore;
try {
    const upstreamStore = require('baileys-official/lib/Store');
    if (typeof upstreamStore === 'function') {
        makeInMemoryStoreFn = upstreamStore;
    } else if (typeof upstreamStore?.makeInMemoryStore === 'function') {
        makeInMemoryStoreFn = upstreamStore.makeInMemoryStore;
    } else if (typeof upstreamStore?.default === 'function') {
        makeInMemoryStoreFn = upstreamStore.default;
    }
} catch {
    try {
        const official = require('baileys-official');
        if (typeof official.makeInMemoryStore === 'function') {
            makeInMemoryStoreFn = official.makeInMemoryStore;
        }
    } catch {}
}

function hybridStoreExport(config) {
    const base = makeInMemoryStoreFn(config);
    const fallback = createFallbackInMemoryStore(config);
    for (const [k, v] of Object.entries(fallback)) {
        if (!(k in base)) base[k] = v;
    }
    return base;
}
hybridStoreExport.makeInMemoryStore = hybridStoreExport;
hybridStoreExport.createFallbackInMemoryStore = createFallbackInMemoryStore;
hybridStoreExport.default = hybridStoreExport;

module.exports = hybridStoreExport;
