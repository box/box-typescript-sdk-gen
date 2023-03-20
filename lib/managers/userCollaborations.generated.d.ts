import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type UserCollaborationsManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export declare class UserCollaborationsManager {
    readonly auth: UserCollaborationsManagerAuthField;
    constructor(fields: Omit<UserCollaborationsManager, "getCollaborationsId" | "putCollaborationsId" | "deleteCollaborationsId">);
    getCollaborationsId(collaborationId: string, options?: GetCollaborationsIdOptionsArg): Promise<any>;
    putCollaborationsId(collaborationId: string, requestBody: PutCollaborationsIdRequestBodyArg): Promise<any>;
    deleteCollaborationsId(collaborationId: string): Promise<any>;
}
