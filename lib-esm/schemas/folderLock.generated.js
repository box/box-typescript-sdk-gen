import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFolderLockLockedOperationsField(val) {
    return { ['move']: val.move, ['delete']: val.delete };
}
export function deserializeFolderLockLockedOperationsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderLockLockedOperationsField"',
        });
    }
    if (val.move == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "move" of type "FolderLockLockedOperationsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.move)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "move" of type "FolderLockLockedOperationsField"',
        });
    }
    const move = val.move;
    if (val.delete == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "delete" of type "FolderLockLockedOperationsField" to be defined',
        });
    }
    if (!sdIsBoolean(val.delete)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "delete" of type "FolderLockLockedOperationsField"',
        });
    }
    const _delete = val.delete;
    return {
        move: move,
        delete: _delete,
    };
}
export function serializeFolderLock(val) {
    return {
        ['folder']: val.folder == void 0 ? val.folder : serializeFolderMini(val.folder),
        ['id']: val.id,
        ['type']: val.type,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserBase(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['locked_operations']: val.lockedOperations == void 0
            ? val.lockedOperations
            : serializeFolderLockLockedOperationsField(val.lockedOperations),
        ['lock_type']: val.lockType,
    };
}
export function deserializeFolderLock(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FolderLock"' });
    }
    const folder = val.folder == void 0 ? void 0 : deserializeFolderMini(val.folder);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FolderLock"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "FolderLock"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "FolderLock"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const lockedOperations = val.locked_operations == void 0
        ? void 0
        : deserializeFolderLockLockedOperationsField(val.locked_operations);
    if (!(val.lock_type == void 0) && !sdIsString(val.lock_type)) {
        throw new BoxSdkError({
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