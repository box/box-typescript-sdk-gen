import { GroupMemberships } from "../schemas.generated.js";
import { deserializeGroupMemberships } from "../schemas.generated.js";
import { serializeGroupMemberships } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { GroupMembership } from "../schemas.generated.js";
import { deserializeGroupMembership } from "../schemas.generated.js";
import { serializeGroupMembership } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type MembershipsManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export class MembershipsManager {
    readonly auth!: MembershipsManagerAuthField;
    constructor(fields: Omit<MembershipsManager, "getUsersIdMemberships" | "getGroupsIdMemberships" | "postGroupMemberships" | "getGroupMembershipsId" | "putGroupMembershipsId" | "deleteGroupMembershipsId">) {
        Object.assign(this, fields);
    }
    async getUsersIdMemberships(userId: string, options: GetUsersIdMembershipsOptionsArg = {} satisfies GetUsersIdMembershipsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/memberships") as string, { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroupMemberships(deserializeJSON(response.text) as JSON);
    }
    async getGroupsIdMemberships(groupId: string, options: GetGroupsIdMembershipsOptionsArg = {} satisfies GetGroupsIdMembershipsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships") as string, { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroupMemberships(deserializeJSON(response.text) as JSON);
    }
    async postGroupMemberships(requestBody: PostGroupMembershipsRequestBodyArg, options: PostGroupMembershipsOptionsArg = {} satisfies PostGroupMembershipsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroupMembership(deserializeJSON(response.text) as JSON);
    }
    async getGroupMembershipsId(groupMembershipId: string, options: GetGroupMembershipsIdOptionsArg = {} satisfies GetGroupMembershipsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroupMembership(deserializeJSON(response.text) as JSON);
    }
    async putGroupMembershipsId(groupMembershipId: string, requestBody: PutGroupMembershipsIdRequestBodyArg, options: PutGroupMembershipsIdOptionsArg = {} satisfies PutGroupMembershipsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeGroupMembership(deserializeJSON(response.text) as JSON);
    }
    async deleteGroupMembershipsId(groupMembershipId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
