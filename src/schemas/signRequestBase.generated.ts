import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface SignRequestBase {
  readonly isDocumentPreparationNeeded?: boolean;
  readonly redirectUrl?: string;
  readonly declinedRedirectUrl?: string;
  readonly areTextSignaturesEnabled?: boolean;
  readonly emailSubject?: string;
  readonly emailMessage?: string;
  readonly areRemindersEnabled?: boolean;
  readonly name?: string;
  readonly prefillTags?: readonly SignRequestPrefillTag[];
  readonly daysValid?: number;
  readonly externalId?: string;
  readonly isPhoneVerificationRequiredToView?: boolean;
  readonly templateId?: string;
}
export function serializeSignRequestBase(val: SignRequestBase): SerializedData {
  return {
    ['is_document_preparation_needed']:
      val.isDocumentPreparationNeeded == void 0
        ? void 0
        : val.isDocumentPreparationNeeded,
    ['redirect_url']: val.redirectUrl == void 0 ? void 0 : val.redirectUrl,
    ['declined_redirect_url']:
      val.declinedRedirectUrl == void 0 ? void 0 : val.declinedRedirectUrl,
    ['are_text_signatures_enabled']:
      val.areTextSignaturesEnabled == void 0
        ? void 0
        : val.areTextSignaturesEnabled,
    ['email_subject']: val.emailSubject == void 0 ? void 0 : val.emailSubject,
    ['email_message']: val.emailMessage == void 0 ? void 0 : val.emailMessage,
    ['are_reminders_enabled']:
      val.areRemindersEnabled == void 0 ? void 0 : val.areRemindersEnabled,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['prefill_tags']:
      val.prefillTags == void 0
        ? void 0
        : (val.prefillTags.map(function (
            item: SignRequestPrefillTag
          ): SerializedData {
            return serializeSignRequestPrefillTag(item);
          }) as readonly any[]),
    ['days_valid']: val.daysValid == void 0 ? void 0 : val.daysValid,
    ['external_id']: val.externalId == void 0 ? void 0 : val.externalId,
    ['is_phone_verification_required_to_view']:
      val.isPhoneVerificationRequiredToView == void 0
        ? void 0
        : val.isPhoneVerificationRequiredToView,
    ['template_id']: val.templateId == void 0 ? void 0 : val.templateId,
  };
}
export function deserializeSignRequestBase(
  val: SerializedData
): SignRequestBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "SignRequestBase"' });
  }
  if (
    !(val.is_document_preparation_needed == void 0) &&
    !sdIsBoolean(val.is_document_preparation_needed)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_document_preparation_needed" of type "SignRequestBase"',
    });
  }
  const isDocumentPreparationNeeded: undefined | boolean =
    val.is_document_preparation_needed == void 0
      ? void 0
      : val.is_document_preparation_needed;
  if (!(val.redirect_url == void 0) && !sdIsString(val.redirect_url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "redirect_url" of type "SignRequestBase"',
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
        'Expecting string for "declined_redirect_url" of type "SignRequestBase"',
    });
  }
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  if (
    !(val.are_text_signatures_enabled == void 0) &&
    !sdIsBoolean(val.are_text_signatures_enabled)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_text_signatures_enabled" of type "SignRequestBase"',
    });
  }
  const areTextSignaturesEnabled: undefined | boolean =
    val.are_text_signatures_enabled == void 0
      ? void 0
      : val.are_text_signatures_enabled;
  if (!(val.email_subject == void 0) && !sdIsString(val.email_subject)) {
    throw new BoxSdkError({
      message: 'Expecting string for "email_subject" of type "SignRequestBase"',
    });
  }
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  if (!(val.email_message == void 0) && !sdIsString(val.email_message)) {
    throw new BoxSdkError({
      message: 'Expecting string for "email_message" of type "SignRequestBase"',
    });
  }
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  if (
    !(val.are_reminders_enabled == void 0) &&
    !sdIsBoolean(val.are_reminders_enabled)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "are_reminders_enabled" of type "SignRequestBase"',
    });
  }
  const areRemindersEnabled: undefined | boolean =
    val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message: 'Expecting string for "name" of type "SignRequestBase"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  if (!(val.prefill_tags == void 0) && !sdIsList(val.prefill_tags)) {
    throw new BoxSdkError({
      message: 'Expecting array for "prefill_tags" of type "SignRequestBase"',
    });
  }
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
  if (!(val.days_valid == void 0) && !sdIsNumber(val.days_valid)) {
    throw new BoxSdkError({
      message: 'Expecting number for "days_valid" of type "SignRequestBase"',
    });
  }
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  if (!(val.external_id == void 0) && !sdIsString(val.external_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "external_id" of type "SignRequestBase"',
    });
  }
  const externalId: undefined | string =
    val.external_id == void 0 ? void 0 : val.external_id;
  if (
    !(val.is_phone_verification_required_to_view == void 0) &&
    !sdIsBoolean(val.is_phone_verification_required_to_view)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_phone_verification_required_to_view" of type "SignRequestBase"',
    });
  }
  const isPhoneVerificationRequiredToView: undefined | boolean =
    val.is_phone_verification_required_to_view == void 0
      ? void 0
      : val.is_phone_verification_required_to_view;
  if (!(val.template_id == void 0) && !sdIsString(val.template_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "template_id" of type "SignRequestBase"',
    });
  }
  const templateId: undefined | string =
    val.template_id == void 0 ? void 0 : val.template_id;
  return {
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
  } satisfies SignRequestBase;
}
