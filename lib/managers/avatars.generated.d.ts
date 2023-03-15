import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type AvatarsManagerAuthField = DeveloperTokenAuth | CcgAuth;
export declare class AvatarsManager {
    readonly auth: AvatarsManagerAuthField;
    constructor(fields: Omit<AvatarsManager, "getUsersIdAvatar" | "deleteUsersIdAvatar">);
    getUsersIdAvatar(userId: string): Promise<any>;
    deleteUsersIdAvatar(userId: string): Promise<any>;
}
