import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetFileVersionLegalHoldsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">);
    getFileVersionLegalHoldById(fileVersionLegalHoldId: string): Promise<any>;
    getFileVersionLegalHolds(policyId: string, options?: GetFileVersionLegalHoldsOptionsArg): Promise<any>;
}
