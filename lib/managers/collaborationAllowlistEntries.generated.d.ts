import { CollaborationAllowlistEntries } from "../schemas.generated.js";
import { CollaborationAllowlistEntry } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetCollaborationWhitelistEntriesQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateCollaborationWhitelistEntryRequestBodyArgDirectionField = "inbound" | "outbound" | "both";
export interface CreateCollaborationWhitelistEntryRequestBodyArg {
    readonly domain: string;
    readonly direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
}
export declare class CollaborationAllowlistEntriesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "createCollaborationWhitelistEntry" | "getCollaborationWhitelistEntryById" | "deleteCollaborationWhitelistEntryById">);
    getCollaborationWhitelistEntries(queryParams?: undefined | GetCollaborationWhitelistEntriesQueryParamsArg): Promise<CollaborationAllowlistEntries>;
    createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBodyArg): Promise<CollaborationAllowlistEntry>;
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<CollaborationAllowlistEntry>;
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any>;
}
export declare function serializeGetCollaborationWhitelistEntriesQueryParamsArg(val: GetCollaborationWhitelistEntriesQueryParamsArg): Json;
export declare function deserializeGetCollaborationWhitelistEntriesQueryParamsArg(val: any): GetCollaborationWhitelistEntriesQueryParamsArg;
export declare function serializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField): Json;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: any): CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
export declare function serializeCreateCollaborationWhitelistEntryRequestBodyArg(val: CreateCollaborationWhitelistEntryRequestBodyArg): Json;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBodyArg(val: any): CreateCollaborationWhitelistEntryRequestBodyArg;
