"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var _Hash_hash;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareParams = exports.reduceIterator = exports.iterateChunks = exports.cloneByteStream = exports.readByteStream = exports.decodeBase64ByteStream = exports.generateByteStream = exports.listConcat = exports.getEnvVar = exports.createHash = exports.Hash = exports.ByteStream = exports.Buffer = exports.hexToBase64 = exports.decodeBase64 = exports.getUuid = void 0;
const crypto = __importStar(require("crypto"));
const stream_1 = require("stream");
Object.defineProperty(exports, "ByteStream", { enumerable: true, get: function () { return stream_1.Readable; } });
const uuid_1 = require("uuid");
function getUuid() {
    return (0, uuid_1.v4)();
}
exports.getUuid = getUuid;
function decodeBase64(value) {
    return Buffer.from(value, 'base64').toString('utf8');
}
exports.decodeBase64 = decodeBase64;
function hexToBase64(data) {
    return Buffer.from(data, 'hex').toString('base64');
}
exports.hexToBase64 = hexToBase64;
class Hash {
    constructor(hash) {
        _Hash_hash.set(this, void 0);
        __classPrivateFieldSet(this, _Hash_hash, hash, "f");
    }
    updateHash(data) {
        __classPrivateFieldGet(this, _Hash_hash, "f").update(data);
    }
    digestHash(encoding) {
        return __classPrivateFieldGet(this, _Hash_hash, "f").digest(encoding);
    }
}
exports.Hash = Hash;
_Hash_hash = new WeakMap();
function createHash(algorithm) {
    return new Hash(crypto.createHash(algorithm));
}
exports.createHash = createHash;
function getEnvVar(name) {
    return process.env[name] || '';
}
exports.getEnvVar = getEnvVar;
function listConcat(a, b) {
    return [...a, ...b];
}
exports.listConcat = listConcat;
function generateByteStream(size) {
    return stream_1.Readable.from(crypto.randomBytes(size));
}
exports.generateByteStream = generateByteStream;
function decodeBase64ByteStream(data) {
    return stream_1.Readable.from(Buffer.from(data, 'base64'));
}
exports.decodeBase64ByteStream = decodeBase64ByteStream;
function readByteStream(byteStream) {
    var _a, byteStream_1, byteStream_1_1;
    var _b, e_1, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const buffers = [];
        try {
            for (_a = true, byteStream_1 = __asyncValues(byteStream); byteStream_1_1 = yield byteStream_1.next(), _b = byteStream_1_1.done, !_b;) {
                _d = byteStream_1_1.value;
                _a = false;
                try {
                    const data = _d;
                    buffers.push(data);
                }
                finally {
                    _a = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = byteStream_1.return)) yield _c.call(byteStream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Buffer.concat(buffers);
    });
}
exports.readByteStream = readByteStream;
function cloneByteStream(readableStream) {
    return __awaiter(this, void 0, void 0, function* () {
        const clone1 = readableStream.pipe(new stream_1.PassThrough());
        const clone2 = readableStream.pipe(new stream_1.PassThrough());
        return [clone1, clone2];
    });
}
exports.cloneByteStream = cloneByteStream;
function iterateChunks(stream, chunkSize) {
    return __asyncGenerator(this, arguments, function* iterateChunks_1() {
        var _a, e_2, _b, _c;
        let buffers = [];
        let totalSize = 0;
        try {
            for (var _d = true, stream_2 = __asyncValues(stream), stream_2_1; stream_2_1 = yield __await(stream_2.next()), _a = stream_2_1.done, !_a;) {
                _c = stream_2_1.value;
                _d = false;
                try {
                    const data = _c;
                    if (!Buffer.isBuffer(data)) {
                        throw new Error('Expecting a chunk of stream to be a Buffer');
                    }
                    buffers.push(data);
                    totalSize += data.length;
                    if (totalSize < chunkSize) {
                        continue;
                    }
                    const buffer = Buffer.concat(buffers);
                    let start = 0;
                    while (totalSize >= chunkSize) {
                        yield yield __await(stream_1.Readable.from(buffer.subarray(start, start + chunkSize)));
                        start += chunkSize;
                        totalSize -= chunkSize;
                    }
                    buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = stream_2.return)) yield __await(_b.call(stream_2));
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (totalSize > 0) {
            yield yield __await(stream_1.Readable.from(Buffer.concat(buffers)));
        }
    });
}
exports.iterateChunks = iterateChunks;
function reduceIterator(iterator, reducer, initialValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = initialValue;
        let iteration = yield iterator.next();
        while (!iteration.done) {
            result = yield reducer(result, iteration.value);
            iteration = yield iterator.next();
        }
        return result;
    });
}
exports.reduceIterator = reduceIterator;
function prepareParams(obj) {
    if (!obj || typeof obj !== 'object') {
        throw new Error('Expecting obj to be an object in prepareParams');
    }
    return Object.fromEntries(Object.entries(obj)
        .map(([key, value]) => {
        if (typeof value === 'string' || value == null) {
            return [key, value];
        }
        return [key, String(value)];
    })
        .filter((entry) => typeof entry[1] === 'string'));
}
exports.prepareParams = prepareParams;
//# sourceMappingURL=utils.js.map