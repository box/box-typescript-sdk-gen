import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TrashedFoldersManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFolderTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFoldersManager {
    readonly auth: TrashedFoldersManagerAuthField;
    constructor(fields: Omit<TrashedFoldersManager, "getFolderTrash" | "deleteFolderTrash">);
    getFolderTrash(folderId: string, options?: GetFolderTrashOptionsArg): Promise<any>;
    deleteFolderTrash(folderId: string): Promise<any>;
}
