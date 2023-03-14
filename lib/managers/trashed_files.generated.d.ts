import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type TrashedFilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFilesManager {
    readonly auth: TrashedFilesManagerAuthField;
    constructor(fields: Omit<TrashedFilesManager, "getFilesIdTrash" | "deleteFilesIdTrash">);
    getFilesIdTrash(fileId: string, options?: GetFilesIdTrashOptionsArg): Promise<any>;
    deleteFilesIdTrash(fileId: string): Promise<any>;
}
