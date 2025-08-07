"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequestCreateSignerRoleField = serializeSignRequestCreateSignerRoleField;
exports.deserializeSignRequestCreateSignerRoleField = deserializeSignRequestCreateSignerRoleField;
exports.serializeSignRequestCreateSigner = serializeSignRequestCreateSigner;
exports.deserializeSignRequestCreateSigner = deserializeSignRequestCreateSigner;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeSignRequestCreateSignerRoleField(val) {
    return val;
}
function deserializeSignRequestCreateSignerRoleField(val) {
    if (val == 'signer') {
        return val;
    }
    if (val == 'approver') {
        return val;
    }
    if (val == 'final_copy_reader') {
        return val;
    }
    if ((0, json_js_3.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize SignRequestCreateSignerRoleField",
    });
}
function serializeSignRequestCreateSigner(val) {
    return {
        ['email']: val.email,
        ['role']: val.role == void 0
            ? val.role
            : serializeSignRequestCreateSignerRoleField(val.role),
        ['is_in_person']: val.isInPerson,
        ['order']: val.order,
        ['embed_url_external_user_id']: val.embedUrlExternalUserId,
        ['redirect_url']: val.redirectUrl,
        ['declined_redirect_url']: val.declinedRedirectUrl,
        ['login_required']: val.loginRequired,
        ['verification_phone_number']: val.verificationPhoneNumber,
        ['password']: val.password,
        ['signer_group_id']: val.signerGroupId,
        ['suppress_notifications']: val.suppressNotifications,
    };
}
function deserializeSignRequestCreateSigner(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SignRequestCreateSigner"',
        });
    }
    if (!(val.email == void 0) && !(0, json_js_3.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "SignRequestCreateSigner"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    const role = val.role == void 0
        ? void 0
        : deserializeSignRequestCreateSignerRoleField(val.role);
    if (!(val.is_in_person == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_in_person)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_in_person" of type "SignRequestCreateSigner"',
        });
    }
    const isInPerson = val.is_in_person == void 0 ? void 0 : val.is_in_person;
    if (!(val.order == void 0) && !(0, json_js_2.sdIsNumber)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "order" of type "SignRequestCreateSigner"',
        });
    }
    const order = val.order == void 0 ? void 0 : val.order;
    if (!(val.embed_url_external_user_id == void 0) &&
        !(0, json_js_3.sdIsString)(val.embed_url_external_user_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "embed_url_external_user_id" of type "SignRequestCreateSigner"',
        });
    }
    const embedUrlExternalUserId = val.embed_url_external_user_id == void 0
        ? void 0
        : val.embed_url_external_user_id;
    if (!(val.redirect_url == void 0) && !(0, json_js_3.sdIsString)(val.redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "redirect_url" of type "SignRequestCreateSigner"',
        });
    }
    const redirectUrl = val.redirect_url == void 0 ? void 0 : val.redirect_url;
    if (!(val.declined_redirect_url == void 0) &&
        !(0, json_js_3.sdIsString)(val.declined_redirect_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "declined_redirect_url" of type "SignRequestCreateSigner"',
        });
    }
    const declinedRedirectUrl = val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
    if (!(val.login_required == void 0) && !(0, json_js_1.sdIsBoolean)(val.login_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "login_required" of type "SignRequestCreateSigner"',
        });
    }
    const loginRequired = val.login_required == void 0 ? void 0 : val.login_required;
    if (!(val.verification_phone_number == void 0) &&
        !(0, json_js_3.sdIsString)(val.verification_phone_number)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "verification_phone_number" of type "SignRequestCreateSigner"',
        });
    }
    const verificationPhoneNumber = val.verification_phone_number == void 0
        ? void 0
        : val.verification_phone_number;
    if (!(val.password == void 0) && !(0, json_js_3.sdIsString)(val.password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "password" of type "SignRequestCreateSigner"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.signer_group_id == void 0) && !(0, json_js_3.sdIsString)(val.signer_group_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "signer_group_id" of type "SignRequestCreateSigner"',
        });
    }
    const signerGroupId = val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
    if (!(val.suppress_notifications == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.suppress_notifications)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "suppress_notifications" of type "SignRequestCreateSigner"',
        });
    }
    const suppressNotifications = val.suppress_notifications == void 0 ? void 0 : val.suppress_notifications;
    return {
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
//# sourceMappingURL=signRequestCreateSigner.generated.js.map