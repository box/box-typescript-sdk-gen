import { TrashFolder } from "../schemas.generated.js";
import { deserializeTrashFolder } from "../schemas.generated.js";
import { serializeTrashFolder } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type TrashedFoldersManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetFoldersIdTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedFoldersManager {
    readonly auth!: TrashedFoldersManagerAuthField;
    constructor(fields: Omit<TrashedFoldersManager, "getFoldersIdTrash" | "deleteFoldersIdTrash">) {
        Object.assign(this, fields);
    }
    async getFoldersIdTrash(folderId: string, options: GetFoldersIdTrashOptionsArg = {} satisfies GetFoldersIdTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTrashFolder(deserializeJSON(response.text) as JSON);
    }
    async deleteFoldersIdTrash(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
