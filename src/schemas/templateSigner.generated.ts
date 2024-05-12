import { serializeTemplateSignerInput } from './templateSignerInput.generated.js';
import { deserializeTemplateSignerInput } from './templateSignerInput.generated.js';
import { TemplateSignerInput } from './templateSignerInput.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type TemplateSignerRoleField =
  | 'signer'
  | 'approver'
  | 'final_copy_reader';
export interface TemplateSigner {
  readonly inputs?: readonly TemplateSignerInput[];
  readonly email?: string;
  readonly role?: TemplateSignerRoleField;
  readonly isInPerson?: boolean;
  readonly order?: number;
  readonly signerGroupId?: string;
}
export function serializeTemplateSignerRoleField(
  val: TemplateSignerRoleField
): SerializedData {
  return val;
}
export function deserializeTemplateSignerRoleField(
  val: SerializedData
): TemplateSignerRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "TemplateSignerRoleField"',
    });
  }
  if (val == 'signer') {
    return 'signer';
  }
  if (val == 'approver') {
    return 'approver';
  }
  if (val == 'final_copy_reader') {
    return 'final_copy_reader';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeTemplateSigner(val: TemplateSigner): SerializedData {
  return {
    ['inputs']:
      val.inputs == void 0
        ? void 0
        : (val.inputs.map(function (item: TemplateSignerInput): SerializedData {
            return serializeTemplateSignerInput(item);
          }) as readonly any[]),
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['role']:
      val.role == void 0 ? void 0 : serializeTemplateSignerRoleField(val.role),
    ['is_in_person']: val.isInPerson == void 0 ? void 0 : val.isInPerson,
    ['order']: val.order == void 0 ? void 0 : val.order,
    ['signer_group_id']:
      val.signerGroupId == void 0 ? void 0 : val.signerGroupId,
  };
}
export function deserializeTemplateSigner(val: SerializedData): TemplateSigner {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "TemplateSigner"' });
  }
  if (!(val.inputs == void 0) && !sdIsList(val.inputs)) {
    throw new BoxSdkError({
      message: 'Expecting array for "inputs" of type "TemplateSigner"',
    });
  }
  const inputs: undefined | readonly TemplateSignerInput[] =
    val.inputs == void 0
      ? void 0
      : sdIsList(val.inputs)
      ? (val.inputs.map(function (itm: SerializedData): TemplateSignerInput {
          return deserializeTemplateSignerInput(itm);
        }) as readonly any[])
      : [];
  if (!(val.email == void 0) && !sdIsString(val.email)) {
    throw new BoxSdkError({
      message: 'Expecting string for "email" of type "TemplateSigner"',
    });
  }
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const role: undefined | TemplateSignerRoleField =
    val.role == void 0 ? void 0 : deserializeTemplateSignerRoleField(val.role);
  if (!(val.is_in_person == void 0) && !sdIsBoolean(val.is_in_person)) {
    throw new BoxSdkError({
      message: 'Expecting boolean for "is_in_person" of type "TemplateSigner"',
    });
  }
  const isInPerson: undefined | boolean =
    val.is_in_person == void 0 ? void 0 : val.is_in_person;
  if (!(val.order == void 0) && !sdIsNumber(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting number for "order" of type "TemplateSigner"',
    });
  }
  const order: undefined | number = val.order == void 0 ? void 0 : val.order;
  if (!(val.signer_group_id == void 0) && !sdIsString(val.signer_group_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "signer_group_id" of type "TemplateSigner"',
    });
  }
  const signerGroupId: undefined | string =
    val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
  return {
    inputs: inputs,
    email: email,
    role: role,
    isInPerson: isInPerson,
    order: order,
    signerGroupId: signerGroupId,
  } satisfies TemplateSigner;
}
