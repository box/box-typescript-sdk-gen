import { serializeFileVersionLegalHold } from "../schemas.generated.js";
import { deserializeFileVersionLegalHold } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeFileVersionLegalHolds } from "../schemas.generated.js";
import { deserializeFileVersionLegalHolds } from "../schemas.generated.js";
import { FileVersionLegalHold } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export class GetFileVersionLegalHoldByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileVersionLegalHoldByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetFileVersionLegalHoldsQueryParamsArg {
    readonly policyId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class GetFileVersionLegalHoldsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileVersionLegalHoldsHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">) {
        Object.assign(this, fields);
    }
    async getFileVersionLegalHoldById(fileVersionLegalHoldId: string, headers: GetFileVersionLegalHoldByIdHeadersArg = new GetFileVersionLegalHoldByIdHeadersArg({})): Promise<FileVersionLegalHold> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHold(deserializeJson(response.text));
    }
    async getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParamsArg, headers: GetFileVersionLegalHoldsHeadersArg = new GetFileVersionLegalHoldsHeadersArg({})): Promise<FileVersionLegalHolds> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["policy_id"]: toString(queryParams.policyId), ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
}
