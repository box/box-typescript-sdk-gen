import { EmailAliases } from "../schemas.generated.js";
import { EmailAlias } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface CreateUserEmailAliasRequestBodyArg {
    readonly email: string;
}
export declare class EmailAliasesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EmailAliasesManager, "getUserEmailAliases" | "createUserEmailAlias" | "deleteUserEmailAliasById">);
    getUserEmailAliases(userId: string): Promise<EmailAliases>;
    createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg): Promise<EmailAlias>;
    deleteUserEmailAliasById(userId: string, emailAliasId: string): Promise<any>;
}
export declare function newSerializeCreateUserEmailAliasRequestBodyArg(val: CreateUserEmailAliasRequestBodyArg): Json;
export declare function newDeserializeCreateUserEmailAliasRequestBodyArg(val: any): CreateUserEmailAliasRequestBodyArg;
