import { newSerializeCollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { newDeserializeCollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeCollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { newDeserializeCollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborationAllowlistExemptTargets(deserializeJson(response.text));
    }
    async createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Promise<CollaborationAllowlistExemptTarget> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborationAllowlistExemptTarget(deserializeJson(response.text));
    }
    async getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<CollaborationAllowlistExemptTarget> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeCollaborationAllowlistExemptTarget(deserializeJson(response.text));
    }
    async deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaboration_whitelist_exempt_targets/", collaborationWhitelistExemptTargetId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val: GetCollaborationWhitelistExemptTargetsQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val: any): GetCollaborationWhitelistExemptTargetsQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetCollaborationWhitelistExemptTargetsQueryParamsArg;
}
export function newSerializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
    const id: string = val.id;
    return { id: id } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export function newSerializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Json {
    return { ["user"]: newSerializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val.user) };
}
export function newDeserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArg {
    const user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField = newDeserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val.user);
    return { user: user } satisfies CreateCollaborationWhitelistExemptTargetRequestBodyArg;
}
