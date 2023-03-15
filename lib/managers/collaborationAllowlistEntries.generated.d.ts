import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type CollaborationAllowlistEntriesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetCollaborationWhitelistEntriesOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostCollaborationWhitelistEntriesRequestBodyArgDirectionField = "inbound" | "outbound" | "both";
export interface PostCollaborationWhitelistEntriesRequestBodyArg {
    readonly domain: string;
    readonly direction: PostCollaborationWhitelistEntriesRequestBodyArgDirectionField;
}
export declare class CollaborationAllowlistEntriesManager {
    readonly auth: CollaborationAllowlistEntriesManagerAuthField;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, "getCollaborationWhitelistEntries" | "postCollaborationWhitelistEntries" | "getCollaborationWhitelistEntriesId" | "deleteCollaborationWhitelistEntriesId">);
    getCollaborationWhitelistEntries(options?: GetCollaborationWhitelistEntriesOptionsArg): Promise<any>;
    postCollaborationWhitelistEntries(requestBody: PostCollaborationWhitelistEntriesRequestBodyArg): Promise<any>;
    getCollaborationWhitelistEntriesId(collaborationWhitelistEntryId: string): Promise<any>;
    deleteCollaborationWhitelistEntriesId(collaborationWhitelistEntryId: string): Promise<any>;
}
