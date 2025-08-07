import { deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField } from './shieldInformationBarrierSegmentRestrictionMini.generated.js';
import { deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField } from './shieldInformationBarrierSegmentRestrictionMini.generated.js';
import { serializeShieldInformationBarrierSegmentRestrictionMini } from './shieldInformationBarrierSegmentRestrictionMini.generated.js';
import { serializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentRestriction(val) {
    const base = serializeShieldInformationBarrierSegmentRestrictionMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    return {
        ...base,
        ...{
            ['shield_information_barrier']: val.shieldInformationBarrier == void 0
                ? val.shieldInformationBarrier
                : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
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
export function deserializeShieldInformationBarrierSegmentRestriction(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.updated_at == void 0) && !sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : deserializeDateTime(val.updated_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    if (val.shield_information_barrier_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "shield_information_barrier_segment" of type "ShieldInformationBarrierSegmentRestriction" to be defined',
        });
    }
    const shieldInformationBarrierSegment = deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    if (val.restricted_segment == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "restricted_segment" of type "ShieldInformationBarrierSegmentRestriction" to be defined',
        });
    }
    const restrictedSegment = deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentRestriction"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        updatedBy: updatedBy,
        shieldInformationBarrierSegment: shieldInformationBarrierSegment,
        restrictedSegment: restrictedSegment,
        type: type,
        id: id,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestriction.generated.js.map