import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type RetentionPolicyBaseTypeField = 'retention_policy';
export class RetentionPolicyBase {
  readonly id!: string;
  readonly type: RetentionPolicyBaseTypeField =
    'retention_policy' as RetentionPolicyBaseTypeField;
  constructor(
    fields: Omit<RetentionPolicyBase, 'type'> &
      Partial<Pick<RetentionPolicyBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface RetentionPolicyBaseInput {
  readonly id: string;
  readonly type?: RetentionPolicyBaseTypeField;
}
export function serializeRetentionPolicyBaseTypeField(
  val: RetentionPolicyBaseTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyBaseTypeField(
  val: any
): RetentionPolicyBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "RetentionPolicyBaseTypeField"',
    });
  }
  if (val == 'retention_policy') {
    return 'retention_policy';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeRetentionPolicyBase(
  val: RetentionPolicyBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeRetentionPolicyBaseTypeField(val.type),
  };
}
export function deserializeRetentionPolicyBase(val: any): RetentionPolicyBase {
  const id: string = val.id;
  const type: RetentionPolicyBaseTypeField =
    deserializeRetentionPolicyBaseTypeField(val.type);
  return { id: id, type: type } satisfies RetentionPolicyBase;
}
export function serializeRetentionPolicyBaseInput(
  val: RetentionPolicyBaseInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeRetentionPolicyBaseTypeField(val.type),
  };
}
export function deserializeRetentionPolicyBaseInput(
  val: any
): RetentionPolicyBaseInput {
  const id: string = val.id;
  const type: undefined | RetentionPolicyBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeRetentionPolicyBaseTypeField(val.type);
  return { id: id, type: type } satisfies RetentionPolicyBaseInput;
}
