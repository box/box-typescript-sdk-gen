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
export declare class RestoreFolderFromTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: RestoreFolderFromTrashHeadersArg);
}
export interface GetFolderTrashQueryParamsArg {
    readonly fields?: string;
}
export declare class GetFolderTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFolderTrashHeadersArg);
}
export declare class DeleteFolderTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFolderTrashHeadersArg);
}
export declare class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">);
    restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, queryParams?: RestoreFolderFromTrashQueryParamsArg, headers?: RestoreFolderFromTrashHeadersArg): Promise<TrashFolderRestored>;
    getFolderTrash(folderId: string, queryParams?: GetFolderTrashQueryParamsArg, headers?: GetFolderTrashHeadersArg): Promise<TrashFolder>;
    deleteFolderTrash(folderId: string, headers?: DeleteFolderTrashHeadersArg): Promise<undefined>;
}
export declare function serializeRestoreFolderFromTrashRequestBodyArgParentField(val: RestoreFolderFromTrashRequestBodyArgParentField): Json;
export declare function deserializeRestoreFolderFromTrashRequestBodyArgParentField(val: any): RestoreFolderFromTrashRequestBodyArgParentField;
export declare function serializeRestoreFolderFromTrashRequestBodyArg(val: RestoreFolderFromTrashRequestBodyArg): Json;
export declare function deserializeRestoreFolderFromTrashRequestBodyArg(val: any): RestoreFolderFromTrashRequestBodyArg;
