"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierReportDetailsDetailsField = serializeShieldInformationBarrierReportDetailsDetailsField;
exports.deserializeShieldInformationBarrierReportDetailsDetailsField = deserializeShieldInformationBarrierReportDetailsDetailsField;
exports.serializeShieldInformationBarrierReportDetails = serializeShieldInformationBarrierReportDetails;
exports.deserializeShieldInformationBarrierReportDetails = deserializeShieldInformationBarrierReportDetails;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierReportDetailsDetailsField(val) {
    return { ['folder_id']: val.folderId };
}
function deserializeShieldInformationBarrierReportDetailsDetailsField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReportDetailsDetailsField"',
        });
    }
    if (!(val.folder_id == void 0) && !(0, json_js_1.sdIsString)(val.folder_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "folder_id" of type "ShieldInformationBarrierReportDetailsDetailsField"',
        });
    }
    const folderId = val.folder_id == void 0 ? void 0 : val.folder_id;
    return {
        folderId: folderId,
    };
}
function serializeShieldInformationBarrierReportDetails(val) {
    return {
        ['details']: val.details == void 0
            ? val.details
            : serializeShieldInformationBarrierReportDetailsDetailsField(val.details),
    };
}
function deserializeShieldInformationBarrierReportDetails(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReportDetails"',
        });
    }
    const details = val.details == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportDetailsDetailsField(val.details);
    return { details: details };
}
//# sourceMappingURL=shieldInformationBarrierReportDetails.generated.js.map