import { serializeSignRequestCreateSignerRoleField } from './signRequestCreateSigner.generated.js';
import { deserializeSignRequestCreateSignerRoleField } from './signRequestCreateSigner.generated.js';
import { serializeSignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { deserializeSignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { serializeSignRequestSignerInput } from './signRequestSignerInput.generated.js';
import { deserializeSignRequestSignerInput } from './signRequestSignerInput.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { SignRequestCreateSignerRoleField } from './signRequestCreateSigner.generated.js';
import { SignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { SignRequestSignerInput } from './signRequestSignerInput.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SignRequestSignerSignerDecisionTypeField = 'signed' | 'declined';
export interface SignRequestSignerSignerDecisionField {
  readonly type?: SignRequestSignerSignerDecisionTypeField;
  readonly finalizedAt?: DateTime;
  readonly additionalInfo?: string;
}
export type SignRequestSigner = SignRequestCreateSigner & {
  readonly hasViewedDocument?: boolean;
  readonly signerDecision?: SignRequestSignerSignerDecisionField;
  readonly inputs?: readonly SignRequestSignerInput[];
  readonly embedUrl?: string;
  readonly iframeableEmbedUrl?: string;
};
export function serializeSignRequestSignerSignerDecisionTypeField(
  val: SignRequestSignerSignerDecisionTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestSignerSignerDecisionTypeField(
  val: any
): SignRequestSignerSignerDecisionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SignRequestSignerSignerDecisionTypeField"',
    });
  }
  if (val == 'signed') {
    return 'signed';
  }
  if (val == 'declined') {
    return 'declined';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignRequestSignerSignerDecisionField(
  val: SignRequestSignerSignerDecisionField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSignRequestSignerSignerDecisionTypeField(val.type),
    ['finalized_at']:
      val.finalizedAt == void 0 ? void 0 : serializeDateTime(val.finalizedAt),
    ['additional_info']:
      val.additionalInfo == void 0 ? void 0 : val.additionalInfo,
  };
}
export function deserializeSignRequestSignerSignerDecisionField(
  val: any
): SignRequestSignerSignerDecisionField {
  const type: undefined | SignRequestSignerSignerDecisionTypeField =
    val.type == void 0
      ? void 0
      : deserializeSignRequestSignerSignerDecisionTypeField(val.type);
  const finalizedAt: undefined | DateTime =
    val.finalized_at == void 0 ? void 0 : deserializeDateTime(val.finalized_at);
  const additionalInfo: undefined | string =
    val.additional_info == void 0 ? void 0 : val.additional_info;
  return {
    type: type,
    finalizedAt: finalizedAt,
    additionalInfo: additionalInfo,
  } satisfies SignRequestSignerSignerDecisionField;
}
export function serializeSignRequestSigner(
  val: SignRequestSigner
): SerializedData {
  const base: any = serializeSignRequestCreateSigner(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignRequestSigner"',
    });
  }
  return {
    ...base,
    ...{
      ['has_viewed_document']:
        val.hasViewedDocument == void 0 ? void 0 : val.hasViewedDocument,
      ['signer_decision']:
        val.signerDecision == void 0
          ? void 0
          : serializeSignRequestSignerSignerDecisionField(val.signerDecision),
      ['inputs']:
        val.inputs == void 0
          ? void 0
          : (val.inputs.map(function (
              item: SignRequestSignerInput
            ): SerializedData {
              return serializeSignRequestSignerInput(item);
            }) as readonly any[]),
      ['embed_url']: val.embedUrl == void 0 ? void 0 : val.embedUrl,
      ['iframeable_embed_url']:
        val.iframeableEmbedUrl == void 0 ? void 0 : val.iframeableEmbedUrl,
    },
  };
}
export function deserializeSignRequestSigner(val: any): SignRequestSigner {
  const hasViewedDocument: undefined | boolean =
    val.has_viewed_document == void 0 ? void 0 : val.has_viewed_document;
  const signerDecision: undefined | SignRequestSignerSignerDecisionField =
    val.signer_decision == void 0
      ? void 0
      : deserializeSignRequestSignerSignerDecisionField(val.signer_decision);
  const inputs: undefined | readonly SignRequestSignerInput[] =
    val.inputs == void 0
      ? void 0
      : sdIsList(val.inputs)
      ? (val.inputs.map(function (itm: SerializedData): SignRequestSignerInput {
          return deserializeSignRequestSignerInput(itm);
        }) as readonly any[])
      : [];
  const embedUrl: undefined | string =
    val.embed_url == void 0 ? void 0 : val.embed_url;
  const iframeableEmbedUrl: undefined | string =
    val.iframeable_embed_url == void 0 ? void 0 : val.iframeable_embed_url;
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
    hasViewedDocument: hasViewedDocument,
    signerDecision: signerDecision,
    inputs: inputs,
    embedUrl: embedUrl,
    iframeableEmbedUrl: iframeableEmbedUrl,
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
  } satisfies SignRequestSigner;
}
