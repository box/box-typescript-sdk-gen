"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenTagsProcessingMessageV2025R0 = serializeDocGenTagsProcessingMessageV2025R0;
exports.deserializeDocGenTagsProcessingMessageV2025R0 = deserializeDocGenTagsProcessingMessageV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeDocGenTagsProcessingMessageV2025R0(val) {
    return { ['message']: val.message };
}
function deserializeDocGenTagsProcessingMessageV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenTagsProcessingMessageV2025R0"',
        });
    }
    if (val.message == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "message" of type "DocGenTagsProcessingMessageV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "DocGenTagsProcessingMessageV2025R0"',
        });
    }
    const message = val.message;
    return { message: message };
}
//# sourceMappingURL=docGenTagsProcessingMessageV2025R0.generated.js.map