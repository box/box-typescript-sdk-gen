import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
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
export interface GetGroupCollaborationsOptionsArg {
    readonly limit?: number;
    readonly offset?: number;
}
export declare class ListCollaborationsManager {
    readonly auth: ListCollaborationsManagerAuthField;
    constructor(fields: Omit<ListCollaborationsManager, "getFileCollaborations" | "getFolderCollaborations" | "getCollaborations" | "createCollaboration" | "getGroupCollaborations">);
    getFileCollaborations(fileId: string, options?: GetFileCollaborationsOptionsArg): Promise<any>;
    getFolderCollaborations(folderId: string, options?: GetFolderCollaborationsOptionsArg): Promise<any>;
    getCollaborations(status: GetCollaborationsStatusArg, options?: GetCollaborationsOptionsArg): Promise<any>;
    createCollaboration(requestBody: CreateCollaborationRequestBodyArg, options?: CreateCollaborationOptionsArg): Promise<any>;
    getGroupCollaborations(groupId: string, options?: GetGroupCollaborationsOptionsArg): Promise<any>;
}
