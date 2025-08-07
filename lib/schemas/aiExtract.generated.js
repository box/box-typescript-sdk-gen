"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiExtract = serializeAiExtract;
exports.deserializeAiExtract = deserializeAiExtract;
const aiItemBase_generated_js_1 = require("./aiItemBase.generated.js");
const aiItemBase_generated_js_2 = require("./aiItemBase.generated.js");
const aiAgentExtractOrAiAgentReference_generated_js_1 = require("./aiAgentExtractOrAiAgentReference.generated.js");
const aiAgentExtractOrAiAgentReference_generated_js_2 = require("./aiAgentExtractOrAiAgentReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiExtract(val) {
    return {
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return (0, aiItemBase_generated_js_1.serializeAiItemBase)(item);
        }),
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : (0, aiAgentExtractOrAiAgentReference_generated_js_1.serializeAiAgentExtractOrAiAgentReference)(val.aiAgent),
    };
}
function deserializeAiExtract(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiExtract"' });
    }
    if (val.prompt == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "prompt" of type "AiExtract" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiExtract"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "AiExtract" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "AiExtract"',
        });
    }
    const items = (0, json_js_2.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return (0, aiItemBase_generated_js_2.deserializeAiItemBase)(itm);
        })
        : [];
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : (0, aiAgentExtractOrAiAgentReference_generated_js_2.deserializeAiAgentExtractOrAiAgentReference)(val.ai_agent);
    return { prompt: prompt, items: items, aiAgent: aiAgent };
}
//# sourceMappingURL=aiExtract.generated.js.map