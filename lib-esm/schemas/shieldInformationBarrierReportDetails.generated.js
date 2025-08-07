import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierReportDetailsDetailsField(val) {
    return { ['folder_id']: val.folderId };
}
export function deserializeShieldInformationBarrierReportDetailsDetailsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReportDetailsDetailsField"',
        });
    }
    if (!(val.folder_id == void 0) && !sdIsString(val.folder_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "folder_id" of type "ShieldInformationBarrierReportDetailsDetailsField"',
        });
    }
    const folderId = val.folder_id == void 0 ? void 0 : val.folder_id;
    return {
        folderId: folderId,
    };
}
export function serializeShieldInformationBarrierReportDetails(val) {
    return {
        ['details']: val.details == void 0
            ? val.details
            : serializeShieldInformationBarrierReportDetailsDetailsField(val.details),
    };
}
export function deserializeShieldInformationBarrierReportDetails(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReportDetails"',
        });
    }
    const details = val.details == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportDetailsDetailsField(val.details);
    return { details: details };
}
//# sourceMappingURL=shieldInformationBarrierReportDetails.generated.js.map