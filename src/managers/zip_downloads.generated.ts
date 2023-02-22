import { ZipDownload } from "../schemas.generated.js";
import { deserializeZipDownload } from "../schemas.generated.js";
import { serializeZipDownload } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { ZipDownloadRequest } from "../schemas.generated.js";
import { deserializeZipDownloadRequest } from "../schemas.generated.js";
import { serializeZipDownloadRequest } from "../schemas.generated.js";
import { ZipDownloadStatus } from "../schemas.generated.js";
import { deserializeZipDownloadStatus } from "../schemas.generated.js";
import { serializeZipDownloadStatus } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { serializeJSON, JSON } from "../json.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type ZipDownloadsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export class ZipDownloadsManager {
    readonly auth!: ZipDownloadsManagerAuthField;
    constructor(fields: Omit<ZipDownloadsManager, "postZipDownloads" | "getZipDownloadsIdContent" | "getZipDownloadsIdStatus">) {
        Object.assign(this, fields);
    }
    async postZipDownloads(requestBody: ZipDownloadRequest): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/zip_downloads") as string, { method: "POST", body: await serializeZipDownloadRequest(serializeJSON(requestBody) as string), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeZipDownload(deserializeJSON(response.text) as JSON);
    }
    async getZipDownloadsIdContent(zipDownloadId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/content") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getZipDownloadsIdStatus(zipDownloadId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/status") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeZipDownloadStatus(deserializeJSON(response.text) as JSON);
    }
}
