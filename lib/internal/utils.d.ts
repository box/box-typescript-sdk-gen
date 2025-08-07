import { calculateMD5Hash, compareSignatures, computeWebhookSignature, createAgent, createJwtAssertion, decodeBase64ByteStream, generateByteBuffer, generateByteStreamFromBuffer, Hash, iterateChunks, jsonStringifyWithEscapedUnicode, JwtAlgorithm, JwtKey, JwtSignOptions, readByteStream, readTextFromFile, stringToByteStream, ByteStream, Buffer, FormData, generateReadableStreamFromFile, getEnvVar, setEnvVar, utilLib, PrivateKeyDecryptor, DefaultPrivateKeyDecryptor } from './utilsNode';
import { MultipartItem } from '../networking';
export type HashName = 'sha1';
export type DigestHashType = 'base64';
export type { JwtKey, JwtAlgorithm, JwtSignOptions, ByteStream };
export type { PrivateKeyDecryptor };
export { Hash, generateByteBuffer, generateByteStreamFromBuffer, decodeBase64ByteStream, stringToByteStream, generateReadableStreamFromFile, readByteStream, iterateChunks, createJwtAssertion, readTextFromFile, createAgent, jsonStringifyWithEscapedUnicode, compareSignatures, computeWebhookSignature, calculateMD5Hash, getEnvVar, setEnvVar, utilLib, DefaultPrivateKeyDecryptor, };
export { Buffer, FormData };
export type { CancellationController, CancellationToken };
export type Iterator<T = any> = AsyncIterator<T>;
export type AgentOptions = any;
export type Agent = any;
export declare function isBrowser(): false | Crypto;
export declare function getUuid(): string;
export declare function decodeBase64(value: string): string;
export declare function hexToBase64(data: string): string;
declare class DateWrapper {
    readonly value: Date;
    constructor(value: Date);
}
declare class DateTimeWrapper {
    readonly value: Date;
    constructor(value: Date);
}
export { DateWrapper as Date, DateTimeWrapper as DateTime };
export declare function dateFromString(value: string): DateWrapper;
export declare function dateToString(date: DateWrapper): string;
export declare function dateTimeFromString(value: string): DateTimeWrapper;
export declare function dateTimeToString(dateTime: DateTimeWrapper): string;
export declare function epochSecondsToDateTime(seconds: number): DateTimeWrapper;
export declare function dateTimeToEpochSeconds(dateTime: DateTimeWrapper): number;
export { dateToString as serializeDate, dateFromString as deserializeDate, dateTimeToString as serializeDateTime, dateTimeFromString as deserializeDateTime, };
export declare function hexStrToBase64(hex: string): string;
export declare function generateByteStream(size: number): ByteStream;
export declare function bufferEquals(buffer1: Buffer, buffer2: Buffer): boolean;
export declare function bufferLength(buffer: Buffer): number;
export declare function reduceIterator<T, U>(iterator: Iterator<T>, reducer: (accumulator: U, current: T) => Promise<U>, initialValue: U): Promise<U>;
export declare function prepareParams(map: {
    readonly [key: string]: undefined | string;
}): {
    readonly [key: string]: string;
};
export declare function toString(value: any): string;
type CancellationController = AbortController;
type CancellationToken = AbortSignal;
/**
 * Creates a cancellation token that will be cancelled after a given delay in ms.
 *
 * @param {number} delay Delay in ms.
 * @returns {CancellationToken} Cancellation token.
 */
export declare function createTokenAndCancelAfter(delay: number): CancellationToken;
/**
 * Get current epoch time in seconds.
 */
export declare function getEpochTimeInSeconds(): number;
export declare function delayInSeconds(seconds: number): Promise<void>;
/**
 * Get value from object raw data.
 *
 * @param obj Object with raw data from which to get the value.
 * @param key Key of the value to get.
 * @returns Value from object raw data.
 */
export declare function getValueFromObjectRawData(obj: any, key: string): any;
/**
 * Create a null value.
 *
 * @returns null
 */
export declare function createNull(): null;
/**
 * Create a cancellation controller.
 */
export declare function createCancellationController(): CancellationController;
export declare function random(min: number, max: number): number;
export declare function multipartStreamToBuffer(multipart: readonly MultipartItem[]): Promise<(MultipartItem & {
    fileStreamBuffer?: Buffer;
})[]>;
export declare function multipartBufferToStream(multipart: (MultipartItem & {
    fileStreamBuffer?: Buffer;
})[]): readonly MultipartItem[];
/**
 * Sanitize a map by replacing sensitive values with a placeholder.
 * @param dictionary The map to sanitize
 * @param keysToSanitize Keys to sanitize
 */
export declare function sanitizeMap(dictionary: Record<string, string>, keysToSanitize: Record<string, string>): Record<string, string>;
//# sourceMappingURL=utils.d.ts.map