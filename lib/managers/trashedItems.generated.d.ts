import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetFolderTrashItemsQueryParamsArgDirectionField = "ASC" | "DESC";
export type GetFolderTrashItemsQueryParamsArgSortField = "name" | "date" | "size";
export interface GetFolderTrashItemsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFolderTrashItemsQueryParamsArgDirectionField;
    readonly sort?: GetFolderTrashItemsQueryParamsArgSortField;
}
export declare class GetFolderTrashItemsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderTrashItemsHeadersArg);
}
export declare class TrashedItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">);
    getFolderTrashItems(queryParams?: GetFolderTrashItemsQueryParamsArg, headers?: GetFolderTrashItemsHeadersArg): Promise<Items>;
}
