import { CollaborationAllowlistEntries } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistEntries } from "../schemas.generated.js";
import { serializeCollaborationAllowlistEntries } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { CollaborationAllowlistEntry } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistEntry } from "../schemas.generated.js";
import { serializeCollaborationAllowlistEntry } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type CollaborationAllowlistEntriesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
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
    readonly auth!: CollaborationAllowlistEntriesManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "createCollaborationWhitelistEntry" | "getCollaborationWhitelistEntryById" | "deleteCollaborationWhitelistEntryById">) {
        Object.assign(this, fields);
    }
    async getCollaborationWhitelistEntries(options: GetCollaborationWhitelistEntriesOptionsArg = {} satisfies GetCollaborationWhitelistEntriesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntries(deserializeJSON(response.text) as JSON);
    }
    async createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJSON(response.text) as JSON);
    }
    async getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJSON(response.text) as JSON);
    }
    async deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
