import { newSerializeFolderFull } from "../schemas.generated.js";
import { newDeserializeFolderFull } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeItems } from "../schemas.generated.js";
import { newDeserializeItems } from "../schemas.generated.js";
import { FolderFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetFolderByIdQueryParamsArg {
    readonly fields?: string;
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async updateFolderById(folderId: string, requestBody: UpdateFolderByIdRequestBodyArg, queryParams: undefined | UpdateFolderByIdQueryParamsArg = {} satisfies UpdateFolderByIdQueryParamsArg, headers: undefined | UpdateFolderByIdHeadersArg = {} satisfies UpdateFolderByIdHeadersArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "PUT", params: toMap(queryParams), headers: toMap(headers), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async deleteFolderById(folderId: string, queryParams: undefined | DeleteFolderByIdQueryParamsArg = {} satisfies DeleteFolderByIdQueryParamsArg, headers: undefined | DeleteFolderByIdHeadersArg = {} satisfies DeleteFolderByIdHeadersArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId) as string, { method: "DELETE", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getFolderItems(folderId: string, queryParams: undefined | GetFolderItemsQueryParamsArg = {} satisfies GetFolderItemsQueryParamsArg, headers: undefined | GetFolderItemsHeadersArg = {} satisfies GetFolderItemsHeadersArg): Promise<Items> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/items") as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeItems(deserializeJson(response.text));
    }
    async createFolder(requestBody: CreateFolderRequestBodyArg, queryParams: undefined | CreateFolderQueryParamsArg = {} satisfies CreateFolderQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
    async copyFolder(folderId: string, requestBody: CopyFolderRequestBodyArg, queryParams: undefined | CopyFolderQueryParamsArg = {} satisfies CopyFolderQueryParamsArg): Promise<FolderFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/copy") as string, { method: "POST", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFolderFull(deserializeJson(response.text));
    }
}
export function newSerializeGetFolderByIdQueryParamsArg(val: GetFolderByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFolderByIdQueryParamsArg(val: any): GetFolderByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetFolderByIdQueryParamsArg;
}
export function newSerializeGetFolderByIdHeadersArg(val: GetFolderByIdHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function newDeserializeGetFolderByIdHeadersArg(val: any): GetFolderByIdHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetFolderByIdHeadersArg;
}
export function newSerializeUpdateFolderByIdRequestBodyArgSyncStateField(val: UpdateFolderByIdRequestBodyArgSyncStateField): Json {
    return val;
}
export function newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField(val: any): UpdateFolderByIdRequestBodyArgSyncStateField {
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
export function newSerializeUpdateFolderByIdRequestBodyArgParentField(val: UpdateFolderByIdRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeUpdateFolderByIdRequestBodyArgParentField(val: any): UpdateFolderByIdRequestBodyArgParentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { id: id } satisfies UpdateFolderByIdRequestBodyArgParentField;
}
export function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField {
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
export function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload };
}
export function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    return { canDownload: canDownload } satisfies UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: UpdateFolderByIdRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val: any): UpdateFolderByIdRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFolderByIdRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField {
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
export function newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: UpdateFolderByIdRequestBodyArgFolderUploadEmailField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
export function newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val: any): UpdateFolderByIdRequestBodyArgFolderUploadEmailField {
    const access: undefined | UpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access } satisfies UpdateFolderByIdRequestBodyArgFolderUploadEmailField;
}
export function newSerializeUpdateFolderByIdRequestBodyArgCollectionsField(val: UpdateFolderByIdRequestBodyArgCollectionsField): Json {
    return { ["id"]: val.id, ["type"]: val.type };
}
export function newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField(val: any): UpdateFolderByIdRequestBodyArgCollectionsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { id: id, type: type } satisfies UpdateFolderByIdRequestBodyArgCollectionsField;
}
export function newSerializeUpdateFolderByIdRequestBodyArg(val: UpdateFolderByIdRequestBodyArg): Json {
    return { ["name"]: val.name, ["description"]: val.description, ["syncState"]: val.syncState == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState), ["canNonOwnersInvite"]: val.canNonOwnersInvite, ["parent"]: val.parent == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgParentField(val.parent), ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : newSerializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
            return void 0;
        }) as readonly any[], ["isCollaborationRestrictedToEnterprise"]: val.isCollaborationRestrictedToEnterprise, ["collections"]: val.collections == void 0 ? void 0 : val.collections.map(function (item: UpdateFolderByIdRequestBodyArgCollectionsField): any {
            return newSerializeUpdateFolderByIdRequestBodyArgCollectionsField(item);
        }) as readonly any[], ["canNonOwnersViewCollaborators"]: val.canNonOwnersViewCollaborators };
}
export function newDeserializeUpdateFolderByIdRequestBodyArg(val: any): UpdateFolderByIdRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const syncState: undefined | UpdateFolderByIdRequestBodyArgSyncStateField = val.syncState == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSyncStateField(val.syncState);
    const canNonOwnersInvite: undefined | boolean = isJson(val.canNonOwnersInvite, "boolean") ? val.canNonOwnersInvite : void 0;
    const parent: undefined | UpdateFolderByIdRequestBodyArgParentField = val.parent == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgParentField(val.parent);
    const sharedLink: undefined | UpdateFolderByIdRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgSharedLinkField(val.sharedLink);
    const folderUploadEmail: undefined | UpdateFolderByIdRequestBodyArgFolderUploadEmailField = val.folderUploadEmail == void 0 ? void 0 : newDeserializeUpdateFolderByIdRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const isCollaborationRestrictedToEnterprise: undefined | boolean = isJson(val.isCollaborationRestrictedToEnterprise, "boolean") ? val.isCollaborationRestrictedToEnterprise : void 0;
    const collections: undefined | readonly UpdateFolderByIdRequestBodyArgCollectionsField[] = isJson(val.collections, "array") ? val.collections.map(function (itm: Json): any {
        return newDeserializeUpdateFolderByIdRequestBodyArgCollectionsField(itm);
    }) as readonly any[] : void 0;
    const canNonOwnersViewCollaborators: undefined | boolean = isJson(val.canNonOwnersViewCollaborators, "boolean") ? val.canNonOwnersViewCollaborators : void 0;
    return { name: name, description: description, syncState: syncState, canNonOwnersInvite: canNonOwnersInvite, parent: parent, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, tags: tags, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, collections: collections, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators } satisfies UpdateFolderByIdRequestBodyArg;
}
export function newSerializeUpdateFolderByIdQueryParamsArg(val: UpdateFolderByIdQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFolderByIdQueryParamsArg(val: any): UpdateFolderByIdQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies UpdateFolderByIdQueryParamsArg;
}
export function newSerializeUpdateFolderByIdHeadersArg(val: UpdateFolderByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function newDeserializeUpdateFolderByIdHeadersArg(val: any): UpdateFolderByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies UpdateFolderByIdHeadersArg;
}
export function newSerializeDeleteFolderByIdQueryParamsArg(val: DeleteFolderByIdQueryParamsArg): Json {
    return { ["recursive"]: val.recursive };
}
export function newDeserializeDeleteFolderByIdQueryParamsArg(val: any): DeleteFolderByIdQueryParamsArg {
    const recursive: undefined | boolean = isJson(val.recursive, "boolean") ? val.recursive : void 0;
    return { recursive: recursive } satisfies DeleteFolderByIdQueryParamsArg;
}
export function newSerializeDeleteFolderByIdHeadersArg(val: DeleteFolderByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function newDeserializeDeleteFolderByIdHeadersArg(val: any): DeleteFolderByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies DeleteFolderByIdHeadersArg;
}
export function newSerializeGetFolderItemsQueryParamsArgSortField(val: GetFolderItemsQueryParamsArgSortField): Json {
    return val;
}
export function newDeserializeGetFolderItemsQueryParamsArgSortField(val: any): GetFolderItemsQueryParamsArgSortField {
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
export function newSerializeGetFolderItemsQueryParamsArgDirectionField(val: GetFolderItemsQueryParamsArgDirectionField): Json {
    return val;
}
export function newDeserializeGetFolderItemsQueryParamsArgDirectionField(val: any): GetFolderItemsQueryParamsArgDirectionField {
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
export function newSerializeGetFolderItemsQueryParamsArg(val: GetFolderItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields, ["usemarker"]: val.usemarker, ["marker"]: val.marker, ["offset"]: val.offset, ["limit"]: val.limit, ["sort"]: val.sort == void 0 ? void 0 : newSerializeGetFolderItemsQueryParamsArgSortField(val.sort), ["direction"]: val.direction == void 0 ? void 0 : newSerializeGetFolderItemsQueryParamsArgDirectionField(val.direction) };
}
export function newDeserializeGetFolderItemsQueryParamsArg(val: any): GetFolderItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    const usemarker: undefined | boolean = isJson(val.usemarker, "boolean") ? val.usemarker : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const sort: undefined | GetFolderItemsQueryParamsArgSortField = val.sort == void 0 ? void 0 : newDeserializeGetFolderItemsQueryParamsArgSortField(val.sort);
    const direction: undefined | GetFolderItemsQueryParamsArgDirectionField = val.direction == void 0 ? void 0 : newDeserializeGetFolderItemsQueryParamsArgDirectionField(val.direction);
    return { fields: fields, usemarker: usemarker, marker: marker, offset: offset, limit: limit, sort: sort, direction: direction } satisfies GetFolderItemsQueryParamsArg;
}
export function newSerializeGetFolderItemsHeadersArg(val: GetFolderItemsHeadersArg): Json {
    return { ["boxapi"]: val.boxapi };
}
export function newDeserializeGetFolderItemsHeadersArg(val: any): GetFolderItemsHeadersArg {
    const boxapi: undefined | string = isJson(val.boxapi, "string") ? val.boxapi : void 0;
    return { boxapi: boxapi } satisfies GetFolderItemsHeadersArg;
}
export function newSerializeCreateFolderRequestBodyArgParentField(val: CreateFolderRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCreateFolderRequestBodyArgParentField(val: any): CreateFolderRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CreateFolderRequestBodyArgParentField;
}
export function newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField): Json {
    return val;
}
export function newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val: any): CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField {
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
export function newSerializeCreateFolderRequestBodyArgFolderUploadEmailField(val: CreateFolderRequestBodyArgFolderUploadEmailField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access) };
}
export function newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField(val: any): CreateFolderRequestBodyArgFolderUploadEmailField {
    const access: undefined | CreateFolderRequestBodyArgFolderUploadEmailFieldAccessField = val.access == void 0 ? void 0 : newDeserializeCreateFolderRequestBodyArgFolderUploadEmailFieldAccessField(val.access);
    return { access: access } satisfies CreateFolderRequestBodyArgFolderUploadEmailField;
}
export function newSerializeCreateFolderRequestBodyArgSyncStateField(val: CreateFolderRequestBodyArgSyncStateField): Json {
    return val;
}
export function newDeserializeCreateFolderRequestBodyArgSyncStateField(val: any): CreateFolderRequestBodyArgSyncStateField {
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
export function newSerializeCreateFolderRequestBodyArg(val: CreateFolderRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: newSerializeCreateFolderRequestBodyArgParentField(val.parent), ["folderUploadEmail"]: val.folderUploadEmail == void 0 ? void 0 : newSerializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail), ["syncState"]: val.syncState == void 0 ? void 0 : newSerializeCreateFolderRequestBodyArgSyncStateField(val.syncState) };
}
export function newDeserializeCreateFolderRequestBodyArg(val: any): CreateFolderRequestBodyArg {
    const name: string = val.name;
    const parent: CreateFolderRequestBodyArgParentField = newDeserializeCreateFolderRequestBodyArgParentField(val.parent);
    const folderUploadEmail: undefined | CreateFolderRequestBodyArgFolderUploadEmailField = val.folderUploadEmail == void 0 ? void 0 : newDeserializeCreateFolderRequestBodyArgFolderUploadEmailField(val.folderUploadEmail);
    const syncState: undefined | CreateFolderRequestBodyArgSyncStateField = val.syncState == void 0 ? void 0 : newDeserializeCreateFolderRequestBodyArgSyncStateField(val.syncState);
    return { name: name, parent: parent, folderUploadEmail: folderUploadEmail, syncState: syncState } satisfies CreateFolderRequestBodyArg;
}
export function newSerializeCreateFolderQueryParamsArg(val: CreateFolderQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCreateFolderQueryParamsArg(val: any): CreateFolderQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CreateFolderQueryParamsArg;
}
export function newSerializeCopyFolderRequestBodyArgParentField(val: CopyFolderRequestBodyArgParentField): Json {
    return { ["id"]: val.id };
}
export function newDeserializeCopyFolderRequestBodyArgParentField(val: any): CopyFolderRequestBodyArgParentField {
    const id: string = val.id;
    return { id: id } satisfies CopyFolderRequestBodyArgParentField;
}
export function newSerializeCopyFolderRequestBodyArg(val: CopyFolderRequestBodyArg): Json {
    return { ["name"]: val.name, ["parent"]: newSerializeCopyFolderRequestBodyArgParentField(val.parent) };
}
export function newDeserializeCopyFolderRequestBodyArg(val: any): CopyFolderRequestBodyArg {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const parent: CopyFolderRequestBodyArgParentField = newDeserializeCopyFolderRequestBodyArgParentField(val.parent);
    return { name: name, parent: parent } satisfies CopyFolderRequestBodyArg;
}
export function newSerializeCopyFolderQueryParamsArg(val: CopyFolderQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeCopyFolderQueryParamsArg(val: any): CopyFolderQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies CopyFolderQueryParamsArg;
}
