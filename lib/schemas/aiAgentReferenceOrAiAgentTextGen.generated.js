"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentReferenceOrAiAgentTextGen = serializeAiAgentReferenceOrAiAgentTextGen;
exports.deserializeAiAgentReferenceOrAiAgentTextGen = deserializeAiAgentReferenceOrAiAgentTextGen;
const aiAgentReference_generated_js_1 = require("./aiAgentReference.generated.js");
const aiAgentReference_generated_js_2 = require("./aiAgentReference.generated.js");
const aiAgentTextGen_generated_js_1 = require("./aiAgentTextGen.generated.js");
const aiAgentTextGen_generated_js_2 = require("./aiAgentTextGen.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentReferenceOrAiAgentTextGen(val) {
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_1.serializeAiAgentReference)(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return (0, aiAgentTextGen_generated_js_1.serializeAiAgentTextGen)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentReferenceOrAiAgentTextGen(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentReferenceOrAiAgentTextGen"',
        });
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_2.deserializeAiAgentReference)(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return (0, aiAgentTextGen_generated_js_2.deserializeAiAgentTextGen)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentReferenceOrAiAgentTextGen",
    });
}
//# sourceMappingURL=aiAgentReferenceOrAiAgentTextGen.generated.js.map