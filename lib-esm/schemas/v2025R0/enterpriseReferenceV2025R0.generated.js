import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeEnterpriseReferenceV2025R0TypeField(val) {
    return val;
}
export function deserializeEnterpriseReferenceV2025R0TypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize EnterpriseReferenceV2025R0TypeField",
    });
}
export function serializeEnterpriseReferenceV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeEnterpriseReferenceV2025R0TypeField(val.type),
    };
}
export function deserializeEnterpriseReferenceV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "EnterpriseReferenceV2025R0"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "EnterpriseReferenceV2025R0"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeEnterpriseReferenceV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=enterpriseReferenceV2025R0.generated.js.map