import { Users } from "../schemas.generated.js";
import { User } from "../schemas.generated.js";
import { TrackingCode } from "../schemas.generated.js";
import { UserFull } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetUsersQueryParamsArgUserTypeField = "all" | "managed" | "external";
export interface GetUsersQueryParamsArg {
    readonly filterTerm?: string;
    readonly userType?: GetUsersQueryParamsArgUserTypeField;
    readonly externalAppUserId?: string;
    readonly fields?: string;
    readonly offset?: number;
    readonly limit?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
}
export declare class GetUsersHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetUsersHeadersArg);
}
export type CreateUserRequestBodyArgRoleField = "coadmin" | "user";
export type CreateUserRequestBodyArgStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface CreateUserRequestBodyArg {
    readonly name: string;
    readonly login?: string;
    readonly isPlatformAccessOnly?: boolean;
    readonly role?: CreateUserRequestBodyArgRoleField;
    readonly language?: string;
    readonly isSyncEnabled?: boolean;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly spaceAmount?: number;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly timezone?: string;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly status?: CreateUserRequestBodyArgStatusField;
    readonly externalAppUserId?: string;
}
export interface CreateUserQueryParamsArg {
    readonly fields?: string;
}
export declare class CreateUserHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateUserHeadersArg);
}
export interface GetUserMeQueryParamsArg {
    readonly fields?: string;
}
export declare class GetUserMeHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetUserMeHeadersArg);
}
export interface GetUserByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetUserByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetUserByIdHeadersArg);
}
export type UpdateUserByIdRequestBodyArgRoleField = "coadmin" | "user";
export type UpdateUserByIdRequestBodyArgStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface UpdateUserByIdRequestBodyArgNotificationEmailField {
    readonly email?: string;
}
export interface UpdateUserByIdRequestBodyArg {
    readonly enterprise?: string;
    readonly notify?: boolean;
    readonly name?: string;
    readonly login?: string;
    readonly role?: UpdateUserByIdRequestBodyArgRoleField;
    readonly language?: string;
    readonly isSyncEnabled?: boolean;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly timezone?: string;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly isPasswordResetRequired?: boolean;
    readonly status?: UpdateUserByIdRequestBodyArgStatusField;
    readonly spaceAmount?: number;
    readonly notificationEmail?: UpdateUserByIdRequestBodyArgNotificationEmailField;
    readonly externalAppUserId?: string;
}
export interface UpdateUserByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class UpdateUserByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateUserByIdHeadersArg);
}
export interface DeleteUserByIdQueryParamsArg {
    readonly notify?: boolean;
    readonly force?: boolean;
}
export declare class DeleteUserByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteUserByIdHeadersArg);
}
export declare class UsersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UsersManager, "getUsers" | "createUser" | "getUserMe" | "getUserById" | "updateUserById" | "deleteUserById">);
    getUsers(queryParams?: GetUsersQueryParamsArg, headers?: GetUsersHeadersArg): Promise<Users>;
    createUser(requestBody: CreateUserRequestBodyArg, queryParams?: CreateUserQueryParamsArg, headers?: CreateUserHeadersArg): Promise<User>;
    getUserMe(queryParams?: GetUserMeQueryParamsArg, headers?: GetUserMeHeadersArg): Promise<UserFull>;
    getUserById(userId: string, queryParams?: GetUserByIdQueryParamsArg, headers?: GetUserByIdHeadersArg): Promise<UserFull>;
    updateUserById(userId: string, requestBody: UpdateUserByIdRequestBodyArg, queryParams?: UpdateUserByIdQueryParamsArg, headers?: UpdateUserByIdHeadersArg): Promise<UserFull>;
    deleteUserById(userId: string, queryParams?: DeleteUserByIdQueryParamsArg, headers?: DeleteUserByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateUserRequestBodyArgRoleField(val: CreateUserRequestBodyArgRoleField): Json;
export declare function deserializeCreateUserRequestBodyArgRoleField(val: any): CreateUserRequestBodyArgRoleField;
export declare function serializeCreateUserRequestBodyArgStatusField(val: CreateUserRequestBodyArgStatusField): Json;
export declare function deserializeCreateUserRequestBodyArgStatusField(val: any): CreateUserRequestBodyArgStatusField;
export declare function serializeCreateUserRequestBodyArg(val: CreateUserRequestBodyArg): Json;
export declare function deserializeCreateUserRequestBodyArg(val: any): CreateUserRequestBodyArg;
export declare function serializeUpdateUserByIdRequestBodyArgRoleField(val: UpdateUserByIdRequestBodyArgRoleField): Json;
export declare function deserializeUpdateUserByIdRequestBodyArgRoleField(val: any): UpdateUserByIdRequestBodyArgRoleField;
export declare function serializeUpdateUserByIdRequestBodyArgStatusField(val: UpdateUserByIdRequestBodyArgStatusField): Json;
export declare function deserializeUpdateUserByIdRequestBodyArgStatusField(val: any): UpdateUserByIdRequestBodyArgStatusField;
export declare function serializeUpdateUserByIdRequestBodyArgNotificationEmailField(val: UpdateUserByIdRequestBodyArgNotificationEmailField): Json;
export declare function deserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val: any): UpdateUserByIdRequestBodyArgNotificationEmailField;
export declare function serializeUpdateUserByIdRequestBodyArg(val: UpdateUserByIdRequestBodyArg): Json;
export declare function deserializeUpdateUserByIdRequestBodyArg(val: any): UpdateUserByIdRequestBodyArg;
