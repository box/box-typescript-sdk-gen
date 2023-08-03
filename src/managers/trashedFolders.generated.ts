import { serializeTrashFolderRestored } from "../schemas.generated.js";
import { deserializeTrashFolderRestored } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeTrashFolder } from "../schemas.generated.js";
import { deserializeTrashFolder } from "../schemas.generated.js";
import { TrashFolderRestored } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TrashFolder } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { serializeJson } from "../json.js";
import { Json } from "../json.js";
import { deserializeJson } from "../json.js";
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
export class RestoreFolderFromTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: RestoreFolderFromTrashHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetFolderTrashQueryParamsArg {
    readonly fields?: string;
}
export class GetFolderTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFolderTrashHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFolderTrashHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFolderTrashHeadersArg) {
        Object.assign(this, fields);
    }
}
export class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, "restoreFolderFromTrash" | "getFolderTrash" | "deleteFolderTrash">) {
        Object.assign(this, fields);
    }
    async restoreFolderFromTrash(folderId: string, requestBody: RestoreFolderFromTrashRequestBodyArg, queryParams: RestoreFolderFromTrashQueryParamsArg = {} satisfies RestoreFolderFromTrashQueryParamsArg, headers: RestoreFolderFromTrashHeadersArg = new RestoreFolderFromTrashHeadersArg({})): Promise<TrashFolderRestored> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "POST", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeRestoreFolderFromTrashRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolderRestored(deserializeJson(response.text));
    }
    async getFolderTrash(folderId: string, queryParams: GetFolderTrashQueryParamsArg = {} satisfies GetFolderTrashQueryParamsArg, headers: GetFolderTrashHeadersArg = new GetFolderTrashHeadersArg({})): Promise<TrashFolder> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTrashFolder(deserializeJson(response.text));
    }
    async deleteFolderTrash(folderId: string, headers: DeleteFolderTrashHeadersArg = new DeleteFolderTrashHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/trash") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeRestoreFolderFromTrashRequestBodyArgParentField(val: RestoreFolderFromTrashRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeRestoreFolderFromTrashRequestBodyArgParentField(val: any): RestoreFolderFromTrashRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies RestoreFolderFromTrashRequestBodyArgParentField;
}
export function serializeRestoreFolderFromTrashRequestBodyArg(val: RestoreFolderFromTrashRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: val.parent == void 0 ? void 0 : serializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent) };
}
export function deserializeRestoreFolderFromTrashRequestBodyArg(val: any): RestoreFolderFromTrashRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const parent: undefined | RestoreFolderFromTrashRequestBodyArgParentField = val.parent == void 0 ? void 0 : deserializeRestoreFolderFromTrashRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent } satisfies RestoreFolderFromTrashRequestBodyArg;
}
