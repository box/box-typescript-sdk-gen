import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTrashFolderRestoredTypeField(val) {
    return val;
}
export function deserializeTrashFolderRestoredTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TrashFolderRestoredTypeField",
    });
}
export function serializeTrashFolderRestoredPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return serializeFolderMini(item);
        }),
    };
}
export function deserializeTrashFolderRestoredPathCollectionField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFolderRestoredPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "total_count" of type "TrashFolderRestoredPathCollectionField" to be defined',
        });
    }
    if (!sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "TrashFolderRestoredPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TrashFolderRestoredPathCollectionField" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TrashFolderRestoredPathCollectionField"',
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
export function serializeTrashFolderRestoredItemStatusField(val) {
    return val;
}
export function deserializeTrashFolderRestoredItemStatusField(val) {
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
    throw new BoxSdkError({
        message: "Can't deserialize TrashFolderRestoredItemStatusField",
    });
}
export function serializeTrashFolderRestored(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0
            ? val.type
            : serializeTrashFolderRestoredTypeField(val.type),
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
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
            : serializeTrashFolderRestoredPathCollectionField(val.pathCollection),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : serializeUserMini(val.modifiedBy),
        ['trashed_at']: val.trashedAt,
        ['purged_at']: val.purgedAt,
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : serializeDateTime(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : serializeDateTime(val.contentModifiedAt),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : serializeUserMini(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['folder_upload_email']: val.folderUploadEmail,
        ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
        ['item_status']: val.itemStatus == void 0
            ? val.itemStatus
            : serializeTrashFolderRestoredItemStatusField(val.itemStatus),
    };
}
export function deserializeTrashFolderRestored(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFolderRestored"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFolderRestored"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFolderRestored"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0
        ? void 0
        : deserializeTrashFolderRestoredTypeField(val.type);
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFolderRestored"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFolderRestored"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFolderRestored"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFolderRestored"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFolderRestored"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.size == void 0) && !sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFolderRestored"',
        });
    }
    const size = val.size == void 0 ? void 0 : val.size;
    const pathCollection = val.path_collection == void 0
        ? void 0
        : deserializeTrashFolderRestoredPathCollectionField(val.path_collection);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFolderRestored"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : val.trashed_at;
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFolderRestored"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : val.purged_at;
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFolderRestored"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFolderRestored"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    const ownedBy = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    if (!(val.shared_link == void 0) && !sdIsString(val.shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFolderRestored"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    if (!(val.folder_upload_email == void 0) &&
        !sdIsString(val.folder_upload_email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "folder_upload_email" of type "TrashFolderRestored"',
        });
    }
    const folderUploadEmail = val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeTrashFolderRestoredItemStatusField(val.item_status);
    return {
        id: id,
        etag: etag,
        type: type,
        sequenceId: sequenceId,
        name: name,
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
    };
}
//# sourceMappingURL=trashFolderRestored.generated.js.map