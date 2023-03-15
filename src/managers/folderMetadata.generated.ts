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
export type FolderMetadataManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetFoldersIdMetadataIdIdScopeArg = "global" | "enterprise";
export type PostFoldersIdMetadataIdIdScopeArg = "global" | "enterprise";
export interface PostFoldersIdMetadataIdIdRequestBodyArg {
}
export type DeleteFoldersIdMetadataIdIdScopeArg = "global" | "enterprise";
export class FolderMetadataManager {
    readonly auth!: FolderMetadataManagerAuthField;
    constructor(fields: Omit<FolderMetadataManager, "getFoldersIdMetadata" | "getFoldersIdMetadataIdId" | "postFoldersIdMetadataIdId" | "deleteFoldersIdMetadataIdId">) {
        Object.assign(this, fields);
    }
    async getFoldersIdMetadata(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadatas(await deserializeJson(response.text));
    }
    async getFoldersIdMetadataIdId(folderId: string, scope: GetFoldersIdMetadataIdIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadata(await deserializeJson(response.text));
    }
    async postFoldersIdMetadataIdId(folderId: string, scope: PostFoldersIdMetadataIdIdScopeArg, templateKey: string, requestBody: PostFoldersIdMetadataIdIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeMetadata(await deserializeJson(response.text));
    }
    async deleteFoldersIdMetadataIdId(folderId: string, scope: DeleteFoldersIdMetadataIdIdScopeArg, templateKey: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/", scope, "/", templateKey) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
