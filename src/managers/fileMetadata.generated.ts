import { Metadatas } from "../schemas.generated.js";
import { deserializeMetadatas } from "../schemas.generated.js";
import { serializeMetadatas } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Metadata } from "../schemas.generated.js";
import { deserializeMetadata } from "../schemas.generated.js";
import { serializeMetadata } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type GetFileMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFileMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFileMetadataByIdRequestBodyArg {
}
export type DeleteFileMetadataByIdScopeArg = "global" | "enterprise";
export class FileMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileMetadataManager, "getFileMetadata" | "getFileMetadataById" | "createFileMetadataById" | "deleteFileMetadataById">) {
        Object.assign(this, fields);
    }
    async getFileMetadata(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadatas(deserializeJson(response.text));
    }
    async getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScopeArg, templateKey: string, requestBody: CreateFileMetadataByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/", scope, "/", templateKey) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
