import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type TrashedItemsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetFoldersTrashItemsOptionsArgDirectionField = "ASC" | "DESC";
export type GetFoldersTrashItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export interface GetFoldersTrashItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFoldersTrashItemsOptionsArgDirectionField;
    readonly sort?: GetFoldersTrashItemsOptionsArgSortField;
}
export declare class TrashedItemsManager {
    readonly auth: TrashedItemsManagerAuthField;
    constructor(fields: Omit<TrashedItemsManager, "getFoldersTrashItems">);
    getFoldersTrashItems(options?: GetFoldersTrashItemsOptionsArg): Promise<any>;
}
