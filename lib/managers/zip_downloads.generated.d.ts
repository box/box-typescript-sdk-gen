import { ZipDownloadRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type ZipDownloadsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export declare class ZipDownloadsManager {
    readonly auth: ZipDownloadsManagerAuthField;
    constructor(fields: Omit<ZipDownloadsManager, "postZipDownloads" | "getZipDownloadsIdContent" | "getZipDownloadsIdStatus">);
    postZipDownloads(requestBody: ZipDownloadRequest): Promise<any>;
    getZipDownloadsIdContent(zipDownloadId: string): Promise<any>;
    getZipDownloadsIdStatus(zipDownloadId: string): Promise<any>;
}
