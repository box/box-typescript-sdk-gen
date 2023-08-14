import { serializeFileFull } from "../schemas.generated.js";
import { deserializeFileFull } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { FileFull } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
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
export class GetSharedItemsHeadersArg {
    readonly ifNoneMatch?: string;
    readonly boxapi!: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetSharedItemsHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface GetFileGetSharedLinkQueryParamsArg {
    readonly fields: string;
}
export class GetFileGetSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileGetSharedLinkHeadersArg) {
        Object.assign(this, fields);
    }
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
export class UpdateFileAddSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFileAddSharedLinkHeadersArg) {
        Object.assign(this, fields);
    }
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
export class UpdateFileUpdateSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFileUpdateSharedLinkHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField {
}
export interface UpdateFileRemoveSharedLinkRequestBodyArg {
    readonly sharedLink?: UpdateFileRemoveSharedLinkRequestBodyArgSharedLinkField;
}
export interface UpdateFileRemoveSharedLinkQueryParamsArg {
    readonly fields: string;
}
export class UpdateFileRemoveSharedLinkHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFileRemoveSharedLinkHeadersArg) {
        Object.assign(this, fields);
    }
}
export class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, "getSharedItems" | "getFileGetSharedLink" | "updateFileAddSharedLink" | "updateFileUpdateSharedLink" | "updateFileRemoveSharedLink">) {
        Object.assign(this, fields);
    }
    async getSharedItems(queryParams: GetSharedItemsQueryParamsArg = {} satisfies GetSharedItemsQueryParamsArg, headers: GetSharedItemsHeadersArg): Promise<FileFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{ ["if-none-match"]: toString(headers.ifNoneMatch), ["boxapi"]: toString(headers.boxapi) }, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/shared_items") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async getFileGetSharedLink(fileId: string, queryParams: GetFileGetSharedLinkQueryParamsArg, headers: GetFileGetSharedLinkHeadersArg = new GetFileGetSharedLinkHeadersArg({})): Promise<FileFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#get_shared_link") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileAddSharedLink(fileId: string, requestBody: UpdateFileAddSharedLinkRequestBodyArg = {} satisfies UpdateFileAddSharedLinkRequestBodyArg, queryParams: UpdateFileAddSharedLinkQueryParamsArg, headers: UpdateFileAddSharedLinkHeadersArg = new UpdateFileAddSharedLinkHeadersArg({})): Promise<FileFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#add_shared_link") as string, { method: "PUT", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeUpdateFileAddSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileUpdateSharedLink(fileId: string, requestBody: UpdateFileUpdateSharedLinkRequestBodyArg = {} satisfies UpdateFileUpdateSharedLinkRequestBodyArg, queryParams: UpdateFileUpdateSharedLinkQueryParamsArg, headers: UpdateFileUpdateSharedLinkHeadersArg = new UpdateFileUpdateSharedLinkHeadersArg({})): Promise<FileFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#update_shared_link") as string, { method: "PUT", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeUpdateFileUpdateSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
    async updateFileRemoveSharedLink(fileId: string, requestBody: UpdateFileRemoveSharedLinkRequestBodyArg = {} satisfies UpdateFileRemoveSharedLinkRequestBodyArg, queryParams: UpdateFileRemoveSharedLinkQueryParamsArg, headers: UpdateFileRemoveSharedLinkHeadersArg = new UpdateFileRemoveSharedLinkHeadersArg({})): Promise<FileFull> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "#remove_shared_link") as string, { method: "PUT", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeUpdateFileRemoveSharedLinkRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileFull(deserializeJson(response.text));
    }
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
    return { ["can_download"]: val.canDownload == void 0 ? void 0 : val.canDownload, ["can_preview"]: val.canPreview == void 0 ? void 0 : val.canPreview, ["can_edit"]: val.canEdit == void 0 ? void 0 : val.canEdit };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = val.can_download == void 0 ? void 0 : val.can_download;
    const canPreview: undefined | boolean = val.can_preview == void 0 ? void 0 : val.can_preview;
    const canEdit: undefined | boolean = val.can_edit == void 0 ? void 0 : val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileAddSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password == void 0 ? void 0 : val.password, ["vanity_name"]: val.vanityName == void 0 ? void 0 : val.vanityName, ["unshared_at"]: val.unsharedAt == void 0 ? void 0 : val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileAddSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFileAddSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = val.password == void 0 ? void 0 : val.password;
    const vanityName: undefined | string = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const unsharedAt: undefined | string = val.unshared_at == void 0 ? void 0 : val.unshared_at;
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
    return { ["can_download"]: val.canDownload == void 0 ? void 0 : val.canDownload, ["can_preview"]: val.canPreview == void 0 ? void 0 : val.canPreview, ["can_edit"]: val.canEdit == void 0 ? void 0 : val.canEdit };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField {
    const canDownload: undefined | boolean = val.can_download == void 0 ? void 0 : val.can_download;
    const canPreview: undefined | boolean = val.can_preview == void 0 ? void 0 : val.can_preview;
    const canEdit: undefined | boolean = val.can_edit == void 0 ? void 0 : val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField;
}
export function serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access), ["password"]: val.password == void 0 ? void 0 : val.password, ["vanity_name"]: val.vanityName == void 0 ? void 0 : val.vanityName, ["unshared_at"]: val.unsharedAt == void 0 ? void 0 : val.unsharedAt, ["permissions"]: val.permissions == void 0 ? void 0 : serializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldPermissionsField(val.permissions) };
}
export function deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField(val: any): UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkField {
    const access: undefined | UpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField = val.access == void 0 ? void 0 : deserializeUpdateFileUpdateSharedLinkRequestBodyArgSharedLinkFieldAccessField(val.access);
    const password: undefined | string = val.password == void 0 ? void 0 : val.password;
    const vanityName: undefined | string = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    const unsharedAt: undefined | string = val.unshared_at == void 0 ? void 0 : val.unshared_at;
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
