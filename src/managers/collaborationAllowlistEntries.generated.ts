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
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type CollaborationAllowlistEntriesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetCollaborationWhitelistEntriesOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostCollaborationWhitelistEntriesRequestBodyArgDirectionField = "inbound" | "outbound" | "both";
export interface PostCollaborationWhitelistEntriesRequestBodyArg {
    readonly domain: string;
    readonly direction: PostCollaborationWhitelistEntriesRequestBodyArgDirectionField;
}
export class CollaborationAllowlistEntriesManager {
    readonly auth!: CollaborationAllowlistEntriesManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "postCollaborationWhitelistEntries" | "getCollaborationWhitelistEntriesId" | "deleteCollaborationWhitelistEntriesId">) {
        Object.assign(this, fields);
    }
    async getCollaborationWhitelistEntries(options: GetCollaborationWhitelistEntriesOptionsArg = {} satisfies GetCollaborationWhitelistEntriesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntries(deserializeJSON(response.text) as JSON);
    }
    async postCollaborationWhitelistEntries(requestBody: PostCollaborationWhitelistEntriesRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJSON(response.text) as JSON);
    }
    async getCollaborationWhitelistEntriesId(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistEntry(deserializeJSON(response.text) as JSON);
    }
    async deleteCollaborationWhitelistEntriesId(collaborationWhitelistEntryId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_entries/", collaborationWhitelistEntryId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
