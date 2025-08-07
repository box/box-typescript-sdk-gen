"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTrashWebLinkRestoredTypeField = serializeTrashWebLinkRestoredTypeField;
exports.deserializeTrashWebLinkRestoredTypeField = deserializeTrashWebLinkRestoredTypeField;
exports.serializeTrashWebLinkRestoredPathCollectionField = serializeTrashWebLinkRestoredPathCollectionField;
exports.deserializeTrashWebLinkRestoredPathCollectionField = deserializeTrashWebLinkRestoredPathCollectionField;
exports.serializeTrashWebLinkRestoredItemStatusField = serializeTrashWebLinkRestoredItemStatusField;
exports.deserializeTrashWebLinkRestoredItemStatusField = deserializeTrashWebLinkRestoredItemStatusField;
exports.serializeTrashWebLinkRestored = serializeTrashWebLinkRestored;
exports.deserializeTrashWebLinkRestored = deserializeTrashWebLinkRestored;
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeTrashWebLinkRestoredTypeField(val) {
    return val;
}
function deserializeTrashWebLinkRestoredTypeField(val) {
    if (val == 'web_link') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TrashWebLinkRestoredTypeField",
    });
}
function serializeTrashWebLinkRestoredPathCollectionField(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries.map(function (item) {
            return (0, folderMini_generated_js_1.serializeFolderMini)(item);
        }),
    };
}
function deserializeTrashWebLinkRestoredPathCollectionField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TrashWebLinkRestoredPathCollectionField"',
        });
    }
    if (val.total_count == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "total_count" of type "TrashWebLinkRestoredPathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "TrashWebLinkRestoredPathCollectionField"',
        });
    }
    const totalCount = val.total_count;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "TrashWebLinkRestoredPathCollectionField" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "TrashWebLinkRestoredPathCollectionField"',
        });
    }
    const entries = (0, json_js_3.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return (0, folderMini_generated_js_2.deserializeFolderMini)(itm);
        })
        : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
function serializeTrashWebLinkRestoredItemStatusField(val) {
    return val;
}
function deserializeTrashWebLinkRestoredItemStatusField(val) {
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
        message: "Can't deserialize TrashWebLinkRestoredItemStatusField",
    });
}
function serializeTrashWebLinkRestored(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTrashWebLinkRestoredTypeField(val.type),
        ['id']: val.id,
        ['sequence_id']: val.sequenceId,
        ['etag']: val.etag,
        ['name']: val.name,
        ['url']: val.url,
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['description']: val.description,
        ['path_collection']: serializeTrashWebLinkRestoredPathCollectionField(val.pathCollection),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['trashed_at']: val.trashedAt,
        ['purged_at']: val.purgedAt,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.modifiedBy),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
        ['shared_link']: val.sharedLink,
        ['item_status']: val.itemStatus == void 0
            ? val.itemStatus
            : serializeTrashWebLinkRestoredItemStatusField(val.itemStatus),
    };
}
function deserializeTrashWebLinkRestored(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TrashWebLinkRestored"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTrashWebLinkRestoredTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TrashWebLinkRestored"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (val.sequence_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "sequence_id" of type "TrashWebLinkRestored" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.sequence_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "TrashWebLinkRestored"',
        });
    }
    const sequenceId = val.sequence_id;
    if (!(val.etag == void 0) && !(0, json_js_2.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "TrashWebLinkRestored"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "TrashWebLinkRestored"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.url == void 0) && !(0, json_js_2.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "TrashWebLinkRestored"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "TrashWebLinkRestored"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.path_collection == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "path_collection" of type "TrashWebLinkRestored" to be defined',
        });
    }
    const pathCollection = deserializeTrashWebLinkRestoredPathCollectionField(val.path_collection);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TrashWebLinkRestored"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "TrashWebLinkRestored"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.trashed_at == void 0) && !(0, json_js_2.sdIsString)(val.trashed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "trashed_at" of type "TrashWebLinkRestored"',
        });
    }
    const trashedAt = val.trashed_at == void 0 ? void 0 : val.trashed_at;
    if (!(val.purged_at == void 0) && !(0, json_js_2.sdIsString)(val.purged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "purged_at" of type "TrashWebLinkRestored"',
        });
    }
    const purgedAt = val.purged_at == void 0 ? void 0 : val.purged_at;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.modified_by);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
    if (!(val.shared_link == void 0) && !(0, json_js_2.sdIsString)(val.shared_link)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "shared_link" of type "TrashWebLinkRestored"',
        });
    }
    const sharedLink = val.shared_link == void 0 ? void 0 : val.shared_link;
    const itemStatus = val.item_status == void 0
        ? void 0
        : deserializeTrashWebLinkRestoredItemStatusField(val.item_status);
    return {
        type: type,
        id: id,
        sequenceId: sequenceId,
        etag: etag,
        name: name,
        url: url,
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
    };
}
//# sourceMappingURL=trashWebLinkRestored.generated.js.map