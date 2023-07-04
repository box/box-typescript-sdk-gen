import { newSerializeWatermark } from "../schemas.generated.js";
import { newDeserializeWatermark } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { Watermark } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
    async getFileWatermark(fileId: string): Promise<Watermark> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWatermark(deserializeJson(response.text));
    }
    async updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg): Promise<Watermark> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeWatermark(deserializeJson(response.text));
    }
    async deleteFileWatermark(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField): Json {
    return val;
}
export function newDeserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField\"";
    }
    if (val == "default") {
        return "default";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: UpdateFileWatermarkRequestBodyArgWatermarkField): Json {
    return { ["imprint"]: newSerializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint) };
}
export function newDeserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkField {
    const imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = newDeserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint);
    return { imprint: imprint } satisfies UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export function newSerializeUpdateFileWatermarkRequestBodyArg(val: UpdateFileWatermarkRequestBodyArg): Json {
    return { ["watermark"]: newSerializeUpdateFileWatermarkRequestBodyArgWatermarkField(val.watermark) };
}
export function newDeserializeUpdateFileWatermarkRequestBodyArg(val: any): UpdateFileWatermarkRequestBodyArg {
    const watermark: UpdateFileWatermarkRequestBodyArgWatermarkField = newDeserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val.watermark);
    return { watermark: watermark } satisfies UpdateFileWatermarkRequestBodyArg;
}
