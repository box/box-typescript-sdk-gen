import { TrashFolderRestored } from "../schemas.generated.js";
import { TrashFolder } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface RestoreFolderFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyArgParentField;
}
export interface RestoreFolderFromTrashQueryParamsArg {
    readonly fields?: string;
}
export interface GetFolderTrashQueryParamsArg {
    readonly fields?: string;
}
export declare class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">);
    restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, queryParams?: undefined | RestoreFolderFromTrashQueryParamsArg): Promise<TrashFolderRestored>;
    getFolderTrash(folderId: string, queryParams?: undefined | GetFolderTrashQueryParamsArg): Promise<TrashFolder>;
    deleteFolderTrash(folderId: string): Promise<any>;
}
export declare function serializeRestoreFolderFromTrashRequestBodyArgParentField(val: RestoreFolderFromTrashRequestBodyArgParentField): Json;
export declare function deserializeRestoreFolderFromTrashRequestBodyArgParentField(val: any): RestoreFolderFromTrashRequestBodyArgParentField;
export declare function serializeRestoreFolderFromTrashRequestBodyArg(val: RestoreFolderFromTrashRequestBodyArg): Json;
export declare function deserializeRestoreFolderFromTrashRequestBodyArg(val: any): RestoreFolderFromTrashRequestBodyArg;
export declare function serializeRestoreFolderFromTrashQueryParamsArg(val: RestoreFolderFromTrashQueryParamsArg): Json;
export declare function deserializeRestoreFolderFromTrashQueryParamsArg(val: any): RestoreFolderFromTrashQueryParamsArg;
export declare function serializeGetFolderTrashQueryParamsArg(val: GetFolderTrashQueryParamsArg): Json;
export declare function deserializeGetFolderTrashQueryParamsArg(val: any): GetFolderTrashQueryParamsArg;
