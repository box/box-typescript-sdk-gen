import { Buffer } from 'buffer';
export { Buffer };
export type ByteStream = ReadableStream;
export declare class FormData {
}
export type AgentOptions = any;
export type Agent = any;
export type HashName = 'sha1';
export type DigestHashType = 'base64';
export declare class utilLib {
    static inspect: {
        custom: string;
    };
}
export declare class Hash {
    #private;
    algorithm: HashName;
    constructor({ algorithm }: {
        algorithm: HashName;
    });
    initializeBrowserHash(): Promise<void>;
    updateHash(data: Buffer): Promise<void>;
    digestHash(encoding?: DigestHashType): Promise<string>;
}
export declare function generateByteBuffer(size: number): Buffer;
export declare function generateReadableStreamFromFile(file: any, chunkSize?: number): ReadableStream;
export declare function generateByteStreamFromBuffer(buffer: Buffer | ArrayBuffer): ReadableStream;
export declare function decodeBase64ByteStream(data: string): ReadableStream;
export declare function stringToByteStream(data: string): ReadableStream;
export declare function getEnvVar(name: string): string;
export declare function setEnvVar(name: string, value: string): void;
export declare function readByteStream(byteStream: ByteStream): Promise<Buffer>;
export declare function iterateChunks(stream: ByteStream, chunkSize: number, fileSize: number): AsyncGenerator<ByteStream>;
export type JwtKey = any;
export type JwtAlgorithm = any;
export type JwtSignOptions = any;
export interface PrivateKeyDecryptor {
}
export declare class DefaultPrivateKeyDecryptor implements PrivateKeyDecryptor {
    constructor(fields: any);
}
/**
 * Creates a JWT assertion.
 *
 * @param claims
 * @param key
 * @param options
 * @returns
 */
export declare function createJwtAssertion(claims: {
    readonly [key: string]: any;
}, key: JwtKey, options: JwtSignOptions): Promise<string>;
/**
 * Reads a text file and returns its content.
 */
export declare function readTextFromFile(filepath: string): string;
/**
 * Create web agent from proxy agent options.
 */
export declare function createAgent(options?: AgentOptions, proxyConfig?: any): Agent;
/**
 * Stringify JSON with escaped multibyte Unicode characters to ensure computed signatures match PHP's default behavior
 *
 * @param {Object} body - The parsed JSON object
 * @returns {string} - Stringified JSON with escaped multibyte Unicode characters
 * @private
 */
export declare function jsonStringifyWithEscapedUnicode(body: string): string;
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
export declare function computeWebhookSignature(body: string, headers: {
    [key: string]: string;
}, signatureKey: string, escapeBody?: boolean): Promise<string | null>;
export declare function compareSignatures(expectedSignature: string | null, receivedSignature: string | null): Promise<boolean>;
export declare function calculateMD5Hash(data: string | Buffer): Promise<string>;
//# sourceMappingURL=utilsBrowser.d.ts.map