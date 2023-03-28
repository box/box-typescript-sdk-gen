import { TrackingCode } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type UsersManagerAuthField = DeveloperTokenAuth | CCGAuth;
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
export type PostUsersRequestBodyArgRoleField = "coadmin" | "user";
export type PostUsersRequestBodyArgStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface PostUsersRequestBodyArg {
    readonly name: string;
    readonly login?: string;
    readonly isPlatformAccessOnly?: boolean;
    readonly role?: PostUsersRequestBodyArgRoleField;
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
    readonly status?: PostUsersRequestBodyArgStatusField;
    readonly externalAppUserId?: string;
}
export interface PostUsersOptionsArg {
    readonly fields?: string;
}
export interface GetUsersMeOptionsArg {
    readonly fields?: string;
}
export interface GetUsersIdOptionsArg {
    readonly fields?: string;
}
export type PutUsersIdRequestBodyArgRoleField = "coadmin" | "user";
export type PutUsersIdRequestBodyArgStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface PutUsersIdRequestBodyArgNotificationEmailField {
    readonly email?: string;
}
export interface PutUsersIdRequestBodyArg {
    readonly enterprise?: string;
    readonly notify?: boolean;
    readonly name?: string;
    readonly login?: string;
    readonly role?: PutUsersIdRequestBodyArgRoleField;
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
    readonly status?: PutUsersIdRequestBodyArgStatusField;
    readonly spaceAmount?: number;
    readonly notificationEmail?: PutUsersIdRequestBodyArgNotificationEmailField;
    readonly externalAppUserId?: string;
}
export interface PutUsersIdOptionsArg {
    readonly fields?: string;
}
export interface DeleteUsersIdOptionsArg {
    readonly notify?: boolean;
    readonly force?: boolean;
}
export declare class UsersManager {
    readonly auth: UsersManagerAuthField;
    constructor(fields: Omit<UsersManager, "getUsers" | "postUsers" | "getUsersMe" | "getUsersId" | "putUsersId" | "deleteUsersId">);
    getUsers(options?: GetUsersOptionsArg): Promise<any>;
    postUsers(requestBody: PostUsersRequestBodyArg, options?: PostUsersOptionsArg): Promise<any>;
    getUsersMe(options?: GetUsersMeOptionsArg): Promise<any>;
    getUsersId(userId: string, options?: GetUsersIdOptionsArg): Promise<any>;
    putUsersId(userId: string, requestBody: PutUsersIdRequestBodyArg, options?: PutUsersIdOptionsArg): Promise<any>;
    deleteUsersId(userId: string, options?: DeleteUsersIdOptionsArg): Promise<any>;
}
