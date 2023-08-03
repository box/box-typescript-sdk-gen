import { FileVersionLegalHold } from "../schemas.generated.js";
import { FileVersionLegalHolds } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class GetFileVersionLegalHoldByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileVersionLegalHoldByIdHeadersArg);
}
export interface GetFileVersionLegalHoldsQueryParamsArg {
    readonly policyId: string;
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetFileVersionLegalHoldsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetFileVersionLegalHoldsHeadersArg);
}
export declare class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, "getFileVersionLegalHoldById" | "getFileVersionLegalHolds">);
    getFileVersionLegalHoldById(fileVersionLegalHoldId: string, headers?: GetFileVersionLegalHoldByIdHeadersArg): Promise<FileVersionLegalHold>;
    getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParamsArg, headers?: GetFileVersionLegalHoldsHeadersArg): Promise<FileVersionLegalHolds>;
}
