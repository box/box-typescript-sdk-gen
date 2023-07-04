import { newSerializeGroups } from "../schemas.generated.js";
import { newDeserializeGroups } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeGroup } from "../schemas.generated.js";
import { newDeserializeGroup } from "../schemas.generated.js";
import { newSerializeGroupFull } from "../schemas.generated.js";
import { newDeserializeGroupFull } from "../schemas.generated.js";
import { Groups } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Group } from "../schemas.generated.js";
import { GroupFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
    async getGroups(queryParams: undefined | GetGroupsQueryParamsArg = {} satisfies GetGroupsQueryParamsArg): Promise<Groups> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroups(deserializeJson(response.text));
    }
    async createGroup(requestBody: CreateGroupRequestBodyArg, queryParams: undefined | CreateGroupQueryParamsArg = {} satisfies CreateGroupQueryParamsArg): Promise<Group> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroup(deserializeJson(response.text));
    }
    async getGroupById(groupId: string, queryParams: undefined | GetGroupByIdQueryParamsArg = {} satisfies GetGroupByIdQueryParamsArg): Promise<GroupFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupFull(deserializeJson(response.text));
    }
    async updateGroupById(groupId: string, requestBody: UpdateGroupByIdRequestBodyArg, queryParams: undefined | UpdateGroupByIdQueryParamsArg = {} satisfies UpdateGroupByIdQueryParamsArg): Promise<GroupFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeGroupFull(deserializeJson(response.text));
    }
    async deleteGroupById(groupId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetGroupsQueryParamsArg(val: GetGroupsQueryParamsArg): Json {
    return { ["filterTerm"]: val.filterTerm, ["fields"]: val.fields, ["limit"]: val.limit, ["offset"]: val.offset };
}
export function newDeserializeGetGroupsQueryParamsArg(val: any): GetGroupsQueryParamsArg {
    const filterTerm: undefined | string = isJson(val.filterTerm, "string") ? val.filterTerm : void 0;
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { filterTerm: filterTerm, fields: fields, limit: limit, offset: offset } satisfies GetGroupsQueryParamsArg;
}
export function newSerializeCreateGroupRequestBodyArgInvitabilityLevelField(val: CreateGroupRequestBodyArgInvitabilityLevelField): Json {
    return val;
}
export function newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField(val: any): CreateGroupRequestBodyArgInvitabilityLevelField {
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
export function newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: CreateGroupRequestBodyArgMemberViewabilityLevelField): Json {
    return val;
}
export function newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val: any): CreateGroupRequestBodyArgMemberViewabilityLevelField {
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
export function newSerializeCreateGroupRequestBodyArg(val: CreateGroupRequestBodyArg): Json {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["externalSyncIdentifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitabilityLevel"]: val.invitabilityLevel == void 0 ? void 0 : newSerializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["memberViewabilityLevel"]: val.memberViewabilityLevel == void 0 ? void 0 : newSerializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
export function newDeserializeCreateGroupRequestBodyArg(val: any): CreateGroupRequestBodyArg {
    const name: string = val.name;
    const provenance: undefined | string = isJson(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier: undefined | string = isJson(val.externalSyncIdentifier, "string") ? val.externalSyncIdentifier : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const invitabilityLevel: undefined | CreateGroupRequestBodyArgInvitabilityLevelField = val.invitabilityLevel == void 0 ? void 0 : newDeserializeCreateGroupRequestBodyArgInvitabilityLevelField(val.invitabilityLevel);
    const memberViewabilityLevel: undefined | CreateGroupRequestBodyArgMemberViewabilityLevelField = val.memberViewabilityLevel == void 0 ? void 0 : newDeserializeCreateGroupRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel } satisfies CreateGroupRequestBodyArg;
}
export function newSerializeCreateGroupQueryParamsArg(val: CreateGroupQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCreateGroupQueryParamsArg(val: any): CreateGroupQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateGroupQueryParamsArg;
}
export function newSerializeGetGroupByIdQueryParamsArg(val: GetGroupByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetGroupByIdQueryParamsArg(val: any): GetGroupByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetGroupByIdQueryParamsArg;
}
export function newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: UpdateGroupByIdRequestBodyArgInvitabilityLevelField): Json {
    return val;
}
export function newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgInvitabilityLevelField {
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
export function newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField): Json {
    return val;
}
export function newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val: any): UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField {
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
export function newSerializeUpdateGroupByIdRequestBodyArg(val: UpdateGroupByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["provenance"]: val.provenance, ["externalSyncIdentifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitabilityLevel"]: val.invitabilityLevel == void 0 ? void 0 : newSerializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel), ["memberViewabilityLevel"]: val.memberViewabilityLevel == void 0 ? void 0 : newSerializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel) };
}
export function newDeserializeUpdateGroupByIdRequestBodyArg(val: any): UpdateGroupByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const provenance: undefined | string = isJson(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier: undefined | string = isJson(val.externalSyncIdentifier, "string") ? val.externalSyncIdentifier : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const invitabilityLevel: undefined | UpdateGroupByIdRequestBodyArgInvitabilityLevelField = val.invitabilityLevel == void 0 ? void 0 : newDeserializeUpdateGroupByIdRequestBodyArgInvitabilityLevelField(val.invitabilityLevel);
    const memberViewabilityLevel: undefined | UpdateGroupByIdRequestBodyArgMemberViewabilityLevelField = val.memberViewabilityLevel == void 0 ? void 0 : newDeserializeUpdateGroupByIdRequestBodyArgMemberViewabilityLevelField(val.memberViewabilityLevel);
    return { name: name, provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel } satisfies UpdateGroupByIdRequestBodyArg;
}
export function newSerializeUpdateGroupByIdQueryParamsArg(val: UpdateGroupByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateGroupByIdQueryParamsArg(val: any): UpdateGroupByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateGroupByIdQueryParamsArg;
}
