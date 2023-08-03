import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
export interface DownloadFileQueryParamsArg {
    readonly version?: string;
    readonly accessToken?: string;
}
export class DownloadFileHeadersArg {
    readonly range?: string;
    readonly boxapi?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DownloadFileHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<DownloadsManager, "downloadFile">) {
        Object.assign(this, fields);
    }
    async downloadFile(fileId: string, queryParams: DownloadFileQueryParamsArg = {} satisfies DownloadFileQueryParamsArg, headers: DownloadFileHeadersArg = new DownloadFileHeadersArg({})): Promise<ByteStream> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["version"]: toString(queryParams.version), ["access_token"]: toString(queryParams.accessToken) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{ ["range"]: toString(headers.range), ["boxapi"]: toString(headers.boxapi) }, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/content") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "binary", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
