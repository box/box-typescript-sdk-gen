import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileMini } from './fileMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TaskAssignmentTypeField = 'task_assignment';
export type TaskAssignmentResolutionStateField =
  | 'completed'
  | 'incomplete'
  | 'approved'
  | 'rejected';
export interface TaskAssignment {
  readonly id?: string;
  readonly type?: TaskAssignmentTypeField;
  readonly item?: FileMini;
  readonly assignedTo?: UserMini;
  readonly message?: string;
  readonly completedAt?: DateTime;
  readonly assignedAt?: DateTime;
  readonly remindedAt?: DateTime;
  readonly resolutionState?: TaskAssignmentResolutionStateField;
  readonly assignedBy?: UserMini;
}
export function serializeTaskAssignmentTypeField(
  val: TaskAssignmentTypeField
): SerializedData {
  return val;
}
export function deserializeTaskAssignmentTypeField(
  val: any
): TaskAssignmentTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TaskAssignmentTypeField"',
    });
  }
  if (val == 'task_assignment') {
    return 'task_assignment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTaskAssignmentResolutionStateField(
  val: TaskAssignmentResolutionStateField
): SerializedData {
  return val;
}
export function deserializeTaskAssignmentResolutionStateField(
  val: any
): TaskAssignmentResolutionStateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TaskAssignmentResolutionStateField"',
    });
  }
  if (val == 'completed') {
    return 'completed';
  }
  if (val == 'incomplete') {
    return 'incomplete';
  }
  if (val == 'approved') {
    return 'approved';
  }
  if (val == 'rejected') {
    return 'rejected';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTaskAssignment(val: TaskAssignment): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeTaskAssignmentTypeField(val.type),
    ['item']: val.item == void 0 ? void 0 : serializeFileMini(val.item),
    ['assigned_to']:
      val.assignedTo == void 0 ? void 0 : serializeUserMini(val.assignedTo),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['completed_at']:
      val.completedAt == void 0 ? void 0 : serializeDateTime(val.completedAt),
    ['assigned_at']:
      val.assignedAt == void 0 ? void 0 : serializeDateTime(val.assignedAt),
    ['reminded_at']:
      val.remindedAt == void 0 ? void 0 : serializeDateTime(val.remindedAt),
    ['resolution_state']:
      val.resolutionState == void 0
        ? void 0
        : serializeTaskAssignmentResolutionStateField(val.resolutionState),
    ['assigned_by']:
      val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
  };
}
export function deserializeTaskAssignment(val: any): TaskAssignment {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | TaskAssignmentTypeField =
    val.type == void 0 ? void 0 : deserializeTaskAssignmentTypeField(val.type);
  const item: undefined | FileMini =
    val.item == void 0 ? void 0 : deserializeFileMini(val.item);
  const assignedTo: undefined | UserMini =
    val.assigned_to == void 0 ? void 0 : deserializeUserMini(val.assigned_to);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const completedAt: undefined | DateTime =
    val.completed_at == void 0 ? void 0 : deserializeDateTime(val.completed_at);
  const assignedAt: undefined | DateTime =
    val.assigned_at == void 0 ? void 0 : deserializeDateTime(val.assigned_at);
  const remindedAt: undefined | DateTime =
    val.reminded_at == void 0 ? void 0 : deserializeDateTime(val.reminded_at);
  const resolutionState: undefined | TaskAssignmentResolutionStateField =
    val.resolution_state == void 0
      ? void 0
      : deserializeTaskAssignmentResolutionStateField(val.resolution_state);
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  return {
    id: id,
    type: type,
    item: item,
    assignedTo: assignedTo,
    message: message,
    completedAt: completedAt,
    assignedAt: assignedAt,
    remindedAt: remindedAt,
    resolutionState: resolutionState,
    assignedBy: assignedBy,
  } satisfies TaskAssignment;
}
