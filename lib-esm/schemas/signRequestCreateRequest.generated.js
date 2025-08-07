import { deserializeSignRequestPrefillTag } from './signRequestPrefillTag.generated.js';
import { serializeSignRequestBase } from './signRequestBase.generated.js';
import { serializeFileBase } from './fileBase.generated.js';
import { deserializeFileBase } from './fileBase.generated.js';
import { serializeSignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { deserializeSignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSignRequestCreateRequestSignatureColorField(val) {
    return val;
}
export function deserializeSignRequestCreateRequestSignatureColorField(val) {
    if (val == 'blue') {
        return val;
    }
    if (val == 'black') {
        return val;
    }
    if (val == 'red') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize SignRequestCreateRequestSignatureColorField",
    });
}
export function serializeSignRequestCreateRequest(val) {
    const base = serializeSignRequestBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SignRequestCreateRequest"',
        });
    }
    return {
        ...base,
        ...{
            ['source_files']: val.sourceFiles == void 0
                ? val.sourceFiles
                : val.sourceFiles.map(function (item) {
                    return serializeFileBase(item);
                }),
            ['signature_color']: val.signatureColor == void 0
                ? val.signatureColor
                : serializeSignRequestCreateRequestSignatureColorField(val.signatureColor),
            ['signers']: val.signers.map(function (item) {
                return serializeSignRequestCreateSigner(item);
            }),
            ['parent_folder']: val.parentFolder == void 0
                ? val.parentFolder
                : serializeFolderMini(val.parentFolder),
        },
    };
}
export function deserializeSignRequestCreateRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SignRequestCreateRequest"',
        });
    }
    if (!(val.source_files == void 0) && !sdIsList(val.source_files)) {
        throw new BoxSdkError({
            message: 'Expecting array for "source_files" of type "SignRequestCreateRequest"',
        });
    }
    const sourceFiles = val.source_files == void 0
        ? void 0
        : sdIsList(val.source_files)
            ? val.source_files.map(function (itm) {
                return deserializeFileBase(itm);
            })
            : [];
    const signatureColor = val.signature_color == void 0
        ? void 0
        : deserializeSignRequestCreateRequestSignatureColorField(val.signature_color);
    if (val.signers == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "signers" of type "SignRequestCreateRequest" to be defined',
        });
    }
    if (!sdIsList(val.signers)) {
        throw new BoxSdkError({
            message: 'Expecting array for "signers" of type "SignRequestCreateRequest"',
        });
    }
    const signers = sdIsList(val.signers)
        ? val.signers.map(function (itm) {
            return deserializeSignRequestCreateSigner(itm);
        })
        : [];
    const parentFolder = val.parent_folder == void 0
        ? void 0
        : deserializeFolderMini(val.parent_folder);
    if (!(val.is_document_preparation_needed == void 0) &&
        !sdIsBoolean(val.is_document_preparation_needed)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_document_preparation_needed" of type "SignRequestCreateRequest"',
        });
    }
    const isDocumentPreparationNeeded = val.is_document_preparation_needed == void 0
        ? void 0
        : val.is_document_preparation_needed;
    if (!(val.redirect_url == void 0) && !sdIsString(val.redirect_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequestCreateRequest"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !sdIsString(val.declined_redirect_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequestCreateRequest"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.are_text_signatures_enabled == void 0) &&
        !sdIsBoolean(val.are_text_signatures_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "are_text_signatures_enabled" of type "SignRequestCreateRequest"',
        });
    }
    const areTextSignaturesEnabled = val.are_text_signatures_enabled == void 0
        ? void 0
        : val.are_text_signatures_enabled;
    if (!(val.email_subject == void 0) && !sdIsString(val.email_subject)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email_subject" of type "SignRequestCreateRequest"',
        });
    }
    const emailSubject = val.email_subject == void 0 ? void 0 : val.email_subject;
    if (!(val.email_message == void 0) && !sdIsString(val.email_message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email_message" of type "SignRequestCreateRequest"',
        });
    }
    const emailMessage = val.email_message == void 0 ? void 0 : val.email_message;
    if (!(val.are_reminders_enabled == void 0) &&
        !sdIsBoolean(val.are_reminders_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "are_reminders_enabled" of type "SignRequestCreateRequest"',
        });
    }
    const areRemindersEnabled = val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "SignRequestCreateRequest"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.prefill_tags == void 0) && !sdIsList(val.prefill_tags)) {
        throw new BoxSdkError({
            message: 'Expecting array for "prefill_tags" of type "SignRequestCreateRequest"',
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
            message: 'Expecting number for "days_valid" of type "SignRequestCreateRequest"',
        });
    }
    const daysValid = val.days_valid == void 0 ? void 0 : val.days_valid;
    if (!(val.external_id == void 0) && !sdIsString(val.external_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "external_id" of type "SignRequestCreateRequest"',
        });
    }
    const externalId = val.external_id == void 0 ? void 0 : val.external_id;
    if (!(val.template_id == void 0) && !sdIsString(val.template_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "template_id" of type "SignRequestCreateRequest"',
        });
    }
    const templateId = val.template_id == void 0 ? void 0 : val.template_id;
    if (!(val.external_system_name == void 0) &&
        !sdIsString(val.external_system_name)) {
        throw new BoxSdkError({
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