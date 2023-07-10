import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { isJson } from "../json.js";
import { Json } from "../json.js";
export interface DownloadFileQueryParamsArg {
    readonly version?: string;
    readonly accessToken?: string;
}
export interface DownloadFileHeadersArg {
    readonly range?: string;
    readonly boxapi?: string;
}
export class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DownloadsManager, "downloadFile">) {
        Object.assign(this, fields);
    }
    async downloadFile(fileId: string, queryParams: undefined | DownloadFileQueryParamsArg = {} satisfies DownloadFileQueryParamsArg, headers: undefined | DownloadFileHeadersArg = {} satisfies DownloadFileHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/content") as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeDownloadFileQueryParamsArg(val: DownloadFileQueryParamsArg): Json {
    return { ["version"]: val.version, ["accessToken"]: val.accessToken };
}
export function deserializeDownloadFileQueryParamsArg(val: any): DownloadFileQueryParamsArg {
    const version: undefined | string = isJson(val.version, "string") ? val.version : void 0;
    const accessToken: undefined | string = isJson(val.accessToken, "string") ? val.accessToken : void 0;
    return { version: version, accessToken: accessToken } satisfies DownloadFileQueryParamsArg;
}
export function serializeDownloadFileHeadersArg(val: DownloadFileHeadersArg): Json {
    return { ["range"]: val.range, ["boxapi"]: val.boxapi };
}
export function deserializeDownloadFileHeadersArg(val: any): DownloadFileHeadersArg {
    const range: undefined | string = isJson(val.range, "string") ? val.range : void 0;
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { range: range, boxapi: boxapi } satisfies DownloadFileHeadersArg;
}
