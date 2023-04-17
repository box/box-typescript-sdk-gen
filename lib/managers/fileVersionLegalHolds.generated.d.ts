import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type FileVersionLegalHoldsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetFileVersionLegalHoldsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class FileVersionLegalHoldsManager {
    readonly auth: FileVersionLegalHoldsManagerAuthField;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">);
    getFileVersionLegalHoldById(fileVersionLegalHoldId: string): Promise<any>;
    getFileVersionLegalHolds(policyId: string, options?: GetFileVersionLegalHoldsOptionsArg): Promise<any>;
}
