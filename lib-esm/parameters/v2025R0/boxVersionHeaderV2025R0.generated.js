import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
export function serializeBoxVersionHeaderV2025R0(val) {
    return val;
}
export function deserializeBoxVersionHeaderV2025R0(val) {
    if (val == '2025.0') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize BoxVersionHeaderV2025R0",
    });
}
//# sourceMappingURL=boxVersionHeaderV2025R0.generated.js.map