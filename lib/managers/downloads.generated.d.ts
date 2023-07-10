import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface DownloadFileQueryParamsArg {
    readonly version?: string;
    readonly accessToken?: string;
}
export interface DownloadFileHeadersArg {
    readonly range?: string;
    readonly boxapi?: string;
}
export declare class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DownloadsManager, "downloadFile">);
    downloadFile(fileId: string, queryParams?: undefined | DownloadFileQueryParamsArg, headers?: undefined | DownloadFileHeadersArg): Promise<any>;
}
export declare function serializeDownloadFileQueryParamsArg(val: DownloadFileQueryParamsArg): Json;
export declare function deserializeDownloadFileQueryParamsArg(val: any): DownloadFileQueryParamsArg;
export declare function serializeDownloadFileHeadersArg(val: DownloadFileHeadersArg): Json;
export declare function deserializeDownloadFileHeadersArg(val: any): DownloadFileHeadersArg;
