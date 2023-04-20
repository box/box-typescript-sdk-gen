import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type AvatarsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface CreateUserAvatarRequestBodyArg {
    readonly pic: string;
}
export declare class AvatarsManager {
    readonly auth: AvatarsManagerAuthField;
    constructor(fields: Omit<AvatarsManager, "getUserAvatar" | "createUserAvatar" | "deleteUserAvatar">);
    getUserAvatar(userId: string): Promise<any>;
    createUserAvatar(userId: string, requestBody: CreateUserAvatarRequestBodyArg): Promise<any>;
    deleteUserAvatar(userId: string): Promise<any>;
}
