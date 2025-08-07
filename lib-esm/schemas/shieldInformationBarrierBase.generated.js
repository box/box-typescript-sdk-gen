import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierBaseTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierBaseTypeField(val) {
    if (val == 'shield_information_barrier') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierBaseTypeField",
    });
}
export function serializeShieldInformationBarrierBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierBaseTypeField(val.type),
    };
}
export function deserializeShieldInformationBarrierBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierBase"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=shieldInformationBarrierBase.generated.js.map