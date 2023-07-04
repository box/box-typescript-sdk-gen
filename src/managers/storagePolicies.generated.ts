import { newSerializeStoragePolicies } from "../schemas.generated.js";
import { newDeserializeStoragePolicies } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeStoragePolicy } from "../schemas.generated.js";
import { newDeserializeStoragePolicy } from "../schemas.generated.js";
import { StoragePolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { StoragePolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetStoragePoliciesQueryParamsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePolicyById">) {
        Object.assign(this, fields);
    }
    async getStoragePolicies(queryParams: undefined | GetStoragePoliciesQueryParamsArg = {} satisfies GetStoragePoliciesQueryParamsArg): Promise<StoragePolicies> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policies") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeStoragePolicies(deserializeJson(response.text));
    }
    async getStoragePolicyById(storagePolicyId: string): Promise<StoragePolicy> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policies/", storagePolicyId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeStoragePolicy(deserializeJson(response.text));
    }
}
export function newSerializeGetStoragePoliciesQueryParamsArg(val: GetStoragePoliciesQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetStoragePoliciesQueryParamsArg(val: any): GetStoragePoliciesQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, marker: marker, limit: limit } satisfies GetStoragePoliciesQueryParamsArg;
}
