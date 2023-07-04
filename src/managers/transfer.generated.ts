import { newSerializeFolderFull } from "../schemas.generated.js";
import { newDeserializeFolderFull } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
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
export class TransferManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TransferManager, "transferOwnedFolder">) {
        Object.assign(this, fields);
    }
    async transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, queryParams: undefined | TransferOwnedFolderQueryParamsArg = {} satisfies TransferOwnedFolderQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/folders/0") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
}
export function newSerializeTransferOwnedFolderRequestBodyArgOwnedByField(val: TransferOwnedFolderRequestBodyArgOwnedByField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeTransferOwnedFolderRequestBodyArgOwnedByField(val: any): TransferOwnedFolderRequestBodyArgOwnedByField {
    const id: string = val.id;
    return { id: id } satisfies TransferOwnedFolderRequestBodyArgOwnedByField;
}
export function newSerializeTransferOwnedFolderRequestBodyArg(val: TransferOwnedFolderRequestBodyArg): Json {
    return { ["ownedBy"]: newSerializeTransferOwnedFolderRequestBodyArgOwnedByField(val.ownedBy) };
}
export function newDeserializeTransferOwnedFolderRequestBodyArg(val: any): TransferOwnedFolderRequestBodyArg {
    const ownedBy: TransferOwnedFolderRequestBodyArgOwnedByField = newDeserializeTransferOwnedFolderRequestBodyArgOwnedByField(val.ownedBy);
    return { ownedBy: ownedBy } satisfies TransferOwnedFolderRequestBodyArg;
}
export function newSerializeTransferOwnedFolderQueryParamsArg(val: TransferOwnedFolderQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["notify"]: val.notify };
}
export function newDeserializeTransferOwnedFolderQueryParamsArg(val: any): TransferOwnedFolderQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const notify: undefined | boolean = isJson(val.notify, "boolean") ? val.notify : void 0;
    return { fields: fields, notify: notify } satisfies TransferOwnedFolderQueryParamsArg;
}
