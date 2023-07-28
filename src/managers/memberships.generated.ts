import { serializeGroupMemberships } from "../schemas.generated.js";
import { deserializeGroupMemberships } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeGroupMembership } from "../schemas.generated.js";
import { deserializeGroupMembership } from "../schemas.generated.js";
import { GroupMemberships } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { GroupMembership } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
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
    async getUserMemberships(userId: string, queryParams: GetUserMembershipsQueryParamsArg = {} satisfies GetUserMembershipsQueryParamsArg): Promise<GroupMemberships> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/memberships") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMemberships(deserializeJson(response.text));
    }
    async getGroupMemberships(groupId: string, queryParams: GetGroupMembershipsQueryParamsArg = {} satisfies GetGroupMembershipsQueryParamsArg): Promise<GroupMemberships> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/memberships") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMemberships(deserializeJson(response.text));
    }
    async createGroupMembership(requestBody: CreateGroupMembershipRequestBodyArg, queryParams: CreateGroupMembershipQueryParamsArg = {} satisfies CreateGroupMembershipQueryParamsArg): Promise<GroupMembership> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships") as string, { method: "POST", params: queryParamsMap, body: serializeJson(serializeCreateGroupMembershipRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMembership(deserializeJson(response.text));
    }
    async getGroupMembershipById(groupMembershipId: string, queryParams: GetGroupMembershipByIdQueryParamsArg = {} satisfies GetGroupMembershipByIdQueryParamsArg): Promise<GroupMembership> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMembership(deserializeJson(response.text));
    }
    async updateGroupMembershipById(groupMembershipId: string, requestBody: UpdateGroupMembershipByIdRequestBodyArg, queryParams: UpdateGroupMembershipByIdQueryParamsArg = {} satisfies UpdateGroupMembershipByIdQueryParamsArg): Promise<GroupMembership> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "PUT", params: queryParamsMap, body: serializeJson(serializeUpdateGroupMembershipByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupMembership(deserializeJson(response.text));
    }
    async deleteGroupMembershipById(groupMembershipId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/group_memberships/", groupMembershipId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetUserMembershipsQueryParamsArg(val: GetUserMembershipsQueryParamsArg): Json {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
export function deserializeGetUserMembershipsQueryParamsArg(val: any): GetUserMembershipsQueryParamsArg {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset } satisfies GetUserMembershipsQueryParamsArg;
}
export function serializeGetGroupMembershipsQueryParamsArg(val: GetGroupMembershipsQueryParamsArg): Json {
    return { ["limit"]: val.limit, ["offset"]: val.offset };
}
export function deserializeGetGroupMembershipsQueryParamsArg(val: any): GetGroupMembershipsQueryParamsArg {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { limit: limit, offset: offset } satisfies GetGroupMembershipsQueryParamsArg;
}
export function serializeCreateGroupMembershipRequestBodyArgUserField(val: CreateGroupMembershipRequestBodyArgUserField): Json {
    return { ["id"]: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyArgUserField(val: any): CreateGroupMembershipRequestBodyArgUserField {
    const id: string = val.id;
    return { id: id } satisfies CreateGroupMembershipRequestBodyArgUserField;
}
export function serializeCreateGroupMembershipRequestBodyArgGroupField(val: CreateGroupMembershipRequestBodyArgGroupField): Json {
    return { ["id"]: val.id };
}
export function deserializeCreateGroupMembershipRequestBodyArgGroupField(val: any): CreateGroupMembershipRequestBodyArgGroupField {
    const id: string = val.id;
    return { id: id } satisfies CreateGroupMembershipRequestBodyArgGroupField;
}
export function serializeCreateGroupMembershipRequestBodyArgRoleField(val: CreateGroupMembershipRequestBodyArgRoleField): Json {
    return val;
}
export function deserializeCreateGroupMembershipRequestBodyArgRoleField(val: any): CreateGroupMembershipRequestBodyArgRoleField {
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
export function serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: CreateGroupMembershipRequestBodyArgConfigurablePermissionsField): Json {
    return {};
}
export function deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val: any): CreateGroupMembershipRequestBodyArgConfigurablePermissionsField {
    return {} satisfies CreateGroupMembershipRequestBodyArgConfigurablePermissionsField;
}
export function serializeCreateGroupMembershipRequestBodyArg(val: CreateGroupMembershipRequestBodyArg): Json {
    return { ["user"]: serializeCreateGroupMembershipRequestBodyArgUserField(val.user), ["group"]: serializeCreateGroupMembershipRequestBodyArgGroupField(val.group), ["role"]: val.role == void 0 ? void 0 : serializeCreateGroupMembershipRequestBodyArgRoleField(val.role), ["configurable_permissions"]: val.configurablePermissions == void 0 ? void 0 : serializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
export function deserializeCreateGroupMembershipRequestBodyArg(val: any): CreateGroupMembershipRequestBodyArg {
    const user: CreateGroupMembershipRequestBodyArgUserField = deserializeCreateGroupMembershipRequestBodyArgUserField(val.user);
    const group: CreateGroupMembershipRequestBodyArgGroupField = deserializeCreateGroupMembershipRequestBodyArgGroupField(val.group);
    const role: undefined | CreateGroupMembershipRequestBodyArgRoleField = val.role == void 0 ? void 0 : deserializeCreateGroupMembershipRequestBodyArgRoleField(val.role);
    const configurablePermissions: undefined | CreateGroupMembershipRequestBodyArgConfigurablePermissionsField = val.configurable_permissions == void 0 ? void 0 : deserializeCreateGroupMembershipRequestBodyArgConfigurablePermissionsField(val.configurable_permissions);
    return { user: user, group: group, role: role, configurablePermissions: configurablePermissions } satisfies CreateGroupMembershipRequestBodyArg;
}
export function serializeCreateGroupMembershipQueryParamsArg(val: CreateGroupMembershipQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCreateGroupMembershipQueryParamsArg(val: any): CreateGroupMembershipQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateGroupMembershipQueryParamsArg;
}
export function serializeGetGroupMembershipByIdQueryParamsArg(val: GetGroupMembershipByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetGroupMembershipByIdQueryParamsArg(val: any): GetGroupMembershipByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetGroupMembershipByIdQueryParamsArg;
}
export function serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: UpdateGroupMembershipByIdRequestBodyArgRoleField): Json {
    return val;
}
export function deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val: any): UpdateGroupMembershipByIdRequestBodyArgRoleField {
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
export function serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField): Json {
    return {};
}
export function deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val: any): UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField {
    return {} satisfies UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField;
}
export function serializeUpdateGroupMembershipByIdRequestBodyArg(val: UpdateGroupMembershipByIdRequestBodyArg): Json {
    return { ["role"]: val.role == void 0 ? void 0 : serializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role), ["configurable_permissions"]: val.configurablePermissions == void 0 ? void 0 : serializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurablePermissions) };
}
export function deserializeUpdateGroupMembershipByIdRequestBodyArg(val: any): UpdateGroupMembershipByIdRequestBodyArg {
    const role: undefined | UpdateGroupMembershipByIdRequestBodyArgRoleField = val.role == void 0 ? void 0 : deserializeUpdateGroupMembershipByIdRequestBodyArgRoleField(val.role);
    const configurablePermissions: undefined | UpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField = val.configurable_permissions == void 0 ? void 0 : deserializeUpdateGroupMembershipByIdRequestBodyArgConfigurablePermissionsField(val.configurable_permissions);
    return { role: role, configurablePermissions: configurablePermissions } satisfies UpdateGroupMembershipByIdRequestBodyArg;
}
export function serializeUpdateGroupMembershipByIdQueryParamsArg(val: UpdateGroupMembershipByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateGroupMembershipByIdQueryParamsArg(val: any): UpdateGroupMembershipByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateGroupMembershipByIdQueryParamsArg;
}
