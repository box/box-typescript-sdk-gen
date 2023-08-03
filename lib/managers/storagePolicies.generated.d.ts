import { StoragePolicies } from "../schemas.generated.js";
import { StoragePolicy } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetStoragePoliciesQueryParamsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetStoragePoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetStoragePoliciesHeadersArg);
}
export declare class GetStoragePolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetStoragePolicyByIdHeadersArg);
}
export declare class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePolicyById">);
    getStoragePolicies(queryParams?: GetStoragePoliciesQueryParamsArg, headers?: GetStoragePoliciesHeadersArg): Promise<StoragePolicies>;
    getStoragePolicyById(storagePolicyId: string, headers?: GetStoragePolicyByIdHeadersArg): Promise<StoragePolicy>;
}
