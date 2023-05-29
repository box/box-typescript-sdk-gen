import { ZipDownloadRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class ZipDownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ZipDownloadsManager, "createZipDownload" | "getZipDownloadContent" | "getZipDownloadStatus">);
    createZipDownload(requestBody: ZipDownloadRequest): Promise<any>;
    getZipDownloadContent(zipDownloadId: string): Promise<any>;
    getZipDownloadStatus(zipDownloadId: string): Promise<any>;
}
