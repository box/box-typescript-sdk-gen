import { serializeFolderLock } from './folderLock.generated.js';
import { deserializeFolderLock } from './folderLock.generated.js';
import { FolderLock } from './folderLock.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface FolderLocks {
  readonly entries?: readonly FolderLock[];
  readonly limit?: string;
  readonly nextMarker?: string;
}
export function serializeFolderLocks(val: FolderLocks): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FolderLock): SerializedData {
            return serializeFolderLock(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeFolderLocks(val: any): FolderLocks {
  const entries: undefined | readonly FolderLock[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): FolderLock {
          return deserializeFolderLock(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | string = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies FolderLocks;
}
