import { EmailAliases } from '../schemas/emailAliases.generated.js';
import { EmailAlias } from '../schemas/emailAlias.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetUserEmailAliasesOptionals {
    readonly headers: GetUserEmailAliasesHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetUserEmailAliasesOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetUserEmailAliasesOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetUserEmailAliasesOptionalsInput {
    readonly headers?: GetUserEmailAliasesHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateUserEmailAliasOptionals {
    readonly headers: CreateUserEmailAliasHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateUserEmailAliasOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateUserEmailAliasOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateUserEmailAliasOptionalsInput {
    readonly headers?: CreateUserEmailAliasHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteUserEmailAliasByIdOptionals {
    readonly headers: DeleteUserEmailAliasByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteUserEmailAliasByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteUserEmailAliasByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteUserEmailAliasByIdOptionalsInput {
    readonly headers?: DeleteUserEmailAliasByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetUserEmailAliasesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetUserEmailAliasesHeaders, 'extraHeaders'> & Partial<Pick<GetUserEmailAliasesHeaders, 'extraHeaders'>>);
}
export interface GetUserEmailAliasesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateUserEmailAliasRequestBody {
    /**
     * The email address to add to the account as an alias.
     *
     * Note: The domain of the email alias needs to be registered
     *  to your enterprise.
     * See the [domain verification guide](
     *   https://support.box.com/hc/en-us/articles/4408619650579-Domain-Verification
     *   ) for steps to add a new domain. */
    readonly email: string;
    readonly rawData?: SerializedData;
}
export declare class CreateUserEmailAliasHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateUserEmailAliasHeaders, 'extraHeaders'> & Partial<Pick<CreateUserEmailAliasHeaders, 'extraHeaders'>>);
}
export interface CreateUserEmailAliasHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteUserEmailAliasByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteUserEmailAliasByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteUserEmailAliasByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteUserEmailAliasByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class EmailAliasesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<EmailAliasesManager, 'networkSession' | 'getUserEmailAliases' | 'createUserEmailAlias' | 'deleteUserEmailAliasById'> & Partial<Pick<EmailAliasesManager, 'networkSession'>>);
    /**
       * Retrieves all email aliases for a user. The collection
       * does not include the primary login for the user.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserEmailAliasesOptionalsInput} optionalsInput
       * @returns {Promise<EmailAliases>}
       */
    getUserEmailAliases(userId: string, optionalsInput?: GetUserEmailAliasesOptionalsInput): Promise<EmailAliases>;
    /**
       * Adds a new email alias to a user account..
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {CreateUserEmailAliasRequestBody} requestBody Request body of createUserEmailAlias method
       * @param {CreateUserEmailAliasOptionalsInput} optionalsInput
       * @returns {Promise<EmailAlias>}
       */
    createUserEmailAlias(userId: string, requestBody: CreateUserEmailAliasRequestBody, optionalsInput?: CreateUserEmailAliasOptionalsInput): Promise<EmailAlias>;
    /**
       * Removes an email alias from a user.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {string} emailAliasId The ID of the email alias.
      Example: "23432"
       * @param {DeleteUserEmailAliasByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteUserEmailAliasById(userId: string, emailAliasId: string, optionalsInput?: DeleteUserEmailAliasByIdOptionalsInput): Promise<undefined>;
}
export interface EmailAliasesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateUserEmailAliasRequestBody(val: CreateUserEmailAliasRequestBody): SerializedData;
export declare function deserializeCreateUserEmailAliasRequestBody(val: SerializedData): CreateUserEmailAliasRequestBody;
//# sourceMappingURL=emailAliases.generated.d.ts.map