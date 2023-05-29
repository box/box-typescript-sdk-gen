import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetGroupsOptionsArg {
    readonly filterTerm?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export type CreateGroupRequestBodyArgInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export type CreateGroupRequestBodyArgMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export interface CreateGroupRequestBodyArg {
    readonly name: string;
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: CreateGroupRequestBodyArgInvitabilityLevelField;
    readonly memberViewabilityLevel?: CreateGroupRequestBodyArgMemberViewabilityLevelField;
}
export interface CreateGroupOptionsArg {
    readonly fields?: string;
}
export interface GetGroupByIdOptionsArg {
    readonly fields?: string;
}
export type UpdateGroupByIdRequestBodyArgInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export type UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export interface UpdateGroupByIdRequestBodyArg {
    readonly name?: string;
    readonly provenance?: string;
    readonly externalSyncIdentifier?: string;
    readonly description?: string;
    readonly invitabilityLevel?: UpdateGroupByIdRequestBodyArgInvitabilityLevelField;
    readonly memberViewabilityLevel?: UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
}
export interface UpdateGroupByIdOptionsArg {
    readonly fields?: string;
}
export declare class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<GroupsManager, "getGroups" | "createGroup" | "getGroupById" | "updateGroupById" | "deleteGroupById">);
    getGroups(options?: GetGroupsOptionsArg): Promise<any>;
    createGroup(requestBody: CreateGroupRequestBodyArg, options?: CreateGroupOptionsArg): Promise<any>;
    getGroupById(groupId: string, options?: GetGroupByIdOptionsArg): Promise<any>;
    updateGroupById(groupId: string, requestBody: UpdateGroupByIdRequestBodyArg, options?: UpdateGroupByIdOptionsArg): Promise<any>;
    deleteGroupById(groupId: string): Promise<any>;
}
