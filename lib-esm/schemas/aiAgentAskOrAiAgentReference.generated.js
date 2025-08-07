import { serializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { deserializeAiAgentAsk } from './aiAgentAsk.generated.js';
import { serializeAiAgentReference } from './aiAgentReference.generated.js';
import { deserializeAiAgentReference } from './aiAgentReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentAskOrAiAgentReference(val) {
    if (val.type == 'ai_agent_ask') {
        return serializeAiAgentAsk(val);
    }
    if (val.type == 'ai_agent_id') {
        return serializeAiAgentReference(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentAskOrAiAgentReference(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentAskOrAiAgentReference"',
        });
    }
    if (val.type == 'ai_agent_ask') {
        return deserializeAiAgentAsk(val);
    }
    if (val.type == 'ai_agent_id') {
        return deserializeAiAgentReference(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize AiAgentAskOrAiAgentReference",
    });
}
//# sourceMappingURL=aiAgentAskOrAiAgentReference.generated.js.map