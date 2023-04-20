import { ZipDownloadRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type ZipDownloadsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export declare class ZipDownloadsManager {
    readonly auth: ZipDownloadsManagerAuthField;
    constructor(fields: Omit<ZipDownloadsManager, "createZipDownload" | "getZipDownloadContent" | "getZipDownloadStatus">);
    createZipDownload(requestBody: ZipDownloadRequest): Promise<any>;
    getZipDownloadContent(zipDownloadId: string): Promise<any>;
    getZipDownloadStatus(zipDownloadId: string): Promise<any>;
}
