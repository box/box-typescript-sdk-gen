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
import { createHMAC, createSHA1, createSHA256, sha1 } from 'hash-wasm';
export { Buffer };
export class FormData {
}
export class utilLib {
}
utilLib.inspect = {
    custom: 'inspect.custom',
};
export class Hash {
    constructor({ algorithm }) {
        _Hash_hash.set(this, void 0);
        this.algorithm = algorithm;
        __classPrivateFieldSet(this, _Hash_hash, undefined, "f");
    }
    async initializeBrowserHash() {
        switch (this.algorithm) {
            case 'sha1':
                __classPrivateFieldSet(this, _Hash_hash, await createSHA1(), "f");
                __classPrivateFieldGet(this, _Hash_hash, "f").init();
                break;
            default:
                throw new Error(`Unsupported algorithm: ${this.algorithm}`);
        }
    }
    async updateHash(data) {
        if (!__classPrivateFieldGet(this, _Hash_hash, "f")) {
            await this.initializeBrowserHash();
        }
        __classPrivateFieldGet(this, _Hash_hash, "f").update(data);
    }
    async digestHash(encoding = 'base64') {
        if (!__classPrivateFieldGet(this, _Hash_hash, "f")) {
            await this.initializeBrowserHash();
        }
        const d = __classPrivateFieldGet(this, _Hash_hash, "f").digest('binary');
        switch (encoding) {
            case 'base64':
                return Buffer.from(d).toString('base64');
            default:
                throw new Error(`Unsupported encoding: ${encoding}`);
        }
    }
}
_Hash_hash = new WeakMap();
export function generateByteBuffer(size) {
    // Maximum size for crypto.getRandomValues is 65536 bytes
    const MAX_CHUNK_SIZE = 65536;
    const buffer = new Uint8Array(size);
    for (let offset = 0; offset < size; offset += MAX_CHUNK_SIZE) {
        const length = Math.min(MAX_CHUNK_SIZE, size - offset);
        const chunk = new Uint8Array(length);
        window.crypto.getRandomValues(chunk);
        buffer.set(chunk, offset);
    }
    return Buffer.from(buffer);
}
export function generateReadableStreamFromFile(file, chunkSize = 1024 * 1024) {
    let offset = 0;
    return new ReadableStream({
        async pull(controller) {
            if (offset >= file.size) {
                controller.close();
                return;
            }
            const chunk = file.slice(offset, offset + chunkSize);
            const arrayBuffer = await chunk.arrayBuffer();
            controller.enqueue(new Uint8Array(arrayBuffer));
            offset += chunkSize;
        },
    });
}
export function generateByteStreamFromBuffer(buffer) {
    return new ReadableStream({
        start(controller) {
            controller.enqueue(new Uint8Array(buffer));
            controller.close();
        },
    });
}
export function decodeBase64ByteStream(data) {
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
export function stringToByteStream(data) {
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
export function getEnvVar(name) {
    if (typeof window !== 'undefined' &&
        window.env &&
        window.env[name]) {
        return window.env[name];
    }
    return '';
}
export function setEnvVar(name, value) {
    if (typeof window === 'undefined') {
        throw new Error('This function requires a browser environment');
    }
    if (!window.env) {
        window.env = {};
    }
    window.env[name] = value;
}
export async function readByteStream(byteStream) {
    const buffers = [];
    // Browser ReadableStream
    const reader = byteStream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done)
            break;
        buffers.push(Buffer.from(value));
    }
    return Buffer.concat(buffers);
}
export async function* iterateChunks(stream, chunkSize, fileSize) {
    let buffers = [];
    let totalSize = 0;
    let consumedSize = 0;
    const reader = stream.getReader();
    while (consumedSize < fileSize) {
        const { done, value } = await reader.read();
        if (done)
            break;
        const data = Buffer.from(value);
        consumedSize += data.length;
        buffers.push(data);
        totalSize += data.length;
        yield* yieldChunks();
    }
    if (consumedSize !== fileSize) {
        throw new Error(`Stream size ${consumedSize} does not match expected file size ${fileSize}`);
    }
    if (totalSize > 0) {
        yield await generateByteStreamFromBuffer(Buffer.concat(buffers));
    }
    /**
     * Yields chunks of the desired `chunkSize` if enough data is available.
     */
    async function* yieldChunks() {
        if (totalSize < chunkSize)
            return;
        const buffer = Buffer.concat(buffers);
        let start = 0;
        while (totalSize >= chunkSize) {
            yield await generateByteStreamFromBuffer(buffer.subarray(start, start + chunkSize));
            start += chunkSize;
            totalSize -= chunkSize;
        }
        buffers = totalSize > 0 ? [buffer.subarray(start)] : [];
    }
}
export class DefaultPrivateKeyDecryptor {
    constructor(fields) { }
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
    throw new Error('This function is not supported in the browser');
}
/**
 * Reads a text file and returns its content.
 */
export function readTextFromFile(filepath) {
    throw new Error('This function is not supported in the browser');
}
/**
 * Create web agent from proxy agent options.
 */
export function createAgent(options, proxyConfig) {
    return undefined;
}
/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
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
    const hashFunc = createSHA256();
    const hmac = await createHMAC(hashFunc, signatureKey);
    hmac.init();
    hmac.update(escapedBody);
    hmac.update(headers['box-delivery-timestamp']);
    const result = await hmac.digest('binary');
    signature = Buffer.from(result).toString('base64');
    return signature;
}
export async function compareSignatures(expectedSignature, receivedSignature) {
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
}
export async function calculateMD5Hash(data) {
    return await sha1(data);
}
//# sourceMappingURL=utilsBrowser.js.map