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
export declare class DownloadsManager {
    readonly auth: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "downloadFile">);
    downloadFile(fileId: string, options?: DownloadFileOptionsArg): Promise<any>;
}
