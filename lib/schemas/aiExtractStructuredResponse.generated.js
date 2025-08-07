"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiExtractStructuredResponse = serializeAiExtractStructuredResponse;
exports.deserializeAiExtractStructuredResponse = deserializeAiExtractStructuredResponse;
const aiExtractResponse_generated_js_1 = require("./aiExtractResponse.generated.js");
const aiExtractResponse_generated_js_2 = require("./aiExtractResponse.generated.js");
const aiAgentInfo_generated_js_1 = require("./aiAgentInfo.generated.js");
const aiAgentInfo_generated_js_2 = require("./aiAgentInfo.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeAiExtractStructuredResponse(val) {
    return {
        ['answer']: (0, aiExtractResponse_generated_js_1.serializeAiExtractResponse)(val.answer),
        ['created_at']: (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['completion_reason']: val.completionReason,
        ['ai_agent_info']: val.aiAgentInfo == void 0
            ? val.aiAgentInfo
            : (0, aiAgentInfo_generated_js_1.serializeAiAgentInfo)(val.aiAgentInfo),
    };
}
function deserializeAiExtractStructuredResponse(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiExtractStructuredResponse"',
        });
    }
    if (val.answer == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "answer" of type "AiExtractStructuredResponse" to be defined',
        });
    }
    const answer = (0, aiExtractResponse_generated_js_2.deserializeAiExtractResponse)(val.answer);
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "AiExtractStructuredResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiExtractStructuredResponse"',
        });
    }
    const createdAt = (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.completion_reason == void 0) &&
        !(0, json_js_1.sdIsString)(val.completion_reason)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "completion_reason" of type "AiExtractStructuredResponse"',
        });
    }
    const completionReason = val.completion_reason == void 0 ? void 0 : val.completion_reason;
    const aiAgentInfo = val.ai_agent_info == void 0
        ? void 0
        : (0, aiAgentInfo_generated_js_2.deserializeAiAgentInfo)(val.ai_agent_info);
    return {
        answer: answer,
        createdAt: createdAt,
        completionReason: completionReason,
        aiAgentInfo: aiAgentInfo,
    };
}
//# sourceMappingURL=aiExtractStructuredResponse.generated.js.map