import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type TransferManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
