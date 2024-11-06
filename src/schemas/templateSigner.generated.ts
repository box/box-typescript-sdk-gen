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
  /**
   * Email address of the signer */
  readonly email?: string;
  /**
   * Defines the role of the signer in the signature request. A role of
   * `signer` needs to sign the document, a role `approver`
   * approves the document and
   * a `final_copy_reader` role only
   * receives the final signed document and signing log. */
  readonly role?: TemplateSignerRoleField;
  /**
   * Used in combination with an embed URL for a sender.
   * After the sender signs, they will be
   * redirected to the next `in_person` signer. */
  readonly isInPerson?: boolean;
  /**
   * Order of the signer */
  readonly order?: number;
  /**
   * If provided, this value points signers that are assigned the same inputs and belongs to same signer group.
   * A signer group is not a Box Group. It is an entity that belongs to the template itself and can only be used
   * within Box Sign requests created from it. */
  readonly signerGroupId?: string;
  /**
   * A placeholder label for the signer set by the template creator to differentiate between signers. */
  readonly label?: string;
  /**
   * An identifier for the signer. This can be used to identify a signer within the template. */
  readonly publicId?: string;
  readonly rawData?: SerializedData;
}
export function serializeTemplateSignerRoleField(
  val: TemplateSignerRoleField,
): SerializedData {
  return val;
}
export function deserializeTemplateSignerRoleField(
  val: SerializedData,
): TemplateSignerRoleField {
  if (val == 'signer') {
    return val;
  }
  if (val == 'approver') {
    return val;
  }
  if (val == 'final_copy_reader') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize TemplateSignerRoleField",
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
    ['label']: val.label == void 0 ? void 0 : val.label,
    ['public_id']: val.publicId == void 0 ? void 0 : val.publicId,
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
  if (!(val.label == void 0) && !sdIsString(val.label)) {
    throw new BoxSdkError({
      message: 'Expecting string for "label" of type "TemplateSigner"',
    });
  }
  const label: undefined | string = val.label == void 0 ? void 0 : val.label;
  if (!(val.public_id == void 0) && !sdIsString(val.public_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "public_id" of type "TemplateSigner"',
    });
  }
  const publicId: undefined | string =
    val.public_id == void 0 ? void 0 : val.public_id;
  return {
    inputs: inputs,
    email: email,
    role: role,
    isInPerson: isInPerson,
    order: order,
    signerGroupId: signerGroupId,
    label: label,
    publicId: publicId,
  } satisfies TemplateSigner;
}
