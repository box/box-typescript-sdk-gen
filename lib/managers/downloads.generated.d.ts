/// <reference types="node" />
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { ByteStream } from "../utils.js";
export interface DownloadFileQueryParamsArg {
    readonly version?: string;
    readonly accessToken?: string;
}
export declare class DownloadFileHeadersArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DownloadFileHeadersArg);
}
export declare class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DownloadsManager, "downloadFile">);
    downloadFile(fileId: string, queryParams?: DownloadFileQueryParamsArg, headers?: DownloadFileHeadersArg): Promise<ByteStream>;
}
