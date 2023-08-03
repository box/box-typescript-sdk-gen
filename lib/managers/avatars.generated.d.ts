/// <reference types="node" />
import { UserAvatar } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { ByteStream } from "../utils.js";
export declare class GetUserAvatarHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetUserAvatarHeadersArg);
}
export interface CreateUserAvatarRequestBodyArg {
    readonly pic: ByteStream;
    readonly picFileName?: string;
    readonly picContentType?: string;
}
export declare class CreateUserAvatarHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateUserAvatarHeadersArg);
}
export declare class DeleteUserAvatarHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteUserAvatarHeadersArg);
}
export declare class AvatarsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AvatarsManager, "getUserAvatar" | "createUserAvatar" | "deleteUserAvatar">);
    getUserAvatar(userId: string, headers?: GetUserAvatarHeadersArg): Promise<ByteStream>;
    createUserAvatar(userId: string, requestBody: CreateUserAvatarRequestBodyArg, headers?: CreateUserAvatarHeadersArg): Promise<UserAvatar>;
    deleteUserAvatar(userId: string, headers?: DeleteUserAvatarHeadersArg): Promise<undefined>;
}
