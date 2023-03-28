import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type MetadataCascadePoliciesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetMetadataCascadePoliciesOptionsArg {
    readonly ownerEnterpriseId?: string;
    readonly marker?: string;
    readonly offset?: number;
}
export type PostMetadataCascadePoliciesRequestBodyArgScopeField = "global" | "enterprise";
export interface PostMetadataCascadePoliciesRequestBodyArg {
    readonly folderId: string;
    readonly scope: PostMetadataCascadePoliciesRequestBodyArgScopeField;
    readonly templateKey: string;
}
export type PostMetadataCascadePoliciesIdApplyRequestBodyArgConflictResolutionField = "none" | "overwrite";
export interface PostMetadataCascadePoliciesIdApplyRequestBodyArg {
    readonly conflictResolution: PostMetadataCascadePoliciesIdApplyRequestBodyArgConflictResolutionField;
}
export declare class MetadataCascadePoliciesManager {
    readonly auth: MetadataCascadePoliciesManagerAuthField;
    constructor(fields: Omit<MetadataCascadePoliciesManager, "getMetadataCascadePolicies" | "postMetadataCascadePolicies" | "getMetadataCascadePoliciesId" | "deleteMetadataCascadePoliciesId" | "postMetadataCascadePoliciesIdApply">);
    getMetadataCascadePolicies(folderId: string, options?: GetMetadataCascadePoliciesOptionsArg): Promise<any>;
    postMetadataCascadePolicies(requestBody: PostMetadataCascadePoliciesRequestBodyArg): Promise<any>;
    getMetadataCascadePoliciesId(metadataCascadePolicyId: string): Promise<any>;
    deleteMetadataCascadePoliciesId(metadataCascadePolicyId: string): Promise<any>;
    postMetadataCascadePoliciesIdApply(metadataCascadePolicyId: string, requestBody: PostMetadataCascadePoliciesIdApplyRequestBodyArg): Promise<any>;
}
