import { serializeFileFull } from "../schemas.generated.js";
import { deserializeFileFull } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
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
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileById(fileId: string, requestBody: UpdateFileByIdRequestBodyArg, queryParams: undefined | UpdateFileByIdQueryParamsArg = {} satisfies UpdateFileByIdQueryParamsArg, headers: undefined | UpdateFileByIdHeadersArg = {} satisfies UpdateFileByIdHeadersArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "PUT", params: toMap(queryParams), headers: toMap(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async deleteFileById(fileId: string, headers: undefined | DeleteFileByIdHeadersArg = {} satisfies DeleteFileByIdHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, { method: "DELETE", headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async copyFile(fileId: string, requestBody: CopyFileRequestBodyArg, queryParams: undefined | CopyFileQueryParamsArg = {} satisfies CopyFileQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/copy") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtensionArg, queryParams: undefined | GetFileThumbnailByIdQueryParamsArg = {} satisfies GetFileThumbnailByIdQueryParamsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/thumbnail.", extension) as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeGetFileByIdQueryParamsArg(val: GetFileByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetFileByIdQueryParamsArg(val: any): GetFileByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFileByIdQueryParamsArg;
}
export function serializeGetFileByIdHeadersArg(val: GetFileByIdHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi, ["xRepHints"]: val.xRepHints };
}
export function deserializeGetFileByIdHeadersArg(val: any): GetFileByIdHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    const xRepHints: undefined | string = isJson(val.xRepHints, "string") ? val.xRepHints : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi, xRepHints: xRepHints } satisfies GetFileByIdHeadersArg;
}
export function serializeUpdateFileByIdRequestBodyArgParentField(val: UpdateFileByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeUpdateFileByIdRequestBodyArgParentField(val: any): UpdateFileByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies UpdateFileByIdRequestBodyArgParentField;
}
export function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField {
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
export function serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload };
}
export function deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload } satisfies UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileByIdRequestBodyArgSharedLinkField(val: UpdateFileByIdRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val: any): UpdateFileByIdRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileByIdRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFileByIdRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: UpdateFileByIdRequestBodyArgLockFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val: any): UpdateFileByIdRequestBodyArgLockFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileByIdRequestBodyArgLockFieldAccessField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFileByIdRequestBodyArgLockField(val: UpdateFileByIdRequestBodyArgLockField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access), ["expiresAt"]: val.expiresAt, ["isDownloadPrevented"]: val.isDownloadPrevented };
}
export function deserializeUpdateFileByIdRequestBodyArgLockField(val: any): UpdateFileByIdRequestBodyArgLockField {
    const access: undefined | UpdateFileByIdRequestBodyArgLockFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgLockFieldAccessField(val.access);
    const expiresAt: undefined | string = isJson(val.expiresAt, "string") ? val.expiresAt : void 0;
    const isDownloadPrevented: undefined | boolean = isJson(val.isDownloadPrevented, "boolean") ? val.isDownloadPrevented : void 0;
    return { access: access, expiresAt: expiresAt, isDownloadPrevented: isDownloadPrevented } satisfies UpdateFileByIdRequestBodyArgLockField;
}
export function serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField): Json {
    return val;
}
export function deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val: any): UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField {
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
export function serializeUpdateFileByIdRequestBodyArgPermissionsField(val: UpdateFileByIdRequestBodyArgPermissionsField): Json {
    return { ["canDownload"]: val.canDownload == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload) };
}
export function deserializeUpdateFileByIdRequestBodyArgPermissionsField(val: any): UpdateFileByIdRequestBodyArgPermissionsField {
    const canDownload: undefined | UpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField = val.canDownload == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgPermissionsFieldCanDownloadField(val.canDownload);
    return { canDownload: canDownload } satisfies UpdateFileByIdRequestBodyArgPermissionsField;
}
export function serializeUpdateFileByIdRequestBodyArg(val: UpdateFileByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["description"]: val.description, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink), ["lock"]: val.lock == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgLockField(val.lock), ["dispositionAt"]: val.dispositionAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
            return void 0;
        }) as readonly any[] };
}
export function deserializeUpdateFileByIdRequestBodyArg(val: any): UpdateFileByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const parent: undefined | UpdateFileByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgParentField(val.parent);
    const sharedLink: undefined | UpdateFileByIdRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const lock: undefined | UpdateFileByIdRequestBodyArgLockField = val.lock == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgLockField(val.lock);
    const dispositionAt: undefined | string = isJson(val.dispositionAt, "string") ? val.dispositionAt : void 0;
    const permissions: undefined | UpdateFileByIdRequestBodyArgPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFileByIdRequestBodyArgPermissionsField(val.permissions);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { name: name, description: description, parent: parent, sharedLink: sharedLink, lock: lock, dispositionAt: dispositionAt, permissions: permissions, tags: tags } satisfies UpdateFileByIdRequestBodyArg;
}
export function serializeUpdateFileByIdQueryParamsArg(val: UpdateFileByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFileByIdQueryParamsArg(val: any): UpdateFileByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateFileByIdQueryParamsArg;
}
export function serializeUpdateFileByIdHeadersArg(val: UpdateFileByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function deserializeUpdateFileByIdHeadersArg(val: any): UpdateFileByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies UpdateFileByIdHeadersArg;
}
export function serializeDeleteFileByIdHeadersArg(val: DeleteFileByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function deserializeDeleteFileByIdHeadersArg(val: any): DeleteFileByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies DeleteFileByIdHeadersArg;
}
export function serializeCopyFileRequestBodyArgParentField(val: CopyFileRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeCopyFileRequestBodyArgParentField(val: any): CopyFileRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CopyFileRequestBodyArgParentField;
}
export function serializeCopyFileRequestBodyArg(val: CopyFileRequestBodyArg): Json {
    return { ["name"]: val.name, ["version"]: val.version, ["parent"]: serializeCopyFileRequestBodyArgParentField(val.parent) };
}
export function deserializeCopyFileRequestBodyArg(val: any): CopyFileRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const version: undefined | string = isJson(val.version, "string") ? val.version : void 0;
    const parent: CopyFileRequestBodyArgParentField = deserializeCopyFileRequestBodyArgParentField(val.parent);
    return { name: name, version: version, parent: parent } satisfies CopyFileRequestBodyArg;
}
export function serializeCopyFileQueryParamsArg(val: CopyFileQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCopyFileQueryParamsArg(val: any): CopyFileQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CopyFileQueryParamsArg;
}
export function serializeGetFileThumbnailByIdExtensionArg(val: GetFileThumbnailByIdExtensionArg): Json {
    return val;
}
export function deserializeGetFileThumbnailByIdExtensionArg(val: any): GetFileThumbnailByIdExtensionArg {
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
export function serializeGetFileThumbnailByIdQueryParamsArg(val: GetFileThumbnailByIdQueryParamsArg): Json {
    return { ["minHeight"]: val.minHeight, ["minWidth"]: val.minWidth, ["maxHeight"]: val.maxHeight, ["maxWidth"]: val.maxWidth };
}
export function deserializeGetFileThumbnailByIdQueryParamsArg(val: any): GetFileThumbnailByIdQueryParamsArg {
    const minHeight: undefined | number = isJson(val.minHeight, "number") ? val.minHeight : void 0;
    const minWidth: undefined | number = isJson(val.minWidth, "number") ? val.minWidth : void 0;
    const maxHeight: undefined | number = isJson(val.maxHeight, "number") ? val.maxHeight : void 0;
    const maxWidth: undefined | number = isJson(val.maxWidth, "number") ? val.maxWidth : void 0;
    return { minHeight: minHeight, minWidth: minWidth, maxHeight: maxHeight, maxWidth: maxWidth } satisfies GetFileThumbnailByIdQueryParamsArg;
}
