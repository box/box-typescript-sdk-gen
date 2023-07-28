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
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetFileVersionLegalHoldsQueryParamsArg {
    readonly policyId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">) {
        Object.assign(this, fields);
    }
    async getFileVersionLegalHoldById(fileVersionLegalHoldId: string): Promise<FileVersionLegalHold> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds/", fileVersionLegalHoldId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHold(deserializeJson(response.text));
    }
    async getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParamsArg): Promise<FileVersionLegalHolds> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["policy_id"]: toString(queryParams.policyId), ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
}
export function serializeGetFileVersionLegalHoldsQueryParamsArg(val: GetFileVersionLegalHoldsQueryParamsArg): Json {
    return { ["policy_id"]: val.policyId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetFileVersionLegalHoldsQueryParamsArg(val: any): GetFileVersionLegalHoldsQueryParamsArg {
    const policyId: string = val.policy_id;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { policyId: policyId, marker: marker, limit: limit } satisfies GetFileVersionLegalHoldsQueryParamsArg;
}
