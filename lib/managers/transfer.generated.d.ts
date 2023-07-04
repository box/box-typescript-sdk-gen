import { FolderFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface TransferOwnedFolderRequestBodyArgOwnedByField {
    readonly id: string;
}
export interface TransferOwnedFolderRequestBodyArg {
    readonly ownedBy: TransferOwnedFolderRequestBodyArgOwnedByField;
}
export interface TransferOwnedFolderQueryParamsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export declare class TransferManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TransferManager, "transferOwnedFolder">);
    transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, queryParams?: undefined | TransferOwnedFolderQueryParamsArg): Promise<FolderFull>;
}
export declare function newSerializeTransferOwnedFolderRequestBodyArgOwnedByField(val: TransferOwnedFolderRequestBodyArgOwnedByField): Json;
export declare function newDeserializeTransferOwnedFolderRequestBodyArgOwnedByField(val: any): TransferOwnedFolderRequestBodyArgOwnedByField;
export declare function newSerializeTransferOwnedFolderRequestBodyArg(val: TransferOwnedFolderRequestBodyArg): Json;
export declare function newDeserializeTransferOwnedFolderRequestBodyArg(val: any): TransferOwnedFolderRequestBodyArg;
export declare function newSerializeTransferOwnedFolderQueryParamsArg(val: TransferOwnedFolderQueryParamsArg): Json;
export declare function newDeserializeTransferOwnedFolderQueryParamsArg(val: any): TransferOwnedFolderQueryParamsArg;
