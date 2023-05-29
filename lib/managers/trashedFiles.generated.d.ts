import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface RestoreFileFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFileFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyArgParentField;
}
export interface RestoreFileFromTrashOptionsArg {
    readonly fields?: string;
}
export interface GetFileTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFilesManager, "restoreFileFromTrash" | "getFileTrash" | "deleteFileTrash">);
    restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, options?: RestoreFileFromTrashOptionsArg): Promise<any>;
    getFileTrash(fileId: string, options?: GetFileTrashOptionsArg): Promise<any>;
    deleteFileTrash(fileId: string): Promise<any>;
}
