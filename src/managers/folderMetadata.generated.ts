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
export type GetFolderMetadataByIdScopeArg = "global" | "enterprise";
export type CreateFolderMetadataByIdScopeArg = "global" | "enterprise";
export interface CreateFolderMetadataByIdRequestBodyArg {
}
export type DeleteFolderMetadataByIdScopeArg = "global" | "enterprise";
export class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, "getFolderMetadata" | "getFolderMetadataById" | "createFolderMetadataById" | "deleteFolderMetadataById">) {
        Object.assign(this, fields);
    }
    async getFolderMetadata(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadatas(deserializeJson(response.text));
    }
    async getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScopeArg, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeMetadata(deserializeJson(response.text));
    }
    async deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
