import { newSerializeTrashFolderRestored } from "../schemas.generated.js";
import { newDeserializeTrashFolderRestored } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeTrashFolder } from "../schemas.generated.js";
import { newDeserializeTrashFolder } from "../schemas.generated.js";
import { TrashFolderRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TrashFolder } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface RestoreFolderFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFolderFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyArgParentField;
}
export interface RestoreFolderFromTrashQueryParamsArg {
    readonly fields?: string;
}
export interface GetFolderTrashQueryParamsArg {
    readonly fields?: string;
}
export class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">) {
        Object.assign(this, fields);
    }
    async restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, queryParams: undefined | RestoreFolderFromTrashQueryParamsArg = {} satisfies RestoreFolderFromTrashQueryParamsArg): Promise<TrashFolderRestored> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTrashFolderRestored(deserializeJson(response.text));
    }
    async getFolderTrash(folderId: string, queryParams: undefined | GetFolderTrashQueryParamsArg = {} satisfies GetFolderTrashQueryParamsArg): Promise<TrashFolder> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTrashFolder(deserializeJson(response.text));
    }
    async deleteFolderTrash(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeRestoreFolderFromTrashRequestBodyArgParentField(val: RestoreFolderFromTrashRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeRestoreFolderFromTrashRequestBodyArgParentField(val: any): RestoreFolderFromTrashRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies RestoreFolderFromTrashRequestBodyArgParentField;
}
export function newSerializeRestoreFolderFromTrashRequestBodyArg(val: RestoreFolderFromTrashRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : newSerializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent) };
}
export function newDeserializeRestoreFolderFromTrashRequestBodyArg(val: any): RestoreFolderFromTrashRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const parent: undefined | RestoreFolderFromTrashRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent } satisfies RestoreFolderFromTrashRequestBodyArg;
}
export function newSerializeRestoreFolderFromTrashQueryParamsArg(val: RestoreFolderFromTrashQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeRestoreFolderFromTrashQueryParamsArg(val: any): RestoreFolderFromTrashQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies RestoreFolderFromTrashQueryParamsArg;
}
export function newSerializeGetFolderTrashQueryParamsArg(val: GetFolderTrashQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFolderTrashQueryParamsArg(val: any): GetFolderTrashQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFolderTrashQueryParamsArg;
}
