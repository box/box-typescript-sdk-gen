import { Collaboration } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetCollaborationByIdQueryParamsArg {
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
export interface CreateCollaborationQueryParamsArg {
    readonly fields?: string;
    readonly notify?: boolean;
}
export declare class UserCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UserCollaborationsManager, "getCollaborationById" | "updateCollaborationById" | "deleteCollaborationById" | "createCollaboration">);
    getCollaborationById(collaborationId: string, queryParams?: GetCollaborationByIdQueryParamsArg): Promise<Collaboration>;
    updateCollaborationById(collaborationId: string, requestBody: UpdateCollaborationByIdRequestBodyArg): Promise<Collaboration>;
    deleteCollaborationById(collaborationId: string): Promise<any>;
    createCollaboration(requestBody: CreateCollaborationRequestBodyArg, queryParams?: CreateCollaborationQueryParamsArg): Promise<Collaboration>;
}
export declare function serializeGetCollaborationByIdQueryParamsArg(val: GetCollaborationByIdQueryParamsArg): Json;
export declare function deserializeGetCollaborationByIdQueryParamsArg(val: any): GetCollaborationByIdQueryParamsArg;
export declare function serializeUpdateCollaborationByIdRequestBodyArgRoleField(val: UpdateCollaborationByIdRequestBodyArgRoleField): Json;
export declare function deserializeUpdateCollaborationByIdRequestBodyArgRoleField(val: any): UpdateCollaborationByIdRequestBodyArgRoleField;
export declare function serializeUpdateCollaborationByIdRequestBodyArgStatusField(val: UpdateCollaborationByIdRequestBodyArgStatusField): Json;
export declare function deserializeUpdateCollaborationByIdRequestBodyArgStatusField(val: any): UpdateCollaborationByIdRequestBodyArgStatusField;
export declare function serializeUpdateCollaborationByIdRequestBodyArg(val: UpdateCollaborationByIdRequestBodyArg): Json;
export declare function deserializeUpdateCollaborationByIdRequestBodyArg(val: any): UpdateCollaborationByIdRequestBodyArg;
export declare function serializeCreateCollaborationRequestBodyArgItemFieldTypeField(val: CreateCollaborationRequestBodyArgItemFieldTypeField): Json;
export declare function deserializeCreateCollaborationRequestBodyArgItemFieldTypeField(val: any): CreateCollaborationRequestBodyArgItemFieldTypeField;
export declare function serializeCreateCollaborationRequestBodyArgItemField(val: CreateCollaborationRequestBodyArgItemField): Json;
export declare function deserializeCreateCollaborationRequestBodyArgItemField(val: any): CreateCollaborationRequestBodyArgItemField;
export declare function serializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val: CreateCollaborationRequestBodyArgAccessibleByFieldTypeField): Json;
export declare function deserializeCreateCollaborationRequestBodyArgAccessibleByFieldTypeField(val: any): CreateCollaborationRequestBodyArgAccessibleByFieldTypeField;
export declare function serializeCreateCollaborationRequestBodyArgAccessibleByField(val: CreateCollaborationRequestBodyArgAccessibleByField): Json;
export declare function deserializeCreateCollaborationRequestBodyArgAccessibleByField(val: any): CreateCollaborationRequestBodyArgAccessibleByField;
export declare function serializeCreateCollaborationRequestBodyArgRoleField(val: CreateCollaborationRequestBodyArgRoleField): Json;
export declare function deserializeCreateCollaborationRequestBodyArgRoleField(val: any): CreateCollaborationRequestBodyArgRoleField;
export declare function serializeCreateCollaborationRequestBodyArg(val: CreateCollaborationRequestBodyArg): Json;
export declare function deserializeCreateCollaborationRequestBodyArg(val: any): CreateCollaborationRequestBodyArg;
export declare function serializeCreateCollaborationQueryParamsArg(val: CreateCollaborationQueryParamsArg): Json;
export declare function deserializeCreateCollaborationQueryParamsArg(val: any): CreateCollaborationQueryParamsArg;
