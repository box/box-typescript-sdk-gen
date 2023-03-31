import { Folder } from "../schemas.generated.js";
import { deserializeFolder } from "../schemas.generated.js";
import { serializeFolder } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
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
export class TransferManager {
    readonly auth!: TransferManagerAuthField;
    constructor(fields: Omit<TransferManager, "transferOwnedFolder">) {
        Object.assign(this, fields);
    }
    async transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBodyArg, options: TransferOwnedFolderOptionsArg = {} satisfies TransferOwnedFolderOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/folders/0") as string, { method: "PUT", params: { ["fields"]: options.fields, ["notify"]: options.notify }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeFolder(deserializeJSON(response.text) as JSON);
    }
}
