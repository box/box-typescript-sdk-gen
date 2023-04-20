import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type EmailAliasesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
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
