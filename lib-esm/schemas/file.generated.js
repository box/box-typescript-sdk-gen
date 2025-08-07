import { deserializeFileBaseTypeField } from './fileBase.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileMini } from './fileMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class File extends FileMini {
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
export function serializeFilePathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return serializeFolderMini(item);
        }),
    };
}
export function deserializeFilePathCollectionField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FilePathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "total_count" of type "FilePathCollectionField" to be defined',
        });
    }
    if (!sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "FilePathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "FilePathCollectionField" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "FilePathCollectionField"',
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
export function serializeFileSharedLinkAccessField(val) {
    return val;
}
export function deserializeFileSharedLinkAccessField(val) {
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
        message: "Can't deserialize FileSharedLinkAccessField",
    });
}
export function serializeFileSharedLinkEffectiveAccessField(val) {
    return val;
}
export function deserializeFileSharedLinkEffectiveAccessField(val) {
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
        message: "Can't deserialize FileSharedLinkEffectiveAccessField",
    });
}
export function serializeFileSharedLinkEffectivePermissionField(val) {
    return val;
}
export function deserializeFileSharedLinkEffectivePermissionField(val) {
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
        message: "Can't deserialize FileSharedLinkEffectivePermissionField",
    });
}
export function serializeFileSharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeFileSharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileSharedLinkPermissionsField"',
        });
    }
    if (val.can_download == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_download" of type "FileSharedLinkPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "FileSharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download;
    if (val.can_preview == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_preview" of type "FileSharedLinkPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "FileSharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview;
    if (val.can_edit == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "can_edit" of type "FileSharedLinkPermissionsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
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
export function serializeFileSharedLinkField(val) {
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
            : serializeDateTime(val.unsharedAt),
        ['is_password_enabled']: val.isPasswordEnabled,
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeFileSharedLinkPermissionsField(val.permissions),
        ['download_count']: val.downloadCount,
        ['preview_count']: val.previewCount,
    };
}
export function deserializeFileSharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileSharedLinkField"',
        });
    }
    if (val.url == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "url" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "FileSharedLinkField"',
        });
    }
    const url = val.url;
    if (!(val.download_url == void 0) && !sdIsString(val.download_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "download_url" of type "FileSharedLinkField"',
        });
    }
    const downloadUrl = val.download_url == void 0 ? void 0 : val.download_url;
    if (!(val.vanity_url == void 0) && !sdIsString(val.vanity_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_url" of type "FileSharedLinkField"',
        });
    }
    const vanityUrl = val.vanity_url == void 0 ? void 0 : val.vanity_url;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "FileSharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const access = val.access == void 0
        ? void 0
        : deserializeFileSharedLinkAccessField(val.access);
    if (val.effective_access == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "effective_access" of type "FileSharedLinkField" to be defined',
        });
    }
    const effectiveAccess = deserializeFileSharedLinkEffectiveAccessField(val.effective_access);
    if (val.effective_permission == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "effective_permission" of type "FileSharedLinkField" to be defined',
        });
    }
    const effectivePermission = deserializeFileSharedLinkEffectivePermissionField(val.effective_permission);
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "FileSharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    if (val.is_password_enabled == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "is_password_enabled" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!sdIsBoolean(val.is_password_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_password_enabled" of type "FileSharedLinkField"',
        });
    }
    const isPasswordEnabled = val.is_password_enabled;
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeFileSharedLinkPermissionsField(val.permissions);
    if (val.download_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "download_count" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!sdIsNumber(val.download_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "download_count" of type "FileSharedLinkField"',
        });
    }
    const downloadCount = val.download_count;
    if (val.preview_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "preview_count" of type "FileSharedLinkField" to be defined',
        });
    }
    if (!sdIsNumber(val.preview_count)) {
        throw new BoxSdkError({
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
export function serializeFileItemStatusField(val) {
    return val;
}
export function deserializeFileItemStatusField(val) {
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
    throw new BoxSdkError({ message: "Can't deserialize FileItemStatusField" });
}
export function serializeFile(val) {
    const base = serializeFileMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "File"' });
    }
    return {
        ...base,
        ...{
            ['description']: val.description,
            ['size']: val.size,
            ['path_collection']: val.pathCollection == void 0
                ? val.pathCollection
                : serializeFilePathCollectionField(val.pathCollection),
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
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
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserMini(val.createdBy),
            ['modified_by']: val.modifiedBy == void 0
                ? val.modifiedBy
                : serializeUserMini(val.modifiedBy),
            ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : serializeUserMini(val.ownedBy),
            ['shared_link']: val.sharedLink == void 0
                ? val.sharedLink
                : serializeFileSharedLinkField(val.sharedLink),
            ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
            ['item_status']: val.itemStatus == void 0
                ? val.itemStatus
                : serializeFileItemStatusField(val.itemStatus),
        },
    };
}
export function deserializeFile(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "File"' });
    }
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "File"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "File"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeFilePathCollectionField(val.path_collection);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "File"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "File"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "File"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "File"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "File"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "File"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    const ownedBy = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeFileSharedLinkField(val.shared_link);
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeFileItemStatusField(val.item_status);
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "File"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "File"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.sha1 == void 0) && !sdIsString(val.sha1)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sha1" of type "File"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : deserializeFileVersionMini(val.file_version);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "File" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "File"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "File"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "File" to be defined',
        });
    }
    const type = deserializeFileBaseTypeField(val.type);
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