"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAliasesManager = exports.DeleteUserEmailAliasByIdHeaders = exports.CreateUserEmailAliasHeaders = exports.GetUserEmailAliasesHeaders = exports.DeleteUserEmailAliasByIdOptionals = exports.CreateUserEmailAliasOptionals = exports.GetUserEmailAliasesOptionals = void 0;
exports.serializeCreateUserEmailAliasRequestBody = serializeCreateUserEmailAliasRequestBody;
exports.deserializeCreateUserEmailAliasRequestBody = deserializeCreateUserEmailAliasRequestBody;
const emailAliases_generated_js_1 = require("../schemas/emailAliases.generated.js");
const emailAlias_generated_js_1 = require("../schemas/emailAlias.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class GetUserEmailAliasesOptionals {
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
exports.GetUserEmailAliasesOptionals = GetUserEmailAliasesOptionals;
class CreateUserEmailAliasOptionals {
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
exports.CreateUserEmailAliasOptionals = CreateUserEmailAliasOptionals;
class DeleteUserEmailAliasByIdOptionals {
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
exports.DeleteUserEmailAliasByIdOptionals = DeleteUserEmailAliasByIdOptionals;
class GetUserEmailAliasesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetUserEmailAliasesHeaders = GetUserEmailAliasesHeaders;
class CreateUserEmailAliasHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateUserEmailAliasHeaders = CreateUserEmailAliasHeaders;
class DeleteUserEmailAliasByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteUserEmailAliasByIdHeaders = DeleteUserEmailAliasByIdHeaders;
class EmailAliasesManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getUserEmailAliases(userId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, optionalsInput = {}) {
            const optionals = new GetUserEmailAliasesOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', (0, utils_js_2.toString)(userId), '/email_aliases'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, emailAliases_generated_js_1.deserializeEmailAliases)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Adds a new email alias to a user account..
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {CreateUserEmailAliasRequestBody} requestBody Request body of createUserEmailAlias method
       * @param {CreateUserEmailAliasOptionalsInput} optionalsInput
       * @returns {Promise<EmailAlias>}
       */
    createUserEmailAlias(userId_1, requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (userId, requestBody, optionalsInput = {}) {
            const optionals = new CreateUserEmailAliasOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', (0, utils_js_2.toString)(userId), '/email_aliases'),
                method: 'POST',
                headers: headersMap,
                data: serializeCreateUserEmailAliasRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, emailAlias_generated_js_1.deserializeEmailAlias)(response.data)), { rawData: response.data });
        });
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
    deleteUserEmailAliasById(userId_1, emailAliasId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, emailAliasId, optionalsInput = {}) {
            const optionals = new DeleteUserEmailAliasByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', (0, utils_js_2.toString)(userId), '/email_aliases/', (0, utils_js_2.toString)(emailAliasId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
exports.EmailAliasesManager = EmailAliasesManager;
function serializeCreateUserEmailAliasRequestBody(val) {
    return { ['email']: val.email };
}
function deserializeCreateUserEmailAliasRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateUserEmailAliasRequestBody"',
        });
    }
    if (val.email == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "email" of type "CreateUserEmailAliasRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "CreateUserEmailAliasRequestBody"',
        });
    }
    const email = val.email;
    return { email: email };
}
//# sourceMappingURL=emailAliases.generated.js.map