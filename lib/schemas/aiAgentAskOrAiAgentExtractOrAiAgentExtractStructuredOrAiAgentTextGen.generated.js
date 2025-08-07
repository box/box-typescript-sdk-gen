"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen = serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen;
exports.deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen = deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen;
const aiAgentAsk_generated_js_1 = require("./aiAgentAsk.generated.js");
const aiAgentAsk_generated_js_2 = require("./aiAgentAsk.generated.js");
const aiAgentExtract_generated_js_1 = require("./aiAgentExtract.generated.js");
const aiAgentExtract_generated_js_2 = require("./aiAgentExtract.generated.js");
const aiAgentExtractStructured_generated_js_1 = require("./aiAgentExtractStructured.generated.js");
const aiAgentExtractStructured_generated_js_2 = require("./aiAgentExtractStructured.generated.js");
const aiAgentTextGen_generated_js_1 = require("./aiAgentTextGen.generated.js");
const aiAgentTextGen_generated_js_2 = require("./aiAgentTextGen.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(val) {
    if (val.type == 'ai_agent_ask') {
        return (0, aiAgentAsk_generated_js_1.serializeAiAgentAsk)(val);
    }
    if (val.type == 'ai_agent_extract') {
        return (0, aiAgentExtract_generated_js_1.serializeAiAgentExtract)(val);
    }
    if (val.type == 'ai_agent_extract_structured') {
        return (0, aiAgentExtractStructured_generated_js_1.serializeAiAgentExtractStructured)(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return (0, aiAgentTextGen_generated_js_1.serializeAiAgentTextGen)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen"',
        });
    }
    if (val.type == 'ai_agent_ask') {
        return (0, aiAgentAsk_generated_js_2.deserializeAiAgentAsk)(val);
    }
    if (val.type == 'ai_agent_extract') {
        return (0, aiAgentExtract_generated_js_2.deserializeAiAgentExtract)(val);
    }
    if (val.type == 'ai_agent_extract_structured') {
        return (0, aiAgentExtractStructured_generated_js_2.deserializeAiAgentExtractStructured)(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return (0, aiAgentTextGen_generated_js_2.deserializeAiAgentTextGen)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen",
    });
}
//# sourceMappingURL=aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated.js.map