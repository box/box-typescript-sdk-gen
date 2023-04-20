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
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type MembershipsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export class MembershipsManager {
    readonly auth!: MembershipsManagerAuthField;
    constructor(fields: Omit<MembershipsManager, "getUserMemberships" | "getGroupMemberships" | "createGroupMembership" | "getGroupMembershipById" | "updateGroupMembershipById" | "deleteGroupMembershipById">) {
        Object.assign(this, fields);
    }
    async getUserMemberships(userId: string, options: GetUserMembershipsOptionsArg = {} satisfies GetUserMembershipsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/memberships") as string, { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMemberships(deserializeJson(response.text));
    }
    async getGroupMemberships(groupId: string, options: GetGroupMembershipsOptionsArg = {} satisfies GetGroupMembershipsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships") as string, { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMemberships(deserializeJson(response.text));
    }
    async createGroupMembership(requestBody: CreateGroupMembershipRequestBodyArg, options: CreateGroupMembershipOptionsArg = {} satisfies CreateGroupMembershipOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMembership(deserializeJson(response.text));
    }
    async getGroupMembershipById(groupMembershipId: string, options: GetGroupMembershipByIdOptionsArg = {} satisfies GetGroupMembershipByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMembership(deserializeJson(response.text));
    }
    async updateGroupMembershipById(groupMembershipId: string, requestBody: UpdateGroupMembershipByIdRequestBodyArg, options: UpdateGroupMembershipByIdOptionsArg = {} satisfies UpdateGroupMembershipByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMembership(deserializeJson(response.text));
    }
    async deleteGroupMembershipById(groupMembershipId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
