import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
export function serializeHubActionV2025R0(val) {
    return val;
}
export function deserializeHubActionV2025R0(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize HubActionV2025R0" });
}
//# sourceMappingURL=hubActionV2025R0.generated.js.map