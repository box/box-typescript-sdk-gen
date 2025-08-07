import { deserializeEmailAliases } from '../schemas/emailAliases.generated.js';
import { deserializeEmailAlias } from '../schemas/emailAlias.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetUserEmailAliasesOptionals {
    constructor(fields) {
        this.headers = new GetUserEmailAliasesHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateUserEmailAliasOptionals {
    constructor(fields) {
        this.headers = new CreateUserEmailAliasHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteUserEmailAliasByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteUserEmailAliasByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetUserEmailAliasesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateUserEmailAliasHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteUserEmailAliasByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class EmailAliasesManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
       * Retrieves all email aliases for a user. The collection
       * does not include the primary login for the user.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserEmailAliasesOptionalsInput} optionalsInput
       * @returns {Promise<EmailAliases>}
       */
    async getUserEmailAliases(userId, optionalsInput = {}) {
        const optionals = new GetUserEmailAliasesOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/email_aliases'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeEmailAliases(response.data),
            rawData: response.data,
        };
    }
    /**
       * Adds a new email alias to a user account..
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {CreateUserEmailAliasRequestBody} requestBody Request body of createUserEmailAlias method
       * @param {CreateUserEmailAliasOptionalsInput} optionalsInput
       * @returns {Promise<EmailAlias>}
       */
    async createUserEmailAlias(userId, requestBody, optionalsInput = {}) {
        const optionals = new CreateUserEmailAliasOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/email_aliases'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateUserEmailAliasRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeEmailAlias(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes an email alias from a user.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {string} emailAliasId The ID of the email alias.
      Example: "23432"
       * @param {DeleteUserEmailAliasByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteUserEmailAliasById(userId, emailAliasId, optionalsInput = {}) {
        const optionals = new DeleteUserEmailAliasByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/email_aliases/', toString(emailAliasId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeCreateUserEmailAliasRequestBody(val) {
    return { ['email']: val.email };
}
export function deserializeCreateUserEmailAliasRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateUserEmailAliasRequestBody"',
        });
    }
    if (val.email == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "email" of type "CreateUserEmailAliasRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.email)) {
        throw new BoxSdkError({
            message: 'Expecting string for "email" of type "CreateUserEmailAliasRequestBody"',
        });
    }
    const email = val.email;
    return { email: email };
}
//# sourceMappingURL=emailAliases.generated.js.map