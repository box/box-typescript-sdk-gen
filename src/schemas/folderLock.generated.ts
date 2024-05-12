import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FolderMini } from './folderMini.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface FolderLockLockedOperationsField {
  readonly move: boolean;
  readonly delete: boolean;
}
export interface FolderLock {
  readonly folder?: FolderMini;
  readonly id?: string;
  readonly type?: string;
  readonly createdBy?: UserBase;
  readonly createdAt?: DateTime;
  readonly lockedOperations?: FolderLockLockedOperationsField;
  readonly lockType?: string;
}
export function serializeFolderLockLockedOperationsField(
  val: FolderLockLockedOperationsField
): SerializedData {
  return { ['move']: val.move, ['delete']: val.delete };
}
export function deserializeFolderLockLockedOperationsField(
  val: any
): FolderLockLockedOperationsField {
  const move: boolean = val.move;
  const _delete: boolean = val.delete;
  return {
    move: move,
    delete: _delete,
  } satisfies FolderLockLockedOperationsField;
}
export function serializeFolderLock(val: FolderLock): SerializedData {
  return {
    ['folder']: val.folder == void 0 ? void 0 : serializeFolderMini(val.folder),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['locked_operations']:
      val.lockedOperations == void 0
        ? void 0
        : serializeFolderLockLockedOperationsField(val.lockedOperations),
    ['lock_type']: val.lockType == void 0 ? void 0 : val.lockType,
  };
}
export function deserializeFolderLock(val: any): FolderLock {
  const folder: undefined | FolderMini =
    val.folder == void 0 ? void 0 : deserializeFolderMini(val.folder);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const lockedOperations: undefined | FolderLockLockedOperationsField =
    val.locked_operations == void 0
      ? void 0
      : deserializeFolderLockLockedOperationsField(val.locked_operations);
  const lockType: undefined | string =
    val.lock_type == void 0 ? void 0 : val.lock_type;
  return {
    folder: folder,
    id: id,
    type: type,
    createdBy: createdBy,
    createdAt: createdAt,
    lockedOperations: lockedOperations,
    lockType: lockType,
  } satisfies FolderLock;
}
