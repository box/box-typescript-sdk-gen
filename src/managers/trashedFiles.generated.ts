import { TrashFile } from "../schemas.generated.js";
import { deserializeTrashFile } from "../schemas.generated.js";
import { serializeTrashFile } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type TrashedFilesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetFileTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedFilesManager {
    readonly auth!: TrashedFilesManagerAuthField;
    constructor(fields: Omit<TrashedFilesManager, "getFileTrash" | "deleteFileTrash">) {
        Object.assign(this, fields);
    }
    async getFileTrash(fileId: string, options: GetFileTrashOptionsArg = {} satisfies GetFileTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFile(deserializeJSON(response.text) as JSON);
    }
    async deleteFileTrash(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/trash") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
