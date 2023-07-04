import { newSerializeEmailAliases } from "../schemas.generated.js";
import { newDeserializeEmailAliases } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeEmailAlias } from "../schemas.generated.js";
import { newDeserializeEmailAlias } from "../schemas.generated.js";
import { EmailAliases } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { EmailAlias } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
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
        return newDeserializeEmailAliases(deserializeJson(response.text));
    }
    async createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg): Promise<EmailAlias> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeEmailAlias(deserializeJson(response.text));
    }
    async deleteUserEmailAliasById(userId: string, emailAliasId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases/", emailAliasId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
export function newSerializeCreateUserEmailAliasRequestBodyArg(val: CreateUserEmailAliasRequestBodyArg): Json {
    return { ["email"]: val.email };
}
export function newDeserializeCreateUserEmailAliasRequestBodyArg(val: any): CreateUserEmailAliasRequestBodyArg {
    const email: string = val.email;
    return { email: email } satisfies CreateUserEmailAliasRequestBodyArg;
}
