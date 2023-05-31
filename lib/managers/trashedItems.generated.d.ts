import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetFolderTrashItemsOptionsArgDirectionField = "ASC" | "DESC";
export type GetFolderTrashItemsOptionsArgSortField = "name" | "date" | "size";
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">);
    getFolderTrashItems(options?: GetFolderTrashItemsOptionsArg): Promise<any>;
}
