import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TrashedFilesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFileTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedFilesManager {
    readonly auth: TrashedFilesManagerAuthField;
    constructor(fields: Omit<TrashedFilesManager, "getFileTrash" | "deleteFileTrash">);
    getFileTrash(fileId: string, options?: GetFileTrashOptionsArg): Promise<any>;
    deleteFileTrash(fileId: string): Promise<any>;
}
