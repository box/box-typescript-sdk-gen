import { StoragePolicies } from "../schemas.generated.js";
import { StoragePolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetStoragePoliciesQueryParamsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePolicyById">);
    getStoragePolicies(queryParams?: GetStoragePoliciesQueryParamsArg): Promise<StoragePolicies>;
    getStoragePolicyById(storagePolicyId: string): Promise<StoragePolicy>;
}
export declare function serializeGetStoragePoliciesQueryParamsArg(val: GetStoragePoliciesQueryParamsArg): Json;
export declare function deserializeGetStoragePoliciesQueryParamsArg(val: any): GetStoragePoliciesQueryParamsArg;
