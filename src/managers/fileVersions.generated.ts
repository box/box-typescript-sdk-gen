import { FileVersions } from "../schemas.generated.js";
import { deserializeFileVersions } from "../schemas.generated.js";
import { serializeFileVersions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileVersionFull } from "../schemas.generated.js";
import { deserializeFileVersionFull } from "../schemas.generated.js";
import { serializeFileVersionFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetFileVersionsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFileVersionByIdOptionsArg {
    readonly fields?: string;
}
export interface UpdateFileVersionByIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFileVersionByIdOptionsArg {
    readonly ifMatch?: string;
}
export type PromoteFileVersionRequestBodyArgTypeField = "file_version";
export interface PromoteFileVersionRequestBodyArg {
    readonly id?: string;
    readonly type?: PromoteFileVersionRequestBodyArgTypeField;
}
export interface PromoteFileVersionOptionsArg {
    readonly fields?: string;
}
export class FileVersionsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionsManager, "getFileVersions" | "getFileVersionById" | "updateFileVersionById" | "deleteFileVersionById" | "promoteFileVersion">) {
        Object.assign(this, fields);
    }
    async getFileVersions(fileId: string, options: GetFileVersionsOptionsArg = {} satisfies GetFileVersionsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersions(deserializeJson(response.text));
    }
    async getFileVersionById(fileId: string, fileVersionId: string, options: GetFileVersionByIdOptionsArg = {} satisfies GetFileVersionByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
    async updateFileVersionById(fileId: string, fileVersionId: string, requestBody: UpdateFileVersionByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
    async deleteFileVersionById(fileId: string, fileVersionId: string, options: DeleteFileVersionByIdOptionsArg = {} satisfies DeleteFileVersionByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "DELETE", headers: { ["if-match"]: options.ifMatch }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async promoteFileVersion(fileId: string, requestBody: PromoteFileVersionRequestBodyArg, options: PromoteFileVersionOptionsArg = {} satisfies PromoteFileVersionOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionFull(deserializeJson(response.text));
    }
}
