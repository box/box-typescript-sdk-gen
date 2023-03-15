import { Collaboration } from "../schemas.generated.js";
import { deserializeCollaboration } from "../schemas.generated.js";
import { serializeCollaboration } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type UserCollaborationsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetCollaborationsIdOptionsArg {
    readonly fields?: string;
}
export type PutCollaborationsIdRequestBodyArgRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export type PutCollaborationsIdRequestBodyArgStatusField = "pending" | "accepted" | "rejected";
export interface PutCollaborationsIdRequestBodyArg {
    readonly role: PutCollaborationsIdRequestBodyArgRoleField;
    readonly status?: PutCollaborationsIdRequestBodyArgStatusField;
    readonly expiresAt?: string;
    readonly canViewPath?: boolean;
}
export class UserCollaborationsManager {
    readonly auth!: UserCollaborationsManagerAuthField;
    constructor(fields: Omit<UserCollaborationsManager, "getCollaborationsId" | "putCollaborationsId" | "deleteCollaborationsId">) {
        Object.assign(this, fields);
    }
    async getCollaborationsId(collaborationId: string, options: GetCollaborationsIdOptionsArg = {} satisfies GetCollaborationsIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaboration(await deserializeJson(response.text));
    }
    async putCollaborationsId(collaborationId: string, requestBody: PutCollaborationsIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeCollaboration(await deserializeJson(response.text));
    }
    async deleteCollaborationsId(collaborationId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/collaborations/", collaborationId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
