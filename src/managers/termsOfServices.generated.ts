import { newSerializeTermsOfServices } from "../schemas.generated.js";
import { newDeserializeTermsOfServices } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeTask } from "../schemas.generated.js";
import { newDeserializeTask } from "../schemas.generated.js";
import { newSerializeTermsOfService } from "../schemas.generated.js";
import { newDeserializeTermsOfService } from "../schemas.generated.js";
import { TermsOfServices } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { TermsOfService } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTermsOfServices(deserializeJson(response.text));
    }
    async createTermOfService(requestBody: CreateTermOfServiceRequestBodyArg): Promise<Task> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTask(deserializeJson(response.text));
    }
    async getTermOfServiceById(termsOfServiceId: string): Promise<TermsOfService> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTermsOfService(deserializeJson(response.text));
    }
    async updateTermOfServiceById(termsOfServiceId: string, requestBody: UpdateTermOfServiceByIdRequestBodyArg): Promise<TermsOfService> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeTermsOfService(deserializeJson(response.text));
    }
}
export function newSerializeGetTermOfServicesQueryParamsArgTosTypeField(val: GetTermOfServicesQueryParamsArgTosTypeField): Json {
    return val;
}
export function newDeserializeGetTermOfServicesQueryParamsArgTosTypeField(val: any): GetTermOfServicesQueryParamsArgTosTypeField {
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
export function newSerializeGetTermOfServicesQueryParamsArg(val: GetTermOfServicesQueryParamsArg): Json {
    return { ["tosType"]: val.tosType == void 0 ? void 0 : newSerializeGetTermOfServicesQueryParamsArgTosTypeField(val.tosType) };
}
export function newDeserializeGetTermOfServicesQueryParamsArg(val: any): GetTermOfServicesQueryParamsArg {
    const tosType: undefined | GetTermOfServicesQueryParamsArgTosTypeField = val.tosType == void 0 ? void 0 : newDeserializeGetTermOfServicesQueryParamsArgTosTypeField(val.tosType);
    return { tosType: tosType } satisfies GetTermOfServicesQueryParamsArg;
}
export function newSerializeCreateTermOfServiceRequestBodyArgStatusField(val: CreateTermOfServiceRequestBodyArgStatusField): Json {
    return val;
}
export function newDeserializeCreateTermOfServiceRequestBodyArgStatusField(val: any): CreateTermOfServiceRequestBodyArgStatusField {
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
export function newSerializeCreateTermOfServiceRequestBodyArgTosTypeField(val: CreateTermOfServiceRequestBodyArgTosTypeField): Json {
    return val;
}
export function newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField(val: any): CreateTermOfServiceRequestBodyArgTosTypeField {
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
export function newSerializeCreateTermOfServiceRequestBodyArg(val: CreateTermOfServiceRequestBodyArg): Json {
    return { ["status"]: newSerializeCreateTermOfServiceRequestBodyArgStatusField(val.status), ["tosType"]: val.tosType == void 0 ? void 0 : newSerializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType), ["text"]: val.text };
}
export function newDeserializeCreateTermOfServiceRequestBodyArg(val: any): CreateTermOfServiceRequestBodyArg {
    const status: CreateTermOfServiceRequestBodyArgStatusField = newDeserializeCreateTermOfServiceRequestBodyArgStatusField(val.status);
    const tosType: undefined | CreateTermOfServiceRequestBodyArgTosTypeField = val.tosType == void 0 ? void 0 : newDeserializeCreateTermOfServiceRequestBodyArgTosTypeField(val.tosType);
    const text: string = val.text;
    return { status: status, tosType: tosType, text: text } satisfies CreateTermOfServiceRequestBodyArg;
}
export function newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: UpdateTermOfServiceByIdRequestBodyArgStatusField): Json {
    return val;
}
export function newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val: any): UpdateTermOfServiceByIdRequestBodyArgStatusField {
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
export function newSerializeUpdateTermOfServiceByIdRequestBodyArg(val: UpdateTermOfServiceByIdRequestBodyArg): Json {
    return { ["status"]: newSerializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status), ["text"]: val.text };
}
export function newDeserializeUpdateTermOfServiceByIdRequestBodyArg(val: any): UpdateTermOfServiceByIdRequestBodyArg {
    const status: UpdateTermOfServiceByIdRequestBodyArgStatusField = newDeserializeUpdateTermOfServiceByIdRequestBodyArgStatusField(val.status);
    const text: string = val.text;
    return { status: status, text: text } satisfies UpdateTermOfServiceByIdRequestBodyArg;
}
