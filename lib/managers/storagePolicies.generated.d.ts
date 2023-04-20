import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type StoragePoliciesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetStoragePoliciesOptionsArg {
    readonly fields?: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class StoragePoliciesManager {
    readonly auth: StoragePoliciesManagerAuthField;
    constructor(fields: Omit<StoragePoliciesManager, "getStoragePolicies" | "getStoragePolicyById">);
    getStoragePolicies(options?: GetStoragePoliciesOptionsArg): Promise<any>;
    getStoragePolicyById(storagePolicyId: string): Promise<any>;
}
