"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestCreateRequestSignatureColorField = serializeSignRequestCreateRequestSignatureColorField;
exports.deserializeSignRequestCreateRequestSignatureColorField = deserializeSignRequestCreateRequestSignatureColorField;
exports.serializeSignRequestCreateRequest = serializeSignRequestCreateRequest;
exports.deserializeSignRequestCreateRequest = deserializeSignRequestCreateRequest;
const signRequestPrefillTag_generated_js_1 = require("./signRequestPrefillTag.generated.js");
const signRequestBase_generated_js_1 = require("./signRequestBase.generated.js");
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileBase_generated_js_2 = require("./fileBase.generated.js");
const signRequestCreateSigner_generated_js_1 = require("./signRequestCreateSigner.generated.js");
const signRequestCreateSigner_generated_js_2 = require("./signRequestCreateSigner.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeSignRequestCreateRequestSignatureColorField(val) {
    return val;
}
function deserializeSignRequestCreateRequestSignatureColorField(val) {
    if (val == 'blue') {
        return val;
    }
    if (val == 'black') {
        return val;
    }
    if (val == 'red') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignRequestCreateRequestSignatureColorField",
    });
}
function serializeSignRequestCreateRequest(val) {
    const base = (0, signRequestBase_generated_js_1.serializeSignRequestBase)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestCreateRequest"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['source_files']: val.sourceFiles == void 0
            ? val.sourceFiles
            : val.sourceFiles.map(function (item) {
                return (0, fileBase_generated_js_1.serializeFileBase)(item);
            }),
        ['signature_color']: val.signatureColor == void 0
            ? val.signatureColor
            : serializeSignRequestCreateRequestSignatureColorField(val.signatureColor),
        ['signers']: val.signers.map(function (item) {
            return (0, signRequestCreateSigner_generated_js_1.serializeSignRequestCreateSigner)(item);
        }),
        ['parent_folder']: val.parentFolder == void 0
            ? val.parentFolder
            : (0, folderMini_generated_js_1.serializeFolderMini)(val.parentFolder),
    });
}
function deserializeSignRequestCreateRequest(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestCreateRequest"',
        });
    }
    if (!(val.source_files == void 0) && !(0, json_js_4.sdIsList)(val.source_files)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "source_files" of type "SignRequestCreateRequest"',
        });
    }
    const sourceFiles = val.source_files == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.source_files)
            ? val.source_files.map(function (itm) {
                return (0, fileBase_generated_js_2.deserializeFileBase)(itm);
            })
            : [];
    const signatureColor = val.signature_color == void 0
        ? void 0
        : deserializeSignRequestCreateRequestSignatureColorField(val.signature_color);
    if (val.signers == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "signers" of type "SignRequestCreateRequest" to be defined',
        });
    }
    if (!(0, json_js_4.sdIsList)(val.signers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "signers" of type "SignRequestCreateRequest"',
        });
    }
    const signers = (0, json_js_4.sdIsList)(val.signers)
        ? val.signers.map(function (itm) {
            return (0, signRequestCreateSigner_generated_js_2.deserializeSignRequestCreateSigner)(itm);
        })
        : [];
    const parentFolder = val.parent_folder == void 0
        ? void 0
        : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent_folder);
    if (!(val.is_document_preparation_needed == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_document_preparation_needed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_document_preparation_needed" of type "SignRequestCreateRequest"',
        });
    }
    const isDocumentPreparationNeeded = val.is_document_preparation_needed == void 0
        ? void 0
        : val.is_document_preparation_needed;
    if (!(val.redirect_url == void 0) && !(0, json_js_3.sdIsString)(val.redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequestCreateRequest"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !(0, json_js_3.sdIsString)(val.declined_redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequestCreateRequest"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.are_text_signatures_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_text_signatures_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_text_signatures_enabled" of type "SignRequestCreateRequest"',
        });
    }
    const areTextSignaturesEnabled = val.are_text_signatures_enabled == void 0
        ? void 0
        : val.are_text_signatures_enabled;
    if (!(val.email_subject == void 0) && !(0, json_js_3.sdIsString)(val.email_subject)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_subject" of type "SignRequestCreateRequest"',
        });
    }
    const emailSubject = val.email_subject == void 0 ? void 0 : val.email_subject;
    if (!(val.email_message == void 0) && !(0, json_js_3.sdIsString)(val.email_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_message" of type "SignRequestCreateRequest"',
        });
    }
    const emailMessage = val.email_message == void 0 ? void 0 : val.email_message;
    if (!(val.are_reminders_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_reminders_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_reminders_enabled" of type "SignRequestCreateRequest"',
        });
    }
    const areRemindersEnabled = val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "SignRequestCreateRequest"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.prefill_tags == void 0) && !(0, json_js_4.sdIsList)(val.prefill_tags)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "prefill_tags" of type "SignRequestCreateRequest"',
        });
    }
    const prefillTags = val.prefill_tags == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.prefill_tags)
            ? val.prefill_tags.map(function (itm) {
                return (0, signRequestPrefillTag_generated_js_1.deserializeSignRequestPrefillTag)(itm);
            })
            : [];
    if (!(val.days_valid == void 0) && !(0, json_js_2.sdIsNumber)(val.days_valid)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "days_valid" of type "SignRequestCreateRequest"',
        });
    }
    const daysValid = val.days_valid == void 0 ? void 0 : val.days_valid;
    if (!(val.external_id == void 0) && !(0, json_js_3.sdIsString)(val.external_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_id" of type "SignRequestCreateRequest"',
        });
    }
    const externalId = val.external_id == void 0 ? void 0 : val.external_id;
    if (!(val.template_id == void 0) && !(0, json_js_3.sdIsString)(val.template_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "template_id" of type "SignRequestCreateRequest"',
        });
    }
    const templateId = val.template_id == void 0 ? void 0 : val.template_id;
    if (!(val.external_system_name == void 0) &&
        !(0, json_js_3.sdIsString)(val.external_system_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_system_name" of type "SignRequestCreateRequest"',
        });
    }
    const externalSystemName = val.external_system_name == void 0 ? void 0 : val.external_system_name;
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
        templateId: templateId,
        externalSystemName: externalSystemName,
    };
}
//# sourceMappingURL=signRequestCreateRequest.generated.js.map