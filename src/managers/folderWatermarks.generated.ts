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
export type FolderWatermarksManagerAuthField = DeveloperTokenAuth | CcgAuth;
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
        return await deserializeWatermark(await deserializeJson(response.text));
    }
    async putFoldersIdWatermark(folderId: string, requestBody: PutFoldersIdWatermarkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeWatermark(await deserializeJson(response.text));
    }
    async deleteFoldersIdWatermark(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
