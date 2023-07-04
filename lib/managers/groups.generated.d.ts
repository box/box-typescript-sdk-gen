import { Groups } from "../schemas.generated.js";
import { Group } from "../schemas.generated.js";
import { GroupFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetGroupsQueryParamsArg {
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
export interface CreateGroupQueryParamsArg {
    readonly fields?: string;
}
export interface GetGroupByIdQueryParamsArg {
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
export interface UpdateGroupByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<GroupsManager, "getGroups" | "createGroup" | "getGroupById" | "updateGroupById" | "deleteGroupById">);
    getGroups(queryParams?: undefined | GetGroupsQueryParamsArg): Promise<Groups>;
    createGroup(requestBody: CreateGroupRequestBodyArg, queryParams?: undefined | CreateGroupQueryParamsArg): Promise<Group>;
    getGroupById(groupId: string, queryParams?: undefined | GetGroupByIdQueryParamsArg): Promise<GroupFull>;
    updateGroupById(groupId: string, requestBody: UpdateGroupByIdRequestBodyArg, queryParams?: undefined | UpdateGroupByIdQueryParamsArg): Promise<GroupFull>;
    deleteGroupById(groupId: string): Promise<any>;
}
export declare function newSerializeGetGroupsQueryParamsArg(val: GetGroupsQueryParamsArg): Json;
export declare function newDeserializeGetGroupsQueryParamsArg(val: any): GetGroupsQueryParamsArg;
export declare function newSerializeCreateGroupRequestBodyArgInvitabilityLevelField(val: CreateGroupRequestBodyArgInvitabilityLevelField): Json;
export declare function newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField(val: any): CreateGroupRequestBodyArgInvitabilityLevelField;
export declare function newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: CreateGroupRequestBodyArgMemberViewabilityLevelField): Json;
export declare function newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: any): CreateGroupRequestBodyArgMemberViewabilityLevelField;
export declare function newSerializeCreateGroupRequestBodyArg(val: CreateGroupRequestBodyArg): Json;
export declare function newDeserializeCreateGroupRequestBodyArg(val: any): CreateGroupRequestBodyArg;
export declare function newSerializeCreateGroupQueryParamsArg(val: CreateGroupQueryParamsArg): Json;
export declare function newDeserializeCreateGroupQueryParamsArg(val: any): CreateGroupQueryParamsArg;
export declare function newSerializeGetGroupByIdQueryParamsArg(val: GetGroupByIdQueryParamsArg): Json;
export declare function newDeserializeGetGroupByIdQueryParamsArg(val: any): GetGroupByIdQueryParamsArg;
export declare function newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: UpdateGroupByIdRequestBodyArgInvitabilityLevelField): Json;
export declare function newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgInvitabilityLevelField;
export declare function newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField): Json;
export declare function newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
export declare function newSerializeUpdateGroupByIdRequestBodyArg(val: UpdateGroupByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateGroupByIdRequestBodyArg(val: any): UpdateGroupByIdRequestBodyArg;
export declare function newSerializeUpdateGroupByIdQueryParamsArg(val: UpdateGroupByIdQueryParamsArg): Json;
export declare function newDeserializeUpdateGroupByIdQueryParamsArg(val: any): UpdateGroupByIdQueryParamsArg;
