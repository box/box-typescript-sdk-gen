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
export declare class GetMetadataCascadePoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataCascadePoliciesHeadersArg);
}
export type CreateMetadataCascadePolicyRequestBodyArgScopeField = "global" | "enterprise";
export interface CreateMetadataCascadePolicyRequestBodyArg {
    readonly folderId: string;
    readonly scope: CreateMetadataCascadePolicyRequestBodyArgScopeField;
    readonly templateKey: string;
}
export declare class CreateMetadataCascadePolicyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateMetadataCascadePolicyHeadersArg);
}
export declare class GetMetadataCascadePolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataCascadePolicyByIdHeadersArg);
}
export declare class DeleteMetadataCascadePolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteMetadataCascadePolicyByIdHeadersArg);
}
export type CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField = "none" | "overwrite";
export interface CreateMetadataCascadePolicyApplyRequestBodyArg {
    readonly conflictResolution: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
}
export declare class CreateMetadataCascadePolicyApplyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateMetadataCascadePolicyApplyHeadersArg);
}
export declare class MetadataCascadePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataCascadePoliciesManager, "getMetadataCascadePolicies" | "createMetadataCascadePolicy" | "getMetadataCascadePolicyById" | "deleteMetadataCascadePolicyById" | "createMetadataCascadePolicyApply">);
    getMetadataCascadePolicies(queryParams: GetMetadataCascadePoliciesQueryParamsArg, headers?: GetMetadataCascadePoliciesHeadersArg): Promise<MetadataCascadePolicies>;
    createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBodyArg, headers?: CreateMetadataCascadePolicyHeadersArg): Promise<MetadataCascadePolicy>;
    getMetadataCascadePolicyById(metadataCascadePolicyId: string, headers?: GetMetadataCascadePolicyByIdHeadersArg): Promise<MetadataCascadePolicy>;
    deleteMetadataCascadePolicyById(metadataCascadePolicyId: string, headers?: DeleteMetadataCascadePolicyByIdHeadersArg): Promise<undefined>;
    createMetadataCascadePolicyApply(metadataCascadePolicyId: string, requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg, headers?: CreateMetadataCascadePolicyApplyHeadersArg): Promise<undefined>;
}
export declare function serializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: CreateMetadataCascadePolicyRequestBodyArgScopeField): Json;
export declare function deserializeCreateMetadataCascadePolicyRequestBodyArgScopeField(val: any): CreateMetadataCascadePolicyRequestBodyArgScopeField;
export declare function serializeCreateMetadataCascadePolicyRequestBodyArg(val: CreateMetadataCascadePolicyRequestBodyArg): Json;
export declare function deserializeCreateMetadataCascadePolicyRequestBodyArg(val: any): CreateMetadataCascadePolicyRequestBodyArg;
export declare function serializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField): Json;
export declare function deserializeCreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField(val: any): CreateMetadataCascadePolicyApplyRequestBodyArgConflictResolutionField;
export declare function serializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: CreateMetadataCascadePolicyApplyRequestBodyArg): Json;
export declare function deserializeCreateMetadataCascadePolicyApplyRequestBodyArg(val: any): CreateMetadataCascadePolicyApplyRequestBodyArg;
