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
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface CreateFileUploadSessionRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
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
    constructor(fields: Omit<ChunkedUploadsManager, "createFileUploadSession" | "createFileUploadSessionForExistingFile" | "getFileUploadSessionById" | "deleteFileUploadSessionById" | "getFileUploadSessionParts" | "createFileUploadSessionCommit">) {
        Object.assign(this, fields);
    }
    async createFileUploadSession(requestBody: CreateFileUploadSessionRequestBodyArg): Promise<UploadSession> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJson(response.text));
    }
    async createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg): Promise<UploadSession> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/", fileId, "/upload_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJson(response.text));
    }
    async getFileUploadSessionById(uploadSessionId: string): Promise<UploadSession> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadSession(deserializeJson(response.text));
    }
    async deleteFileUploadSessionById(uploadSessionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFileUploadSessionParts(uploadSessionId: string, queryParams: undefined | GetFileUploadSessionPartsQueryParamsArg = {} satisfies GetFileUploadSessionPartsQueryParamsArg): Promise<UploadParts> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/parts") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUploadParts(deserializeJson(response.text));
    }
    async createFileUploadSessionCommit(uploadSessionId: string, requestBody: CreateFileUploadSessionCommitRequestBodyArg, headers: CreateFileUploadSessionCommitHeadersArg): Promise<Files> {
        const response: FetchResponse = await fetch("".concat("https://upload.box.com/api/2.0/files/upload_sessions/", uploadSessionId, "/commit") as string, { method: "POST", headers: toMap(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFiles(deserializeJson(response.text));
    }
}
export function serializeCreateFileUploadSessionRequestBodyArg(val: CreateFileUploadSessionRequestBodyArg): Json {
    return { ["folderId"]: val.folderId, ["fileSize"]: val.fileSize, ["fileName"]: val.fileName };
}
export function deserializeCreateFileUploadSessionRequestBodyArg(val: any): CreateFileUploadSessionRequestBodyArg {
    const folderId: string = val.folderId;
    const fileSize: number = val.fileSize;
    const fileName: string = val.fileName;
    return { folderId: folderId, fileSize: fileSize, fileName: fileName } satisfies CreateFileUploadSessionRequestBodyArg;
}
export function serializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: CreateFileUploadSessionForExistingFileRequestBodyArg): Json {
    return { ["fileSize"]: val.fileSize, ["fileName"]: val.fileName };
}
export function deserializeCreateFileUploadSessionForExistingFileRequestBodyArg(val: any): CreateFileUploadSessionForExistingFileRequestBodyArg {
    const fileSize: number = val.fileSize;
    const fileName: undefined | string = isJson(val.fileName, "string") ? val.fileName : void 0;
    return { fileSize: fileSize, fileName: fileName } satisfies CreateFileUploadSessionForExistingFileRequestBodyArg;
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
    return { ["digest"]: val.digest, ["ifMatch"]: val.ifMatch, ["ifNoneMatch"]: val.ifNoneMatch };
}
export function deserializeCreateFileUploadSessionCommitHeadersArg(val: any): CreateFileUploadSessionCommitHeadersArg {
    const digest: string = val.digest;
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    return { digest: digest, ifMatch: ifMatch, ifNoneMatch: ifNoneMatch } satisfies CreateFileUploadSessionCommitHeadersArg;
}
