import { TrashFileRestored } from "../schemas.generated.js";
import { deserializeTrashFileRestored } from "../schemas.generated.js";
import { serializeTrashFileRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashFile } from "../schemas.generated.js";
import { deserializeTrashFile } from "../schemas.generated.js";
import { serializeTrashFile } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TrashedFilesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface RestoreFileFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFileFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyArgParentField;
}
export interface RestoreFileFromTrashOptionsArg {
    readonly fields?: string;
}
export interface GetFileTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedFilesManager {
    readonly auth!: TrashedFilesManagerAuthField;
    constructor(fields: Omit<TrashedFilesManager, "restoreFileFromTrash" | "getFileTrash" | "deleteFileTrash">) {
        Object.assign(this, fields);
    }
    async restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, options: RestoreFileFromTrashOptionsArg = {} satisfies RestoreFileFromTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFileRestored(deserializeJson(response.text));
    }
    async getFileTrash(fileId: string, options: GetFileTrashOptionsArg = {} satisfies GetFileTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFile(deserializeJson(response.text));
    }
    async deleteFileTrash(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/trash") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
