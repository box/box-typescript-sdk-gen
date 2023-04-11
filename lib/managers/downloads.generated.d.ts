import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type DownloadsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface DownloadFileOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export declare class DownloadsManager {
    readonly auth: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "downloadFile">);
    downloadFile(fileId: string, options?: DownloadFileOptionsArg): Promise<any>;
}
