import { SessionTerminationMessage } from "../schemas.generated.js";
import { deserializeSessionTerminationMessage } from "../schemas.generated.js";
import { serializeSessionTerminationMessage } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type SessionTerminationManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface CreateUserTerminateSessionRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export interface CreateGroupTerminateSessionRequestBodyArg {
    readonly groupIds: readonly string[];
}
export class SessionTerminationManager {
    readonly auth!: SessionTerminationManagerAuthField;
    constructor(fields: Omit<SessionTerminationManager, "createUserTerminateSession" | "createGroupTerminateSession">) {
        Object.assign(this, fields);
    }
    async createUserTerminateSession(requestBody: CreateUserTerminateSessionRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/terminate_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeSessionTerminationMessage(deserializeJson(response.text));
    }
    async createGroupTerminateSession(requestBody: CreateGroupTerminateSessionRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/terminate_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeSessionTerminationMessage(deserializeJson(response.text));
    }
}
