import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTrackingCodeTypeField(val) {
    return val;
}
export function deserializeTrackingCodeTypeField(val) {
    if (val == 'tracking_code') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize TrackingCodeTypeField" });
}
export function serializeTrackingCode(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeTrackingCodeTypeField(val.type),
        ['name']: val.name,
        ['value']: val.value,
    };
}
export function deserializeTrackingCode(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "TrackingCode"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeTrackingCodeTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrackingCode"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.value == void 0) && !sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "TrackingCode"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return { type: type, name: name, value: value };
}
//# sourceMappingURL=trackingCode.generated.js.map