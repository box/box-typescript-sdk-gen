import { Collaborations } from "../schemas.generated.js";
import { deserializeCollaborations } from "../schemas.generated.js";
import { serializeCollaborations } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Collaboration } from "../schemas.generated.js";
import { deserializeCollaboration } from "../schemas.generated.js";
import { serializeCollaboration } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type ListCollaborationsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetFilesIdCollaborationsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export interface GetFoldersIdCollaborationsOptionsArg {
    readonly fields?: string;
}
export type GetCollaborationsStatusArg = "pending";
export interface GetCollaborationsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export type PostCollaborationsRequestBodyArgItemFieldTypeField = "file" | "folder";
export interface PostCollaborationsRequestBodyArgItemField {
    readonly type: PostCollaborationsRequestBodyArgItemFieldTypeField;
    readonly id: string;
}
export type PostCollaborationsRequestBodyArgAccessibleByFieldTypeField = "user" | "group";
export interface PostCollaborationsRequestBodyArgAccessibleByField {
    readonly type: PostCollaborationsRequestBodyArgAccessibleByFieldTypeField;
    readonly id?: string;
    readonly login?: string;
}
export type PostCollaborationsRequestBodyArgRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export interface PostCollaborationsRequestBodyArg {
    readonly item: PostCollaborationsRequestBodyArgItemField;
    readonly accessibleBy: PostCollaborationsRequestBodyArgAccessibleByField;
    readonly role: PostCollaborationsRequestBodyArgRoleField;
    readonly canViewPath?: boolean;
    readonly expiresAt?: string;
}
export interface PostCollaborationsOptionsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export interface GetGroupsIdCollaborationsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export class ListCollaborationsManager {
    readonly auth!: ListCollaborationsManagerAuthField;
    constructor(fields: Omit<ListCollaborationsManager, "getFilesIdCollaborations" | "getFoldersIdCollaborations" | "getCollaborations" | "postCollaborations" | "getGroupsIdCollaborations">) {
        Object.assign(this, fields);
    }
    async getFilesIdCollaborations(fileId: string, options: GetFilesIdCollaborationsOptionsArg = {} satisfies GetFilesIdCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborations(await deserializeJson(response.text));
    }
    async getFoldersIdCollaborations(folderId: string, options: GetFoldersIdCollaborationsOptionsArg = {} satisfies GetFoldersIdCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborations(await deserializeJson(response.text));
    }
    async getCollaborations(status: GetCollaborationsStatusArg, options: GetCollaborationsOptionsArg = {} satisfies GetCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "GET", params: { ["status"]: status, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborations(await deserializeJson(response.text));
    }
    async postCollaborations(requestBody: PostCollaborationsRequestBodyArg, options: PostCollaborationsOptionsArg = {} satisfies PostCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "POST", params: { ["fields"]: options.fields, ["notify"]: options.notify }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaboration(await deserializeJson(response.text));
    }
    async getGroupsIdCollaborations(groupId: string, options: GetGroupsIdCollaborationsOptionsArg = {} satisfies GetGroupsIdCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations") as string, { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaborations(await deserializeJson(response.text));
    }
}
