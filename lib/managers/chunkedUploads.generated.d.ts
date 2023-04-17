import { UploadPart } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ChunkedUploadsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
    readonly auth: ChunkedUploadsManagerAuthField;
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">);
    createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg): Promise<any>;
    createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg): Promise<any>;
    getFileUploadSessionById(uploadSessionId: string): Promise<any>;
    deleteFileUploadSessionById(uploadSessionId: string): Promise<any>;
    getFileUploadSessionParts(uploadSessionId: string, options?: GetFileUploadSessionPartsOptionsArg): Promise<any>;
    createFileUploadSessionCommit(uploadSessionId: string, digest: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, options?: CreateFileUploadSessionCommitOptionsArg): Promise<any>;
}
