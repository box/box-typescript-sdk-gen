import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
export type DownloadsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface DownloadFileOptionsArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly version?: string;
    readonly accessToken?: string;
}
export class DownloadsManager {
    readonly auth!: DownloadsManagerAuthField;
    constructor(fields: Omit<DownloadsManager, "downloadFile">) {
        Object.assign(this, fields);
    }
    async downloadFile(fileId: string, options: DownloadFileOptionsArg = {} satisfies DownloadFileOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/content") as string, { method: "GET", params: { ["version"]: options.version, ["access_token"]: options.accessToken }, headers: { ["range"]: options.range, ["boxapi"]: options.boxapi }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
