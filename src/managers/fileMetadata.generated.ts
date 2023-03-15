import { Metadatas } from "../schemas.generated.js";
import { deserializeMetadatas } from "../schemas.generated.js";
import { serializeMetadatas } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
import { deserializeMetadata } from "../schemas.generated.js";
import { serializeMetadata } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type FileMetadataManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetFilesIdMetadataIdIdScopeArg = "global" | "enterprise";
export type PostFilesIdMetadataIdIdScopeArg = "global" | "enterprise";
export interface PostFilesIdMetadataIdIdRequestBodyArg {
}
export type DeleteFilesIdMetadataIdIdScopeArg = "global" | "enterprise";
export class FileMetadataManager {
    readonly auth!: FileMetadataManagerAuthField;
    constructor(fields: Omit<FileMetadataManager, "getFilesIdMetadata" | "getFilesIdMetadataIdId" | "postFilesIdMetadataIdId" | "deleteFilesIdMetadataIdId">) {
        Object.assign(this, fields);
    }
    async getFilesIdMetadata(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadatas(await deserializeJson(response.text));
    }
    async getFilesIdMetadataIdId(fileId: string, scope: GetFilesIdMetadataIdIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadata(await deserializeJson(response.text));
    }
    async postFilesIdMetadataIdId(fileId: string, scope: PostFilesIdMetadataIdIdScopeArg, templateKey: string, requestBody: PostFilesIdMetadataIdIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadata(await deserializeJson(response.text));
    }
    async deleteFilesIdMetadataIdId(fileId: string, scope: DeleteFilesIdMetadataIdIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
