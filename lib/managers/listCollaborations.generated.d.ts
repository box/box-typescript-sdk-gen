import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ListCollaborationsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetFileCollaborationsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export interface GetFolderCollaborationsOptionsArg {
    readonly fields?: string;
}
export type GetCollaborationsStatusArg = "pending";
export interface GetCollaborationsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetGroupCollaborationsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class ListCollaborationsManager {
    readonly auth: ListCollaborationsManagerAuthField;
    constructor(fields: Omit<ListCollaborationsManager, "getFileCollaborations" | "getFolderCollaborations" | "getCollaborations" | "getGroupCollaborations">);
    getFileCollaborations(fileId: string, options?: GetFileCollaborationsOptionsArg): Promise<any>;
    getFolderCollaborations(folderId: string, options?: GetFolderCollaborationsOptionsArg): Promise<any>;
    getCollaborations(status: GetCollaborationsStatusArg, options?: GetCollaborationsOptionsArg): Promise<any>;
    getGroupCollaborations(groupId: string, options?: GetGroupCollaborationsOptionsArg): Promise<any>;
}
