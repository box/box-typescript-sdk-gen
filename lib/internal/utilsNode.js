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
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Hash_hash;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPrivateKeyDecryptor = exports.Hash = exports.utilLib = exports.FormData = exports.ByteStream = exports.Buffer = void 0;
exports.generateByteBuffer = generateByteBuffer;
exports.generateReadableStreamFromFile = generateReadableStreamFromFile;
exports.generateByteStreamFromBuffer = generateByteStreamFromBuffer;
exports.decodeBase64ByteStream = decodeBase64ByteStream;
exports.stringToByteStream = stringToByteStream;
exports.readByteStream = readByteStream;
exports.iterateChunks = iterateChunks;
exports.createJwtAssertion = createJwtAssertion;
exports.readTextFromFile = readTextFromFile;
exports.createAgent = createAgent;
exports.jsonStringifyWithEscapedUnicode = jsonStringifyWithEscapedUnicode;
exports.computeWebhookSignature = computeWebhookSignature;
exports.compareSignatures = compareSignatures;
exports.random = random;
exports.calculateMD5Hash = calculateMD5Hash;
exports.getEnvVar = getEnvVar;
exports.setEnvVar = setEnvVar;
const buffer_1 = require("buffer");
Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return buffer_1.Buffer; } });
const stream_1 = require("stream");
Object.defineProperty(exports, "ByteStream", { enumerable: true, get: function () { return stream_1.Readable; } });
const jose_1 = require("jose");
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = __importDefault(require("fs"));
const proxy_agent_1 = require("proxy-agent");
const form_data_1 = __importDefault(require("form-data"));
Object.defineProperty(exports, "FormData", { enumerable: true, get: function () { return form_data_1.default; } });
const util_1 = __importDefault(require("util"));
exports.utilLib = util_1.default;
class Hash {
    constructor({ algorithm }) {
        _Hash_hash.set(this, void 0);
        this.algorithm = algorithm;
        __classPrivateFieldSet(this, _Hash_hash, crypto_1.default.createHash(algorithm), "f");
    }
    updateHash(data) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _Hash_hash, "f").update(data);
        });
    }
    digestHash() {
        return __awaiter(this, arguments, void 0, function* (encoding = 'base64') {
            return __classPrivateFieldGet(this, _Hash_hash, "f").digest(encoding);
        });
    }
}
exports.Hash = Hash;
_Hash_hash = new WeakMap();
function generateByteBuffer(size) {
    return crypto_1.default.randomBytes(size);
}
function generateReadableStreamFromFile(file, chunkSize = 1024 * 1024) {
    throw new Error('This function is only supported in the browser');
}
function generateByteStreamFromBuffer(buffer) {
    const buf = buffer_1.Buffer.isBuffer(buffer) ? buffer : buffer_1.Buffer.from(buffer);
    return stream_1.Readable.from(buf);
}
function decodeBase64ByteStream(data) {
    return stream_1.Readable.from(buffer_1.Buffer.from(data, 'base64'));
}
function stringToByteStream(data) {
    return stream_1.Readable.from(buffer_1.Buffer.from(data, 'ascii'));
}
function readByteStream(byteStream) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, byteStream_1, byteStream_1_1;
        var _b, e_1, _c, _d;
        const buffers = [];
        try {
            for (_a = true, byteStream_1 = __asyncValues(byteStream); byteStream_1_1 = yield byteStream_1.next(), _b = byteStream_1_1.done, !_b; _a = true) {
                _d = byteStream_1_1.value;
                _a = false;
                const data = _d;
                buffers.push(data);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = byteStream_1.return)) yield _c.call(byteStream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return buffer_1.Buffer.concat(buffers);
    });
}
function iterateChunks(stream, chunkSize, fileSize) {
    return __asyncGenerator(this, arguments, function* iterateChunks_1() {
        var _a, e_2, _b, _c;
        let buffers = [];
        let totalSize = 0;
        let consumedSize = 0;
        while (consumedSize < fileSize && !stream.readableEnded) {
            try {
                for (var _d = true, stream_2 = (e_2 = void 0, __asyncValues(stream)), stream_2_1; stream_2_1 = yield __await(stream_2.next()), _a = stream_2_1.done, !_a; _d = true) {
                    _c = stream_2_1.value;
                    _d = false;
                    const chunk = _c;
                    const data = buffer_1.Buffer.isBuffer(chunk) ? chunk : buffer_1.Buffer.from(chunk);
                    if (!buffer_1.Buffer.isBuffer(data)) {
                        throw new Error('Expecting a chunk of stream to be a Buffer');
                    }
                    consumedSize += data.length;
                    buffers.push(data);
                    totalSize += data.length;
                    if (totalSize < chunkSize) {
                        continue;
                    }
                    const buffer = buffer_1.Buffer.concat(buffers);
                    let start = 0;
                    while (totalSize >= chunkSize) {
                        yield yield __await(generateByteStreamFromBuffer(buffer.subarray(start, start + chunkSize)));
                        start += chunkSize;
                        totalSize -= chunkSize;
                    }
                    buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = stream_2.return)) yield __await(_b.call(stream_2));
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (consumedSize !== fileSize) {
            throw new Error(`Stream size ${consumedSize} does not match expected file size ${fileSize}`);
        }
        if (totalSize > 0) {
            yield yield __await(generateByteStreamFromBuffer(buffer_1.Buffer.concat(buffers)));
        }
    });
}
class DefaultPrivateKeyDecryptor {
    constructor(fields) { }
    decryptPrivateKey(encryptedPrivateKey, passphrase) {
        const privateKey = crypto_1.default.createPrivateKey({
            key: encryptedPrivateKey,
            format: 'pem',
            type: 'pkcs8',
            passphrase: passphrase,
        });
        const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
        return pem;
    }
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
        var _a;
        const pem = (_a = options.privateKeyDecryptor) === null || _a === void 0 ? void 0 : _a.decryptPrivateKey(key.key, key.passphrase);
        if (!pem) {
            throw new Error(`Decrypted jwt private key is empty`);
        }
        const pkcs8 = yield (0, jose_1.importPKCS8)(pem, options.algorithm || 'RS256');
        let signer = new jose_1.SignJWT(claims);
        signer = options.audience ? signer.setAudience(options.audience) : signer;
        signer = options.expiresIn
            ? signer.setExpirationTime(options.expiresIn)
            : signer;
        signer = options.issuer ? signer.setIssuer(options.issuer) : signer;
        signer = options.jwtid ? signer.setJti(options.jwtid) : signer;
        signer = options.notBefore ? signer.setNotBefore(options.notBefore) : signer;
        signer = options.subject ? signer.setSubject(options.subject) : signer;
        signer = options.algorithm
            ? signer.setProtectedHeader({ alg: options.algorithm })
            : signer;
        signer = signer.setIssuedAt();
        return yield signer.sign(pkcs8);
    });
}
/**
 * Reads a text file and returns its content.
 */
function readTextFromFile(filepath) {
    return fs_1.default.readFileSync(filepath, 'utf8');
}
/**
 * Create web agent from proxy agent options.
 */
function createAgent(options, proxyConfig) {
    let agentOptions = options;
    if (proxyConfig && proxyConfig.url) {
        if (!proxyConfig.url.startsWith('http')) {
            throw new Error('Invalid proxy URL');
        }
        const proxyHost = proxyConfig.url.split('//')[1];
        const proxyAuth = proxyConfig.username && proxyConfig.password
            ? `${proxyConfig.username}:${proxyConfig.password}@`
            : '';
        const proxyUrl = `http://${proxyAuth}${proxyHost}`;
        agentOptions = Object.assign({ getProxyForUrl: (url) => proxyUrl }, options || {});
    }
    return agentOptions ? new proxy_agent_1.ProxyAgent(agentOptions) : new proxy_agent_1.ProxyAgent();
}
/**
 * Stringify JSON with escaped multibyte Unicode characters and slashes to ensure computed signatures match PHP's default behavior
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
        let hmac = crypto_1.default.createHmac('sha256', signatureKey);
        hmac.update(escapedBody);
        hmac.update(headers['box-delivery-timestamp']);
        signature = hmac.digest('base64');
        return signature;
    });
}
function compareSignatures(expectedSignature, receivedSignature) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!expectedSignature || !receivedSignature) {
            return false;
        }
        const expectedBuffer = buffer_1.Buffer.from(expectedSignature, 'base64');
        const receivedBuffer = buffer_1.Buffer.from(receivedSignature, 'base64');
        if (expectedBuffer.length !== receivedBuffer.length) {
            return false;
        }
        return crypto_1.default.timingSafeEqual(expectedBuffer, receivedBuffer);
    });
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}
function calculateMD5Hash(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return crypto_1.default.createHash('sha1').update(data).digest('hex');
    });
}
function getEnvVar(name) {
    if (typeof process === 'undefined' || !process.env) {
        throw new Error('This function requires a Node.js environment');
    }
    return process.env[name] || '';
}
function setEnvVar(name, value) {
    if (typeof process === 'undefined' || !process.env) {
        throw new Error('This function requires a Node.js environment');
    }
    process.env[name] = value;
}
//# sourceMappingURL=utilsNode.js.map