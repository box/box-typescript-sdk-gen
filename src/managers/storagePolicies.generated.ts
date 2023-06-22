import { StoragePolicies } from "../schemas.generated.js";
import { deserializeStoragePolicies } from "../schemas.generated.js";
import { serializeStoragePolicies } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { StoragePolicy } from "../schemas.generated.js";
import { deserializeStoragePolicy } from "../schemas.generated.js";
import { serializeStoragePolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetStoragePoliciesOptionsArg {
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
    async getStoragePolicies(options: GetStoragePoliciesOptionsArg = {} satisfies GetStoragePoliciesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policies") as string, { method: "GET", params: { ["fields"]: options.fields, ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicies(deserializeJson(response.text));
    }
    async getStoragePolicyById(storagePolicyId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/storage_policies/", storagePolicyId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeStoragePolicy(deserializeJson(response.text));
    }
}
