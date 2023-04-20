import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type TrashedItemsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
