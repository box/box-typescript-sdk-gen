import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val) {
    if (val == 'shield_information_barrier_segment_member') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentMemberBaseTypeField",
    });
}
export function serializeShieldInformationBarrierSegmentMemberBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type),
    };
}
export function deserializeShieldInformationBarrierSegmentMemberBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberBase"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMemberBase.generated.js.map