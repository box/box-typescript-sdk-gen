import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
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
export declare class UserCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UserCollaborationsManager, "getCollaborationById" | "updateCollaborationById" | "deleteCollaborationById" | "createCollaboration">);
    getCollaborationById(collaborationId: string, options?: GetCollaborationByIdOptionsArg): Promise<any>;
    updateCollaborationById(collaborationId: string, requestBody: UpdateCollaborationByIdRequestBodyArg): Promise<any>;
    deleteCollaborationById(collaborationId: string): Promise<any>;
    createCollaboration(requestBody: CreateCollaborationRequestBodyArg, options?: CreateCollaborationOptionsArg): Promise<any>;
}
