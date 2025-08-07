"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiResponseFull = serializeAiResponseFull;
exports.deserializeAiResponseFull = deserializeAiResponseFull;
const utils_js_1 = require("../internal/utils.js");
const aiAgentInfo_generated_js_1 = require("./aiAgentInfo.generated.js");
const aiResponse_generated_js_1 = require("./aiResponse.generated.js");
const aiCitation_generated_js_1 = require("./aiCitation.generated.js");
const aiCitation_generated_js_2 = require("./aiCitation.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiResponseFull(val) {
    const base = (0, aiResponse_generated_js_1.serializeAiResponse)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiResponseFull"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['citations']: val.citations == void 0
            ? val.citations
            : val.citations.map(function (item) {
                return (0, aiCitation_generated_js_1.serializeAiCitation)(item);
            }),
    });
}
function deserializeAiResponseFull(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiResponseFull"' });
    }
    if (!(val.citations == void 0) && !(0, json_js_2.sdIsList)(val.citations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "citations" of type "AiResponseFull"',
        });
    }
    const citations = val.citations == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.citations)
            ? val.citations.map(function (itm) {
                return (0, aiCitation_generated_js_2.deserializeAiCitation)(itm);
            })
            : [];
    if (val.answer == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "answer" of type "AiResponseFull" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.answer)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "answer" of type "AiResponseFull"',
        });
    }
    const answer = val.answer;
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "AiResponseFull" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiResponseFull"',
        });
    }
    const createdAt = (0, utils_js_1.deserializeDateTime)(val.created_at);
    if (!(val.completion_reason == void 0) &&
        !(0, json_js_1.sdIsString)(val.completion_reason)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "completion_reason" of type "AiResponseFull"',
        });
    }
    const completionReason = val.completion_reason == void 0 ? void 0 : val.completion_reason;
    const aiAgentInfo = val.ai_agent_info == void 0
        ? void 0
        : (0, aiAgentInfo_generated_js_1.deserializeAiAgentInfo)(val.ai_agent_info);
    return {
        citations: citations,
        answer: answer,
        createdAt: createdAt,
        completionReason: completionReason,
        aiAgentInfo: aiAgentInfo,
    };
}
//# sourceMappingURL=aiResponseFull.generated.js.map