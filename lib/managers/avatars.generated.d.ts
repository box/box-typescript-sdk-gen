/// <reference types="node" />
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Readable } from "stream";
export interface CreateUserAvatarRequestBodyArg {
    readonly pic: Readable;
}
export declare class AvatarsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<AvatarsManager, "getUserAvatar" | "createUserAvatar" | "deleteUserAvatar">);
    getUserAvatar(userId: string): Promise<any>;
    createUserAvatar(userId: string, requestBody: CreateUserAvatarRequestBodyArg): Promise<any>;
    deleteUserAvatar(userId: string): Promise<any>;
}
