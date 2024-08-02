import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TermsOfServiceBaseTypeField = 'terms_of_service';
export class TermsOfServiceBase {
  /**
   * The unique identifier for this terms of service. */
  readonly id!: string;
  /**
   * `terms_of_service` */
  readonly type: TermsOfServiceBaseTypeField =
    'terms_of_service' as TermsOfServiceBaseTypeField;
  constructor(
    fields: Omit<TermsOfServiceBase, 'type'> &
      Partial<Pick<TermsOfServiceBase, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
  }
}
export interface TermsOfServiceBaseInput {
  /**
   * The unique identifier for this terms of service. */
  readonly id: string;
  /**
   * `terms_of_service` */
  readonly type?: TermsOfServiceBaseTypeField;
}
export function serializeTermsOfServiceBaseTypeField(
  val: TermsOfServiceBaseTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceBaseTypeField(
  val: SerializedData
): TermsOfServiceBaseTypeField {
  if (val == 'terms_of_service') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize TermsOfServiceBaseTypeField",
  });
}
export function serializeTermsOfServiceBase(
  val: TermsOfServiceBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeTermsOfServiceBaseTypeField(val.type),
  };
}
export function deserializeTermsOfServiceBase(
  val: SerializedData
): TermsOfServiceBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TermsOfServiceBase"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "TermsOfServiceBase" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "TermsOfServiceBase"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "TermsOfServiceBase" to be defined',
    });
  }
  const type: TermsOfServiceBaseTypeField =
    deserializeTermsOfServiceBaseTypeField(val.type);
  return { id: id, type: type } satisfies TermsOfServiceBase;
}
export function serializeTermsOfServiceBaseInput(
  val: TermsOfServiceBaseInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTermsOfServiceBaseTypeField(val.type),
  };
}
export function deserializeTermsOfServiceBaseInput(
  val: SerializedData
): TermsOfServiceBaseInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "TermsOfServiceBaseInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "TermsOfServiceBaseInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "TermsOfServiceBaseInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | TermsOfServiceBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeTermsOfServiceBaseTypeField(val.type);
  return { id: id, type: type } satisfies TermsOfServiceBaseInput;
}
