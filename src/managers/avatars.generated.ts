import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { UserAvatar } from "../schemas.generated.js";
import { deserializeUserAvatar } from "../schemas.generated.js";
import { serializeUserAvatar } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
export type AvatarsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export class AvatarsManager {
    readonly auth!: AvatarsManagerAuthField;
    constructor(fields: Omit<AvatarsManager, "getUserAvatar" | "deleteUserAvatar">) {
        Object.assign(this, fields);
    }
    async getUserAvatar(userId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/avatar") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async deleteUserAvatar(userId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/avatar") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
