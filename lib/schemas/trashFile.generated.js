"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrashFile = void 0;
exports.serializeTrashFileTypeField = serializeTrashFileTypeField;
exports.deserializeTrashFileTypeField = deserializeTrashFileTypeField;
exports.serializeTrashFilePathCollectionEntriesTypeField = serializeTrashFilePathCollectionEntriesTypeField;
exports.deserializeTrashFilePathCollectionEntriesTypeField = deserializeTrashFilePathCollectionEntriesTypeField;
exports.serializeTrashFilePathCollectionEntriesField = serializeTrashFilePathCollectionEntriesField;
exports.deserializeTrashFilePathCollectionEntriesField = deserializeTrashFilePathCollectionEntriesField;
exports.serializeTrashFilePathCollectionField = serializeTrashFilePathCollectionField;
exports.deserializeTrashFilePathCollectionField = deserializeTrashFilePathCollectionField;
exports.serializeTrashFileItemStatusField = serializeTrashFileItemStatusField;
exports.deserializeTrashFileItemStatusField = deserializeTrashFileItemStatusField;
exports.serializeTrashFile = serializeTrashFile;
exports.deserializeTrashFile = deserializeTrashFile;
exports.serializeTrashFileInput = serializeTrashFileInput;
exports.deserializeTrashFileInput = deserializeTrashFileInput;
const fileVersionMini_generated_js_1 = require("./fileVersionMini.generated.js");
const fileVersionMini_generated_js_2 = require("./fileVersionMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class TrashFile {
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
exports.TrashFile = TrashFile;
function serializeTrashFileTypeField(val) {
    return val;
}
function deserializeTrashFileTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize TrashFileTypeField" });
}
function serializeTrashFilePathCollectionEntriesTypeField(val) {
    return val;
}
function deserializeTrashFilePathCollectionEntriesTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TrashFilePathCollectionEntriesTypeField",
    });
}
function serializeTrashFilePathCollectionEntriesField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTrashFilePathCollectionEntriesTypeField(val.type),
        ['id']: val.id,
        ['sequence_id']: val.sequenceId,
        ['etag']: val.etag,
        ['name']: val.name,
    };
}
function deserializeTrashFilePathCollectionEntriesField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TrashFilePathCollectionEntriesField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTrashFilePathCollectionEntriesTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFilePathCollectionEntriesField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.sequence_id == void 0) && !(0, json_js_2.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFilePathCollectionEntriesField"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.etag == void 0) && !(0, json_js_2.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFilePathCollectionEntriesField"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFilePathCollectionEntriesField"',
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
function serializeTrashFilePathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return serializeTrashFilePathCollectionEntriesField(item);
        }),
    };
}
function deserializeTrashFilePathCollectionField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TrashFilePathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "total_count" of type "TrashFilePathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "TrashFilePathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "TrashFilePathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "TrashFilePathCollectionField"',
        });
    }
    const entries = (0, json_js_3.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeTrashFilePathCollectionEntriesField(itm);
        })
        : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
function serializeTrashFileItemStatusField(val) {
    return val;
}
function deserializeTrashFileItemStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'trashed') {
        return val;
    }
    if (val == 'deleted') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TrashFileItemStatusField",
    });
}
function serializeTrashFile(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: serializeTrashFileTypeField(val.type),
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
        ['sha1']: val.sha1,
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : (0, fileVersionMini_generated_js_1.serializeFileVersionMini)(val.fileVersion),
        ['description']: val.description,
        ['size']: val.size,
        ['path_collection']: serializeTrashFilePathCollectionField(val.pathCollection),
        ['created_at']: (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: (0, utils_js_1.serializeDateTime)(val.modifiedAt),
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
        ['modified_by']: (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
        ['owned_by']: (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['item_status']: serializeTrashFileItemStatusField(val.itemStatus),
    };
}
function deserializeTrashFile(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TrashFile"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFile"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_2.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFile"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TrashFile" to be defined',
        });
    }
    const type = deserializeTrashFileTypeField(val.type);
    if (val.sequence_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "sequence_id" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFile"',
        });
    }
    const sequenceId = val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFile"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.sha1 == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "sha1" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "TrashFile"',
        });
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_2.deserializeFileVersionMini)(val.file_version);
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFile"',
        });
    }
    const description = val.description;
    if (val.size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "size" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFile"',
        });
    }
    const size = val.size;
    if (val.path_collection == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashFile" to be defined',
        });
    }
    const pathCollection = deserializeTrashFilePathCollectionField(val.path_collection);
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFile"',
        });
    }
    const createdAt = (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (val.modified_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "modified_at" of type "TrashFile" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFile"',
        });
    }
    const modifiedAt = (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.trashed_at == void 0) && !(0, json_js_2.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFile"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    if (!(val.purged_at == void 0) && !(0, json_js_2.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFile"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFile"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFile"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (val.modified_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "modified_by" of type "TrashFile" to be defined',
        });
    }
    const modifiedBy = (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    if (val.owned_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "owned_by" of type "TrashFile" to be defined',
        });
    }
    const ownedBy = (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    if (!(val.shared_link == void 0) && !(0, json_js_2.sdIsString)(val.shared_link)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFile"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    if (val.item_status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item_status" of type "TrashFile" to be defined',
        });
    }
    const itemStatus = deserializeTrashFileItemStatusField(val.item_status);
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
function serializeTrashFileInput(val) {
    return {
        ['id']: val.id,
        ['etag']: val.etag,
        ['type']: val.type == void 0 ? val.type : serializeTrashFileTypeField(val.type),
        ['sequence_id']: val.sequenceId,
        ['name']: val.name,
        ['sha1']: val.sha1,
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : (0, fileVersionMini_generated_js_1.serializeFileVersionMini)(val.fileVersion),
        ['description']: val.description,
        ['size']: val.size,
        ['path_collection']: serializeTrashFilePathCollectionField(val.pathCollection),
        ['created_at']: (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: (0, utils_js_1.serializeDateTime)(val.modifiedAt),
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
        ['modified_by']: (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
        ['owned_by']: (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['item_status']: serializeTrashFileItemStatusField(val.itemStatus),
    };
}
function deserializeTrashFileInput(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TrashFileInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TrashFileInput"',
        });
    }
    const id = val.id;
    if (!(val.etag == void 0) && !(0, json_js_2.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashFileInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const type = val.type == void 0 ? void 0 : deserializeTrashFileTypeField(val.type);
    if (val.sequence_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "sequence_id" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashFileInput"',
        });
    }
    const sequenceId = val.sequence_id;
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "TrashFileInput"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.sha1 == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "sha1" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.sha1)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sha1" of type "TrashFileInput"',
        });
    }
    const sha1 = val.sha1;
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionMini_generated_js_2.deserializeFileVersionMini)(val.file_version);
    if (val.description == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "description" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "TrashFileInput"',
        });
    }
    const description = val.description;
    if (val.size == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "size" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "size" of type "TrashFileInput"',
        });
    }
    const size = val.size;
    if (val.path_collection == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashFileInput" to be defined',
        });
    }
    const pathCollection = deserializeTrashFilePathCollectionField(val.path_collection);
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashFileInput"',
        });
    }
    const createdAt = (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (val.modified_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "modified_at" of type "TrashFileInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashFileInput"',
        });
    }
    const modifiedAt = (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.trashed_at == void 0) && !(0, json_js_2.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashFileInput"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.trashed_at);
    if (!(val.purged_at == void 0) && !(0, json_js_2.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashFileInput"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.purged_at);
    if (!(val.content_created_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_created_at" of type "TrashFileInput"',
        });
    }
    const contentCreatedAt = val.content_created_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_created_at);
    if (!(val.content_modified_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.content_modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "content_modified_at" of type "TrashFileInput"',
        });
    }
    const contentModifiedAt = val.content_modified_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.content_modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (val.modified_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "modified_by" of type "TrashFileInput" to be defined',
        });
    }
    const modifiedBy = (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    if (val.owned_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "owned_by" of type "TrashFileInput" to be defined',
        });
    }
    const ownedBy = (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    if (!(val.shared_link == void 0) && !(0, json_js_2.sdIsString)(val.shared_link)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashFileInput"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    if (val.item_status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item_status" of type "TrashFileInput" to be defined',
        });
    }
    const itemStatus = deserializeTrashFileItemStatusField(val.item_status);
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
//# sourceMappingURL=trashFile.generated.js.map