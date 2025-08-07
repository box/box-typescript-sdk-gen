import { serializeFileVersionMini } from './fileVersionMini.generated.js';
import { deserializeFileVersionMini } from './fileVersionMini.generated.js';
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
export class TrashFileRestored {
    constructor(fields) {
        /**
         * The value will always be `file`. */
        this.type = 'file';
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
        if (fields.sha1 !== undefined) {
            this.sha1 = fields.sha1;
        }
        if (fields.fileVersion !== undefined) {
            this.fileVersion = fields.fileVersion;
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
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeTrashFileRestoredTypeField(val) {
    return val;
}
export function deserializeTrashFileRestoredTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TrashFileRestoredTypeField",
    });
}
export function serializeTrashFileRestoredPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return serializeFolderMini(item);
        }),
    };
}
export function deserializeTrashFileRestoredPathCollectionField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFileRestoredPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "total_count" of type "TrashFileRestoredPathCollectionField" to be defined',
        });
    }
    if (!sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "TrashFileRestoredPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TrashFileRestoredPathCollectionField" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TrashFileRestoredPathCollectionField"',
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
export function serializeTrashFileRestoredItemStatusField(val) {
    return val;
}
export function deserializeTrashFileRestoredItemStatusField(val) {
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
        message: "Can't deserialize TrashFileRestoredItemStatusField",
    });
}
export function serializeTrashFileRestored(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: serializeTrashFileRestoredTypeField(val.type),
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
        ['sha1']: val.sha1,
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : serializeFileVersionMini(val.fileVersion),
        ['description']: val.description,
        ['size']: val.size,
        ['path_collection']: serializeTrashFileRestoredPathCollectionField(val.pathCollection),
        ['created_at']: serializeDateTime(val.createdAt),
        ['modified_at']: serializeDateTime(val.modifiedAt),
        ['trashed_at']: val.trashedAt,
        ['purged_at']: val.purgedAt,
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : serializeDateTime(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : serializeDateTime(val.contentModifiedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['modified_by']: serializeUserMini(val.modifiedBy),
        ['owned_by']: serializeUserMini(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
        ['item_status']: serializeTrashFileRestoredItemStatusField(val.itemStatus),
    };
}
export function deserializeTrashFileRestored(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFileRestored"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFileRestored"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFileRestored"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TrashFileRestored" to be defined',
        });
    }
    const type = deserializeTrashFileRestoredTypeField(val.type);
    if (val.sequence_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "sequence_id" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFileRestored"',
        });
    }
    const sequenceId = val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFileRestored"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.sha1 == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "sha1" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsString(val.sha1)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sha1" of type "TrashFileRestored"',
        });
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : deserializeFileVersionMini(val.file_version);
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFileRestored"',
        });
    }
    const description = val.description;
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFileRestored"',
        });
    }
    const size = val.size;
    if (val.path_collection == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashFileRestored" to be defined',
        });
    }
    const pathCollection = deserializeTrashFileRestoredPathCollectionField(val.path_collection);
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFileRestored"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    if (val.modified_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "modified_at" of type "TrashFileRestored" to be defined',
        });
    }
    if (!sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFileRestored"',
        });
    }
    const modifiedAt = deserializeDateTime(val.modified_at);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFileRestored"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : val.trashed_at;
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFileRestored"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : val.purged_at;
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFileRestored"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFileRestored"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.modified_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "modified_by" of type "TrashFileRestored" to be defined',
        });
    }
    const modifiedBy = deserializeUserMini(val.modified_by);
    if (val.owned_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "owned_by" of type "TrashFileRestored" to be defined',
        });
    }
    const ownedBy = deserializeUserMini(val.owned_by);
    if (!(val.shared_link == void 0) && !sdIsString(val.shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFileRestored"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_status" of type "TrashFileRestored" to be defined',
        });
    }
    const itemStatus = deserializeTrashFileRestoredItemStatusField(val.item_status);
    return {
        id: id,
        etag: etag,
        type: type,
        sequenceId: sequenceId,
        name: name,
        sha1: sha1,
        fileVersion: fileVersion,
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
    };
}
export function serializeTrashFileRestoredInput(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0
            ? val.type
            : serializeTrashFileRestoredTypeField(val.type),
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
        ['sha1']: val.sha1,
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : serializeFileVersionMini(val.fileVersion),
        ['description']: val.description,
        ['size']: val.size,
        ['path_collection']: serializeTrashFileRestoredPathCollectionField(val.pathCollection),
        ['created_at']: serializeDateTime(val.createdAt),
        ['modified_at']: serializeDateTime(val.modifiedAt),
        ['trashed_at']: val.trashedAt,
        ['purged_at']: val.purgedAt,
        ['content_created_at']: val.contentCreatedAt == void 0
            ? val.contentCreatedAt
            : serializeDateTime(val.contentCreatedAt),
        ['content_modified_at']: val.contentModifiedAt == void 0
            ? val.contentModifiedAt
            : serializeDateTime(val.contentModifiedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['modified_by']: serializeUserMini(val.modifiedBy),
        ['owned_by']: serializeUserMini(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
        ['item_status']: serializeTrashFileRestoredItemStatusField(val.itemStatus),
    };
}
export function deserializeTrashFileRestoredInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TrashFileRestoredInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFileRestoredInput"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFileRestoredInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0
        ? void 0
        : deserializeTrashFileRestoredTypeField(val.type);
    if (val.sequence_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "sequence_id" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFileRestoredInput"',
        });
    }
    const sequenceId = val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFileRestoredInput"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.sha1 == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "sha1" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsString(val.sha1)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sha1" of type "TrashFileRestoredInput"',
        });
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : deserializeFileVersionMini(val.file_version);
    if (val.description == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "description" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFileRestoredInput"',
        });
    }
    const description = val.description;
    if (val.size == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "size" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsNumber(val.size)) {
        throw new BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFileRestoredInput"',
        });
    }
    const size = val.size;
    if (val.path_collection == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashFileRestoredInput" to be defined',
        });
    }
    const pathCollection = deserializeTrashFileRestoredPathCollectionField(val.path_collection);
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFileRestoredInput"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    if (val.modified_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "modified_at" of type "TrashFileRestoredInput" to be defined',
        });
    }
    if (!sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFileRestoredInput"',
        });
    }
    const modifiedAt = deserializeDateTime(val.modified_at);
    if (!(val.trashed_at == void 0) && !sdIsString(val.trashed_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFileRestoredInput"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : val.trashed_at;
    if (!(val.purged_at == void 0) && !sdIsString(val.purged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFileRestoredInput"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : val.purged_at;
    if (!(val.content_created_at == void 0) &&
        !sdIsString(val.content_created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFileRestoredInput"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : deserializeDateTime(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !sdIsString(val.content_modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFileRestoredInput"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : deserializeDateTime(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.modified_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "modified_by" of type "TrashFileRestoredInput" to be defined',
        });
    }
    const modifiedBy = deserializeUserMini(val.modified_by);
    if (val.owned_by == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "owned_by" of type "TrashFileRestoredInput" to be defined',
        });
    }
    const ownedBy = deserializeUserMini(val.owned_by);
    if (!(val.shared_link == void 0) && !sdIsString(val.shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFileRestoredInput"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    if (val.item_status == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_status" of type "TrashFileRestoredInput" to be defined',
        });
    }
    const itemStatus = deserializeTrashFileRestoredItemStatusField(val.item_status);
    return {
        id: id,
        etag: etag,
        type: type,
        sequenceId: sequenceId,
        name: name,
        sha1: sha1,
        fileVersion: fileVersion,
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
    };
}
//# sourceMappingURL=trashFileRestored.generated.js.map