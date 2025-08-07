import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeGroupBase } from './groupBase.generated.js';
import { deserializeGroupBase } from './groupBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiAgentAllowedEntity(val) {
    if (val.type == 'user') {
        return serializeUserBase(val);
    }
    if (val.type == 'group') {
        return serializeGroupBase(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeAiAgentAllowedEntity(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiAgentAllowedEntity"',
        });
    }
    if (val.type == 'user') {
        return deserializeUserBase(val);
    }
    if (val.type == 'group') {
        return deserializeGroupBase(val);
    }
    throw new BoxSdkError({ message: "Can't deserialize AiAgentAllowedEntity" });
}
//# sourceMappingURL=aiAgentAllowedEntity.generated.js.map