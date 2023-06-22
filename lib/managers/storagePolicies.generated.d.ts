import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetStoragePoliciesOptionsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class StoragePoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePolicyById">);
    getStoragePolicies(options?: GetStoragePoliciesOptionsArg): Promise<any>;
    getStoragePolicyById(storagePolicyId: string): Promise<any>;
}
