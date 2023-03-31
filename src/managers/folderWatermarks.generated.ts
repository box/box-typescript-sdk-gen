import { Watermark } from "../schemas.generated.js";
import { deserializeWatermark } from "../schemas.generated.js";
import { serializeWatermark } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type FolderWatermarksManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFolderWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFolderWatermarkRequestBodyArg {
    readonly watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export class FolderWatermarksManager {
    readonly auth!: FolderWatermarksManagerAuthField;
    constructor(fields: Omit<FolderWatermarksManager, "getFolderWatermark" | "updateFolderWatermark" | "deleteFolderWatermark">) {
        Object.assign(this, fields);
    }
    async getFolderWatermark(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJSON(response.text) as JSON);
    }
    async updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJSON(response.text) as JSON);
    }
    async deleteFolderWatermark(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
