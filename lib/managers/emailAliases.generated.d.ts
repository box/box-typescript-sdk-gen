import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateUserEmailAliasRequestBodyArg {
    readonly email: string;
}
export declare class EmailAliasesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EmailAliasesManager, "getUserEmailAliases" | "createUserEmailAlias" | "deleteUserEmailAliasById">);
    getUserEmailAliases(userId: string): Promise<any>;
    createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg): Promise<any>;
    deleteUserEmailAliasById(userId: string, emailAliasId: string): Promise<any>;
}
