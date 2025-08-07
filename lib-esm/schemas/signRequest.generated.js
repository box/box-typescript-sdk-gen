import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { serializeSignRequestBase } from './signRequestBase.generated.js';
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
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSignRequestTypeField(val) {
    return val;
}
export function deserializeSignRequestTypeField(val) {
    if (val == 'sign-request') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize SignRequestTypeField" });
}
export function serializeSignRequestStatusField(val) {
    return val;
}
export function deserializeSignRequestStatusField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SignRequestStatusField",
    });
}
export function serializeSignRequestSignFilesField(val) {
    return {
        ['files']: val.files == void 0
            ? val.files
            : val.files.map(function (item) {
                return serializeFileMini(item);
            }),
        ['is_ready_for_download']: val.isReadyForDownload,
    };
}
export function deserializeSignRequestSignFilesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SignRequestSignFilesField"',
        });
    }
    if (!(val.files == void 0) && !sdIsList(val.files)) {
        throw new BoxSdkError({
            message: 'Expecting array for "files" of type "SignRequestSignFilesField"',
        });
    }
    const files = val.files == void 0
        ? void 0
        : sdIsList(val.files)
            ? val.files.map(function (itm) {
                return deserializeFileMini(itm);
            })
            : [];
    if (!(val.is_ready_for_download == void 0) &&
        !sdIsBoolean(val.is_ready_for_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_ready_for_download" of type "SignRequestSignFilesField"',
        });
    }
    const isReadyForDownload = val.is_ready_for_download == void 0 ? void 0 : val.is_ready_for_download;
    return {
        files: files,
        isReadyForDownload: isReadyForDownload,
    };
}
export function serializeSignRequest(val) {
    const base = serializeSignRequestBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "SignRequest"' });
    }
    return {
        ...base,
        ...{
            ['type']: val.type == void 0 ? val.type : serializeSignRequestTypeField(val.type),
            ['source_files']: val.sourceFiles == void 0
                ? val.sourceFiles
                : val.sourceFiles.map(function (item) {
                    return serializeFileBase(item);
                }),
            ['signers']: val.signers == void 0
                ? val.signers
                : val.signers.map(function (item) {
                    return serializeSignRequestSigner(item);
                }),
            ['signature_color']: val.signatureColor,
            ['id']: val.id,
            ['prepare_url']: val.prepareUrl,
            ['signing_log']: val.signingLog == void 0
                ? val.signingLog
                : serializeFileMini(val.signingLog),
            ['status']: val.status == void 0
                ? val.status
                : serializeSignRequestStatusField(val.status),
            ['sign_files']: val.signFiles == void 0
                ? val.signFiles
                : serializeSignRequestSignFilesField(val.signFiles),
            ['auto_expire_at']: val.autoExpireAt == void 0
                ? val.autoExpireAt
                : serializeDateTime(val.autoExpireAt),
            ['parent_folder']: val.parentFolder == void 0
                ? val.parentFolder
                : serializeFolderMini(val.parentFolder),
            ['collaborator_level']: val.collaboratorLevel,
            ['sender_email']: val.senderEmail,
            ['sender_id']: val.senderId,
        },
    };
}
export function deserializeSignRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "SignRequest"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeSignRequestTypeField(val.type);
    if (!(val.source_files == void 0) && !sdIsList(val.source_files)) {
        throw new BoxSdkError({
            message: 'Expecting array for "source_files" of type "SignRequest"',
        });
    }
    const sourceFiles = val.source_files == void 0
        ? void 0
        : sdIsList(val.source_files)
            ? val.source_files.map(function (itm) {
                return deserializeFileBase(itm);
            })
            : [];
    if (!(val.signers == void 0) && !sdIsList(val.signers)) {
        throw new BoxSdkError({
            message: 'Expecting array for "signers" of type "SignRequest"',
        });
    }
    const signers = val.signers == void 0
        ? void 0
        : sdIsList(val.signers)
            ? val.signers.map(function (itm) {
                return deserializeSignRequestSigner(itm);
            })
            : [];
    if (!(val.signature_color == void 0) && !sdIsString(val.signature_color)) {
        throw new BoxSdkError({
            message: 'Expecting string for "signature_color" of type "SignRequest"',
        });
    }
    const signatureColor = val.signature_color == void 0 ? void 0 : val.signature_color;
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "SignRequest"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.prepare_url == void 0) && !sdIsString(val.prepare_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prepare_url" of type "SignRequest"',
        });
    }
    const prepareUrl = val.prepare_url == void 0 ? void 0 : val.prepare_url;
    const signingLog = val.signing_log == void 0 ? void 0 : deserializeFileMini(val.signing_log);
    const status = val.status == void 0
        ? void 0
        : deserializeSignRequestStatusField(val.status);
    const signFiles = val.sign_files == void 0
        ? void 0
        : deserializeSignRequestSignFilesField(val.sign_files);
    if (!(val.auto_expire_at == void 0) && !sdIsString(val.auto_expire_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "auto_expire_at" of type "SignRequest"',
        });
    }
    const autoExpireAt = val.auto_expire_at == void 0
        ? void 0
        : deserializeDateTime(val.auto_expire_at);
    const parentFolder = val.parent_folder == void 0
        ? void 0
        : deserializeFolderMini(val.parent_folder);
    if (!(val.collaborator_level == void 0) &&
        !sdIsString(val.collaborator_level)) {
        throw new BoxSdkError({
            message: 'Expecting string for "collaborator_level" of type "SignRequest"',
        });
    }
    const collaboratorLevel = val.collaborator_level == void 0 ? void 0 : val.collaborator_level;
    if (!(val.sender_email == void 0) && !sdIsString(val.sender_email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sender_email" of type "SignRequest"',
        });
    }
    const senderEmail = val.sender_email == void 0 ? void 0 : val.sender_email;
    if (!(val.sender_id == void 0) && !sdIsNumber(val.sender_id)) {
        throw new BoxSdkError({
            message: 'Expecting number for "sender_id" of type "SignRequest"',
        });
    }
    const senderId = val.sender_id == void 0 ? void 0 : val.sender_id;
    if (!(val.is_document_preparation_needed == void 0) &&
        !sdIsBoolean(val.is_document_preparation_needed)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_document_preparation_needed" of type "SignRequest"',
        });
    }
    const isDocumentPreparationNeeded = val.is_document_preparation_needed == void 0
        ? void 0
        : val.is_document_preparation_needed;
    if (!(val.redirect_url == void 0) && !sdIsString(val.redirect_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequest"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !sdIsString(val.declined_redirect_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequest"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.are_text_signatures_enabled == void 0) &&
        !sdIsBoolean(val.are_text_signatures_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "are_text_signatures_enabled" of type "SignRequest"',
        });
    }
    const areTextSignaturesEnabled = val.are_text_signatures_enabled == void 0
        ? void 0
        : val.are_text_signatures_enabled;
    if (!(val.email_subject == void 0) && !sdIsString(val.email_subject)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email_subject" of type "SignRequest"',
        });
    }
    const emailSubject = val.email_subject == void 0 ? void 0 : val.email_subject;
    if (!(val.email_message == void 0) && !sdIsString(val.email_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email_message" of type "SignRequest"',
        });
    }
    const emailMessage = val.email_message == void 0 ? void 0 : val.email_message;
    if (!(val.are_reminders_enabled == void 0) &&
        !sdIsBoolean(val.are_reminders_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "are_reminders_enabled" of type "SignRequest"',
        });
    }
    const areRemindersEnabled = val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "SignRequest"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.prefill_tags == void 0) && !sdIsList(val.prefill_tags)) {
        throw new BoxSdkError({
            message: 'Expecting array for "prefill_tags" of type "SignRequest"',
        });
    }
    const prefillTags = val.prefill_tags == void 0
        ? void 0
        : sdIsList(val.prefill_tags)
            ? val.prefill_tags.map(function (itm) {
                return deserializeSignRequestPrefillTag(itm);
            })
            : [];
    if (!(val.days_valid == void 0) && !sdIsNumber(val.days_valid)) {
        throw new BoxSdkError({
            message: 'Expecting number for "days_valid" of type "SignRequest"',
        });
    }
    const daysValid = val.days_valid == void 0 ? void 0 : val.days_valid;
    if (!(val.external_id == void 0) && !sdIsString(val.external_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_id" of type "SignRequest"',
        });
    }
    const externalId = val.external_id == void 0 ? void 0 : val.external_id;
    if (!(val.template_id == void 0) && !sdIsString(val.template_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "template_id" of type "SignRequest"',
        });
    }
    const templateId = val.template_id == void 0 ? void 0 : val.template_id;
    if (!(val.external_system_name == void 0) &&
        !sdIsString(val.external_system_name)) {
        throw new BoxSdkError({
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