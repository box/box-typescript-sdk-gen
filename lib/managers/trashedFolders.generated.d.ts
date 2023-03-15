import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type TrashedFoldersManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetFoldersIdTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFoldersManager {
    readonly auth: TrashedFoldersManagerAuthField;
    constructor(fields: Omit<TrashedFoldersManager, "getFoldersIdTrash" | "deleteFoldersIdTrash">);
    getFoldersIdTrash(folderId: string, options?: GetFoldersIdTrashOptionsArg): Promise<any>;
    deleteFoldersIdTrash(folderId: string): Promise<any>;
}
