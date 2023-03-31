import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type EmailAliasesManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface CreateUserEmailAliasRequestBodyArg {
    readonly email: string;
}
export declare class EmailAliasesManager {
    readonly auth: EmailAliasesManagerAuthField;
    constructor(fields: Omit<EmailAliasesManager, "getUserEmailAliases" | "createUserEmailAlias" | "deleteUserEmailAliasById">);
    getUserEmailAliases(userId: string): Promise<any>;
    createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg): Promise<any>;
    deleteUserEmailAliasById(userId: string, emailAliasId: string): Promise<any>;
}
