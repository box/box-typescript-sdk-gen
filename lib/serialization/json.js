"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToSerializedData = jsonToSerializedData;
exports.sdToJson = sdToJson;
exports.sdToUrlParams = sdToUrlParams;
exports.getSdValueByKey = getSdValueByKey;
exports.sdIsEmpty = sdIsEmpty;
exports.sdIsBoolean = sdIsBoolean;
exports.sdIsNumber = sdIsNumber;
exports.sdIsString = sdIsString;
exports.sdIsList = sdIsList;
exports.sdIsMap = sdIsMap;
exports.sanitizedValue = sanitizedValue;
exports.sanitizeSerializedData = sanitizeSerializedData;
function jsonToSerializedData(text) {
    return JSON.parse(text);
}
function sdToJson(data) {
    return JSON.stringify(data);
}
function sdToUrlParams(data) {
    if (!sdIsMap(data) && !sdIsString(data)) {
        throw new Error('Expecting an object or string as an argument for sdToUrlParams');
    }
    const dataAsMap = sdIsString(data)
        ? JSON.parse(data)
        : data;
    return new URLSearchParams(Object.fromEntries(Object.entries(dataAsMap).filter(([key, value]) => value != null))).toString();
}
function getSdValueByKey(obj, key) {
    if (sdIsMap(obj)) {
        return obj[key].toString();
    }
    return '';
}
function sdIsEmpty(data) {
    return data == null;
}
function sdIsBoolean(data) {
    return typeof data == 'boolean';
}
function sdIsNumber(data) {
    return typeof data == 'number';
}
function sdIsString(data) {
    return typeof data == 'string';
}
function sdIsList(data) {
    return Array.isArray(data);
}
function sdIsMap(data) {
    return typeof data === 'object' && data != null && !Array.isArray(data);
}
/**
 * Returns a string replacement for sensitive data.
 */
function sanitizedValue() {
    return '---[redacted]---';
}
/**
 * Sanitize serialized data by replacing sensitive values with a placeholder.
 * @param sd SerializedData to sanitize
 * @param keysToSanitize Keys to sanitize
 */
function sanitizeSerializedData(sd, keysToSanitize) {
    if (!sdIsMap(sd)) {
        return sd;
    }
    const sanitizedDictionary = {};
    for (const [key, value] of Object.entries(sd)) {
        if (key.toLowerCase() in keysToSanitize && typeof value === 'string') {
            sanitizedDictionary[key] = sanitizedValue();
        }
        else if (typeof value === 'object') {
            sanitizedDictionary[key] = sanitizeSerializedData(value, keysToSanitize);
        }
        else {
            sanitizedDictionary[key] = value;
        }
    }
    return sanitizedDictionary;
}
//# sourceMappingURL=json.js.map