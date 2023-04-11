import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type MembershipsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetUserMembershipsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetGroupMembershipsOptionsArg {
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
export interface CreateGroupMembershipOptionsArg {
    readonly fields?: string;
}
export interface GetGroupMembershipByIdOptionsArg {
    readonly fields?: string;
}
export type UpdateGroupMembershipByIdRequestBodyArgRoleField = "member" | "admin";
export interface UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField {
}
export interface UpdateGroupMembershipByIdRequestBodyArg {
    readonly role?: UpdateGroupMembershipByIdRequestBodyArgRoleField;
    readonly configurablePermissions?: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
}
export interface UpdateGroupMembershipByIdOptionsArg {
    readonly fields?: string;
}
export declare class MembershipsManager {
    readonly auth: MembershipsManagerAuthField;
    constructor(fields: Omit<MembershipsManager, "getUserMemberships" | "getGroupMemberships" | "createGroupMembership" | "getGroupMembershipById" | "updateGroupMembershipById" | "deleteGroupMembershipById">);
    getUserMemberships(userId: string, options?: GetUserMembershipsOptionsArg): Promise<any>;
    getGroupMemberships(groupId: string, options?: GetGroupMembershipsOptionsArg): Promise<any>;
    createGroupMembership(requestBody: CreateGroupMembershipRequestBodyArg, options?: CreateGroupMembershipOptionsArg): Promise<any>;
    getGroupMembershipById(groupMembershipId: string, options?: GetGroupMembershipByIdOptionsArg): Promise<any>;
    updateGroupMembershipById(groupMembershipId: string, requestBody: UpdateGroupMembershipByIdRequestBodyArg, options?: UpdateGroupMembershipByIdOptionsArg): Promise<any>;
    deleteGroupMembershipById(groupMembershipId: string): Promise<any>;
}
