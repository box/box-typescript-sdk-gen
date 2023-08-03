import { serializeCollaboration } from "../schemas.generated.js";
import { deserializeCollaboration } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Collaboration } from "../schemas.generated.js";
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
export interface GetCollaborationByIdQueryParamsArg {
    readonly fields?: string;
}
export class GetCollaborationByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetCollaborationByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type UpdateCollaborationByIdRequestBodyArgRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export type UpdateCollaborationByIdRequestBodyArgStatusField = "pending" | "accepted" | "rejected";
export interface UpdateCollaborationByIdRequestBodyArg {
    readonly role: UpdateCollaborationByIdRequestBodyArgRoleField;
    readonly status?: UpdateCollaborationByIdRequestBodyArgStatusField;
    readonly expiresAt?: string;
    readonly canViewPath?: boolean;
}
export class UpdateCollaborationByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateCollaborationByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteCollaborationByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteCollaborationByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export type CreateCollaborationRequestBodyArgItemFieldTypeField = "file" | "folder";
export interface CreateCollaborationRequestBodyArgItemField {
    readonly type: CreateCollaborationRequestBodyArgItemFieldTypeField;
    readonly id: string;
}
export type CreateCollaborationRequestBodyArgAccessibleByFieldTypeField = "user" | "group";
export interface CreateCollaborationRequestBodyArgAccessibleByField {
    readonly type: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
    readonly id?: string;
    readonly login?: string;
}
export type CreateCollaborationRequestBodyArgRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export interface CreateCollaborationRequestBodyArg {
    readonly item: CreateCollaborationRequestBodyArgItemField;
    readonly accessibleBy: CreateCollaborationRequestBodyArgAccessibleByField;
    readonly role: CreateCollaborationRequestBodyArgRoleField;
    readonly canViewPath?: boolean;
    readonly expiresAt?: string;
}
export interface CreateCollaborationQueryParamsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export class CreateCollaborationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateCollaborationHeadersArg) {
        Object.assign(this, fields);
    }
}
export class UserCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UserCollaborationsManager, "getCollaborationById" | "updateCollaborationById" | "deleteCollaborationById" | "createCollaboration">) {
        Object.assign(this, fields);
    }
    async getCollaborationById(collaborationId: string, queryParams: GetCollaborationByIdQueryParamsArg = {} satisfies GetCollaborationByIdQueryParamsArg, headers: GetCollaborationByIdHeadersArg = new GetCollaborationByIdHeadersArg({})): Promise<Collaboration> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaboration(deserializeJson(response.text));
    }
    async updateCollaborationById(collaborationId: string, requestBody: UpdateCollaborationByIdRequestBodyArg, headers: UpdateCollaborationByIdHeadersArg = new UpdateCollaborationByIdHeadersArg({})): Promise<Collaboration> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeUpdateCollaborationByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaboration(deserializeJson(response.text));
    }
    async deleteCollaborationById(collaborationId: string, headers: DeleteCollaborationByIdHeadersArg = new DeleteCollaborationByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createCollaboration(requestBody: CreateCollaborationRequestBodyArg, queryParams: CreateCollaborationQueryParamsArg = {} satisfies CreateCollaborationQueryParamsArg, headers: CreateCollaborationHeadersArg = new CreateCollaborationHeadersArg({})): Promise<Collaboration> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["notify"]: toString(queryParams.notify) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "POST", params: queryParamsMap, headers: headersMap, body: serializeJson(serializeCreateCollaborationRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaboration(deserializeJson(response.text));
    }
}
export function serializeUpdateCollaborationByIdRequestBodyArgRoleField(val: UpdateCollaborationByIdRequestBodyArgRoleField): Json {
    return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyArgRoleField(val: any): UpdateCollaborationByIdRequestBodyArgRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateCollaborationByIdRequestBodyArgRoleField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    if (val == "owner") {
        return "owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateCollaborationByIdRequestBodyArgStatusField(val: UpdateCollaborationByIdRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeUpdateCollaborationByIdRequestBodyArgStatusField(val: any): UpdateCollaborationByIdRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateCollaborationByIdRequestBodyArgStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "accepted") {
        return "accepted";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateCollaborationByIdRequestBodyArg(val: UpdateCollaborationByIdRequestBodyArg): Json {
    return { ["role"]: serializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role), ["status"]: val.status == void 0 ? void 0 : serializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status), ["expires_at"]: val.expiresAt, ["can_view_path"]: val.canViewPath };
}
export function deserializeUpdateCollaborationByIdRequestBodyArg(val: any): UpdateCollaborationByIdRequestBodyArg {
    const role: UpdateCollaborationByIdRequestBodyArgRoleField = deserializeUpdateCollaborationByIdRequestBodyArgRoleField(val.role);
    const status: undefined | UpdateCollaborationByIdRequestBodyArgStatusField = val.status == void 0 ? void 0 : deserializeUpdateCollaborationByIdRequestBodyArgStatusField(val.status);
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const canViewPath: undefined | boolean = isJson(val.can_view_path, "boolean") ? val.can_view_path : void 0;
    return { role: role, status: status, expiresAt: expiresAt, canViewPath: canViewPath } satisfies UpdateCollaborationByIdRequestBodyArg;
}
export function serializeCreateCollaborationRequestBodyArgItemFieldTypeField(val: CreateCollaborationRequestBodyArgItemFieldTypeField): Json {
    return val;
}
export function deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val: any): CreateCollaborationRequestBodyArgItemFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationRequestBodyArgItemFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateCollaborationRequestBodyArgItemField(val: CreateCollaborationRequestBodyArgItemField): Json {
    return { ["type"]: serializeCreateCollaborationRequestBodyArgItemFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateCollaborationRequestBodyArgItemField(val: any): CreateCollaborationRequestBodyArgItemField {
    const type: CreateCollaborationRequestBodyArgItemFieldTypeField = deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateCollaborationRequestBodyArgItemField;
}
export function serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField): Json {
    return val;
}
export function deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val: any): CreateCollaborationRequestBodyArgAccessibleByFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationRequestBodyArgAccessibleByFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    if (val == "group") {
        return "group";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateCollaborationRequestBodyArgAccessibleByField(val: CreateCollaborationRequestBodyArgAccessibleByField): Json {
    return { ["type"]: serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val.type), ["id"]: val.id, ["login"]: val.login };
}
export function deserializeCreateCollaborationRequestBodyArgAccessibleByField(val: any): CreateCollaborationRequestBodyArgAccessibleByField {
    const type: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField = deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    return { type: type, id: id, login: login } satisfies CreateCollaborationRequestBodyArgAccessibleByField;
}
export function serializeCreateCollaborationRequestBodyArgRoleField(val: CreateCollaborationRequestBodyArgRoleField): Json {
    return val;
}
export function deserializeCreateCollaborationRequestBodyArgRoleField(val: any): CreateCollaborationRequestBodyArgRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateCollaborationRequestBodyArgRoleField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateCollaborationRequestBodyArg(val: CreateCollaborationRequestBodyArg): Json {
    return { ["item"]: serializeCreateCollaborationRequestBodyArgItemField(val.item), ["accessible_by"]: serializeCreateCollaborationRequestBodyArgAccessibleByField(val.accessibleBy), ["role"]: serializeCreateCollaborationRequestBodyArgRoleField(val.role), ["can_view_path"]: val.canViewPath, ["expires_at"]: val.expiresAt };
}
export function deserializeCreateCollaborationRequestBodyArg(val: any): CreateCollaborationRequestBodyArg {
    const item: CreateCollaborationRequestBodyArgItemField = deserializeCreateCollaborationRequestBodyArgItemField(val.item);
    const accessibleBy: CreateCollaborationRequestBodyArgAccessibleByField = deserializeCreateCollaborationRequestBodyArgAccessibleByField(val.accessible_by);
    const role: CreateCollaborationRequestBodyArgRoleField = deserializeCreateCollaborationRequestBodyArgRoleField(val.role);
    const canViewPath: undefined | boolean = isJson(val.can_view_path, "boolean") ? val.can_view_path : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    return { item: item, accessibleBy: accessibleBy, role: role, canViewPath: canViewPath, expiresAt: expiresAt } satisfies CreateCollaborationRequestBodyArg;
}
