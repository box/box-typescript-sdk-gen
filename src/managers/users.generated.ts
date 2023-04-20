import { Users } from "../schemas.generated.js";
import { deserializeUsers } from "../schemas.generated.js";
import { serializeUsers } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { User } from "../schemas.generated.js";
import { deserializeUser } from "../schemas.generated.js";
import { serializeUser } from "../schemas.generated.js";
import { TrackingCode } from "../schemas.generated.js";
import { deserializeTrackingCode } from "../schemas.generated.js";
import { serializeTrackingCode } from "../schemas.generated.js";
import { UserFull } from "../schemas.generated.js";
import { deserializeUserFull } from "../schemas.generated.js";
import { serializeUserFull } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type UsersManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
export class UsersManager {
    readonly auth!: UsersManagerAuthField;
    constructor(fields: Omit<UsersManager, "getUsers" | "createUser" | "getUserMe" | "getUserById" | "updateUserById" | "deleteUserById">) {
        Object.assign(this, fields);
    }
    async getUsers(options: GetUsersOptionsArg = {} satisfies GetUsersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users") as string, { method: "GET", params: { ["filter_term"]: options.filterTerm, ["user_type"]: options.userType, ["external_app_user_id"]: options.externalAppUserId, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit, ["usemarker"]: options.usemarker, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUsers(deserializeJson(response.text));
    }
    async createUser(requestBody: CreateUserRequestBodyArg, options: CreateUserOptionsArg = {} satisfies CreateUserOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUser(deserializeJson(response.text));
    }
    async getUserMe(options: GetUserMeOptionsArg = {} satisfies GetUserMeOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/me") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUserFull(deserializeJson(response.text));
    }
    async getUserById(userId: string, options: GetUserByIdOptionsArg = {} satisfies GetUserByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUserFull(deserializeJson(response.text));
    }
    async updateUserById(userId: string, requestBody: UpdateUserByIdRequestBodyArg, options: UpdateUserByIdOptionsArg = {} satisfies UpdateUserByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeUserFull(deserializeJson(response.text));
    }
    async deleteUserById(userId: string, options: DeleteUserByIdOptionsArg = {} satisfies DeleteUserByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "DELETE", params: { ["notify"]: options.notify, ["force"]: options.force }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
