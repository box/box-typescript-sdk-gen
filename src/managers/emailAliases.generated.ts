import { serializeEmailAliases } from "../schemas.generated.js";
import { deserializeEmailAliases } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeEmailAlias } from "../schemas.generated.js";
import { deserializeEmailAlias } from "../schemas.generated.js";
import { EmailAliases } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { EmailAlias } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
export interface CreateUserEmailAliasRequestBodyArg {
    readonly email: string;
}
export class EmailAliasesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EmailAliasesManager, "getUserEmailAliases" | "createUserEmailAlias" | "deleteUserEmailAliasById">) {
        Object.assign(this, fields);
    }
    async getUserEmailAliases(userId: string): Promise<EmailAliases> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeEmailAliases(deserializeJson(response.text));
    }
    async createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg): Promise<EmailAlias> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases") as string, { method: "POST", body: serializeJson(serializeCreateUserEmailAliasRequestBodyArg(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeEmailAlias(deserializeJson(response.text));
    }
    async deleteUserEmailAliasById(userId: string, emailAliasId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases/", emailAliasId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function serializeCreateUserEmailAliasRequestBodyArg(val: CreateUserEmailAliasRequestBodyArg): Json {
    return { ["email"]: val.email };
}
export function deserializeCreateUserEmailAliasRequestBodyArg(val: any): CreateUserEmailAliasRequestBodyArg {
    const email: string = val.email;
    return { email: email } satisfies CreateUserEmailAliasRequestBodyArg;
}
