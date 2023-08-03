import { CollaborationAllowlistEntries } from "../schemas.generated.js";
import { CollaborationAllowlistEntry } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetCollaborationWhitelistEntriesQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetCollaborationWhitelistEntriesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollaborationWhitelistEntriesHeadersArg);
}
export type CreateCollaborationWhitelistEntryRequestBodyArgDirectionField = "inbound" | "outbound" | "both";
export interface CreateCollaborationWhitelistEntryRequestBodyArg {
    readonly domain: string;
    readonly direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
}
export declare class CreateCollaborationWhitelistEntryHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateCollaborationWhitelistEntryHeadersArg);
}
export declare class GetCollaborationWhitelistEntryByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetCollaborationWhitelistEntryByIdHeadersArg);
}
export declare class DeleteCollaborationWhitelistEntryByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteCollaborationWhitelistEntryByIdHeadersArg);
}
export declare class CollaborationAllowlistEntriesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "createCollaborationWhitelistEntry" | "getCollaborationWhitelistEntryById" | "deleteCollaborationWhitelistEntryById">);
    getCollaborationWhitelistEntries(queryParams?: GetCollaborationWhitelistEntriesQueryParamsArg, headers?: GetCollaborationWhitelistEntriesHeadersArg): Promise<CollaborationAllowlistEntries>;
    createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBodyArg, headers?: CreateCollaborationWhitelistEntryHeadersArg): Promise<CollaborationAllowlistEntry>;
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string, headers?: GetCollaborationWhitelistEntryByIdHeadersArg): Promise<CollaborationAllowlistEntry>;
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string, headers?: DeleteCollaborationWhitelistEntryByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField): Json;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: any): CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
export declare function serializeCreateCollaborationWhitelistEntryRequestBodyArg(val: CreateCollaborationWhitelistEntryRequestBodyArg): Json;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBodyArg(val: any): CreateCollaborationWhitelistEntryRequestBodyArg;
