import { serializeTemplateSignerInput } from './templateSignerInput.generated.js';
import { deserializeTemplateSignerInput } from './templateSignerInput.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTemplateSignerRoleField(val) {
    return val;
}
export function deserializeTemplateSignerRoleField(val) {
    if (val == 'signer') {
        return val;
    }
    if (val == 'approver') {
        return val;
    }
    if (val == 'final_copy_reader') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TemplateSignerRoleField",
    });
}
export function serializeTemplateSigner(val) {
    return {
        ['inputs']: val.inputs == void 0
            ? val.inputs
            : val.inputs.map(function (item) {
                return serializeTemplateSignerInput(item);
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
export function deserializeTemplateSigner(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "TemplateSigner"' });
    }
    if (!(val.inputs == void 0) && !sdIsList(val.inputs)) {
        throw new BoxSdkError({
            message: 'Expecting array for "inputs" of type "TemplateSigner"',
        });
    }
    const inputs = val.inputs == void 0
        ? void 0
        : sdIsList(val.inputs)
            ? val.inputs.map(function (itm) {
                return deserializeTemplateSignerInput(itm);
            })
            : [];
    if (!(val.email == void 0) && !sdIsString(val.email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email" of type "TemplateSigner"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    const role = val.role == void 0 ? void 0 : deserializeTemplateSignerRoleField(val.role);
    if (!(val.is_in_person == void 0) && !sdIsBoolean(val.is_in_person)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_in_person" of type "TemplateSigner"',
        });
    }
    const isInPerson = val.is_in_person == void 0 ? void 0 : val.is_in_person;
    if (!(val.order == void 0) && !sdIsNumber(val.order)) {
        throw new BoxSdkError({
            message: 'Expecting number for "order" of type "TemplateSigner"',
        });
    }
    const order = val.order == void 0 ? void 0 : val.order;
    if (!(val.signer_group_id == void 0) && !sdIsString(val.signer_group_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "signer_group_id" of type "TemplateSigner"',
        });
    }
    const signerGroupId = val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
    if (!(val.label == void 0) && !sdIsString(val.label)) {
        throw new BoxSdkError({
            message: 'Expecting string for "label" of type "TemplateSigner"',
        });
    }
    const label = val.label == void 0 ? void 0 : val.label;
    if (!(val.public_id == void 0) && !sdIsString(val.public_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "public_id" of type "TemplateSigner"',
        });
    }
    const publicId = val.public_id == void 0 ? void 0 : val.public_id;
    if (!(val.is_password_required == void 0) &&
        !sdIsBoolean(val.is_password_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_password_required" of type "TemplateSigner"',
        });
    }
    const isPasswordRequired = val.is_password_required == void 0 ? void 0 : val.is_password_required;
    if (!(val.is_phone_number_required == void 0) &&
        !sdIsBoolean(val.is_phone_number_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_phone_number_required" of type "TemplateSigner"',
        });
    }
    const isPhoneNumberRequired = val.is_phone_number_required == void 0
        ? void 0
        : val.is_phone_number_required;
    if (!(val.login_required == void 0) && !sdIsBoolean(val.login_required)) {
        throw new BoxSdkError({
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