import { serializeUploadSession } from "../schemas.generated.js";
import { deserializeUploadSession } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeUploadedPart } from "../schemas.generated.js";
import { deserializeUploadedPart } from "../schemas.generated.js";
import { serializeUploadParts } from "../schemas.generated.js";
import { deserializeUploadParts } from "../schemas.generated.js";
import { serializeFiles } from "../schemas.generated.js";
import { deserializeFiles } from "../schemas.generated.js";
import { serializeUploadPart } from "../schemas.generated.js";
import { deserializeUploadPart } from "../schemas.generated.js";
import { UploadSession } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { UploadedPart } from "../schemas.generated.js";
import { UploadParts } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { UploadPart } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
import { isJson } from "../json.js";
import { Readable } from "stream";
export interface CreateFileUploadSessionRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export interface UploadFilePartHeadersArg {
    readonly digest: string;
    readonly contentRange: string;
}
export interface GetFileUploadSessionPartsQueryParamsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export interface CreateFileUploadSessionCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export interface CreateFileUploadSessionCommitHeadersArg {
    readonly digest: string;
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
export class ChunkedUploadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "uploadFilePart" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">) {
        Object.assign(this, fields);
    }
    async createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg): Promise<UploadSession> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions") as string, { method: "POST", body: serializeJson(serializeCreateFileUploadSessionRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJson(response.text));
    }
    async createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg): Promise<UploadSession> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/", fileId, "/upload_sessions") as string, { method: "POST", body: serializeJson(serializeCreateFileUploadSessionForExistingFileRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJson(response.text));
    }
    async getFileUploadSessionById(uploadSessionId: string): Promise<UploadSession> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJson(response.text));
    }
    async uploadFilePart(uploadSessionId: string, requestBody: Readable, headers: UploadFilePartHeadersArg): Promise<UploadedPart> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["digest"]: toString(headers.digest), ["content-range"]: toString(headers.contentRange) });
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "PUT", headers: headersMap, body: requestBody, contentType: "application/octet-stream", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadedPart(deserializeJson(response.text));
    }
    async deleteFileUploadSessionById(uploadSessionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFileUploadSessionParts(uploadSessionId: string, queryParams: GetFileUploadSessionPartsQueryParamsArg = {} satisfies GetFileUploadSessionPartsQueryParamsArg): Promise<UploadParts> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["offset"]: toString(queryParams.offset), ["limit"]: toString(queryParams.limit) });
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/parts") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadParts(deserializeJson(response.text));
    }
    async createFileUploadSessionCommit(uploadSessionId: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, headers: CreateFileUploadSessionCommitHeadersArg): Promise<Files> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["digest"]: toString(headers.digest), ["if-match"]: toString(headers.ifMatch), ["if-none-match"]: toString(headers.ifNoneMatch) });
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/commit") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateFileUploadSessionCommitRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFiles(deserializeJson(response.text));
    }
}
export function serializeCreateFileUploadSessionRequestBodyArg(val: CreateFileUploadSessionRequestBodyArg): Json {
    return { ["folder_id"]: val.folderId, ["file_size"]: val.fileSize, ["file_name"]: val.fileName };
}
export function deserializeCreateFileUploadSessionRequestBodyArg(val: any): CreateFileUploadSessionRequestBodyArg {
    const folderId: string = val.folder_id;
    const fileSize: number = val.file_size;
    const fileName: string = val.file_name;
    return { folderId: folderId, fileSize: fileSize, fileName: fileName } satisfies CreateFileUploadSessionRequestBodyArg;
}
export function serializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: CreateFileUploadSessionForExistingFileRequestBodyArg): Json {
    return { ["file_size"]: val.fileSize, ["file_name"]: val.fileName };
}
export function deserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: any): CreateFileUploadSessionForExistingFileRequestBodyArg {
    const fileSize: number = val.file_size;
    const fileName: undefined | string = isJson(val.file_name, "string") ? val.file_name : void 0;
    return { fileSize: fileSize, fileName: fileName } satisfies CreateFileUploadSessionForExistingFileRequestBodyArg;
}
export function serializeUploadFilePartHeadersArg(val: UploadFilePartHeadersArg): Json {
    return { ["digest"]: val.digest, ["content-range"]: val.contentRange };
}
export function deserializeUploadFilePartHeadersArg(val: any): UploadFilePartHeadersArg {
    const digest: string = val.digest;
    const contentRange: string = val["content-range"];
    return { digest: digest, contentRange: contentRange } satisfies UploadFilePartHeadersArg;
}
export function serializeGetFileUploadSessionPartsQueryParamsArg(val: GetFileUploadSessionPartsQueryParamsArg): Json {
    return { ["offset"]: val.offset, ["limit"]: val.limit };
}
export function deserializeGetFileUploadSessionPartsQueryParamsArg(val: any): GetFileUploadSessionPartsQueryParamsArg {
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { offset: offset, limit: limit } satisfies GetFileUploadSessionPartsQueryParamsArg;
}
export function serializeCreateFileUploadSessionCommitRequestBodyArg(val: CreateFileUploadSessionCommitRequestBodyArg): Json {
    return { ["parts"]: val.parts.map(function (item: UploadPart): any {
            return serializeUploadPart(item);
        }) as readonly any[] };
}
export function deserializeCreateFileUploadSessionCommitRequestBodyArg(val: any): CreateFileUploadSessionCommitRequestBodyArg {
    const parts: readonly UploadPart[] = val.parts.map(function (itm: Json): any {
        return deserializeUploadPart(itm);
    }) as readonly any[];
    return { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg;
}
export function serializeCreateFileUploadSessionCommitHeadersArg(val: CreateFileUploadSessionCommitHeadersArg): Json {
    return { ["digest"]: val.digest, ["if-match"]: val.ifMatch, ["if-none-match"]: val.ifNoneMatch };
}
export function deserializeCreateFileUploadSessionCommitHeadersArg(val: any): CreateFileUploadSessionCommitHeadersArg {
    const digest: string = val.digest;
    const ifMatch: undefined | string = isJson(val["if-match"], "string") ? val["if-match"] : void 0;
    const ifNoneMatch: undefined | string = isJson(val["if-none-match"], "string") ? val["if-none-match"] : void 0;
    return { digest: digest, ifMatch: ifMatch, ifNoneMatch: ifNoneMatch } satisfies CreateFileUploadSessionCommitHeadersArg;
}
