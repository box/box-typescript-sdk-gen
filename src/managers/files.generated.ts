import { File } from "../schemas.generated.js";
import { deserializeFile } from "../schemas.generated.js";
import { serializeFile } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashFileRestored } from "../schemas.generated.js";
import { deserializeTrashFileRestored } from "../schemas.generated.js";
import { serializeTrashFileRestored } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
export type FilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdOptionsArg {
    readonly fields?: string;
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export interface PostFilesIdRequestBodyArgParentField {
    readonly id?: string;
}
export interface PostFilesIdRequestBodyArg {
    readonly name?: string;
    readonly parent?: PostFilesIdRequestBodyArgParentField;
}
export interface PostFilesIdOptionsArg {
    readonly fields?: string;
}
export class FilesManager {
    readonly auth!: FilesManagerAuthField;
    constructor(fields: Omit<FilesManager, "getFilesId" | "postFilesId">) {
        Object.assign(this, fields);
    }
    async getFilesId(fileId: string, xRepHints: string, options: GetFilesIdOptionsArg = {} satisfies GetFilesIdOptionsArg): Promise<File> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "GET", params: { ["fields"]: options.fields }, headers: { ["if-none-match"]: options.ifNoneMatch, ["boxapi"]: options.boxapi, ["x-rep-hints"]: xRepHints }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return JSON.parse(response.text) as File;
    }
    async postFilesId(fileId: string, requestBody: PostFilesIdRequestBodyArg, options: PostFilesIdOptionsArg = {} satisfies PostFilesIdOptionsArg): Promise<TrashFileRestored> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return JSON.parse(response.text) as TrashFileRestored;
    }
}
