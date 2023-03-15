import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type StoragePoliciesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetStoragePoliciesOptionsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class StoragePoliciesManager {
    readonly auth: StoragePoliciesManagerAuthField;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePoliciesId">);
    getStoragePolicies(options?: GetStoragePoliciesOptionsArg): Promise<any>;
    getStoragePoliciesId(storagePolicyId: string): Promise<any>;
}
