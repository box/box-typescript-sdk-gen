/// <reference types="node" />
import { UploadSession } from "../schemas.generated.js";
import { UploadedPart } from "../schemas.generated.js";
import { UploadParts } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { UploadPart } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { ByteStream } from "../utils.js";
import { Json } from "../json.js";
export interface CreateFileUploadSessionRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export declare class CreateFileUploadSessionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFileUploadSessionHeadersArg);
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export declare class CreateFileUploadSessionForExistingFileHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFileUploadSessionForExistingFileHeadersArg);
}
export declare class GetFileUploadSessionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileUploadSessionByIdHeadersArg);
}
export declare class UploadFilePartHeadersArg {
    readonly digest: string;
    readonly contentRange: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UploadFilePartHeadersArg);
}
export declare class DeleteFileUploadSessionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteFileUploadSessionByIdHeadersArg);
}
export interface GetFileUploadSessionPartsQueryParamsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export declare class GetFileUploadSessionPartsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileUploadSessionPartsHeadersArg);
}
export interface CreateFileUploadSessionCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export declare class CreateFileUploadSessionCommitHeadersArg {
    readonly digest: string;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateFileUploadSessionCommitHeadersArg);
}
export declare class ChunkedUploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "uploadFilePart" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">);
    createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg, headers?: CreateFileUploadSessionHeadersArg): Promise<UploadSession>;
    createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg, headers?: CreateFileUploadSessionForExistingFileHeadersArg): Promise<UploadSession>;
    getFileUploadSessionById(uploadSessionId: string, headers?: GetFileUploadSessionByIdHeadersArg): Promise<UploadSession>;
    uploadFilePart(uploadSessionId: string, requestBody: ByteStream, headers: UploadFilePartHeadersArg): Promise<UploadedPart>;
    deleteFileUploadSessionById(uploadSessionId: string, headers?: DeleteFileUploadSessionByIdHeadersArg): Promise<undefined>;
    getFileUploadSessionParts(uploadSessionId: string, queryParams?: GetFileUploadSessionPartsQueryParamsArg, headers?: GetFileUploadSessionPartsHeadersArg): Promise<UploadParts>;
    createFileUploadSessionCommit(uploadSessionId: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, headers: CreateFileUploadSessionCommitHeadersArg): Promise<Files>;
}
export declare function serializeCreateFileUploadSessionRequestBodyArg(val: CreateFileUploadSessionRequestBodyArg): Json;
export declare function deserializeCreateFileUploadSessionRequestBodyArg(val: any): CreateFileUploadSessionRequestBodyArg;
export declare function serializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: CreateFileUploadSessionForExistingFileRequestBodyArg): Json;
export declare function deserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: any): CreateFileUploadSessionForExistingFileRequestBodyArg;
export declare function serializeCreateFileUploadSessionCommitRequestBodyArg(val: CreateFileUploadSessionCommitRequestBodyArg): Json;
export declare function deserializeCreateFileUploadSessionCommitRequestBodyArg(val: any): CreateFileUploadSessionCommitRequestBodyArg;
