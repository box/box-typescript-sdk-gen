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
    getFileVersions(fileId: string, queryParams?: undefined | GetFileVersionsQueryParamsArg): Promise<FileVersions>;
    getFileVersionById(fileId: string, fileVersionId: string, queryParams?: undefined | GetFileVersionByIdQueryParamsArg): Promise<FileVersionFull>;
    updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg): Promise<FileVersionFull>;
    deleteFileVersionById(fileId: string, fileVersionId: string, headers?: undefined | DeleteFileVersionByIdHeadersArg): Promise<any>;
    promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, queryParams?: undefined | PromoteFileVersionQueryParamsArg): Promise<FileVersionFull>;
}
export declare function newSerializeGetFileVersionsQueryParamsArg(val: GetFileVersionsQueryParamsArg): Json;
export declare function newDeserializeGetFileVersionsQueryParamsArg(val: any): GetFileVersionsQueryParamsArg;
export declare function newSerializeGetFileVersionByIdQueryParamsArg(val: GetFileVersionByIdQueryParamsArg): Json;
export declare function newDeserializeGetFileVersionByIdQueryParamsArg(val: any): GetFileVersionByIdQueryParamsArg;
export declare function newSerializeUpdateFileVersionByIdRequestBodyArg(val: UpdateFileVersionByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateFileVersionByIdRequestBodyArg(val: any): UpdateFileVersionByIdRequestBodyArg;
export declare function newSerializeDeleteFileVersionByIdHeadersArg(val: DeleteFileVersionByIdHeadersArg): Json;
export declare function newDeserializeDeleteFileVersionByIdHeadersArg(val: any): DeleteFileVersionByIdHeadersArg;
export declare function newSerializePromoteFileVersionRequestBodyArgTypeField(val: PromoteFileVersionRequestBodyArgTypeField): Json;
export declare function newDeserializePromoteFileVersionRequestBodyArgTypeField(val: any): PromoteFileVersionRequestBodyArgTypeField;
export declare function newSerializePromoteFileVersionRequestBodyArg(val: PromoteFileVersionRequestBodyArg): Json;
export declare function newDeserializePromoteFileVersionRequestBodyArg(val: any): PromoteFileVersionRequestBodyArg;
export declare function newSerializePromoteFileVersionQueryParamsArg(val: PromoteFileVersionQueryParamsArg): Json;
export declare function newDeserializePromoteFileVersionQueryParamsArg(val: any): PromoteFileVersionQueryParamsArg;
