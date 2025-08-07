"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiTextGenItemsField = void 0;
exports.serializeAiTextGenItemsTypeField = serializeAiTextGenItemsTypeField;
exports.deserializeAiTextGenItemsTypeField = deserializeAiTextGenItemsTypeField;
exports.serializeAiTextGenItemsField = serializeAiTextGenItemsField;
exports.deserializeAiTextGenItemsField = deserializeAiTextGenItemsField;
exports.serializeAiTextGenItemsFieldInput = serializeAiTextGenItemsFieldInput;
exports.deserializeAiTextGenItemsFieldInput = deserializeAiTextGenItemsFieldInput;
exports.serializeAiTextGen = serializeAiTextGen;
exports.deserializeAiTextGen = deserializeAiTextGen;
const aiDialogueHistory_generated_js_1 = require("./aiDialogueHistory.generated.js");
const aiDialogueHistory_generated_js_2 = require("./aiDialogueHistory.generated.js");
const aiAgentReferenceOrAiAgentTextGen_generated_js_1 = require("./aiAgentReferenceOrAiAgentTextGen.generated.js");
const aiAgentReferenceOrAiAgentTextGen_generated_js_2 = require("./aiAgentReferenceOrAiAgentTextGen.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class AiTextGenItemsField {
    constructor(fields) {
        /**
         * The type of the item. */
        this.type = 'file';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.content !== undefined) {
            this.content = fields.content;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiTextGenItemsField = AiTextGenItemsField;
function serializeAiTextGenItemsTypeField(val) {
    return val;
}
function deserializeAiTextGenItemsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiTextGenItemsTypeField",
    });
}
function serializeAiTextGenItemsField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiTextGenItemsTypeField(val.type),
        ['content']: val.content,
    };
}
function deserializeAiTextGenItemsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiTextGenItemsField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiTextGenItemsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiTextGenItemsField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiTextGenItemsField" to be defined',
        });
    }
    const type = deserializeAiTextGenItemsTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiTextGenItemsField"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
function serializeAiTextGenItemsFieldInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAiTextGenItemsTypeField(val.type),
        ['content']: val.content,
    };
}
function deserializeAiTextGenItemsFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiTextGenItemsFieldInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiTextGenItemsFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiTextGenItemsFieldInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiTextGenItemsTypeField(val.type);
    if (!(val.content == void 0) && !(0, json_js_1.sdIsString)(val.content)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content" of type "AiTextGenItemsFieldInput"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return {
        id: id,
        type: type,
        content: content,
    };
}
function serializeAiTextGen(val) {
    return {
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return serializeAiTextGenItemsField(item);
        }),
        ['dialogue_history']: val.dialogueHistory == void 0
            ? val.dialogueHistory
            : val.dialogueHistory.map(function (item) {
                return (0, aiDialogueHistory_generated_js_1.serializeAiDialogueHistory)(item);
            }),
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : (0, aiAgentReferenceOrAiAgentTextGen_generated_js_1.serializeAiAgentReferenceOrAiAgentTextGen)(val.aiAgent),
    };
}
function deserializeAiTextGen(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiTextGen"' });
    }
    if (val.prompt == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "prompt" of type "AiTextGen" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiTextGen"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "items" of type "AiTextGen" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.items)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "items" of type "AiTextGen"',
        });
    }
    const items = (0, json_js_2.sdIsList)(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiTextGenItemsField(itm);
        })
        : [];
    if (!(val.dialogue_history == void 0) && !(0, json_js_2.sdIsList)(val.dialogue_history)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "dialogue_history" of type "AiTextGen"',
        });
    }
    const dialogueHistory = val.dialogue_history == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.dialogue_history)
            ? val.dialogue_history.map(function (itm) {
                return (0, aiDialogueHistory_generated_js_2.deserializeAiDialogueHistory)(itm);
            })
            : [];
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : (0, aiAgentReferenceOrAiAgentTextGen_generated_js_2.deserializeAiAgentReferenceOrAiAgentTextGen)(val.ai_agent);
    return {
        prompt: prompt,
        items: items,
        dialogueHistory: dialogueHistory,
        aiAgent: aiAgent,
    };
}
//# sourceMappingURL=aiTextGen.generated.js.map