import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateUserTerminateSessionRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export interface CreateGroupTerminateSessionRequestBodyArg {
    readonly groupIds: readonly string[];
}
export declare class SessionTerminationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SessionTerminationManager, "createUserTerminateSession" | "createGroupTerminateSession">);
    createUserTerminateSession(requestBody: CreateUserTerminateSessionRequestBodyArg): Promise<any>;
    createGroupTerminateSession(requestBody: CreateGroupTerminateSessionRequestBodyArg): Promise<any>;
}
