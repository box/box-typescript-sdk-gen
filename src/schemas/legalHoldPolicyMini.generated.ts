import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type LegalHoldPolicyMiniTypeField = 'legal_hold_policy';
export class LegalHoldPolicyMini {
  readonly id!: string;
  readonly type: LegalHoldPolicyMiniTypeField =
    'legal_hold_policy' as LegalHoldPolicyMiniTypeField;
  constructor(
    fields: Omit<LegalHoldPolicyMini, 'type'> &
      Partial<Pick<LegalHoldPolicyMini, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface LegalHoldPolicyMiniInput {
  readonly id: string;
  readonly type?: LegalHoldPolicyMiniTypeField;
}
export function serializeLegalHoldPolicyMiniTypeField(
  val: LegalHoldPolicyMiniTypeField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyMiniTypeField(
  val: any
): LegalHoldPolicyMiniTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "LegalHoldPolicyMiniTypeField"',
    });
  }
  if (val == 'legal_hold_policy') {
    return 'legal_hold_policy';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeLegalHoldPolicyMini(
  val: LegalHoldPolicyMini
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeLegalHoldPolicyMiniTypeField(val.type),
  };
}
export function deserializeLegalHoldPolicyMini(val: any): LegalHoldPolicyMini {
  const id: string = val.id;
  const type: LegalHoldPolicyMiniTypeField =
    deserializeLegalHoldPolicyMiniTypeField(val.type);
  return { id: id, type: type } satisfies LegalHoldPolicyMini;
}
export function serializeLegalHoldPolicyMiniInput(
  val: LegalHoldPolicyMiniInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeLegalHoldPolicyMiniTypeField(val.type),
  };
}
export function deserializeLegalHoldPolicyMiniInput(
  val: any
): LegalHoldPolicyMiniInput {
  const id: string = val.id;
  const type: undefined | LegalHoldPolicyMiniTypeField =
    val.type == void 0
      ? void 0
      : deserializeLegalHoldPolicyMiniTypeField(val.type);
  return { id: id, type: type } satisfies LegalHoldPolicyMiniInput;
}
