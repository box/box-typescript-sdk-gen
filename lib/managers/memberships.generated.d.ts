import { GroupMemberships } from "../schemas.generated.js";
import { GroupMembership } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetUserMembershipsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetGroupMembershipsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
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
export interface GetGroupMembershipByIdQueryParamsArg {
    readonly fields?: string;
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
export declare class MembershipsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MembershipsManager, "getUserMemberships" | "getGroupMemberships" | "createGroupMembership" | "getGroupMembershipById" | "updateGroupMembershipById" | "deleteGroupMembershipById">);
    getUserMemberships(userId: string, queryParams?: undefined | GetUserMembershipsQueryParamsArg): Promise<GroupMemberships>;
    getGroupMemberships(groupId: string, queryParams?: undefined | GetGroupMembershipsQueryParamsArg): Promise<GroupMemberships>;
    createGroupMembership(requestBody: CreateGroupMembershipRequestBodyArg, queryParams?: undefined | CreateGroupMembershipQueryParamsArg): Promise<GroupMembership>;
    getGroupMembershipById(groupMembershipId: string, queryParams?: undefined | GetGroupMembershipByIdQueryParamsArg): Promise<GroupMembership>;
    updateGroupMembershipById(groupMembershipId: string, requestBody: UpdateGroupMembershipByIdRequestBodyArg, queryParams?: undefined | UpdateGroupMembershipByIdQueryParamsArg): Promise<GroupMembership>;
    deleteGroupMembershipById(groupMembershipId: string): Promise<any>;
}
export declare function newSerializeGetUserMembershipsQueryParamsArg(val: GetUserMembershipsQueryParamsArg): Json;
export declare function newDeserializeGetUserMembershipsQueryParamsArg(val: any): GetUserMembershipsQueryParamsArg;
export declare function newSerializeGetGroupMembershipsQueryParamsArg(val: GetGroupMembershipsQueryParamsArg): Json;
export declare function newDeserializeGetGroupMembershipsQueryParamsArg(val: any): GetGroupMembershipsQueryParamsArg;
export declare function newSerializeCreateGroupMembershipRequestBodyArgUserField(val: CreateGroupMembershipRequestBodyArgUserField): Json;
export declare function newDeserializeCreateGroupMembershipRequestBodyArgUserField(val: any): CreateGroupMembershipRequestBodyArgUserField;
export declare function newSerializeCreateGroupMembershipRequestBodyArgGroupField(val: CreateGroupMembershipRequestBodyArgGroupField): Json;
export declare function newDeserializeCreateGroupMembershipRequestBodyArgGroupField(val: any): CreateGroupMembershipRequestBodyArgGroupField;
export declare function newSerializeCreateGroupMembershipRequestBodyArgRoleField(val: CreateGroupMembershipRequestBodyArgRoleField): Json;
export declare function newDeserializeCreateGroupMembershipRequestBodyArgRoleField(val: any): CreateGroupMembershipRequestBodyArgRoleField;
export declare function newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: CreateGroupMembershipRequestBodyArgConfigurablePermissionsField): Json;
export declare function newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: any): CreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
export declare function newSerializeCreateGroupMembershipRequestBodyArg(val: CreateGroupMembershipRequestBodyArg): Json;
export declare function newDeserializeCreateGroupMembershipRequestBodyArg(val: any): CreateGroupMembershipRequestBodyArg;
export declare function newSerializeCreateGroupMembershipQueryParamsArg(val: CreateGroupMembershipQueryParamsArg): Json;
export declare function newDeserializeCreateGroupMembershipQueryParamsArg(val: any): CreateGroupMembershipQueryParamsArg;
export declare function newSerializeGetGroupMembershipByIdQueryParamsArg(val: GetGroupMembershipByIdQueryParamsArg): Json;
export declare function newDeserializeGetGroupMembershipByIdQueryParamsArg(val: any): GetGroupMembershipByIdQueryParamsArg;
export declare function newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: UpdateGroupMembershipByIdRequestBodyArgRoleField): Json;
export declare function newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: any): UpdateGroupMembershipByIdRequestBodyArgRoleField;
export declare function newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField): Json;
export declare function newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: any): UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
export declare function newSerializeUpdateGroupMembershipByIdRequestBodyArg(val: UpdateGroupMembershipByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateGroupMembershipByIdRequestBodyArg(val: any): UpdateGroupMembershipByIdRequestBodyArg;
export declare function newSerializeUpdateGroupMembershipByIdQueryParamsArg(val: UpdateGroupMembershipByIdQueryParamsArg): Json;
export declare function newDeserializeUpdateGroupMembershipByIdQueryParamsArg(val: any): UpdateGroupMembershipByIdQueryParamsArg;
