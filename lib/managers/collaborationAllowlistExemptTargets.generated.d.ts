import { CollaborationAllowlistExemptTargets } from "../schemas.generated.js";
import { CollaborationAllowlistExemptTarget } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetCollaborationWhitelistExemptTargetsQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetCollaborationWhitelistExemptTargetsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollaborationWhitelistExemptTargetsHeadersArg);
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField {
    readonly id: string;
}
export interface CreateCollaborationWhitelistExemptTargetRequestBodyArg {
    readonly user: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
}
export declare class CreateCollaborationWhitelistExemptTargetHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateCollaborationWhitelistExemptTargetHeadersArg);
}
export declare class GetCollaborationWhitelistExemptTargetByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollaborationWhitelistExemptTargetByIdHeadersArg);
}
export declare class DeleteCollaborationWhitelistExemptTargetByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteCollaborationWhitelistExemptTargetByIdHeadersArg);
}
export declare class CollaborationAllowlistExemptTargetsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistExemptTargetsManager, "getCollaborationWhitelistExemptTargets" | "createCollaborationWhitelistExemptTarget" | "getCollaborationWhitelistExemptTargetById" | "deleteCollaborationWhitelistExemptTargetById">);
    getCollaborationWhitelistExemptTargets(queryParams?: GetCollaborationWhitelistExemptTargetsQueryParamsArg, headers?: GetCollaborationWhitelistExemptTargetsHeadersArg): Promise<CollaborationAllowlistExemptTargets>;
    createCollaborationWhitelistExemptTarget(requestBody: CreateCollaborationWhitelistExemptTargetRequestBodyArg, headers?: CreateCollaborationWhitelistExemptTargetHeadersArg): Promise<CollaborationAllowlistExemptTarget>;
    getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string, headers?: GetCollaborationWhitelistExemptTargetByIdHeadersArg): Promise<CollaborationAllowlistExemptTarget>;
    deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId: string, headers?: DeleteCollaborationWhitelistExemptTargetByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField): Json;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArgUserField(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArgUserField;
export declare function serializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: CreateCollaborationWhitelistExemptTargetRequestBodyArg): Json;
export declare function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyArg(val: any): CreateCollaborationWhitelistExemptTargetRequestBodyArg;
