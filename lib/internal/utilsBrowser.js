"use strict";
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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var _Hash_hash;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPrivateKeyDecryptor = exports.Hash = exports.utilLib = exports.FormData = exports.Buffer = void 0;
exports.generateByteBuffer = generateByteBuffer;
exports.generateReadableStreamFromFile = generateReadableStreamFromFile;
exports.generateByteStreamFromBuffer = generateByteStreamFromBuffer;
exports.decodeBase64ByteStream = decodeBase64ByteStream;
exports.stringToByteStream = stringToByteStream;
exports.getEnvVar = getEnvVar;
exports.setEnvVar = setEnvVar;
exports.readByteStream = readByteStream;
exports.iterateChunks = iterateChunks;
exports.createJwtAssertion = createJwtAssertion;
exports.readTextFromFile = readTextFromFile;
exports.createAgent = createAgent;
exports.jsonStringifyWithEscapedUnicode = jsonStringifyWithEscapedUnicode;
exports.computeWebhookSignature = computeWebhookSignature;
exports.compareSignatures = compareSignatures;
exports.calculateMD5Hash = calculateMD5Hash;
const buffer_1 = require("buffer");
Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return buffer_1.Buffer; } });
const hash_wasm_1 = require("hash-wasm");
class FormData {
}
exports.FormData = FormData;
class utilLib {
}
exports.utilLib = utilLib;
utilLib.inspect = {
    custom: 'inspect.custom',
};
class Hash {
    constructor({ algorithm }) {
        _Hash_hash.set(this, void 0);
        this.algorithm = algorithm;
        __classPrivateFieldSet(this, _Hash_hash, undefined, "f");
    }
    initializeBrowserHash() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.algorithm) {
                case 'sha1':
                    __classPrivateFieldSet(this, _Hash_hash, yield (0, hash_wasm_1.createSHA1)(), "f");
                    __classPrivateFieldGet(this, _Hash_hash, "f").init();
                    break;
                default:
                    throw new Error(`Unsupported algorithm: ${this.algorithm}`);
            }
        });
    }
    updateHash(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Hash_hash, "f")) {
                yield this.initializeBrowserHash();
            }
            __classPrivateFieldGet(this, _Hash_hash, "f").update(data);
        });
    }
    digestHash() {
        return __awaiter(this, arguments, void 0, function* (encoding = 'base64') {
            if (!__classPrivateFieldGet(this, _Hash_hash, "f")) {
                yield this.initializeBrowserHash();
            }
            const d = __classPrivateFieldGet(this, _Hash_hash, "f").digest('binary');
            switch (encoding) {
                case 'base64':
                    return buffer_1.Buffer.from(d).toString('base64');
                default:
                    throw new Error(`Unsupported encoding: ${encoding}`);
            }
        });
    }
}
exports.Hash = Hash;
_Hash_hash = new WeakMap();
function generateByteBuffer(size) {
    // Maximum size for crypto.getRandomValues is 65536 bytes
    const MAX_CHUNK_SIZE = 65536;
    const buffer = new Uint8Array(size);
    for (let offset = 0; offset < size; offset += MAX_CHUNK_SIZE) {
        const length = Math.min(MAX_CHUNK_SIZE, size - offset);
        const chunk = new Uint8Array(length);
        window.crypto.getRandomValues(chunk);
        buffer.set(chunk, offset);
    }
    return buffer_1.Buffer.from(buffer);
}
function generateReadableStreamFromFile(file, chunkSize = 1024 * 1024) {
    let offset = 0;
    return new ReadableStream({
        pull(controller) {
            return __awaiter(this, void 0, void 0, function* () {
                if (offset >= file.size) {
                    controller.close();
                    return;
                }
                const chunk = file.slice(offset, offset + chunkSize);
                const arrayBuffer = yield chunk.arrayBuffer();
                controller.enqueue(new Uint8Array(arrayBuffer));
                offset += chunkSize;
            });
        },
    });
}
function generateByteStreamFromBuffer(buffer) {
    return new ReadableStream({
        start(controller) {
            controller.enqueue(new Uint8Array(buffer));
            controller.close();
        },
    });
}
function decodeBase64ByteStream(data) {
    return new ReadableStream({
        start(controller) {
            const decodedStr = atob(data);
            const buffer = new ArrayBuffer(decodedStr.length);
            const array = new Uint8Array(buffer);
            for (let i = 0; i < decodedStr.length; i++) {
                array[i] = decodedStr.charCodeAt(i);
            }
            controller.enqueue(array);
            controller.close();
        },
    });
}
function stringToByteStream(data) {
    return new ReadableStream({
        start(controller) {
            const buffer = new ArrayBuffer(data.length);
            const array = new Uint8Array(buffer);
            for (let i = 0; i < data.length; i++) {
                array[i] = data.charCodeAt(i);
            }
            controller.enqueue(array);
            controller.close();
        },
    });
}
function getEnvVar(name) {
    if (typeof window !== 'undefined' &&
        window.env &&
        window.env[name]) {
        return window.env[name];
    }
    return '';
}
function setEnvVar(name, value) {
    if (typeof window === 'undefined') {
        throw new Error('This function requires a browser environment');
    }
    if (!window.env) {
        window.env = {};
    }
    window.env[name] = value;
}
function readByteStream(byteStream) {
    return __awaiter(this, void 0, void 0, function* () {
        const buffers = [];
        // Browser ReadableStream
        const reader = byteStream.getReader();
        while (true) {
            const { done, value } = yield reader.read();
            if (done)
                break;
            buffers.push(buffer_1.Buffer.from(value));
        }
        return buffer_1.Buffer.concat(buffers);
    });
}
function iterateChunks(stream, chunkSize, fileSize) {
    return __asyncGenerator(this, arguments, function* iterateChunks_1() {
        let buffers = [];
        let totalSize = 0;
        let consumedSize = 0;
        const reader = stream.getReader();
        while (consumedSize < fileSize) {
            const { done, value } = yield __await(reader.read());
            if (done)
                break;
            const data = buffer_1.Buffer.from(value);
            consumedSize += data.length;
            buffers.push(data);
            totalSize += data.length;
            yield __await(yield* __asyncDelegator(__asyncValues(yieldChunks())));
        }
        if (consumedSize !== fileSize) {
            throw new Error(`Stream size ${consumedSize} does not match expected file size ${fileSize}`);
        }
        if (totalSize > 0) {
            yield yield __await(yield __await(generateByteStreamFromBuffer(buffer_1.Buffer.concat(buffers))));
        }
        /**
         * Yields chunks of the desired `chunkSize` if enough data is available.
         */
        function yieldChunks() {
            return __asyncGenerator(this, arguments, function* yieldChunks_1() {
                if (totalSize < chunkSize)
                    return yield __await(void 0);
                const buffer = buffer_1.Buffer.concat(buffers);
                let start = 0;
                while (totalSize >= chunkSize) {
                    yield yield __await(yield __await(generateByteStreamFromBuffer(buffer.subarray(start, start + chunkSize))));
                    start += chunkSize;
                    totalSize -= chunkSize;
                }
                buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
            });
        }
    });
}
class DefaultPrivateKeyDecryptor {
    constructor(fields) { }
}
exports.DefaultPrivateKeyDecryptor = DefaultPrivateKeyDecryptor;
/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
function createJwtAssertion(claims, key, options) {
    return __awaiter(this, void 0, void 0, function* () {
        throw new Error('This function is not supported in the browser');
    });
}
/**
 * Reads a text file and returns its content.
 */
function readTextFromFile(filepath) {
    throw new Error('This function is not supported in the browser');
}
/**
 * Create web agent from proxy agent options.
 */
function createAgent(options, proxyConfig) {
    return undefined;
}
/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
function jsonStringifyWithEscapedUnicode(body) {
    return body
        .replace(/[\u007f-\uffff]/g, (char) => `\\u${`0000${char.charCodeAt(0).toString(16)}`.slice(-4)}`)
        .replace(/(?<!\\)\//g, '\\/');
}
/**
 * Compute the message signature
 * @see {@Link https://developer.box.com/en/guides/webhooks/handle/setup-signatures/}
 *
 * @param {string} body - The request body of the webhook message
 * @param {Object} headers - The request headers of the webhook message
 * @param {string} signatureKey - The signature to verify the message with
 * @param {string} escapeBody - Indicates if payload should be escaped or left as is
 * @returns {?string} - The message signature (or null, if it can't be computed)
 * @private
 */
function computeWebhookSignature(body_1, headers_1, signatureKey_1) {
    return __awaiter(this, arguments, void 0, function* (body, headers, signatureKey, escapeBody = false) {
        if (headers['box-signature-version'] !== '1') {
            return null;
        }
        if (headers['box-signature-algorithm'] !== 'HmacSHA256') {
            return null;
        }
        let signature = null;
        const escapedBody = escapeBody ? jsonStringifyWithEscapedUnicode(body) : body;
        const hashFunc = (0, hash_wasm_1.createSHA256)();
        const hmac = yield (0, hash_wasm_1.createHMAC)(hashFunc, signatureKey);
        hmac.init();
        hmac.update(escapedBody);
        hmac.update(headers['box-delivery-timestamp']);
        const result = yield hmac.digest('binary');
        signature = buffer_1.Buffer.from(result).toString('base64');
        return signature;
    });
}
function compareSignatures(expectedSignature, receivedSignature) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!expectedSignature || !receivedSignature) {
            return false;
        }
        if (expectedSignature.length !== receivedSignature.length)
            return false;
        let result = 0;
        for (let i = 0; i < expectedSignature.length; i++) {
            result |= expectedSignature.charCodeAt(i) ^ receivedSignature.charCodeAt(i);
        }
        return result === 0;
    });
}
function calculateMD5Hash(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, hash_wasm_1.sha1)(data);
    });
}
//# sourceMappingURL=utilsBrowser.js.map