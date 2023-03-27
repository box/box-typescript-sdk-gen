import { FileVersions } from "../schemas.generated.js";
import { deserializeFileVersions } from "../schemas.generated.js";
import { serializeFileVersions } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileVersion } from "../schemas.generated.js";
import { deserializeFileVersion } from "../schemas.generated.js";
import { serializeFileVersion } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type FileVersionsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdVersionsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
}
export interface GetFilesIdVersionsIdOptionsArg {
    readonly fields?: string;
}
export interface PutFilesIdVersionsIdRequestBodyArg {
    readonly trashedAt?: string;
}
export interface DeleteFilesIdVersionsIdOptionsArg {
    readonly ifMatch?: string;
}
export type PostFilesIdVersionsCurrentRequestBodyArgTypeField = "file_version";
export interface PostFilesIdVersionsCurrentRequestBodyArg {
    readonly id?: string;
    readonly type?: PostFilesIdVersionsCurrentRequestBodyArgTypeField;
}
export interface PostFilesIdVersionsCurrentOptionsArg {
    readonly fields?: string;
}
export class FileVersionsManager {
    readonly auth!: FileVersionsManagerAuthField;
    constructor(fields: Omit<FileVersionsManager, "getFilesIdVersions" | "getFilesIdVersionsId" | "putFilesIdVersionsId" | "deleteFilesIdVersionsId" | "postFilesIdVersionsCurrent">) {
        Object.assign(this, fields);
    }
    async getFilesIdVersions(fileId: string, options: GetFilesIdVersionsOptionsArg = {} satisfies GetFilesIdVersionsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersions(deserializeJSON(response.text) as JSON);
    }
    async getFilesIdVersionsId(fileId: string, fileVersionId: string, options: GetFilesIdVersionsIdOptionsArg = {} satisfies GetFilesIdVersionsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersion(deserializeJSON(response.text) as JSON);
    }
    async putFilesIdVersionsId(fileId: string, fileVersionId: string, requestBody: PutFilesIdVersionsIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersion(deserializeJSON(response.text) as JSON);
    }
    async deleteFilesIdVersionsId(fileId: string, fileVersionId: string, options: DeleteFilesIdVersionsIdOptionsArg = {} satisfies DeleteFilesIdVersionsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/", fileVersionId) as string, { method: "DELETE", headers: { ["if-match"]: options.ifMatch }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async postFilesIdVersionsCurrent(fileId: string, requestBody: PostFilesIdVersionsCurrentRequestBodyArg, options: PostFilesIdVersionsCurrentOptionsArg = {} satisfies PostFilesIdVersionsCurrentOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/versions/current") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersion(deserializeJSON(response.text) as JSON);
    }
}
