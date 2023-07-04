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
export declare function newSerializeGetCollaborationWhitelistEntriesQueryParamsArg(val: GetCollaborationWhitelistEntriesQueryParamsArg): Json;
export declare function newDeserializeGetCollaborationWhitelistEntriesQueryParamsArg(val: any): GetCollaborationWhitelistEntriesQueryParamsArg;
export declare function newSerializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField): Json;
export declare function newDeserializeCreateCollaborationWhitelistEntryRequestBodyArgDirectionField(val: any): CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
export declare function newSerializeCreateCollaborationWhitelistEntryRequestBodyArg(val: CreateCollaborationWhitelistEntryRequestBodyArg): Json;
export declare function newDeserializeCreateCollaborationWhitelistEntryRequestBodyArg(val: any): CreateCollaborationWhitelistEntryRequestBodyArg;
