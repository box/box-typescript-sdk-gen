import { EmailAliases } from "../schemas.generated.js";
import { EmailAlias } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export declare class GetUserEmailAliasesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetUserEmailAliasesHeadersArg);
}
export interface CreateUserEmailAliasRequestBodyArg {
    readonly email: string;
}
export declare class CreateUserEmailAliasHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateUserEmailAliasHeadersArg);
}
export declare class DeleteUserEmailAliasByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteUserEmailAliasByIdHeadersArg);
}
export declare class EmailAliasesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<EmailAliasesManager, "getUserEmailAliases" | "createUserEmailAlias" | "deleteUserEmailAliasById">);
    getUserEmailAliases(userId: string, headers?: GetUserEmailAliasesHeadersArg): Promise<EmailAliases>;
    createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBodyArg, headers?: CreateUserEmailAliasHeadersArg): Promise<EmailAlias>;
    deleteUserEmailAliasById(userId: string, emailAliasId: string, headers?: DeleteUserEmailAliasByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateUserEmailAliasRequestBodyArg(val: CreateUserEmailAliasRequestBodyArg): Json;
export declare function deserializeCreateUserEmailAliasRequestBodyArg(val: any): CreateUserEmailAliasRequestBodyArg;
