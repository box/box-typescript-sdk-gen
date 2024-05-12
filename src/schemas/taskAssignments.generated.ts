import { serializeTaskAssignment } from './taskAssignment.generated.js';
import { deserializeTaskAssignment } from './taskAssignment.generated.js';
import { TaskAssignment } from './taskAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface TaskAssignments {
  readonly totalCount?: number;
  readonly entries?: readonly TaskAssignment[];
}
export function serializeTaskAssignments(val: TaskAssignments): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: TaskAssignment): SerializedData {
            return serializeTaskAssignment(item);
          }) as readonly any[]),
  };
}
export function deserializeTaskAssignments(val: any): TaskAssignments {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly TaskAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): TaskAssignment {
          return deserializeTaskAssignment(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies TaskAssignments;
}
