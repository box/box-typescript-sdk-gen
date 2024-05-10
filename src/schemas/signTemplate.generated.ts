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
  val: SerializedData
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
  val: SerializedData
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
  val: SerializedData
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
  val: SerializedData
): SignTemplateAdditionalInfoRequiredField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignTemplateAdditionalInfoRequiredField"',
    });
  }
  if (!(val.signers == void 0) && !sdIsList(val.signers)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "signers" of type "SignTemplateAdditionalInfoRequiredField"',
    });
  }
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
  val: SerializedData
): SignTemplateAdditionalInfoField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignTemplateAdditionalInfoField"',
    });
  }
  if (!(val.non_editable == void 0) && !sdIsList(val.non_editable)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "non_editable" of type "SignTemplateAdditionalInfoField"',
    });
  }
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
  val: SerializedData
): SignTemplateReadySignLinkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignTemplateReadySignLinkField"',
    });
  }
  if (!(val.url == void 0) && !sdIsString(val.url)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "url" of type "SignTemplateReadySignLinkField"',
    });
  }
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "SignTemplateReadySignLinkField"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.instructions == void 0) && !sdIsString(val.instructions)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "instructions" of type "SignTemplateReadySignLinkField"',
    });
  }
  const instructions: undefined | string =
    val.instructions == void 0 ? void 0 : val.instructions;
  if (!(val.folder_id == void 0) && !sdIsString(val.folder_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "folder_id" of type "SignTemplateReadySignLinkField"',
    });
  }
  const folderId: undefined | string =
    val.folder_id == void 0 ? void 0 : val.folder_id;
  if (
    !(val.is_notification_disabled == void 0) &&
    !sdIsBoolean(val.is_notification_disabled)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_notification_disabled" of type "SignTemplateReadySignLinkField"',
    });
  }
  const isNotificationDisabled: undefined | boolean =
    val.is_notification_disabled == void 0
      ? void 0
      : val.is_notification_disabled;
  if (!(val.is_active == void 0) && !sdIsBoolean(val.is_active)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_active" of type "SignTemplateReadySignLinkField"',
    });
  }
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
  val: SerializedData
): SignTemplateCustomBrandingField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "SignTemplateCustomBrandingField"',
    });
  }
  if (!(val.company_name == void 0) && !sdIsString(val.company_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "company_name" of type "SignTemplateCustomBrandingField"',
    });
  }
  const companyName: undefined | string =
    val.company_name == void 0 ? void 0 : val.company_name;
  if (!(val.logo_uri == void 0) && !sdIsString(val.logo_uri)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "logo_uri" of type "SignTemplateCustomBrandingField"',
    });
  }
  const logoUri: undefined | string =
    val.logo_uri == void 0 ? void 0 : val.logo_uri;
  if (!(val.branding_color == void 0) && !sdIsString(val.branding_color)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "branding_color" of type "SignTemplateCustomBrandingField"',
    });
  }
  const brandingColor: undefined | string =
    val.branding_color == void 0 ? void 0 : val.branding_color;
  if (
    !(val.email_footer_text == void 0) &&
    !sdIsString(val.email_footer_text)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "email_footer_text" of type "SignTemplateCustomBrandingField"',
    });
  }
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
export function deserializeSignTemplate(val: SerializedData): SignTemplate {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "SignTemplate"' });
  }
  const type: undefined | SignTemplateTypeField =
    val.type == void 0 ? void 0 : deserializeSignTemplateTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "SignTemplate"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "SignTemplate"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.email_subject == void 0) && !sdIsString(val.email_subject)) {
    throw new BoxSdkError({
      message: 'Expecting string for "email_subject" of type "SignTemplate"',
    });
  }
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  if (!(val.email_message == void 0) && !sdIsString(val.email_message)) {
    throw new BoxSdkError({
      message: 'Expecting string for "email_message" of type "SignTemplate"',
    });
  }
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  if (!(val.days_valid == void 0) && !sdIsNumber(val.days_valid)) {
    throw new BoxSdkError({
      message: 'Expecting number for "days_valid" of type "SignTemplate"',
    });
  }
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const parentFolder: undefined | FolderMini =
    val.parent_folder == void 0
      ? void 0
      : deserializeFolderMini(val.parent_folder);
  if (!(val.source_files == void 0) && !sdIsList(val.source_files)) {
    throw new BoxSdkError({
      message: 'Expecting array for "source_files" of type "SignTemplate"',
    });
  }
  const sourceFiles: undefined | readonly FileMini[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): FileMini {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  if (
    !(val.are_fields_locked == void 0) &&
    !sdIsBoolean(val.are_fields_locked)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_fields_locked" of type "SignTemplate"',
    });
  }
  const areFieldsLocked: undefined | boolean =
    val.are_fields_locked == void 0 ? void 0 : val.are_fields_locked;
  if (
    !(val.are_options_locked == void 0) &&
    !sdIsBoolean(val.are_options_locked)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_options_locked" of type "SignTemplate"',
    });
  }
  const areOptionsLocked: undefined | boolean =
    val.are_options_locked == void 0 ? void 0 : val.are_options_locked;
  if (
    !(val.are_recipients_locked == void 0) &&
    !sdIsBoolean(val.are_recipients_locked)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_recipients_locked" of type "SignTemplate"',
    });
  }
  const areRecipientsLocked: undefined | boolean =
    val.are_recipients_locked == void 0 ? void 0 : val.are_recipients_locked;
  if (
    !(val.are_email_settings_locked == void 0) &&
    !sdIsBoolean(val.are_email_settings_locked)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_email_settings_locked" of type "SignTemplate"',
    });
  }
  const areEmailSettingsLocked: undefined | boolean =
    val.are_email_settings_locked == void 0
      ? void 0
      : val.are_email_settings_locked;
  if (!(val.are_files_locked == void 0) && !sdIsBoolean(val.are_files_locked)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_files_locked" of type "SignTemplate"',
    });
  }
  const areFilesLocked: undefined | boolean =
    val.are_files_locked == void 0 ? void 0 : val.are_files_locked;
  if (!(val.signers == void 0) && !sdIsList(val.signers)) {
    throw new BoxSdkError({
      message: 'Expecting array for "signers" of type "SignTemplate"',
    });
  }
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
