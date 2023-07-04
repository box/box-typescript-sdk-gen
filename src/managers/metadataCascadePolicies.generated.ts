import { newSerializeMetadataCascadePolicies } from "../schemas.generated.js";
import { newDeserializeMetadataCascadePolicies } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeMetadataCascadePolicy } from "../schemas.generated.js";
import { newDeserializeMetadataCascadePolicy } from "../schemas.generated.js";
import { newSerializeConflictError } from "../schemas.generated.js";
import { newDeserializeConflictError } from "../schemas.generated.js";
import { MetadataCascadePolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { MetadataCascadePolicy } from "../schemas.generated.js";
import { ConflictError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeMetadataCascadePolicies(deserializeJson(response.text));
    }
    async createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBodyArg): Promise<MetadataCascadePolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeMetadataCascadePolicy(deserializeJson(response.text));
    }
    async getMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<MetadataCascadePolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeMetadataCascadePolicy(deserializeJson(response.text));
    }
    async deleteMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createMetadataCascadePolicyApply(metadataCascadePolicyId: string, requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/metadata_cascade_policies/", metadataCascadePolicyId, "/apply") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetMetadataCascadePoliciesQueryParamsArg(val: GetMetadataCascadePoliciesQueryParamsArg): Json {
    return { ["folderId"]: val.folderId, ["ownerEnterpriseId"]: val.ownerEnterpriseId, ["marker"]: val.marker, ["offset"]: val.offset };
}
export function newDeserializeGetMetadataCascadePoliciesQueryParamsArg(val: any): GetMetadataCascadePoliciesQueryParamsArg {
    const folderId: string = val.folderId;
    const ownerEnterpriseId: undefined | string = isJson(val.ownerEnterpriseId, "string") ? val.ownerEnterpriseId : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    return { folderId: folderId, ownerEnterpriseId: ownerEnterpriseId, marker: marker, offset: offset } satisfies GetMetadataCascadePoliciesQueryParamsArg;
}
export function newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: CreateMetadataCascadePolicyRequestBodyArgScopeField): Json {
    return val;
}
export function newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: any): CreateMetadataCascadePolicyRequestBodyArgScopeField {
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
export function newSerializeCreateMetadataCascadePolicyRequestBodyArg(val: CreateMetadataCascadePolicyRequestBodyArg): Json {
    return { ["folderId"]: val.folderId, ["scope"]: newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope), ["templateKey"]: val.templateKey };
}
export function newDeserializeCreateMetadataCascadePolicyRequestBodyArg(val: any): CreateMetadataCascadePolicyRequestBodyArg {
    const folderId: string = val.folderId;
    const scope: CreateMetadataCascadePolicyRequestBodyArgScopeField = newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val.scope);
    const templateKey: string = val.templateKey;
    return { folderId: folderId, scope: scope, templateKey: templateKey } satisfies CreateMetadataCascadePolicyRequestBodyArg;
}
export function newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField): Json {
    return val;
}
export function newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: any): CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField {
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
export function newSerializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: CreateMetadataCascadePolicyApplyRequestBodyArg): Json {
    return { ["conflictResolution"]: newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution) };
}
export function newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: any): CreateMetadataCascadePolicyApplyRequestBodyArg {
    const conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val.conflictResolution);
    return { conflictResolution: conflictResolution } satisfies CreateMetadataCascadePolicyApplyRequestBodyArg;
}
