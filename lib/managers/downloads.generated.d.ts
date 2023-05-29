import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface DownloadFileOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export declare class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DownloadsManager, "downloadFile">);
    downloadFile(fileId: string, options?: DownloadFileOptionsArg): Promise<any>;
}
