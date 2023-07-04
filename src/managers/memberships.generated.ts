import { newSerializeGroupMemberships } from "../schemas.generated.js";
import { newDeserializeGroupMemberships } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeGroupMembership } from "../schemas.generated.js";
import { newDeserializeGroupMembership } from "../schemas.generated.js";
import { GroupMemberships } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { GroupMembership } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetUserMembershipsQueryParamsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetGroupMembershipsQueryParamsArg {
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
export interface CreateGroupMembershipQueryParamsArg {
    readonly fields?: string;
}
export interface GetGroupMembershipByIdQueryParamsArg {
    readonly fields?: string;
}
export type UpdateGroupMembershipByIdRequestBodyArgRoleField = "member" | "admin";
export interface UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField {
}
export interface UpdateGroupMembershipByIdRequestBodyArg {
    readonly role?: UpdateGroupMembershipByIdRequestBodyArgRoleField;
    readonly configurablePermissions?: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
}
export interface UpdateGroupMembershipByIdQueryParamsArg {
    readonly fields?: string;
}
export class MembershipsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MembershipsManager, "getUserMemberships" | "getGroupMemberships" | "createGroupMembership" | "getGroupMembershipById" | "updateGroupMembershipById" | "deleteGroupMembershipById">) {
        Object.assign(this, fields);
    }
    async getUserMemberships(userId: string, queryParams: undefined | GetUserMembershipsQueryParamsArg = {} satisfies GetUserMembershipsQueryParamsArg): Promise<GroupMemberships> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/memberships") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupMemberships(deserializeJson(response.text));
    }
    async getGroupMemberships(groupId: string, queryParams: undefined | GetGroupMembershipsQueryParamsArg = {} satisfies GetGroupMembershipsQueryParamsArg): Promise<GroupMemberships> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupMemberships(deserializeJson(response.text));
    }
    async createGroupMembership(requestBody: CreateGroupMembershipRequestBodyArg, queryParams: undefined | CreateGroupMembershipQueryParamsArg = {} satisfies CreateGroupMembershipQueryParamsArg): Promise<GroupMembership> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupMembership(deserializeJson(response.text));
    }
    async getGroupMembershipById(groupMembershipId: string, queryParams: undefined | GetGroupMembershipByIdQueryParamsArg = {} satisfies GetGroupMembershipByIdQueryParamsArg): Promise<GroupMembership> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupMembership(deserializeJson(response.text));
    }
    async updateGroupMembershipById(groupMembershipId: string, requestBody: UpdateGroupMembershipByIdRequestBodyArg, queryParams: undefined | UpdateGroupMembershipByIdQueryParamsArg = {} satisfies UpdateGroupMembershipByIdQueryParamsArg): Promise<GroupMembership> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupMembership(deserializeJson(response.text));
    }
    async deleteGroupMembershipById(groupMembershipId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetUserMembershipsQueryParamsArg(val: GetUserMembershipsQueryParamsArg): Json {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
export function newDeserializeGetUserMembershipsQueryParamsArg(val: any): GetUserMembershipsQueryParamsArg {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset } satisfies GetUserMembershipsQueryParamsArg;
}
export function newSerializeGetGroupMembershipsQueryParamsArg(val: GetGroupMembershipsQueryParamsArg): Json {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
export function newDeserializeGetGroupMembershipsQueryParamsArg(val: any): GetGroupMembershipsQueryParamsArg {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset } satisfies GetGroupMembershipsQueryParamsArg;
}
export function newSerializeCreateGroupMembershipRequestBodyArgUserField(val: CreateGroupMembershipRequestBodyArgUserField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateGroupMembershipRequestBodyArgUserField(val: any): CreateGroupMembershipRequestBodyArgUserField {
    const id: string = val.id;
    return { id: id } satisfies CreateGroupMembershipRequestBodyArgUserField;
}
export function newSerializeCreateGroupMembershipRequestBodyArgGroupField(val: CreateGroupMembershipRequestBodyArgGroupField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateGroupMembershipRequestBodyArgGroupField(val: any): CreateGroupMembershipRequestBodyArgGroupField {
    const id: string = val.id;
    return { id: id } satisfies CreateGroupMembershipRequestBodyArgGroupField;
}
export function newSerializeCreateGroupMembershipRequestBodyArgRoleField(val: CreateGroupMembershipRequestBodyArgRoleField): Json {
    return val;
}
export function newDeserializeCreateGroupMembershipRequestBodyArgRoleField(val: any): CreateGroupMembershipRequestBodyArgRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateGroupMembershipRequestBodyArgRoleField\"";
    }
    if (val == "member") {
        return "member";
    }
    if (val == "admin") {
        return "admin";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: CreateGroupMembershipRequestBodyArgConfigurablePermissionsField): Json {
    return {};
}
export function newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: any): CreateGroupMembershipRequestBodyArgConfigurablePermissionsField {
    return {} satisfies CreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
}
export function newSerializeCreateGroupMembershipRequestBodyArg(val: CreateGroupMembershipRequestBodyArg): Json {
    return { ["user"]: newSerializeCreateGroupMembershipRequestBodyArgUserField(val.user), ["group"]: newSerializeCreateGroupMembershipRequestBodyArgGroupField(val.group), ["role"]: val.role == void 0 ? void 0 : newSerializeCreateGroupMembershipRequestBodyArgRoleField(val.role), ["configurablePermissions"]: val.configurablePermissions == void 0 ? void 0 : newSerializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
export function newDeserializeCreateGroupMembershipRequestBodyArg(val: any): CreateGroupMembershipRequestBodyArg {
    const user: CreateGroupMembershipRequestBodyArgUserField = newDeserializeCreateGroupMembershipRequestBodyArgUserField(val.user);
    const group: CreateGroupMembershipRequestBodyArgGroupField = newDeserializeCreateGroupMembershipRequestBodyArgGroupField(val.group);
    const role: undefined | CreateGroupMembershipRequestBodyArgRoleField = val.role == void 0 ? void 0 : newDeserializeCreateGroupMembershipRequestBodyArgRoleField(val.role);
    const configurablePermissions: undefined | CreateGroupMembershipRequestBodyArgConfigurablePermissionsField = val.configurablePermissions == void 0 ? void 0 : newDeserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurablePermissions);
    return { user: user, group: group, role: role, configurablePermissions: configurablePermissions } satisfies CreateGroupMembershipRequestBodyArg;
}
export function newSerializeCreateGroupMembershipQueryParamsArg(val: CreateGroupMembershipQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCreateGroupMembershipQueryParamsArg(val: any): CreateGroupMembershipQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateGroupMembershipQueryParamsArg;
}
export function newSerializeGetGroupMembershipByIdQueryParamsArg(val: GetGroupMembershipByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetGroupMembershipByIdQueryParamsArg(val: any): GetGroupMembershipByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetGroupMembershipByIdQueryParamsArg;
}
export function newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: UpdateGroupMembershipByIdRequestBodyArgRoleField): Json {
    return val;
}
export function newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: any): UpdateGroupMembershipByIdRequestBodyArgRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateGroupMembershipByIdRequestBodyArgRoleField\"";
    }
    if (val == "member") {
        return "member";
    }
    if (val == "admin") {
        return "admin";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField): Json {
    return {};
}
export function newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: any): UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField {
    return {} satisfies UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
}
export function newSerializeUpdateGroupMembershipByIdRequestBodyArg(val: UpdateGroupMembershipByIdRequestBodyArg): Json {
    return { ["role"]: val.role == void 0 ? void 0 : newSerializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role), ["configurablePermissions"]: val.configurablePermissions == void 0 ? void 0 : newSerializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
export function newDeserializeUpdateGroupMembershipByIdRequestBodyArg(val: any): UpdateGroupMembershipByIdRequestBodyArg {
    const role: undefined | UpdateGroupMembershipByIdRequestBodyArgRoleField = val.role == void 0 ? void 0 : newDeserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role);
    const configurablePermissions: undefined | UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = val.configurablePermissions == void 0 ? void 0 : newDeserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurablePermissions);
    return { role: role, configurablePermissions: configurablePermissions } satisfies UpdateGroupMembershipByIdRequestBodyArg;
}
export function newSerializeUpdateGroupMembershipByIdQueryParamsArg(val: UpdateGroupMembershipByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateGroupMembershipByIdQueryParamsArg(val: any): UpdateGroupMembershipByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateGroupMembershipByIdQueryParamsArg;
}
