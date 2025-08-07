"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
exports.serializeFolderPathCollectionField = serializeFolderPathCollectionField;
exports.deserializeFolderPathCollectionField = deserializeFolderPathCollectionField;
exports.serializeFolderSharedLinkAccessField = serializeFolderSharedLinkAccessField;
exports.deserializeFolderSharedLinkAccessField = deserializeFolderSharedLinkAccessField;
exports.serializeFolderSharedLinkEffectiveAccessField = serializeFolderSharedLinkEffectiveAccessField;
exports.deserializeFolderSharedLinkEffectiveAccessField = deserializeFolderSharedLinkEffectiveAccessField;
exports.serializeFolderSharedLinkEffectivePermissionField = serializeFolderSharedLinkEffectivePermissionField;
exports.deserializeFolderSharedLinkEffectivePermissionField = deserializeFolderSharedLinkEffectivePermissionField;
exports.serializeFolderSharedLinkPermissionsField = serializeFolderSharedLinkPermissionsField;
exports.deserializeFolderSharedLinkPermissionsField = deserializeFolderSharedLinkPermissionsField;
exports.serializeFolderSharedLinkField = serializeFolderSharedLinkField;
exports.deserializeFolderSharedLinkField = deserializeFolderSharedLinkField;
exports.serializeFolderFolderUploadEmailAccessField = serializeFolderFolderUploadEmailAccessField;
exports.deserializeFolderFolderUploadEmailAccessField = deserializeFolderFolderUploadEmailAccessField;
exports.serializeFolderFolderUploadEmailField = serializeFolderFolderUploadEmailField;
exports.deserializeFolderFolderUploadEmailField = deserializeFolderFolderUploadEmailField;
exports.serializeFolderItemStatusField = serializeFolderItemStatusField;
exports.deserializeFolderItemStatusField = deserializeFolderItemStatusField;
exports.serializeFolder = serializeFolder;
exports.deserializeFolder = deserializeFolder;
const folderBase_generated_js_1 = require("./folderBase.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const items_generated_js_1 = require("./items.generated.js");
const items_generated_js_2 = require("./items.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const folderMini_generated_js_3 = require("./folderMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class Folder extends folderMini_generated_js_3.FolderMini {
    constructor(fields) {
        super(fields);
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.size !== undefined) {
            this.size = fields.size;
        }
        if (fields.pathCollection !== undefined) {
            this.pathCollection = fields.pathCollection;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.modifiedBy !== undefined) {
            this.modifiedBy = fields.modifiedBy;
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
        if (fields.ownedBy !== undefined) {
            this.ownedBy = fields.ownedBy;
        }
        if (fields.sharedLink !== undefined) {
            this.sharedLink = fields.sharedLink;
        }
        if (fields.folderUploadEmail !== undefined) {
            this.folderUploadEmail = fields.folderUploadEmail;
        }
        if (fields.parent !== undefined) {
            this.parent = fields.parent;
        }
        if (fields.itemStatus !== undefined) {
            this.itemStatus = fields.itemStatus;
        }
        if (fields.itemCollection !== undefined) {
            this.itemCollection = fields.itemCollection;
        }
    }
}
exports.Folder = Folder;
function serializeFolderPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return (0, folderMini_generated_js_1.serializeFolderMini)(item);
        }),
    };
}
function deserializeFolderPathCollectionField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "total_count" of type "FolderPathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "FolderPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "FolderPathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "FolderPathCollectionField"',
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
function serializeFolderSharedLinkAccessField(val) {
    return val;
}
function deserializeFolderSharedLinkAccessField(val) {
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
        message: "Can't deserialize FolderSharedLinkAccessField",
    });
}
function serializeFolderSharedLinkEffectiveAccessField(val) {
    return val;
}
function deserializeFolderSharedLinkEffectiveAccessField(val) {
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
        message: "Can't deserialize FolderSharedLinkEffectiveAccessField",
    });
}
function serializeFolderSharedLinkEffectivePermissionField(val) {
    return val;
}
function deserializeFolderSharedLinkEffectivePermissionField(val) {
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
        message: "Can't deserialize FolderSharedLinkEffectivePermissionField",
    });
}
function serializeFolderSharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeFolderSharedLinkPermissionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderSharedLinkPermissionsField"',
        });
    }
    if (val.can_download == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_download" of type "FolderSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "FolderSharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_preview == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_preview" of type "FolderSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "FolderSharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview;
    if (val.can_edit == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_edit" of type "FolderSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "FolderSharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeFolderSharedLinkField(val) {
    return {
        ['url']: val.url,
        ['download_url']: val.downloadUrl,
        ['vanity_url']: val.vanityUrl,
        ['vanity_name']: val.vanityName,
        ['access']: val.access == void 0
            ? val.access
            : serializeFolderSharedLinkAccessField(val.access),
        ['effective_access']: serializeFolderSharedLinkEffectiveAccessField(val.effectiveAccess),
        ['effective_permission']: serializeFolderSharedLinkEffectivePermissionField(val.effectivePermission),
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['is_password_enabled']: val.isPasswordEnabled,
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeFolderSharedLinkPermissionsField(val.permissions),
        ['download_count']: val.downloadCount,
        ['preview_count']: val.previewCount,
    };
}
function deserializeFolderSharedLinkField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderSharedLinkField"',
        });
    }
    if (val.url == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "url" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "FolderSharedLinkField"',
        });
    }
    const url = val.url;
    if (!(val.download_url == void 0) && !(0, json_js_3.sdIsString)(val.download_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "download_url" of type "FolderSharedLinkField"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.vanity_url == void 0) && !(0, json_js_3.sdIsString)(val.vanity_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_url" of type "FolderSharedLinkField"',
        });
    }
    const vanityUrl = val.vanity_url == void 0 ? void 0 : val.vanity_url;
    if (!(val.vanity_name == void 0) && !(0, json_js_3.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "FolderSharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const access = val.access == void 0
        ? void 0
        : deserializeFolderSharedLinkAccessField(val.access);
    if (val.effective_access == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "effective_access" of type "FolderSharedLinkField" to be defined',
        });
    }
    const effectiveAccess = deserializeFolderSharedLinkEffectiveAccessField(val.effective_access);
    if (val.effective_permission == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "effective_permission" of type "FolderSharedLinkField" to be defined',
        });
    }
    const effectivePermission = deserializeFolderSharedLinkEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at == void 0) && !(0, json_js_3.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "FolderSharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    if (val.is_password_enabled == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "is_password_enabled" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.is_password_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_password_enabled" of type "FolderSharedLinkField"',
        });
    }
    const isPasswordEnabled = val.is_password_enabled;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeFolderSharedLinkPermissionsField(val.permissions);
    if (val.download_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "download_count" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.download_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "download_count" of type "FolderSharedLinkField"',
        });
    }
    const downloadCount = val.download_count;
    if (val.preview_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "preview_count" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.preview_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "preview_count" of type "FolderSharedLinkField"',
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
function serializeFolderFolderUploadEmailAccessField(val) {
    return val;
}
function deserializeFolderFolderUploadEmailAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FolderFolderUploadEmailAccessField",
    });
}
function serializeFolderFolderUploadEmailField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeFolderFolderUploadEmailAccessField(val.access),
        ['email']: val.email,
    };
}
function deserializeFolderFolderUploadEmailField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderFolderUploadEmailField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeFolderFolderUploadEmailAccessField(val.access);
    if (!(val.email == void 0) && !(0, json_js_3.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "FolderFolderUploadEmailField"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    return {
        access: access,
        email: email,
    };
}
function serializeFolderItemStatusField(val) {
    return val;
}
function deserializeFolderItemStatusField(val) {
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
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FolderItemStatusField" });
}
function serializeFolder(val) {
    const base = (0, folderMini_generated_js_1.serializeFolderMini)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Folder"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['description']: val.description,
        ['size']: val.size,
        ['path_collection']: val.pathCollection == void 0
            ? val.pathCollection
            : serializeFolderPathCollectionField(val.pathCollection),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
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
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeFolderSharedLinkField(val.sharedLink),
        ['folder_upload_email']: val.folderUploadEmail == void 0
            ? val.folderUploadEmail
            : serializeFolderFolderUploadEmailField(val.folderUploadEmail),
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['item_status']: val.itemStatus == void 0
            ? val.itemStatus
            : serializeFolderItemStatusField(val.itemStatus),
        ['item_collection']: val.itemCollection == void 0
            ? val.itemCollection
            : (0, items_generated_js_1.serializeItems)(val.itemCollection),
    });
}
function deserializeFolder(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Folder"' });
    }
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "Folder"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Folder"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.description == void 0) && !(0, json_js_3.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "Folder"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !(0, json_js_2.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "Folder"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeFolderPathCollectionField(val.path_collection);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    if (!(val.trashed_at == void 0) && !(0, json_js_3.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "Folder"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    if (!(val.purged_at == void 0) && !(0, json_js_3.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "Folder"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_3.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "Folder"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_3.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "Folder"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail = val.folder_upload_email == void 0
        ? void 0
        : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeFolderItemStatusField(val.item_status);
    const itemCollection = val.item_collection == void 0
        ? void 0
        : (0, items_generated_js_2.deserializeItems)(val.item_collection);
    if (!(val.sequence_id == void 0) && !(0, json_js_3.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "Folder"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "Folder"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "Folder" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Folder"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_3.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "Folder"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "Folder" to be defined',
        });
    }
    const type = (0, folderBase_generated_js_1.deserializeFolderBaseTypeField)(val.type);
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        description: description,
        size: size,
        pathCollection: pathCollection,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        trashedAt: trashedAt,
        purgedAt: purgedAt,
        contentCreatedAt: contentCreatedAt,
        contentModifiedAt: contentModifiedAt,
        ownedBy: ownedBy,
        sharedLink: sharedLink,
        folderUploadEmail: folderUploadEmail,
        parent: parent,
        itemStatus: itemStatus,
        itemCollection: itemCollection,
        sequenceId: sequenceId,
        name: name,
        id: id,
        etag: etag,
        type: type,
    };
}
//# sourceMappingURL=folder.generated.js.map