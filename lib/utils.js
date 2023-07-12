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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareParams = exports.readByteStream = exports.generateByteStream = exports.BUFFER_SIZE = exports.getEnvVar = exports.decodeBase64 = exports.getUuid = void 0;
const crypto_1 = require("crypto");
const stream_1 = require("stream");
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
exports.BUFFER_SIZE = 1024 * 1024;
function generateByteStream() {
    return stream_1.Readable.from((0, crypto_1.randomBytes)(exports.BUFFER_SIZE));
}
exports.generateByteStream = generateByteStream;
function readByteStream(byteStream) {
    var _a, byteStream_1, byteStream_1_1;
    var _b, e_1, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const buffers = [];
        try {
            for (_a = true, byteStream_1 = __asyncValues(byteStream); byteStream_1_1 = yield byteStream_1.next(), _b = byteStream_1_1.done, !_b;) {
                _d = byteStream_1_1.value;
                _a = false;
                try {
                    const data = _d;
                    buffers.push(data);
                }
                finally {
                    _a = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = byteStream_1.return)) yield _c.call(byteStream_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Buffer.concat(buffers);
    });
}
exports.readByteStream = readByteStream;
function prepareParams(obj) {
    return Object.fromEntries(Object.entries(obj)
        .map(([key, value]) => {
        if (typeof value === 'string' || value == null) {
            return [key, value];
        }
        return [key, String(value)];
    })
        .filter((entry) => typeof entry[1] === 'string'));
}
exports.prepareParams = prepareParams;
//# sourceMappingURL=utils.js.map