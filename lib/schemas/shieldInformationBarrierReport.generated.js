"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierReportStatusField = serializeShieldInformationBarrierReportStatusField;
exports.deserializeShieldInformationBarrierReportStatusField = deserializeShieldInformationBarrierReportStatusField;
exports.serializeShieldInformationBarrierReport = serializeShieldInformationBarrierReport;
exports.deserializeShieldInformationBarrierReport = deserializeShieldInformationBarrierReport;
const shieldInformationBarrierReportBase_generated_js_1 = require("./shieldInformationBarrierReportBase.generated.js");
const shieldInformationBarrierReportBase_generated_js_2 = require("./shieldInformationBarrierReportBase.generated.js");
const shieldInformationBarrierReference_generated_js_1 = require("./shieldInformationBarrierReference.generated.js");
const shieldInformationBarrierReference_generated_js_2 = require("./shieldInformationBarrierReference.generated.js");
const shieldInformationBarrierReportDetails_generated_js_1 = require("./shieldInformationBarrierReportDetails.generated.js");
const shieldInformationBarrierReportDetails_generated_js_2 = require("./shieldInformationBarrierReportDetails.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierReportStatusField(val) {
    return val;
}
function deserializeShieldInformationBarrierReportStatusField(val) {
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
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize ShieldInformationBarrierReportStatusField",
    });
}
function serializeShieldInformationBarrierReport(val) {
    const base = (0, shieldInformationBarrierReportBase_generated_js_2.serializeShieldInformationBarrierReportBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReport"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['shield_information_barrier']: val.shieldInformationBarrier == void 0
            ? val.shieldInformationBarrier
            : (0, shieldInformationBarrierReference_generated_js_1.serializeShieldInformationBarrierReference)(val.shieldInformationBarrier),
        ['status']: val.status == void 0
            ? val.status
            : serializeShieldInformationBarrierReportStatusField(val.status),
        ['details']: val.details == void 0
            ? val.details
            : (0, shieldInformationBarrierReportDetails_generated_js_1.serializeShieldInformationBarrierReportDetails)(val.details),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.createdBy),
        ['updated_at']: val.updatedAt == void 0
            ? val.updatedAt
            : (0, utils_js_1.serializeDateTime)(val.updatedAt),
    });
}
function deserializeShieldInformationBarrierReport(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierReport"',
        });
    }
    const shieldInformationBarrier = val.shield_information_barrier == void 0
        ? void 0
        : (0, shieldInformationBarrierReference_generated_js_2.deserializeShieldInformationBarrierReference)(val.shield_information_barrier);
    const status = val.status == void 0
        ? void 0
        : deserializeShieldInformationBarrierReportStatusField(val.status);
    const details = val.details == void 0
        ? void 0
        : (0, shieldInformationBarrierReportDetails_generated_js_2.deserializeShieldInformationBarrierReportDetails)(val.details);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldInformationBarrierReport"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    if (!(val.updated_at == void 0) && !(0, json_js_1.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldInformationBarrierReport"',
        });
    }
    const updatedAt = val.updated_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.updated_at);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierReport"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : (0, shieldInformationBarrierReportBase_generated_js_1.deserializeShieldInformationBarrierReportBaseTypeField)(val.type);
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