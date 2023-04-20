import { Collaboration } from "../schemas.generated.js";
import { deserializeCollaboration } from "../schemas.generated.js";
import { serializeCollaboration } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Collaborations } from "../schemas.generated.js";
import { deserializeCollaborations } from "../schemas.generated.js";
import { serializeCollaborations } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type UserCollaborationsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetCollaborationByIdOptionsArg {
    readonly fields?: string;
}
export type UpdateCollaborationByIdRequestBodyArgRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export type UpdateCollaborationByIdRequestBodyArgStatusField = "pending" | "accepted" | "rejected";
export interface UpdateCollaborationByIdRequestBodyArg {
    readonly role: UpdateCollaborationByIdRequestBodyArgRoleField;
    readonly status?: UpdateCollaborationByIdRequestBodyArgStatusField;
    readonly expiresAt?: string;
    readonly canViewPath?: boolean;
}
export type GetCollaborationsStatusArg = "pending";
export interface GetCollaborationsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
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
export interface CreateCollaborationOptionsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export class UserCollaborationsManager {
    readonly auth!: UserCollaborationsManagerAuthField;
    constructor(fields: Omit<UserCollaborationsManager, "getCollaborationById" | "updateCollaborationById" | "deleteCollaborationById" | "getCollaborations" | "createCollaboration">) {
        Object.assign(this, fields);
    }
    async getCollaborationById(collaborationId: string, options: GetCollaborationByIdOptionsArg = {} satisfies GetCollaborationByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaboration(deserializeJson(response.text));
    }
    async updateCollaborationById(collaborationId: string, requestBody: UpdateCollaborationByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaboration(deserializeJson(response.text));
    }
    async deleteCollaborationById(collaborationId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async getCollaborations(status: GetCollaborationsStatusArg, options: GetCollaborationsOptionsArg = {} satisfies GetCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "GET", params: { ["status"]: status, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async createCollaboration(requestBody: CreateCollaborationRequestBodyArg, options: CreateCollaborationOptionsArg = {} satisfies CreateCollaborationOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "POST", params: { ["fields"]: options.fields, ["notify"]: options.notify }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaboration(deserializeJson(response.text));
    }
}
