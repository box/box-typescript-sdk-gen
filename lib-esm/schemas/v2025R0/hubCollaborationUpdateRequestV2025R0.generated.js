import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubCollaborationUpdateRequestV2025R0(val) {
    return { ['role']: val.role };
}
export function deserializeHubCollaborationUpdateRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationUpdateRequestV2025R0"',
        });
    }
    if (!(val.role == void 0) && !sdIsString(val.role)) {
        throw new BoxSdkError({
            message: 'Expecting string for "role" of type "HubCollaborationUpdateRequestV2025R0"',
        });
    }
    const role = val.role == void 0 ? void 0 : val.role;
    return { role: role };
}
//# sourceMappingURL=hubCollaborationUpdateRequestV2025R0.generated.js.map