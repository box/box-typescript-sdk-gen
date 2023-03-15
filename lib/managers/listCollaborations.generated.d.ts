import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
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
export declare class ListCollaborationsManager {
    readonly auth: ListCollaborationsManagerAuthField;
    constructor(fields: Omit<ListCollaborationsManager, "getFilesIdCollaborations" | "getFoldersIdCollaborations" | "getCollaborations" | "postCollaborations" | "getGroupsIdCollaborations">);
    getFilesIdCollaborations(fileId: string, options?: GetFilesIdCollaborationsOptionsArg): Promise<any>;
    getFoldersIdCollaborations(folderId: string, options?: GetFoldersIdCollaborationsOptionsArg): Promise<any>;
    getCollaborations(status: GetCollaborationsStatusArg, options?: GetCollaborationsOptionsArg): Promise<any>;
    postCollaborations(requestBody: PostCollaborationsRequestBodyArg, options?: PostCollaborationsOptionsArg): Promise<any>;
    getGroupsIdCollaborations(groupId: string, options?: GetGroupsIdCollaborationsOptionsArg): Promise<any>;
}
