import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type CollaborationAllowlistEntriesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetCollaborationWhitelistEntriesOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateCollaborationWhitelistEntryRequestBodyArgDirectionField = "inbound" | "outbound" | "both";
export interface CreateCollaborationWhitelistEntryRequestBodyArg {
    readonly domain: string;
    readonly direction: CreateCollaborationWhitelistEntryRequestBodyArgDirectionField;
}
export declare class CollaborationAllowlistEntriesManager {
    readonly auth: CollaborationAllowlistEntriesManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "createCollaborationWhitelistEntry" | "getCollaborationWhitelistEntryById" | "deleteCollaborationWhitelistEntryById">);
    getCollaborationWhitelistEntries(options?: GetCollaborationWhitelistEntriesOptionsArg): Promise<any>;
    createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBodyArg): Promise<any>;
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any>;
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string): Promise<any>;
}
