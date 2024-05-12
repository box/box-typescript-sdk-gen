import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SignRequestCreateSignerRoleField =
  | 'signer'
  | 'approver'
  | 'final_copy_reader';
export interface SignRequestCreateSigner {
  readonly email?: string;
  readonly role?: SignRequestCreateSignerRoleField;
  readonly isInPerson?: boolean;
  readonly order?: number;
  readonly embedUrlExternalUserId?: string;
  readonly redirectUrl?: string;
  readonly declinedRedirectUrl?: string;
  readonly loginRequired?: boolean;
  readonly verificationPhoneNumber?: string;
  readonly password?: string;
  readonly signerGroupId?: string;
}
export function serializeSignRequestCreateSignerRoleField(
  val: SignRequestCreateSignerRoleField
): SerializedData {
  return val;
}
export function deserializeSignRequestCreateSignerRoleField(
  val: SerializedData
): SignRequestCreateSignerRoleField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SignRequestCreateSignerRoleField"',
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
export function serializeSignRequestCreateSigner(
  val: SignRequestCreateSigner
): SerializedData {
  return {
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeSignRequestCreateSignerRoleField(val.role),
    ['is_in_person']: val.isInPerson == void 0 ? void 0 : val.isInPerson,
    ['order']: val.order == void 0 ? void 0 : val.order,
    ['embed_url_external_user_id']:
      val.embedUrlExternalUserId == void 0
        ? void 0
        : val.embedUrlExternalUserId,
    ['redirect_url']: val.redirectUrl == void 0 ? void 0 : val.redirectUrl,
    ['declined_redirect_url']:
      val.declinedRedirectUrl == void 0 ? void 0 : val.declinedRedirectUrl,
    ['login_required']:
      val.loginRequired == void 0 ? void 0 : val.loginRequired,
    ['verification_phone_number']:
      val.verificationPhoneNumber == void 0
        ? void 0
        : val.verificationPhoneNumber,
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['signer_group_id']:
      val.signerGroupId == void 0 ? void 0 : val.signerGroupId,
  };
}
export function deserializeSignRequestCreateSigner(
  val: SerializedData
): SignRequestCreateSigner {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignRequestCreateSigner"',
    });
  }
  if (!(val.email == void 0) && !sdIsString(val.email)) {
    throw new BoxSdkError({
      message: 'Expecting string for "email" of type "SignRequestCreateSigner"',
    });
  }
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const role: undefined | SignRequestCreateSignerRoleField =
    val.role == void 0
      ? void 0
      : deserializeSignRequestCreateSignerRoleField(val.role);
  if (!(val.is_in_person == void 0) && !sdIsBoolean(val.is_in_person)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_in_person" of type "SignRequestCreateSigner"',
    });
  }
  const isInPerson: undefined | boolean =
    val.is_in_person == void 0 ? void 0 : val.is_in_person;
  if (!(val.order == void 0) && !sdIsNumber(val.order)) {
    throw new BoxSdkError({
      message: 'Expecting number for "order" of type "SignRequestCreateSigner"',
    });
  }
  const order: undefined | number = val.order == void 0 ? void 0 : val.order;
  if (
    !(val.embed_url_external_user_id == void 0) &&
    !sdIsString(val.embed_url_external_user_id)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "embed_url_external_user_id" of type "SignRequestCreateSigner"',
    });
  }
  const embedUrlExternalUserId: undefined | string =
    val.embed_url_external_user_id == void 0
      ? void 0
      : val.embed_url_external_user_id;
  if (!(val.redirect_url == void 0) && !sdIsString(val.redirect_url)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "redirect_url" of type "SignRequestCreateSigner"',
    });
  }
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  if (
    !(val.declined_redirect_url == void 0) &&
    !sdIsString(val.declined_redirect_url)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "declined_redirect_url" of type "SignRequestCreateSigner"',
    });
  }
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  if (!(val.login_required == void 0) && !sdIsBoolean(val.login_required)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "login_required" of type "SignRequestCreateSigner"',
    });
  }
  const loginRequired: undefined | boolean =
    val.login_required == void 0 ? void 0 : val.login_required;
  if (
    !(val.verification_phone_number == void 0) &&
    !sdIsString(val.verification_phone_number)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "verification_phone_number" of type "SignRequestCreateSigner"',
    });
  }
  const verificationPhoneNumber: undefined | string =
    val.verification_phone_number == void 0
      ? void 0
      : val.verification_phone_number;
  if (!(val.password == void 0) && !sdIsString(val.password)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "password" of type "SignRequestCreateSigner"',
    });
  }
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  if (!(val.signer_group_id == void 0) && !sdIsString(val.signer_group_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "signer_group_id" of type "SignRequestCreateSigner"',
    });
  }
  const signerGroupId: undefined | string =
    val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
  return {
    email: email,
    role: role,
    isInPerson: isInPerson,
    order: order,
    embedUrlExternalUserId: embedUrlExternalUserId,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    loginRequired: loginRequired,
    verificationPhoneNumber: verificationPhoneNumber,
    password: password,
    signerGroupId: signerGroupId,
  } satisfies SignRequestCreateSigner;
}
