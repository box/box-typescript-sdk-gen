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
export declare class RestoreFileFromTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: RestoreFileFromTrashHeadersArg);
}
export interface GetFileTrashQueryParamsArg {
    readonly fields?: string;
}
export declare class GetFileTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileTrashHeadersArg);
}
export declare class DeleteFileTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileTrashHeadersArg);
}
export declare class TrashedFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFilesManager, "restoreFileFromTrash" | "getFileTrash" | "deleteFileTrash">);
    restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, queryParams?: RestoreFileFromTrashQueryParamsArg, headers?: RestoreFileFromTrashHeadersArg): Promise<TrashFileRestored>;
    getFileTrash(fileId: string, queryParams?: GetFileTrashQueryParamsArg, headers?: GetFileTrashHeadersArg): Promise<TrashFile>;
    deleteFileTrash(fileId: string, headers?: DeleteFileTrashHeadersArg): Promise<undefined>;
}
export declare function serializeRestoreFileFromTrashRequestBodyArgParentField(val: RestoreFileFromTrashRequestBodyArgParentField): Json;
export declare function deserializeRestoreFileFromTrashRequestBodyArgParentField(val: any): RestoreFileFromTrashRequestBodyArgParentField;
export declare function serializeRestoreFileFromTrashRequestBodyArg(val: RestoreFileFromTrashRequestBodyArg): Json;
export declare function deserializeRestoreFileFromTrashRequestBodyArg(val: any): RestoreFileFromTrashRequestBodyArg;
