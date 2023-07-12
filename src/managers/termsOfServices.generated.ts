import { serializeTermsOfServices } from "../schemas.generated.js";
import { deserializeTermsOfServices } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeTask } from "../schemas.generated.js";
import { deserializeTask } from "../schemas.generated.js";
import { serializeTermsOfService } from "../schemas.generated.js";
import { deserializeTermsOfService } from "../schemas.generated.js";
import { TermsOfServices } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { TermsOfService } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export type GetTermOfServicesQueryParamsArgTosTypeField = "external" | "managed";
export interface GetTermOfServicesQueryParamsArg {
    readonly tosType?: GetTermOfServicesQueryParamsArgTosTypeField;
}
export type CreateTermOfServiceRequestBodyArgStatusField = "enabled" | "disabled";
export type CreateTermOfServiceRequestBodyArgTosTypeField = "external" | "managed";
export interface CreateTermOfServiceRequestBodyArg {
    readonly status: CreateTermOfServiceRequestBodyArgStatusField;
    readonly tosType?: CreateTermOfServiceRequestBodyArgTosTypeField;
    readonly text: string;
}
export type UpdateTermOfServiceByIdRequestBodyArgStatusField = "enabled" | "disabled";
export interface UpdateTermOfServiceByIdRequestBodyArg {
    readonly status: UpdateTermOfServiceByIdRequestBodyArgStatusField;
    readonly text: string;
}
export class TermsOfServicesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TermsOfServicesManager, "getTermOfServices" | "createTermOfService" | "getTermOfServiceById" | "updateTermOfServiceById">) {
        Object.assign(this, fields);
    }
    async getTermOfServices(queryParams: undefined | GetTermOfServicesQueryParamsArg = {} satisfies GetTermOfServicesQueryParamsArg): Promise<TermsOfServices> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "GET", params: prepareParams(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServices(deserializeJson(response.text));
    }
    async createTermOfService(requestBody: CreateTermOfServiceRequestBodyArg): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTask(deserializeJson(response.text));
    }
    async getTermOfServiceById(termsOfServiceId: string): Promise<TermsOfService> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfService(deserializeJson(response.text));
    }
    async updateTermOfServiceById(termsOfServiceId: string, requestBody: UpdateTermOfServiceByIdRequestBodyArg): Promise<TermsOfService> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfService(deserializeJson(response.text));
    }
}
export function serializeGetTermOfServicesQueryParamsArgTosTypeField(val: GetTermOfServicesQueryParamsArgTosTypeField): Json {
    return val;
}
export function deserializeGetTermOfServicesQueryParamsArgTosTypeField(val: any): GetTermOfServicesQueryParamsArgTosTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GetTermOfServicesQueryParamsArgTosTypeField\"";
    }
    if (val == "external") {
        return "external";
    }
    if (val == "managed") {
        return "managed";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeGetTermOfServicesQueryParamsArg(val: GetTermOfServicesQueryParamsArg): Json {
    return { ["tosType"]: val.tosType == void 0 ? void 0 : serializeGetTermOfServicesQueryParamsArgTosTypeField(val.tosType) };
}
export function deserializeGetTermOfServicesQueryParamsArg(val: any): GetTermOfServicesQueryParamsArg {
    const tosType: undefined | GetTermOfServicesQueryParamsArgTosTypeField = val.tosType == void 0 ? void 0 : deserializeGetTermOfServicesQueryParamsArgTosTypeField(val.tosType);
    return { tosType: tosType } satisfies GetTermOfServicesQueryParamsArg;
}
export function serializeCreateTermOfServiceRequestBodyArgStatusField(val: CreateTermOfServiceRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeCreateTermOfServiceRequestBodyArgStatusField(val: any): CreateTermOfServiceRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceRequestBodyArgStatusField\"";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTermOfServiceRequestBodyArgTosTypeField(val: CreateTermOfServiceRequestBodyArgTosTypeField): Json {
    return val;
}
export function deserializeCreateTermOfServiceRequestBodyArgTosTypeField(val: any): CreateTermOfServiceRequestBodyArgTosTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceRequestBodyArgTosTypeField\"";
    }
    if (val == "external") {
        return "external";
    }
    if (val == "managed") {
        return "managed";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeCreateTermOfServiceRequestBodyArg(val: CreateTermOfServiceRequestBodyArg): Json {
    return { ["status"]: serializeCreateTermOfServiceRequestBodyArgStatusField(val.status), ["tosType"]: val.tosType == void 0 ? void 0 : serializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType), ["text"]: val.text };
}
export function deserializeCreateTermOfServiceRequestBodyArg(val: any): CreateTermOfServiceRequestBodyArg {
    const status: CreateTermOfServiceRequestBodyArgStatusField = deserializeCreateTermOfServiceRequestBodyArgStatusField(val.status);
    const tosType: undefined | CreateTermOfServiceRequestBodyArgTosTypeField = val.tosType == void 0 ? void 0 : deserializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType);
    const text: string = val.text;
    return { status: status, tosType: tosType, text: text } satisfies CreateTermOfServiceRequestBodyArg;
}
export function serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: UpdateTermOfServiceByIdRequestBodyArgStatusField): Json {
    return val;
}
export function deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: any): UpdateTermOfServiceByIdRequestBodyArgStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UpdateTermOfServiceByIdRequestBodyArgStatusField\"";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function serializeUpdateTermOfServiceByIdRequestBodyArg(val: UpdateTermOfServiceByIdRequestBodyArg): Json {
    return { ["status"]: serializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status), ["text"]: val.text };
}
export function deserializeUpdateTermOfServiceByIdRequestBodyArg(val: any): UpdateTermOfServiceByIdRequestBodyArg {
    const status: UpdateTermOfServiceByIdRequestBodyArgStatusField = deserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status);
    const text: string = val.text;
    return { status: status, text: text } satisfies UpdateTermOfServiceByIdRequestBodyArg;
}
