import { serializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { SignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
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
export function deserializeSignRequestBase(val: any): SignRequestBase {
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
