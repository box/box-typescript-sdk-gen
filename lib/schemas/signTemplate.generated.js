"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignTemplateTypeField = serializeSignTemplateTypeField;
exports.deserializeSignTemplateTypeField = deserializeSignTemplateTypeField;
exports.serializeSignTemplateAdditionalInfoNonEditableField = serializeSignTemplateAdditionalInfoNonEditableField;
exports.deserializeSignTemplateAdditionalInfoNonEditableField = deserializeSignTemplateAdditionalInfoNonEditableField;
exports.serializeSignTemplateAdditionalInfoRequiredSignersField = serializeSignTemplateAdditionalInfoRequiredSignersField;
exports.deserializeSignTemplateAdditionalInfoRequiredSignersField = deserializeSignTemplateAdditionalInfoRequiredSignersField;
exports.serializeSignTemplateAdditionalInfoRequiredField = serializeSignTemplateAdditionalInfoRequiredField;
exports.deserializeSignTemplateAdditionalInfoRequiredField = deserializeSignTemplateAdditionalInfoRequiredField;
exports.serializeSignTemplateAdditionalInfoField = serializeSignTemplateAdditionalInfoField;
exports.deserializeSignTemplateAdditionalInfoField = deserializeSignTemplateAdditionalInfoField;
exports.serializeSignTemplateReadySignLinkField = serializeSignTemplateReadySignLinkField;
exports.deserializeSignTemplateReadySignLinkField = deserializeSignTemplateReadySignLinkField;
exports.serializeSignTemplateCustomBrandingField = serializeSignTemplateCustomBrandingField;
exports.deserializeSignTemplateCustomBrandingField = deserializeSignTemplateCustomBrandingField;
exports.serializeSignTemplate = serializeSignTemplate;
exports.deserializeSignTemplate = deserializeSignTemplate;
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const templateSigner_generated_js_1 = require("./templateSigner.generated.js");
const templateSigner_generated_js_2 = require("./templateSigner.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeSignTemplateTypeField(val) {
    return val;
}
function deserializeSignTemplateTypeField(val) {
    if (val == 'sign-template') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize SignTemplateTypeField" });
}
function serializeSignTemplateAdditionalInfoNonEditableField(val) {
    return val;
}
function deserializeSignTemplateAdditionalInfoNonEditableField(val) {
    if (val == 'email_subject') {
        return val;
    }
    if (val == 'email_message') {
        return val;
    }
    if (val == 'name') {
        return val;
    }
    if (val == 'days_valid') {
        return val;
    }
    if (val == 'signers') {
        return val;
    }
    if (val == 'source_files') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignTemplateAdditionalInfoNonEditableField",
    });
}
function serializeSignTemplateAdditionalInfoRequiredSignersField(val) {
    return val;
}
function deserializeSignTemplateAdditionalInfoRequiredSignersField(val) {
    if (val == 'email') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignTemplateAdditionalInfoRequiredSignersField",
    });
}
function serializeSignTemplateAdditionalInfoRequiredField(val) {
    return {
        ['signers']: val.signers == void 0
            ? val.signers
            : val.signers.map(function (item) {
                return item.map(function (item) {
                    return serializeSignTemplateAdditionalInfoRequiredSignersField(item);
                });
            }),
    };
}
function deserializeSignTemplateAdditionalInfoRequiredField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignTemplateAdditionalInfoRequiredField"',
        });
    }
    if (!(val.signers == void 0) && !(0, json_js_4.sdIsList)(val.signers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "signers" of type "SignTemplateAdditionalInfoRequiredField"',
        });
    }
    const signers = val.signers == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.signers)
            ? val.signers.map(function (itm) {
                return (0, json_js_4.sdIsList)(itm)
                    ? itm.map(function (itm) {
                        return deserializeSignTemplateAdditionalInfoRequiredSignersField(itm);
                    })
                    : [];
            })
            : [];
    return { signers: signers };
}
function serializeSignTemplateAdditionalInfoField(val) {
    return {
        ['non_editable']: val.nonEditable == void 0
            ? val.nonEditable
            : val.nonEditable.map(function (item) {
                return serializeSignTemplateAdditionalInfoNonEditableField(item);
            }),
        ['required']: val.required == void 0
            ? val.required
            : serializeSignTemplateAdditionalInfoRequiredField(val.required),
    };
}
function deserializeSignTemplateAdditionalInfoField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignTemplateAdditionalInfoField"',
        });
    }
    if (!(val.non_editable == void 0) && !(0, json_js_4.sdIsList)(val.non_editable)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "non_editable" of type "SignTemplateAdditionalInfoField"',
        });
    }
    const nonEditable = val.non_editable == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.non_editable)
            ? val.non_editable.map(function (itm) {
                return deserializeSignTemplateAdditionalInfoNonEditableField(itm);
            })
            : [];
    const required = val.required == void 0
        ? void 0
        : deserializeSignTemplateAdditionalInfoRequiredField(val.required);
    return {
        nonEditable: nonEditable,
        required: required,
    };
}
function serializeSignTemplateReadySignLinkField(val) {
    return {
        ['url']: val.url,
        ['name']: val.name,
        ['instructions']: val.instructions,
        ['folder_id']: val.folderId,
        ['is_notification_disabled']: val.isNotificationDisabled,
        ['is_active']: val.isActive,
    };
}
function deserializeSignTemplateReadySignLinkField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignTemplateReadySignLinkField"',
        });
    }
    if (!(val.url == void 0) && !(0, json_js_3.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "SignTemplateReadySignLinkField"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "SignTemplateReadySignLinkField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.instructions == void 0) && !(0, json_js_3.sdIsString)(val.instructions)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "instructions" of type "SignTemplateReadySignLinkField"',
        });
    }
    const instructions = val.instructions == void 0 ? void 0 : val.instructions;
    if (!(val.folder_id == void 0) && !(0, json_js_3.sdIsString)(val.folder_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "folder_id" of type "SignTemplateReadySignLinkField"',
        });
    }
    const folderId = val.folder_id == void 0 ? void 0 : val.folder_id;
    if (!(val.is_notification_disabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_notification_disabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_notification_disabled" of type "SignTemplateReadySignLinkField"',
        });
    }
    const isNotificationDisabled = val.is_notification_disabled == void 0
        ? void 0
        : val.is_notification_disabled;
    if (!(val.is_active == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_active)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_active" of type "SignTemplateReadySignLinkField"',
        });
    }
    const isActive = val.is_active == void 0 ? void 0 : val.is_active;
    return {
        url: url,
        name: name,
        instructions: instructions,
        folderId: folderId,
        isNotificationDisabled: isNotificationDisabled,
        isActive: isActive,
    };
}
function serializeSignTemplateCustomBrandingField(val) {
    return {
        ['company_name']: val.companyName,
        ['logo_uri']: val.logoUri,
        ['branding_color']: val.brandingColor,
        ['email_footer_text']: val.emailFooterText,
    };
}
function deserializeSignTemplateCustomBrandingField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignTemplateCustomBrandingField"',
        });
    }
    if (!(val.company_name == void 0) && !(0, json_js_3.sdIsString)(val.company_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "company_name" of type "SignTemplateCustomBrandingField"',
        });
    }
    const companyName = val.company_name == void 0 ? void 0 : val.company_name;
    if (!(val.logo_uri == void 0) && !(0, json_js_3.sdIsString)(val.logo_uri)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "logo_uri" of type "SignTemplateCustomBrandingField"',
        });
    }
    const logoUri = val.logo_uri == void 0 ? void 0 : val.logo_uri;
    if (!(val.branding_color == void 0) && !(0, json_js_3.sdIsString)(val.branding_color)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "branding_color" of type "SignTemplateCustomBrandingField"',
        });
    }
    const brandingColor = val.branding_color == void 0 ? void 0 : val.branding_color;
    if (!(val.email_footer_text == void 0) &&
        !(0, json_js_3.sdIsString)(val.email_footer_text)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_footer_text" of type "SignTemplateCustomBrandingField"',
        });
    }
    const emailFooterText = val.email_footer_text == void 0 ? void 0 : val.email_footer_text;
    return {
        companyName: companyName,
        logoUri: logoUri,
        brandingColor: brandingColor,
        emailFooterText: emailFooterText,
    };
}
function serializeSignTemplate(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeSignTemplateTypeField(val.type),
        ['id']: val.id,
        ['name']: val.name,
        ['email_subject']: val.emailSubject,
        ['email_message']: val.emailMessage,
        ['days_valid']: val.daysValid,
        ['parent_folder']: val.parentFolder == void 0
            ? val.parentFolder
            : (0, folderMini_generated_js_1.serializeFolderMini)(val.parentFolder),
        ['source_files']: val.sourceFiles == void 0
            ? val.sourceFiles
            : val.sourceFiles.map(function (item) {
                return (0, fileMini_generated_js_1.serializeFileMini)(item);
            }),
        ['are_fields_locked']: val.areFieldsLocked,
        ['are_options_locked']: val.areOptionsLocked,
        ['are_recipients_locked']: val.areRecipientsLocked,
        ['are_email_settings_locked']: val.areEmailSettingsLocked,
        ['are_files_locked']: val.areFilesLocked,
        ['signers']: val.signers == void 0
            ? val.signers
            : val.signers.map(function (item) {
                return (0, templateSigner_generated_js_1.serializeTemplateSigner)(item);
            }),
        ['additional_info']: val.additionalInfo == void 0
            ? val.additionalInfo
            : serializeSignTemplateAdditionalInfoField(val.additionalInfo),
        ['ready_sign_link']: val.readySignLink == void 0
            ? val.readySignLink
            : serializeSignTemplateReadySignLinkField(val.readySignLink),
        ['custom_branding']: val.customBranding == void 0
            ? val.customBranding
            : serializeSignTemplateCustomBrandingField(val.customBranding),
    };
}
function deserializeSignTemplate(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SignTemplate"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeSignTemplateTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_3.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "SignTemplate"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.name == void 0) && !(0, json_js_3.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "SignTemplate"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.email_subject == void 0) && !(0, json_js_3.sdIsString)(val.email_subject)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_subject" of type "SignTemplate"',
        });
    }
    const emailSubject = val.email_subject == void 0 ? void 0 : val.email_subject;
    if (!(val.email_message == void 0) && !(0, json_js_3.sdIsString)(val.email_message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email_message" of type "SignTemplate"',
        });
    }
    const emailMessage = val.email_message == void 0 ? void 0 : val.email_message;
    if (!(val.days_valid == void 0) && !(0, json_js_2.sdIsNumber)(val.days_valid)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "days_valid" of type "SignTemplate"',
        });
    }
    const daysValid = val.days_valid == void 0 ? void 0 : val.days_valid;
    const parentFolder = val.parent_folder == void 0
        ? void 0
        : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent_folder);
    if (!(val.source_files == void 0) && !(0, json_js_4.sdIsList)(val.source_files)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "source_files" of type "SignTemplate"',
        });
    }
    const sourceFiles = val.source_files == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.source_files)
            ? val.source_files.map(function (itm) {
                return (0, fileMini_generated_js_2.deserializeFileMini)(itm);
            })
            : [];
    if (!(val.are_fields_locked == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_fields_locked)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_fields_locked" of type "SignTemplate"',
        });
    }
    const areFieldsLocked = val.are_fields_locked == void 0 ? void 0 : val.are_fields_locked;
    if (!(val.are_options_locked == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_options_locked)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_options_locked" of type "SignTemplate"',
        });
    }
    const areOptionsLocked = val.are_options_locked == void 0 ? void 0 : val.are_options_locked;
    if (!(val.are_recipients_locked == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_recipients_locked)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_recipients_locked" of type "SignTemplate"',
        });
    }
    const areRecipientsLocked = val.are_recipients_locked == void 0 ? void 0 : val.are_recipients_locked;
    if (!(val.are_email_settings_locked == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.are_email_settings_locked)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_email_settings_locked" of type "SignTemplate"',
        });
    }
    const areEmailSettingsLocked = val.are_email_settings_locked == void 0
        ? void 0
        : val.are_email_settings_locked;
    if (!(val.are_files_locked == void 0) && !(0, json_js_1.sdIsBoolean)(val.are_files_locked)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "are_files_locked" of type "SignTemplate"',
        });
    }
    const areFilesLocked = val.are_files_locked == void 0 ? void 0 : val.are_files_locked;
    if (!(val.signers == void 0) && !(0, json_js_4.sdIsList)(val.signers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "signers" of type "SignTemplate"',
        });
    }
    const signers = val.signers == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.signers)
            ? val.signers.map(function (itm) {
                return (0, templateSigner_generated_js_2.deserializeTemplateSigner)(itm);
            })
            : [];
    const additionalInfo = val.additional_info == void 0
        ? void 0
        : deserializeSignTemplateAdditionalInfoField(val.additional_info);
    const readySignLink = val.ready_sign_link == void 0
        ? void 0
        : deserializeSignTemplateReadySignLinkField(val.ready_sign_link);
    const customBranding = val.custom_branding == void 0
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
    };
}
//# sourceMappingURL=signTemplate.generated.js.map