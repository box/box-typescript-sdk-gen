import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type FilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export interface PostFilesIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostFilesIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostFilesIdRequestBodyArgParentField;
}
export interface PostFilesIdOptionsArg {
    readonly fields?: string;
}
export declare class FilesManager {
    readonly auth: FilesManagerAuthField;
    constructor(fields: Omit<FilesManager, "getFilesId" | "postFilesId">);
    getFilesId(fileId: string, xRepHints: string, options?: GetFilesIdOptionsArg): Promise<any>;
    postFilesId(fileId: string, requestBody: PostFilesIdRequestBodyArg, options?: PostFilesIdOptionsArg): Promise<any>;
}
