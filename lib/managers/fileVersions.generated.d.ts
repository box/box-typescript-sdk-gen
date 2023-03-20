import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FileVersionsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdVersionsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFilesIdVersionsIdOptionsArg {
    readonly fields?: string;
}
export interface PutFilesIdVersionsIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFilesIdVersionsIdOptionsArg {
    readonly ifMatch?: string;
}
export type PostFilesIdVersionsCurrentRequestBodyArgTypeField = "file_version";
export interface PostFilesIdVersionsCurrentRequestBodyArg {
    readonly id?: string;
    readonly type?: PostFilesIdVersionsCurrentRequestBodyArgTypeField;
}
export interface PostFilesIdVersionsCurrentOptionsArg {
    readonly fields?: string;
}
export declare class FileVersionsManager {
    readonly auth: FileVersionsManagerAuthField;
    constructor(fields: Omit<FileVersionsManager, "getFilesIdVersions" | "getFilesIdVersionsId" | "putFilesIdVersionsId" | "deleteFilesIdVersionsId" | "postFilesIdVersionsCurrent">);
    getFilesIdVersions(fileId: string, options?: GetFilesIdVersionsOptionsArg): Promise<any>;
    getFilesIdVersionsId(fileId: string, fileVersionId: string, options?: GetFilesIdVersionsIdOptionsArg): Promise<any>;
    putFilesIdVersionsId(fileId: string, fileVersionId: string, requestBody: PutFilesIdVersionsIdRequestBodyArg): Promise<any>;
    deleteFilesIdVersionsId(fileId: string, fileVersionId: string, options?: DeleteFilesIdVersionsIdOptionsArg): Promise<any>;
    postFilesIdVersionsCurrent(fileId: string, requestBody: PostFilesIdVersionsCurrentRequestBodyArg, options?: PostFilesIdVersionsCurrentOptionsArg): Promise<any>;
}
