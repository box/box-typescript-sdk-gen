import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
export declare class TrashedItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">);
    getFolderTrashItems(queryParams?: undefined | GetFolderTrashItemsQueryParamsArg): Promise<Items>;
}
export declare function serializeGetFolderTrashItemsQueryParamsArgDirectionField(val: GetFolderTrashItemsQueryParamsArgDirectionField): Json;
export declare function deserializeGetFolderTrashItemsQueryParamsArgDirectionField(val: any): GetFolderTrashItemsQueryParamsArgDirectionField;
export declare function serializeGetFolderTrashItemsQueryParamsArgSortField(val: GetFolderTrashItemsQueryParamsArgSortField): Json;
export declare function deserializeGetFolderTrashItemsQueryParamsArgSortField(val: any): GetFolderTrashItemsQueryParamsArgSortField;
export declare function serializeGetFolderTrashItemsQueryParamsArg(val: GetFolderTrashItemsQueryParamsArg): Json;
export declare function deserializeGetFolderTrashItemsQueryParamsArg(val: any): GetFolderTrashItemsQueryParamsArg;
