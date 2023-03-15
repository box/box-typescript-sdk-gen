import { Watermark } from "../schemas.generated.js";
import { deserializeWatermark } from "../schemas.generated.js";
import { serializeWatermark } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type FileWatermarksManagerAuthField = DeveloperTokenAuth | CcgAuth;
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
        return await deserializeWatermark(await deserializeJson(response.text));
    }
    async putFilesIdWatermark(fileId: string, requestBody: PutFilesIdWatermarkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWatermark(await deserializeJson(response.text));
    }
    async deleteFilesIdWatermark(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
