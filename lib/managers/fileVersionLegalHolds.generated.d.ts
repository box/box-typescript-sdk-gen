import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type FileVersionLegalHoldsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetFileVersionLegalHoldsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class FileVersionLegalHoldsManager {
    readonly auth: FileVersionLegalHoldsManagerAuthField;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldsId" | "getFileVersionLegalHolds">);
    getFileVersionLegalHoldsId(fileVersionLegalHoldId: string): Promise<any>;
    getFileVersionLegalHolds(policyId: string, options?: GetFileVersionLegalHoldsOptionsArg): Promise<any>;
}
