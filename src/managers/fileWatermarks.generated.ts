import { Watermark } from "../schemas.generated.js";
import { deserializeWatermark } from "../schemas.generated.js";
import { serializeWatermark } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFileWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFileWatermarkRequestBodyArg {
    readonly watermark: UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export class FileWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileWatermarksManager, "getFileWatermark" | "updateFileWatermark" | "deleteFileWatermark">) {
        Object.assign(this, fields);
    }
    async getFileWatermark(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJson(response.text));
    }
    async updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJson(response.text));
    }
    async deleteFileWatermark(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
