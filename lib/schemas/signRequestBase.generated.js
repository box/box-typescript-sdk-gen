"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestBase = serializeSignRequestBase;
exports.deserializeSignRequestBase = deserializeSignRequestBase;
const signRequestPrefillTag_generated_js_1 = require("./signRequestPrefillTag.generated.js");
const signRequestPrefillTag_generated_js_2 = require("./signRequestPrefillTag.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeSignRequestBase(val) {
    return {
        ['is_document_preparation_needed']: val.isDocumentPreparationNeeded,
        ['redirect_url']: val.redirectUrl,
        ['declined_redirect_url']: val.declinedRedirectUrl,
        ['are_text_signatures_enabled']: val.areTextSignaturesEnabled,
        ['email_subject']: val.emailSubject,
        ['email_message']: val.emailMessage,
        ['are_reminders_enabled']: val.areRemindersEnabled,
        ['name']: val.name,
        ['prefill_tags']: val.prefillTags == void 0
            ? val.prefillTags
            : val.prefillTags.map(function (item) {
                return (0, signRequestPrefillTag_generated_js_1.serializeSignRequestPrefillTag)(item);
            }),
        ['days_valid']: val.daysValid,
        ['external_id']: val.externalId,
        ['template_id']: val.templateId,
        ['external_system_name']: val.externalSystemName,
    };
}
function deserializeSignRequestBase(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SignRequestBase"' });
    }
    if (!(val.is_document_preparation_needed == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_document_preparation_needed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_document_preparation_needed" of type "SignRequestBase"',
        });
    }
    const isDocumentPreparationNeeded = val.is_document_preparation_needed == void 0
        ? void 0
        : val.is_document_preparation_needed;
    if (!(val.redirect_url == void 0) && !(0, json_js_3.sdIsString)(val.redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequestBase"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !(0, json_js_3.sdIsString)(val.declined_redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequestBase"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.are_text_signatures_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_text_signatures_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_text_signatures_enabled" of type "SignRequestBase"',
        });
    }
    const areTextSignaturesEnabled = val.are_text_signatures_enabled == void 0
        ? void 0
        : val.are_text_signatures_enabled;
    if (!(val.email_subject == void 0) && !(0, json_js_3.sdIsString)(val.email_subject)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_subject" of type "SignRequestBase"',
        });
    }
    const emailSubject = val.email_subject == void 0 ? void 0 : val.email_subject;
    if (!(val.email_message == void 0) && !(0, json_js_3.sdIsString)(val.email_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_message" of type "SignRequestBase"',
        });
    }
    const emailMessage = val.email_message == void 0 ? void 0 : val.email_message;
    if (!(val.are_reminders_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_reminders_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_reminders_enabled" of type "SignRequestBase"',
        });
    }
    const areRemindersEnabled = val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "SignRequestBase"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.prefill_tags == void 0) && !(0, json_js_4.sdIsList)(val.prefill_tags)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "prefill_tags" of type "SignRequestBase"',
        });
    }
    const prefillTags = val.prefill_tags == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.prefill_tags)
            ? val.prefill_tags.map(function (itm) {
                return (0, signRequestPrefillTag_generated_js_2.deserializeSignRequestPrefillTag)(itm);
            })
            : [];
    if (!(val.days_valid == void 0) && !(0, json_js_2.sdIsNumber)(val.days_valid)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "days_valid" of type "SignRequestBase"',
        });
    }
    const daysValid = val.days_valid == void 0 ? void 0 : val.days_valid;
    if (!(val.external_id == void 0) && !(0, json_js_3.sdIsString)(val.external_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_id" of type "SignRequestBase"',
        });
    }
    const externalId = val.external_id == void 0 ? void 0 : val.external_id;
    if (!(val.template_id == void 0) && !(0, json_js_3.sdIsString)(val.template_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "template_id" of type "SignRequestBase"',
        });
    }
    const templateId = val.template_id == void 0 ? void 0 : val.template_id;
    if (!(val.external_system_name == void 0) &&
        !(0, json_js_3.sdIsString)(val.external_system_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_system_name" of type "SignRequestBase"',
        });
    }
    const externalSystemName = val.external_system_name == void 0 ? void 0 : val.external_system_name;
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
        templateId: templateId,
        externalSystemName: externalSystemName,
    };
}
//# sourceMappingURL=signRequestBase.generated.js.map