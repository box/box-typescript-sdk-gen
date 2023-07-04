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
export declare function newSerializeCreateFileUploadSessionRequestBodyArg(val: CreateFileUploadSessionRequestBodyArg): Json;
export declare function newDeserializeCreateFileUploadSessionRequestBodyArg(val: any): CreateFileUploadSessionRequestBodyArg;
export declare function newSerializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: CreateFileUploadSessionForExistingFileRequestBodyArg): Json;
export declare function newDeserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: any): CreateFileUploadSessionForExistingFileRequestBodyArg;
export declare function newSerializeGetFileUploadSessionPartsQueryParamsArg(val: GetFileUploadSessionPartsQueryParamsArg): Json;
export declare function newDeserializeGetFileUploadSessionPartsQueryParamsArg(val: any): GetFileUploadSessionPartsQueryParamsArg;
export declare function newSerializeCreateFileUploadSessionCommitRequestBodyArg(val: CreateFileUploadSessionCommitRequestBodyArg): Json;
export declare function newDeserializeCreateFileUploadSessionCommitRequestBodyArg(val: any): CreateFileUploadSessionCommitRequestBodyArg;
export declare function newSerializeCreateFileUploadSessionCommitHeadersArg(val: CreateFileUploadSessionCommitHeadersArg): Json;
export declare function newDeserializeCreateFileUploadSessionCommitHeadersArg(val: any): CreateFileUploadSessionCommitHeadersArg;
