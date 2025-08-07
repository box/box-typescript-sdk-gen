import { serializeAiAgentReference } from './aiAgentReference.generated.js';
import { deserializeAiAgentReference } from './aiAgentReference.generated.js';
import { serializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { deserializeAiAgentTextGen } from './aiAgentTextGen.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentReferenceOrAiAgentTextGen(val) {
    if (val.type == 'ai_agent_id') {
        return serializeAiAgentReference(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return serializeAiAgentTextGen(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentReferenceOrAiAgentTextGen(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentReferenceOrAiAgentTextGen"',
        });
    }
    if (val.type == 'ai_agent_id') {
        return deserializeAiAgentReference(val);
    }
    if (val.type == 'ai_agent_text_gen') {
        return deserializeAiAgentTextGen(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentReferenceOrAiAgentTextGen",
    });
}
//# sourceMappingURL=aiAgentReferenceOrAiAgentTextGen.generated.js.map