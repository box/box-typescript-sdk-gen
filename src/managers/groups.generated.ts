import { Groups } from "../schemas.generated.js";
import { deserializeGroups } from "../schemas.generated.js";
import { serializeGroups } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Group } from "../schemas.generated.js";
import { deserializeGroup } from "../schemas.generated.js";
import { serializeGroup } from "../schemas.generated.js";
import { GroupFull } from "../schemas.generated.js";
import { deserializeGroupFull } from "../schemas.generated.js";
import { serializeGroupFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<GroupsManager, "getGroups" | "createGroup" | "getGroupById" | "updateGroupById" | "deleteGroupById">) {
        Object.assign(this, fields);
    }
    async getGroups(options: GetGroupsOptionsArg = {} satisfies GetGroupsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "GET", params: { ["filter_term"]: options.filterTerm, ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroups(deserializeJson(response.text));
    }
    async createGroup(requestBody: CreateGroupRequestBodyArg, options: CreateGroupOptionsArg = {} satisfies CreateGroupOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroup(deserializeJson(response.text));
    }
    async getGroupById(groupId: string, options: GetGroupByIdOptionsArg = {} satisfies GetGroupByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupFull(deserializeJson(response.text));
    }
    async updateGroupById(groupId: string, requestBody: UpdateGroupByIdRequestBodyArg, options: UpdateGroupByIdOptionsArg = {} satisfies UpdateGroupByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupFull(deserializeJson(response.text));
    }
    async deleteGroupById(groupId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
