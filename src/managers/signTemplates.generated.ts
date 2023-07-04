import { newSerializeSignTemplates } from "../schemas.generated.js";
import { newDeserializeSignTemplates } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeSignTemplate } from "../schemas.generated.js";
import { newDeserializeSignTemplate } from "../schemas.generated.js";
import { SignTemplates } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { SignTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { isJson } from "../json.js";
export interface GetSignTemplatesQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, "getSignTemplates" | "getSignTemplateById">) {
        Object.assign(this, fields);
    }
    async getSignTemplates(queryParams: undefined | GetSignTemplatesQueryParamsArg = {} satisfies GetSignTemplatesQueryParamsArg): Promise<SignTemplates> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_templates") as string, { method: "GET", params: toMap(queryParams), auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeSignTemplates(deserializeJson(response.text));
    }
    async getSignTemplateById(templateId: string): Promise<SignTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_templates/", templateId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeSignTemplate(deserializeJson(response.text));
    }
}
export function newSerializeGetSignTemplatesQueryParamsArg(val: GetSignTemplatesQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function newDeserializeGetSignTemplatesQueryParamsArg(val: any): GetSignTemplatesQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetSignTemplatesQueryParamsArg;
}
