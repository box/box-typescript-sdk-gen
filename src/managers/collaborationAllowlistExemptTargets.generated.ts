import { CollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { serializeCollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { serializeCollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type CollaborationAllowlistExemptTargetsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetCollaborationWhitelistExemptTargetsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface PostCollaborationWhitelistExemptTargetsRequestBodyArgUserField {
    readonly id: string;
}
export interface PostCollaborationWhitelistExemptTargetsRequestBodyArg {
    readonly user: PostCollaborationWhitelistExemptTargetsRequestBodyArgUserField;
}
export class CollaborationAllowlistExemptTargetsManager {
    readonly auth!: CollaborationAllowlistExemptTargetsManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "postCollaborationWhitelistExemptTargets" | "getCollaborationWhitelistExemptTargetsId" | "deleteCollaborationWhitelistExemptTargetsId">) {
        Object.assign(this, fields);
    }
    async getCollaborationWhitelistExemptTargets(options: GetCollaborationWhitelistExemptTargetsOptionsArg = {} satisfies GetCollaborationWhitelistExemptTargetsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborationAllowlistExemptTargets(await deserializeJson(response.text));
    }
    async postCollaborationWhitelistExemptTargets(requestBody: PostCollaborationWhitelistExemptTargetsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborationAllowlistExemptTarget(await deserializeJson(response.text));
    }
    async getCollaborationWhitelistExemptTargetsId(collaborationWhitelistExemptTargetId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborationAllowlistExemptTarget(await deserializeJson(response.text));
    }
    async deleteCollaborationWhitelistExemptTargetsId(collaborationWhitelistExemptTargetId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
