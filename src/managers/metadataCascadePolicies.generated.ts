import { serializeMetadataCascadePolicies } from "../schemas.generated.js";
import { deserializeMetadataCascadePolicies } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeMetadataCascadePolicy } from "../schemas.generated.js";
import { deserializeMetadataCascadePolicy } from "../schemas.generated.js";
import { serializeConflictError } from "../schemas.generated.js";
import { deserializeConflictError } from "../schemas.generated.js";
import { MetadataCascadePolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { MetadataCascadePolicy } from "../schemas.generated.js";
import { ConflictError } from "../schemas.generated.js";
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
export interface GetMetadataCascadePoliciesQueryParamsArg {
    readonly folderId: string;
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataCascadePoliciesManager, "getMetadataCascadePolicies" | "createMetadataCascadePolicy" | "getMetadataCascadePolicyById" | "deleteMetadataCascadePolicyById" | "createMetadataCascadePolicyApply">) {
        Object.assign(this, fields);
    }
    async getMetadataCascadePolicies(queryParams: GetMetadataCascadePoliciesQueryParamsArg): Promise<MetadataCascadePolicies> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies") as string, { method: "GET", params: prepareParams(serializeGetMetadataCascadePoliciesQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataCascadePolicies(deserializeJson(response.text));
    }
    async createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBodyArg): Promise<MetadataCascadePolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies") as string, { method: "POST", body: serializeJson(serializeCreateMetadataCascadePolicyRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataCascadePolicy(deserializeJson(response.text));
    }
    async getMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<MetadataCascadePolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadataCascadePolicy(deserializeJson(response.text));
    }
    async deleteMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createMetadataCascadePolicyApply(metadataCascadePolicyId: string, requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId, "/apply") as string, { method: "POST", body: serializeJson(serializeCreateMetadataCascadePolicyApplyRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetMetadataCascadePoliciesQueryParamsArg(val: GetMetadataCascadePoliciesQueryParamsArg): Json {
    return { ["folder_id"]: val.folderId, ["owner_enterprise_id"]: val.ownerEnterpriseId, ["marker"]: val.marker, ["offset"]: val.offset };
}
export function deserializeGetMetadataCascadePoliciesQueryParamsArg(val: any): GetMetadataCascadePoliciesQueryParamsArg {
    const folderId: string = val.folder_id;
    const ownerEnterpriseId: undefined | string = isJson(val.owner_enterprise_id, "string") ? val.owner_enterprise_id : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { folderId: folderId, ownerEnterpriseId: ownerEnterpriseId, marker: marker, offset: offset } satisfies GetMetadataCascadePoliciesQueryParamsArg;
}
export function serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: CreateMetadataCascadePolicyRequestBodyArgScopeField): Json {
    return val;
}
export function deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: any): CreateMetadataCascadePolicyRequestBodyArgScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataCascadePolicyRequestBodyArgScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataCascadePolicyRequestBodyArg(val: CreateMetadataCascadePolicyRequestBodyArg): Json {
    return { ["folder_id"]: val.folderId, ["scope"]: serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
export function deserializeCreateMetadataCascadePolicyRequestBodyArg(val: any): CreateMetadataCascadePolicyRequestBodyArg {
    const folderId: string = val.folder_id;
    const scope: CreateMetadataCascadePolicyRequestBodyArgScopeField = deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope);
    const templateKey: string = val.templateKey;
    return { folderId: folderId, scope: scope, templateKey: templateKey } satisfies CreateMetadataCascadePolicyRequestBodyArg;
}
export function serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField): Json {
    return val;
}
export function deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: any): CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField\"";
    }
    if (val == "none") {
        return "none";
    }
    if (val == "overwrite") {
        return "overwrite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: CreateMetadataCascadePolicyApplyRequestBodyArg): Json {
    return { ["conflict_resolution"]: serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution) };
}
export function deserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: any): CreateMetadataCascadePolicyApplyRequestBodyArg {
    const conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflict_resolution);
    return { conflictResolution: conflictResolution } satisfies CreateMetadataCascadePolicyApplyRequestBodyArg;
}
