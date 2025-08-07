import { deserializeFolderBaseTypeField } from './folderBase.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeItems } from './items.generated.js';
import { deserializeItems } from './items.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderMini } from './folderMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class Folder extends FolderMini {
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
export function serializeFolderPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return serializeFolderMini(item);
        }),
    };
}
export function deserializeFolderPathCollectionField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "total_count" of type "FolderPathCollectionField" to be defined',
        });
    }
    if (!sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "FolderPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "FolderPathCollectionField" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "FolderPathCollectionField"',
        });
    }
    const entries = sdIsList(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeFolderMini(itm);
        })
        : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
export function serializeFolderSharedLinkAccessField(val) {
    return val;
}
export function deserializeFolderSharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderSharedLinkAccessField",
    });
}
export function serializeFolderSharedLinkEffectiveAccessField(val) {
    return val;
}
export function deserializeFolderSharedLinkEffectiveAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderSharedLinkEffectiveAccessField",
    });
}
export function serializeFolderSharedLinkEffectivePermissionField(val) {
    return val;
}
export function deserializeFolderSharedLinkEffectivePermissionField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderSharedLinkEffectivePermissionField",
    });
}
export function serializeFolderSharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeFolderSharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderSharedLinkPermissionsField"',
        });
    }
    if (val.can_download == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_download" of type "FolderSharedLinkPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "FolderSharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_preview == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_preview" of type "FolderSharedLinkPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "FolderSharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview;
    if (val.can_edit == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_edit" of type "FolderSharedLinkPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
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
export function serializeFolderSharedLinkField(val) {
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
            : serializeDateTime(val.unsharedAt),
        ['is_password_enabled']: val.isPasswordEnabled,
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeFolderSharedLinkPermissionsField(val.permissions),
        ['download_count']: val.downloadCount,
        ['preview_count']: val.previewCount,
    };
}
export function deserializeFolderSharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderSharedLinkField"',
        });
    }
    if (val.url == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "url" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "FolderSharedLinkField"',
        });
    }
    const url = val.url;
    if (!(val.download_url == void 0) && !sdIsString(val.download_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "download_url" of type "FolderSharedLinkField"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.vanity_url == void 0) && !sdIsString(val.vanity_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_url" of type "FolderSharedLinkField"',
        });
    }
    const vanityUrl = val.vanity_url == void 0 ? void 0 : val.vanity_url;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "FolderSharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const access = val.access == void 0
        ? void 0
        : deserializeFolderSharedLinkAccessField(val.access);
    if (val.effective_access == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "effective_access" of type "FolderSharedLinkField" to be defined',
        });
    }
    const effectiveAccess = deserializeFolderSharedLinkEffectiveAccessField(val.effective_access);
    if (val.effective_permission == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "effective_permission" of type "FolderSharedLinkField" to be defined',
        });
    }
    const effectivePermission = deserializeFolderSharedLinkEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "FolderSharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    if (val.is_password_enabled == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "is_password_enabled" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!sdIsBoolean(val.is_password_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_password_enabled" of type "FolderSharedLinkField"',
        });
    }
    const isPasswordEnabled = val.is_password_enabled;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeFolderSharedLinkPermissionsField(val.permissions);
    if (val.download_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "download_count" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!sdIsNumber(val.download_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "download_count" of type "FolderSharedLinkField"',
        });
    }
    const downloadCount = val.download_count;
    if (val.preview_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "preview_count" of type "FolderSharedLinkField" to be defined',
        });
    }
    if (!sdIsNumber(val.preview_count)) {
        throw new BoxSdkError({
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
export function serializeFolderFolderUploadEmailAccessField(val) {
    return val;
}
export function deserializeFolderFolderUploadEmailAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderFolderUploadEmailAccessField",
    });
}
export function serializeFolderFolderUploadEmailField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeFolderFolderUploadEmailAccessField(val.access),
        ['email']: val.email,
    };
}
export function deserializeFolderFolderUploadEmailField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderFolderUploadEmailField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeFolderFolderUploadEmailAccessField(val.access);
    if (!(val.email == void 0) && !sdIsString(val.email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email" of type "FolderFolderUploadEmailField"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    return {
        access: access,
        email: email,
    };
}
export function serializeFolderItemStatusField(val) {
    return val;
}
export function deserializeFolderItemStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'trashed') {
        return val;
    }
    if (val == 'deleted') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize FolderItemStatusField" });
}
export function serializeFolder(val) {
    const base = serializeFolderMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Folder"' });
    }
    return {
        ...base,
        ...{
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
            ['description']: val.description,
            ['size']: val.size,
            ['path_collection']: val.pathCollection == void 0
                ? val.pathCollection
                : serializeFolderPathCollectionField(val.pathCollection),
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserMini(val.createdBy),
            ['modified_by']: val.modifiedBy == void 0
                ? val.modifiedBy
                : serializeUserMini(val.modifiedBy),
            ['trashed_at']: val.trashedAt == void 0
                ? val.trashedAt
                : serializeDateTime(val.trashedAt),
            ['purged_at']: val.purgedAt == void 0 ? val.purgedAt : serializeDateTime(val.purgedAt),
            ['content_created_at']: val.contentCreatedAt == void 0
                ? val.contentCreatedAt
                : serializeDateTime(val.contentCreatedAt),
            ['content_modified_at']: val.contentModifiedAt == void 0
                ? val.contentModifiedAt
                : serializeDateTime(val.contentModifiedAt),
            ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : serializeUserMini(val.ownedBy),
            ['shared_link']: val.sharedLink == void 0
                ? val.sharedLink
                : serializeFolderSharedLinkField(val.sharedLink),
            ['folder_upload_email']: val.folderUploadEmail == void 0
                ? val.folderUploadEmail
                : serializeFolderFolderUploadEmailField(val.folderUploadEmail),
            ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
            ['item_status']: val.itemStatus == void 0
                ? val.itemStatus
                : serializeFolderItemStatusField(val.itemStatus),
            ['item_collection']: val.itemCollection == void 0
                ? val.itemCollection
                : serializeItems(val.itemCollection),
        },
    };
}
export function deserializeFolder(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Folder"' });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Folder"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Folder"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "Folder"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "Folder"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeFolderPathCollectionField(val.path_collection);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "Folder"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "Folder"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "Folder"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "Folder"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    const ownedBy = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail = val.folder_upload_email == void 0
        ? void 0
        : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeFolderItemStatusField(val.item_status);
    const itemCollection = val.item_collection == void 0
        ? void 0
        : deserializeItems(val.item_collection);
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "Folder"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "Folder"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "Folder" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Folder"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "Folder"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "Folder" to be defined',
        });
    }
    const type = deserializeFolderBaseTypeField(val.type);
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