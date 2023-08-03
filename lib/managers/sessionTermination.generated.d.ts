import { SessionTerminationMessage } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateUserTerminateSessionRequestBodyArg {
    readonly userIds: readonly string[];
    readonly userLogins: readonly string[];
}
export declare class CreateUserTerminateSessionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateUserTerminateSessionHeadersArg);
}
export interface CreateGroupTerminateSessionRequestBodyArg {
    readonly groupIds: readonly string[];
}
export declare class CreateGroupTerminateSessionHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateGroupTerminateSessionHeadersArg);
}
export declare class SessionTerminationManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SessionTerminationManager, "createUserTerminateSession" | "createGroupTerminateSession">);
    createUserTerminateSession(requestBody: CreateUserTerminateSessionRequestBodyArg, headers?: CreateUserTerminateSessionHeadersArg): Promise<SessionTerminationMessage>;
    createGroupTerminateSession(requestBody: CreateGroupTerminateSessionRequestBodyArg, headers?: CreateGroupTerminateSessionHeadersArg): Promise<SessionTerminationMessage>;
}
export declare function serializeCreateUserTerminateSessionRequestBodyArg(val: CreateUserTerminateSessionRequestBodyArg): Json;
export declare function deserializeCreateUserTerminateSessionRequestBodyArg(val: any): CreateUserTerminateSessionRequestBodyArg;
export declare function serializeCreateGroupTerminateSessionRequestBodyArg(val: CreateGroupTerminateSessionRequestBodyArg): Json;
export declare function deserializeCreateGroupTerminateSessionRequestBodyArg(val: any): CreateGroupTerminateSessionRequestBodyArg;
