import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeUserAvatar } from "../schemas.generated.js";
import { deserializeUserAvatar } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { UserAvatar } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { MultipartItem } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { Readable } from "stream";
export interface CreateUserAvatarRequestBodyArg {
    readonly pic: Readable;
}
export class AvatarsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AvatarsManager, "getUserAvatar" | "createUserAvatar" | "deleteUserAvatar">) {
        Object.assign(this, fields);
    }
    async getUserAvatar(userId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/avatar") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createUserAvatar(userId: string, requestBody: CreateUserAvatarRequestBodyArg): Promise<UserAvatar> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/avatar") as string, { method: "POST", multipartData: [{ partName: "pic", fileStream: requestBody.pic } satisfies MultipartItem], contentType: "multipart/form-data", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeUserAvatar(deserializeJson(response.text));
    }
    async deleteUserAvatar(userId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/users/", userId, "/avatar") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
