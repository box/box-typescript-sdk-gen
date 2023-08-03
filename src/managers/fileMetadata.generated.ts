import { serializeMetadatas } from "../schemas.generated.js";
import { deserializeMetadatas } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeMetadata } from "../schemas.generated.js";
import { deserializeMetadata } from "../schemas.generated.js";
import { Metadatas } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
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
export class GetFileMetadataHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileMetadataHeadersArg) {
        Object.assign(this, fields);
    }
}
export type GetFileMetadataByIdScopeArg = "global" | "enterprise";
export class GetFileMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileMetadataByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type CreateFileMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFileMetadataByIdRequestBodyArg {
}
export class CreateFileMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateFileMetadataByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type DeleteFileMetadataByIdScopeArg = "global" | "enterprise";
export class DeleteFileMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFileMetadataByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FileMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileMetadataManager, "getFileMetadata" | "getFileMetadataById" | "createFileMetadataById" | "deleteFileMetadataById">) {
        Object.assign(this, fields);
    }
    async getFileMetadata(fileId: string, headers: GetFileMetadataHeadersArg = new GetFileMetadataHeadersArg({})): Promise<Metadatas> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadatas(deserializeJson(response.text));
    }
    async getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScopeArg, templateKey: string, headers: GetFileMetadataByIdHeadersArg = new GetFileMetadataByIdHeadersArg({})): Promise<Metadata> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScopeArg, templateKey: string, requestBody: CreateFileMetadataByIdRequestBodyArg, headers: CreateFileMetadataByIdHeadersArg = new CreateFileMetadataByIdHeadersArg({})): Promise<Metadata> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateFileMetadataByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScopeArg, templateKey: string, headers: DeleteFileMetadataByIdHeadersArg = new DeleteFileMetadataByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeGetFileMetadataByIdScopeArg(val: GetFileMetadataByIdScopeArg): Json {
    return val;
}
export function deserializeGetFileMetadataByIdScopeArg(val: any): GetFileMetadataByIdScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFileMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateFileMetadataByIdScopeArg(val: CreateFileMetadataByIdScopeArg): Json {
    return val;
}
export function deserializeCreateFileMetadataByIdScopeArg(val: any): CreateFileMetadataByIdScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateFileMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateFileMetadataByIdRequestBodyArg(val: CreateFileMetadataByIdRequestBodyArg): Json {
    return {};
}
export function deserializeCreateFileMetadataByIdRequestBodyArg(val: any): CreateFileMetadataByIdRequestBodyArg {
    return {} satisfies CreateFileMetadataByIdRequestBodyArg;
}
export function serializeDeleteFileMetadataByIdScopeArg(val: DeleteFileMetadataByIdScopeArg): Json {
    return val;
}
export function deserializeDeleteFileMetadataByIdScopeArg(val: any): DeleteFileMetadataByIdScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DeleteFileMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
