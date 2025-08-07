"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaboration = void 0;
exports.serializeCollaborationTypeField = serializeCollaborationTypeField;
exports.deserializeCollaborationTypeField = deserializeCollaborationTypeField;
exports.serializeCollaborationRoleField = serializeCollaborationRoleField;
exports.deserializeCollaborationRoleField = deserializeCollaborationRoleField;
exports.serializeCollaborationStatusField = serializeCollaborationStatusField;
exports.deserializeCollaborationStatusField = deserializeCollaborationStatusField;
exports.serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField = serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
exports.deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField = deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
exports.serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField = serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
exports.deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField = deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
exports.serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField = serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
exports.deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField = deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
exports.serializeCollaborationAcceptanceRequirementsStatusField = serializeCollaborationAcceptanceRequirementsStatusField;
exports.deserializeCollaborationAcceptanceRequirementsStatusField = deserializeCollaborationAcceptanceRequirementsStatusField;
exports.serializeCollaboration = serializeCollaboration;
exports.deserializeCollaboration = deserializeCollaboration;
exports.serializeCollaborationInput = serializeCollaborationInput;
exports.deserializeCollaborationInput = deserializeCollaborationInput;
const fileOrFolderOrWebLink_generated_js_1 = require("./fileOrFolderOrWebLink.generated.js");
const fileOrFolderOrWebLink_generated_js_2 = require("./fileOrFolderOrWebLink.generated.js");
const appItem_generated_js_1 = require("./appItem.generated.js");
const appItem_generated_js_2 = require("./appItem.generated.js");
const groupMiniOrUserCollaborations_generated_js_1 = require("./groupMiniOrUserCollaborations.generated.js");
const groupMiniOrUserCollaborations_generated_js_2 = require("./groupMiniOrUserCollaborations.generated.js");
const userCollaborations_generated_js_1 = require("./userCollaborations.generated.js");
const userCollaborations_generated_js_2 = require("./userCollaborations.generated.js");
const termsOfServiceBase_generated_js_1 = require("./termsOfServiceBase.generated.js");
const termsOfServiceBase_generated_js_2 = require("./termsOfServiceBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class Collaboration {
    constructor(fields) {
        /**
         * The value will always be `collaboration`. */
        this.type = 'collaboration';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.item !== undefined) {
            this.item = fields.item;
        }
        if (fields.appItem !== undefined) {
            this.appItem = fields.appItem;
        }
        if (fields.accessibleBy !== undefined) {
            this.accessibleBy = fields.accessibleBy;
        }
        if (fields.inviteEmail !== undefined) {
            this.inviteEmail = fields.inviteEmail;
        }
        if (fields.role !== undefined) {
            this.role = fields.role;
        }
        if (fields.expiresAt !== undefined) {
            this.expiresAt = fields.expiresAt;
        }
        if (fields.isAccessOnly !== undefined) {
            this.isAccessOnly = fields.isAccessOnly;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.acknowledgedAt !== undefined) {
            this.acknowledgedAt = fields.acknowledgedAt;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.acceptanceRequirementsStatus !== undefined) {
            this.acceptanceRequirementsStatus = fields.acceptanceRequirementsStatus;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.Collaboration = Collaboration;
function serializeCollaborationTypeField(val) {
    return val;
}
function deserializeCollaborationTypeField(val) {
    if (val == 'collaboration') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationTypeField",
    });
}
function serializeCollaborationRoleField(val) {
    return val;
}
function deserializeCollaborationRoleField(val) {
    if (val == 'editor') {
        return val;
    }
    if (val == 'viewer') {
        return val;
    }
    if (val == 'previewer') {
        return val;
    }
    if (val == 'uploader') {
        return val;
    }
    if (val == 'previewer uploader') {
        return val;
    }
    if (val == 'viewer uploader') {
        return val;
    }
    if (val == 'co-owner') {
        return val;
    }
    if (val == 'owner') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationRoleField",
    });
}
function serializeCollaborationStatusField(val) {
    return val;
}
function deserializeCollaborationStatusField(val) {
    if (val == 'accepted') {
        return val;
    }
    if (val == 'pending') {
        return val;
    }
    if (val == 'rejected') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollaborationStatusField",
    });
}
function serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val) {
    return {
        ['is_accepted']: val.isAccepted,
        ['terms_of_service']: val.termsOfService == void 0
            ? val.termsOfService
            : (0, termsOfServiceBase_generated_js_1.serializeTermsOfServiceBase)(val.termsOfService),
    };
}
function deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField"',
        });
    }
    if (!(val.is_accepted == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_accepted)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField"',
        });
    }
    const isAccepted = val.is_accepted == void 0 ? void 0 : val.is_accepted;
    const termsOfService = val.terms_of_service == void 0
        ? void 0
        : (0, termsOfServiceBase_generated_js_2.deserializeTermsOfServiceBase)(val.terms_of_service);
    return {
        isAccepted: isAccepted,
        termsOfService: termsOfService,
    };
}
function serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val) {
    return {
        ['enterprise_has_strong_password_required_for_external_users']: val.enterpriseHasStrongPasswordRequiredForExternalUsers,
        ['user_has_strong_password']: val.userHasStrongPassword,
    };
}
function deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    if (!(val.enterprise_has_strong_password_required_for_external_users == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.enterprise_has_strong_password_required_for_external_users)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "enterprise_has_strong_password_required_for_external_users" of type "CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    const enterpriseHasStrongPasswordRequiredForExternalUsers = val.enterprise_has_strong_password_required_for_external_users == void 0
        ? void 0
        : val.enterprise_has_strong_password_required_for_external_users;
    if (!(val.user_has_strong_password == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.user_has_strong_password)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "user_has_strong_password" of type "CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    const userHasStrongPassword = val.user_has_strong_password == void 0
        ? void 0
        : val.user_has_strong_password;
    return {
        enterpriseHasStrongPasswordRequiredForExternalUsers: enterpriseHasStrongPasswordRequiredForExternalUsers,
        userHasStrongPassword: userHasStrongPassword,
    };
}
function serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val) {
    return {
        ['enterprise_has_two_factor_auth_enabled']: val.enterpriseHasTwoFactorAuthEnabled,
        ['user_has_two_factor_authentication_enabled']: val.userHasTwoFactorAuthenticationEnabled,
    };
}
function deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    if (!(val.enterprise_has_two_factor_auth_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.enterprise_has_two_factor_auth_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "enterprise_has_two_factor_auth_enabled" of type "CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    const enterpriseHasTwoFactorAuthEnabled = val.enterprise_has_two_factor_auth_enabled == void 0
        ? void 0
        : val.enterprise_has_two_factor_auth_enabled;
    if (!(val.user_has_two_factor_authentication_enabled == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.user_has_two_factor_authentication_enabled)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "user_has_two_factor_authentication_enabled" of type "CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    const userHasTwoFactorAuthenticationEnabled = val.user_has_two_factor_authentication_enabled == void 0
        ? void 0
        : val.user_has_two_factor_authentication_enabled;
    return {
        enterpriseHasTwoFactorAuthEnabled: enterpriseHasTwoFactorAuthEnabled,
        userHasTwoFactorAuthenticationEnabled: userHasTwoFactorAuthenticationEnabled,
    };
}
function serializeCollaborationAcceptanceRequirementsStatusField(val) {
    return {
        ['terms_of_service_requirement']: val.termsOfServiceRequirement == void 0
            ? val.termsOfServiceRequirement
            : serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val.termsOfServiceRequirement),
        ['strong_password_requirement']: val.strongPasswordRequirement == void 0
            ? val.strongPasswordRequirement
            : serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val.strongPasswordRequirement),
        ['two_factor_authentication_requirement']: val.twoFactorAuthenticationRequirement == void 0
            ? val.twoFactorAuthenticationRequirement
            : serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val.twoFactorAuthenticationRequirement),
    };
}
function deserializeCollaborationAcceptanceRequirementsStatusField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusField"',
        });
    }
    const termsOfServiceRequirement = val.terms_of_service_requirement == void 0
        ? void 0
        : deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val.terms_of_service_requirement);
    const strongPasswordRequirement = val.strong_password_requirement == void 0
        ? void 0
        : deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val.strong_password_requirement);
    const twoFactorAuthenticationRequirement = val.two_factor_authentication_requirement == void 0
        ? void 0
        : deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val.two_factor_authentication_requirement);
    return {
        termsOfServiceRequirement: termsOfServiceRequirement,
        strongPasswordRequirement: strongPasswordRequirement,
        twoFactorAuthenticationRequirement: twoFactorAuthenticationRequirement,
    };
}
function serializeCollaboration(val) {
    return {
        ['id']: val.id,
        ['type']: serializeCollaborationTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : (0, fileOrFolderOrWebLink_generated_js_1.serializeFileOrFolderOrWebLink)(val.item),
        ['app_item']: val.appItem == void 0 ? val.appItem : (0, appItem_generated_js_1.serializeAppItem)(val.appItem),
        ['accessible_by']: val.accessibleBy == void 0
            ? val.accessibleBy
            : (0, groupMiniOrUserCollaborations_generated_js_1.serializeGroupMiniOrUserCollaborations)(val.accessibleBy),
        ['invite_email']: val.inviteEmail,
        ['role']: val.role == void 0 ? val.role : serializeCollaborationRoleField(val.role),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['is_access_only']: val.isAccessOnly,
        ['status']: val.status == void 0
            ? val.status
            : serializeCollaborationStatusField(val.status),
        ['acknowledged_at']: val.acknowledgedAt == void 0
            ? val.acknowledgedAt
            : (0, utils_js_1.serializeDateTime)(val.acknowledgedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userCollaborations_generated_js_1.serializeUserCollaborations)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['acceptance_requirements_status']: val.acceptanceRequirementsStatus == void 0
            ? val.acceptanceRequirementsStatus
            : serializeCollaborationAcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus),
    };
}
function deserializeCollaboration(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Collaboration"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "Collaboration" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Collaboration"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "Collaboration" to be defined',
        });
    }
    const type = deserializeCollaborationTypeField(val.type);
    const item = val.item == void 0 ? void 0 : (0, fileOrFolderOrWebLink_generated_js_2.deserializeFileOrFolderOrWebLink)(val.item);
    const appItem = val.app_item == void 0 ? void 0 : (0, appItem_generated_js_2.deserializeAppItem)(val.app_item);
    const accessibleBy = val.accessible_by == void 0
        ? void 0
        : (0, groupMiniOrUserCollaborations_generated_js_2.deserializeGroupMiniOrUserCollaborations)(val.accessible_by);
    if (!(val.invite_email == void 0) && !(0, json_js_2.sdIsString)(val.invite_email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "invite_email" of type "Collaboration"',
        });
    }
    const inviteEmail = val.invite_email == void 0 ? void 0 : val.invite_email;
    const role = val.role == void 0 ? void 0 : deserializeCollaborationRoleField(val.role);
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "Collaboration"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    if (!(val.is_access_only == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_access_only)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_access_only" of type "Collaboration"',
        });
    }
    const isAccessOnly = val.is_access_only == void 0 ? void 0 : val.is_access_only;
    const status = val.status == void 0
        ? void 0
        : deserializeCollaborationStatusField(val.status);
    if (!(val.acknowledged_at == void 0) && !(0, json_js_2.sdIsString)(val.acknowledged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "acknowledged_at" of type "Collaboration"',
        });
    }
    const acknowledgedAt = val.acknowledged_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.acknowledged_at);
    const createdBy = val.created_by == void 0
        ? void 0
        : (0, userCollaborations_generated_js_2.deserializeUserCollaborations)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "Collaboration"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Collaboration"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    const acceptanceRequirementsStatus = val.acceptance_requirements_status == void 0
        ? void 0
        : deserializeCollaborationAcceptanceRequirementsStatusField(val.acceptance_requirements_status);
    return {
        id: id,
        type: type,
        item: item,
        appItem: appItem,
        accessibleBy: accessibleBy,
        inviteEmail: inviteEmail,
        role: role,
        expiresAt: expiresAt,
        isAccessOnly: isAccessOnly,
        status: status,
        acknowledgedAt: acknowledgedAt,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        acceptanceRequirementsStatus: acceptanceRequirementsStatus,
    };
}
function serializeCollaborationInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeCollaborationTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : (0, fileOrFolderOrWebLink_generated_js_1.serializeFileOrFolderOrWebLink)(val.item),
        ['app_item']: val.appItem == void 0 ? val.appItem : (0, appItem_generated_js_1.serializeAppItem)(val.appItem),
        ['accessible_by']: val.accessibleBy == void 0
            ? val.accessibleBy
            : (0, groupMiniOrUserCollaborations_generated_js_1.serializeGroupMiniOrUserCollaborations)(val.accessibleBy),
        ['invite_email']: val.inviteEmail,
        ['role']: val.role == void 0 ? val.role : serializeCollaborationRoleField(val.role),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['is_access_only']: val.isAccessOnly,
        ['status']: val.status == void 0
            ? val.status
            : serializeCollaborationStatusField(val.status),
        ['acknowledged_at']: val.acknowledgedAt == void 0
            ? val.acknowledgedAt
            : (0, utils_js_1.serializeDateTime)(val.acknowledgedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userCollaborations_generated_js_1.serializeUserCollaborations)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['acceptance_requirements_status']: val.acceptanceRequirementsStatus == void 0
            ? val.acceptanceRequirementsStatus
            : serializeCollaborationAcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus),
    };
}
function deserializeCollaborationInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CollaborationInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeCollaborationTypeField(val.type);
    const item = val.item == void 0 ? void 0 : (0, fileOrFolderOrWebLink_generated_js_2.deserializeFileOrFolderOrWebLink)(val.item);
    const appItem = val.app_item == void 0 ? void 0 : (0, appItem_generated_js_2.deserializeAppItem)(val.app_item);
    const accessibleBy = val.accessible_by == void 0
        ? void 0
        : (0, groupMiniOrUserCollaborations_generated_js_2.deserializeGroupMiniOrUserCollaborations)(val.accessible_by);
    if (!(val.invite_email == void 0) && !(0, json_js_2.sdIsString)(val.invite_email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "invite_email" of type "CollaborationInput"',
        });
    }
    const inviteEmail = val.invite_email == void 0 ? void 0 : val.invite_email;
    const role = val.role == void 0 ? void 0 : deserializeCollaborationRoleField(val.role);
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "CollaborationInput"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    if (!(val.is_access_only == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_access_only)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_access_only" of type "CollaborationInput"',
        });
    }
    const isAccessOnly = val.is_access_only == void 0 ? void 0 : val.is_access_only;
    const status = val.status == void 0
        ? void 0
        : deserializeCollaborationStatusField(val.status);
    if (!(val.acknowledged_at == void 0) && !(0, json_js_2.sdIsString)(val.acknowledged_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "acknowledged_at" of type "CollaborationInput"',
        });
    }
    const acknowledgedAt = val.acknowledged_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.acknowledged_at);
    const createdBy = val.created_by == void 0
        ? void 0
        : (0, userCollaborations_generated_js_2.deserializeUserCollaborations)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "CollaborationInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "CollaborationInput"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    const acceptanceRequirementsStatus = val.acceptance_requirements_status == void 0
        ? void 0
        : deserializeCollaborationAcceptanceRequirementsStatusField(val.acceptance_requirements_status);
    return {
        id: id,
        type: type,
        item: item,
        appItem: appItem,
        accessibleBy: accessibleBy,
        inviteEmail: inviteEmail,
        role: role,
        expiresAt: expiresAt,
        isAccessOnly: isAccessOnly,
        status: status,
        acknowledgedAt: acknowledgedAt,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        acceptanceRequirementsStatus: acceptanceRequirementsStatus,
    };
}
//# sourceMappingURL=collaboration.generated.js.map