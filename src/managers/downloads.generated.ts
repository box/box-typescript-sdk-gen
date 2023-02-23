import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Files } from "../schemas.generated.js";
import { deserializeFiles } from "../schemas.generated.js";
import { serializeFiles } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
export type DownloadsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFilesIdContentOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export class DownloadsManager {
    readonly auth!: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "getFilesIdContent">) {
        Object.assign(this, fields);
    }
    async getFilesIdContent(fileId: string, options: GetFilesIdContentOptionsArg = {} satisfies GetFilesIdContentOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/content") as string, { method: "GET", params: { ["version"]: options.version, ["access_token"]: options.accessToken }, headers: { ["range"]: options.range, ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
