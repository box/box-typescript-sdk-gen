import { serializeGroupMini } from './groupMini.generated.js';
import { deserializeGroupMini } from './groupMini.generated.js';
import { serializeUserCollaborations } from './userCollaborations.generated.js';
import { deserializeUserCollaborations } from './userCollaborations.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeGroupMiniOrUserCollaborations(val) {
    if (val.type == 'group') {
        return serializeGroupMini(val);
    }
    if (val.type == 'user') {
        return serializeUserCollaborations(val);
    }
    throw new BoxSdkError({ message: 'unknown type' });
}
export function deserializeGroupMiniOrUserCollaborations(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "GroupMiniOrUserCollaborations"',
        });
    }
    if (val.type == 'group') {
        return deserializeGroupMini(val);
    }
    if (val.type == 'user') {
        return deserializeUserCollaborations(val);
    }
    throw new BoxSdkError({
        message: "Can't deserialize GroupMiniOrUserCollaborations",
    });
}
//# sourceMappingURL=groupMiniOrUserCollaborations.generated.js.map