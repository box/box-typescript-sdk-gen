"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentExtractOrAiAgentReference = serializeAiAgentExtractOrAiAgentReference;
exports.deserializeAiAgentExtractOrAiAgentReference = deserializeAiAgentExtractOrAiAgentReference;
const aiAgentExtract_generated_js_1 = require("./aiAgentExtract.generated.js");
const aiAgentExtract_generated_js_2 = require("./aiAgentExtract.generated.js");
const aiAgentReference_generated_js_1 = require("./aiAgentReference.generated.js");
const aiAgentReference_generated_js_2 = require("./aiAgentReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentExtractOrAiAgentReference(val) {
    if (val.type == 'ai_agent_extract') {
        return (0, aiAgentExtract_generated_js_1.serializeAiAgentExtract)(val);
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_1.serializeAiAgentReference)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentExtractOrAiAgentReference(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractOrAiAgentReference"',
        });
    }
    if (val.type == 'ai_agent_extract') {
        return (0, aiAgentExtract_generated_js_2.deserializeAiAgentExtract)(val);
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_2.deserializeAiAgentReference)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentExtractOrAiAgentReference",
    });
}
//# sourceMappingURL=aiAgentExtractOrAiAgentReference.generated.js.map