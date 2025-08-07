"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileVersionRetentionTypeField = serializeFileVersionRetentionTypeField;
exports.deserializeFileVersionRetentionTypeField = deserializeFileVersionRetentionTypeField;
exports.serializeFileVersionRetention = serializeFileVersionRetention;
exports.deserializeFileVersionRetention = deserializeFileVersionRetention;
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const fileVersionMini_generated_js_2 = require("./fileVersionMini.generated.js");
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const retentionPolicyMini_generated_js_1 = require("./retentionPolicyMini.generated.js");
const retentionPolicyMini_generated_js_2 = require("./retentionPolicyMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeFileVersionRetentionTypeField(val) {
    return val;
}
function deserializeFileVersionRetentionTypeField(val) {
    if (val == 'file_version_retention') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileVersionRetentionTypeField",
    });
}
function serializeFileVersionRetention(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeFileVersionRetentionTypeField(val.type),
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : (0, fileVersionMini_generated_js_1.serializeFileVersionMini)(val.fileVersion),
        ['file']: val.file == void 0 ? val.file : (0, fileMini_generated_js_1.serializeFileMini)(val.file),
        ['applied_at']: val.appliedAt == void 0
            ? val.appliedAt
            : (0, utils_js_1.serializeDateTime)(val.appliedAt),
        ['disposition_at']: val.dispositionAt == void 0
            ? val.dispositionAt
            : (0, utils_js_1.serializeDateTime)(val.dispositionAt),
        ['winning_retention_policy']: val.winningRetentionPolicy == void 0
            ? val.winningRetentionPolicy
            : (0, retentionPolicyMini_generated_js_1.serializeRetentionPolicyMini)(val.winningRetentionPolicy),
    };
}
function deserializeFileVersionRetention(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileVersionRetention"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionRetention"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeFileVersionRetentionTypeField(val.type);
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_2.deserializeFileVersionMini)(val.file_version);
    const file = val.file == void 0 ? void 0 : (0, fileMini_generated_js_2.deserializeFileMini)(val.file);
    if (!(val.applied_at == void 0) && !(0, json_js_1.sdIsString)(val.applied_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "applied_at" of type "FileVersionRetention"',
        });
    }
    const appliedAt = val.applied_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.applied_at);
    if (!(val.disposition_at == void 0) && !(0, json_js_1.sdIsString)(val.disposition_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "disposition_at" of type "FileVersionRetention"',
        });
    }
    const dispositionAt = val.disposition_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.disposition_at);
    const winningRetentionPolicy = val.winning_retention_policy == void 0
        ? void 0
        : (0, retentionPolicyMini_generated_js_2.deserializeRetentionPolicyMini)(val.winning_retention_policy);
    return {
        id: id,
        type: type,
        fileVersion: fileVersion,
        file: file,
        appliedAt: appliedAt,
        dispositionAt: dispositionAt,
        winningRetentionPolicy: winningRetentionPolicy,
    };
}
//# sourceMappingURL=fileVersionRetention.generated.js.map