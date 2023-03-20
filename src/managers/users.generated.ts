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
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
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
export class UsersManager {
    readonly auth!: UsersManagerAuthField;
    constructor(fields: Omit<UsersManager, "getUsers" | "postUsers" | "getUsersMe" | "getUsersId" | "putUsersId" | "deleteUsersId">) {
        Object.assign(this, fields);
    }
    async getUsers(options: GetUsersOptionsArg = {} satisfies GetUsersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users") as string, { method: "GET", params: { ["filter_term"]: options.filterTerm, ["user_type"]: options.userType, ["external_app_user_id"]: options.externalAppUserId, ["fields"]: options.fields, ["offset"]: options.offset, ["limit"]: options.limit, ["usemarker"]: options.usemarker, ["marker"]: options.marker }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUsers(deserializeJSON(response.text) as JSON);
    }
    async postUsers(requestBody: PostUsersRequestBodyArg, options: PostUsersOptionsArg = {} satisfies PostUsersOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users") as string, { method: "POST", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUser(deserializeJSON(response.text) as JSON);
    }
    async getUsersMe(options: GetUsersMeOptionsArg = {} satisfies GetUsersMeOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/me") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUser(deserializeJSON(response.text) as JSON);
    }
    async getUsersId(userId: string, options: GetUsersIdOptionsArg = {} satisfies GetUsersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUser(deserializeJSON(response.text) as JSON);
    }
    async putUsersId(userId: string, requestBody: PutUsersIdRequestBodyArg, options: PutUsersIdOptionsArg = {} satisfies PutUsersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "PUT", params: { ["fields"]: options.fields }, body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeUser(deserializeJSON(response.text) as JSON);
    }
    async deleteUsersId(userId: string, options: DeleteUsersIdOptionsArg = {} satisfies DeleteUsersIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId) as string, { method: "DELETE", params: { ["notify"]: options.notify, ["force"]: options.force }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
