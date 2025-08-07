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
var _Hash_hash;
import { Buffer } from 'buffer';
import { Readable } from 'stream';
import { SignJWT, importPKCS8 } from 'jose';
import { default as crypto } from 'crypto';
import { default as fs } from 'fs';
import { ProxyAgent } from 'proxy-agent';
import { default as FormData } from 'form-data';
import util from 'util';
export { Buffer, Readable as ByteStream, FormData, util as utilLib };
export class Hash {
    constructor({ algorithm }) {
        _Hash_hash.set(this, void 0);
        this.algorithm = algorithm;
        __classPrivateFieldSet(this, _Hash_hash, crypto.createHash(algorithm), "f");
    }
    async updateHash(data) {
        __classPrivateFieldGet(this, _Hash_hash, "f").update(data);
    }
    async digestHash(encoding = 'base64') {
        return __classPrivateFieldGet(this, _Hash_hash, "f").digest(encoding);
    }
}
_Hash_hash = new WeakMap();
export function generateByteBuffer(size) {
    return crypto.randomBytes(size);
}
export function generateReadableStreamFromFile(file, chunkSize = 1024 * 1024) {
    throw new Error('This function is only supported in the browser');
}
export function generateByteStreamFromBuffer(buffer) {
    const buf = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
    return Readable.from(buf);
}
export function decodeBase64ByteStream(data) {
    return Readable.from(Buffer.from(data, 'base64'));
}
export function stringToByteStream(data) {
    return Readable.from(Buffer.from(data, 'ascii'));
}
export async function readByteStream(byteStream) {
    const buffers = [];
    for await (const data of byteStream) {
        buffers.push(data);
    }
    return Buffer.concat(buffers);
}
export async function* iterateChunks(stream, chunkSize, fileSize) {
    let buffers = [];
    let totalSize = 0;
    let consumedSize = 0;
    while (consumedSize < fileSize && !stream.readableEnded) {
        for await (const chunk of stream) {
            const data = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
            if (!Buffer.isBuffer(data)) {
                throw new Error('Expecting a chunk of stream to be a Buffer');
            }
            consumedSize += data.length;
            buffers.push(data);
            totalSize += data.length;
            if (totalSize < chunkSize) {
                continue;
            }
            const buffer = Buffer.concat(buffers);
            let start = 0;
            while (totalSize >= chunkSize) {
                yield generateByteStreamFromBuffer(buffer.subarray(start, start + chunkSize));
                start += chunkSize;
                totalSize -= chunkSize;
            }
            buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
        }
    }
    if (consumedSize !== fileSize) {
        throw new Error(`Stream size ${consumedSize} does not match expected file size ${fileSize}`);
    }
    if (totalSize > 0) {
        yield generateByteStreamFromBuffer(Buffer.concat(buffers));
    }
}
export class DefaultPrivateKeyDecryptor {
    constructor(fields) { }
    decryptPrivateKey(encryptedPrivateKey, passphrase) {
        const privateKey = crypto.createPrivateKey({
            key: encryptedPrivateKey,
            format: 'pem',
            type: 'pkcs8',
            passphrase: passphrase,
        });
        const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString();
        return pem;
    }
}
/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
export async function createJwtAssertion(claims, key, options) {
    const pem = options.privateKeyDecryptor?.decryptPrivateKey(key.key, key.passphrase);
    if (!pem) {
        throw new Error(`Decrypted jwt private key is empty`);
    }
    const pkcs8 = await importPKCS8(pem, options.algorithm || 'RS256');
    let signer = new SignJWT(claims);
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
    return await signer.sign(pkcs8);
}
/**
 * Reads a text file and returns its content.
 */
export function readTextFromFile(filepath) {
    return fs.readFileSync(filepath, 'utf8');
}
/**
 * Create web agent from proxy agent options.
 */
export function createAgent(options, proxyConfig) {
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
    return agentOptions ? new ProxyAgent(agentOptions) : new ProxyAgent();
}
/**
 * Stringify JSON with escaped multibyte Unicode characters and slashes to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
export function jsonStringifyWithEscapedUnicode(body) {
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
export async function computeWebhookSignature(body, headers, signatureKey, escapeBody = false) {
    if (headers['box-signature-version'] !== '1') {
        return null;
    }
    if (headers['box-signature-algorithm'] !== 'HmacSHA256') {
        return null;
    }
    let signature = null;
    const escapedBody = escapeBody ? jsonStringifyWithEscapedUnicode(body) : body;
    let hmac = crypto.createHmac('sha256', signatureKey);
    hmac.update(escapedBody);
    hmac.update(headers['box-delivery-timestamp']);
    signature = hmac.digest('base64');
    return signature;
}
export async function compareSignatures(expectedSignature, receivedSignature) {
    if (!expectedSignature || !receivedSignature) {
        return false;
    }
    const expectedBuffer = Buffer.from(expectedSignature, 'base64');
    const receivedBuffer = Buffer.from(receivedSignature, 'base64');
    if (expectedBuffer.length !== receivedBuffer.length) {
        return false;
    }
    return crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}
export function random(min, max) {
    return Math.random() * (max - min) + min;
}
export async function calculateMD5Hash(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
}
export function getEnvVar(name) {
    if (typeof process === 'undefined' || !process.env) {
        throw new Error('This function requires a Node.js environment');
    }
    return process.env[name] || '';
}
export function setEnvVar(name, value) {
    if (typeof process === 'undefined' || !process.env) {
        throw new Error('This function requires a Node.js environment');
    }
    process.env[name] = value;
}
//# sourceMappingURL=utilsNode.js.map