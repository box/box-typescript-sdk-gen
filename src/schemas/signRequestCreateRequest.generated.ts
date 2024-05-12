import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { serializeSignRequestBase } from './signRequestBase.generated.js';
import { deserializeSignRequestBase } from './signRequestBase.generated.js';
import { serializeFileBase } from './fileBase.generated.js';
import { deserializeFileBase } from './fileBase.generated.js';
import { serializeSignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { deserializeSignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SignRequestBase } from './signRequestBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { SignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SignRequestCreateRequestSignatureColorField =
  | 'blue'
  | 'black'
  | 'red';
export type SignRequestCreateRequest = SignRequestBase & {
  readonly sourceFiles?: readonly FileBase[];
  readonly signatureColor?: SignRequestCreateRequestSignatureColorField;
  readonly signers: readonly SignRequestCreateSigner[];
  readonly parentFolder?: FolderMini;
};
export function serializeSignRequestCreateRequestSignatureColorField(
  val: SignRequestCreateRequestSignatureColorField
): SerializedData {
  return val;
}
export function deserializeSignRequestCreateRequestSignatureColorField(
  val: any
): SignRequestCreateRequestSignatureColorField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SignRequestCreateRequestSignatureColorField"',
    });
  }
  if (val == 'blue') {
    return 'blue';
  }
  if (val == 'black') {
    return 'black';
  }
  if (val == 'red') {
    return 'red';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignRequestCreateRequest(
  val: SignRequestCreateRequest
): SerializedData {
  const base: any = serializeSignRequestBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignRequestCreateRequest"',
    });
  }
  return {
    ...base,
    ...{
      ['source_files']:
        val.sourceFiles == void 0
          ? void 0
          : (val.sourceFiles.map(function (item: FileBase): SerializedData {
              return serializeFileBase(item);
            }) as readonly any[]),
      ['signature_color']:
        val.signatureColor == void 0
          ? void 0
          : serializeSignRequestCreateRequestSignatureColorField(
              val.signatureColor
            ),
      ['signers']: val.signers.map(function (
        item: SignRequestCreateSigner
      ): SerializedData {
        return serializeSignRequestCreateSigner(item);
      }) as readonly any[],
      ['parent_folder']:
        val.parentFolder == void 0
          ? void 0
          : serializeFolderMini(val.parentFolder),
    },
  };
}
export function deserializeSignRequestCreateRequest(
  val: any
): SignRequestCreateRequest {
  const sourceFiles: undefined | readonly FileBase[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): FileBase {
          return deserializeFileBase(itm);
        }) as readonly any[])
      : [];
  const signatureColor:
    | undefined
    | SignRequestCreateRequestSignatureColorField =
    val.signature_color == void 0
      ? void 0
      : deserializeSignRequestCreateRequestSignatureColorField(
          val.signature_color
        );
  const signers: readonly SignRequestCreateSigner[] = sdIsList(val.signers)
    ? (val.signers.map(function (itm: SerializedData): SignRequestCreateSigner {
        return deserializeSignRequestCreateSigner(itm);
      }) as readonly any[])
    : [];
  const parentFolder: undefined | FolderMini =
    val.parent_folder == void 0
      ? void 0
      : deserializeFolderMini(val.parent_folder);
  const isDocumentPreparationNeeded: undefined | boolean =
    val.is_document_preparation_needed == void 0
      ? void 0
      : val.is_document_preparation_needed;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const areTextSignaturesEnabled: undefined | boolean =
    val.are_text_signatures_enabled == void 0
      ? void 0
      : val.are_text_signatures_enabled;
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  const areRemindersEnabled: undefined | boolean =
    val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const prefillTags: undefined | readonly SignRequestPrefillTag[] =
    val.prefill_tags == void 0
      ? void 0
      : sdIsList(val.prefill_tags)
      ? (val.prefill_tags.map(function (
          itm: SerializedData
        ): SignRequestPrefillTag {
          return deserializeSignRequestPrefillTag(itm);
        }) as readonly any[])
      : [];
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const externalId: undefined | string =
    val.external_id == void 0 ? void 0 : val.external_id;
  const isPhoneVerificationRequiredToView: undefined | boolean =
    val.is_phone_verification_required_to_view == void 0
      ? void 0
      : val.is_phone_verification_required_to_view;
  const templateId: undefined | string =
    val.template_id == void 0 ? void 0 : val.template_id;
  return {
    sourceFiles: sourceFiles,
    signatureColor: signatureColor,
    signers: signers,
    parentFolder: parentFolder,
    isDocumentPreparationNeeded: isDocumentPreparationNeeded,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    areTextSignaturesEnabled: areTextSignaturesEnabled,
    emailSubject: emailSubject,
    emailMessage: emailMessage,
    areRemindersEnabled: areRemindersEnabled,
    name: name,
    prefillTags: prefillTags,
    daysValid: daysValid,
    externalId: externalId,
    isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView,
    templateId: templateId,
  } satisfies SignRequestCreateRequest;
}
