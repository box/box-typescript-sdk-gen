import { deserializeShieldInformationBarrierSegmentMemberBaseTypeField } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { serializeShieldInformationBarrierSegmentMemberMini } from './shieldInformationBarrierSegmentMemberMini.generated.js';
import { serializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField",
    });
}
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val.type),
    };
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeShieldInformationBarrierSegmentMember(val) {
    const base = serializeShieldInformationBarrierSegmentMemberMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMember"',
        });
    }
    return {
        ...base,
        ...{
            ['shield_information_barrier']: val.shieldInformationBarrier == void 0
                ? val.shieldInformationBarrier
                : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
            ['shield_information_barrier_segment']: val.shieldInformationBarrierSegment == void 0
                ? val.shieldInformationBarrierSegment
                : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment),
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserBase(val.createdBy),
            ['updated_at']: val.updatedAt == void 0
                ? val.updatedAt
                : serializeDateTime(val.updatedAt),
            ['updated_by']: val.updatedBy == void 0
                ? val.updatedBy
                : serializeUserBase(val.updatedBy),
        },
    };
}
export function deserializeShieldInformationBarrierSegmentMember(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMember"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const shieldInformationBarrierSegment = val.shield_information_barrier_segment == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierSegmentMember"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.updated_at == void 0) && !sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierSegmentMember"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : deserializeDateTime(val.updated_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    const user = val.user == void 0 ? void 0 : deserializeUserBase(val.user);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMember"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        updatedBy: updatedBy,
        user: user,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMember.generated.js.map