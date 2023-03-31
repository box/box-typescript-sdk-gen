import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type FileVersionsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFileVersionsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFileVersionByIdOptionsArg {
    readonly fields?: string;
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFileVersionByIdOptionsArg {
    readonly ifMatch?: string;
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionOptionsArg {
    readonly fields?: string;
}
export declare class FileVersionsManager {
    readonly auth: FileVersionsManagerAuthField;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">);
    getFileVersions(fileId: string, options?: GetFileVersionsOptionsArg): Promise<any>;
    getFileVersionById(fileId: string, fileVersionId: string, options?: GetFileVersionByIdOptionsArg): Promise<any>;
    updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg): Promise<any>;
    deleteFileVersionById(fileId: string, fileVersionId: string, options?: DeleteFileVersionByIdOptionsArg): Promise<any>;
    promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, options?: PromoteFileVersionOptionsArg): Promise<any>;
}
