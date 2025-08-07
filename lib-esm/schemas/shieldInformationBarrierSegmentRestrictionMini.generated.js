import { deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { serializeShieldInformationBarrierSegmentRestrictionBase } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField",
    });
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val.type),
    };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField",
    });
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val.type),
    };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeShieldInformationBarrierSegmentRestrictionMini(val) {
    const base = serializeShieldInformationBarrierSegmentRestrictionBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMini"',
        });
    }
    return {
        ...base,
        ...{
            ['shield_information_barrier_segment']: serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
            ['restricted_segment']: serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restrictedSegment),
        },
    };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMini"',
        });
    }
    if (val.shield_information_barrier_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "ShieldInformationBarrierSegmentRestrictionMini" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "restricted_segment" of type "ShieldInformationBarrierSegmentRestrictionMini" to be defined',
        });
    }
    const restrictedSegment = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestrictionMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        restrictedSegment: restrictedSegment,
        type: type,
        id: id,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictionMini.generated.js.map