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
export interface GetSharedItemsQueryParamsArg {
    readonly fields?: string;
}
export interface GetSharedItemsHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi: string;
}
export interface GetFileGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileAddSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileAddSharedLinkQueryParamsArg {
    readonly fields: string;
}
export type UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    readonly canDownload?: boolean;
    readonly canPreview?: boolean;
    readonly canEdit?: boolean;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
    readonly access?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField;
    readonly password?: string;
    readonly vanityName?: string;
    readonly unsharedAt?: string;
    readonly permissions?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export interface UpdateFileUpdateSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileUpdateSharedLinkQueryParamsArg {
    readonly fields: string;
}
export interface UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFileRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFileGetSharedLink" | "updateFileAddSharedLink" | "updateFileUpdateSharedLink" | "updateFileRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItems(queryParams: undefined | GetSharedItemsQueryParamsArg = {} satisfies GetSharedItemsQueryParamsArg, headers: GetSharedItemsHeadersArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items") as string, { method: "GET", params: toMap(queryParams), headers: toMap(headers), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async getFileGetSharedLink(fileId: string, queryParams: GetFileGetSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async updateFileAddSharedLink(fileId: string, requestBody: UpdateFileAddSharedLinkRequestBodyArg, queryParams: UpdateFileAddSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async updateFileUpdateSharedLink(fileId: string, requestBody: UpdateFileUpdateSharedLinkRequestBodyArg, queryParams: UpdateFileUpdateSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
    async updateFileRemoveSharedLink(fileId: string, requestBody: UpdateFileRemoveSharedLinkRequestBodyArg, queryParams: UpdateFileRemoveSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link") as string, { method: "PUT", params: toMap(queryParams), body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileFull(deserializeJson(response.text));
    }
}
export function newSerializeGetSharedItemsQueryParamsArg(val: GetSharedItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetSharedItemsQueryParamsArg(val: any): GetSharedItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetSharedItemsQueryParamsArg;
}
export function newSerializeGetSharedItemsHeadersArg(val: GetSharedItemsHeadersArg): Json {
    return { ["ifNoneMatch"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function newDeserializeGetSharedItemsHeadersArg(val: any): GetSharedItemsHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val.ifNoneMatch, "string") ? val.ifNoneMatch : void 0;
    const boxapi: string = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetSharedItemsHeadersArg;
}
export function newSerializeGetFileGetSharedLinkQueryParamsArg(val: GetFileGetSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeGetFileGetSharedLinkQueryParamsArg(val: any): GetFileGetSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies GetFileGetSharedLinkQueryParamsArg;
}
export function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
export function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFileAddSharedLinkRequestBodyArg(val: UpdateFileAddSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateFileAddSharedLinkRequestBodyArg(val: any): UpdateFileAddSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFileAddSharedLinkRequestBodyArg;
}
export function newSerializeUpdateFileAddSharedLinkQueryParamsArg(val: UpdateFileAddSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFileAddSharedLinkQueryParamsArg(val: any): UpdateFileAddSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFileAddSharedLinkQueryParamsArg;
}
export function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField\"";
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
export function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["canDownload"]: val.canDownload, ["canPreview"]: val.canPreview, ["canEdit"]: val.canEdit };
}
export function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.canDownload, "boolean") ? val.canDownload : void 0;
    const canPreview: undefined | boolean = isJson(val.canPreview, "boolean") ? val.canPreview : void 0;
    const canEdit: undefined | boolean = isJson(val.canEdit, "boolean") ? val.canEdit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanityName"]: val.vanityName, ["unsharedAt"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanityName, "string") ? val.vanityName : void 0;
    const unsharedAt: undefined | string = isJson(val.unsharedAt, "string") ? val.unsharedAt : void 0;
    const permissions: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFileUpdateSharedLinkRequestBodyArg(val: UpdateFileUpdateSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateFileUpdateSharedLinkRequestBodyArg(val: any): UpdateFileUpdateSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFileUpdateSharedLinkRequestBodyArg;
}
export function newSerializeUpdateFileUpdateSharedLinkQueryParamsArg(val: UpdateFileUpdateSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFileUpdateSharedLinkQueryParamsArg(val: any): UpdateFileUpdateSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFileUpdateSharedLinkQueryParamsArg;
}
export function newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField): Json {
    return {};
}
export function newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
    return {} satisfies UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function newSerializeUpdateFileRemoveSharedLinkRequestBodyArg(val: UpdateFileRemoveSharedLinkRequestBodyArg): Json {
    return { ["sharedLink"]: val.sharedLink == void 0 ? void 0 : newSerializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function newDeserializeUpdateFileRemoveSharedLinkRequestBodyArg(val: any): UpdateFileRemoveSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = val.sharedLink == void 0 ? void 0 : newDeserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink);
    return { sharedLink: sharedLink } satisfies UpdateFileRemoveSharedLinkRequestBodyArg;
}
export function newSerializeUpdateFileRemoveSharedLinkQueryParamsArg(val: UpdateFileRemoveSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function newDeserializeUpdateFileRemoveSharedLinkQueryParamsArg(val: any): UpdateFileRemoveSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFileRemoveSharedLinkQueryParamsArg;
}
