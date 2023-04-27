import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type TrashedFoldersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface RestoreFolderFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyArgParentField;
}
export interface RestoreFolderFromTrashOptionsArg {
    readonly fields?: string;
}
export interface GetFolderTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFoldersManager {
    readonly auth: TrashedFoldersManagerAuthField;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">);
    restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, options?: RestoreFolderFromTrashOptionsArg): Promise<any>;
    getFolderTrash(folderId: string, options?: GetFolderTrashOptionsArg): Promise<any>;
    deleteFolderTrash(folderId: string): Promise<any>;
}
