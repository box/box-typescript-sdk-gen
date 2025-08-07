"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentAskOrAiAgentReference = serializeAiAgentAskOrAiAgentReference;
exports.deserializeAiAgentAskOrAiAgentReference = deserializeAiAgentAskOrAiAgentReference;
const aiAgentAsk_generated_js_1 = require("./aiAgentAsk.generated.js");
const aiAgentAsk_generated_js_2 = require("./aiAgentAsk.generated.js");
const aiAgentReference_generated_js_1 = require("./aiAgentReference.generated.js");
const aiAgentReference_generated_js_2 = require("./aiAgentReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentAskOrAiAgentReference(val) {
    if (val.type == 'ai_agent_ask') {
        return (0, aiAgentAsk_generated_js_1.serializeAiAgentAsk)(val);
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_1.serializeAiAgentReference)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentAskOrAiAgentReference(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentAskOrAiAgentReference"',
        });
    }
    if (val.type == 'ai_agent_ask') {
        return (0, aiAgentAsk_generated_js_2.deserializeAiAgentAsk)(val);
    }
    if (val.type == 'ai_agent_id') {
        return (0, aiAgentReference_generated_js_2.deserializeAiAgentReference)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentAskOrAiAgentReference",
    });
}
//# sourceMappingURL=aiAgentAskOrAiAgentReference.generated.js.map