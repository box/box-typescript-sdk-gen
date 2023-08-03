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
export declare class GetFileVersionsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileVersionsHeadersArg);
}
export interface GetFileVersionByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetFileVersionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileVersionByIdHeadersArg);
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export declare class UpdateFileVersionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateFileVersionByIdHeadersArg);
}
export declare class DeleteFileVersionByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileVersionByIdHeadersArg);
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionQueryParamsArg {
    readonly fields?: string;
}
export declare class PromoteFileVersionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: PromoteFileVersionHeadersArg);
}
export declare class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">);
    getFileVersions(fileId: string, queryParams?: GetFileVersionsQueryParamsArg, headers?: GetFileVersionsHeadersArg): Promise<FileVersions>;
    getFileVersionById(fileId: string, fileVersionId: string, queryParams?: GetFileVersionByIdQueryParamsArg, headers?: GetFileVersionByIdHeadersArg): Promise<FileVersionFull>;
    updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg, headers?: UpdateFileVersionByIdHeadersArg): Promise<FileVersionFull>;
    deleteFileVersionById(fileId: string, fileVersionId: string, headers?: DeleteFileVersionByIdHeadersArg): Promise<undefined>;
    promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, queryParams?: PromoteFileVersionQueryParamsArg, headers?: PromoteFileVersionHeadersArg): Promise<FileVersionFull>;
}
export declare function serializeUpdateFileVersionByIdRequestBodyArg(val: UpdateFileVersionByIdRequestBodyArg): Json;
export declare function deserializeUpdateFileVersionByIdRequestBodyArg(val: any): UpdateFileVersionByIdRequestBodyArg;
export declare function serializePromoteFileVersionRequestBodyArgTypeField(val: PromoteFileVersionRequestBodyArgTypeField): Json;
export declare function deserializePromoteFileVersionRequestBodyArgTypeField(val: any): PromoteFileVersionRequestBodyArgTypeField;
export declare function serializePromoteFileVersionRequestBodyArg(val: PromoteFileVersionRequestBodyArg): Json;
export declare function deserializePromoteFileVersionRequestBodyArg(val: any): PromoteFileVersionRequestBodyArg;
