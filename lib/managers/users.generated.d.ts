import { TrackingCode } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type UsersManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetUsersOptionsArgUserTypeField = "all" | "managed" | "external";
export interface GetUsersOptionsArg {
    readonly filterTerm?: string;
    readonly userType?: GetUsersOptionsArgUserTypeField;
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
export interface CreateUserOptionsArg {
    readonly fields?: string;
}
export interface GetUserMeOptionsArg {
    readonly fields?: string;
}
export interface GetUserByIdOptionsArg {
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
export interface UpdateUserByIdOptionsArg {
    readonly fields?: string;
}
export interface DeleteUserByIdOptionsArg {
    readonly notify?: boolean;
    readonly force?: boolean;
}
export declare class UsersManager {
    readonly auth: UsersManagerAuthField;
    constructor(fields: Omit<UsersManager, "getUsers" | "createUser" | "getUserMe" | "getUserById" | "updateUserById" | "deleteUserById">);
    getUsers(options?: GetUsersOptionsArg): Promise<any>;
    createUser(requestBody: CreateUserRequestBodyArg, options?: CreateUserOptionsArg): Promise<any>;
    getUserMe(options?: GetUserMeOptionsArg): Promise<any>;
    getUserById(userId: string, options?: GetUserByIdOptionsArg): Promise<any>;
    updateUserById(userId: string, requestBody: UpdateUserByIdRequestBodyArg, options?: UpdateUserByIdOptionsArg): Promise<any>;
    deleteUserById(userId: string, options?: DeleteUserByIdOptionsArg): Promise<any>;
}
