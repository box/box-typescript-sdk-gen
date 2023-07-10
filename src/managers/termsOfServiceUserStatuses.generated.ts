import { serializeTermsOfServiceUserStatuses } from "../schemas.generated.js";
import { deserializeTermsOfServiceUserStatuses } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeTermsOfServiceUserStatus } from "../schemas.generated.js";
import { deserializeTermsOfServiceUserStatus } from "../schemas.generated.js";
import { TermsOfServiceUserStatuses } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TermsOfServiceUserStatus } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetTermOfServiceUserStatusesQueryParamsArg {
    readonly tosId: string;
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TermsOfServiceUserStatusesManager, "getTermOfServiceUserStatuses" | "createTermOfServiceUserStatus" | "updateTermOfServiceUserStatusById">) {
        Object.assign(this, fields);
    }
    async getTermOfServiceUserStatuses(queryParams: GetTermOfServiceUserStatusesQueryParamsArg): Promise<TermsOfServiceUserStatuses> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServiceUserStatuses(deserializeJson(response.text));
    }
    async createTermOfServiceUserStatus(requestBody: CreateTermOfServiceUserStatusRequestBodyArg): Promise<TermsOfServiceUserStatus> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServiceUserStatus(deserializeJson(response.text));
    }
    async updateTermOfServiceUserStatusById(termsOfServiceUserStatusId: string, requestBody: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Promise<TermsOfServiceUserStatus> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_service_user_statuses/", termsOfServiceUserStatusId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServiceUserStatus(deserializeJson(response.text));
    }
}
export function serializeGetTermOfServiceUserStatusesQueryParamsArg(val: GetTermOfServiceUserStatusesQueryParamsArg): Json {
    return { ["tosId"]: val.tosId, ["userId"]: val.userId };
}
export function deserializeGetTermOfServiceUserStatusesQueryParamsArg(val: any): GetTermOfServiceUserStatusesQueryParamsArg {
    const tosId: string = val.tosId;
    const userId: undefined | string = isJson(val.userId, "string") ? val.userId : void 0;
    return { tosId: tosId, userId: userId } satisfies GetTermOfServiceUserStatusesQueryParamsArg;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField): Json {
    return val;
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val: any): CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField\"";
    }
    if (val == "terms_of_service") {
        return "terms_of_service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val: CreateTermOfServiceUserStatusRequestBodyArgTosField): Json {
    return { ["type"]: serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val: any): CreateTermOfServiceUserStatusRequestBodyArgTosField {
    const type: CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateTermOfServiceUserStatusRequestBodyArgTosField;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField): Json {
    return val;
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val: any): CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val: CreateTermOfServiceUserStatusRequestBodyArgUserField): Json {
    return { ["type"]: serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val.type), ["id"]: val.id };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val: any): CreateTermOfServiceUserStatusRequestBodyArgUserField {
    const type: CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies CreateTermOfServiceUserStatusRequestBodyArgUserField;
}
export function serializeCreateTermOfServiceUserStatusRequestBodyArg(val: CreateTermOfServiceUserStatusRequestBodyArg): Json {
    return { ["tos"]: serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos), ["user"]: serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user), ["isAccepted"]: val.isAccepted };
}
export function deserializeCreateTermOfServiceUserStatusRequestBodyArg(val: any): CreateTermOfServiceUserStatusRequestBodyArg {
    const tos: CreateTermOfServiceUserStatusRequestBodyArgTosField = deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos);
    const user: CreateTermOfServiceUserStatusRequestBodyArgUserField = deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user);
    const isAccepted: boolean = val.isAccepted;
    return { tos: tos, user: user, isAccepted: isAccepted } satisfies CreateTermOfServiceUserStatusRequestBodyArg;
}
export function serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val: UpdateTermOfServiceUserStatusByIdRequestBodyArg): Json {
    return { ["isAccepted"]: val.isAccepted };
}
export function deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val: any): UpdateTermOfServiceUserStatusByIdRequestBodyArg {
    const isAccepted: boolean = val.isAccepted;
    return { isAccepted: isAccepted } satisfies UpdateTermOfServiceUserStatusByIdRequestBodyArg;
}
