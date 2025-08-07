"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTemplateSignerRoleField = serializeTemplateSignerRoleField;
exports.deserializeTemplateSignerRoleField = deserializeTemplateSignerRoleField;
exports.serializeTemplateSigner = serializeTemplateSigner;
exports.deserializeTemplateSigner = deserializeTemplateSigner;
const templateSignerInput_generated_js_1 = require("./templateSignerInput.generated.js");
const templateSignerInput_generated_js_2 = require("./templateSignerInput.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
const json_js_5 = require("../serialization/json.js");
function serializeTemplateSignerRoleField(val) {
    return val;
}
function deserializeTemplateSignerRoleField(val) {
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
        message: "Can't deserialize TemplateSignerRoleField",
    });
}
function serializeTemplateSigner(val) {
    return {
        ['inputs']: val.inputs == void 0
            ? val.inputs
            : val.inputs.map(function (item) {
                return (0, templateSignerInput_generated_js_1.serializeTemplateSignerInput)(item);
            }),
        ['email']: val.email,
        ['role']: val.role == void 0
            ? val.role
            : serializeTemplateSignerRoleField(val.role),
        ['is_in_person']: val.isInPerson,
        ['order']: val.order,
        ['signer_group_id']: val.signerGroupId,
        ['label']: val.label,
        ['public_id']: val.publicId,
        ['is_password_required']: val.isPasswordRequired,
        ['is_phone_number_required']: val.isPhoneNumberRequired,
        ['login_required']: val.loginRequired,
    };
}
function deserializeTemplateSigner(val) {
    if (!(0, json_js_5.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TemplateSigner"' });
    }
    if (!(val.inputs == void 0) && !(0, json_js_4.sdIsList)(val.inputs)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "inputs" of type "TemplateSigner"',
        });
    }
    const inputs = val.inputs == void 0
        ? void 0
        : (0, json_js_4.sdIsList)(val.inputs)
            ? val.inputs.map(function (itm) {
                return (0, templateSignerInput_generated_js_2.deserializeTemplateSignerInput)(itm);
            })
            : [];
    if (!(val.email == void 0) && !(0, json_js_3.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "TemplateSigner"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    const role = val.role == void 0 ? void 0 : deserializeTemplateSignerRoleField(val.role);
    if (!(val.is_in_person == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_in_person)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_in_person" of type "TemplateSigner"',
        });
    }
    const isInPerson = val.is_in_person == void 0 ? void 0 : val.is_in_person;
    if (!(val.order == void 0) && !(0, json_js_2.sdIsNumber)(val.order)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "order" of type "TemplateSigner"',
        });
    }
    const order = val.order == void 0 ? void 0 : val.order;
    if (!(val.signer_group_id == void 0) && !(0, json_js_3.sdIsString)(val.signer_group_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "signer_group_id" of type "TemplateSigner"',
        });
    }
    const signerGroupId = val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
    if (!(val.label == void 0) && !(0, json_js_3.sdIsString)(val.label)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "label" of type "TemplateSigner"',
        });
    }
    const label = val.label == void 0 ? void 0 : val.label;
    if (!(val.public_id == void 0) && !(0, json_js_3.sdIsString)(val.public_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "public_id" of type "TemplateSigner"',
        });
    }
    const publicId = val.public_id == void 0 ? void 0 : val.public_id;
    if (!(val.is_password_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_password_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_password_required" of type "TemplateSigner"',
        });
    }
    const isPasswordRequired = val.is_password_required == void 0 ? void 0 : val.is_password_required;
    if (!(val.is_phone_number_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_phone_number_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_phone_number_required" of type "TemplateSigner"',
        });
    }
    const isPhoneNumberRequired = val.is_phone_number_required == void 0
        ? void 0
        : val.is_phone_number_required;
    if (!(val.login_required == void 0) && !(0, json_js_1.sdIsBoolean)(val.login_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "login_required" of type "TemplateSigner"',
        });
    }
    const loginRequired = val.login_required == void 0 ? void 0 : val.login_required;
    return {
        inputs: inputs,
        email: email,
        role: role,
        isInPerson: isInPerson,
        order: order,
        signerGroupId: signerGroupId,
        label: label,
        publicId: publicId,
        isPasswordRequired: isPasswordRequired,
        isPhoneNumberRequired: isPhoneNumberRequired,
        loginRequired: loginRequired,
    };
}
//# sourceMappingURL=templateSigner.generated.js.map