import { serializeGroups } from "../schemas.generated.js";
import { deserializeGroups } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeGroup } from "../schemas.generated.js";
import { deserializeGroup } from "../schemas.generated.js";
import { serializeGroupFull } from "../schemas.generated.js";
import { deserializeGroupFull } from "../schemas.generated.js";
import { Groups } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Group } from "../schemas.generated.js";
import { GroupFull } from "../schemas.generated.js";
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
export class GroupsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<GroupsManager, "getGroups" | "createGroup" | "getGroupById" | "updateGroupById" | "deleteGroupById">) {
        Object.assign(this, fields);
    }
    async getGroups(queryParams: GetGroupsQueryParamsArg = {} satisfies GetGroupsQueryParamsArg): Promise<Groups> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["filter_term"]: toString(queryParams.filterTerm), ["fields"]: toString(queryParams.fields), ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroups(deserializeJson(response.text));
    }
    async createGroup(requestBody: CreateGroupRequestBodyArg, queryParams: CreateGroupQueryParamsArg = {} satisfies CreateGroupQueryParamsArg): Promise<Group> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "POST", params: queryParamsMap, body: serializeJson(serializeCreateGroupRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroup(deserializeJson(response.text));
    }
    async getGroupById(groupId: string, queryParams: GetGroupByIdQueryParamsArg = {} satisfies GetGroupByIdQueryParamsArg): Promise<GroupFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupFull(deserializeJson(response.text));
    }
    async updateGroupById(groupId: string, requestBody: UpdateGroupByIdRequestBodyArg, queryParams: UpdateGroupByIdQueryParamsArg = {} satisfies UpdateGroupByIdQueryParamsArg): Promise<GroupFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "PUT", params: queryParamsMap, body: serializeJson(serializeUpdateGroupByIdRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeGroupFull(deserializeJson(response.text));
    }
    async deleteGroupById(groupId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetGroupsQueryParamsArg(val: GetGroupsQueryParamsArg): Json {
    return { ["filter_term"]: val.filterTerm, ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
export function deserializeGetGroupsQueryParamsArg(val: any): GetGroupsQueryParamsArg {
    const filterTerm: undefined | string = isJson(val.filter_term, "string") ? val.filter_term : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { filterTerm: filterTerm, fields: fields, limit: limit, offset: offset } satisfies GetGroupsQueryParamsArg;
}
export function serializeCreateGroupRequestBodyArgInvitabilityLevelField(val: CreateGroupRequestBodyArgInvitabilityLevelField): Json {
    return val;
}
export function deserializeCreateGroupRequestBodyArgInvitabilityLevelField(val: any): CreateGroupRequestBodyArgInvitabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateGroupRequestBodyArgInvitabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: CreateGroupRequestBodyArgMemberViewabilityLevelField): Json {
    return val;
}
export function deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: any): CreateGroupRequestBodyArgMemberViewabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateGroupRequestBodyArgMemberViewabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateGroupRequestBodyArg(val: CreateGroupRequestBodyArg): Json {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["external_sync_identifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitability_level"]: val.invitabilityLevel == void 0 ? void 0 : serializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["member_viewability_level"]: val.memberViewabilityLevel == void 0 ? void 0 : serializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
export function deserializeCreateGroupRequestBodyArg(val: any): CreateGroupRequestBodyArg {
    const name: string = val.name;
    const provenance: undefined | string = isJson(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier: undefined | string = isJson(val.external_sync_identifier, "string") ? val.external_sync_identifier : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const invitabilityLevel: undefined | CreateGroupRequestBodyArgInvitabilityLevelField = val.invitability_level == void 0 ? void 0 : deserializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel: undefined | CreateGroupRequestBodyArgMemberViewabilityLevelField = val.member_viewability_level == void 0 ? void 0 : deserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.member_viewability_level);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel } satisfies CreateGroupRequestBodyArg;
}
export function serializeCreateGroupQueryParamsArg(val: CreateGroupQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCreateGroupQueryParamsArg(val: any): CreateGroupQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateGroupQueryParamsArg;
}
export function serializeGetGroupByIdQueryParamsArg(val: GetGroupByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetGroupByIdQueryParamsArg(val: any): GetGroupByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetGroupByIdQueryParamsArg;
}
export function serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: UpdateGroupByIdRequestBodyArgInvitabilityLevelField): Json {
    return val;
}
export function deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgInvitabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateGroupByIdRequestBodyArgInvitabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField): Json {
    return val;
}
export function deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateGroupByIdRequestBodyArg(val: UpdateGroupByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["external_sync_identifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitability_level"]: val.invitabilityLevel == void 0 ? void 0 : serializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["member_viewability_level"]: val.memberViewabilityLevel == void 0 ? void 0 : serializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
export function deserializeUpdateGroupByIdRequestBodyArg(val: any): UpdateGroupByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const provenance: undefined | string = isJson(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier: undefined | string = isJson(val.external_sync_identifier, "string") ? val.external_sync_identifier : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const invitabilityLevel: undefined | UpdateGroupByIdRequestBodyArgInvitabilityLevelField = val.invitability_level == void 0 ? void 0 : deserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel: undefined | UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = val.member_viewability_level == void 0 ? void 0 : deserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.member_viewability_level);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel } satisfies UpdateGroupByIdRequestBodyArg;
}
export function serializeUpdateGroupByIdQueryParamsArg(val: UpdateGroupByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateGroupByIdQueryParamsArg(val: any): UpdateGroupByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateGroupByIdQueryParamsArg;
}
