"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLink = void 0;
exports.serializeWebLinkPathCollectionField = serializeWebLinkPathCollectionField;
exports.deserializeWebLinkPathCollectionField = deserializeWebLinkPathCollectionField;
exports.serializeWebLinkSharedLinkAccessField = serializeWebLinkSharedLinkAccessField;
exports.deserializeWebLinkSharedLinkAccessField = deserializeWebLinkSharedLinkAccessField;
exports.serializeWebLinkSharedLinkEffectiveAccessField = serializeWebLinkSharedLinkEffectiveAccessField;
exports.deserializeWebLinkSharedLinkEffectiveAccessField = deserializeWebLinkSharedLinkEffectiveAccessField;
exports.serializeWebLinkSharedLinkEffectivePermissionField = serializeWebLinkSharedLinkEffectivePermissionField;
exports.deserializeWebLinkSharedLinkEffectivePermissionField = deserializeWebLinkSharedLinkEffectivePermissionField;
exports.serializeWebLinkSharedLinkPermissionsField = serializeWebLinkSharedLinkPermissionsField;
exports.deserializeWebLinkSharedLinkPermissionsField = deserializeWebLinkSharedLinkPermissionsField;
exports.serializeWebLinkSharedLinkField = serializeWebLinkSharedLinkField;
exports.deserializeWebLinkSharedLinkField = deserializeWebLinkSharedLinkField;
exports.serializeWebLinkItemStatusField = serializeWebLinkItemStatusField;
exports.deserializeWebLinkItemStatusField = deserializeWebLinkItemStatusField;
exports.serializeWebLink = serializeWebLink;
exports.deserializeWebLink = deserializeWebLink;
const webLinkBase_generated_js_1 = require("./webLinkBase.generated.js");
const webLinkMini_generated_js_1 = require("./webLinkMini.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const webLinkMini_generated_js_2 = require("./webLinkMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
class WebLink extends webLinkMini_generated_js_2.WebLinkMini {
    constructor(fields) {
        super(fields);
        if (fields.parent !== undefined) {
            this.parent = fields.parent;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
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
        if (fields.itemStatus !== undefined) {
            this.itemStatus = fields.itemStatus;
        }
    }
}
exports.WebLink = WebLink;
function serializeWebLinkPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return (0, folderMini_generated_js_1.serializeFolderMini)(item);
        }),
    };
}
function deserializeWebLinkPathCollectionField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WebLinkPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "total_count" of type "WebLinkPathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "WebLinkPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "WebLinkPathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "WebLinkPathCollectionField"',
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
function serializeWebLinkSharedLinkAccessField(val) {
    return val;
}
function deserializeWebLinkSharedLinkAccessField(val) {
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
        message: "Can't deserialize WebLinkSharedLinkAccessField",
    });
}
function serializeWebLinkSharedLinkEffectiveAccessField(val) {
    return val;
}
function deserializeWebLinkSharedLinkEffectiveAccessField(val) {
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
        message: "Can't deserialize WebLinkSharedLinkEffectiveAccessField",
    });
}
function serializeWebLinkSharedLinkEffectivePermissionField(val) {
    return val;
}
function deserializeWebLinkSharedLinkEffectivePermissionField(val) {
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
        message: "Can't deserialize WebLinkSharedLinkEffectivePermissionField",
    });
}
function serializeWebLinkSharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
function deserializeWebLinkSharedLinkPermissionsField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WebLinkSharedLinkPermissionsField"',
        });
    }
    if (val.can_download == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_download" of type "WebLinkSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "WebLinkSharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_preview == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_preview" of type "WebLinkSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_preview)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "WebLinkSharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview;
    if (val.can_edit == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "can_edit" of type "WebLinkSharedLinkPermissionsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.can_edit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "WebLinkSharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
function serializeWebLinkSharedLinkField(val) {
    return {
        ['url']: val.url,
        ['download_url']: val.downloadUrl,
        ['vanity_url']: val.vanityUrl,
        ['vanity_name']: val.vanityName,
        ['access']: val.access == void 0
            ? val.access
            : serializeWebLinkSharedLinkAccessField(val.access),
        ['effective_access']: serializeWebLinkSharedLinkEffectiveAccessField(val.effectiveAccess),
        ['effective_permission']: serializeWebLinkSharedLinkEffectivePermissionField(val.effectivePermission),
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : (0, utils_js_1.serializeDateTime)(val.unsharedAt),
        ['is_password_enabled']: val.isPasswordEnabled,
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeWebLinkSharedLinkPermissionsField(val.permissions),
        ['download_count']: val.downloadCount,
        ['preview_count']: val.previewCount,
    };
}
function deserializeWebLinkSharedLinkField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WebLinkSharedLinkField"',
        });
    }
    if (val.url == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "url" of type "WebLinkSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "WebLinkSharedLinkField"',
        });
    }
    const url = val.url;
    if (!(val.download_url == void 0) && !(0, json_js_3.sdIsString)(val.download_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "download_url" of type "WebLinkSharedLinkField"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.vanity_url == void 0) && !(0, json_js_3.sdIsString)(val.vanity_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_url" of type "WebLinkSharedLinkField"',
        });
    }
    const vanityUrl = val.vanity_url == void 0 ? void 0 : val.vanity_url;
    if (!(val.vanity_name == void 0) && !(0, json_js_3.sdIsString)(val.vanity_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "WebLinkSharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const access = val.access == void 0
        ? void 0
        : deserializeWebLinkSharedLinkAccessField(val.access);
    if (val.effective_access == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "effective_access" of type "WebLinkSharedLinkField" to be defined',
        });
    }
    const effectiveAccess = deserializeWebLinkSharedLinkEffectiveAccessField(val.effective_access);
    if (val.effective_permission == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "effective_permission" of type "WebLinkSharedLinkField" to be defined',
        });
    }
    const effectivePermission = deserializeWebLinkSharedLinkEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at == void 0) && !(0, json_js_3.sdIsString)(val.unshared_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "WebLinkSharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.unshared_at);
    if (val.is_password_enabled == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "is_password_enabled" of type "WebLinkSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.is_password_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_password_enabled" of type "WebLinkSharedLinkField"',
        });
    }
    const isPasswordEnabled = val.is_password_enabled;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeWebLinkSharedLinkPermissionsField(val.permissions);
    if (val.download_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "download_count" of type "WebLinkSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.download_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "download_count" of type "WebLinkSharedLinkField"',
        });
    }
    const downloadCount = val.download_count;
    if (val.preview_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "preview_count" of type "WebLinkSharedLinkField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsNumber)(val.preview_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "preview_count" of type "WebLinkSharedLinkField"',
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
function serializeWebLinkItemStatusField(val) {
    return val;
}
function deserializeWebLinkItemStatusField(val) {
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
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize WebLinkItemStatusField",
    });
}
function serializeWebLink(val) {
    const base = (0, webLinkMini_generated_js_1.serializeWebLinkMini)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WebLink"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['description']: val.description,
        ['path_collection']: val.pathCollection == void 0
            ? val.pathCollection
            : serializeWebLinkPathCollectionField(val.pathCollection),
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
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeWebLinkSharedLinkField(val.sharedLink),
        ['item_status']: val.itemStatus == void 0
            ? val.itemStatus
            : serializeWebLinkItemStatusField(val.itemStatus),
    });
}
function deserializeWebLink(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WebLink"' });
    }
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    if (!(val.description == void 0) && !(0, json_js_3.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "WebLink"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeWebLinkPathCollectionField(val.path_collection);
    if (!(val.created_at == void 0) && !(0, json_js_3.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "WebLink"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_3.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "WebLink"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.trashed_at == void 0) && !(0, json_js_3.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "WebLink"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    if (!(val.purged_at == void 0) && !(0, json_js_3.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "WebLink"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeWebLinkSharedLinkField(val.shared_link);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeWebLinkItemStatusField(val.item_status);
    if (!(val.url == void 0) && !(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "WebLink"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.sequence_id == void 0) && !(0, json_js_3.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "WebLink"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "WebLink"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "WebLink" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebLink"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "WebLink" to be defined',
        });
    }
    const type = (0, webLinkBase_generated_js_1.deserializeWebLinkBaseTypeField)(val.type);
    if (!(val.etag == void 0) && !(0, json_js_3.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLink"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return {
        parent: parent,
        description: description,
        pathCollection: pathCollection,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        trashedAt: trashedAt,
        purgedAt: purgedAt,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        ownedBy: ownedBy,
        sharedLink: sharedLink,
        itemStatus: itemStatus,
        url: url,
        sequenceId: sequenceId,
        name: name,
        id: id,
        type: type,
        etag: etag,
    };
}
//# sourceMappingURL=webLink.generated.js.map