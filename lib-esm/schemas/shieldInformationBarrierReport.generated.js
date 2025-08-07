import { deserializeShieldInformationBarrierReportBaseTypeField } from './shieldInformationBarrierReportBase.generated.js';
import { serializeShieldInformationBarrierReportBase } from './shieldInformationBarrierReportBase.generated.js';
import { serializeShieldInformationBarrierReference } from './shieldInformationBarrierReference.generated.js';
import { deserializeShieldInformationBarrierReference } from './shieldInformationBarrierReference.generated.js';
import { serializeShieldInformationBarrierReportDetails } from './shieldInformationBarrierReportDetails.generated.js';
import { deserializeShieldInformationBarrierReportDetails } from './shieldInformationBarrierReportDetails.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierReportStatusField(val) {
    return val;
}
export function deserializeShieldInformationBarrierReportStatusField(val) {
    if (val == 'pending') {
        return val;
    }
    if (val == 'error') {
        return val;
    }
    if (val == 'done') {
        return val;
    }
    if (val == 'cancelled') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierReportStatusField",
    });
}
export function serializeShieldInformationBarrierReport(val) {
    const base = serializeShieldInformationBarrierReportBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReport"',
        });
    }
    return {
        ...base,
        ...{
            ['shield_information_barrier']: val.shieldInformationBarrier == void 0
                ? val.shieldInformationBarrier
                : serializeShieldInformationBarrierReference(val.shieldInformationBarrier),
            ['status']: val.status == void 0
                ? val.status
                : serializeShieldInformationBarrierReportStatusField(val.status),
            ['details']: val.details == void 0
                ? val.details
                : serializeShieldInformationBarrierReportDetails(val.details),
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserBase(val.createdBy),
            ['updated_at']: val.updatedAt == void 0
                ? val.updatedAt
                : serializeDateTime(val.updatedAt),
        },
    };
}
export function deserializeShieldInformationBarrierReport(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReport"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : deserializeShieldInformationBarrierReference(val.shield_information_barrier);
    const status = val.status == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportStatusField(val.status);
    const details = val.details == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportDetails(val.details);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierReport"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.updated_at == void 0) && !sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierReport"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : deserializeDateTime(val.updated_at);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierReport"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return {
        shieldInformationBarrier: shieldInformationBarrier,
        status: status,
        details: details,
        createdAt: createdAt,
        createdBy: createdBy,
        updatedAt: updatedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierReport.generated.js.map