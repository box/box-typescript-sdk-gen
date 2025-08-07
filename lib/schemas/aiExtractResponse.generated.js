"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiExtractResponse = serializeAiExtractResponse;
exports.deserializeAiExtractResponse = deserializeAiExtractResponse;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiExtractResponse(val) {
    return {};
}
function deserializeAiExtractResponse(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiExtractResponse"',
        });
    }
    return {};
}
//# sourceMappingURL=aiExtractResponse.generated.js.map