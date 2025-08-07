export function jsonToSerializedData(text) {
    return JSON.parse(text);
}
export function sdToJson(data) {
    return JSON.stringify(data);
}
export function sdToUrlParams(data) {
    if (!sdIsMap(data) && !sdIsString(data)) {
        throw new Error('Expecting an object or string as an argument for sdToUrlParams');
    }
    const dataAsMap = sdIsString(data)
        ? JSON.parse(data)
        : data;
    return new URLSearchParams(Object.fromEntries(Object.entries(dataAsMap).filter(([key, value]) => value != null))).toString();
}
export function getSdValueByKey(obj, key) {
    if (sdIsMap(obj)) {
        return obj[key].toString();
    }
    return '';
}
export function sdIsEmpty(data) {
    return data == null;
}
export function sdIsBoolean(data) {
    return typeof data == 'boolean';
}
export function sdIsNumber(data) {
    return typeof data == 'number';
}
export function sdIsString(data) {
    return typeof data == 'string';
}
export function sdIsList(data) {
    return Array.isArray(data);
}
export function sdIsMap(data) {
    return typeof data === 'object' && data != null && !Array.isArray(data);
}
/**
 * Returns a string replacement for sensitive data.
 */
export function sanitizedValue() {
    return '---[redacted]---';
}
/**
 * Sanitize serialized data by replacing sensitive values with a placeholder.
 * @param sd SerializedData to sanitize
 * @param keysToSanitize Keys to sanitize
 */
export function sanitizeSerializedData(sd, keysToSanitize) {
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