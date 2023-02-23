import { Groups } from "../schemas.generated.js";
import { deserializeGroups } from "../schemas.generated.js";
import { serializeGroups } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Group } from "../schemas.generated.js";
import { deserializeGroup } from "../schemas.generated.js";
import { serializeGroup } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type GroupsManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export class GroupsManager {
    readonly auth!: GroupsManagerAuthField;
    constructor(fields: Omit<GroupsManager, "getGroups" | "postGroups" | "getGroupsId" | "putGroupsId" | "deleteGroupsId">) {
        Object.assign(this, fields);
    }
    async getGroups(options: GetGroupsOptionsArg = {} satisfies GetGroupsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "GET", params: { ["filter_term"]: options.filterTerm, ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroups(deserializeJSON(response.text) as JSON);
    }
    async postGroups(requestBody: PostGroupsRequestBodyArg, options: PostGroupsOptionsArg = {} satisfies PostGroupsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroup(deserializeJSON(response.text) as JSON);
    }
    async getGroupsId(groupId: string, options: GetGroupsIdOptionsArg = {} satisfies GetGroupsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroup(deserializeJSON(response.text) as JSON);
    }
    async putGroupsId(groupId: string, requestBody: PutGroupsIdRequestBodyArg, options: PutGroupsIdOptionsArg = {} satisfies PutGroupsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroup(deserializeJSON(response.text) as JSON);
    }
    async deleteGroupsId(groupId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
