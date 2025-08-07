import { FileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { AppItem } from './appItem.generated.js';
import { GroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { UserCollaborations } from './userCollaborations.generated.js';
import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationTypeField = 'collaboration';
export type CollaborationRoleField = 'editor' | 'viewer' | 'previewer' | 'uploader' | 'previewer uploader' | 'viewer uploader' | 'co-owner' | 'owner' | string;
export type CollaborationStatusField = 'accepted' | 'pending' | 'rejected' | string;
export interface CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField {
    /**
     * Whether or not the terms of service have been accepted.  The
     * field is `null` when there is no terms of service required. */
    readonly isAccepted?: boolean | null;
    readonly termsOfService?: TermsOfServiceBase;
    readonly rawData?: SerializedData;
}
export interface CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField {
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
export interface CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField {
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
export interface CollaborationAcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
    readonly rawData?: SerializedData;
}
export declare class Collaboration {
    /**
     * The unique identifier for this collaboration. */
    readonly id: string;
    /**
     * The value will always be `collaboration`. */
    readonly type: CollaborationTypeField;
    readonly item?: FileOrFolderOrWebLink | null;
    readonly appItem?: AppItem | null;
    readonly accessibleBy?: GroupMiniOrUserCollaborations;
    /**
     * The email address used to invite an unregistered collaborator, if
     * they are not a registered user. */
    readonly inviteEmail?: string | null;
    /**
     * The level of access granted. */
    readonly role?: CollaborationRoleField;
    /**
     * When the collaboration will expire, or `null` if no expiration
     * date is set. */
    readonly expiresAt?: DateTime | null;
    /**
     * If set to `true`, collaborators have access to
     * shared items, but such items won't be visible in the
     * All Files list. Additionally, collaborators won't
     * see the the path to the root folder for the
     * shared item. */
    readonly isAccessOnly?: boolean;
    /**
     * The status of the collaboration invitation. If the status
     * is `pending`, `login` and `name` return an empty string. */
    readonly status?: CollaborationStatusField;
    /**
     * When the `status` of the collaboration object changed to
     * `accepted` or `rejected`. */
    readonly acknowledgedAt?: DateTime;
    readonly createdBy?: UserCollaborations;
    /**
     * When the collaboration object was created. */
    readonly createdAt?: DateTime;
    /**
     * When the collaboration object was last modified. */
    readonly modifiedAt?: DateTime;
    readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<Collaboration, 'type'> & Partial<Pick<Collaboration, 'type'>>);
}
export interface CollaborationInput {
    /**
     * The unique identifier for this collaboration. */
    readonly id: string;
    /**
     * The value will always be `collaboration`. */
    readonly type?: CollaborationTypeField;
    readonly item?: FileOrFolderOrWebLink | null;
    readonly appItem?: AppItem | null;
    readonly accessibleBy?: GroupMiniOrUserCollaborations;
    /**
     * The email address used to invite an unregistered collaborator, if
     * they are not a registered user. */
    readonly inviteEmail?: string | null;
    /**
     * The level of access granted. */
    readonly role?: CollaborationRoleField;
    /**
     * When the collaboration will expire, or `null` if no expiration
     * date is set. */
    readonly expiresAt?: DateTime | null;
    /**
     * If set to `true`, collaborators have access to
     * shared items, but such items won't be visible in the
     * All Files list. Additionally, collaborators won't
     * see the the path to the root folder for the
     * shared item. */
    readonly isAccessOnly?: boolean;
    /**
     * The status of the collaboration invitation. If the status
     * is `pending`, `login` and `name` return an empty string. */
    readonly status?: CollaborationStatusField;
    /**
     * When the `status` of the collaboration object changed to
     * `accepted` or `rejected`. */
    readonly acknowledgedAt?: DateTime;
    readonly createdBy?: UserCollaborations;
    /**
     * When the collaboration object was created. */
    readonly createdAt?: DateTime;
    /**
     * When the collaboration object was last modified. */
    readonly modifiedAt?: DateTime;
    readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationTypeField(val: CollaborationTypeField): SerializedData;
export declare function deserializeCollaborationTypeField(val: SerializedData): CollaborationTypeField;
export declare function serializeCollaborationRoleField(val: CollaborationRoleField): SerializedData;
export declare function deserializeCollaborationRoleField(val: SerializedData): CollaborationRoleField;
export declare function serializeCollaborationStatusField(val: CollaborationStatusField): SerializedData;
export declare function deserializeCollaborationStatusField(val: SerializedData): CollaborationStatusField;
export declare function serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(val: SerializedData): CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(val: SerializedData): CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(val: SerializedData): CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): SerializedData;
export declare function deserializeCollaborationAcceptanceRequirementsStatusField(val: SerializedData): CollaborationAcceptanceRequirementsStatusField;
export declare function serializeCollaboration(val: Collaboration): SerializedData;
export declare function deserializeCollaboration(val: SerializedData): Collaboration;
export declare function serializeCollaborationInput(val: CollaborationInput): SerializedData;
export declare function deserializeCollaborationInput(val: SerializedData): CollaborationInput;
//# sourceMappingURL=collaboration.generated.d.ts.map