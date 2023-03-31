import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type AvatarsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export declare class AvatarsManager {
    readonly auth: AvatarsManagerAuthField;
    constructor(fields: Omit<AvatarsManager, "getUserAvatar" | "deleteUserAvatar">);
    getUserAvatar(userId: string): Promise<any>;
    deleteUserAvatar(userId: string): Promise<any>;
}
