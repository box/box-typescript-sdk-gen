"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadataError = serializeMetadataError;
exports.deserializeMetadataError = deserializeMetadataError;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeMetadataError(val) {
    return {
        ['code']: val.code,
        ['message']: val.message,
        ['request_id']: val.requestId,
    };
}
function deserializeMetadataError(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "MetadataError"' });
    }
    if (!(val.code == void 0) && !(0, json_js_1.sdIsString)(val.code)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "code" of type "MetadataError"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "MetadataError"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.request_id == void 0) && !(0, json_js_1.sdIsString)(val.request_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "request_id" of type "MetadataError"',
        });
    }
    const requestId = val.request_id == void 0 ? void 0 : val.request_id;
    return {
        code: code,
        message: message,
        requestId: requestId,
    };
}
//# sourceMappingURL=metadataError.generated.js.map