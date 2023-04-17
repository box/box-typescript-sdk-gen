import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
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
export declare class MetadataCascadePoliciesManager {
    readonly auth: MetadataCascadePoliciesManagerAuthField;
    constructor(fields: Omit<MetadataCascadePoliciesManager, "getMetadataCascadePolicies" | "createMetadataCascadePolicy" | "getMetadataCascadePolicyById" | "deleteMetadataCascadePolicyById" | "createMetadataCascadePolicyApply">);
    getMetadataCascadePolicies(folderId: string, options?: GetMetadataCascadePoliciesOptionsArg): Promise<any>;
    createMetadataCascadePolicy(requestBody: CreateMetadataCascadePolicyRequestBodyArg): Promise<any>;
    getMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any>;
    deleteMetadataCascadePolicyById(metadataCascadePolicyId: string): Promise<any>;
    createMetadataCascadePolicyApply(metadataCascadePolicyId: string, requestBody: CreateMetadataCascadePolicyApplyRequestBodyArg): Promise<any>;
}
