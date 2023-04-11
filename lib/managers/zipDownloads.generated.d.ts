import { ZipDownloadRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type ZipDownloadsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export declare class ZipDownloadsManager {
    readonly auth: ZipDownloadsManagerAuthField;
    constructor(fields: Omit<ZipDownloadsManager, "createZipDownload" | "getZipDownloadContent" | "getZipDownloadStatus">);
    createZipDownload(requestBody: ZipDownloadRequest): Promise<any>;
    getZipDownloadContent(zipDownloadId: string): Promise<any>;
    getZipDownloadStatus(zipDownloadId: string): Promise<any>;
}
