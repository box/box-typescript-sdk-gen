import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type SessionTerminationManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface CreateUserTerminateSessionRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export interface CreateGroupTerminateSessionRequestBodyArg {
    readonly groupIds: readonly string[];
}
export declare class SessionTerminationManager {
    readonly auth: SessionTerminationManagerAuthField;
    constructor(fields: Omit<SessionTerminationManager, "createUserTerminateSession" | "createGroupTerminateSession">);
    createUserTerminateSession(requestBody: CreateUserTerminateSessionRequestBodyArg): Promise<any>;
    createGroupTerminateSession(requestBody: CreateGroupTerminateSessionRequestBodyArg): Promise<any>;
}
