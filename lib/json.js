"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = exports.deserializeJson = exports.serializeJson = void 0;
function serializeJson(value) {
    return JSON.stringify(value);
}
exports.serializeJson = serializeJson;
function deserializeJson(text) {
    return JSON.parse(text);
}
exports.deserializeJson = deserializeJson;
function isJson(value, type) {
    if (typeof value === 'undefined') {
        return false;
    }
    switch (type) {
        case 'array':
            return Array.isArray(value);
        case 'boolean':
            return typeof value === 'boolean';
        case 'null':
            return value === null;
        case 'number':
            return typeof value === 'number';
        case 'object':
            return value && typeof value === 'object' && !Array.isArray(value);
        case 'string':
            return typeof value === 'string';
        default:
            throw new Error(`Invalid type provided to isJSON: "${type}"`);
    }
}
exports.isJson = isJson;
//# sourceMappingURL=json.js.map