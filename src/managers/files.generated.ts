import { newSerializeFileFull } from "../schemas.generated.js";
import { newDeserializeFileFull } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { FileFull } from "../schemas.generated.js";
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
export interface GetFileByIdQueryParamsArg {
    readonly fields?: string;
}
export interface GetFileByIdHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
    readonly xRepHints?: string;
}
export interface UpdateFileByIdRequestBodyArgParentField {
    readonly id?: string;
}
export type UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface UpdateFileByIdRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type UpdateFileByIdRequestBodyArgLockFieldAccessField = "lock";
export interface UpdateFileByIdRequestBodyArgLockField {
    readonly access?: UpdateFileByIdRequestBodyArgLockFieldAccessField;
    readonly expiresAt?: string;
    readonly isDownloadPrevented?: boolean;
}
export type UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = "open" | "company";
export interface UpdateFileByIdRequestBodyArgPermissionsField {
    readonly canDownload?: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField;
}
export interface UpdateFileByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly parent?: UpdateFileByIdRequestBodyArgParentField;
    readonly sharedLink?: UpdateFileByIdRequestBodyArgSharedLinkField;
    readonly lock?: UpdateFileByIdRequestBodyArgLockField;
    readonly dispositionAt?: string;
    readonly permissions?: UpdateFileByIdRequestBodyArgPermissionsField;
    readonly tags?: readonly string[];
}
export interface UpdateFileByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFileByIdHeadersArg {
    readonly ifMatch?: string;
}
export interface DeleteFileByIdHeadersArg {
    readonly ifMatch?: string;
}
export interface CopyFileRequestBodyArgParentField {
    readonly id: string;
}
export interface CopyFileRequestBodyArg {
    readonly name?: string;
    readonly version?: string;
    readonly parent: CopyFileRequestBodyArgParentField;
}
export interface CopyFileQueryParamsArg {
    readonly fields?: string;
}
export type GetFileThumbnailByIdExtensionArg = "png" | "jpg";
export interface GetFileThumbnailByIdQueryParamsArg {
    readonly minHeight?: number;
    readonly minWidth?: number;
    readonly maxHeight?: number;
    readonly maxWidth?: number;
}
export class FilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FilesManager, "getFileById" | "updateFileById" | "deleteFileById" | "copyFile" | "getFileThumbnailById">) {
        Object.assign(this, fields);
    }
    async getFileById(fileId: string, queryParams: undefined | GetFileByIdQueryParamsArg = {} satisfies GetFileByIdQueryParamsArg, headers: undefined | GetFileByIdHeadersArg = {} satisfies GetFileByIdHeadersArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, queryParams: undefined | UpdateFileByIdQueryParamsArg = {} satisfies UpdateFileByIdQueryParamsArg, headers: undefined | UpdateFileByIdHeadersArg = {} satisfies UpdateFileByIdHeadersArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "PUT", params: toMap(queryParams), headers: toMap(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async deleteFileById(fileId: string, headers: undefined | DeleteFileByIdHeadersArg = {} satisfies DeleteFileByIdHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "DELETE", headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async copyFile(fileId: string, requestBody: CopyFileRequestBodyArg, queryParams: undefined | CopyFileQueryParamsArg = {} satisfies CopyFileQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/copy") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtensionArg, queryParams: undefined | GetFileThumbnailByIdQueryParamsArg = {} satisfies GetFileThumbnailByIdQueryParamsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeGetFileByIdQueryParamsArg(val: GetFileByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFileByIdQueryParamsArg(val: any): GetFileByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFileByIdQueryParamsArg;
}
export function newSerializeGetFileByIdHeadersArg(val: GetFileByIdHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi, ["xRepHints"]: val.xRepHints };
}
export function newDeserializeGetFileByIdHeadersArg(val: any): GetFileByIdHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    const xRepHints: undefined | string = isJson(val.xRepHints, "string") ? val.xRepHints : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi, xRepHints: xRepHints } satisfies GetFileByIdHeadersArg;
}
export function newSerializeUpdateFileByIdRequestBodyArgParentField(val: UpdateFileByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeUpdateFileByIdRequestBodyArgParentField(val: any): UpdateFileByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies UpdateFileByIdRequestBodyArgParentField;
}
export function newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload };
}
export function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload } satisfies UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateFileByIdRequestBodyArgSharedLinkField(val: UpdateFileByIdRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField(val: any): UpdateFileByIdRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFileByIdRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: UpdateFileByIdRequestBodyArgLockFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: any): UpdateFileByIdRequestBodyArgLockFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgLockFieldAccessField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateFileByIdRequestBodyArgLockField(val: UpdateFileByIdRequestBodyArgLockField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access), ["expiresAt"]: val.expiresAt, ["isDownloadPrevented"]: val.isDownloadPrevented };
}
export function newDeserializeUpdateFileByIdRequestBodyArgLockField(val: any): UpdateFileByIdRequestBodyArgLockField {
    const access: undefined | UpdateFileByIdRequestBodyArgLockFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access);
    const expiresAt: undefined | string = isJson(val.expiresAt, "string") ? val.expiresAt : void 0;
    const isDownloadPrevented: undefined | boolean = isJson(val.isDownloadPrevented, "boolean") ? val.isDownloadPrevented : void 0;
    return { access: access, expiresAt: expiresAt, isDownloadPrevented: isDownloadPrevented } satisfies UpdateFileByIdRequestBodyArgLockField;
}
export function newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField): Json {
    return val;
}
export function newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: any): UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUpdateFileByIdRequestBodyArgPermissionsField(val: UpdateFileByIdRequestBodyArgPermissionsField): Json {
    return { ["canDownload"]: val.canDownload == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload) };
}
export function newDeserializeUpdateFileByIdRequestBodyArgPermissionsField(val: any): UpdateFileByIdRequestBodyArgPermissionsField {
    const canDownload: undefined | UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = val.canDownload == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload);
    return { canDownload: canDownload } satisfies UpdateFileByIdRequestBodyArgPermissionsField;
}
export function newSerializeUpdateFileByIdRequestBodyArg(val: UpdateFileByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["description"]: val.description, ["parent"]: val.parent == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink), ["lock"]: val.lock == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgLockField(val.lock), ["dispositionAt"]: val.dispositionAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
            return void 0;
        }) as readonly any[] };
}
export function newDeserializeUpdateFileByIdRequestBodyArg(val: any): UpdateFileByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const parent: undefined | UpdateFileByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgParentField(val.parent);
    const sharedLink: undefined | UpdateFileByIdRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const lock: undefined | UpdateFileByIdRequestBodyArgLockField = val.lock == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgLockField(val.lock);
    const dispositionAt: undefined | string = isJson(val.dispositionAt, "string") ? val.dispositionAt : void 0;
    const permissions: undefined | UpdateFileByIdRequestBodyArgPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { name: name, description: description, parent: parent, sharedLink: sharedLink, lock: lock, dispositionAt: dispositionAt, permissions: permissions, tags: tags } satisfies UpdateFileByIdRequestBodyArg;
}
export function newSerializeUpdateFileByIdQueryParamsArg(val: UpdateFileByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFileByIdQueryParamsArg(val: any): UpdateFileByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateFileByIdQueryParamsArg;
}
export function newSerializeUpdateFileByIdHeadersArg(val: UpdateFileByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function newDeserializeUpdateFileByIdHeadersArg(val: any): UpdateFileByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies UpdateFileByIdHeadersArg;
}
export function newSerializeDeleteFileByIdHeadersArg(val: DeleteFileByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function newDeserializeDeleteFileByIdHeadersArg(val: any): DeleteFileByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies DeleteFileByIdHeadersArg;
}
export function newSerializeCopyFileRequestBodyArgParentField(val: CopyFileRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCopyFileRequestBodyArgParentField(val: any): CopyFileRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CopyFileRequestBodyArgParentField;
}
export function newSerializeCopyFileRequestBodyArg(val: CopyFileRequestBodyArg): Json {
    return { ["name"]: val.name, ["version"]: val.version, ["parent"]: newSerializeCopyFileRequestBodyArgParentField(val.parent) };
}
export function newDeserializeCopyFileRequestBodyArg(val: any): CopyFileRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const version: undefined | string = isJson(val.version, "string") ? val.version : void 0;
    const parent: CopyFileRequestBodyArgParentField = newDeserializeCopyFileRequestBodyArgParentField(val.parent);
    return { name: name, version: version, parent: parent } satisfies CopyFileRequestBodyArg;
}
export function newSerializeCopyFileQueryParamsArg(val: CopyFileQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCopyFileQueryParamsArg(val: any): CopyFileQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CopyFileQueryParamsArg;
}
export function newSerializeGetFileThumbnailByIdExtensionArg(val: GetFileThumbnailByIdExtensionArg): Json {
    return val;
}
export function newDeserializeGetFileThumbnailByIdExtensionArg(val: any): GetFileThumbnailByIdExtensionArg {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFileThumbnailByIdExtensionArg\"";
    }
    if (val == "png") {
        return "png";
    }
    if (val == "jpg") {
        return "jpg";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGetFileThumbnailByIdQueryParamsArg(val: GetFileThumbnailByIdQueryParamsArg): Json {
    return { ["minHeight"]: val.minHeight, ["minWidth"]: val.minWidth, ["maxHeight"]: val.maxHeight, ["maxWidth"]: val.maxWidth };
}
export function newDeserializeGetFileThumbnailByIdQueryParamsArg(val: any): GetFileThumbnailByIdQueryParamsArg {
    const minHeight: undefined | number = isJson(val.minHeight, "number") ? val.minHeight : void 0;
    const minWidth: undefined | number = isJson(val.minWidth, "number") ? val.minWidth : void 0;
    const maxHeight: undefined | number = isJson(val.maxHeight, "number") ? val.maxHeight : void 0;
    const maxWidth: undefined | number = isJson(val.maxWidth, "number") ? val.maxWidth : void 0;
    return { minHeight: minHeight, minWidth: minWidth, maxHeight: maxHeight, maxWidth: maxWidth } satisfies GetFileThumbnailByIdQueryParamsArg;
}
