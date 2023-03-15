import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type MembershipsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetUsersIdMembershipsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetGroupsIdMembershipsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export interface PostGroupMembershipsRequestBodyArgUserField {
    readonly id: string;
}
export interface PostGroupMembershipsRequestBodyArgGroupField {
    readonly id: string;
}
export type PostGroupMembershipsRequestBodyArgRoleField = "member" | "admin";
export interface PostGroupMembershipsRequestBodyArgConfigurablePermissionsField {
}
export interface PostGroupMembershipsRequestBodyArg {
    readonly user: PostGroupMembershipsRequestBodyArgUserField;
    readonly group: PostGroupMembershipsRequestBodyArgGroupField;
    readonly role?: PostGroupMembershipsRequestBodyArgRoleField;
    readonly configurablePermissions?: PostGroupMembershipsRequestBodyArgConfigurablePermissionsField;
}
export interface PostGroupMembershipsOptionsArg {
    readonly fields?: string;
}
export interface GetGroupMembershipsIdOptionsArg {
    readonly fields?: string;
}
export type PutGroupMembershipsIdRequestBodyArgRoleField = "member" | "admin";
export interface PutGroupMembershipsIdRequestBodyArgConfigurablePermissionsField {
}
export interface PutGroupMembershipsIdRequestBodyArg {
    readonly role?: PutGroupMembershipsIdRequestBodyArgRoleField;
    readonly configurablePermissions?: PutGroupMembershipsIdRequestBodyArgConfigurablePermissionsField;
}
export interface PutGroupMembershipsIdOptionsArg {
    readonly fields?: string;
}
export declare class MembershipsManager {
    readonly auth: MembershipsManagerAuthField;
    constructor(fields: Omit<MembershipsManager, "getUsersIdMemberships" | "getGroupsIdMemberships" | "postGroupMemberships" | "getGroupMembershipsId" | "putGroupMembershipsId" | "deleteGroupMembershipsId">);
    getUsersIdMemberships(userId: string, options?: GetUsersIdMembershipsOptionsArg): Promise<any>;
    getGroupsIdMemberships(groupId: string, options?: GetGroupsIdMembershipsOptionsArg): Promise<any>;
    postGroupMemberships(requestBody: PostGroupMembershipsRequestBodyArg, options?: PostGroupMembershipsOptionsArg): Promise<any>;
    getGroupMembershipsId(groupMembershipId: string, options?: GetGroupMembershipsIdOptionsArg): Promise<any>;
    putGroupMembershipsId(groupMembershipId: string, requestBody: PutGroupMembershipsIdRequestBodyArg, options?: PutGroupMembershipsIdOptionsArg): Promise<any>;
    deleteGroupMembershipsId(groupMembershipId: string): Promise<any>;
}
