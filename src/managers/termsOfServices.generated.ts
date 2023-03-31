import { TermsOfServices } from "../schemas.generated.js";
import { deserializeTermsOfServices } from "../schemas.generated.js";
import { serializeTermsOfServices } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Task } from "../schemas.generated.js";
import { deserializeTask } from "../schemas.generated.js";
import { serializeTask } from "../schemas.generated.js";
import { TermsOfService } from "../schemas.generated.js";
import { deserializeTermsOfService } from "../schemas.generated.js";
import { serializeTermsOfService } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type TermsOfServicesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetTermOfServicesOptionsArgTosTypeField = "external" | "managed";
export interface GetTermOfServicesOptionsArg {
    readonly tosType?: GetTermOfServicesOptionsArgTosTypeField;
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
    readonly auth!: TermsOfServicesManagerAuthField;
    constructor(fields: Omit<TermsOfServicesManager, "getTermOfServices" | "createTermOfService" | "getTermOfServiceById" | "updateTermOfServiceById">) {
        Object.assign(this, fields);
    }
    async getTermOfServices(options: GetTermOfServicesOptionsArg = {} satisfies GetTermOfServicesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "GET", params: { ["tos_type"]: options.tosType }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfServices(deserializeJSON(response.text) as JSON);
    }
    async createTermOfService(requestBody: CreateTermOfServiceRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTask(deserializeJSON(response.text) as JSON);
    }
    async getTermOfServiceById(termsOfServiceId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfService(deserializeJSON(response.text) as JSON);
    }
    async updateTermOfServiceById(termsOfServiceId: string, requestBody: UpdateTermOfServiceByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeTermsOfService(deserializeJSON(response.text) as JSON);
    }
}
