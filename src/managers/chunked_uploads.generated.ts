import { UploadSession } from "../schemas.generated.js";
import { deserializeUploadSession } from "../schemas.generated.js";
import { serializeUploadSession } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { UploadedPart } from "../schemas.generated.js";
import { deserializeUploadedPart } from "../schemas.generated.js";
import { serializeUploadedPart } from "../schemas.generated.js";
import { UploadParts } from "../schemas.generated.js";
import { deserializeUploadParts } from "../schemas.generated.js";
import { serializeUploadParts } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { deserializeFiles } from "../schemas.generated.js";
import { serializeFiles } from "../schemas.generated.js";
import { UploadPart } from "../schemas.generated.js";
import { deserializeUploadPart } from "../schemas.generated.js";
import { serializeUploadPart } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type ChunkedUploadsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostFilesUploadSessionsRequestBodyArg {
    readonly folderId: string;
    readonly fileSize: number;
    readonly fileName: string;
}
export interface PostFilesIdUploadSessionsRequestBodyArg {
    readonly fileSize: number;
    readonly fileName?: string;
}
export interface GetFilesUploadSessionsIdPartsOptionsArg {
    readonly offset?: number;
    readonly limit?: number;
}
export interface PostFilesUploadSessionsIdCommitRequestBodyArg {
    readonly parts: readonly UploadPart[];
}
export interface PostFilesUploadSessionsIdCommitOptionsArg {
    readonly ifMatch?: string;
    readonly ifNoneMatch?: string;
}
export class ChunkedUploadsManager {
    readonly auth!: ChunkedUploadsManagerAuthField;
    constructor(fields: Omit<ChunkedUploadsManager, "postFilesUploadSessions" | "postFilesIdUploadSessions" | "getFilesUploadSessionsId" | "deleteFilesUploadSessionsId" | "getFilesUploadSessionsIdParts" | "postFilesUploadSessionsIdCommit">) {
        Object.assign(this, fields);
    }
    async postFilesUploadSessions(requestBody: PostFilesUploadSessionsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUploadSession(deserializeJSON(response.text) as JSON);
    }
    async postFilesIdUploadSessions(fileId: string, requestBody: PostFilesIdUploadSessionsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/upload_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUploadSession(deserializeJSON(response.text) as JSON);
    }
    async getFilesUploadSessionsId(uploadSessionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUploadSession(deserializeJSON(response.text) as JSON);
    }
    async deleteFilesUploadSessionsId(uploadSessionId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFilesUploadSessionsIdParts(uploadSessionId: string, options: GetFilesUploadSessionsIdPartsOptionsArg = {} satisfies GetFilesUploadSessionsIdPartsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId, "/parts") as string, { method: "GET", params: { ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUploadParts(deserializeJSON(response.text) as JSON);
    }
    async postFilesUploadSessionsIdCommit(uploadSessionId: string, digest: string, requestBody: PostFilesUploadSessionsIdCommitRequestBodyArg, options: PostFilesUploadSessionsIdCommitOptionsArg = {} satisfies PostFilesUploadSessionsIdCommitOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/upload_sessions/", uploadSessionId, "/commit") as string, { method: "POST", headers: { ["digest"]: digest, ["if-match"]: options.ifMatch, ["if-none-match"]: options.ifNoneMatch }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFiles(deserializeJSON(response.text) as JSON);
    }
}
