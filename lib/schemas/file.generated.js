"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
exports.serializeFilePathCollectionField = serializeFilePathCollectionField;
exports.deserializeFilePathCollectionField = deserializeFilePathCollectionField;
exports.serializeFileSharedLinkAccessField = serializeFileSharedLinkAccessField;
exports.deserializeFileSharedLinkAccessField = deserializeFileSharedLinkAccessField;
exports.serializeFileSharedLinkEffectiveAccessField = serializeFileSharedLinkEffectiveAccessField;
exports.deserializeFileSharedLinkEffectiveAccessField = deserializeFileSharedLinkEffectiveAccessField;
exports.serializeFileSharedLinkEffectivePermissionField = serializeFileSharedLinkEffectivePermissionField;
exports.deserializeFileSharedLinkEffectivePermissionField = deserializeFileSharedLinkEffectivePermissionField;
exports.serializeFileSharedLinkPermissionsField = serializeFileSharedLinkPermissionsField;
exports.deserializeFileSharedLinkPermissionsField = deserializeFileSharedLinkPermissionsField;
exports.serializeFileSharedLinkField = serializeFileSharedLinkField;
exports.deserializeFileSharedLinkField = deserializeFileSharedLinkField;
exports.serializeFileItemStatusField = serializeFileItemStatusField;
exports.deserializeFileItemStatusField = deserializeFileItemStatusField;
exports.serializeFile = serializeFile;
exports.deserializeFile = deserializeFile;
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class File extends fileMini_generated_js_2.FileMini {
    constructor(fields) {
        super(fields);
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.size !== undefined) {
            this.size = fields.size;
        }
        if (fields.pathCollection !== undefined) {
            this.pathCollection = fields.pathCollection;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.trashedAt !== undefined) {
            this.trashedAt = fields.trashedAt;
        }
        if (fields.purgedAt !== undefined) {
            this.purgedAt = fields.purgedAt;
        }
        if (fields.contentCreatedAt !== undefined) {
            this.contentCreatedAt = fields.contentCreatedAt;
        }
        if (fields.contentModifiedAt !== undefined) {
            this.contentModifiedAt = fields.contentModifiedAt;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.modifiedBy !== undefined) {
            this.modifiedBy = fields.modifiedBy;
        }
        if (fields.ownedBy !== undefined) {
            this.ownedBy = fields.ownedBy;
        }
        if (fields.sharedLink !== undefined) {
            this.sharedLink = fields.sharedLink;
        }
        if (fields.parent !== undefined) {
            this.parent = fields.parent;
        }
        if (fields.itemStatus !== undefined) {
            this.itemStatus = fields.itemStatus;
        }
    }
}
exports.File = File;
function serializeFilePathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return (0, folderMini_generated_js_1.serializeFolderMini)(item);
        }),
    };
}
function deserializeFilePathCollectionField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FilePathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "total_count" of type "FilePathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "FilePathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "FilePathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "FilePathCollectionField"',
        });
    }
    const entries = (0, json_js_4.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return (0, folderMini_generated_js_2.deserializeFolderMini)(itm);
        })
        : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
function serializeFileSharedLinkAccessField(val) {
    return val;
}
function deserializeFileSharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileSharedLinkAccessField",
    });
}
function serializeFileSharedLinkEffectiveAccessField(val) {
    return val;
}
function deserializeFileSharedLinkEffectiveAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileSharedLinkEffectiveAccessField",
    });
}
function serializeFileSharedLinkEffectivePermissionField(val) {
    return val;
}
function deserializeFileSharedLinkEffectivePermissionField(val) {
    if (val == 'can_edit') {
        return val;
    }
    if (val == 'can_download') {
        return val;
    }
    if (val == 'can_preview') {
        return val;
    }
    if (val == 'no_access') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileSharedLinkEffectivePermissionField",
    });
}
function serializeFileSharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeFileSharedLinkPermissionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileSharedLinkPermissionsField"',
        });
    }
    if (val.can_download == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_download" of type "FileSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "FileSharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_preview == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_preview" of type "FileSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "FileSharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview;
    if (val.can_edit == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_edit" of type "FileSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "FileSharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeFileSharedLinkField(val) {
    return {
        ['url']: val.url,
        ['download_url']: val.downloadUrl,
        ['vanity_url']: val.vanityUrl,
        ['vanity_name']: val.vanityName,
        ['access']: val.access == void 0
            ? val.access
            : serializeFileSharedLinkAccessField(val.access),
        ['effective_access']: serializeFileSharedLinkEffectiveAccessField(val.effectiveAccess),
        ['effective_permission']: serializeFileSharedLinkEffectivePermissionField(val.effectivePermission),
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['is_password_enabled']: val.isPasswordEnabled,
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeFileSharedLinkPermissionsField(val.permissions),
        ['download_count']: val.downloadCount,
        ['preview_count']: val.previewCount,
    };
}
function deserializeFileSharedLinkField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileSharedLinkField"',
        });
    }
    if (val.url == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "url" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "FileSharedLinkField"',
        });
    }
    const url = val.url;
    if (!(val.download_url == void 0) && !(0, json_js_3.sdIsString)(val.download_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "download_url" of type "FileSharedLinkField"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.vanity_url == void 0) && !(0, json_js_3.sdIsString)(val.vanity_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_url" of type "FileSharedLinkField"',
        });
    }
    const vanityUrl = val.vanity_url == void 0 ? void 0 : val.vanity_url;
    if (!(val.vanity_name == void 0) && !(0, json_js_3.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "FileSharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const access = val.access == void 0
        ? void 0
        : deserializeFileSharedLinkAccessField(val.access);
    if (val.effective_access == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "effective_access" of type "FileSharedLinkField" to be defined',
        });
    }
    const effectiveAccess = deserializeFileSharedLinkEffectiveAccessField(val.effective_access);
    if (val.effective_permission == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "effective_permission" of type "FileSharedLinkField" to be defined',
        });
    }
    const effectivePermission = deserializeFileSharedLinkEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at == void 0) && !(0, json_js_3.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "FileSharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    if (val.is_password_enabled == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "is_password_enabled" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.is_password_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_password_enabled" of type "FileSharedLinkField"',
        });
    }
    const isPasswordEnabled = val.is_password_enabled;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeFileSharedLinkPermissionsField(val.permissions);
    if (val.download_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "download_count" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.download_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "download_count" of type "FileSharedLinkField"',
        });
    }
    const downloadCount = val.download_count;
    if (val.preview_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "preview_count" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.preview_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "preview_count" of type "FileSharedLinkField"',
        });
    }
    const previewCount = val.preview_count;
    return {
        url: url,
        downloadUrl: downloadUrl,
        vanityUrl: vanityUrl,
        vanityName: vanityName,
        access: access,
        effectiveAccess: effectiveAccess,
        effectivePermission: effectivePermission,
        unsharedAt: unsharedAt,
        isPasswordEnabled: isPasswordEnabled,
        permissions: permissions,
        downloadCount: downloadCount,
        previewCount: previewCount,
    };
}
function serializeFileItemStatusField(val) {
    return val;
}
function deserializeFileItemStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'trashed') {
        return val;
    }
    if (val == 'deleted') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileItemStatusField" });
}
function serializeFile(val) {
    const base = (0, fileMini_generated_js_1.serializeFileMini)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "File"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['description']: val.description,
        ['size']: val.size,
        ['path_collection']: val.pathCollection == void 0
            ? val.pathCollection
            : serializeFilePathCollectionField(val.pathCollection),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['trashed_at']: val.trashedAt == void 0
            ? val.trashedAt
            : (0, utils_js_1.serializeDateTime)(val.trashedAt),
        ['purged_at']: val.purgedAt == void 0 ? val.purgedAt : (0, utils_js_1.serializeDateTime)(val.purgedAt),
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : (0, utils_js_1.serializeDateTime)(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : (0, utils_js_1.serializeDateTime)(val.contentModifiedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeFileSharedLinkField(val.sharedLink),
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['item_status']: val.itemStatus == void 0
            ? val.itemStatus
            : serializeFileItemStatusField(val.itemStatus),
    });
}
function deserializeFile(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "File"' });
    }
    if (!(val.description == void 0) && !(0, json_js_3.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "File"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !(0, json_js_2.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "File"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeFilePathCollectionField(val.path_collection);
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "File"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "File"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.trashed_at == void 0) && !(0, json_js_3.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "File"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    if (!(val.purged_at == void 0) && !(0, json_js_3.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "File"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_3.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "File"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_3.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "File"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeFileSharedLinkField(val.shared_link);
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeFileItemStatusField(val.item_status);
    if (!(val.sequence_id == void 0) && !(0, json_js_3.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "File"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "File"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.sha1 == void 0) && !(0, json_js_3.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "File"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_1.deserializeFileVersionMini)(val.file_version);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "File" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "File"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_3.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "File"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "File" to be defined',
        });
    }
    const type = (0, fileBase_generated_js_1.deserializeFileBaseTypeField)(val.type);
    return {
        description: description,
        size: size,
        pathCollection: pathCollection,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        trashedAt: trashedAt,
        purgedAt: purgedAt,
        contentCreatedAt: contentCreatedAt,
        contentModifiedAt: contentModifiedAt,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        ownedBy: ownedBy,
        sharedLink: sharedLink,
        parent: parent,
        itemStatus: itemStatus,
        sequenceId: sequenceId,
        name: name,
        sha1: sha1,
        fileVersion: fileVersion,
        id: id,
        etag: etag,
        type: type,
    };
}
//# sourceMappingURL=file.generated.js.map