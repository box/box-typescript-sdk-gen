import { serializeFolderFull } from "../schemas.generated.js";
import { deserializeFolderFull } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetFolderByIdQueryParamsArgSortField = "id" | "name" | "date" | "size";
export type GetFolderByIdQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetFolderByIdQueryParamsArg {
    readonly fields?: string;
    readonly sort?: GetFolderByIdQueryParamsArgSortField;
    readonly direction?: GetFolderByIdQueryParamsArgDirectionField;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetFolderByIdHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi?: string;
}
export type UpdateFolderByIdRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface UpdateFolderByIdRequestBodyArgParentField {
    readonly id?: string;
}
export type UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
}
export interface UpdateFolderByIdRequestBodyArgSharedLinkField {
    readonly access?: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export type UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface UpdateFolderByIdRequestBodyArgFolderUploadEmailField {
    readonly access?: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField;
}
export interface UpdateFolderByIdRequestBodyArgCollectionsField {
    readonly id?: string;
    readonly type?: string;
}
export interface UpdateFolderByIdRequestBodyArg {
    readonly name?: string;
    readonly description?: string;
    readonly syncState?: UpdateFolderByIdRequestBodyArgSyncStateField;
    readonly canNonOwnersInvite?: boolean;
    readonly parent?: UpdateFolderByIdRequestBodyArgParentField;
    readonly sharedLink?: UpdateFolderByIdRequestBodyArgSharedLinkField;
    readonly folderUploadEmail?: UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
    readonly tags?: readonly string[];
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly collections?: readonly UpdateFolderByIdRequestBodyArgCollectionsField[];
    readonly canNonOwnersViewCollaborators?: boolean;
}
export interface UpdateFolderByIdQueryParamsArg {
    readonly fields?: string;
}
export interface UpdateFolderByIdHeadersArg {
    readonly ifMatch?: string;
}
export interface DeleteFolderByIdQueryParamsArg {
    readonly recursive?: boolean;
}
export interface DeleteFolderByIdHeadersArg {
    readonly ifMatch?: string;
}
export type GetFolderItemsQueryParamsArgSortField = "id" | "name" | "date" | "size";
export type GetFolderItemsQueryParamsArgDirectionField = "ASC" | "DESC";
export interface GetFolderItemsQueryParamsArg {
    readonly fields?: string;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly sort?: GetFolderItemsQueryParamsArgSortField;
    readonly direction?: GetFolderItemsQueryParamsArgDirectionField;
}
export interface GetFolderItemsHeadersArg {
    readonly boxapi?: string;
}
export interface CreateFolderRequestBodyArgParentField {
    readonly id: string;
}
export type CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface CreateFolderRequestBodyArgFolderUploadEmailField {
    readonly access?: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField;
}
export type CreateFolderRequestBodyArgSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface CreateFolderRequestBodyArg {
    readonly name: string;
    readonly parent: CreateFolderRequestBodyArgParentField;
    readonly folderUploadEmail?: CreateFolderRequestBodyArgFolderUploadEmailField;
    readonly syncState?: CreateFolderRequestBodyArgSyncStateField;
}
export interface CreateFolderQueryParamsArg {
    readonly fields?: string;
}
export interface CopyFolderRequestBodyArgParentField {
    readonly id: string;
}
export interface CopyFolderRequestBodyArg {
    readonly name?: string;
    readonly parent: CopyFolderRequestBodyArgParentField;
}
export interface CopyFolderQueryParamsArg {
    readonly fields?: string;
}
export class FoldersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FoldersManager, "getFolderById" | "updateFolderById" | "deleteFolderById" | "getFolderItems" | "createFolder" | "copyFolder">) {
        Object.assign(this, fields);
    }
    async getFolderById(folderId: string, queryParams: undefined | GetFolderByIdQueryParamsArg = {} satisfies GetFolderByIdQueryParamsArg, headers: undefined | GetFolderByIdHeadersArg = {} satisfies GetFolderByIdHeadersArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "GET", params: prepareParams(queryParams), headers: prepareParams(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, queryParams: undefined | UpdateFolderByIdQueryParamsArg = {} satisfies UpdateFolderByIdQueryParamsArg, headers: undefined | UpdateFolderByIdHeadersArg = {} satisfies UpdateFolderByIdHeadersArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "PUT", params: prepareParams(queryParams), headers: prepareParams(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async deleteFolderById(folderId: string, queryParams: undefined | DeleteFolderByIdQueryParamsArg = {} satisfies DeleteFolderByIdQueryParamsArg, headers: undefined | DeleteFolderByIdHeadersArg = {} satisfies DeleteFolderByIdHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "DELETE", params: prepareParams(queryParams), headers: prepareParams(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFolderItems(folderId: string, queryParams: undefined | GetFolderItemsQueryParamsArg = {} satisfies GetFolderItemsQueryParamsArg, headers: undefined | GetFolderItemsHeadersArg = {} satisfies GetFolderItemsHeadersArg): Promise<Items> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/items") as string, { method: "GET", params: prepareParams(queryParams), headers: prepareParams(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeItems(deserializeJson(response.text));
    }
    async createFolder(requestBody: CreateFolderRequestBodyArg, queryParams: undefined | CreateFolderQueryParamsArg = {} satisfies CreateFolderQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders") as string, { method: "POST", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
    async copyFolder(folderId: string, requestBody: CopyFolderRequestBodyArg, queryParams: undefined | CopyFolderQueryParamsArg = {} satisfies CopyFolderQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/copy") as string, { method: "POST", params: prepareParams(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderFull(deserializeJson(response.text));
    }
}
export function serializeGetFolderByIdQueryParamsArgSortField(val: GetFolderByIdQueryParamsArgSortField): Json {
    return val;
}
export function deserializeGetFolderByIdQueryParamsArgSortField(val: any): GetFolderByIdQueryParamsArgSortField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderByIdQueryParamsArgSortField\"";
    }
    if (val == "id") {
        return "id";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "size") {
        return "size";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetFolderByIdQueryParamsArgDirectionField(val: GetFolderByIdQueryParamsArgDirectionField): Json {
    return val;
}
export function deserializeGetFolderByIdQueryParamsArgDirectionField(val: any): GetFolderByIdQueryParamsArgDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderByIdQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetFolderByIdQueryParamsArg(val: GetFolderByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["sort"]: val.sort == void 0 ? void 0 : serializeGetFolderByIdQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : serializeGetFolderByIdQueryParamsArgDirectionField(val.direction), ["offset"]: val.offset, ["limit"]: val.limit };
}
export function deserializeGetFolderByIdQueryParamsArg(val: any): GetFolderByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const sort: undefined | GetFolderByIdQueryParamsArgSortField = val.sort == void 0 ? void 0 : deserializeGetFolderByIdQueryParamsArgSortField(val.sort);
    const direction: undefined | GetFolderByIdQueryParamsArgDirectionField = val.direction == void 0 ? void 0 : deserializeGetFolderByIdQueryParamsArgDirectionField(val.direction);
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { fields: fields, sort: sort, direction: direction, offset: offset, limit: limit } satisfies GetFolderByIdQueryParamsArg;
}
export function serializeGetFolderByIdHeadersArg(val: GetFolderByIdHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function deserializeGetFolderByIdHeadersArg(val: any): GetFolderByIdHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetFolderByIdHeadersArg;
}
export function serializeUpdateFolderByIdRequestBodyArgSyncStateField(val: UpdateFolderByIdRequestBodyArgSyncStateField): Json {
    return val;
}
export function deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val: any): UpdateFolderByIdRequestBodyArgSyncStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderByIdRequestBodyArgSyncStateField\"";
    }
    if (val == "synced") {
        return "synced";
    }
    if (val == "not_synced") {
        return "not_synced";
    }
    if (val == "partially_synced") {
        return "partially_synced";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFolderByIdRequestBodyArgParentField(val: UpdateFolderByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeUpdateFolderByIdRequestBodyArgParentField(val: any): UpdateFolderByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies UpdateFolderByIdRequestBodyArgParentField;
}
export function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField\"";
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
export function serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload };
}
export function deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload } satisfies UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: UpdateFolderByIdRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFolderByIdRequestBodyArgSharedLinkField;
}
export function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
export function deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailField {
    const access: undefined | UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access } satisfies UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
}
export function serializeUpdateFolderByIdRequestBodyArgCollectionsField(val: UpdateFolderByIdRequestBodyArgCollectionsField): Json {
    return { ["id"]: val.id, ["type"]: val.type };
}
export function deserializeUpdateFolderByIdRequestBodyArgCollectionsField(val: any): UpdateFolderByIdRequestBodyArgCollectionsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { id: id, type: type } satisfies UpdateFolderByIdRequestBodyArgCollectionsField;
}
export function serializeUpdateFolderByIdRequestBodyArg(val: UpdateFolderByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["description"]: val.description, ["syncState"]: val.syncState == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState), ["canNonOwnersInvite"]: val.canNonOwnersInvite, ["parent"]: val.parent == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : serializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
            return void 0;
        }) as readonly any[], ["isCollaborationRestrictedToEnterprise"]: val.isCollaborationRestrictedToEnterprise, ["collections"]: val.collections == void 0 ? void 0 : val.collections.map(function (item: UpdateFolderByIdRequestBodyArgCollectionsField): any {
            return serializeUpdateFolderByIdRequestBodyArgCollectionsField(item);
        }) as readonly any[], ["canNonOwnersViewCollaborators"]: val.canNonOwnersViewCollaborators };
}
export function deserializeUpdateFolderByIdRequestBodyArg(val: any): UpdateFolderByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const syncState: undefined | UpdateFolderByIdRequestBodyArgSyncStateField = val.syncState == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState);
    const canNonOwnersInvite: undefined | boolean = isJson(val.canNonOwnersInvite, "boolean") ? val.canNonOwnersInvite : void 0;
    const parent: undefined | UpdateFolderByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgParentField(val.parent);
    const sharedLink: undefined | UpdateFolderByIdRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const folderUploadEmail: undefined | UpdateFolderByIdRequestBodyArgFolderUploadEmailField = val.folderUploadEmail == void 0 ? void 0 : deserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const isCollaborationRestrictedToEnterprise: undefined | boolean = isJson(val.isCollaborationRestrictedToEnterprise, "boolean") ? val.isCollaborationRestrictedToEnterprise : void 0;
    const collections: undefined | readonly UpdateFolderByIdRequestBodyArgCollectionsField[] = isJson(val.collections, "array") ? val.collections.map(function (itm: Json): any {
        return deserializeUpdateFolderByIdRequestBodyArgCollectionsField(itm);
    }) as readonly any[] : void 0;
    const canNonOwnersViewCollaborators: undefined | boolean = isJson(val.canNonOwnersViewCollaborators, "boolean") ? val.canNonOwnersViewCollaborators : void 0;
    return { name: name, description: description, syncState: syncState, canNonOwnersInvite: canNonOwnersInvite, parent: parent, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, tags: tags, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, collections: collections, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators } satisfies UpdateFolderByIdRequestBodyArg;
}
export function serializeUpdateFolderByIdQueryParamsArg(val: UpdateFolderByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFolderByIdQueryParamsArg(val: any): UpdateFolderByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateFolderByIdQueryParamsArg;
}
export function serializeUpdateFolderByIdHeadersArg(val: UpdateFolderByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function deserializeUpdateFolderByIdHeadersArg(val: any): UpdateFolderByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies UpdateFolderByIdHeadersArg;
}
export function serializeDeleteFolderByIdQueryParamsArg(val: DeleteFolderByIdQueryParamsArg): Json {
    return { ["recursive"]: val.recursive };
}
export function deserializeDeleteFolderByIdQueryParamsArg(val: any): DeleteFolderByIdQueryParamsArg {
    const recursive: undefined | boolean = isJson(val.recursive, "boolean") ? val.recursive : void 0;
    return { recursive: recursive } satisfies DeleteFolderByIdQueryParamsArg;
}
export function serializeDeleteFolderByIdHeadersArg(val: DeleteFolderByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function deserializeDeleteFolderByIdHeadersArg(val: any): DeleteFolderByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies DeleteFolderByIdHeadersArg;
}
export function serializeGetFolderItemsQueryParamsArgSortField(val: GetFolderItemsQueryParamsArgSortField): Json {
    return val;
}
export function deserializeGetFolderItemsQueryParamsArgSortField(val: any): GetFolderItemsQueryParamsArgSortField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderItemsQueryParamsArgSortField\"";
    }
    if (val == "id") {
        return "id";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "size") {
        return "size";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetFolderItemsQueryParamsArgDirectionField(val: GetFolderItemsQueryParamsArgDirectionField): Json {
    return val;
}
export function deserializeGetFolderItemsQueryParamsArgDirectionField(val: any): GetFolderItemsQueryParamsArgDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetFolderItemsQueryParamsArgDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetFolderItemsQueryParamsArg(val: GetFolderItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["offset"]: val.offset, ["limit"]: val.limit, ["sort"]: val.sort == void 0 ? void 0 : serializeGetFolderItemsQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : serializeGetFolderItemsQueryParamsArgDirectionField(val.direction) };
}
export function deserializeGetFolderItemsQueryParamsArg(val: any): GetFolderItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const usemarker: undefined | boolean = isJson(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const sort: undefined | GetFolderItemsQueryParamsArgSortField = val.sort == void 0 ? void 0 : deserializeGetFolderItemsQueryParamsArgSortField(val.sort);
    const direction: undefined | GetFolderItemsQueryParamsArgDirectionField = val.direction == void 0 ? void 0 : deserializeGetFolderItemsQueryParamsArgDirectionField(val.direction);
    return { fields: fields, usemarker: usemarker, marker: marker, offset: offset, limit: limit, sort: sort, direction: direction } satisfies GetFolderItemsQueryParamsArg;
}
export function serializeGetFolderItemsHeadersArg(val: GetFolderItemsHeadersArg): Json {
    return { ["boxapi"]: val.boxapi };
}
export function deserializeGetFolderItemsHeadersArg(val: any): GetFolderItemsHeadersArg {
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi } satisfies GetFolderItemsHeadersArg;
}
export function serializeCreateFolderRequestBodyArgParentField(val: CreateFolderRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeCreateFolderRequestBodyArgParentField(val: any): CreateFolderRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CreateFolderRequestBodyArgParentField;
}
export function serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField): Json {
    return val;
}
export function deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: any): CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateFolderRequestBodyArgFolderUploadEmailField(val: CreateFolderRequestBodyArgFolderUploadEmailField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
export function deserializeCreateFolderRequestBodyArgFolderUploadEmailField(val: any): CreateFolderRequestBodyArgFolderUploadEmailField {
    const access: undefined | CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = val.access == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access } satisfies CreateFolderRequestBodyArgFolderUploadEmailField;
}
export function serializeCreateFolderRequestBodyArgSyncStateField(val: CreateFolderRequestBodyArgSyncStateField): Json {
    return val;
}
export function deserializeCreateFolderRequestBodyArgSyncStateField(val: any): CreateFolderRequestBodyArgSyncStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateFolderRequestBodyArgSyncStateField\"";
    }
    if (val == "synced") {
        return "synced";
    }
    if (val == "not_synced") {
        return "not_synced";
    }
    if (val == "partially_synced") {
        return "partially_synced";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateFolderRequestBodyArg(val: CreateFolderRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: serializeCreateFolderRequestBodyArgParentField(val.parent), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : serializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["syncState"]: val.syncState == void 0 ? void 0 : serializeCreateFolderRequestBodyArgSyncStateField(val.syncState) };
}
export function deserializeCreateFolderRequestBodyArg(val: any): CreateFolderRequestBodyArg {
    const name: string = val.name;
    const parent: CreateFolderRequestBodyArgParentField = deserializeCreateFolderRequestBodyArgParentField(val.parent);
    const folderUploadEmail: undefined | CreateFolderRequestBodyArgFolderUploadEmailField = val.folderUploadEmail == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const syncState: undefined | CreateFolderRequestBodyArgSyncStateField = val.syncState == void 0 ? void 0 : deserializeCreateFolderRequestBodyArgSyncStateField(val.syncState);
    return { name: name, parent: parent, folderUploadEmail: folderUploadEmail, syncState: syncState } satisfies CreateFolderRequestBodyArg;
}
export function serializeCreateFolderQueryParamsArg(val: CreateFolderQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCreateFolderQueryParamsArg(val: any): CreateFolderQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateFolderQueryParamsArg;
}
export function serializeCopyFolderRequestBodyArgParentField(val: CopyFolderRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function deserializeCopyFolderRequestBodyArgParentField(val: any): CopyFolderRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CopyFolderRequestBodyArgParentField;
}
export function serializeCopyFolderRequestBodyArg(val: CopyFolderRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: serializeCopyFolderRequestBodyArgParentField(val.parent) };
}
export function deserializeCopyFolderRequestBodyArg(val: any): CopyFolderRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const parent: CopyFolderRequestBodyArgParentField = deserializeCopyFolderRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent } satisfies CopyFolderRequestBodyArg;
}
export function serializeCopyFolderQueryParamsArg(val: CopyFolderQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeCopyFolderQueryParamsArg(val: any): CopyFolderQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CopyFolderQueryParamsArg;
}
