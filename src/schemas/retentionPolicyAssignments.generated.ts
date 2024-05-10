import { serializeRetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { deserializeRetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { RetentionPolicyAssignment } from './retentionPolicyAssignment.generated.js';
import { BoxSdkError } from '../box/errors.js';
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
  val: SerializedData
): RetentionPolicyAssignments {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RetentionPolicyAssignments"',
    });
  }
  if (!(val.entries == void 0) && !sdIsList(val.entries)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "entries" of type "RetentionPolicyAssignments"',
    });
  }
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
  if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "limit" of type "RetentionPolicyAssignments"',
    });
  }
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "next_marker" of type "RetentionPolicyAssignments"',
    });
  }
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies RetentionPolicyAssignments;
}
