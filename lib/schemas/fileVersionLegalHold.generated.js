"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileVersionLegalHoldTypeField = serializeFileVersionLegalHoldTypeField;
exports.deserializeFileVersionLegalHoldTypeField = deserializeFileVersionLegalHoldTypeField;
exports.serializeFileVersionLegalHold = serializeFileVersionLegalHold;
exports.deserializeFileVersionLegalHold = deserializeFileVersionLegalHold;
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const fileVersionMini_generated_js_2 = require("./fileVersionMini.generated.js");
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const legalHoldPolicyAssignment_generated_js_1 = require("./legalHoldPolicyAssignment.generated.js");
const legalHoldPolicyAssignment_generated_js_2 = require("./legalHoldPolicyAssignment.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeFileVersionLegalHoldTypeField(val) {
    return val;
}
function deserializeFileVersionLegalHoldTypeField(val) {
    if (val == 'file_version_legal_hold') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileVersionLegalHoldTypeField",
    });
}
function serializeFileVersionLegalHold(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionLegalHoldTypeField(val.type),
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : (0, fileVersionMini_generated_js_1.serializeFileVersionMini)(val.fileVersion),
        ['file']: val.file == void 0 ? val.file : (0, fileMini_generated_js_1.serializeFileMini)(val.file),
        ['legal_hold_policy_assignments']: val.legalHoldPolicyAssignments == void 0
            ? val.legalHoldPolicyAssignments
            : val.legalHoldPolicyAssignments.map(function (item) {
                return (0, legalHoldPolicyAssignment_generated_js_1.serializeLegalHoldPolicyAssignment)(item);
            }),
        ['deleted_at']: val.deletedAt == void 0
            ? val.deletedAt
            : (0, utils_js_1.serializeDateTime)(val.deletedAt),
    };
}
function deserializeFileVersionLegalHold(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileVersionLegalHold"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionLegalHold"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeFileVersionLegalHoldTypeField(val.type);
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_2.deserializeFileVersionMini)(val.file_version);
    const file = val.file == void 0 ? void 0 : (0, fileMini_generated_js_2.deserializeFileMini)(val.file);
    if (!(val.legal_hold_policy_assignments == void 0) &&
        !(0, json_js_2.sdIsList)(val.legal_hold_policy_assignments)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "legal_hold_policy_assignments" of type "FileVersionLegalHold"',
        });
    }
    const legalHoldPolicyAssignments = val.legal_hold_policy_assignments == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.legal_hold_policy_assignments)
            ? val.legal_hold_policy_assignments.map(function (itm) {
                return (0, legalHoldPolicyAssignment_generated_js_2.deserializeLegalHoldPolicyAssignment)(itm);
            })
            : [];
    if (!(val.deleted_at == void 0) && !(0, json_js_1.sdIsString)(val.deleted_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "deleted_at" of type "FileVersionLegalHold"',
        });
    }
    const deletedAt = val.deleted_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.deleted_at);
    return {
        id: id,
        type: type,
        fileVersion: fileVersion,
        file: file,
        legalHoldPolicyAssignments: legalHoldPolicyAssignments,
        deletedAt: deletedAt,
    };
}
//# sourceMappingURL=fileVersionLegalHold.generated.js.map