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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTime = exports.Date = exports.FormData = exports.Buffer = exports.DefaultPrivateKeyDecryptor = exports.utilLib = exports.setEnvVar = exports.getEnvVar = exports.calculateMD5Hash = exports.computeWebhookSignature = exports.compareSignatures = exports.jsonStringifyWithEscapedUnicode = exports.createAgent = exports.readTextFromFile = exports.createJwtAssertion = exports.iterateChunks = exports.readByteStream = exports.generateReadableStreamFromFile = exports.stringToByteStream = exports.decodeBase64ByteStream = exports.generateByteStreamFromBuffer = exports.generateByteBuffer = exports.Hash = void 0;
exports.isBrowser = isBrowser;
exports.getUuid = getUuid;
exports.decodeBase64 = decodeBase64;
exports.hexToBase64 = hexToBase64;
exports.dateFromString = dateFromString;
exports.deserializeDate = dateFromString;
exports.dateToString = dateToString;
exports.serializeDate = dateToString;
exports.dateTimeFromString = dateTimeFromString;
exports.deserializeDateTime = dateTimeFromString;
exports.dateTimeToString = dateTimeToString;
exports.serializeDateTime = dateTimeToString;
exports.epochSecondsToDateTime = epochSecondsToDateTime;
exports.dateTimeToEpochSeconds = dateTimeToEpochSeconds;
exports.hexStrToBase64 = hexStrToBase64;
exports.generateByteStream = generateByteStream;
exports.bufferEquals = bufferEquals;
exports.bufferLength = bufferLength;
exports.reduceIterator = reduceIterator;
exports.prepareParams = prepareParams;
exports.toString = toString;
exports.createTokenAndCancelAfter = createTokenAndCancelAfter;
exports.getEpochTimeInSeconds = getEpochTimeInSeconds;
exports.delayInSeconds = delayInSeconds;
exports.getValueFromObjectRawData = getValueFromObjectRawData;
exports.createNull = createNull;
exports.createCancellationController = createCancellationController;
exports.random = random;
exports.multipartStreamToBuffer = multipartStreamToBuffer;
exports.multipartBufferToStream = multipartBufferToStream;
exports.sanitizeMap = sanitizeMap;
const uuid_1 = require("uuid");
const utilsNode_1 = require("./utilsNode");
Object.defineProperty(exports, "calculateMD5Hash", { enumerable: true, get: function () { return utilsNode_1.calculateMD5Hash; } });
Object.defineProperty(exports, "compareSignatures", { enumerable: true, get: function () { return utilsNode_1.compareSignatures; } });
Object.defineProperty(exports, "computeWebhookSignature", { enumerable: true, get: function () { return utilsNode_1.computeWebhookSignature; } });
Object.defineProperty(exports, "createAgent", { enumerable: true, get: function () { return utilsNode_1.createAgent; } });
Object.defineProperty(exports, "createJwtAssertion", { enumerable: true, get: function () { return utilsNode_1.createJwtAssertion; } });
Object.defineProperty(exports, "decodeBase64ByteStream", { enumerable: true, get: function () { return utilsNode_1.decodeBase64ByteStream; } });
Object.defineProperty(exports, "generateByteBuffer", { enumerable: true, get: function () { return utilsNode_1.generateByteBuffer; } });
Object.defineProperty(exports, "generateByteStreamFromBuffer", { enumerable: true, get: function () { return utilsNode_1.generateByteStreamFromBuffer; } });
Object.defineProperty(exports, "Hash", { enumerable: true, get: function () { return utilsNode_1.Hash; } });
Object.defineProperty(exports, "iterateChunks", { enumerable: true, get: function () { return utilsNode_1.iterateChunks; } });
Object.defineProperty(exports, "jsonStringifyWithEscapedUnicode", { enumerable: true, get: function () { return utilsNode_1.jsonStringifyWithEscapedUnicode; } });
Object.defineProperty(exports, "readByteStream", { enumerable: true, get: function () { return utilsNode_1.readByteStream; } });
Object.defineProperty(exports, "readTextFromFile", { enumerable: true, get: function () { return utilsNode_1.readTextFromFile; } });
Object.defineProperty(exports, "stringToByteStream", { enumerable: true, get: function () { return utilsNode_1.stringToByteStream; } });
Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return utilsNode_1.Buffer; } });
Object.defineProperty(exports, "FormData", { enumerable: true, get: function () { return utilsNode_1.FormData; } });
Object.defineProperty(exports, "generateReadableStreamFromFile", { enumerable: true, get: function () { return utilsNode_1.generateReadableStreamFromFile; } });
Object.defineProperty(exports, "getEnvVar", { enumerable: true, get: function () { return utilsNode_1.getEnvVar; } });
Object.defineProperty(exports, "setEnvVar", { enumerable: true, get: function () { return utilsNode_1.setEnvVar; } });
Object.defineProperty(exports, "utilLib", { enumerable: true, get: function () { return utilsNode_1.utilLib; } });
Object.defineProperty(exports, "DefaultPrivateKeyDecryptor", { enumerable: true, get: function () { return utilsNode_1.DefaultPrivateKeyDecryptor; } });
const json_1 = require("../serialization/json");
function isBrowser() {
    return (typeof window === 'object' && typeof document === 'object' && window.crypto);
}
function getUuid() {
    return (0, uuid_1.v4)();
}
function decodeBase64(value) {
    return utilsNode_1.Buffer.from(value, 'base64').toString('utf8');
}
function hexToBase64(data) {
    return utilsNode_1.Buffer.from(data, 'hex').toString('base64');
}
// using wrappers for date/datetime because of inability to export built-in Date types
class DateWrapper {
    constructor(value) {
        this.value = value;
    }
}
exports.Date = DateWrapper;
class DateTimeWrapper {
    constructor(value) {
        this.value = value;
    }
}
exports.DateTime = DateTimeWrapper;
function dateFromString(value) {
    return new DateWrapper(new Date(value));
}
function dateToString(date) {
    return date.value.toISOString().match(/^\d{4}-\d{2}-\d{2}/)[0];
}
function dateTimeFromString(value) {
    return new DateTimeWrapper(new Date(value));
}
function dateTimeToString(dateTime) {
    return (dateTime.value
        .toISOString()
        .match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)[0] + '+00:00');
}
function epochSecondsToDateTime(seconds) {
    return new DateTimeWrapper(new Date(seconds * 1000));
}
function dateTimeToEpochSeconds(dateTime) {
    return Math.floor(dateTime.value.getTime() / 1000);
}
// Function to convert a hexadecimal string to base64
function hexStrToBase64(hex) {
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
function generateByteStream(size) {
    return (0, utilsNode_1.generateByteStreamFromBuffer)((0, utilsNode_1.generateByteBuffer)(size));
}
function bufferEquals(buffer1, buffer2) {
    return utilsNode_1.Buffer.compare(buffer1, buffer2) === 0;
}
function bufferLength(buffer) {
    return buffer.length;
}
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
function prepareParams(map) {
    if (!map || typeof map !== 'object') {
        throw new Error('Expecting obj to be an object in prepareParams');
    }
    return Object.fromEntries(Object.entries(map).filter((entry) => typeof entry[1] === 'string'));
}
function toString(value) {
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
function createTokenAndCancelAfter(delay) {
    return AbortSignal.timeout(delay);
}
/**
 * Get current epoch time in seconds.
 */
function getEpochTimeInSeconds() {
    return Math.floor(Date.now() / 1000);
}
function delayInSeconds(seconds) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    });
}
/**
 * Get value from object raw data.
 *
 * @param obj Object with raw data from which to get the value.
 * @param key Key of the value to get.
 * @returns Value from object raw data.
 */
function getValueFromObjectRawData(obj, key) {
    if (!obj || typeof obj !== 'object' || !obj.rawData) {
        return undefined;
    }
    return key.split('.').reduce((value, k) => value === null || value === void 0 ? void 0 : value[k], obj.rawData);
}
/**
 * Create a null value.
 *
 * @returns null
 */
function createNull() {
    return null;
}
/**
 * Create a cancellation controller.
 */
function createCancellationController() {
    return new AbortController();
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}
function multipartStreamToBuffer(multipart) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(multipart.map((item) => __awaiter(this, void 0, void 0, function* () {
            if (!item.fileStream) {
                return item;
            }
            return Object.assign(Object.assign({}, item), { fileStream: undefined, fileStreamBuffer: item.fileStream
                    ? yield (0, utilsNode_1.readByteStream)(item.fileStream)
                    : undefined });
        })));
    });
}
function multipartBufferToStream(multipart) {
    return multipart.map((item) => {
        if (!item.fileStreamBuffer) {
            return item;
        }
        return Object.assign(Object.assign({}, item), { fileStreamBuffer: undefined, fileStream: item.fileStreamBuffer
                ? (0, utilsNode_1.generateByteStreamFromBuffer)(item.fileStreamBuffer)
                : undefined });
    });
}
/**
 * Sanitize a map by replacing sensitive values with a placeholder.
 * @param dictionary The map to sanitize
 * @param keysToSanitize Keys to sanitize
 */
function sanitizeMap(dictionary, keysToSanitize) {
    return Object.fromEntries(Object.entries(dictionary).map(([k, v]) => k.toLowerCase() in keysToSanitize ? [k, (0, json_1.sanitizedValue)()] : [k, v]));
}
//# sourceMappingURL=utils.js.map