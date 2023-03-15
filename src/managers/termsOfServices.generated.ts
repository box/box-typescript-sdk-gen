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
import { CcgAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type TermsOfServicesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetTermsOfServicesOptionsArgTosTypeField = "external" | "managed";
export interface GetTermsOfServicesOptionsArg {
    readonly tosType?: GetTermsOfServicesOptionsArgTosTypeField;
}
export type PostTermsOfServicesRequestBodyArgStatusField = "enabled" | "disabled";
export type PostTermsOfServicesRequestBodyArgTosTypeField = "external" | "managed";
export interface PostTermsOfServicesRequestBodyArg {
    readonly status: PostTermsOfServicesRequestBodyArgStatusField;
    readonly tosType?: PostTermsOfServicesRequestBodyArgTosTypeField;
    readonly text: string;
}
export type PutTermsOfServicesIdRequestBodyArgStatusField = "enabled" | "disabled";
export interface PutTermsOfServicesIdRequestBodyArg {
    readonly status: PutTermsOfServicesIdRequestBodyArgStatusField;
    readonly text: string;
}
export class TermsOfServicesManager {
    readonly auth!: TermsOfServicesManagerAuthField;
    constructor(fields: Omit<TermsOfServicesManager, "getTermsOfServices" | "postTermsOfServices" | "getTermsOfServicesId" | "putTermsOfServicesId">) {
        Object.assign(this, fields);
    }
    async getTermsOfServices(options: GetTermsOfServicesOptionsArg = {} satisfies GetTermsOfServicesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "GET", params: { ["tos_type"]: options.tosType }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTermsOfServices(await deserializeJson(response.text));
    }
    async postTermsOfServices(requestBody: PostTermsOfServicesRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTask(await deserializeJson(response.text));
    }
    async getTermsOfServicesId(termsOfServiceId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTermsOfService(await deserializeJson(response.text));
    }
    async putTermsOfServicesId(termsOfServiceId: string, requestBody: PutTermsOfServicesIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/terms_of_services/", termsOfServiceId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTermsOfService(await deserializeJson(response.text));
    }
}
