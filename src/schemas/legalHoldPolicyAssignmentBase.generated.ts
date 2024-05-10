import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type LegalHoldPolicyAssignmentBaseTypeField =
  'legal_hold_policy_assignment';
export interface LegalHoldPolicyAssignmentBase {
  readonly id?: string;
  readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export function serializeLegalHoldPolicyAssignmentBaseTypeField(
  val: LegalHoldPolicyAssignmentBaseTypeField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyAssignmentBaseTypeField(
  val: any
): LegalHoldPolicyAssignmentBaseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "LegalHoldPolicyAssignmentBaseTypeField"',
    });
  }
  if (val == 'legal_hold_policy_assignment') {
    return 'legal_hold_policy_assignment';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeLegalHoldPolicyAssignmentBase(
  val: LegalHoldPolicyAssignmentBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeLegalHoldPolicyAssignmentBaseTypeField(val.type),
  };
}
export function deserializeLegalHoldPolicyAssignmentBase(
  val: any
): LegalHoldPolicyAssignmentBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | LegalHoldPolicyAssignmentBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
  return { id: id, type: type } satisfies LegalHoldPolicyAssignmentBase;
}