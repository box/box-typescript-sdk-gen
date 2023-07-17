import { serializeCollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeCollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { deserializeCollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface GetCollaborationWhitelistExemptTargetsQueryParamsArg {
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "createCollaborationWhitelistExemptTarget" | "getCollaborationWhitelistExemptTargetById" | "deleteCollaborationWhitelistExemptTargetById">) {
        Object.assign(this, fields);
    }
    async getCollaborationWhitelistExemptTargets(queryParams: undefined | GetCollaborationWhitelistExemptTargetsQueryParamsArg = {} satisfies GetCollaborationWhitelistExemptTargetsQueryParamsArg): Promise<CollaborationAllowlistExemptTargets> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "GET", params: prepareParams(serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistExemptTargets(deserializeJson(response.text));
    }
    async createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Promise<CollaborationAllowlistExemptTarget> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "POST", body: serializeJson(serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistExemptTarget(deserializeJson(response.text));
    }
    async getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<CollaborationAllowlistExemptTarget> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborationAllowlistExemptTarget(deserializeJson(response.text));
    }
    async deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val: GetCollaborationWhitelistExemptTargetsQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val: any): GetCollaborationWhitelistExemptTargetsQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetCollaborationWhitelistExemptTargetsQueryParamsArg;
}
export function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField): Json {
    return { ["id"]: val.id };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
    const id: string = val.id;
    return { id: id } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Json {
    return { ["user"]: serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val.user) };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArg {
    const user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val.user);
    return { user: user } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArg;
}
