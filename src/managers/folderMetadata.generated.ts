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
export class GetFolderMetadataHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFolderMetadataHeadersArg) {
        Object.assign(this, fields);
    }
}
export type GetFolderMetadataByIdScopeArg = "global" | "enterprise";
export class GetFolderMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFolderMetadataByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type CreateFolderMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFolderMetadataByIdRequestBodyArg {
}
export class CreateFolderMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateFolderMetadataByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type DeleteFolderMetadataByIdScopeArg = "global" | "enterprise";
export class DeleteFolderMetadataByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFolderMetadataByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, "getFolderMetadata" | "getFolderMetadataById" | "createFolderMetadataById" | "deleteFolderMetadataById">) {
        Object.assign(this, fields);
    }
    async getFolderMetadata(folderId: string, headers: GetFolderMetadataHeadersArg = new GetFolderMetadataHeadersArg({})): Promise<Metadatas> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadatas(deserializeJson(response.text));
    }
    async getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScopeArg, templateKey: string, headers: GetFolderMetadataByIdHeadersArg = new GetFolderMetadataByIdHeadersArg({})): Promise<Metadata> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScopeArg, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBodyArg, headers: CreateFolderMetadataByIdHeadersArg = new CreateFolderMetadataByIdHeadersArg({})): Promise<Metadata> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateFolderMetadataByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScopeArg, templateKey: string, headers: DeleteFolderMetadataByIdHeadersArg = new DeleteFolderMetadataByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeGetFolderMetadataByIdScopeArg(val: GetFolderMetadataByIdScopeArg): Json {
    return val;
}
export function deserializeGetFolderMetadataByIdScopeArg(val: any): GetFolderMetadataByIdScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateFolderMetadataByIdScopeArg(val: CreateFolderMetadataByIdScopeArg): Json {
    return val;
}
export function deserializeCreateFolderMetadataByIdScopeArg(val: any): CreateFolderMetadataByIdScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateFolderMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateFolderMetadataByIdRequestBodyArg(val: CreateFolderMetadataByIdRequestBodyArg): Json {
    return {};
}
export function deserializeCreateFolderMetadataByIdRequestBodyArg(val: any): CreateFolderMetadataByIdRequestBodyArg {
    return {} satisfies CreateFolderMetadataByIdRequestBodyArg;
}
export function serializeDeleteFolderMetadataByIdScopeArg(val: DeleteFolderMetadataByIdScopeArg): Json {
    return val;
}
export function deserializeDeleteFolderMetadataByIdScopeArg(val: any): DeleteFolderMetadataByIdScopeArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DeleteFolderMetadataByIdScopeArg\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
