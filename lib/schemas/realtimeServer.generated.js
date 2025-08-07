"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeRealtimeServer = serializeRealtimeServer;
exports.deserializeRealtimeServer = deserializeRealtimeServer;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeRealtimeServer(val) {
    return {
        ['type']: val.type,
        ['url']: val.url,
        ['ttl']: val.ttl,
        ['max_retries']: val.maxRetries,
        ['retry_timeout']: val.retryTimeout,
    };
}
function deserializeRealtimeServer(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "RealtimeServer"' });
    }
    if (!(val.type == void 0) && !(0, json_js_2.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "RealtimeServer"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.url == void 0) && !(0, json_js_2.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "RealtimeServer"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.ttl == void 0) && !(0, json_js_2.sdIsString)(val.ttl)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "ttl" of type "RealtimeServer"',
        });
    }
    const ttl = val.ttl == void 0 ? void 0 : val.ttl;
    if (!(val.max_retries == void 0) && !(0, json_js_2.sdIsString)(val.max_retries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "max_retries" of type "RealtimeServer"',
        });
    }
    const maxRetries = val.max_retries == void 0 ? void 0 : val.max_retries;
    if (!(val.retry_timeout == void 0) && !(0, json_js_1.sdIsNumber)(val.retry_timeout)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "retry_timeout" of type "RealtimeServer"',
        });
    }
    const retryTimeout = val.retry_timeout == void 0 ? void 0 : val.retry_timeout;
    return {
        type: type,
        url: url,
        ttl: ttl,
        maxRetries: maxRetries,
        retryTimeout: retryTimeout,
    };
}
//# sourceMappingURL=realtimeServer.generated.js.map