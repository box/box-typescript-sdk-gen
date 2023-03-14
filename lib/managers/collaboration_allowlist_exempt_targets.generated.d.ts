import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type CollaborationAllowlistExemptTargetsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetCollaborationWhitelistExemptTargetsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface PostCollaborationWhitelistExemptTargetsRequestBodyArgUserField {
    readonly id: string;
}
export interface PostCollaborationWhitelistExemptTargetsRequestBodyArg {
    readonly user: PostCollaborationWhitelistExemptTargetsRequestBodyArgUserField;
}
export declare class CollaborationAllowlistExemptTargetsManager {
    readonly auth: CollaborationAllowlistExemptTargetsManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "postCollaborationWhitelistExemptTargets" | "getCollaborationWhitelistExemptTargetsId" | "deleteCollaborationWhitelistExemptTargetsId">);
    getCollaborationWhitelistExemptTargets(options?: GetCollaborationWhitelistExemptTargetsOptionsArg): Promise<any>;
    postCollaborationWhitelistExemptTargets(requestBody: PostCollaborationWhitelistExemptTargetsRequestBodyArg): Promise<any>;
    getCollaborationWhitelistExemptTargetsId(collaborationWhitelistExemptTargetId: string): Promise<any>;
    deleteCollaborationWhitelistExemptTargetsId(collaborationWhitelistExemptTargetId: string): Promise<any>;
}
