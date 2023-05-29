import { CollaborationAllowlistEntries } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistEntries } from "../schemas.generated.js";
import { serializeCollaborationAllowlistEntries } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { CollaborationAllowlistEntry } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistEntry } from "../schemas.generated.js";
import { serializeCollaborationAllowlistEntry } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetCollaborationWhitelistEntriesOptionsArg {
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
    async getCollaborationWhitelistEntries(options: GetCollaborationWhitelistEntriesOptionsArg = {} satisfies GetCollaborationWhitelistEntriesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntries(deserializeJson(response.text));
    }
    async createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJson(response.text));
    }
    async getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJson(response.text));
    }
    async deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
