import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeTemplateSigner } from './templateSigner.generated.js';
import { deserializeTemplateSigner } from './templateSigner.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { TemplateSigner } from './templateSigner.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type SignTemplateTypeField = 'sign-template';
export type SignTemplateAdditionalInfoNonEditableField =
  | 'email_subject'
  | 'email_message'
  | 'name'
  | 'days_valid'
  | 'signers'
  | 'source_files';
export type SignTemplateAdditionalInfoRequiredSignersField = 'email';
export interface SignTemplateAdditionalInfoRequiredField {
  readonly signers?: readonly (readonly SignTemplateAdditionalInfoRequiredSignersField[])[];
}
export interface SignTemplateAdditionalInfoField {
  readonly nonEditable?: readonly SignTemplateAdditionalInfoNonEditableField[];
  readonly required?: SignTemplateAdditionalInfoRequiredField;
}
export interface SignTemplateReadySignLinkField {
  readonly url?: string;
  readonly name?: string;
  readonly instructions?: string;
  readonly folderId?: string;
  readonly isNotificationDisabled?: boolean;
  readonly isActive?: boolean;
}
export interface SignTemplateCustomBrandingField {
  readonly companyName?: string;
  readonly logoUri?: string;
  readonly brandingColor?: string;
  readonly emailFooterText?: string;
}
export interface SignTemplate {
  readonly type?: SignTemplateTypeField;
  readonly id?: string;
  readonly name?: string;
  readonly emailSubject?: string;
  readonly emailMessage?: string;
  readonly daysValid?: number;
  readonly parentFolder?: FolderMini;
  readonly sourceFiles?: readonly FileMini[];
  readonly areFieldsLocked?: boolean;
  readonly areOptionsLocked?: boolean;
  readonly areRecipientsLocked?: boolean;
  readonly areEmailSettingsLocked?: boolean;
  readonly areFilesLocked?: boolean;
  readonly signers?: readonly TemplateSigner[];
  readonly additionalInfo?: SignTemplateAdditionalInfoField;
  readonly readySignLink?: SignTemplateReadySignLinkField;
  readonly customBranding?: SignTemplateCustomBrandingField;
}
export function serializeSignTemplateTypeField(
  val: SignTemplateTypeField
): SerializedData {
  return val;
}
export function deserializeSignTemplateTypeField(
  val: any
): SignTemplateTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "SignTemplateTypeField"',
    });
  }
  if (val == 'sign-template') {
    return 'sign-template';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignTemplateAdditionalInfoNonEditableField(
  val: SignTemplateAdditionalInfoNonEditableField
): SerializedData {
  return val;
}
export function deserializeSignTemplateAdditionalInfoNonEditableField(
  val: any
): SignTemplateAdditionalInfoNonEditableField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SignTemplateAdditionalInfoNonEditableField"',
    });
  }
  if (val == 'email_subject') {
    return 'email_subject';
  }
  if (val == 'email_message') {
    return 'email_message';
  }
  if (val == 'name') {
    return 'name';
  }
  if (val == 'days_valid') {
    return 'days_valid';
  }
  if (val == 'signers') {
    return 'signers';
  }
  if (val == 'source_files') {
    return 'source_files';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignTemplateAdditionalInfoRequiredSignersField(
  val: SignTemplateAdditionalInfoRequiredSignersField
): SerializedData {
  return val;
}
export function deserializeSignTemplateAdditionalInfoRequiredSignersField(
  val: any
): SignTemplateAdditionalInfoRequiredSignersField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "SignTemplateAdditionalInfoRequiredSignersField"',
    });
  }
  if (val == 'email') {
    return 'email';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeSignTemplateAdditionalInfoRequiredField(
  val: SignTemplateAdditionalInfoRequiredField
): SerializedData {
  return {
    ['signers']:
      val.signers == void 0
        ? void 0
        : (val.signers.map(function (
            item: readonly SignTemplateAdditionalInfoRequiredSignersField[]
          ): SerializedData {
            return item.map(function (
              item: SignTemplateAdditionalInfoRequiredSignersField
            ): SerializedData {
              return serializeSignTemplateAdditionalInfoRequiredSignersField(
                item
              );
            }) as readonly any[];
          }) as readonly any[]),
  };
}
export function deserializeSignTemplateAdditionalInfoRequiredField(
  val: any
): SignTemplateAdditionalInfoRequiredField {
  const signers:
    | undefined
    | readonly (readonly SignTemplateAdditionalInfoRequiredSignersField[])[] =
    val.signers == void 0
      ? void 0
      : sdIsList(val.signers)
      ? (val.signers.map(function (
          itm: SerializedData
        ): readonly SignTemplateAdditionalInfoRequiredSignersField[] {
          return sdIsList(itm)
            ? (itm.map(function (
                itm: SerializedData
              ): SignTemplateAdditionalInfoRequiredSignersField {
                return deserializeSignTemplateAdditionalInfoRequiredSignersField(
                  itm
                );
              }) as readonly any[])
            : [];
        }) as readonly any[])
      : [];
  return { signers: signers } satisfies SignTemplateAdditionalInfoRequiredField;
}
export function serializeSignTemplateAdditionalInfoField(
  val: SignTemplateAdditionalInfoField
): SerializedData {
  return {
    ['non_editable']:
      val.nonEditable == void 0
        ? void 0
        : (val.nonEditable.map(function (
            item: SignTemplateAdditionalInfoNonEditableField
          ): SerializedData {
            return serializeSignTemplateAdditionalInfoNonEditableField(item);
          }) as readonly any[]),
    ['required']:
      val.required == void 0
        ? void 0
        : serializeSignTemplateAdditionalInfoRequiredField(val.required),
  };
}
export function deserializeSignTemplateAdditionalInfoField(
  val: any
): SignTemplateAdditionalInfoField {
  const nonEditable:
    | undefined
    | readonly SignTemplateAdditionalInfoNonEditableField[] =
    val.non_editable == void 0
      ? void 0
      : sdIsList(val.non_editable)
      ? (val.non_editable.map(function (
          itm: SerializedData
        ): SignTemplateAdditionalInfoNonEditableField {
          return deserializeSignTemplateAdditionalInfoNonEditableField(itm);
        }) as readonly any[])
      : [];
  const required: undefined | SignTemplateAdditionalInfoRequiredField =
    val.required == void 0
      ? void 0
      : deserializeSignTemplateAdditionalInfoRequiredField(val.required);
  return {
    nonEditable: nonEditable,
    required: required,
  } satisfies SignTemplateAdditionalInfoField;
}
export function serializeSignTemplateReadySignLinkField(
  val: SignTemplateReadySignLinkField
): SerializedData {
  return {
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['instructions']: val.instructions == void 0 ? void 0 : val.instructions,
    ['folder_id']: val.folderId == void 0 ? void 0 : val.folderId,
    ['is_notification_disabled']:
      val.isNotificationDisabled == void 0
        ? void 0
        : val.isNotificationDisabled,
    ['is_active']: val.isActive == void 0 ? void 0 : val.isActive,
  };
}
export function deserializeSignTemplateReadySignLinkField(
  val: any
): SignTemplateReadySignLinkField {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const instructions: undefined | string =
    val.instructions == void 0 ? void 0 : val.instructions;
  const folderId: undefined | string =
    val.folder_id == void 0 ? void 0 : val.folder_id;
  const isNotificationDisabled: undefined | boolean =
    val.is_notification_disabled == void 0
      ? void 0
      : val.is_notification_disabled;
  const isActive: undefined | boolean =
    val.is_active == void 0 ? void 0 : val.is_active;
  return {
    url: url,
    name: name,
    instructions: instructions,
    folderId: folderId,
    isNotificationDisabled: isNotificationDisabled,
    isActive: isActive,
  } satisfies SignTemplateReadySignLinkField;
}
export function serializeSignTemplateCustomBrandingField(
  val: SignTemplateCustomBrandingField
): SerializedData {
  return {
    ['company_name']: val.companyName == void 0 ? void 0 : val.companyName,
    ['logo_uri']: val.logoUri == void 0 ? void 0 : val.logoUri,
    ['branding_color']:
      val.brandingColor == void 0 ? void 0 : val.brandingColor,
    ['email_footer_text']:
      val.emailFooterText == void 0 ? void 0 : val.emailFooterText,
  };
}
export function deserializeSignTemplateCustomBrandingField(
  val: any
): SignTemplateCustomBrandingField {
  const companyName: undefined | string =
    val.company_name == void 0 ? void 0 : val.company_name;
  const logoUri: undefined | string =
    val.logo_uri == void 0 ? void 0 : val.logo_uri;
  const brandingColor: undefined | string =
    val.branding_color == void 0 ? void 0 : val.branding_color;
  const emailFooterText: undefined | string =
    val.email_footer_text == void 0 ? void 0 : val.email_footer_text;
  return {
    companyName: companyName,
    logoUri: logoUri,
    brandingColor: brandingColor,
    emailFooterText: emailFooterText,
  } satisfies SignTemplateCustomBrandingField;
}
export function serializeSignTemplate(val: SignTemplate): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeSignTemplateTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['email_subject']: val.emailSubject == void 0 ? void 0 : val.emailSubject,
    ['email_message']: val.emailMessage == void 0 ? void 0 : val.emailMessage,
    ['days_valid']: val.daysValid == void 0 ? void 0 : val.daysValid,
    ['parent_folder']:
      val.parentFolder == void 0
        ? void 0
        : serializeFolderMini(val.parentFolder),
    ['source_files']:
      val.sourceFiles == void 0
        ? void 0
        : (val.sourceFiles.map(function (item: FileMini): SerializedData {
            return serializeFileMini(item);
          }) as readonly any[]),
    ['are_fields_locked']:
      val.areFieldsLocked == void 0 ? void 0 : val.areFieldsLocked,
    ['are_options_locked']:
      val.areOptionsLocked == void 0 ? void 0 : val.areOptionsLocked,
    ['are_recipients_locked']:
      val.areRecipientsLocked == void 0 ? void 0 : val.areRecipientsLocked,
    ['are_email_settings_locked']:
      val.areEmailSettingsLocked == void 0
        ? void 0
        : val.areEmailSettingsLocked,
    ['are_files_locked']:
      val.areFilesLocked == void 0 ? void 0 : val.areFilesLocked,
    ['signers']:
      val.signers == void 0
        ? void 0
        : (val.signers.map(function (item: TemplateSigner): SerializedData {
            return serializeTemplateSigner(item);
          }) as readonly any[]),
    ['additional_info']:
      val.additionalInfo == void 0
        ? void 0
        : serializeSignTemplateAdditionalInfoField(val.additionalInfo),
    ['ready_sign_link']:
      val.readySignLink == void 0
        ? void 0
        : serializeSignTemplateReadySignLinkField(val.readySignLink),
    ['custom_branding']:
      val.customBranding == void 0
        ? void 0
        : serializeSignTemplateCustomBrandingField(val.customBranding),
  };
}
export function deserializeSignTemplate(val: any): SignTemplate {
  const type: undefined | SignTemplateTypeField =
    val.type == void 0 ? void 0 : deserializeSignTemplateTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const parentFolder: undefined | FolderMini =
    val.parent_folder == void 0
      ? void 0
      : deserializeFolderMini(val.parent_folder);
  const sourceFiles: undefined | readonly FileMini[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): FileMini {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  const areFieldsLocked: undefined | boolean =
    val.are_fields_locked == void 0 ? void 0 : val.are_fields_locked;
  const areOptionsLocked: undefined | boolean =
    val.are_options_locked == void 0 ? void 0 : val.are_options_locked;
  const areRecipientsLocked: undefined | boolean =
    val.are_recipients_locked == void 0 ? void 0 : val.are_recipients_locked;
  const areEmailSettingsLocked: undefined | boolean =
    val.are_email_settings_locked == void 0
      ? void 0
      : val.are_email_settings_locked;
  const areFilesLocked: undefined | boolean =
    val.are_files_locked == void 0 ? void 0 : val.are_files_locked;
  const signers: undefined | readonly TemplateSigner[] =
    val.signers == void 0
      ? void 0
      : sdIsList(val.signers)
      ? (val.signers.map(function (itm: SerializedData): TemplateSigner {
          return deserializeTemplateSigner(itm);
        }) as readonly any[])
      : [];
  const additionalInfo: undefined | SignTemplateAdditionalInfoField =
    val.additional_info == void 0
      ? void 0
      : deserializeSignTemplateAdditionalInfoField(val.additional_info);
  const readySignLink: undefined | SignTemplateReadySignLinkField =
    val.ready_sign_link == void 0
      ? void 0
      : deserializeSignTemplateReadySignLinkField(val.ready_sign_link);
  const customBranding: undefined | SignTemplateCustomBrandingField =
    val.custom_branding == void 0
      ? void 0
      : deserializeSignTemplateCustomBrandingField(val.custom_branding);
  return {
    type: type,
    id: id,
    name: name,
    emailSubject: emailSubject,
    emailMessage: emailMessage,
    daysValid: daysValid,
    parentFolder: parentFolder,
    sourceFiles: sourceFiles,
    areFieldsLocked: areFieldsLocked,
    areOptionsLocked: areOptionsLocked,
    areRecipientsLocked: areRecipientsLocked,
    areEmailSettingsLocked: areEmailSettingsLocked,
    areFilesLocked: areFilesLocked,
    signers: signers,
    additionalInfo: additionalInfo,
    readySignLink: readySignLink,
    customBranding: customBranding,
  } satisfies SignTemplate;
}
