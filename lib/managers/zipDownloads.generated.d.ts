/// <reference types="node" />
import { ZipDownload } from "../schemas.generated.js";
import { ZipDownloadRequest } from "../schemas.generated.js";
import { ZipDownloadStatus } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { ByteStream } from "../utils.js";
export declare class CreateZipDownloadHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateZipDownloadHeadersArg);
}
export declare class GetZipDownloadContentHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetZipDownloadContentHeadersArg);
}
export declare class GetZipDownloadStatusHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetZipDownloadStatusHeadersArg);
}
export declare class ZipDownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ZipDownloadsManager, "createZipDownload" | "getZipDownloadContent" | "getZipDownloadStatus">);
    createZipDownload(requestBody: ZipDownloadRequest, headers?: CreateZipDownloadHeadersArg): Promise<ZipDownload>;
    getZipDownloadContent(zipDownloadId: string, headers?: GetZipDownloadContentHeadersArg): Promise<ByteStream>;
    getZipDownloadStatus(zipDownloadId: string, headers?: GetZipDownloadStatusHeadersArg): Promise<ZipDownloadStatus>;
}
