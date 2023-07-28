import { FileVersions } from "../schemas.generated.js";
import { FileVersionFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFileVersionsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFileVersionByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFileVersionByIdHeadersArg {
    readonly ifMatch?: string;
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionQueryParamsArg {
    readonly fields?: string;
}
export declare class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">);
    getFileVersions(fileId: string, queryParams?: GetFileVersionsQueryParamsArg): Promise<FileVersions>;
    getFileVersionById(fileId: string, fileVersionId: string, queryParams?: GetFileVersionByIdQueryParamsArg): Promise<FileVersionFull>;
    updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg): Promise<FileVersionFull>;
    deleteFileVersionById(fileId: string, fileVersionId: string, headers?: DeleteFileVersionByIdHeadersArg): Promise<any>;
    promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, queryParams?: PromoteFileVersionQueryParamsArg): Promise<FileVersionFull>;
}
export declare function serializeGetFileVersionsQueryParamsArg(val: GetFileVersionsQueryParamsArg): Json;
export declare function deserializeGetFileVersionsQueryParamsArg(val: any): GetFileVersionsQueryParamsArg;
export declare function serializeGetFileVersionByIdQueryParamsArg(val: GetFileVersionByIdQueryParamsArg): Json;
export declare function deserializeGetFileVersionByIdQueryParamsArg(val: any): GetFileVersionByIdQueryParamsArg;
export declare function serializeUpdateFileVersionByIdRequestBodyArg(val: UpdateFileVersionByIdRequestBodyArg): Json;
export declare function deserializeUpdateFileVersionByIdRequestBodyArg(val: any): UpdateFileVersionByIdRequestBodyArg;
export declare function serializeDeleteFileVersionByIdHeadersArg(val: DeleteFileVersionByIdHeadersArg): Json;
export declare function deserializeDeleteFileVersionByIdHeadersArg(val: any): DeleteFileVersionByIdHeadersArg;
export declare function serializePromoteFileVersionRequestBodyArgTypeField(val: PromoteFileVersionRequestBodyArgTypeField): Json;
export declare function deserializePromoteFileVersionRequestBodyArgTypeField(val: any): PromoteFileVersionRequestBodyArgTypeField;
export declare function serializePromoteFileVersionRequestBodyArg(val: PromoteFileVersionRequestBodyArg): Json;
export declare function deserializePromoteFileVersionRequestBodyArg(val: any): PromoteFileVersionRequestBodyArg;
export declare function serializePromoteFileVersionQueryParamsArg(val: PromoteFileVersionQueryParamsArg): Json;
export declare function deserializePromoteFileVersionQueryParamsArg(val: any): PromoteFileVersionQueryParamsArg;
