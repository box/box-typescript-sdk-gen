import { Group } from './group.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupFullInvitabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users' | string;
export type GroupFullMemberViewabilityLevelField = 'admins_only' | 'admins_and_members' | 'all_managed_users' | string;
export interface GroupFullPermissionsField {
    /**
     * Specifies if the user can invite the group to collaborate on any items. */
    readonly canInviteAsCollaborator?: boolean;
    readonly rawData?: SerializedData;
}
export declare class GroupFull extends Group {
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: GroupFullInvitabilityLevelField;
    readonly memberViewabilityLevel?: GroupFullMemberViewabilityLevelField;
    readonly permissions?: GroupFullPermissionsField;
    constructor(fields: GroupFull);
}
export declare function serializeGroupFullInvitabilityLevelField(val: GroupFullInvitabilityLevelField): SerializedData;
export declare function deserializeGroupFullInvitabilityLevelField(val: SerializedData): GroupFullInvitabilityLevelField;
export declare function serializeGroupFullMemberViewabilityLevelField(val: GroupFullMemberViewabilityLevelField): SerializedData;
export declare function deserializeGroupFullMemberViewabilityLevelField(val: SerializedData): GroupFullMemberViewabilityLevelField;
export declare function serializeGroupFullPermissionsField(val: GroupFullPermissionsField): SerializedData;
export declare function deserializeGroupFullPermissionsField(val: SerializedData): GroupFullPermissionsField;
export declare function serializeGroupFull(val: GroupFull): SerializedData;
export declare function deserializeGroupFull(val: SerializedData): GroupFull;
