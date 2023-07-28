import { serializeZipDownload } from "../schemas.generated.js";
import { deserializeZipDownload } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeZipDownloadRequest } from "../schemas.generated.js";
import { deserializeZipDownloadRequest } from "../schemas.generated.js";
import { serializeZipDownloadStatus } from "../schemas.generated.js";
import { deserializeZipDownloadStatus } from "../schemas.generated.js";
import { ZipDownload } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { ZipDownloadRequest } from "../schemas.generated.js";
import { ZipDownloadStatus } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
export class ZipDownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ZipDownloadsManager, "createZipDownload" | "getZipDownloadContent" | "getZipDownloadStatus">) {
        Object.assign(this, fields);
    }
    async createZipDownload(requestBody: ZipDownloadRequest): Promise<ZipDownload> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/zip_downloads") as string, { method: "POST", body: serializeJson(serializeZipDownloadRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeZipDownload(deserializeJson(response.text));
    }
    async getZipDownloadContent(zipDownloadId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://dl.boxcloud.com/2.0/zip_downloads/", zipDownloadId, "/content") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getZipDownloadStatus(zipDownloadId: string): Promise<ZipDownloadStatus> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/zip_downloads/", zipDownloadId, "/status") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeZipDownloadStatus(deserializeJson(response.text));
    }
}
