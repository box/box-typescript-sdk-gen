"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileVersion = void 0;
exports.serializeFileVersion = serializeFileVersion;
exports.deserializeFileVersion = deserializeFileVersion;
const fileVersionBase_generated_js_1 = require("./fileVersionBase.generated.js");
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fileVersionMini_generated_js_2 = require("./fileVersionMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class FileVersion extends fileVersionMini_generated_js_2.FileVersionMini {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.size !== undefined) {
            this.size = fields.size;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.modifiedBy !== undefined) {
            this.modifiedBy = fields.modifiedBy;
        }
        if (fields.trashedAt !== undefined) {
            this.trashedAt = fields.trashedAt;
        }
        if (fields.trashedBy !== undefined) {
            this.trashedBy = fields.trashedBy;
        }
        if (fields.restoredAt !== undefined) {
            this.restoredAt = fields.restoredAt;
        }
        if (fields.restoredBy !== undefined) {
            this.restoredBy = fields.restoredBy;
        }
        if (fields.purgedAt !== undefined) {
            this.purgedAt = fields.purgedAt;
        }
        if (fields.uploaderDisplayName !== undefined) {
            this.uploaderDisplayName = fields.uploaderDisplayName;
        }
    }
}
exports.FileVersion = FileVersion;
function serializeFileVersion(val) {
    const base = (0, fileVersionMini_generated_js_1.serializeFileVersionMini)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersion"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['name']: val.name,
        ['size']: val.size,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
        ['trashed_at']: val.trashedAt == void 0
            ? val.trashedAt
            : (0, utils_js_1.serializeDateTime)(val.trashedAt),
        ['trashed_by']: val.trashedBy == void 0
            ? val.trashedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.trashedBy),
        ['restored_at']: val.restoredAt == void 0
            ? val.restoredAt
            : (0, utils_js_1.serializeDateTime)(val.restoredAt),
        ['restored_by']: val.restoredBy == void 0
            ? val.restoredBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.restoredBy),
        ['purged_at']: val.purgedAt == void 0 ? val.purgedAt : (0, utils_js_1.serializeDateTime)(val.purgedAt),
        ['uploader_display_name']: val.uploaderDisplayName,
    });
}
function deserializeFileVersion(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileVersion"' });
    }
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "FileVersion"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.size == void 0) && !(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "FileVersion"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileVersion"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "FileVersion"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    if (!(val.trashed_at == void 0) && !(0, json_js_2.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "FileVersion"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    const trashedBy = val.trashed_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.trashed_by);
    if (!(val.restored_at == void 0) && !(0, json_js_2.sdIsString)(val.restored_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "restored_at" of type "FileVersion"',
        });
    }
    const restoredAt = val.restored_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.restored_at);
    const restoredBy = val.restored_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.restored_by);
    if (!(val.purged_at == void 0) && !(0, json_js_2.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "FileVersion"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    if (!(val.uploader_display_name == void 0) &&
        !(0, json_js_2.sdIsString)(val.uploader_display_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "uploader_display_name" of type "FileVersion"',
        });
    }
    const uploaderDisplayName = val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
    if (!(val.sha1 == void 0) && !(0, json_js_2.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileVersion"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileVersion" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersion"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileVersion" to be defined',
        });
    }
    const type = (0, fileVersionBase_generated_js_1.deserializeFileVersionBaseTypeField)(val.type);
    return {
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
//# sourceMappingURL=fileVersion.generated.js.map