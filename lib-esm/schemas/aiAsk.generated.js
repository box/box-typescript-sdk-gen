import { serializeAiItemAsk } from './aiItemAsk.generated.js';
import { deserializeAiItemAsk } from './aiItemAsk.generated.js';
import { serializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { deserializeAiDialogueHistory } from './aiDialogueHistory.generated.js';
import { serializeAiAgentAskOrAiAgentReference } from './aiAgentAskOrAiAgentReference.generated.js';
import { deserializeAiAgentAskOrAiAgentReference } from './aiAgentAskOrAiAgentReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAskModeField(val) {
    return val;
}
export function deserializeAiAskModeField(val) {
    if (val == 'multiple_item_qa') {
        return val;
    }
    if (val == 'single_item_qa') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize AiAskModeField" });
}
export function serializeAiAsk(val) {
    return {
        ['mode']: serializeAiAskModeField(val.mode),
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return serializeAiItemAsk(item);
        }),
        ['dialogue_history']: val.dialogueHistory == void 0
            ? val.dialogueHistory
            : val.dialogueHistory.map(function (item) {
                return serializeAiDialogueHistory(item);
            }),
        ['include_citations']: val.includeCitations,
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : serializeAiAgentAskOrAiAgentReference(val.aiAgent),
    };
}
export function deserializeAiAsk(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiAsk"' });
    }
    if (val.mode == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "mode" of type "AiAsk" to be defined',
        });
    }
    const mode = deserializeAiAskModeField(val.mode);
    if (val.prompt == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "prompt" of type "AiAsk" to be defined',
        });
    }
    if (!sdIsString(val.prompt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiAsk"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "items" of type "AiAsk" to be defined',
        });
    }
    if (!sdIsList(val.items)) {
        throw new BoxSdkError({
            message: 'Expecting array for "items" of type "AiAsk"',
        });
    }
    const items = sdIsList(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiItemAsk(itm);
        })
        : [];
    if (!(val.dialogue_history == void 0) && !sdIsList(val.dialogue_history)) {
        throw new BoxSdkError({
            message: 'Expecting array for "dialogue_history" of type "AiAsk"',
        });
    }
    const dialogueHistory = val.dialogue_history == void 0
        ? void 0
        : sdIsList(val.dialogue_history)
            ? val.dialogue_history.map(function (itm) {
                return deserializeAiDialogueHistory(itm);
            })
            : [];
    if (!(val.include_citations == void 0) &&
        !sdIsBoolean(val.include_citations)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "include_citations" of type "AiAsk"',
        });
    }
    const includeCitations = val.include_citations == void 0 ? void 0 : val.include_citations;
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : deserializeAiAgentAskOrAiAgentReference(val.ai_agent);
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