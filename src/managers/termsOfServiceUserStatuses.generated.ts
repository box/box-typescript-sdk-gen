import { TermsOfServiceUserStatuses } from "../schemas.generated.js";
import { deserializeTermsOfServiceUserStatuses } from "../schemas.generated.js";
import { serializeTermsOfServiceUserStatuses } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { TermsOfServiceUserStatus } from "../schemas.generated.js";
import { deserializeTermsOfServiceUserStatus } from "../schemas.generated.js";
import { serializeTermsOfServiceUserStatus } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TermsOfServiceUserStatusesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export interface GetTermsOfServiceUserStatusesOptionsArg {
    readonly userId?: string;
}
export type PostTermsOfServiceUserStatusesRequestBodyArgTosFieldTypeField = "terms_of_service";
export interface PostTermsOfServiceUserStatusesRequestBodyArgTosField {
    readonly type: PostTermsOfServiceUserStatusesRequestBodyArgTosFieldTypeField;
    readonly id: string;
}
export type PostTermsOfServiceUserStatusesRequestBodyArgUserFieldTypeField = "user";
export interface PostTermsOfServiceUserStatusesRequestBodyArgUserField {
    readonly type: PostTermsOfServiceUserStatusesRequestBodyArgUserFieldTypeField;
    readonly id: string;
}
export interface PostTermsOfServiceUserStatusesRequestBodyArg {
    readonly tos: PostTermsOfServiceUserStatusesRequestBodyArgTosField;
    readonly user: PostTermsOfServiceUserStatusesRequestBodyArgUserField;
    readonly isAccepted: boolean;
}
export interface PutTermsOfServiceUserStatusesIdRequestBodyArg {
    readonly isAccepted: boolean;
}
export class TermsOfServiceUserStatusesManager {
    readonly auth!: TermsOfServiceUserStatusesManagerAuthField;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, "getTermsOfServiceUserStatuses" | "postTermsOfServiceUserStatuses" | "putTermsOfServiceUserStatusesId">) {
        Object.assign(this, fields);
    }
    async getTermsOfServiceUserStatuses(tosId: string, options: GetTermsOfServiceUserStatusesOptionsArg = {} satisfies GetTermsOfServiceUserStatusesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses") as string, { method: "GET", params: { ["tos_id"]: tosId, ["user_id"]: options.userId }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTermsOfServiceUserStatuses(await deserializeJson(response.text));
    }
    async postTermsOfServiceUserStatuses(requestBody: PostTermsOfServiceUserStatusesRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTermsOfServiceUserStatus(await deserializeJson(response.text));
    }
    async putTermsOfServiceUserStatusesId(termsOfServiceUserStatusId: string, requestBody: PutTermsOfServiceUserStatusesIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses/", termsOfServiceUserStatusId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTermsOfServiceUserStatus(await deserializeJson(response.text));
    }
}
