import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type SessionTerminationManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostUsersTerminateSessionsRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export interface PostGroupsTerminateSessionsRequestBodyArg {
    readonly groupIds: readonly string[];
}
export declare class SessionTerminationManager {
    readonly auth: SessionTerminationManagerAuthField;
    constructor(fields: Omit<SessionTerminationManager, "postUsersTerminateSessions" | "postGroupsTerminateSessions">);
    postUsersTerminateSessions(requestBody: PostUsersTerminateSessionsRequestBodyArg): Promise<any>;
    postGroupsTerminateSessions(requestBody: PostGroupsTerminateSessionsRequestBodyArg): Promise<any>;
}
