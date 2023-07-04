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
export declare function newSerializeGetFolderTrashItemsQueryParamsArgDirectionField(val: GetFolderTrashItemsQueryParamsArgDirectionField): Json;
export declare function newDeserializeGetFolderTrashItemsQueryParamsArgDirectionField(val: any): GetFolderTrashItemsQueryParamsArgDirectionField;
export declare function newSerializeGetFolderTrashItemsQueryParamsArgSortField(val: GetFolderTrashItemsQueryParamsArgSortField): Json;
export declare function newDeserializeGetFolderTrashItemsQueryParamsArgSortField(val: any): GetFolderTrashItemsQueryParamsArgSortField;
export declare function newSerializeGetFolderTrashItemsQueryParamsArg(val: GetFolderTrashItemsQueryParamsArg): Json;
export declare function newDeserializeGetFolderTrashItemsQueryParamsArg(val: any): GetFolderTrashItemsQueryParamsArg;
