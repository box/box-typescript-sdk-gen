import { serializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { deserializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { serializeAppItem } from './appItem.generated.js';
import { deserializeAppItem } from './appItem.generated.js';
import { serializeGroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { deserializeGroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { serializeUserCollaborations } from './userCollaborations.generated.js';
import { deserializeUserCollaborations } from './userCollaborations.generated.js';
import { serializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { deserializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class Collaboration {
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
export function serializeCollaborationTypeField(val) {
    return val;
}
export function deserializeCollaborationTypeField(val) {
    if (val == 'collaboration') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationTypeField",
    });
}
export function serializeCollaborationRoleField(val) {
    return val;
}
export function deserializeCollaborationRoleField(val) {
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
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationRoleField",
    });
}
export function serializeCollaborationStatusField(val) {
    return val;
}
export function deserializeCollaborationStatusField(val) {
    if (val == 'accepted') {
        return val;
    }
    if (val == 'pending') {
        return val;
    }
    if (val == 'rejected') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaborationStatusField",
    });
}
export function serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val) {
    return {
        ['is_accepted']: val.isAccepted,
        ['terms_of_service']: val.termsOfService == void 0
            ? val.termsOfService
            : serializeTermsOfServiceBase(val.termsOfService),
    };
}
export function deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField"',
        });
    }
    if (!(val.is_accepted == void 0) && !sdIsBoolean(val.is_accepted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField"',
        });
    }
    const isAccepted = val.is_accepted == void 0 ? void 0 : val.is_accepted;
    const termsOfService = val.terms_of_service == void 0
        ? void 0
        : deserializeTermsOfServiceBase(val.terms_of_service);
    return {
        isAccepted: isAccepted,
        termsOfService: termsOfService,
    };
}
export function serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val) {
    return {
        ['enterprise_has_strong_password_required_for_external_users']: val.enterpriseHasStrongPasswordRequiredForExternalUsers,
        ['user_has_strong_password']: val.userHasStrongPassword,
    };
}
export function deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    if (!(val.enterprise_has_strong_password_required_for_external_users == void 0) &&
        !sdIsBoolean(val.enterprise_has_strong_password_required_for_external_users)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "enterprise_has_strong_password_required_for_external_users" of type "CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    const enterpriseHasStrongPasswordRequiredForExternalUsers = val.enterprise_has_strong_password_required_for_external_users == void 0
        ? void 0
        : val.enterprise_has_strong_password_required_for_external_users;
    if (!(val.user_has_strong_password == void 0) &&
        !sdIsBoolean(val.user_has_strong_password)) {
        throw new BoxSdkError({
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
export function serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val) {
    return {
        ['enterprise_has_two_factor_auth_enabled']: val.enterpriseHasTwoFactorAuthEnabled,
        ['user_has_two_factor_authentication_enabled']: val.userHasTwoFactorAuthenticationEnabled,
    };
}
export function deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    if (!(val.enterprise_has_two_factor_auth_enabled == void 0) &&
        !sdIsBoolean(val.enterprise_has_two_factor_auth_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "enterprise_has_two_factor_auth_enabled" of type "CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    const enterpriseHasTwoFactorAuthEnabled = val.enterprise_has_two_factor_auth_enabled == void 0
        ? void 0
        : val.enterprise_has_two_factor_auth_enabled;
    if (!(val.user_has_two_factor_authentication_enabled == void 0) &&
        !sdIsBoolean(val.user_has_two_factor_authentication_enabled)) {
        throw new BoxSdkError({
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
export function serializeCollaborationAcceptanceRequirementsStatusField(val) {
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
export function deserializeCollaborationAcceptanceRequirementsStatusField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
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
export function serializeCollaboration(val) {
    return {
        ['id']: val.id,
        ['type']: serializeCollaborationTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : serializeFileOrFolderOrWebLink(val.item),
        ['app_item']: val.appItem == void 0 ? val.appItem : serializeAppItem(val.appItem),
        ['accessible_by']: val.accessibleBy == void 0
            ? val.accessibleBy
            : serializeGroupMiniOrUserCollaborations(val.accessibleBy),
        ['invite_email']: val.inviteEmail,
        ['role']: val.role == void 0 ? val.role : serializeCollaborationRoleField(val.role),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : serializeDateTime(val.expiresAt),
        ['is_access_only']: val.isAccessOnly,
        ['status']: val.status == void 0
            ? val.status
            : serializeCollaborationStatusField(val.status),
        ['acknowledged_at']: val.acknowledgedAt == void 0
            ? val.acknowledgedAt
            : serializeDateTime(val.acknowledgedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserCollaborations(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
        ['acceptance_requirements_status']: val.acceptanceRequirementsStatus == void 0
            ? val.acceptanceRequirementsStatus
            : serializeCollaborationAcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus),
    };
}
export function deserializeCollaboration(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Collaboration"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "Collaboration" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Collaboration"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "Collaboration" to be defined',
        });
    }
    const type = deserializeCollaborationTypeField(val.type);
    const item = val.item == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.item);
    const appItem = val.app_item == void 0 ? void 0 : deserializeAppItem(val.app_item);
    const accessibleBy = val.accessible_by == void 0
        ? void 0
        : deserializeGroupMiniOrUserCollaborations(val.accessible_by);
    if (!(val.invite_email == void 0) && !sdIsString(val.invite_email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "invite_email" of type "Collaboration"',
        });
    }
    const inviteEmail = val.invite_email == void 0 ? void 0 : val.invite_email;
    const role = val.role == void 0 ? void 0 : deserializeCollaborationRoleField(val.role);
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "Collaboration"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (!(val.is_access_only == void 0) && !sdIsBoolean(val.is_access_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_access_only" of type "Collaboration"',
        });
    }
    const isAccessOnly = val.is_access_only == void 0 ? void 0 : val.is_access_only;
    const status = val.status == void 0
        ? void 0
        : deserializeCollaborationStatusField(val.status);
    if (!(val.acknowledged_at == void 0) && !sdIsString(val.acknowledged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "acknowledged_at" of type "Collaboration"',
        });
    }
    const acknowledgedAt = val.acknowledged_at == void 0
        ? void 0
        : deserializeDateTime(val.acknowledged_at);
    const createdBy = val.created_by == void 0
        ? void 0
        : deserializeUserCollaborations(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Collaboration"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Collaboration"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
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
export function serializeCollaborationInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeCollaborationTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : serializeFileOrFolderOrWebLink(val.item),
        ['app_item']: val.appItem == void 0 ? val.appItem : serializeAppItem(val.appItem),
        ['accessible_by']: val.accessibleBy == void 0
            ? val.accessibleBy
            : serializeGroupMiniOrUserCollaborations(val.accessibleBy),
        ['invite_email']: val.inviteEmail,
        ['role']: val.role == void 0 ? val.role : serializeCollaborationRoleField(val.role),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : serializeDateTime(val.expiresAt),
        ['is_access_only']: val.isAccessOnly,
        ['status']: val.status == void 0
            ? val.status
            : serializeCollaborationStatusField(val.status),
        ['acknowledged_at']: val.acknowledgedAt == void 0
            ? val.acknowledgedAt
            : serializeDateTime(val.acknowledgedAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserCollaborations(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
        ['acceptance_requirements_status']: val.acceptanceRequirementsStatus == void 0
            ? val.acceptanceRequirementsStatus
            : serializeCollaborationAcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus),
    };
}
export function deserializeCollaborationInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaborationInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CollaborationInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaborationInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeCollaborationTypeField(val.type);
    const item = val.item == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.item);
    const appItem = val.app_item == void 0 ? void 0 : deserializeAppItem(val.app_item);
    const accessibleBy = val.accessible_by == void 0
        ? void 0
        : deserializeGroupMiniOrUserCollaborations(val.accessible_by);
    if (!(val.invite_email == void 0) && !sdIsString(val.invite_email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "invite_email" of type "CollaborationInput"',
        });
    }
    const inviteEmail = val.invite_email == void 0 ? void 0 : val.invite_email;
    const role = val.role == void 0 ? void 0 : deserializeCollaborationRoleField(val.role);
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "CollaborationInput"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (!(val.is_access_only == void 0) && !sdIsBoolean(val.is_access_only)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_access_only" of type "CollaborationInput"',
        });
    }
    const isAccessOnly = val.is_access_only == void 0 ? void 0 : val.is_access_only;
    const status = val.status == void 0
        ? void 0
        : deserializeCollaborationStatusField(val.status);
    if (!(val.acknowledged_at == void 0) && !sdIsString(val.acknowledged_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "acknowledged_at" of type "CollaborationInput"',
        });
    }
    const acknowledgedAt = val.acknowledged_at == void 0
        ? void 0
        : deserializeDateTime(val.acknowledged_at);
    const createdBy = val.created_by == void 0
        ? void 0
        : deserializeUserCollaborations(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "CollaborationInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "CollaborationInput"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
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