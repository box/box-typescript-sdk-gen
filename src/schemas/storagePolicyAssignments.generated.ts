import { serializeStoragePolicyAssignment } from './storagePolicyAssignment.generated.js';
import { deserializeStoragePolicyAssignment } from './storagePolicyAssignment.generated.js';
import { StoragePolicyAssignment } from './storagePolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface StoragePolicyAssignments {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly StoragePolicyAssignment[];
}
export function serializeStoragePolicyAssignments(
  val: StoragePolicyAssignments
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: StoragePolicyAssignment
          ): SerializedData {
            return serializeStoragePolicyAssignment(item);
          }) as readonly any[]),
  };
}
export function deserializeStoragePolicyAssignments(
  val: any
): StoragePolicyAssignments {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly StoragePolicyAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): StoragePolicyAssignment {
          return deserializeStoragePolicyAssignment(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies StoragePolicyAssignments;
}
