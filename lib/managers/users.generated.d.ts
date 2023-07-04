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
export interface GetUserMeQueryParamsArg {
    readonly fields?: string;
}
export interface GetUserByIdQueryParamsArg {
    readonly fields?: string;
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
export interface DeleteUserByIdQueryParamsArg {
    readonly notify?: boolean;
    readonly force?: boolean;
}
export declare class UsersManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<UsersManager, "getUsers" | "createUser" | "getUserMe" | "getUserById" | "updateUserById" | "deleteUserById">);
    getUsers(queryParams?: undefined | GetUsersQueryParamsArg): Promise<Users>;
    createUser(requestBody: CreateUserRequestBodyArg, queryParams?: undefined | CreateUserQueryParamsArg): Promise<User>;
    getUserMe(queryParams?: undefined | GetUserMeQueryParamsArg): Promise<UserFull>;
    getUserById(userId: string, queryParams?: undefined | GetUserByIdQueryParamsArg): Promise<UserFull>;
    updateUserById(userId: string, requestBody: UpdateUserByIdRequestBodyArg, queryParams?: undefined | UpdateUserByIdQueryParamsArg): Promise<UserFull>;
    deleteUserById(userId: string, queryParams?: undefined | DeleteUserByIdQueryParamsArg): Promise<any>;
}
export declare function newSerializeGetUsersQueryParamsArgUserTypeField(val: GetUsersQueryParamsArgUserTypeField): Json;
export declare function newDeserializeGetUsersQueryParamsArgUserTypeField(val: any): GetUsersQueryParamsArgUserTypeField;
export declare function newSerializeGetUsersQueryParamsArg(val: GetUsersQueryParamsArg): Json;
export declare function newDeserializeGetUsersQueryParamsArg(val: any): GetUsersQueryParamsArg;
export declare function newSerializeCreateUserRequestBodyArgRoleField(val: CreateUserRequestBodyArgRoleField): Json;
export declare function newDeserializeCreateUserRequestBodyArgRoleField(val: any): CreateUserRequestBodyArgRoleField;
export declare function newSerializeCreateUserRequestBodyArgStatusField(val: CreateUserRequestBodyArgStatusField): Json;
export declare function newDeserializeCreateUserRequestBodyArgStatusField(val: any): CreateUserRequestBodyArgStatusField;
export declare function newSerializeCreateUserRequestBodyArg(val: CreateUserRequestBodyArg): Json;
export declare function newDeserializeCreateUserRequestBodyArg(val: any): CreateUserRequestBodyArg;
export declare function newSerializeCreateUserQueryParamsArg(val: CreateUserQueryParamsArg): Json;
export declare function newDeserializeCreateUserQueryParamsArg(val: any): CreateUserQueryParamsArg;
export declare function newSerializeGetUserMeQueryParamsArg(val: GetUserMeQueryParamsArg): Json;
export declare function newDeserializeGetUserMeQueryParamsArg(val: any): GetUserMeQueryParamsArg;
export declare function newSerializeGetUserByIdQueryParamsArg(val: GetUserByIdQueryParamsArg): Json;
export declare function newDeserializeGetUserByIdQueryParamsArg(val: any): GetUserByIdQueryParamsArg;
export declare function newSerializeUpdateUserByIdRequestBodyArgRoleField(val: UpdateUserByIdRequestBodyArgRoleField): Json;
export declare function newDeserializeUpdateUserByIdRequestBodyArgRoleField(val: any): UpdateUserByIdRequestBodyArgRoleField;
export declare function newSerializeUpdateUserByIdRequestBodyArgStatusField(val: UpdateUserByIdRequestBodyArgStatusField): Json;
export declare function newDeserializeUpdateUserByIdRequestBodyArgStatusField(val: any): UpdateUserByIdRequestBodyArgStatusField;
export declare function newSerializeUpdateUserByIdRequestBodyArgNotificationEmailField(val: UpdateUserByIdRequestBodyArgNotificationEmailField): Json;
export declare function newDeserializeUpdateUserByIdRequestBodyArgNotificationEmailField(val: any): UpdateUserByIdRequestBodyArgNotificationEmailField;
export declare function newSerializeUpdateUserByIdRequestBodyArg(val: UpdateUserByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateUserByIdRequestBodyArg(val: any): UpdateUserByIdRequestBodyArg;
export declare function newSerializeUpdateUserByIdQueryParamsArg(val: UpdateUserByIdQueryParamsArg): Json;
export declare function newDeserializeUpdateUserByIdQueryParamsArg(val: any): UpdateUserByIdQueryParamsArg;
export declare function newSerializeDeleteUserByIdQueryParamsArg(val: DeleteUserByIdQueryParamsArg): Json;
export declare function newDeserializeDeleteUserByIdQueryParamsArg(val: any): DeleteUserByIdQueryParamsArg;
