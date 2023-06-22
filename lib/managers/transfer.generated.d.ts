import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TransferManager, "transferOwnedFolder">);
    transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, options?: TransferOwnedFolderOptionsArg): Promise<any>;
}
