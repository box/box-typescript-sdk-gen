"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestTypeField = serializeSignRequestTypeField;
exports.deserializeSignRequestTypeField = deserializeSignRequestTypeField;
exports.serializeSignRequestStatusField = serializeSignRequestStatusField;
exports.deserializeSignRequestStatusField = deserializeSignRequestStatusField;
exports.serializeSignRequestSignFilesField = serializeSignRequestSignFilesField;
exports.deserializeSignRequestSignFilesField = deserializeSignRequestSignFilesField;
exports.serializeSignRequest = serializeSignRequest;
exports.deserializeSignRequest = deserializeSignRequest;
const signRequestPrefillTag_generated_js_1 = require("./signRequestPrefillTag.generated.js");
const signRequestBase_generated_js_1 = require("./signRequestBase.generated.js");
const fileBase_generated_js_1 = require("./fileBase.generated.js");
const fileBase_generated_js_2 = require("./fileBase.generated.js");
const signRequestSigner_generated_js_1 = require("./signRequestSigner.generated.js");
const signRequestSigner_generated_js_2 = require("./signRequestSigner.generated.js");
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeSignRequestTypeField(val) {
    return val;
}
function deserializeSignRequestTypeField(val) {
    if (val == 'sign-request') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize SignRequestTypeField" });
}
function serializeSignRequestStatusField(val) {
    return val;
}
function deserializeSignRequestStatusField(val) {
    if (val == 'converting') {
        return val;
    }
    if (val == 'created') {
        return val;
    }
    if (val == 'sent') {
        return val;
    }
    if (val == 'viewed') {
        return val;
    }
    if (val == 'signed') {
        return val;
    }
    if (val == 'cancelled') {
        return val;
    }
    if (val == 'declined') {
        return val;
    }
    if (val == 'error_converting') {
        return val;
    }
    if (val == 'error_sending') {
        return val;
    }
    if (val == 'expired') {
        return val;
    }
    if (val == 'finalizing') {
        return val;
    }
    if (val == 'error_finalizing') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignRequestStatusField",
    });
}
function serializeSignRequestSignFilesField(val) {
    return {
        ['files']: val.files == void 0
            ? val.files
            : val.files.map(function (item) {
                return (0, fileMini_generated_js_1.serializeFileMini)(item);
            }),
        ['is_ready_for_download']: val.isReadyForDownload,
    };
}
function deserializeSignRequestSignFilesField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestSignFilesField"',
        });
    }
    if (!(val.files == void 0) && !(0, json_js_4.sdIsList)(val.files)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "files" of type "SignRequestSignFilesField"',
        });
    }
    const files = val.files == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.files)
            ? val.files.map(function (itm) {
                return (0, fileMini_generated_js_2.deserializeFileMini)(itm);
            })
            : [];
    if (!(val.is_ready_for_download == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_ready_for_download)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_ready_for_download" of type "SignRequestSignFilesField"',
        });
    }
    const isReadyForDownload = val.is_ready_for_download == void 0 ? void 0 : val.is_ready_for_download;
    return {
        files: files,
        isReadyForDownload: isReadyForDownload,
    };
}
function serializeSignRequest(val) {
    const base = (0, signRequestBase_generated_js_1.serializeSignRequestBase)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SignRequest"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['type']: val.type == void 0 ? val.type : serializeSignRequestTypeField(val.type),
        ['source_files']: val.sourceFiles == void 0
            ? val.sourceFiles
            : val.sourceFiles.map(function (item) {
                return (0, fileBase_generated_js_1.serializeFileBase)(item);
            }),
        ['signers']: val.signers == void 0
            ? val.signers
            : val.signers.map(function (item) {
                return (0, signRequestSigner_generated_js_1.serializeSignRequestSigner)(item);
            }),
        ['signature_color']: val.signatureColor,
        ['id']: val.id,
        ['prepare_url']: val.prepareUrl,
        ['signing_log']: val.signingLog == void 0
            ? val.signingLog
            : (0, fileMini_generated_js_1.serializeFileMini)(val.signingLog),
        ['status']: val.status == void 0
            ? val.status
            : serializeSignRequestStatusField(val.status),
        ['sign_files']: val.signFiles == void 0
            ? val.signFiles
            : serializeSignRequestSignFilesField(val.signFiles),
        ['auto_expire_at']: val.autoExpireAt == void 0
            ? val.autoExpireAt
            : (0, utils_js_1.serializeDateTime)(val.autoExpireAt),
        ['parent_folder']: val.parentFolder == void 0
            ? val.parentFolder
            : (0, folderMini_generated_js_1.serializeFolderMini)(val.parentFolder),
        ['collaborator_level']: val.collaboratorLevel,
        ['sender_email']: val.senderEmail,
        ['sender_id']: val.senderId,
    });
}
function deserializeSignRequest(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SignRequest"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeSignRequestTypeField(val.type);
    if (!(val.source_files == void 0) && !(0, json_js_4.sdIsList)(val.source_files)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "source_files" of type "SignRequest"',
        });
    }
    const sourceFiles = val.source_files == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.source_files)
            ? val.source_files.map(function (itm) {
                return (0, fileBase_generated_js_2.deserializeFileBase)(itm);
            })
            : [];
    if (!(val.signers == void 0) && !(0, json_js_4.sdIsList)(val.signers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "signers" of type "SignRequest"',
        });
    }
    const signers = val.signers == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.signers)
            ? val.signers.map(function (itm) {
                return (0, signRequestSigner_generated_js_2.deserializeSignRequestSigner)(itm);
            })
            : [];
    if (!(val.signature_color == void 0) && !(0, json_js_3.sdIsString)(val.signature_color)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "signature_color" of type "SignRequest"',
        });
    }
    const signatureColor = val.signature_color == void 0 ? void 0 : val.signature_color;
    if (!(val.id == void 0) && !(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "SignRequest"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.prepare_url == void 0) && !(0, json_js_3.sdIsString)(val.prepare_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prepare_url" of type "SignRequest"',
        });
    }
    const prepareUrl = val.prepare_url == void 0 ? void 0 : val.prepare_url;
    const signingLog = val.signing_log == void 0 ? void 0 : (0, fileMini_generated_js_2.deserializeFileMini)(val.signing_log);
    const status = val.status == void 0
        ? void 0
        : deserializeSignRequestStatusField(val.status);
    const signFiles = val.sign_files == void 0
        ? void 0
        : deserializeSignRequestSignFilesField(val.sign_files);
    if (!(val.auto_expire_at == void 0) && !(0, json_js_3.sdIsString)(val.auto_expire_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "auto_expire_at" of type "SignRequest"',
        });
    }
    const autoExpireAt = val.auto_expire_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.auto_expire_at);
    const parentFolder = val.parent_folder == void 0
        ? void 0
        : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent_folder);
    if (!(val.collaborator_level == void 0) &&
        !(0, json_js_3.sdIsString)(val.collaborator_level)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "collaborator_level" of type "SignRequest"',
        });
    }
    const collaboratorLevel = val.collaborator_level == void 0 ? void 0 : val.collaborator_level;
    if (!(val.sender_email == void 0) && !(0, json_js_3.sdIsString)(val.sender_email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "sender_email" of type "SignRequest"',
        });
    }
    const senderEmail = val.sender_email == void 0 ? void 0 : val.sender_email;
    if (!(val.sender_id == void 0) && !(0, json_js_2.sdIsNumber)(val.sender_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "sender_id" of type "SignRequest"',
        });
    }
    const senderId = val.sender_id == void 0 ? void 0 : val.sender_id;
    if (!(val.is_document_preparation_needed == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_document_preparation_needed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_document_preparation_needed" of type "SignRequest"',
        });
    }
    const isDocumentPreparationNeeded = val.is_document_preparation_needed == void 0
        ? void 0
        : val.is_document_preparation_needed;
    if (!(val.redirect_url == void 0) && !(0, json_js_3.sdIsString)(val.redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequest"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !(0, json_js_3.sdIsString)(val.declined_redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequest"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.are_text_signatures_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_text_signatures_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_text_signatures_enabled" of type "SignRequest"',
        });
    }
    const areTextSignaturesEnabled = val.are_text_signatures_enabled == void 0
        ? void 0
        : val.are_text_signatures_enabled;
    if (!(val.email_subject == void 0) && !(0, json_js_3.sdIsString)(val.email_subject)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_subject" of type "SignRequest"',
        });
    }
    const emailSubject = val.email_subject == void 0 ? void 0 : val.email_subject;
    if (!(val.email_message == void 0) && !(0, json_js_3.sdIsString)(val.email_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_message" of type "SignRequest"',
        });
    }
    const emailMessage = val.email_message == void 0 ? void 0 : val.email_message;
    if (!(val.are_reminders_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_reminders_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_reminders_enabled" of type "SignRequest"',
        });
    }
    const areRemindersEnabled = val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "SignRequest"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.prefill_tags == void 0) && !(0, json_js_4.sdIsList)(val.prefill_tags)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "prefill_tags" of type "SignRequest"',
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
            message: 'Expecting number for "days_valid" of type "SignRequest"',
        });
    }
    const daysValid = val.days_valid == void 0 ? void 0 : val.days_valid;
    if (!(val.external_id == void 0) && !(0, json_js_3.sdIsString)(val.external_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_id" of type "SignRequest"',
        });
    }
    const externalId = val.external_id == void 0 ? void 0 : val.external_id;
    if (!(val.template_id == void 0) && !(0, json_js_3.sdIsString)(val.template_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "template_id" of type "SignRequest"',
        });
    }
    const templateId = val.template_id == void 0 ? void 0 : val.template_id;
    if (!(val.external_system_name == void 0) &&
        !(0, json_js_3.sdIsString)(val.external_system_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "external_system_name" of type "SignRequest"',
        });
    }
    const externalSystemName = val.external_system_name == void 0 ? void 0 : val.external_system_name;
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
        collaboratorLevel: collaboratorLevel,
        senderEmail: senderEmail,
        senderId: senderId,
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
//# sourceMappingURL=signRequest.generated.js.map