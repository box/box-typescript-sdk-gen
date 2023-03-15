import { UploadPart } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type ChunkedUploadsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface PostFilesUploadSessionsRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface PostFilesIdUploadSessionsRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export interface GetFilesUploadSessionsIdPartsOptionsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export interface PostFilesUploadSessionsIdCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export interface PostFilesUploadSessionsIdCommitOptionsArg {
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
export declare class ChunkedUploadsManager {
    readonly auth: ChunkedUploadsManagerAuthField;
    constructor(fields: Omit<ChunkedUploadsManager, "postFilesUploadSessions" | "postFilesIdUploadSessions" | "getFilesUploadSessionsId" | "deleteFilesUploadSessionsId" | "getFilesUploadSessionsIdParts" | "postFilesUploadSessionsIdCommit">);
    postFilesUploadSessions(requestBody: PostFilesUploadSessionsRequestBodyArg): Promise<any>;
    postFilesIdUploadSessions(fileId: string, requestBody: PostFilesIdUploadSessionsRequestBodyArg): Promise<any>;
    getFilesUploadSessionsId(uploadSessionId: string): Promise<any>;
    deleteFilesUploadSessionsId(uploadSessionId: string): Promise<any>;
    getFilesUploadSessionsIdParts(uploadSessionId: string, options?: GetFilesUploadSessionsIdPartsOptionsArg): Promise<any>;
    postFilesUploadSessionsIdCommit(uploadSessionId: string, digest: string, requestBody: PostFilesUploadSessionsIdCommitRequestBodyArg, options?: PostFilesUploadSessionsIdCommitOptionsArg): Promise<any>;
}
