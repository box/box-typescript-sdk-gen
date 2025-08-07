"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAskModeField = serializeAiAskModeField;
exports.deserializeAiAskModeField = deserializeAiAskModeField;
exports.serializeAiAsk = serializeAiAsk;
exports.deserializeAiAsk = deserializeAiAsk;
const aiItemAsk_generated_js_1 = require("./aiItemAsk.generated.js");
const aiItemAsk_generated_js_2 = require("./aiItemAsk.generated.js");
const aiDialogueHistory_generated_js_1 = require("./aiDialogueHistory.generated.js");
const aiDialogueHistory_generated_js_2 = require("./aiDialogueHistory.generated.js");
const aiAgentAskOrAiAgentReference_generated_js_1 = require("./aiAgentAskOrAiAgentReference.generated.js");
const aiAgentAskOrAiAgentReference_generated_js_2 = require("./aiAgentAskOrAiAgentReference.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeAiAskModeField(val) {
    return val;
}
function deserializeAiAskModeField(val) {
    if (val == 'multiple_item_qa') {
        return val;
    }
    if (val == 'single_item_qa') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiAskModeField" });
}
function serializeAiAsk(val) {
    return {
        ['mode']: serializeAiAskModeField(val.mode),
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return (0, aiItemAsk_generated_js_1.serializeAiItemAsk)(item);
        }),
        ['dialogue_history']: val.dialogueHistory == void 0
            ? val.dialogueHistory
            : val.dialogueHistory.map(function (item) {
                return (0, aiDialogueHistory_generated_js_1.serializeAiDialogueHistory)(item);
            }),
        ['include_citations']: val.includeCitations,
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : (0, aiAgentAskOrAiAgentReference_generated_js_1.serializeAiAgentAskOrAiAgentReference)(val.aiAgent),
    };
}
function deserializeAiAsk(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAsk"' });
    }
    if (val.mode == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "mode" of type "AiAsk" to be defined',
        });
    }
    const mode = deserializeAiAskModeField(val.mode);
    if (val.prompt == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "prompt" of type "AiAsk" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiAsk"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "AiAsk" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "AiAsk"',
        });
    }
    const items = (0, json_js_3.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return (0, aiItemAsk_generated_js_2.deserializeAiItemAsk)(itm);
        })
        : [];
    if (!(val.dialogue_history == void 0) && !(0, json_js_3.sdIsList)(val.dialogue_history)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "dialogue_history" of type "AiAsk"',
        });
    }
    const dialogueHistory = val.dialogue_history == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.dialogue_history)
            ? val.dialogue_history.map(function (itm) {
                return (0, aiDialogueHistory_generated_js_2.deserializeAiDialogueHistory)(itm);
            })
            : [];
    if (!(val.include_citations == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.include_citations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "include_citations" of type "AiAsk"',
        });
    }
    const includeCitations = val.include_citations == void 0 ? void 0 : val.include_citations;
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : (0, aiAgentAskOrAiAgentReference_generated_js_2.deserializeAiAgentAskOrAiAgentReference)(val.ai_agent);
    return {
        mode: mode,
        prompt: prompt,
        items: items,
        dialogueHistory: dialogueHistory,
        includeCitations: includeCitations,
        aiAgent: aiAgent,
    };
}
//# sourceMappingURL=aiAsk.generated.js.map