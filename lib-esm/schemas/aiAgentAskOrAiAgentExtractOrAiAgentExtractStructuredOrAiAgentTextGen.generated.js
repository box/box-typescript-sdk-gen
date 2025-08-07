import { serializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { deserializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { serializeAiAgentExtract } from './aiAgentExtract.generated.js';
import { deserializeAiAgentExtract } from './aiAgentExtract.generated.js';
import { serializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated.js';
import { deserializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated.js';
import { serializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { deserializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(val) {
    if (val.type == 'ai_agent_ask') {
        return serializeAiAgentAsk(val);
    }
    if (val.type == 'ai_agent_extract') {
        return serializeAiAgentExtract(val);
    }
    if (val.type == 'ai_agent_extract_structured') {
        return serializeAiAgentExtractStructured(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return serializeAiAgentTextGen(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen"',
        });
    }
    if (val.type == 'ai_agent_ask') {
        return deserializeAiAgentAsk(val);
    }
    if (val.type == 'ai_agent_extract') {
        return deserializeAiAgentExtract(val);
    }
    if (val.type == 'ai_agent_extract_structured') {
        return deserializeAiAgentExtractStructured(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return deserializeAiAgentTextGen(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen",
    });
}
//# sourceMappingURL=aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated.js.map