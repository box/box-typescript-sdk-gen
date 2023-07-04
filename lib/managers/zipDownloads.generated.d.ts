import { ZipDownload } from "../schemas.generated.js";
import { ZipDownloadRequest } from "../schemas.generated.js";
import { ZipDownloadStatus } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class ZipDownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ZipDownloadsManager, "createZipDownload" | "getZipDownloadContent" | "getZipDownloadStatus">);
    createZipDownload(requestBody: ZipDownloadRequest): Promise<ZipDownload>;
    getZipDownloadContent(zipDownloadId: string): Promise<any>;
    getZipDownloadStatus(zipDownloadId: string): Promise<ZipDownloadStatus>;
}
