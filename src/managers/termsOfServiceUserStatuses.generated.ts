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
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TermsOfServiceUserStatusesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetTermOfServiceUserStatusesOptionsArg {
    readonly userId?: string;
}
export type CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = "terms_of_service";
export interface CreateTermOfServiceUserStatusRequestBodyArgTosField {
    readonly type: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
    readonly id: string;
}
export type CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = "user";
export interface CreateTermOfServiceUserStatusRequestBodyArgUserField {
    readonly type: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
    readonly id: string;
}
export interface CreateTermOfServiceUserStatusRequestBodyArg {
    readonly tos: CreateTermOfServiceUserStatusRequestBodyArgTosField;
    readonly user: CreateTermOfServiceUserStatusRequestBodyArgUserField;
    readonly isAccepted: boolean;
}
export interface UpdateTermOfServiceUserStatusByIdRequestBodyArg {
    readonly isAccepted: boolean;
}
export class TermsOfServiceUserStatusesManager {
    readonly auth!: TermsOfServiceUserStatusesManagerAuthField;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, "getTermOfServiceUserStatuses" | "createTermOfServiceUserStatus" | "updateTermOfServiceUserStatusById">) {
        Object.assign(this, fields);
    }
    async getTermOfServiceUserStatuses(tosId: string, options: GetTermOfServiceUserStatusesOptionsArg = {} satisfies GetTermOfServiceUserStatusesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses") as string, { method: "GET", params: { ["tos_id"]: tosId, ["user_id"]: options.userId }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServiceUserStatuses(deserializeJson(response.text));
    }
    async createTermOfServiceUserStatus(requestBody: CreateTermOfServiceUserStatusRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServiceUserStatus(deserializeJson(response.text));
    }
    async updateTermOfServiceUserStatusById(termsOfServiceUserStatusId: string, requestBody: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses/", termsOfServiceUserStatusId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServiceUserStatus(deserializeJson(response.text));
    }
}
