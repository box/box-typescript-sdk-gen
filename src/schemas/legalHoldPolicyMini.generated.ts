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
  /**
   * The unique identifier for this legal hold policy */
  readonly id!: string;
  /**
   * `legal_hold_policy` */
  readonly type: LegalHoldPolicyMiniTypeField =
    'legal_hold_policy' as LegalHoldPolicyMiniTypeField;
  readonly rawData?: SerializedData;
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
    if (fields.rawData) {
      this.rawData = fields.rawData;
    }
  }
}
export interface LegalHoldPolicyMiniInput {
  /**
   * The unique identifier for this legal hold policy */
  readonly id: string;
  /**
   * `legal_hold_policy` */
  readonly type?: LegalHoldPolicyMiniTypeField;
  readonly rawData?: SerializedData;
}
export function serializeLegalHoldPolicyMiniTypeField(
  val: LegalHoldPolicyMiniTypeField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyMiniTypeField(
  val: SerializedData
): LegalHoldPolicyMiniTypeField {
  if (val == 'legal_hold_policy') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize LegalHoldPolicyMiniTypeField",
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
export function deserializeLegalHoldPolicyMini(
  val: SerializedData
): LegalHoldPolicyMini {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "LegalHoldPolicyMini"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "LegalHoldPolicyMini" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "LegalHoldPolicyMini"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "LegalHoldPolicyMini" to be defined',
    });
  }
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
  val: SerializedData
): LegalHoldPolicyMiniInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "LegalHoldPolicyMiniInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "LegalHoldPolicyMiniInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "LegalHoldPolicyMiniInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | LegalHoldPolicyMiniTypeField =
    val.type == void 0
      ? void 0
      : deserializeLegalHoldPolicyMiniTypeField(val.type);
  return { id: id, type: type } satisfies LegalHoldPolicyMiniInput;
}
