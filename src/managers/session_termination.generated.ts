import { SessionTerminationMessage } from "../schemas.generated.js";
import { deserializeSessionTerminationMessage } from "../schemas.generated.js";
import { serializeSessionTerminationMessage } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type SessionTerminationManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostUsersTerminateSessionsRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export interface PostGroupsTerminateSessionsRequestBodyArg {
    readonly groupIds: readonly string[];
}
export class SessionTerminationManager {
    readonly auth!: SessionTerminationManagerAuthField;
    constructor(fields: Omit<SessionTerminationManager, "postUsersTerminateSessions" | "postGroupsTerminateSessions">) {
        Object.assign(this, fields);
    }
    async postUsersTerminateSessions(requestBody: PostUsersTerminateSessionsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/terminate_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSessionTerminationMessage(deserializeJSON(response.text) as JSON);
    }
    async postGroupsTerminateSessions(requestBody: PostGroupsTerminateSessionsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/groups/terminate_sessions") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSessionTerminationMessage(deserializeJSON(response.text) as JSON);
    }
}
