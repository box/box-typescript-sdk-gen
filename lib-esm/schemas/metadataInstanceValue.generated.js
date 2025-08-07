import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
export function serializeMetadataInstanceValue(val) {
    return val;
}
export function deserializeMetadataInstanceValue(val) {
    if (sdIsString(val)) {
        return val;
    }
    if (sdIsNumber(val)) {
        return val;
    }
    if (sdIsList(val) && val.every(sdIsString)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize MetadataInstanceValue" });
}
//# sourceMappingURL=metadataInstanceValue.generated.js.map