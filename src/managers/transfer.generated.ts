import { Folder } from "../schemas.generated.js";
import { deserializeFolder } from "../schemas.generated.js";
import { serializeFolder } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
export class TransferManager {
    readonly auth!: TransferManagerAuthField;
    constructor(fields: Omit<TransferManager, "putUsersIdFolders0">) {
        Object.assign(this, fields);
    }
    async putUsersIdFolders0(userId: string, requestBody: PutUsersIdFolders0RequestBodyArg, options: PutUsersIdFolders0OptionsArg = {} satisfies PutUsersIdFolders0OptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/folders/0") as string, { method: "PUT", params: { ["fields"]: options.fields, ["notify"]: options.notify }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeFolder(await deserializeJson(response.text));
    }
}
