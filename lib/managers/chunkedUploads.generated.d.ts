import { UploadPart } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateFileUploadSessionRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export interface GetFileUploadSessionPartsOptionsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export interface CreateFileUploadSessionCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export interface CreateFileUploadSessionCommitOptionsArg {
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
export declare class ChunkedUploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">);
    createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg): Promise<any>;
    createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg): Promise<any>;
    getFileUploadSessionById(uploadSessionId: string): Promise<any>;
    deleteFileUploadSessionById(uploadSessionId: string): Promise<any>;
    getFileUploadSessionParts(uploadSessionId: string, options?: GetFileUploadSessionPartsOptionsArg): Promise<any>;
    createFileUploadSessionCommit(uploadSessionId: string, digest: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, options?: CreateFileUploadSessionCommitOptionsArg): Promise<any>;
}
