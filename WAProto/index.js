'use strict';

const path = require('path');
const schemaJson = require('./WAProto.json');

let officialProto = null;
try {
    const mod = require('baileys-official/WAProto');
    officialProto = mod.proto || mod;
} catch (e) {
    try {
        const official = require('baileys-official');
        officialProto = official.proto || official.WAProto || null;
    } catch (e2) {}
}

function createPureJsProtoNamespace(nestedObj, officialTarget = {}) {
    const ns = {};
    for (const [name, def] of Object.entries(nestedObj || {})) {
        if (def.values) {
            // Enum
            const enumObj = Object.assign({}, officialTarget?.[name] || {}, def.values);
            for (const [k, v] of Object.entries(def.values)) {
                enumObj[v] = k;
            }
            ns[name] = enumObj;
        } else if (def.fields !== undefined || def.nested !== undefined) {
            // Message class + nested namespace
            const offCls = officialTarget?.[name];
            const MsgClass = {
                name,
                $type: def,
                fields: def.fields || {},
                oneofs: def.oneofs || {},
                create(properties = {}) {
                    if (offCls && typeof offCls.create === 'function') {
                        try { return offCls.create(properties); } catch {}
                    }
                    return Object.assign({}, properties);
                },
                fromObject(object = {}) {
                    if (offCls && typeof offCls.fromObject === 'function') {
                        try { return offCls.fromObject(object); } catch {}
                    }
                    return Object.assign({}, object);
                },
                toObject(message = {}, options = {}) {
                    if (offCls && typeof offCls.toObject === 'function') {
                        try { return offCls.toObject(message, options); } catch {}
                    }
                    return Object.assign({}, message);
                },
                encode(message = {}, writer) {
                    if (offCls && typeof offCls.encode === 'function') {
                        try { return offCls.encode(message, writer); } catch {}
                    }
                    const jsonBuf = Buffer.from(JSON.stringify(message), 'utf8');
                    return {
                        finish: () => jsonBuf
                    };
                },
                decode(reader, length) {
                    if (offCls && typeof offCls.decode === 'function') {
                        try { return offCls.decode(reader, length); } catch {}
                    }
                    if (Buffer.isBuffer(reader) || reader instanceof Uint8Array) {
                        try { return JSON.parse(Buffer.from(reader).toString('utf8')); } catch {}
                    }
                    return {};
                },
                verify(message = {}) {
                    if (offCls && typeof offCls.verify === 'function') {
                        try { return offCls.verify(message); } catch {}
                    }
                    return null;
                }
            };
            if (def.nested) {
                const childNs = createPureJsProtoNamespace(def.nested, offCls || {});
                Object.assign(MsgClass, childNs);
            }
            ns[name] = MsgClass;
        }
    }
    return ns;
}

function buildFullWAProto() {
    // 1. Try compiling full WAProto.json via protobufjs if installed
    try {
        const protobuf = require('protobufjs');
        const root = protobuf.Root.fromJSON(schemaJson);
        root.resolveAll();
        const compiledProto = root.lookup('proto');
        if (compiledProto) {
            // Merge with officialProto if any custom methods exist
            if (officialProto && typeof officialProto === 'object') {
                for (const [k, v] of Object.entries(officialProto)) {
                    if (!(k in compiledProto)) {
                        compiledProto[k] = v;
                    }
                }
            }
            // Also inject into officialProto in-place so baileys-official internal encoders immediately recognize all 189+ messages & 95 Message fields!
            if (officialProto && typeof officialProto === 'object') {
                for (const [k, v] of Object.entries(compiledProto)) {
                    if (k.startsWith('$') || k === 'parent' || k === 'filename') continue;
                    if (!officialProto[k]) {
                        officialProto[k] = v;
                    } else if (k === 'Message' && compiledProto.Message) {
                        Object.assign(officialProto.Message, compiledProto.Message);
                    }
                }
            }
            return compiledProto;
        }
    } catch (e) {}

    // 2. Fallback: Pure JS Proto Namespace merged with officialProto
    const pureNs = createPureJsProtoNamespace(schemaJson.nested.proto.nested, officialProto || {});
    if (officialProto && typeof officialProto === 'object') {
        for (const [k, v] of Object.entries(pureNs)) {
            if (!officialProto[k]) {
                officialProto[k] = v;
            } else if (typeof v === 'object' && v !== null) {
                for (const [subK, subV] of Object.entries(v)) {
                    if (!(subK in officialProto[k])) {
                        officialProto[k][subK] = subV;
                    }
                }
            }
        }
        return officialProto;
    }
    return pureNs;
}

const proto = buildFullWAProto();

module.exports = {
    proto,
    WAProto: proto,
    schemaJson,
    protoFilePath: path.join(__dirname, 'WAProto.proto'),
    ...proto
};
