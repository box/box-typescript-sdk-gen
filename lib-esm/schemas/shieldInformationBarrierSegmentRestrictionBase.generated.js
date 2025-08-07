import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val) {
    if (val == 'shield_information_barrier_segment_restriction') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentRestrictionBaseTypeField",
    });
}
export function serializeShieldInformationBarrierSegmentRestrictionBase(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeShieldInformationBarrierSegmentRestrictionBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionBase"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictionBase.generated.js.map