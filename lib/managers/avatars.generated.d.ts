import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type AvatarsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export declare class AvatarsManager {
    readonly auth: AvatarsManagerAuthField;
    constructor(fields: Omit<AvatarsManager, "getUsersIdAvatar" | "deleteUsersIdAvatar">);
    getUsersIdAvatar(userId: string): Promise<any>;
    deleteUsersIdAvatar(userId: string): Promise<any>;
}
