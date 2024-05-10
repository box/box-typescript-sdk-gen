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
  val: any
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
  val: any
): SignRequestCreateSigner {
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const role: undefined | SignRequestCreateSignerRoleField =
    val.role == void 0
      ? void 0
      : deserializeSignRequestCreateSignerRoleField(val.role);
  const isInPerson: undefined | boolean =
    val.is_in_person == void 0 ? void 0 : val.is_in_person;
  const order: undefined | number = val.order == void 0 ? void 0 : val.order;
  const embedUrlExternalUserId: undefined | string =
    val.embed_url_external_user_id == void 0
      ? void 0
      : val.embed_url_external_user_id;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const loginRequired: undefined | boolean =
    val.login_required == void 0 ? void 0 : val.login_required;
  const verificationPhoneNumber: undefined | string =
    val.verification_phone_number == void 0
      ? void 0
      : val.verification_phone_number;
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
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
