import { SignTemplates } from "../schemas.generated.js";
import { deserializeSignTemplates } from "../schemas.generated.js";
import { serializeSignTemplates } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { SignTemplate } from "../schemas.generated.js";
import { deserializeSignTemplate } from "../schemas.generated.js";
import { serializeSignTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface GetSignTemplatesOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, "getSignTemplates" | "getSignTemplateById">) {
        Object.assign(this, fields);
    }
    async getSignTemplates(options: GetSignTemplatesOptionsArg = {} satisfies GetSignTemplatesOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_templates") as string, { method: "GET", params: { ["marker"]: options.marker, ["limit"]: options.limit }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignTemplates(deserializeJson(response.text));
    }
    async getSignTemplateById(templateId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/sign_templates/", templateId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSignTemplate(deserializeJson(response.text));
    }
}
