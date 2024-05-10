import { serializeRetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { deserializeRetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { RetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface RetentionPolicyAssignments {
  readonly entries?: readonly RetentionPolicyAssignment[];
  readonly limit?: number;
  readonly nextMarker?: string;
}
export function serializeRetentionPolicyAssignments(
  val: RetentionPolicyAssignments
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: RetentionPolicyAssignment
          ): SerializedData {
            return serializeRetentionPolicyAssignment(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeRetentionPolicyAssignments(
  val: any
): RetentionPolicyAssignments {
  const entries: undefined | readonly RetentionPolicyAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (
          itm: SerializedData
        ): RetentionPolicyAssignment {
          return deserializeRetentionPolicyAssignment(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies RetentionPolicyAssignments;
}
