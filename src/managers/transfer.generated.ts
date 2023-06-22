import { FolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeFolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class TransferManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TransferManager, "transferOwnedFolder">) {
        Object.assign(this, fields);
    }
    async transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, options: TransferOwnedFolderOptionsArg = {} satisfies TransferOwnedFolderOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/folders/0") as string, { method: "PUT", params: { ["fields"]: options.fields, ["notify"]: options.notify }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
}
