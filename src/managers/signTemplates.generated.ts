import { serializeSignTemplates } from "../schemas.generated.js";
import { deserializeSignTemplates } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeSignTemplate } from "../schemas.generated.js";
import { deserializeSignTemplate } from "../schemas.generated.js";
import { SignTemplates } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { SignTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
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
    async getSignTemplates(queryParams: GetSignTemplatesQueryParamsArg = {} satisfies GetSignTemplatesQueryParamsArg): Promise<SignTemplates> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["marker"]: toString(queryParams.marker), ["limit"]: toString(queryParams.limit) });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_templates") as string, { method: "GET", params: queryParamsMap, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignTemplates(deserializeJson(response.text));
    }
    async getSignTemplateById(templateId: string): Promise<SignTemplate> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_templates/", templateId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignTemplate(deserializeJson(response.text));
    }
}
export function serializeGetSignTemplatesQueryParamsArg(val: GetSignTemplatesQueryParamsArg): Json {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
export function deserializeGetSignTemplatesQueryParamsArg(val: any): GetSignTemplatesQueryParamsArg {
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit } satisfies GetSignTemplatesQueryParamsArg;
}
