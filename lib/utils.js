"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvVar = exports.decodeBase64 = exports.getUuid = void 0;
const uuid_1 = require("uuid");
function getUuid() {
    return (0, uuid_1.v4)();
}
exports.getUuid = getUuid;
function decodeBase64(value) {
    return Buffer.from(value, 'base64').toString('utf8');
}
exports.decodeBase64 = decodeBase64;
function getEnvVar(name) {
    return process.env[name] || '';
}
exports.getEnvVar = getEnvVar;
//# sourceMappingURL=utils.js.map