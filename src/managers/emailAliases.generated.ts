import { EmailAliases } from "../schemas.generated.js";
import { deserializeEmailAliases } from "../schemas.generated.js";
import { serializeEmailAliases } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { EmailAlias } from "../schemas.generated.js";
import { deserializeEmailAlias } from "../schemas.generated.js";
import { serializeEmailAlias } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type EmailAliasesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface CreateUserEmailAliasRequestBodyArg {
    readonly email: string;
}
export class EmailAliasesManager {
    readonly auth!: EmailAliasesManagerAuthField;
    constructor(fields: Omit<EmailAliasesManager, "getUserEmailAliases" | "createUserEmailAlias" | "deleteUserEmailAliasById">) {
        Object.assign(this, fields);
    }
    async getUserEmailAliases(userId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeEmailAliases(deserializeJson(response.text));
    }
    async createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeEmailAlias(deserializeJson(response.text));
    }
    async deleteUserEmailAliasById(userId: string, emailAliasId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/email_aliases/", emailAliasId) as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
