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
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type CollaborationAllowlistExemptTargetsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetCollaborationWhitelistExemptTargetsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
    readonly id: string;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArg {
    readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export class CollaborationAllowlistExemptTargetsManager {
    readonly auth!: CollaborationAllowlistExemptTargetsManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "createCollaborationWhitelistExemptTarget" | "getCollaborationWhitelistExemptTargetById" | "deleteCollaborationWhitelistExemptTargetById">) {
        Object.assign(this, fields);
    }
    async getCollaborationWhitelistExemptTargets(options: GetCollaborationWhitelistExemptTargetsOptionsArg = {} satisfies GetCollaborationWhitelistExemptTargetsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistExemptTargets(deserializeJson(response.text));
    }
    async createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistExemptTarget(deserializeJson(response.text));
    }
    async getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistExemptTarget(deserializeJson(response.text));
    }
    async deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
