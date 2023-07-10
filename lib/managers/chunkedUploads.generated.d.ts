import { UploadSession } from "../schemas.generated.js";
import { UploadParts } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { UploadPart } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateFileUploadSessionRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export interface GetFileUploadSessionPartsQueryParamsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export interface CreateFileUploadSessionCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export interface CreateFileUploadSessionCommitHeadersArg {
    readonly digest: string;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
export declare class ChunkedUploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">);
    createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg): Promise<UploadSession>;
    createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg): Promise<UploadSession>;
    getFileUploadSessionById(uploadSessionId: string): Promise<UploadSession>;
    deleteFileUploadSessionById(uploadSessionId: string): Promise<any>;
    getFileUploadSessionParts(uploadSessionId: string, queryParams?: undefined | GetFileUploadSessionPartsQueryParamsArg): Promise<UploadParts>;
    createFileUploadSessionCommit(uploadSessionId: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, headers: CreateFileUploadSessionCommitHeadersArg): Promise<Files>;
}
export declare function serializeCreateFileUploadSessionRequestBodyArg(val: CreateFileUploadSessionRequestBodyArg): Json;
export declare function deserializeCreateFileUploadSessionRequestBodyArg(val: any): CreateFileUploadSessionRequestBodyArg;
export declare function serializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: CreateFileUploadSessionForExistingFileRequestBodyArg): Json;
export declare function deserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: any): CreateFileUploadSessionForExistingFileRequestBodyArg;
export declare function serializeGetFileUploadSessionPartsQueryParamsArg(val: GetFileUploadSessionPartsQueryParamsArg): Json;
export declare function deserializeGetFileUploadSessionPartsQueryParamsArg(val: any): GetFileUploadSessionPartsQueryParamsArg;
export declare function serializeCreateFileUploadSessionCommitRequestBodyArg(val: CreateFileUploadSessionCommitRequestBodyArg): Json;
export declare function deserializeCreateFileUploadSessionCommitRequestBodyArg(val: any): CreateFileUploadSessionCommitRequestBodyArg;
export declare function serializeCreateFileUploadSessionCommitHeadersArg(val: CreateFileUploadSessionCommitHeadersArg): Json;
export declare function deserializeCreateFileUploadSessionCommitHeadersArg(val: any): CreateFileUploadSessionCommitHeadersArg;
