import { newSerializeFileVersionLegalHold } from "../schemas.generated.js";
import { newDeserializeFileVersionLegalHold } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeFileVersionLegalHolds } from "../schemas.generated.js";
import { newDeserializeFileVersionLegalHolds } from "../schemas.generated.js";
import { FileVersionLegalHold } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        return newDeserializeFileVersionLegalHold(deserializeJson(response.text));
    }
    async getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParamsArg): Promise<FileVersionLegalHolds> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_version_legal_holds") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileVersionLegalHolds(deserializeJson(response.text));
    }
}
export function newSerializeGetFileVersionLegalHoldsQueryParamsArg(val: GetFileVersionLegalHoldsQueryParamsArg): Json {
    return { ["policyId"]: val.policyId, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetFileVersionLegalHoldsQueryParamsArg(val: any): GetFileVersionLegalHoldsQueryParamsArg {
    const policyId: string = val.policyId;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { policyId: policyId, marker: marker, limit: limit } satisfies GetFileVersionLegalHoldsQueryParamsArg;
}
