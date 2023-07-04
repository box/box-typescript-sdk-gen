import { newSerializeTrashFileRestored } from "../schemas.generated.js";
import { newDeserializeTrashFileRestored } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeTrashFile } from "../schemas.generated.js";
import { newDeserializeTrashFile } from "../schemas.generated.js";
import { TrashFileRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TrashFile } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface RestoreFileFromTrashRequestBodyArgParentField {
    readonly id?: string;
}
export interface RestoreFileFromTrashRequestBodyArg {
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyArgParentField;
}
export interface RestoreFileFromTrashQueryParamsArg {
    readonly fields?: string;
}
export interface GetFileTrashQueryParamsArg {
    readonly fields?: string;
}
export class TrashedFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFilesManager, "restoreFileFromTrash" | "getFileTrash" | "deleteFileTrash">) {
        Object.assign(this, fields);
    }
    async restoreFileFromTrash(fileId: string, requestBody: RestoreFileFromTrashRequestBodyArg, queryParams: undefined | RestoreFileFromTrashQueryParamsArg = {} satisfies RestoreFileFromTrashQueryParamsArg): Promise<TrashFileRestored> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTrashFileRestored(deserializeJson(response.text));
    }
    async getFileTrash(fileId: string, queryParams: undefined | GetFileTrashQueryParamsArg = {} satisfies GetFileTrashQueryParamsArg): Promise<TrashFile> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/trash") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTrashFile(deserializeJson(response.text));
    }
    async deleteFileTrash(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/trash") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeRestoreFileFromTrashRequestBodyArgParentField(val: RestoreFileFromTrashRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeRestoreFileFromTrashRequestBodyArgParentField(val: any): RestoreFileFromTrashRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies RestoreFileFromTrashRequestBodyArgParentField;
}
export function newSerializeRestoreFileFromTrashRequestBodyArg(val: RestoreFileFromTrashRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : newSerializeRestoreFileFromTrashRequestBodyArgParentField(val.parent) };
}
export function newDeserializeRestoreFileFromTrashRequestBodyArg(val: any): RestoreFileFromTrashRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const parent: undefined | RestoreFileFromTrashRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializeRestoreFileFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent } satisfies RestoreFileFromTrashRequestBodyArg;
}
export function newSerializeRestoreFileFromTrashQueryParamsArg(val: RestoreFileFromTrashQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeRestoreFileFromTrashQueryParamsArg(val: any): RestoreFileFromTrashQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies RestoreFileFromTrashQueryParamsArg;
}
export function newSerializeGetFileTrashQueryParamsArg(val: GetFileTrashQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFileTrashQueryParamsArg(val: any): GetFileTrashQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFileTrashQueryParamsArg;
}
