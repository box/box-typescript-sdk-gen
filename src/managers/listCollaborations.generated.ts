import { Collaborations } from "../schemas.generated.js";
import { deserializeCollaborations } from "../schemas.generated.js";
import { serializeCollaborations } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type ListCollaborationsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetFileCollaborationsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export interface GetFolderCollaborationsOptionsArg {
    readonly fields?: string;
}
export type GetCollaborationsStatusArg = "pending";
export interface GetCollaborationsOptionsArg {
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
}
export interface GetGroupCollaborationsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export class ListCollaborationsManager {
    readonly auth!: ListCollaborationsManagerAuthField;
    constructor(fields: Omit<ListCollaborationsManager, "getFileCollaborations" | "getFolderCollaborations" | "getCollaborations" | "getGroupCollaborations">) {
        Object.assign(this, fields);
    }
    async getFileCollaborations(fileId: string, options: GetFileCollaborationsOptionsArg = {} satisfies GetFileCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/collaborations") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async getFolderCollaborations(folderId: string, options: GetFolderCollaborationsOptionsArg = {} satisfies GetFolderCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/collaborations") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async getCollaborations(status: GetCollaborationsStatusArg, options: GetCollaborationsOptionsArg = {} satisfies GetCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations") as string, { method: "GET", params: { ["status"]: status, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
    async getGroupCollaborations(groupId: string, options: GetGroupCollaborationsOptionsArg = {} satisfies GetGroupCollaborationsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/", groupId, "/collaborations") as string, { method: "GET", params: { ["limit"]: options.limit, ["offset"]: options.offset }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeCollaborations(deserializeJson(response.text));
    }
}
