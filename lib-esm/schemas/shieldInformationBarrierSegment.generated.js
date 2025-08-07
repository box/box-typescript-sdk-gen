import { serializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { deserializeShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierSegmentTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierSegmentTypeField(val) {
    if (val == 'shield_information_barrier_segment') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierSegmentTypeField",
    });
}
export function serializeShieldInformationBarrierSegment(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierSegmentTypeField(val.type),
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
        ['name']: val.name,
        ['description']: val.description,
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
    };
}
export function deserializeShieldInformationBarrierSegment(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegment"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegment"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierSegmentTypeField(val.type);
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldInformationBarrierSegment"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "ShieldInformationBarrierSegment"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierSegment"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.updated_at == void 0) && !sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierSegment"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : deserializeDateTime(val.updated_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
    return {
        id: id,
        type: type,
        shieldInformationBarrier: shieldInformationBarrier,
        name: name,
        description: description,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        updatedBy: updatedBy,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegment.generated.js.map