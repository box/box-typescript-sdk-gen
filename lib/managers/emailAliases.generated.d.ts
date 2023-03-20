import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type EmailAliasesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface PostUsersIdEmailAliasesRequestBodyArg {
    readonly email: string;
}
export declare class EmailAliasesManager {
    readonly auth: EmailAliasesManagerAuthField;
    constructor(fields: Omit<EmailAliasesManager, "getUsersIdEmailAliases" | "postUsersIdEmailAliases" | "deleteUsersIdEmailAliasesId">);
    getUsersIdEmailAliases(userId: string): Promise<any>;
    postUsersIdEmailAliases(userId: string, requestBody: PostUsersIdEmailAliasesRequestBodyArg): Promise<any>;
    deleteUsersIdEmailAliasesId(userId: string, emailAliasId: string): Promise<any>;
}
