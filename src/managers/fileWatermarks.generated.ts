import { Watermark } from "../schemas.generated.js";
import { deserializeWatermark } from "../schemas.generated.js";
import { serializeWatermark } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type FileWatermarksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type PutFilesIdWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface PutFilesIdWatermarkRequestBodyArgWatermarkField {
    readonly imprint: PutFilesIdWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface PutFilesIdWatermarkRequestBodyArg {
    readonly watermark: PutFilesIdWatermarkRequestBodyArgWatermarkField;
}
export class FileWatermarksManager {
    readonly auth!: FileWatermarksManagerAuthField;
    constructor(fields: Omit<FileWatermarksManager, "getFilesIdWatermark" | "putFilesIdWatermark" | "deleteFilesIdWatermark">) {
        Object.assign(this, fields);
    }
    async getFilesIdWatermark(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWatermark(deserializeJSON(response.text) as JSON);
    }
    async putFilesIdWatermark(fileId: string, requestBody: PutFilesIdWatermarkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWatermark(deserializeJSON(response.text) as JSON);
    }
    async deleteFilesIdWatermark(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
