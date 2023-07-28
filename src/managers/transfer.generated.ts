import { serializeFolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
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
    async transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, queryParams: TransferOwnedFolderQueryParamsArg = {} satisfies TransferOwnedFolderQueryParamsArg): Promise<FolderFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["notify"]: toString(queryParams.notify) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/folders/0") as string, { method: "PUT", params: queryParamsMap, body: serializeJson(serializeTransferOwnedFolderRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
}
export function serializeTransferOwnedFolderRequestBodyArgOwnedByField(val: TransferOwnedFolderRequestBodyArgOwnedByField): Json {
    return { ["id"]: val.id };
}
export function deserializeTransferOwnedFolderRequestBodyArgOwnedByField(val: any): TransferOwnedFolderRequestBodyArgOwnedByField {
    const id: string = val.id;
    return { id: id } satisfies TransferOwnedFolderRequestBodyArgOwnedByField;
}
export function serializeTransferOwnedFolderRequestBodyArg(val: TransferOwnedFolderRequestBodyArg): Json {
    return { ["owned_by"]: serializeTransferOwnedFolderRequestBodyArgOwnedByField(val.ownedBy) };
}
export function deserializeTransferOwnedFolderRequestBodyArg(val: any): TransferOwnedFolderRequestBodyArg {
    const ownedBy: TransferOwnedFolderRequestBodyArgOwnedByField = deserializeTransferOwnedFolderRequestBodyArgOwnedByField(val.owned_by);
    return { ownedBy: ownedBy } satisfies TransferOwnedFolderRequestBodyArg;
}
export function serializeTransferOwnedFolderQueryParamsArg(val: TransferOwnedFolderQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["notify"]: val.notify };
}
export function deserializeTransferOwnedFolderQueryParamsArg(val: any): TransferOwnedFolderQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const notify: undefined | boolean = isJson(val.notify, "boolean") ? val.notify : void 0;
    return { fields: fields, notify: notify } satisfies TransferOwnedFolderQueryParamsArg;
}
