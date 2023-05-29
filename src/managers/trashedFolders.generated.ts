import { TrashFolderRestored } from "../schemas.generated.js";
import { deserializeTrashFolderRestored } from "../schemas.generated.js";
import { serializeTrashFolderRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TrashFolder } from "../schemas.generated.js";
import { deserializeTrashFolder } from "../schemas.generated.js";
import { serializeTrashFolder } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface RestoreFolderFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyArgParentField;
}
export interface RestoreFolderFromTrashOptionsArg {
    readonly fields?: string;
}
export interface GetFolderTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">) {
        Object.assign(this, fields);
    }
    async restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, options: RestoreFolderFromTrashOptionsArg = {} satisfies RestoreFolderFromTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolderRestored(deserializeJson(response.text));
    }
    async getFolderTrash(folderId: string, options: GetFolderTrashOptionsArg = {} satisfies GetFolderTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolder(deserializeJson(response.text));
    }
    async deleteFolderTrash(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
