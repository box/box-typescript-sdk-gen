import { UserMini } from './userMini.generated.js';
import { GroupMini } from './groupMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type GroupMembershipTypeField = 'group_membership';
export type GroupMembershipRoleField = 'member' | 'admin' | string;
export interface GroupMembership {
    /**
     * The unique identifier for this group membership. */
    readonly id?: string;
    /**
     * The value will always be `group_membership`. */
    readonly type?: GroupMembershipTypeField;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    /**
     * The role of the user in the group. */
    readonly role?: GroupMembershipRoleField;
    /**
     * The time this membership was created. */
    readonly createdAt?: DateTime;
    /**
     * The time this membership was last modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeGroupMembershipTypeField(val: GroupMembershipTypeField): SerializedData;
export declare function deserializeGroupMembershipTypeField(val: SerializedData): GroupMembershipTypeField;
export declare function serializeGroupMembershipRoleField(val: GroupMembershipRoleField): SerializedData;
export declare function deserializeGroupMembershipRoleField(val: SerializedData): GroupMembershipRoleField;
export declare function serializeGroupMembership(val: GroupMembership): SerializedData;
export declare function deserializeGroupMembership(val: SerializedData): GroupMembership;
//# sourceMappingURL=groupMembership.generated.d.ts.map