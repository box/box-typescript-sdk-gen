import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeShieldInformationBarrierReportBaseTypeField(val) {
    return val;
}
export function deserializeShieldInformationBarrierReportBaseTypeField(val) {
    if (val == 'shield_information_barrier_report') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierReportBaseTypeField",
    });
}
export function serializeShieldInformationBarrierReportBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeShieldInformationBarrierReportBaseTypeField(val.type),
    };
}
export function deserializeShieldInformationBarrierReportBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReportBase"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierReportBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=shieldInformationBarrierReportBase.generated.js.map