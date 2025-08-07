"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentExtractStructuredOrAiAgentReference = serializeAiAgentExtractStructuredOrAiAgentReference;
exports.deserializeAiAgentExtractStructuredOrAiAgentReference = deserializeAiAgentExtractStructuredOrAiAgentReference;
const aiAgentExtractStructured_generated_js_1 = require("./aiAgentExtractStructured.generated.js");
const aiAgentExtractStructured_generated_js_2 = require("./aiAgentExtractStructured.generated.js");
const aiAgentReference_generated_js_1 = require("./aiAgentReference.generated.js");
const aiAgentReference_generated_js_2 = require("./aiAgentReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentExtractStructuredOrAiAgentReference(val) {
    if (val.type == 'ai_agent_extract_structured') {
        return (0, aiAgentExtractStructured_generated_js_1.serializeAiAgentExtractStructured)(val);
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_1.serializeAiAgentReference)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentExtractStructuredOrAiAgentReference(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractStructuredOrAiAgentReference"',
        });
    }
    if (val.type == 'ai_agent_extract_structured') {
        return (0, aiAgentExtractStructured_generated_js_2.deserializeAiAgentExtractStructured)(val);
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_2.deserializeAiAgentReference)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentExtractStructuredOrAiAgentReference",
    });
}
//# sourceMappingURL=aiAgentExtractStructuredOrAiAgentReference.generated.js.map