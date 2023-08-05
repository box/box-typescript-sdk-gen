import { serializeStoragePolicies } from "../schemas.generated.js";
import { deserializeStoragePolicies } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeStoragePolicy } from "../schemas.generated.js";
import { deserializeStoragePolicy } from "../schemas.generated.js";
import { StoragePolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { StoragePolicy } from "../schemas.generated.js";
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
export interface GetStoragePoliciesQueryParamsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class GetStoragePoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetStoragePoliciesHeadersArg) {
        Object.assign(this, fields);
    }
}
export class GetStoragePolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetStoragePolicyByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePolicyById">) {
        Object.assign(this, fields);
    }
    async getStoragePolicies(queryParams: GetStoragePoliciesQueryParamsArg = {} satisfies GetStoragePoliciesQueryParamsArg, headers: GetStoragePoliciesHeadersArg = new GetStoragePoliciesHeadersArg({})): Promise<StoragePolicies> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policies") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicies(deserializeJson(response.text));
    }
    async getStoragePolicyById(storagePolicyId: string, headers: GetStoragePolicyByIdHeadersArg = new GetStoragePolicyByIdHeadersArg({})): Promise<StoragePolicy> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policies/", storagePolicyId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicy(deserializeJson(response.text));
    }
}
