import { serializeAiAgentExtract } from './aiAgentExtract.generated.js';
import { deserializeAiAgentExtract } from './aiAgentExtract.generated.js';
import { serializeAiAgentReference } from './aiAgentReference.generated.js';
import { deserializeAiAgentReference } from './aiAgentReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentExtractOrAiAgentReference(val) {
    if (val.type == 'ai_agent_extract') {
        return serializeAiAgentExtract(val);
    }
    if (val.type == 'ai_agent_id') {
        return serializeAiAgentReference(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentExtractOrAiAgentReference(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentExtractOrAiAgentReference"',
        });
    }
    if (val.type == 'ai_agent_extract') {
        return deserializeAiAgentExtract(val);
    }
    if (val.type == 'ai_agent_id') {
        return deserializeAiAgentReference(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentExtractOrAiAgentReference",
    });
}
//# sourceMappingURL=aiAgentExtractOrAiAgentReference.generated.js.map