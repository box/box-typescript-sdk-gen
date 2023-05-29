import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">);
    restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, options?: RestoreFolderFromTrashOptionsArg): Promise<any>;
    getFolderTrash(folderId: string, options?: GetFolderTrashOptionsArg): Promise<any>;
    deleteFolderTrash(folderId: string): Promise<any>;
}
