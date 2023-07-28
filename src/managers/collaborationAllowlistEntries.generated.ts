import { serializeCollaborationAllowlistEntries } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistEntries } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeCollaborationAllowlistEntry } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistEntry } from "../schemas.generated.js";
import { CollaborationAllowlistEntries } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { CollaborationAllowlistEntry } from "../schemas.generated.js";
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
export interface GetCollaborationWhitelistEntriesQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateCollaborationWhitelistEntryRequestBodyArgDirectionField = "inbound" | "outbound" | "both";
export interface CreateCollaborationWhitelistEntryRequestBodyArg {
    readonly domain: string;
    readonly direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
}
export class CollaborationAllowlistEntriesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "createCollaborationWhitelistEntry" | "getCollaborationWhitelistEntryById" | "deleteCollaborationWhitelistEntryById">) {
        Object.assign(this, fields);
    }
    async getCollaborationWhitelistEntries(queryParams: GetCollaborationWhitelistEntriesQueryParamsArg = {} satisfies GetCollaborationWhitelistEntriesQueryParamsArg): Promise<CollaborationAllowlistEntries> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntries(deserializeJson(response.text));
    }
    async createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBodyArg): Promise<CollaborationAllowlistEntry> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "POST", body: serializeJson(serializeCreateCollaborationWhitelistEntryRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJson(response.text));
    }
    async getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<CollaborationAllowlistEntry> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJson(response.text));
    }
    async deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetCollaborationWhitelistEntriesQueryParamsArg(val: GetCollaborationWhitelistEntriesQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetCollaborationWhitelistEntriesQueryParamsArg(val: any): GetCollaborationWhitelistEntriesQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetCollaborationWhitelistEntriesQueryParamsArg;
}
export function serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField): Json {
    return val;
}
export function deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: any): CreateCollaborationWhitelistEntryRequestBodyArgDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationWhitelistEntryRequestBodyArgDirectionField\"";
    }
    if (val == "inbound") {
        return "inbound";
    }
    if (val == "outbound") {
        return "outbound";
    }
    if (val == "both") {
        return "both";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateCollaborationWhitelistEntryRequestBodyArg(val: CreateCollaborationWhitelistEntryRequestBodyArg): Json {
    return { ["domain"]: val.domain, ["direction"]: serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val.direction) };
}
export function deserializeCreateCollaborationWhitelistEntryRequestBodyArg(val: any): CreateCollaborationWhitelistEntryRequestBodyArg {
    const domain: string = val.domain;
    const direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField = deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val.direction);
    return { domain: domain, direction: direction } satisfies CreateCollaborationWhitelistEntryRequestBodyArg;
}
