"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileVersionFull = void 0;
exports.serializeFileVersionFull = serializeFileVersionFull;
exports.deserializeFileVersionFull = deserializeFileVersionFull;
const fileVersionBase_generated_js_1 = require("./fileVersionBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const fileVersion_generated_js_1 = require("./fileVersion.generated.js");
const fileVersion_generated_js_2 = require("./fileVersion.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class FileVersionFull extends fileVersion_generated_js_2.FileVersion {
    constructor(fields) {
        super(fields);
        if (fields.versionNumber !== undefined) {
            this.versionNumber = fields.versionNumber;
        }
    }
}
exports.FileVersionFull = FileVersionFull;
function serializeFileVersionFull(val) {
    const base = (0, fileVersion_generated_js_1.serializeFileVersion)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
    }
    return Object.assign(Object.assign({}, base), { ['version_number']: val.versionNumber });
}
function deserializeFileVersionFull(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersionFull"' });
    }
    if (!(val.version_number == void 0) && !(0, json_js_2.sdIsString)(val.version_number)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "version_number" of type "FileVersionFull"',
        });
    }
    const versionNumber = val.version_number == void 0 ? void 0 : val.version_number;
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FileVersionFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.size == void 0) && !(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "FileVersionFull"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileVersionFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "FileVersionFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.modified_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_1.deserializeUserMini)(val.modified_by);
    if (!(val.trashed_at == void 0) && !(0, json_js_2.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "FileVersionFull"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.trashed_at);
    const trashedBy = val.trashed_by == void 0 ? void 0 : (0, userMini_generated_js_1.deserializeUserMini)(val.trashed_by);
    if (!(val.restored_at == void 0) && !(0, json_js_2.sdIsString)(val.restored_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "restored_at" of type "FileVersionFull"',
        });
    }
    const restoredAt = val.restored_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.restored_at);
    const restoredBy = val.restored_by == void 0 ? void 0 : (0, userMini_generated_js_1.deserializeUserMini)(val.restored_by);
    if (!(val.purged_at == void 0) && !(0, json_js_2.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "FileVersionFull"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.purged_at);
    if (!(val.uploader_display_name == void 0) &&
        !(0, json_js_2.sdIsString)(val.uploader_display_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "uploader_display_name" of type "FileVersionFull"',
        });
    }
    const uploaderDisplayName = val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
    if (!(val.sha1 == void 0) && !(0, json_js_2.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileVersionFull"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersionFull" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionFull"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileVersionFull" to be defined',
        });
    }
    const type = (0, fileVersionBase_generated_js_1.deserializeFileVersionBaseTypeField)(val.type);
    return {
        versionNumber: versionNumber,
        name: name,
        size: size,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        modifiedBy: modifiedBy,
        trashedAt: trashedAt,
        trashedBy: trashedBy,
        restoredAt: restoredAt,
        restoredBy: restoredBy,
        purgedAt: purgedAt,
        uploaderDisplayName: uploaderDisplayName,
        sha1: sha1,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=fileVersionFull.generated.js.map