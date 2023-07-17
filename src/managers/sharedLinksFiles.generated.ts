import { serializeFileFull } from "../schemas.generated.js";
import { deserializeFileFull } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { FileFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items") as string, { method: "GET", params: prepareParams(serializeGetSharedItemsQueryParamsArg(queryParams)), headers: prepareParams(serializeGetSharedItemsHeadersArg(headers)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async getFileGetSharedLink(fileId: string, queryParams: GetFileGetSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link") as string, { method: "GET", params: prepareParams(serializeGetFileGetSharedLinkQueryParamsArg(queryParams)), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileAddSharedLink(fileId: string, requestBody: UpdateFileAddSharedLinkRequestBodyArg, queryParams: UpdateFileAddSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link") as string, { method: "PUT", params: prepareParams(serializeUpdateFileAddSharedLinkQueryParamsArg(queryParams)), body: serializeJson(serializeUpdateFileAddSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileUpdateSharedLink(fileId: string, requestBody: UpdateFileUpdateSharedLinkRequestBodyArg, queryParams: UpdateFileUpdateSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link") as string, { method: "PUT", params: prepareParams(serializeUpdateFileUpdateSharedLinkQueryParamsArg(queryParams)), body: serializeJson(serializeUpdateFileUpdateSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileRemoveSharedLink(fileId: string, requestBody: UpdateFileRemoveSharedLinkRequestBodyArg, queryParams: UpdateFileRemoveSharedLinkQueryParamsArg): Promise<FileFull> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link") as string, { method: "PUT", params: prepareParams(serializeUpdateFileRemoveSharedLinkQueryParamsArg(queryParams)), body: serializeJson(serializeUpdateFileRemoveSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
}
export function serializeGetSharedItemsQueryParamsArg(val: GetSharedItemsQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetSharedItemsQueryParamsArg(val: any): GetSharedItemsQueryParamsArg {
    const fields: undefined | string = isJson(val.fields, "string") ? val.fields : void 0;
    return { fields: fields } satisfies GetSharedItemsQueryParamsArg;
}
export function serializeGetSharedItemsHeadersArg(val: GetSharedItemsHeadersArg): Json {
    return { ["if-none-match"]: val.ifNoneMatch, ["boxapi"]: val.boxapi };
}
export function deserializeGetSharedItemsHeadersArg(val: any): GetSharedItemsHeadersArg {
    const ifNoneMatch: undefined | string = isJson(val["if-none-match"], "string") ? val["if-none-match"] : void 0;
    const boxapi: string = val.boxapi;
    return { ifNoneMatch: ifNoneMatch, boxapi: boxapi } satisfies GetSharedItemsHeadersArg;
}
export function serializeGetFileGetSharedLinkQueryParamsArg(val: GetFileGetSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeGetFileGetSharedLinkQueryParamsArg(val: any): GetFileGetSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies GetFileGetSharedLinkQueryParamsArg;
}
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField {
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
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview: undefined | boolean = isJson(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit: undefined | boolean = isJson(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileAddSharedLinkRequestBodyArg(val: UpdateFileAddSharedLinkRequestBodyArg): Json {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArg(val: any): UpdateFileAddSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink } satisfies UpdateFileAddSharedLinkRequestBodyArg;
}
export function serializeUpdateFileAddSharedLinkQueryParamsArg(val: UpdateFileAddSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFileAddSharedLinkQueryParamsArg(val: any): UpdateFileAddSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFileAddSharedLinkQueryParamsArg;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField): Json {
    return val;
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField {
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
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = isJson(val.can_download, "boolean") ? val.can_download : void 0;
    const canPreview: undefined | boolean = isJson(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canEdit: undefined | boolean = isJson(val.can_edit, "boolean") ? val.can_edit : void 0;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password, ["vanity_name"]: val.vanityName, ["unshared_at"]: val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const permissions: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions);
    return { access: access, password: password, vanityName: vanityName, unsharedAt: unsharedAt, permissions: permissions } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArg(val: UpdateFileUpdateSharedLinkRequestBodyArg): Json {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArg(val: any): UpdateFileUpdateSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink } satisfies UpdateFileUpdateSharedLinkRequestBodyArg;
}
export function serializeUpdateFileUpdateSharedLinkQueryParamsArg(val: UpdateFileUpdateSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFileUpdateSharedLinkQueryParamsArg(val: any): UpdateFileUpdateSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFileUpdateSharedLinkQueryParamsArg;
}
export function serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField): Json {
    return {};
}
export function deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
    return {} satisfies UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export function serializeUpdateFileRemoveSharedLinkRequestBodyArg(val: UpdateFileRemoveSharedLinkRequestBodyArg): Json {
    return { ["shared_link"]: val.sharedLink == void 0 ? void 0 : serializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.sharedLink) };
}
export function deserializeUpdateFileRemoveSharedLinkRequestBodyArg(val: any): UpdateFileRemoveSharedLinkRequestBodyArg {
    const sharedLink: undefined | UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField = val.shared_link == void 0 ? void 0 : deserializeUpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField(val.shared_link);
    return { sharedLink: sharedLink } satisfies UpdateFileRemoveSharedLinkRequestBodyArg;
}
export function serializeUpdateFileRemoveSharedLinkQueryParamsArg(val: UpdateFileRemoveSharedLinkQueryParamsArg): Json {
    return { ["fields"]: val.fields };
}
export function deserializeUpdateFileRemoveSharedLinkQueryParamsArg(val: any): UpdateFileRemoveSharedLinkQueryParamsArg {
    const fields: string = val.fields;
    return { fields: fields } satisfies UpdateFileRemoveSharedLinkQueryParamsArg;
}
