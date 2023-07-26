import { CollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class CollaborationAllowlistExemptTargetsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "createCollaborationWhitelistExemptTarget" | "getCollaborationWhitelistExemptTargetById" | "deleteCollaborationWhitelistExemptTargetById">);
    getCollaborationWhitelistExemptTargets(queryParams?: undefined | GetCollaborationWhitelistExemptTargetsQueryParamsArg): Promise<CollaborationAllowlistExemptTargets>;
    createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Promise<CollaborationAllowlistExemptTarget>;
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<CollaborationAllowlistExemptTarget>;
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string): Promise<any>;
}
export declare function serializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val: GetCollaborationWhitelistExemptTargetsQueryParamsArg): Json;
export declare function deserializeGetCollaborationWhitelistExemptTargetsQueryParamsArg(val: any): GetCollaborationWhitelistExemptTargetsQueryParamsArg;
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField): Json;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Json;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArg;
