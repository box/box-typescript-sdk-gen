import { FileVersionLegalHold } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetFileVersionLegalHoldsQueryParamsArg {
    readonly policyId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">);
    getFileVersionLegalHoldById(fileVersionLegalHoldId: string): Promise<FileVersionLegalHold>;
    getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParamsArg): Promise<FileVersionLegalHolds>;
}
export declare function serializeGetFileVersionLegalHoldsQueryParamsArg(val: GetFileVersionLegalHoldsQueryParamsArg): Json;
export declare function deserializeGetFileVersionLegalHoldsQueryParamsArg(val: any): GetFileVersionLegalHoldsQueryParamsArg;
