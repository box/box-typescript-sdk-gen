import { GroupMemberships } from "../schemas.generated.js";
import { GroupMembership } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetUserMembershipsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetUserMembershipsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetUserMembershipsHeadersArg);
}
export interface GetGroupMembershipsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class GetGroupMembershipsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetGroupMembershipsHeadersArg);
}
export interface CreateGroupMembershipRequestBodyArgUserField {
    readonly id: string;
}
export interface CreateGroupMembershipRequestBodyArgGroupField {
    readonly id: string;
}
export type CreateGroupMembershipRequestBodyArgRoleField = "member" | "admin";
export interface CreateGroupMembershipRequestBodyArgConfigurablePermissionsField {
}
export interface CreateGroupMembershipRequestBodyArg {
    readonly user: CreateGroupMembershipRequestBodyArgUserField;
    readonly group: CreateGroupMembershipRequestBodyArgGroupField;
    readonly role?: CreateGroupMembershipRequestBodyArgRoleField;
    readonly configurablePermissions?: CreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
}
export interface CreateGroupMembershipQueryParamsArg {
    readonly fields?: string;
}
export declare class CreateGroupMembershipHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateGroupMembershipHeadersArg);
}
export interface GetGroupMembershipByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetGroupMembershipByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetGroupMembershipByIdHeadersArg);
}
export type UpdateGroupMembershipByIdRequestBodyArgRoleField = "member" | "admin";
export interface UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField {
}
export interface UpdateGroupMembershipByIdRequestBodyArg {
    readonly role?: UpdateGroupMembershipByIdRequestBodyArgRoleField;
    readonly configurablePermissions?: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
}
export interface UpdateGroupMembershipByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class UpdateGroupMembershipByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateGroupMembershipByIdHeadersArg);
}
export declare class DeleteGroupMembershipByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteGroupMembershipByIdHeadersArg);
}
export declare class MembershipsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MembershipsManager, "getUserMemberships" | "getGroupMemberships" | "createGroupMembership" | "getGroupMembershipById" | "updateGroupMembershipById" | "deleteGroupMembershipById">);
    getUserMemberships(userId: string, queryParams?: GetUserMembershipsQueryParamsArg, headers?: GetUserMembershipsHeadersArg): Promise<GroupMemberships>;
    getGroupMemberships(groupId: string, queryParams?: GetGroupMembershipsQueryParamsArg, headers?: GetGroupMembershipsHeadersArg): Promise<GroupMemberships>;
    createGroupMembership(requestBody: CreateGroupMembershipRequestBodyArg, queryParams?: CreateGroupMembershipQueryParamsArg, headers?: CreateGroupMembershipHeadersArg): Promise<GroupMembership>;
    getGroupMembershipById(groupMembershipId: string, queryParams?: GetGroupMembershipByIdQueryParamsArg, headers?: GetGroupMembershipByIdHeadersArg): Promise<GroupMembership>;
    updateGroupMembershipById(groupMembershipId: string, requestBody: UpdateGroupMembershipByIdRequestBodyArg, queryParams?: UpdateGroupMembershipByIdQueryParamsArg, headers?: UpdateGroupMembershipByIdHeadersArg): Promise<GroupMembership>;
    deleteGroupMembershipById(groupMembershipId: string, headers?: DeleteGroupMembershipByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateGroupMembershipRequestBodyArgUserField(val: CreateGroupMembershipRequestBodyArgUserField): Json;
export declare function deserializeCreateGroupMembershipRequestBodyArgUserField(val: any): CreateGroupMembershipRequestBodyArgUserField;
export declare function serializeCreateGroupMembershipRequestBodyArgGroupField(val: CreateGroupMembershipRequestBodyArgGroupField): Json;
export declare function deserializeCreateGroupMembershipRequestBodyArgGroupField(val: any): CreateGroupMembershipRequestBodyArgGroupField;
export declare function serializeCreateGroupMembershipRequestBodyArgRoleField(val: CreateGroupMembershipRequestBodyArgRoleField): Json;
export declare function deserializeCreateGroupMembershipRequestBodyArgRoleField(val: any): CreateGroupMembershipRequestBodyArgRoleField;
export declare function serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: CreateGroupMembershipRequestBodyArgConfigurablePermissionsField): Json;
export declare function deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: any): CreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
export declare function serializeCreateGroupMembershipRequestBodyArg(val: CreateGroupMembershipRequestBodyArg): Json;
export declare function deserializeCreateGroupMembershipRequestBodyArg(val: any): CreateGroupMembershipRequestBodyArg;
export declare function serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: UpdateGroupMembershipByIdRequestBodyArgRoleField): Json;
export declare function deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: any): UpdateGroupMembershipByIdRequestBodyArgRoleField;
export declare function serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField): Json;
export declare function deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: any): UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
export declare function serializeUpdateGroupMembershipByIdRequestBodyArg(val: UpdateGroupMembershipByIdRequestBodyArg): Json;
export declare function deserializeUpdateGroupMembershipByIdRequestBodyArg(val: any): UpdateGroupMembershipByIdRequestBodyArg;
