import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeDevicePinnerTypeField(val) {
    return val;
}
export function deserializeDevicePinnerTypeField(val) {
    if (val == 'device_pinner') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize DevicePinnerTypeField" });
}
export function serializeDevicePinner(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeDevicePinnerTypeField(val.type),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : serializeUserMini(val.ownedBy),
        ['product_name']: val.productName,
    };
}
export function deserializeDevicePinner(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "DevicePinner"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "DevicePinner"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeDevicePinnerTypeField(val.type);
    const ownedBy = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    if (!(val.product_name == void 0) && !sdIsString(val.product_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "product_name" of type "DevicePinner"',
        });
    }
    const productName = val.product_name == void 0 ? void 0 : val.product_name;
    return {
        id: id,
        type: type,
        ownedBy: ownedBy,
        productName: productName,
    };
}
//# sourceMappingURL=devicePinner.generated.js.map