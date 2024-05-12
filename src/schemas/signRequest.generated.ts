import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { serializeSignRequestBase } from './signRequestBase.generated.js';
import { deserializeSignRequestBase } from './signRequestBase.generated.js';
import { serializeFileBase } from './fileBase.generated.js';
import { deserializeFileBase } from './fileBase.generated.js';
import { serializeSignRequestSigner } from './signRequestSigner.generated.js';
import { deserializeSignRequestSigner } from './signRequestSigner.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SignRequestBase } from './signRequestBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { SignRequestSigner } from './signRequestSigner.generated.js';
import { FileMini } from './fileMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SignRequestTypeField = 'sign-request';
export type SignRequestStatusField =
  | 'converting'
  | 'created'
  | 'sent'
  | 'viewed'
  | 'signed'
  | 'cancelled'
  | 'declined'
  | 'error_converting'
  | 'error_sending'
  | 'expired'
  | 'finalizing'
  | 'error_finalizing';
export interface SignRequestSignFilesField {
  readonly files?: readonly FileMini[];
  readonly isReadyForDownload?: boolean;
}
export type SignRequest = SignRequestBase & {
  readonly type?: SignRequestTypeField;
  readonly sourceFiles?: readonly FileBase[];
  readonly signers?: readonly SignRequestSigner[];
  readonly signatureColor?: string;
  readonly id?: string;
  readonly prepareUrl?: string;
  readonly signingLog?: FileMini;
  readonly status?: SignRequestStatusField;
  readonly signFiles?: SignRequestSignFilesField;
  readonly autoExpireAt?: DateTime;
  readonly parentFolder?: FolderMini;
};
export function serializeSignRequestTypeField(
  val: SignRequestTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestTypeField(
  val: any
): SignRequestTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SignRequestTypeField"',
    });
  }
  if (val == 'sign-request') {
    return 'sign-request';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignRequestStatusField(
  val: SignRequestStatusField
): SerializedData {
  return val;
}
export function deserializeSignRequestStatusField(
  val: any
): SignRequestStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SignRequestStatusField"',
    });
  }
  if (val == 'converting') {
    return 'converting';
  }
  if (val == 'created') {
    return 'created';
  }
  if (val == 'sent') {
    return 'sent';
  }
  if (val == 'viewed') {
    return 'viewed';
  }
  if (val == 'signed') {
    return 'signed';
  }
  if (val == 'cancelled') {
    return 'cancelled';
  }
  if (val == 'declined') {
    return 'declined';
  }
  if (val == 'error_converting') {
    return 'error_converting';
  }
  if (val == 'error_sending') {
    return 'error_sending';
  }
  if (val == 'expired') {
    return 'expired';
  }
  if (val == 'finalizing') {
    return 'finalizing';
  }
  if (val == 'error_finalizing') {
    return 'error_finalizing';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignRequestSignFilesField(
  val: SignRequestSignFilesField
): SerializedData {
  return {
    ['files']:
      val.files == void 0
        ? void 0
        : (val.files.map(function (item: FileMini): SerializedData {
            return serializeFileMini(item);
          }) as readonly any[]),
    ['is_ready_for_download']:
      val.isReadyForDownload == void 0 ? void 0 : val.isReadyForDownload,
  };
}
export function deserializeSignRequestSignFilesField(
  val: any
): SignRequestSignFilesField {
  const files: undefined | readonly FileMini[] =
    val.files == void 0
      ? void 0
      : sdIsList(val.files)
      ? (val.files.map(function (itm: SerializedData): FileMini {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  const isReadyForDownload: undefined | boolean =
    val.is_ready_for_download == void 0 ? void 0 : val.is_ready_for_download;
  return {
    files: files,
    isReadyForDownload: isReadyForDownload,
  } satisfies SignRequestSignFilesField;
}
export function serializeSignRequest(val: SignRequest): SerializedData {
  const base: any = serializeSignRequestBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "SignRequest"' });
  }
  return {
    ...base,
    ...{
      ['type']:
        val.type == void 0 ? void 0 : serializeSignRequestTypeField(val.type),
      ['source_files']:
        val.sourceFiles == void 0
          ? void 0
          : (val.sourceFiles.map(function (item: FileBase): SerializedData {
              return serializeFileBase(item);
            }) as readonly any[]),
      ['signers']:
        val.signers == void 0
          ? void 0
          : (val.signers.map(function (
              item: SignRequestSigner
            ): SerializedData {
              return serializeSignRequestSigner(item);
            }) as readonly any[]),
      ['signature_color']:
        val.signatureColor == void 0 ? void 0 : val.signatureColor,
      ['id']: val.id == void 0 ? void 0 : val.id,
      ['prepare_url']: val.prepareUrl == void 0 ? void 0 : val.prepareUrl,
      ['signing_log']:
        val.signingLog == void 0 ? void 0 : serializeFileMini(val.signingLog),
      ['status']:
        val.status == void 0
          ? void 0
          : serializeSignRequestStatusField(val.status),
      ['sign_files']:
        val.signFiles == void 0
          ? void 0
          : serializeSignRequestSignFilesField(val.signFiles),
      ['auto_expire_at']:
        val.autoExpireAt == void 0
          ? void 0
          : serializeDateTime(val.autoExpireAt),
      ['parent_folder']:
        val.parentFolder == void 0
          ? void 0
          : serializeFolderMini(val.parentFolder),
    },
  };
}
export function deserializeSignRequest(val: any): SignRequest {
  const type: undefined | SignRequestTypeField =
    val.type == void 0 ? void 0 : deserializeSignRequestTypeField(val.type);
  const sourceFiles: undefined | readonly FileBase[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): FileBase {
          return deserializeFileBase(itm);
        }) as readonly any[])
      : [];
  const signers: undefined | readonly SignRequestSigner[] =
    val.signers == void 0
      ? void 0
      : sdIsList(val.signers)
      ? (val.signers.map(function (itm: SerializedData): SignRequestSigner {
          return deserializeSignRequestSigner(itm);
        }) as readonly any[])
      : [];
  const signatureColor: undefined | string =
    val.signature_color == void 0 ? void 0 : val.signature_color;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const prepareUrl: undefined | string =
    val.prepare_url == void 0 ? void 0 : val.prepare_url;
  const signingLog: undefined | FileMini =
    val.signing_log == void 0 ? void 0 : deserializeFileMini(val.signing_log);
  const status: undefined | SignRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeSignRequestStatusField(val.status);
  const signFiles: undefined | SignRequestSignFilesField =
    val.sign_files == void 0
      ? void 0
      : deserializeSignRequestSignFilesField(val.sign_files);
  const autoExpireAt: undefined | DateTime =
    val.auto_expire_at == void 0
      ? void 0
      : deserializeDateTime(val.auto_expire_at);
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
    type: type,
    sourceFiles: sourceFiles,
    signers: signers,
    signatureColor: signatureColor,
    id: id,
    prepareUrl: prepareUrl,
    signingLog: signingLog,
    status: status,
    signFiles: signFiles,
    autoExpireAt: autoExpireAt,
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
  } satisfies SignRequest;
}
