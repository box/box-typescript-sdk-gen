import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type DownloadsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface DownloadFileOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export interface UploadFileVersionRequestBodyArgAttributesField {
    readonly name: string;
    readonly contentModifiedAt?: string;
}
export interface UploadFileVersionRequestBodyArg {
    readonly attributes: UploadFileVersionRequestBodyArgAttributesField;
    readonly file: string;
}
export interface UploadFileVersionOptionsArg {
    readonly ifMatch?: string;
    readonly fields?: string;
    readonly contentMd5?: string;
}
export declare class DownloadsManager {
    readonly auth: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "downloadFile" | "uploadFileVersion">);
    downloadFile(fileId: string, options?: DownloadFileOptionsArg): Promise<any>;
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBodyArg, options?: UploadFileVersionOptionsArg): Promise<any>;
}
