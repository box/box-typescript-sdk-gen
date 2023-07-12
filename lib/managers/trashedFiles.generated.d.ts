import { TrashFileRestored } from "../schemas.generated.js";
import { TrashFile } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface RestoreFileFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFileFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyArgParentField;
}
export interface RestoreFileFromTrashQueryParamsArg {
    readonly fields?: string;
}
export interface GetFileTrashQueryParamsArg {
    readonly fields?: string;
}
export declare class TrashedFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFilesManager, "restoreFileFromTrash" | "getFileTrash" | "deleteFileTrash">);
    restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, queryParams?: undefined | RestoreFileFromTrashQueryParamsArg): Promise<TrashFileRestored>;
    getFileTrash(fileId: string, queryParams?: undefined | GetFileTrashQueryParamsArg): Promise<TrashFile>;
    deleteFileTrash(fileId: string): Promise<any>;
}
export declare function serializeRestoreFileFromTrashRequestBodyArgParentField(val: RestoreFileFromTrashRequestBodyArgParentField): Json;
export declare function deserializeRestoreFileFromTrashRequestBodyArgParentField(val: any): RestoreFileFromTrashRequestBodyArgParentField;
export declare function serializeRestoreFileFromTrashRequestBodyArg(val: RestoreFileFromTrashRequestBodyArg): Json;
export declare function deserializeRestoreFileFromTrashRequestBodyArg(val: any): RestoreFileFromTrashRequestBodyArg;
export declare function serializeRestoreFileFromTrashQueryParamsArg(val: RestoreFileFromTrashQueryParamsArg): Json;
export declare function deserializeRestoreFileFromTrashQueryParamsArg(val: any): RestoreFileFromTrashQueryParamsArg;
export declare function serializeGetFileTrashQueryParamsArg(val: GetFileTrashQueryParamsArg): Json;
export declare function deserializeGetFileTrashQueryParamsArg(val: any): GetFileTrashQueryParamsArg;