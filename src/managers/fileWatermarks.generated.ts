import { serializeWatermark } from "../schemas.generated.js";
import { deserializeWatermark } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Watermark } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export class GetFileWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileWatermarkHeadersArg) {
        Object.assign(this, fields);
    }
}
export type UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFileWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFileWatermarkRequestBodyArg {
    readonly watermark: UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export class UpdateFileWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFileWatermarkHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFileWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFileWatermarkHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FileWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileWatermarksManager, "getFileWatermark" | "updateFileWatermark" | "deleteFileWatermark">) {
        Object.assign(this, fields);
    }
    async getFileWatermark(fileId: string, headers: GetFileWatermarkHeadersArg = new GetFileWatermarkHeadersArg({})): Promise<Watermark> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJson(response.text));
    }
    async updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBodyArg, headers: UpdateFileWatermarkHeadersArg = new UpdateFileWatermarkHeadersArg({})): Promise<Watermark> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateFileWatermarkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJson(response.text));
    }
    async deleteFileWatermark(fileId: string, headers: DeleteFileWatermarkHeadersArg = new DeleteFileWatermarkHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/watermark") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField): Json {
    return val;
}
export function deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField\"";
    }
    if (val == "default") {
        return "default";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: UpdateFileWatermarkRequestBodyArgWatermarkField): Json {
    return { ["imprint"]: serializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint) };
}
export function deserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val: any): UpdateFileWatermarkRequestBodyArgWatermarkField {
    const imprint: UpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField = deserializeUpdateFileWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint);
    return { imprint: imprint } satisfies UpdateFileWatermarkRequestBodyArgWatermarkField;
}
export function serializeUpdateFileWatermarkRequestBodyArg(val: UpdateFileWatermarkRequestBodyArg): Json {
    return { ["watermark"]: serializeUpdateFileWatermarkRequestBodyArgWatermarkField(val.watermark) };
}
export function deserializeUpdateFileWatermarkRequestBodyArg(val: any): UpdateFileWatermarkRequestBodyArg {
    const watermark: UpdateFileWatermarkRequestBodyArgWatermarkField = deserializeUpdateFileWatermarkRequestBodyArgWatermarkField(val.watermark);
    return { watermark: watermark } satisfies UpdateFileWatermarkRequestBodyArg;
}
