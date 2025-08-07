import { serializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated.js';
import { deserializeAiAgentExtractStructured } from './aiAgentExtractStructured.generated.js';
import { serializeAiAgentReference } from './aiAgentReference.generated.js';
import { deserializeAiAgentReference } from './aiAgentReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentExtractStructuredOrAiAgentReference(val) {
    if (val.type == 'ai_agent_extract_structured') {
        return serializeAiAgentExtractStructured(val);
    }
    if (val.type == 'ai_agent_id') {
        return serializeAiAgentReference(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentExtractStructuredOrAiAgentReference(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractStructuredOrAiAgentReference"',
        });
    }
    if (val.type == 'ai_agent_extract_structured') {
        return deserializeAiAgentExtractStructured(val);
    }
    if (val.type == 'ai_agent_id') {
        return deserializeAiAgentReference(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentExtractStructuredOrAiAgentReference",
    });
}
//# sourceMappingURL=aiAgentExtractStructuredOrAiAgentReference.generated.js.map