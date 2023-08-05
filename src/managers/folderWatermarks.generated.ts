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
export class GetFolderWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFolderWatermarkHeadersArg) {
        Object.assign(this, fields);
    }
}
export type UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = "default";
export interface UpdateFolderWatermarkRequestBodyArgWatermarkField {
    readonly imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField;
}
export interface UpdateFolderWatermarkRequestBodyArg {
    readonly watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export class UpdateFolderWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFolderWatermarkHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFolderWatermarkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFolderWatermarkHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FolderWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderWatermarksManager, "getFolderWatermark" | "updateFolderWatermark" | "deleteFolderWatermark">) {
        Object.assign(this, fields);
    }
    async getFolderWatermark(folderId: string, headers: GetFolderWatermarkHeadersArg = new GetFolderWatermarkHeadersArg({})): Promise<Watermark> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJson(response.text));
    }
    async updateFolderWatermark(folderId: string, requestBody: UpdateFolderWatermarkRequestBodyArg, headers: UpdateFolderWatermarkHeadersArg = new UpdateFolderWatermarkHeadersArg({})): Promise<Watermark> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateFolderWatermarkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeWatermark(deserializeJson(response.text));
    }
    async deleteFolderWatermark(folderId: string, headers: DeleteFolderWatermarkHeadersArg = new DeleteFolderWatermarkHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/watermark") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField): Json {
    return val;
}
export function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val: any): UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField\"";
    }
    if (val == "default") {
        return "default";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val: UpdateFolderWatermarkRequestBodyArgWatermarkField): Json {
    return { ["imprint"]: serializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint) };
}
export function deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val: any): UpdateFolderWatermarkRequestBodyArgWatermarkField {
    const imprint: UpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField = deserializeUpdateFolderWatermarkRequestBodyArgWatermarkFieldImprintField(val.imprint);
    return { imprint: imprint } satisfies UpdateFolderWatermarkRequestBodyArgWatermarkField;
}
export function serializeUpdateFolderWatermarkRequestBodyArg(val: UpdateFolderWatermarkRequestBodyArg): Json {
    return { ["watermark"]: serializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark) };
}
export function deserializeUpdateFolderWatermarkRequestBodyArg(val: any): UpdateFolderWatermarkRequestBodyArg {
    const watermark: UpdateFolderWatermarkRequestBodyArgWatermarkField = deserializeUpdateFolderWatermarkRequestBodyArgWatermarkField(val.watermark);
    return { watermark: watermark } satisfies UpdateFolderWatermarkRequestBodyArg;
}
