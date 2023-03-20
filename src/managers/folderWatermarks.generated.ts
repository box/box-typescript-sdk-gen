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
export type FolderWatermarksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type PutFoldersIdWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface PutFoldersIdWatermarkRequestBodyArgWatermarkField {
    readonly imprint: PutFoldersIdWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface PutFoldersIdWatermarkRequestBodyArg {
    readonly watermark: PutFoldersIdWatermarkRequestBodyArgWatermarkField;
}
export class FolderWatermarksManager {
    readonly auth!: FolderWatermarksManagerAuthField;
    constructor(fields: Omit<FolderWatermarksManager, "getFoldersIdWatermark" | "putFoldersIdWatermark" | "deleteFoldersIdWatermark">) {
        Object.assign(this, fields);
    }
    async getFoldersIdWatermark(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWatermark(deserializeJSON(response.text) as JSON);
    }
    async putFoldersIdWatermark(folderId: string, requestBody: PutFoldersIdWatermarkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWatermark(deserializeJSON(response.text) as JSON);
    }
    async deleteFoldersIdWatermark(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
