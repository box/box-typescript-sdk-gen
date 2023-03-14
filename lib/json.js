"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJSON = exports.deserializeJSON = exports.serializeJSON = void 0;
function serializeJSON(value) {
    return JSON.stringify(value);
}
exports.serializeJSON = serializeJSON;
function deserializeJSON(text) {
    return JSON.parse(text);
}
exports.deserializeJSON = deserializeJSON;
function isJSON(value, type) {
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
exports.isJSON = isJSON;
//# sourceMappingURL=json.js.map