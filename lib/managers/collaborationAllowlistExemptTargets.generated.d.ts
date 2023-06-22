import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetCollaborationWhitelistExemptTargetsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
    readonly id: string;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArg {
    readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export declare class CollaborationAllowlistExemptTargetsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "createCollaborationWhitelistExemptTarget" | "getCollaborationWhitelistExemptTargetById" | "deleteCollaborationWhitelistExemptTargetById">);
    getCollaborationWhitelistExemptTargets(options?: GetCollaborationWhitelistExemptTargetsOptionsArg): Promise<any>;
    createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Promise<any>;
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any>;
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any>;
}
