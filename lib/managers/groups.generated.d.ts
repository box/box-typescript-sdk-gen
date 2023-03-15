import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type GroupsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetGroupsOptionsArg {
    readonly filterTerm?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export type PostGroupsRequestBodyArgInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export type PostGroupsRequestBodyArgMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export interface PostGroupsRequestBodyArg {
    readonly name: string;
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: PostGroupsRequestBodyArgInvitabilityLevelField;
    readonly memberViewabilityLevel?: PostGroupsRequestBodyArgMemberViewabilityLevelField;
}
export interface PostGroupsOptionsArg {
    readonly fields?: string;
}
export interface GetGroupsIdOptionsArg {
    readonly fields?: string;
}
export type PutGroupsIdRequestBodyArgInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export type PutGroupsIdRequestBodyArgMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export interface PutGroupsIdRequestBodyArg {
    readonly name?: string;
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: PutGroupsIdRequestBodyArgInvitabilityLevelField;
    readonly memberViewabilityLevel?: PutGroupsIdRequestBodyArgMemberViewabilityLevelField;
}
export interface PutGroupsIdOptionsArg {
    readonly fields?: string;
}
export declare class GroupsManager {
    readonly auth: GroupsManagerAuthField;
    constructor(fields: Omit<GroupsManager, "getGroups" | "postGroups" | "getGroupsId" | "putGroupsId" | "deleteGroupsId">);
    getGroups(options?: GetGroupsOptionsArg): Promise<any>;
    postGroups(requestBody: PostGroupsRequestBodyArg, options?: PostGroupsOptionsArg): Promise<any>;
    getGroupsId(groupId: string, options?: GetGroupsIdOptionsArg): Promise<any>;
    putGroupsId(groupId: string, requestBody: PutGroupsIdRequestBodyArg, options?: PutGroupsIdOptionsArg): Promise<any>;
    deleteGroupsId(groupId: string): Promise<any>;
}
