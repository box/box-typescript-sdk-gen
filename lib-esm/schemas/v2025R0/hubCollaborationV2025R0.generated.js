import { serializeHubBaseV2025R0 } from './hubBaseV2025R0.generated.js';
import { deserializeHubBaseV2025R0 } from './hubBaseV2025R0.generated.js';
import { serializeHubAccessGranteeV2025R0 } from './hubAccessGranteeV2025R0.generated.js';
import { deserializeHubAccessGranteeV2025R0 } from './hubAccessGranteeV2025R0.generated.js';
import { serializeTermsOfServiceBaseV2025R0 } from './termsOfServiceBaseV2025R0.generated.js';
import { deserializeTermsOfServiceBaseV2025R0 } from './termsOfServiceBaseV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsBoolean } from '../../serialization/json.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class HubCollaborationV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `hub_collaboration`. */
        this.type = 'hub_collaboration';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.hub !== undefined) {
            this.hub = fields.hub;
        }
        if (fields.accessibleBy !== undefined) {
            this.accessibleBy = fields.accessibleBy;
        }
        if (fields.role !== undefined) {
            this.role = fields.role;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.acceptanceRequirementsStatus !== undefined) {
            this.acceptanceRequirementsStatus = fields.acceptanceRequirementsStatus;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeHubCollaborationV2025R0TypeField(val) {
    return val;
}
export function deserializeHubCollaborationV2025R0TypeField(val) {
    if (val == 'hub_collaboration') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize HubCollaborationV2025R0TypeField",
    });
}
export function serializeHubCollaborationV2025R0StatusField(val) {
    return val;
}
export function deserializeHubCollaborationV2025R0StatusField(val) {
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
        message: "Can't deserialize HubCollaborationV2025R0StatusField",
    });
}
export function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField(val) {
    return {
        ['is_accepted']: val.isAccepted,
        ['terms_of_service']: val.termsOfService == void 0
            ? val.termsOfService
            : serializeTermsOfServiceBaseV2025R0(val.termsOfService),
    };
}
export function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField"',
        });
    }
    if (!(val.is_accepted == void 0) && !sdIsBoolean(val.is_accepted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "HubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField"',
        });
    }
    const isAccepted = val.is_accepted == void 0 ? void 0 : val.is_accepted;
    const termsOfService = val.terms_of_service == void 0
        ? void 0
        : deserializeTermsOfServiceBaseV2025R0(val.terms_of_service);
    return {
        isAccepted: isAccepted,
        termsOfService: termsOfService,
    };
}
export function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField(val) {
    return {
        ['enterprise_has_strong_password_required_for_external_users']: val.enterpriseHasStrongPasswordRequiredForExternalUsers,
        ['user_has_strong_password']: val.userHasStrongPassword,
    };
}
export function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    if (!(val.enterprise_has_strong_password_required_for_external_users == void 0) &&
        !sdIsBoolean(val.enterprise_has_strong_password_required_for_external_users)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "enterprise_has_strong_password_required_for_external_users" of type "HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField"',
        });
    }
    const enterpriseHasStrongPasswordRequiredForExternalUsers = val.enterprise_has_strong_password_required_for_external_users == void 0
        ? void 0
        : val.enterprise_has_strong_password_required_for_external_users;
    if (!(val.user_has_strong_password == void 0) &&
        !sdIsBoolean(val.user_has_strong_password)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "user_has_strong_password" of type "HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField"',
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
export function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val) {
    return {
        ['enterprise_has_two_factor_auth_enabled']: val.enterpriseHasTwoFactorAuthEnabled,
        ['user_has_two_factor_authentication_enabled']: val.userHasTwoFactorAuthenticationEnabled,
    };
}
export function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    if (!(val.enterprise_has_two_factor_auth_enabled == void 0) &&
        !sdIsBoolean(val.enterprise_has_two_factor_auth_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "enterprise_has_two_factor_auth_enabled" of type "HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
        });
    }
    const enterpriseHasTwoFactorAuthEnabled = val.enterprise_has_two_factor_auth_enabled == void 0
        ? void 0
        : val.enterprise_has_two_factor_auth_enabled;
    if (!(val.user_has_two_factor_authentication_enabled == void 0) &&
        !sdIsBoolean(val.user_has_two_factor_authentication_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "user_has_two_factor_authentication_enabled" of type "HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField"',
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
export function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val) {
    return {
        ['terms_of_service_requirement']: val.termsOfServiceRequirement == void 0
            ? val.termsOfServiceRequirement
            : serializeHubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField(val.termsOfServiceRequirement),
        ['strong_password_requirement']: val.strongPasswordRequirement == void 0
            ? val.strongPasswordRequirement
            : serializeHubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField(val.strongPasswordRequirement),
        ['two_factor_authentication_requirement']: val.twoFactorAuthenticationRequirement == void 0
            ? val.twoFactorAuthenticationRequirement
            : serializeHubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val.twoFactorAuthenticationRequirement),
    };
}
export function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationV2025R0AcceptanceRequirementsStatusField"',
        });
    }
    const termsOfServiceRequirement = val.terms_of_service_requirement == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField(val.terms_of_service_requirement);
    const strongPasswordRequirement = val.strong_password_requirement == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField(val.strong_password_requirement);
    const twoFactorAuthenticationRequirement = val.two_factor_authentication_requirement == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val.two_factor_authentication_requirement);
    return {
        termsOfServiceRequirement: termsOfServiceRequirement,
        strongPasswordRequirement: strongPasswordRequirement,
        twoFactorAuthenticationRequirement: twoFactorAuthenticationRequirement,
    };
}
export function serializeHubCollaborationV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeHubCollaborationV2025R0TypeField(val.type),
        ['hub']: val.hub == void 0 ? val.hub : serializeHubBaseV2025R0(val.hub),
        ['accessible_by']: val.accessibleBy == void 0
            ? val.accessibleBy
            : serializeHubAccessGranteeV2025R0(val.accessibleBy),
        ['role']: val.role,
        ['status']: val.status == void 0
            ? val.status
            : serializeHubCollaborationV2025R0StatusField(val.status),
        ['acceptance_requirements_status']: val.acceptanceRequirementsStatus == void 0
            ? val.acceptanceRequirementsStatus
            : serializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus),
    };
}
export function deserializeHubCollaborationV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "HubCollaborationV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "HubCollaborationV2025R0" to be defined',
        });
    }
    const type = deserializeHubCollaborationV2025R0TypeField(val.type);
    const hub = val.hub == void 0 ? void 0 : deserializeHubBaseV2025R0(val.hub);
    const accessibleBy = val.accessible_by == void 0
        ? void 0
        : deserializeHubAccessGranteeV2025R0(val.accessible_by);
    if (!(val.role == void 0) && !sdIsString(val.role)) {
        throw new BoxSdkError({
            message: 'Expecting string for "role" of type "HubCollaborationV2025R0"',
        });
    }
    const role = val.role == void 0 ? void 0 : val.role;
    const status = val.status == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0StatusField(val.status);
    const acceptanceRequirementsStatus = val.acceptance_requirements_status == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val.acceptance_requirements_status);
    return {
        id: id,
        type: type,
        hub: hub,
        accessibleBy: accessibleBy,
        role: role,
        status: status,
        acceptanceRequirementsStatus: acceptanceRequirementsStatus,
    };
}
export function serializeHubCollaborationV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeHubCollaborationV2025R0TypeField(val.type),
        ['hub']: val.hub == void 0 ? val.hub : serializeHubBaseV2025R0(val.hub),
        ['accessible_by']: val.accessibleBy == void 0
            ? val.accessibleBy
            : serializeHubAccessGranteeV2025R0(val.accessibleBy),
        ['role']: val.role,
        ['status']: val.status == void 0
            ? val.status
            : serializeHubCollaborationV2025R0StatusField(val.status),
        ['acceptance_requirements_status']: val.acceptanceRequirementsStatus == void 0
            ? val.acceptanceRequirementsStatus
            : serializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus),
    };
}
export function deserializeHubCollaborationV2025R0Input(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "HubCollaborationV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "HubCollaborationV2025R0Input" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "HubCollaborationV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0TypeField(val.type);
    const hub = val.hub == void 0 ? void 0 : deserializeHubBaseV2025R0(val.hub);
    const accessibleBy = val.accessible_by == void 0
        ? void 0
        : deserializeHubAccessGranteeV2025R0(val.accessible_by);
    if (!(val.role == void 0) && !sdIsString(val.role)) {
        throw new BoxSdkError({
            message: 'Expecting string for "role" of type "HubCollaborationV2025R0Input"',
        });
    }
    const role = val.role == void 0 ? void 0 : val.role;
    const status = val.status == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0StatusField(val.status);
    const acceptanceRequirementsStatus = val.acceptance_requirements_status == void 0
        ? void 0
        : deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val.acceptance_requirements_status);
    return {
        id: id,
        type: type,
        hub: hub,
        accessibleBy: accessibleBy,
        role: role,
        status: status,
        acceptanceRequirementsStatus: acceptanceRequirementsStatus,
    };
}
//# sourceMappingURL=hubCollaborationV2025R0.generated.js.map