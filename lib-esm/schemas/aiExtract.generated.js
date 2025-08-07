import { serializeAiItemBase } from './aiItemBase.generated.js';
import { deserializeAiItemBase } from './aiItemBase.generated.js';
import { serializeAiAgentExtractOrAiAgentReference } from './aiAgentExtractOrAiAgentReference.generated.js';
import { deserializeAiAgentExtractOrAiAgentReference } from './aiAgentExtractOrAiAgentReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiExtract(val) {
    return {
        ['prompt']: val.prompt,
        ['items']: val.items.map(function (item) {
            return serializeAiItemBase(item);
        }),
        ['ai_agent']: val.aiAgent == void 0
            ? val.aiAgent
            : serializeAiAgentExtractOrAiAgentReference(val.aiAgent),
    };
}
export function deserializeAiExtract(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiExtract"' });
    }
    if (val.prompt == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "prompt" of type "AiExtract" to be defined',
        });
    }
    if (!sdIsString(val.prompt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiExtract"',
        });
    }
    const prompt = val.prompt;
    if (val.items == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "items" of type "AiExtract" to be defined',
        });
    }
    if (!sdIsList(val.items)) {
        throw new BoxSdkError({
            message: 'Expecting array for "items" of type "AiExtract"',
        });
    }
    const items = sdIsList(val.items)
        ? val.items.map(function (itm) {
            return deserializeAiItemBase(itm);
        })
        : [];
    const aiAgent = val.ai_agent == void 0
        ? void 0
        : deserializeAiAgentExtractOrAiAgentReference(val.ai_agent);
    return { prompt: prompt, items: items, aiAgent: aiAgent };
}
//# sourceMappingURL=aiExtract.generated.js.map