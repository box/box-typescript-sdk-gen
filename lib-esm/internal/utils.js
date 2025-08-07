import { v4 as uuidv4 } from 'uuid';
import { calculateMD5Hash, compareSignatures, computeWebhookSignature, createAgent, createJwtAssertion, decodeBase64ByteStream, generateByteBuffer, generateByteStreamFromBuffer, Hash, iterateChunks, jsonStringifyWithEscapedUnicode, readByteStream, readTextFromFile, stringToByteStream, Buffer, FormData, generateReadableStreamFromFile, getEnvVar, setEnvVar, utilLib, DefaultPrivateKeyDecryptor, } from './utilsNode';
import { sanitizedValue } from '../serialization/json';
export { Hash, generateByteBuffer, generateByteStreamFromBuffer, decodeBase64ByteStream, stringToByteStream, generateReadableStreamFromFile, readByteStream, iterateChunks, createJwtAssertion, readTextFromFile, createAgent, jsonStringifyWithEscapedUnicode, compareSignatures, computeWebhookSignature, calculateMD5Hash, getEnvVar, setEnvVar, utilLib, DefaultPrivateKeyDecryptor, };
export { Buffer, FormData };
export function isBrowser() {
    return (typeof window === 'object' && typeof document === 'object' && window.crypto);
}
export function getUuid() {
    return uuidv4();
}
export function decodeBase64(value) {
    return Buffer.from(value, 'base64').toString('utf8');
}
export function hexToBase64(data) {
    return Buffer.from(data, 'hex').toString('base64');
}
// using wrappers for date/datetime because of inability to export built-in Date types
class DateWrapper {
    constructor(value) {
        this.value = value;
    }
}
class DateTimeWrapper {
    constructor(value) {
        this.value = value;
    }
}
export { DateWrapper as Date, DateTimeWrapper as DateTime };
export function dateFromString(value) {
    return new DateWrapper(new Date(value));
}
export function dateToString(date) {
    return date.value.toISOString().match(/^\d{4}-\d{2}-\d{2}/)[0];
}
export function dateTimeFromString(value) {
    return new DateTimeWrapper(new Date(value));
}
export function dateTimeToString(dateTime) {
    return (dateTime.value
        .toISOString()
        .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)[0] + '+00:00');
}
export function epochSecondsToDateTime(seconds) {
    return new DateTimeWrapper(new Date(seconds * 1000));
}
export function dateTimeToEpochSeconds(dateTime) {
    return Math.floor(dateTime.value.getTime() / 1000);
}
export { dateToString as serializeDate, dateFromString as deserializeDate, dateTimeToString as serializeDateTime, dateTimeFromString as deserializeDateTime, };
// Function to convert a hexadecimal string to base64
export function hexStrToBase64(hex) {
    const hexString = hex.toString(); // Ensure the input is a string
    const hexBytes = new Uint8Array(hexString.length / 2);
    // Convert the hexadecimal string to bytes
    for (let i = 0; i < hexString.length; i += 2) {
        hexBytes[i / 2] = parseInt(hexString.substr(i, 2), 16);
    }
    // Encode the bytes as base64
    const base64 = btoa(String.fromCharCode.apply(null, Array.from(hexBytes)));
    return base64;
}
export function generateByteStream(size) {
    return generateByteStreamFromBuffer(generateByteBuffer(size));
}
export function bufferEquals(buffer1, buffer2) {
    return Buffer.compare(buffer1, buffer2) === 0;
}
export function bufferLength(buffer) {
    return buffer.length;
}
export async function reduceIterator(iterator, reducer, initialValue) {
    let result = initialValue;
    let iteration = await iterator.next();
    while (!iteration.done) {
        result = await reducer(result, iteration.value);
        iteration = await iterator.next();
    }
    return result;
}
export function prepareParams(map) {
    if (!map || typeof map !== 'object') {
        throw new Error('Expecting obj to be an object in prepareParams');
    }
    return Object.fromEntries(Object.entries(map).filter((entry) => typeof entry[1] === 'string'));
}
export function toString(value) {
    if (typeof value === 'string' || value == null) {
        return value;
    }
    return String(value);
}
/**
 * Creates a cancellation token that will be cancelled after a given delay in ms.
 *
 * @param {number} delay Delay in ms.
 * @returns {CancellationToken} Cancellation token.
 */
export function createTokenAndCancelAfter(delay) {
    return AbortSignal.timeout(delay);
}
/**
 * Get current epoch time in seconds.
 */
export function getEpochTimeInSeconds() {
    return Math.floor(Date.now() / 1000);
}
export async function delayInSeconds(seconds) {
    return await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
/**
 * Get value from object raw data.
 *
 * @param obj Object with raw data from which to get the value.
 * @param key Key of the value to get.
 * @returns Value from object raw data.
 */
export function getValueFromObjectRawData(obj, key) {
    if (!obj || typeof obj !== 'object' || !obj.rawData) {
        return undefined;
    }
    return key.split('.').reduce((value, k) => value?.[k], obj.rawData);
}
/**
 * Create a null value.
 *
 * @returns null
 */
export function createNull() {
    return null;
}
/**
 * Create a cancellation controller.
 */
export function createCancellationController() {
    return new AbortController();
}
export function random(min, max) {
    return Math.random() * (max - min) + min;
}
export async function multipartStreamToBuffer(multipart) {
    return await Promise.all(multipart.map(async (item) => {
        if (!item.fileStream) {
            return item;
        }
        return {
            ...item,
            fileStream: undefined,
            fileStreamBuffer: item.fileStream
                ? await readByteStream(item.fileStream)
                : undefined,
        };
    }));
}
export function multipartBufferToStream(multipart) {
    return multipart.map((item) => {
        if (!item.fileStreamBuffer) {
            return item;
        }
        return {
            ...item,
            fileStreamBuffer: undefined,
            fileStream: item.fileStreamBuffer
                ? generateByteStreamFromBuffer(item.fileStreamBuffer)
                : undefined,
        };
    });
}
/**
 * Sanitize a map by replacing sensitive values with a placeholder.
 * @param dictionary The map to sanitize
 * @param keysToSanitize Keys to sanitize
 */
export function sanitizeMap(dictionary, keysToSanitize) {
    return Object.fromEntries(Object.entries(dictionary).map(([k, v]) => k.toLowerCase() in keysToSanitize ? [k, sanitizedValue()] : [k, v]));
}
//# sourceMappingURL=utils.js.map