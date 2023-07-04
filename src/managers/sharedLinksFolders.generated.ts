import { newSerializeFolderFull } from "../schemas.generated.js";
import { newDeserializeFolderFull } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
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
export interface GetSharedItemFoldersQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemFoldersHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetFolderGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderAddSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFolderUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFolderRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFolderRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export class SharedLinksFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFoldersManager, "getSharedItemFolders" | "getFolderGetSharedLink" | "updateFolderAddSharedLink" | "updateFolderUpdateSharedLink" | "updateFolderRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItemFolders(queryParams: undefined | GetSharedItemFoldersQueryParamsArg = {} satisfies GetSharedItemFoldersQueryParamsArg, headers: GetSharedItemFoldersHeadersArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items#folders") as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async getFolderGetSharedLink(folderId: string, queryParams: GetFolderGetSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#get_shared_link") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderAddSharedLink(folderId: string, requestBody: UpdateFolderAddSharedLinkRequestBodyArg, queryParams: UpdateFolderAddSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#add_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderUpdateSharedLink(folderId: string, requestBody: UpdateFolderUpdateSharedLinkRequestBodyArg, queryParams: UpdateFolderUpdateSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#update_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderRemoveSharedLink(folderId: string, requestBody: UpdateFolderRemoveSharedLinkRequestBodyArg, queryParams: UpdateFolderRemoveSharedLinkQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "#remove_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
}
export function newSerializeGetSharedItemFoldersQueryParamsArg(val: GetSharedItemFoldersQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetSharedItemFoldersQueryParamsArg(val: any): GetSharedItemFoldersQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetSharedItemFoldersQueryParamsArg;
}
export function newSerializeGetSharedItemFoldersHeadersArg(val: GetSharedItemFoldersHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function newDeserializeGetSharedItemFoldersHeadersArg(val: any): GetSharedItemFoldersHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: string = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetSharedItemFoldersHeadersArg;
}
export function newSerializeGetFolderGetSharedLinkQueryParamsArg(val: GetFolderGetSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFolderGetSharedLinkQueryParamsArg(val: any): GetFolderGetSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies GetFolderGetSharedLinkQueryParamsArg;
}
export function newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
export function newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFolderAddSharedLinkRequestBodyArg(val: UpdateFolderAddSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateFolderAddSharedLinkRequestBodyArg(val: any): UpdateFolderAddSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFolderAddSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFolderAddSharedLinkRequestBodyArg;
}
export function newSerializeUpdateFolderAddSharedLinkQueryParamsArg(val: UpdateFolderAddSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFolderAddSharedLinkQueryParamsArg(val: any): UpdateFolderAddSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFolderAddSharedLinkQueryParamsArg;
}
export function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
export function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFolderUpdateSharedLinkRequestBodyArg(val: UpdateFolderUpdateSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArg(val: any): UpdateFolderUpdateSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFolderUpdateSharedLinkRequestBodyArg;
}
export function newSerializeUpdateFolderUpdateSharedLinkQueryParamsArg(val: UpdateFolderUpdateSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFolderUpdateSharedLinkQueryParamsArg(val: any): UpdateFolderUpdateSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFolderUpdateSharedLinkQueryParamsArg;
}
export function newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField): Json {
    return {};
}
export function newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField {
    return {} satisfies UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFolderRemoveSharedLinkRequestBodyArg(val: UpdateFolderRemoveSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArg(val: any): UpdateFolderRemoveSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFolderRemoveSharedLinkRequestBodyArg;
}
export function newSerializeUpdateFolderRemoveSharedLinkQueryParamsArg(val: UpdateFolderRemoveSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFolderRemoveSharedLinkQueryParamsArg(val: any): UpdateFolderRemoveSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFolderRemoveSharedLinkQueryParamsArg;
}
