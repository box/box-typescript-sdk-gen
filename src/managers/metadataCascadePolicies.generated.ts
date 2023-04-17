import { MetadataCascadePolicies } from "../schemas.generated.js";
import { deserializeMetadataCascadePolicies } from "../schemas.generated.js";
import { serializeMetadataCascadePolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { MetadataCascadePolicy } from "../schemas.generated.js";
import { deserializeMetadataCascadePolicy } from "../schemas.generated.js";
import { serializeMetadataCascadePolicy } from "../schemas.generated.js";
import { ConflictError } from "../schemas.generated.js";
import { deserializeConflictError } from "../schemas.generated.js";
import { serializeConflictError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type MetadataCascadePoliciesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetMetadataCascadePoliciesOptionsArg {
    readonly ownerEnterpriseId?: string;
    readonly marker?: string;
    readonly offset?: number;
}
export type CreateMetadataCascadePolicyRequestBodyArgScopeField = "global" | "enterprise";
export interface CreateMetadataCascadePolicyRequestBodyArg {
    readonly folderId: string;
    readonly scope: CreateMetadataCascadePolicyRequestBodyArgScopeField;
    readonly templateKey: string;
}
export type CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = "none" | "overwrite";
export interface CreateMetadataCascadePolicyApplyRequestBodyArg {
    readonly conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
}
export class MetadataCascadePoliciesManager {
    readonly auth!: MetadataCascadePoliciesManagerAuthField;
    constructor(fields: Omit<MetadataCascadePoliciesManager, "getMetadataCascadePolicies" | "createMetadataCascadePolicy" | "getMetadataCascadePolicyById" | "deleteMetadataCascadePolicyById" | "createMetadataCascadePolicyApply">) {
        Object.assign(this, fields);
    }
    async getMetadataCascadePolicies(folderId: string, options: GetMetadataCascadePoliciesOptionsArg = {} satisfies GetMetadataCascadePoliciesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies") as string, { method: "GET", params: { ["folder_id"]: folderId, ["owner_enterprise_id"]: options.ownerEnterpriseId, ["marker"]: options.marker, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataCascadePolicies(deserializeJson(response.text));
    }
    async createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataCascadePolicy(deserializeJson(response.text));
    }
    async getMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataCascadePolicy(deserializeJson(response.text));
    }
    async deleteMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createMetadataCascadePolicyApply(metadataCascadePolicyId: string, requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId, "/apply") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
