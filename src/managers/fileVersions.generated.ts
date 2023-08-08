import { serializeFileVersions } from "../schemas.generated.js";
import { deserializeFileVersions } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeFileVersionFull } from "../schemas.generated.js";
import { deserializeFileVersionFull } from "../schemas.generated.js";
import { FileVersions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionFull } from "../schemas.generated.js";
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
export interface GetFileVersionsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export class GetFileVersionsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileVersionsHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetFileVersionByIdQueryParamsArg {
    readonly fields?: string;
}
export class GetFileVersionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileVersionByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export class UpdateFileVersionByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFileVersionByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFileVersionByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFileVersionByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionQueryParamsArg {
    readonly fields?: string;
}
export class PromoteFileVersionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: PromoteFileVersionHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">) {
        Object.assign(this, fields);
    }
    async getFileVersions(fileId: string, queryParams: GetFileVersionsQueryParamsArg = {} satisfies GetFileVersionsQueryParamsArg, headers: GetFileVersionsHeadersArg = new GetFileVersionsHeadersArg({})): Promise<FileVersions> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersions(deserializeJson(response.text));
    }
    async getFileVersionById(fileId: string, fileVersionId: string, queryParams: GetFileVersionByIdQueryParamsArg = {} satisfies GetFileVersionByIdQueryParamsArg, headers: GetFileVersionByIdHeadersArg = new GetFileVersionByIdHeadersArg({})): Promise<FileVersionFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
    async updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg = {} satisfies UpdateFileVersionByIdRequestBodyArg, headers: UpdateFileVersionByIdHeadersArg = new UpdateFileVersionByIdHeadersArg({})): Promise<FileVersionFull> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateFileVersionByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
    async deleteFileVersionById(fileId: string, fileVersionId: string, headers: DeleteFileVersionByIdHeadersArg = new DeleteFileVersionByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{ ["if-match"]: toString(headers.ifMatch) }, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg = {} satisfies PromoteFileVersionRequestBodyArg, queryParams: PromoteFileVersionQueryParamsArg = {} satisfies PromoteFileVersionQueryParamsArg, headers: PromoteFileVersionHeadersArg = new PromoteFileVersionHeadersArg({})): Promise<FileVersionFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current") as string, { method: "POST", params: queryParamsMap, headers: headersMap, body: serializeJson(serializePromoteFileVersionRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
}
export function serializeUpdateFileVersionByIdRequestBodyArg(val: UpdateFileVersionByIdRequestBodyArg): Json {
    return { ["trashed_at"]: val.trashedAt };
}
export function deserializeUpdateFileVersionByIdRequestBodyArg(val: any): UpdateFileVersionByIdRequestBodyArg {
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    return { trashedAt: trashedAt } satisfies UpdateFileVersionByIdRequestBodyArg;
}
export function serializePromoteFileVersionRequestBodyArgTypeField(val: PromoteFileVersionRequestBodyArgTypeField): Json {
    return val;
}
export function deserializePromoteFileVersionRequestBodyArgTypeField(val: any): PromoteFileVersionRequestBodyArgTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PromoteFileVersionRequestBodyArgTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializePromoteFileVersionRequestBodyArg(val: PromoteFileVersionRequestBodyArg): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializePromoteFileVersionRequestBodyArgTypeField(val.type) };
}
export function deserializePromoteFileVersionRequestBodyArg(val: any): PromoteFileVersionRequestBodyArg {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | PromoteFileVersionRequestBodyArgTypeField = val.type == void 0 ? void 0 : deserializePromoteFileVersionRequestBodyArgTypeField(val.type);
    return { id: id, type: type } satisfies PromoteFileVersionRequestBodyArg;
}
