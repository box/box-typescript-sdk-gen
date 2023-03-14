import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type DownloadsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdContentOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export declare class DownloadsManager {
    readonly auth: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "getFilesIdContent">);
    getFilesIdContent(fileId: string, options?: GetFilesIdContentOptionsArg): Promise<any>;
}
