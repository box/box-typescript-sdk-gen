import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TrashedItemsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetFolderTrashItemsOptionsArgDirectionField = "ASC" | "DESC";
export type GetFolderTrashItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export interface GetFolderTrashItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFolderTrashItemsOptionsArgDirectionField;
    readonly sort?: GetFolderTrashItemsOptionsArgSortField;
}
export declare class TrashedItemsManager {
    readonly auth: TrashedItemsManagerAuthField;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">);
    getFolderTrashItems(options?: GetFolderTrashItemsOptionsArg): Promise<any>;
}
