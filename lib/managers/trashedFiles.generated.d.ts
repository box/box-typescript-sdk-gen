import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type TrashedFilesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetFilesIdTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFilesManager {
    readonly auth: TrashedFilesManagerAuthField;
    constructor(fields: Omit<TrashedFilesManager, "getFilesIdTrash" | "deleteFilesIdTrash">);
    getFilesIdTrash(fileId: string, options?: GetFilesIdTrashOptionsArg): Promise<any>;
    deleteFilesIdTrash(fileId: string): Promise<any>;
}
