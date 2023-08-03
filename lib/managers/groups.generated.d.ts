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
export declare class GetGroupsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetGroupsHeadersArg);
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
export declare class CreateGroupHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateGroupHeadersArg);
}
export interface GetGroupByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetGroupByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetGroupByIdHeadersArg);
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
export declare class UpdateGroupByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateGroupByIdHeadersArg);
}
export declare class DeleteGroupByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteGroupByIdHeadersArg);
}
export declare class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<GroupsManager, "getGroups" | "createGroup" | "getGroupById" | "updateGroupById" | "deleteGroupById">);
    getGroups(queryParams?: GetGroupsQueryParamsArg, headers?: GetGroupsHeadersArg): Promise<Groups>;
    createGroup(requestBody: CreateGroupRequestBodyArg, queryParams?: CreateGroupQueryParamsArg, headers?: CreateGroupHeadersArg): Promise<Group>;
    getGroupById(groupId: string, queryParams?: GetGroupByIdQueryParamsArg, headers?: GetGroupByIdHeadersArg): Promise<GroupFull>;
    updateGroupById(groupId: string, requestBody: UpdateGroupByIdRequestBodyArg, queryParams?: UpdateGroupByIdQueryParamsArg, headers?: UpdateGroupByIdHeadersArg): Promise<GroupFull>;
    deleteGroupById(groupId: string, headers?: DeleteGroupByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateGroupRequestBodyArgInvitabilityLevelField(val: CreateGroupRequestBodyArgInvitabilityLevelField): Json;
export declare function deserializeCreateGroupRequestBodyArgInvitabilityLevelField(val: any): CreateGroupRequestBodyArgInvitabilityLevelField;
export declare function serializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: CreateGroupRequestBodyArgMemberViewabilityLevelField): Json;
export declare function deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: any): CreateGroupRequestBodyArgMemberViewabilityLevelField;
export declare function serializeCreateGroupRequestBodyArg(val: CreateGroupRequestBodyArg): Json;
export declare function deserializeCreateGroupRequestBodyArg(val: any): CreateGroupRequestBodyArg;
export declare function serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: UpdateGroupByIdRequestBodyArgInvitabilityLevelField): Json;
export declare function deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgInvitabilityLevelField;
export declare function serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField): Json;
export declare function deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField;
export declare function serializeUpdateGroupByIdRequestBodyArg(val: UpdateGroupByIdRequestBodyArg): Json;
export declare function deserializeUpdateGroupByIdRequestBodyArg(val: any): UpdateGroupByIdRequestBodyArg;
