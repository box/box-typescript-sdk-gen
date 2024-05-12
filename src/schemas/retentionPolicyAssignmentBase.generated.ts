import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type RetentionPolicyAssignmentBaseTypeField =
  'retention_policy_assignment';
export class RetentionPolicyAssignmentBase {
  readonly id!: string;
  readonly type: RetentionPolicyAssignmentBaseTypeField =
    'retention_policy_assignment' as RetentionPolicyAssignmentBaseTypeField;
  constructor(
    fields: Omit<RetentionPolicyAssignmentBase, 'type'> &
      Partial<Pick<RetentionPolicyAssignmentBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface RetentionPolicyAssignmentBaseInput {
  readonly id: string;
  readonly type?: RetentionPolicyAssignmentBaseTypeField;
}
export function serializeRetentionPolicyAssignmentBaseTypeField(
  val: RetentionPolicyAssignmentBaseTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentBaseTypeField(
  val: any
): RetentionPolicyAssignmentBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "RetentionPolicyAssignmentBaseTypeField"',
    });
  }
  if (val == 'retention_policy_assignment') {
    return 'retention_policy_assignment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyAssignmentBase(
  val: RetentionPolicyAssignmentBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeRetentionPolicyAssignmentBaseTypeField(val.type),
  };
}
export function deserializeRetentionPolicyAssignmentBase(
  val: any
): RetentionPolicyAssignmentBase {
  const id: string = val.id;
  const type: RetentionPolicyAssignmentBaseTypeField =
    deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
  return { id: id, type: type } satisfies RetentionPolicyAssignmentBase;
}
export function serializeRetentionPolicyAssignmentBaseInput(
  val: RetentionPolicyAssignmentBaseInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentBaseTypeField(val.type),
  };
}
export function deserializeRetentionPolicyAssignmentBaseInput(
  val: any
): RetentionPolicyAssignmentBaseInput {
  const id: string = val.id;
  const type: undefined | RetentionPolicyAssignmentBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
  return { id: id, type: type } satisfies RetentionPolicyAssignmentBaseInput;
}
