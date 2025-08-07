import { HubBaseV2025R0 } from './hubBaseV2025R0.generated.js';
import { HubAccessGranteeV2025R0 } from './hubAccessGranteeV2025R0.generated.js';
import { TermsOfServiceBaseV2025R0 } from './termsOfServiceBaseV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type HubCollaborationV2025R0TypeField = 'hub_collaboration';
export type HubCollaborationV2025R0StatusField = 'accepted' | 'pending' | 'rejected' | string;
export interface HubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField {
    /**
     * Whether or not the terms of service have been accepted.  The
     * field is `null` when there is no terms of service required. */
    readonly isAccepted?: boolean | null;
    readonly termsOfService?: TermsOfServiceBaseV2025R0;
    readonly rawData?: SerializedData;
}
export interface HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField {
    /**
     * Whether or not the enterprise that owns the content requires
     * a strong password to collaborate on the content, or enforces
     * an exposed password detection for the external collaborators. */
    readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
    /**
     * Whether or not the user has a strong and not exposed password set
     * for their account. The field is `null` when a strong password is
     * not required. */
    readonly userHasStrongPassword?: boolean | null;
    readonly rawData?: SerializedData;
}
export interface HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField {
    /**
     * Whether or not the enterprise that owns the content requires
     * two-factor authentication to be enabled in order to
     * collaborate on the content. */
    readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
    /**
     * Whether or not the user has two-factor authentication
     * enabled. The field is `null` when two-factor
     * authentication is not required. */
    readonly userHasTwoFactorAuthenticationEnabled?: boolean | null;
    readonly rawData?: SerializedData;
}
export interface HubCollaborationV2025R0AcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: HubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
    readonly rawData?: SerializedData;
}
export declare class HubCollaborationV2025R0 {
    /**
     * The unique identifier for this collaboration. */
    readonly id: string;
    /**
     * The value will always be `hub_collaboration`. */
    readonly type: HubCollaborationV2025R0TypeField;
    readonly hub?: HubBaseV2025R0;
    readonly accessibleBy?: HubAccessGranteeV2025R0;
    /**
     * The level of access granted to hub.
     * Possible values are `editor`, `viewer`, and `co-owner`. */
    readonly role?: string;
    /**
     * The status of the collaboration invitation. If the status
     * is `pending`, `login` and `name` return an empty string. */
    readonly status?: HubCollaborationV2025R0StatusField;
    readonly acceptanceRequirementsStatus?: HubCollaborationV2025R0AcceptanceRequirementsStatusField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<HubCollaborationV2025R0, 'type'> & Partial<Pick<HubCollaborationV2025R0, 'type'>>);
}
export interface HubCollaborationV2025R0Input {
    /**
     * The unique identifier for this collaboration. */
    readonly id: string;
    /**
     * The value will always be `hub_collaboration`. */
    readonly type?: HubCollaborationV2025R0TypeField;
    readonly hub?: HubBaseV2025R0;
    readonly accessibleBy?: HubAccessGranteeV2025R0;
    /**
     * The level of access granted to hub.
     * Possible values are `editor`, `viewer`, and `co-owner`. */
    readonly role?: string;
    /**
     * The status of the collaboration invitation. If the status
     * is `pending`, `login` and `name` return an empty string. */
    readonly status?: HubCollaborationV2025R0StatusField;
    readonly acceptanceRequirementsStatus?: HubCollaborationV2025R0AcceptanceRequirementsStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeHubCollaborationV2025R0TypeField(val: HubCollaborationV2025R0TypeField): SerializedData;
export declare function deserializeHubCollaborationV2025R0TypeField(val: SerializedData): HubCollaborationV2025R0TypeField;
export declare function serializeHubCollaborationV2025R0StatusField(val: HubCollaborationV2025R0StatusField): SerializedData;
export declare function deserializeHubCollaborationV2025R0StatusField(val: SerializedData): HubCollaborationV2025R0StatusField;
export declare function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField(val: HubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField): SerializedData;
export declare function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField(val: SerializedData): HubCollaborationV2025R0AcceptanceRequirementsStatusTermsOfServiceRequirementField;
export declare function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField(val: HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField): SerializedData;
export declare function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField(val: SerializedData): HubCollaborationV2025R0AcceptanceRequirementsStatusStrongPasswordRequirementField;
export declare function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val: HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField): SerializedData;
export declare function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val: SerializedData): HubCollaborationV2025R0AcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
export declare function serializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val: HubCollaborationV2025R0AcceptanceRequirementsStatusField): SerializedData;
export declare function deserializeHubCollaborationV2025R0AcceptanceRequirementsStatusField(val: SerializedData): HubCollaborationV2025R0AcceptanceRequirementsStatusField;
export declare function serializeHubCollaborationV2025R0(val: HubCollaborationV2025R0): SerializedData;
export declare function deserializeHubCollaborationV2025R0(val: SerializedData): HubCollaborationV2025R0;
export declare function serializeHubCollaborationV2025R0Input(val: HubCollaborationV2025R0Input): SerializedData;
export declare function deserializeHubCollaborationV2025R0Input(val: SerializedData): HubCollaborationV2025R0Input;
