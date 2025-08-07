import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TrashFolder {
    constructor(fields) {
        /**
         * The value will always be `folder`. */
        this.type = 'folder';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.etag !== undefined) {
            this.etag = fields.etag;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.sequenceId !== undefined) {
            this.sequenceId = fields.sequenceId;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
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
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeTrashFolderTypeField(val) {
    return val;
}
export function deserializeTrashFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize TrashFolderTypeField" });
}
export function serializeTrashFolderPathCollectionEntriesTypeField(val) {
    return val;
}
export function deserializeTrashFolderPathCollectionEntriesTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TrashFolderPathCollectionEntriesTypeField",
    });
}
export function serializeTrashFolderPathCollectionEntriesField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTrashFolderPathCollectionEntriesTypeField(val.type),
        ['id']: val.id,
        ['sequence_id']: val.sequenceId,
        ['etag']: val.etag,
        ['name']: val.name,
    };
}
export function deserializeTrashFolderPathCollectionEntriesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFolderPathCollectionEntriesField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTrashFolderPathCollectionEntriesTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFolderPathCollectionEntriesField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFolderPathCollectionEntriesField"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFolderPathCollectionEntriesField"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFolderPathCollectionEntriesField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return {
        type: type,
        id: id,
        sequenceId: sequenceId,
        etag: etag,
        name: name,
    };
}
export function serializeTrashFolderPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return serializeTrashFolderPathCollectionEntriesField(item);
        }),
    };
}
export function deserializeTrashFolderPathCollectionField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFolderPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "total_count" of type "TrashFolderPathCollectionField" to be defined',
        });
    }
    if (!sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "TrashFolderPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TrashFolderPathCollectionField" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TrashFolderPathCollectionField"',
        });
    }
    const entries = sdIsList(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeTrashFolderPathCollectionEntriesField(itm);
        })
        : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
export function serializeTrashFolderItemStatusField(val) {
    return val;
}
export function deserializeTrashFolderItemStatusField(val) {
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
        message: "Can't deserialize TrashFolderItemStatusField",
    });
}
export function serializeTrashFolder(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: serializeTrashFolderTypeField(val.type),
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
        ['path_collection']: serializeTrashFolderPathCollectionField(val.pathCollection),
        ['created_by']: serializeUserMini(val.createdBy),
        ['modified_by']: serializeUserMini(val.modifiedBy),
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
        ['owned_by']: serializeUserMini(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['folder_upload_email']: val.folderUploadEmail,
        ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
        ['item_status']: serializeTrashFolderItemStatusField(val.itemStatus),
    };
}
export function deserializeTrashFolder(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "TrashFolder"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TrashFolder" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFolder"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFolder"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TrashFolder" to be defined',
        });
    }
    const type = deserializeTrashFolderTypeField(val.type);
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFolder"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "TrashFolder" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFolder"',
        });
    }
    const name = val.name;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFolder"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFolder"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "TrashFolder" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFolder"',
        });
    }
    const description = val.description;
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "TrashFolder" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFolder"',
        });
    }
    const size = val.size;
    if (val.path_collection == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashFolder" to be defined',
        });
    }
    const pathCollection = deserializeTrashFolderPathCollectionField(val.path_collection);
    if (val.created_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_by" of type "TrashFolder" to be defined',
        });
    }
    const createdBy = deserializeUserMini(val.created_by);
    if (val.modified_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "modified_by" of type "TrashFolder" to be defined',
        });
    }
    const modifiedBy = deserializeUserMini(val.modified_by);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFolder"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFolder"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFolder"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFolder"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    if (val.owned_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "owned_by" of type "TrashFolder" to be defined',
        });
    }
    const ownedBy = deserializeUserMini(val.owned_by);
    if (!(val.shared_link == void 0) && !sdIsString(val.shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFolder"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    if (!(val.folder_upload_email == void 0) &&
        !sdIsString(val.folder_upload_email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "folder_upload_email" of type "TrashFolder"',
        });
    }
    const folderUploadEmail = val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_status" of type "TrashFolder" to be defined',
        });
    }
    const itemStatus = deserializeTrashFolderItemStatusField(val.item_status);
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
export function serializeTrashFolderInput(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0 ? val.type : serializeTrashFolderTypeField(val.type),
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
        ['path_collection']: serializeTrashFolderPathCollectionField(val.pathCollection),
        ['created_by']: serializeUserMini(val.createdBy),
        ['modified_by']: serializeUserMini(val.modifiedBy),
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
        ['owned_by']: serializeUserMini(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['folder_upload_email']: val.folderUploadEmail,
        ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
        ['item_status']: serializeTrashFolderItemStatusField(val.itemStatus),
    };
}
export function deserializeTrashFolderInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFolderInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TrashFolderInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFolderInput"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFolderInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0 ? void 0 : deserializeTrashFolderTypeField(val.type);
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFolderInput"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "TrashFolderInput" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFolderInput"',
        });
    }
    const name = val.name;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFolderInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFolderInput"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "TrashFolderInput" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFolderInput"',
        });
    }
    const description = val.description;
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "TrashFolderInput" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFolderInput"',
        });
    }
    const size = val.size;
    if (val.path_collection == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashFolderInput" to be defined',
        });
    }
    const pathCollection = deserializeTrashFolderPathCollectionField(val.path_collection);
    if (val.created_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_by" of type "TrashFolderInput" to be defined',
        });
    }
    const createdBy = deserializeUserMini(val.created_by);
    if (val.modified_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "modified_by" of type "TrashFolderInput" to be defined',
        });
    }
    const modifiedBy = deserializeUserMini(val.modified_by);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFolderInput"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : deserializeDateTime(val.trashed_at);
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFolderInput"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : deserializeDateTime(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFolderInput"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFolderInput"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    if (val.owned_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "owned_by" of type "TrashFolderInput" to be defined',
        });
    }
    const ownedBy = deserializeUserMini(val.owned_by);
    if (!(val.shared_link == void 0) && !sdIsString(val.shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFolderInput"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    if (!(val.folder_upload_email == void 0) &&
        !sdIsString(val.folder_upload_email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "folder_upload_email" of type "TrashFolderInput"',
        });
    }
    const folderUploadEmail = val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_status" of type "TrashFolderInput" to be defined',
        });
    }
    const itemStatus = deserializeTrashFolderItemStatusField(val.item_status);
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
//# sourceMappingURL=trashFolder.generated.js.map