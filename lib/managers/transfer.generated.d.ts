import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TransferManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface TransferOwnedFolderRequestBodyArgOwnedByField {
    readonly id: string;
}
export interface TransferOwnedFolderRequestBodyArg {
    readonly ownedBy: TransferOwnedFolderRequestBodyArgOwnedByField;
}
export interface TransferOwnedFolderOptionsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export declare class TransferManager {
    readonly auth: TransferManagerAuthField;
    constructor(fields: Omit<TransferManager, "transferOwnedFolder">);
    transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, options?: TransferOwnedFolderOptionsArg): Promise<any>;
}
