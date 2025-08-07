"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestSignerSignerDecisionTypeField = serializeSignRequestSignerSignerDecisionTypeField;
exports.deserializeSignRequestSignerSignerDecisionTypeField = deserializeSignRequestSignerSignerDecisionTypeField;
exports.serializeSignRequestSignerSignerDecisionField = serializeSignRequestSignerSignerDecisionField;
exports.deserializeSignRequestSignerSignerDecisionField = deserializeSignRequestSignerSignerDecisionField;
exports.serializeSignRequestSigner = serializeSignRequestSigner;
exports.deserializeSignRequestSigner = deserializeSignRequestSigner;
const signRequestCreateSigner_generated_js_1 = require("./signRequestCreateSigner.generated.js");
const signRequestCreateSigner_generated_js_2 = require("./signRequestCreateSigner.generated.js");
const signRequestSignerInput_generated_js_1 = require("./signRequestSignerInput.generated.js");
const signRequestSignerInput_generated_js_2 = require("./signRequestSignerInput.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeSignRequestSignerSignerDecisionTypeField(val) {
    return val;
}
function deserializeSignRequestSignerSignerDecisionTypeField(val) {
    if (val == 'signed') {
        return val;
    }
    if (val == 'declined') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignRequestSignerSignerDecisionTypeField",
    });
}
function serializeSignRequestSignerSignerDecisionField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeSignRequestSignerSignerDecisionTypeField(val.type),
        ['finalized_at']: val.finalizedAt == void 0
            ? val.finalizedAt
            : (0, utils_js_1.serializeDateTime)(val.finalizedAt),
        ['additional_info']: val.additionalInfo,
    };
}
function deserializeSignRequestSignerSignerDecisionField(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestSignerSignerDecisionField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeSignRequestSignerSignerDecisionTypeField(val.type);
    if (!(val.finalized_at == void 0) && !(0, json_js_3.sdIsString)(val.finalized_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "finalized_at" of type "SignRequestSignerSignerDecisionField"',
        });
    }
    const finalizedAt = val.finalized_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.finalized_at);
    if (!(val.additional_info == void 0) && !(0, json_js_3.sdIsString)(val.additional_info)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "additional_info" of type "SignRequestSignerSignerDecisionField"',
        });
    }
    const additionalInfo = val.additional_info == void 0 ? void 0 : val.additional_info;
    return {
        type: type,
        finalizedAt: finalizedAt,
        additionalInfo: additionalInfo,
    };
}
function serializeSignRequestSigner(val) {
    const base = (0, signRequestCreateSigner_generated_js_2.serializeSignRequestCreateSigner)(val);
    if (!(0, json_js_5.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestSigner"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['has_viewed_document']: val.hasViewedDocument,
        ['signer_decision']: val.signerDecision == void 0
            ? val.signerDecision
            : serializeSignRequestSignerSignerDecisionField(val.signerDecision),
        ['inputs']: val.inputs == void 0
            ? val.inputs
            : val.inputs.map(function (item) {
                return (0, signRequestSignerInput_generated_js_1.serializeSignRequestSignerInput)(item);
            }),
        ['embed_url']: val.embedUrl,
        ['iframeable_embed_url']: val.iframeableEmbedUrl,
    });
}
function deserializeSignRequestSigner(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestSigner"',
        });
    }
    if (!(val.has_viewed_document == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.has_viewed_document)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "has_viewed_document" of type "SignRequestSigner"',
        });
    }
    const hasViewedDocument = val.has_viewed_document == void 0 ? void 0 : val.has_viewed_document;
    const signerDecision = val.signer_decision == void 0
        ? void 0
        : deserializeSignRequestSignerSignerDecisionField(val.signer_decision);
    if (!(val.inputs == void 0) && !(0, json_js_4.sdIsList)(val.inputs)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "inputs" of type "SignRequestSigner"',
        });
    }
    const inputs = val.inputs == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.inputs)
            ? val.inputs.map(function (itm) {
                return (0, signRequestSignerInput_generated_js_2.deserializeSignRequestSignerInput)(itm);
            })
            : [];
    if (!(val.embed_url == void 0) && !(0, json_js_3.sdIsString)(val.embed_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "embed_url" of type "SignRequestSigner"',
        });
    }
    const embedUrl = val.embed_url == void 0 ? void 0 : val.embed_url;
    if (!(val.iframeable_embed_url == void 0) &&
        !(0, json_js_3.sdIsString)(val.iframeable_embed_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "iframeable_embed_url" of type "SignRequestSigner"',
        });
    }
    const iframeableEmbedUrl = val.iframeable_embed_url == void 0 ? void 0 : val.iframeable_embed_url;
    if (!(val.email == void 0) && !(0, json_js_3.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "SignRequestSigner"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    const role = val.role == void 0
        ? void 0
        : (0, signRequestCreateSigner_generated_js_1.deserializeSignRequestCreateSignerRoleField)(val.role);
    if (!(val.is_in_person == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_in_person)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_in_person" of type "SignRequestSigner"',
        });
    }
    const isInPerson = val.is_in_person == void 0 ? void 0 : val.is_in_person;
    if (!(val.order == void 0) && !(0, json_js_2.sdIsNumber)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "order" of type "SignRequestSigner"',
        });
    }
    const order = val.order == void 0 ? void 0 : val.order;
    if (!(val.embed_url_external_user_id == void 0) &&
        !(0, json_js_3.sdIsString)(val.embed_url_external_user_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "embed_url_external_user_id" of type "SignRequestSigner"',
        });
    }
    const embedUrlExternalUserId = val.embed_url_external_user_id == void 0
        ? void 0
        : val.embed_url_external_user_id;
    if (!(val.redirect_url == void 0) && !(0, json_js_3.sdIsString)(val.redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequestSigner"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !(0, json_js_3.sdIsString)(val.declined_redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequestSigner"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.login_required == void 0) && !(0, json_js_1.sdIsBoolean)(val.login_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "login_required" of type "SignRequestSigner"',
        });
    }
    const loginRequired = val.login_required == void 0 ? void 0 : val.login_required;
    if (!(val.verification_phone_number == void 0) &&
        !(0, json_js_3.sdIsString)(val.verification_phone_number)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "verification_phone_number" of type "SignRequestSigner"',
        });
    }
    const verificationPhoneNumber = val.verification_phone_number == void 0
        ? void 0
        : val.verification_phone_number;
    if (!(val.password == void 0) && !(0, json_js_3.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "SignRequestSigner"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.signer_group_id == void 0) && !(0, json_js_3.sdIsString)(val.signer_group_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "signer_group_id" of type "SignRequestSigner"',
        });
    }
    const signerGroupId = val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
    if (!(val.suppress_notifications == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.suppress_notifications)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "suppress_notifications" of type "SignRequestSigner"',
        });
    }
    const suppressNotifications = val.suppress_notifications == void 0 ? void 0 : val.suppress_notifications;
    return {
        hasViewedDocument: hasViewedDocument,
        signerDecision: signerDecision,
        inputs: inputs,
        embedUrl: embedUrl,
        iframeableEmbedUrl: iframeableEmbedUrl,
        email: email,
        role: role,
        isInPerson: isInPerson,
        order: order,
        embedUrlExternalUserId: embedUrlExternalUserId,
        redirectUrl: redirectUrl,
        declinedRedirectUrl: declinedRedirectUrl,
        loginRequired: loginRequired,
        verificationPhoneNumber: verificationPhoneNumber,
        password: password,
        signerGroupId: signerGroupId,
        suppressNotifications: suppressNotifications,
    };
}
//# sourceMappingURL=signRequestSigner.generated.js.map