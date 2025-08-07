"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFolderLockLockedOperationsField = serializeFolderLockLockedOperationsField;
exports.deserializeFolderLockLockedOperationsField = deserializeFolderLockLockedOperationsField;
exports.serializeFolderLock = serializeFolderLock;
exports.deserializeFolderLock = deserializeFolderLock;
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeFolderLockLockedOperationsField(val) {
    return { ['move']: val.move, ['delete']: val.delete };
}
function deserializeFolderLockLockedOperationsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FolderLockLockedOperationsField"',
        });
    }
    if (val.move == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "move" of type "FolderLockLockedOperationsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.move)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "move" of type "FolderLockLockedOperationsField"',
        });
    }
    const move = val.move;
    if (val.delete == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "delete" of type "FolderLockLockedOperationsField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsBoolean)(val.delete)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "delete" of type "FolderLockLockedOperationsField"',
        });
    }
    const _delete = val.delete;
    return {
        move: move,
        delete: _delete,
    };
}
function serializeFolderLock(val) {
    return {
        ['folder']: val.folder == void 0 ? val.folder : (0, folderMini_generated_js_1.serializeFolderMini)(val.folder),
        ['id']: val.id,
        ['type']: val.type,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['locked_operations']: val.lockedOperations == void 0
            ? val.lockedOperations
            : serializeFolderLockLockedOperationsField(val.lockedOperations),
        ['lock_type']: val.lockType,
    };
}
function deserializeFolderLock(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FolderLock"' });
    }
    const folder = val.folder == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.folder);
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FolderLock"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !(0, json_js_2.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "FolderLock"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FolderLock"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const lockedOperations = val.locked_operations == void 0
        ? void 0
        : deserializeFolderLockLockedOperationsField(val.locked_operations);
    if (!(val.lock_type == void 0) && !(0, json_js_2.sdIsString)(val.lock_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "lock_type" of type "FolderLock"',
        });
    }
    const lockType = val.lock_type == void 0 ? void 0 : val.lock_type;
    return {
        folder: folder,
        id: id,
        type: type,
        createdBy: createdBy,
        createdAt: createdAt,
        lockedOperations: lockedOperations,
        lockType: lockType,
    };
}
//# sourceMappingURL=folderLock.generated.js.map