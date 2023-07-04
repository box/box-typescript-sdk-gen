import { MetadataCascadePolicies } from "../schemas.generated.js";
import { MetadataCascadePolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class MetadataCascadePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataCascadePoliciesManager, "getMetadataCascadePolicies" | "createMetadataCascadePolicy" | "getMetadataCascadePolicyById" | "deleteMetadataCascadePolicyById" | "createMetadataCascadePolicyApply">);
    getMetadataCascadePolicies(queryParams: GetMetadataCascadePoliciesQueryParamsArg): Promise<MetadataCascadePolicies>;
    createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBodyArg): Promise<MetadataCascadePolicy>;
    getMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<MetadataCascadePolicy>;
    deleteMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any>;
    createMetadataCascadePolicyApply(metadataCascadePolicyId: string, requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg): Promise<any>;
}
export declare function newSerializeGetMetadataCascadePoliciesQueryParamsArg(val: GetMetadataCascadePoliciesQueryParamsArg): Json;
export declare function newDeserializeGetMetadataCascadePoliciesQueryParamsArg(val: any): GetMetadataCascadePoliciesQueryParamsArg;
export declare function newSerializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: CreateMetadataCascadePolicyRequestBodyArgScopeField): Json;
export declare function newDeserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: any): CreateMetadataCascadePolicyRequestBodyArgScopeField;
export declare function newSerializeCreateMetadataCascadePolicyRequestBodyArg(val: CreateMetadataCascadePolicyRequestBodyArg): Json;
export declare function newDeserializeCreateMetadataCascadePolicyRequestBodyArg(val: any): CreateMetadataCascadePolicyRequestBodyArg;
export declare function newSerializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField): Json;
export declare function newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: any): CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
export declare function newSerializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: CreateMetadataCascadePolicyApplyRequestBodyArg): Json;
export declare function newDeserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: any): CreateMetadataCascadePolicyApplyRequestBodyArg;
