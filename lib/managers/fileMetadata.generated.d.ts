import { Metadatas } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetFileMetadataHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileMetadataHeadersArg);
}
export type GetFileMetadataByIdScopeArg = "global" | "enterprise";
export declare class GetFileMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileMetadataByIdHeadersArg);
}
export type CreateFileMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFileMetadataByIdRequestBodyArg {
}
export declare class CreateFileMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFileMetadataByIdHeadersArg);
}
export type DeleteFileMetadataByIdScopeArg = "global" | "enterprise";
export declare class DeleteFileMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileMetadataByIdHeadersArg);
}
export declare class FileMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileMetadataManager, "getFileMetadata" | "getFileMetadataById" | "createFileMetadataById" | "deleteFileMetadataById">);
    getFileMetadata(fileId: string, headers?: GetFileMetadataHeadersArg): Promise<Metadatas>;
    getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScopeArg, templateKey: string, headers?: GetFileMetadataByIdHeadersArg): Promise<Metadata>;
    createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScopeArg, templateKey: string, requestBody: CreateFileMetadataByIdRequestBodyArg, headers?: CreateFileMetadataByIdHeadersArg): Promise<Metadata>;
    deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScopeArg, templateKey: string, headers?: DeleteFileMetadataByIdHeadersArg): Promise<undefined>;
}
export declare function serializeGetFileMetadataByIdScopeArg(val: GetFileMetadataByIdScopeArg): Json;
export declare function deserializeGetFileMetadataByIdScopeArg(val: any): GetFileMetadataByIdScopeArg;
export declare function serializeCreateFileMetadataByIdScopeArg(val: CreateFileMetadataByIdScopeArg): Json;
export declare function deserializeCreateFileMetadataByIdScopeArg(val: any): CreateFileMetadataByIdScopeArg;
export declare function serializeCreateFileMetadataByIdRequestBodyArg(val: CreateFileMetadataByIdRequestBodyArg): Json;
export declare function deserializeCreateFileMetadataByIdRequestBodyArg(val: any): CreateFileMetadataByIdRequestBodyArg;
export declare function serializeDeleteFileMetadataByIdScopeArg(val: DeleteFileMetadataByIdScopeArg): Json;
export declare function deserializeDeleteFileMetadataByIdScopeArg(val: any): DeleteFileMetadataByIdScopeArg;
