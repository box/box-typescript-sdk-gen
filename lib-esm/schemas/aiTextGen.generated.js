import { serializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { deserializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { serializeAiAgentReferenceOrAiAgentTextGen } from './aiAgentReferenceOrAiAgentTextGen.generated.js';
import { deserializeAiAgentReferenceOrAiAgentTextGen } from './aiAgentReferenceOrAiAgentTextGen.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AiTextGenItemsField {
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
export function serializeAiTextGenItemsTypeField(val) {
    return val;
}
export function deserializeAiTextGenItemsTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiTextGenItemsTypeField",
    });
}
export function serializeAiTextGenItemsField(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAiTextGenItemsTypeField(val.type),
        ['content']: val.content,
    };
}
export function deserializeAiTextGenItemsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiTextGenItemsField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiTextGenItemsField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiTextGenItemsField"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AiTextGenItemsField" to be defined',
        });
    }
    const type = deserializeAiTextGenItemsTypeField(val.type);
    if (!(val.content == void 0) && !sdIsString(val.content)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content" of type "AiTextGenItemsField"',
        });
    }
    const content = val.content == void 0 ? void 0 : val.content;
    return { id: id, type: type, content: content };
}
export function serializeAiTextGenItemsFieldInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAiTextGenItemsTypeField(val.type),
        ['content']: val.content,
    };
}
export function deserializeAiTextGenItemsFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiTextGenItemsFieldInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AiTextGenItemsFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AiTextGenItemsFieldInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAiTextGenItemsTypeField(val.type);
    if (!(val.content == void 0) && !sdIsString(val.content)) {
        throw new BoxSdkError({
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
export function serializeAiTextGen(val) {
    return {
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return serializeAiTextGenItemsField(item);
        }),
        ['dialogue_history']: val.dialogueHistory == void 0
            ? val.dialogueHistory
            : val.dialogueHistory.map(function (item) {
                return serializeAiDialogueHistory(item);
            }),
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : serializeAiAgentReferenceOrAiAgentTextGen(val.aiAgent),
    };
}
export function deserializeAiTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiTextGen"' });
    }
    if (val.prompt == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "prompt" of type "AiTextGen" to be defined',
        });
    }
    if (!sdIsString(val.prompt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiTextGen"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "items" of type "AiTextGen" to be defined',
        });
    }
    if (!sdIsList(val.items)) {
        throw new BoxSdkError({
            message: 'Expecting array for "items" of type "AiTextGen"',
        });
    }
    const items = sdIsList(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiTextGenItemsField(itm);
        })
        : [];
    if (!(val.dialogue_history == void 0) && !sdIsList(val.dialogue_history)) {
        throw new BoxSdkError({
            message: 'Expecting array for "dialogue_history" of type "AiTextGen"',
        });
    }
    const dialogueHistory = val.dialogue_history == void 0
        ? void 0
        : sdIsList(val.dialogue_history)
            ? val.dialogue_history.map(function (itm) {
                return deserializeAiDialogueHistory(itm);
            })
            : [];
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : deserializeAiAgentReferenceOrAiAgentTextGen(val.ai_agent);
    return {
        prompt: prompt,
        items: items,
        dialogueHistory: dialogueHistory,
        aiAgent: aiAgent,
    };
}
//# sourceMappingURL=aiTextGen.generated.js.map