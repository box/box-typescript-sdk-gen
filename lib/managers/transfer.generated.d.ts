import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type TransferManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface PutUsersIdFolders0RequestBodyArgOwnedByField {
    readonly id: string;
}
export interface PutUsersIdFolders0RequestBodyArg {
    readonly ownedBy: PutUsersIdFolders0RequestBodyArgOwnedByField;
}
export interface PutUsersIdFolders0OptionsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export declare class TransferManager {
    readonly auth: TransferManagerAuthField;
    constructor(fields: Omit<TransferManager, "putUsersIdFolders0">);
    putUsersIdFolders0(userId: string, requestBody: PutUsersIdFolders0RequestBodyArg, options?: PutUsersIdFolders0OptionsArg): Promise<any>;
}
