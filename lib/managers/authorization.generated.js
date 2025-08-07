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
exports.AuthorizationManager = exports.RevokeAccessTokenHeaders = exports.RefreshAccessTokenHeaders = exports.RequestAccessTokenHeaders = exports.AuthorizeUserHeaders = exports.RevokeAccessTokenOptionals = exports.RefreshAccessTokenOptionals = exports.RequestAccessTokenOptionals = exports.AuthorizeUserOptionals = void 0;
exports.serializeAuthorizeUserQueryParamsResponseTypeField = serializeAuthorizeUserQueryParamsResponseTypeField;
exports.deserializeAuthorizeUserQueryParamsResponseTypeField = deserializeAuthorizeUserQueryParamsResponseTypeField;
const accessToken_generated_js_1 = require("../schemas/accessToken.generated.js");
const postOAuth2Token_generated_js_1 = require("../schemas/postOAuth2Token.generated.js");
const postOAuth2TokenRefreshAccessToken_generated_js_1 = require("../schemas/postOAuth2TokenRefreshAccessToken.generated.js");
const postOAuth2Revoke_generated_js_1 = require("../schemas/postOAuth2Revoke.generated.js");
const postOAuth2TokenRefreshAccessToken_generated_js_2 = require("../schemas/postOAuth2TokenRefreshAccessToken.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class AuthorizeUserOptionals {
    constructor(fields) {
        this.headers = new AuthorizeUserHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.AuthorizeUserOptionals = AuthorizeUserOptionals;
class RequestAccessTokenOptionals {
    constructor(fields) {
        this.headers = new RequestAccessTokenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RequestAccessTokenOptionals = RequestAccessTokenOptionals;
class RefreshAccessTokenOptionals {
    constructor(fields) {
        this.headers = new RefreshAccessTokenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RefreshAccessTokenOptionals = RefreshAccessTokenOptionals;
class RevokeAccessTokenOptionals {
    constructor(fields) {
        this.headers = new RevokeAccessTokenHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.RevokeAccessTokenOptionals = RevokeAccessTokenOptionals;
class AuthorizeUserHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.AuthorizeUserHeaders = AuthorizeUserHeaders;
class RequestAccessTokenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RequestAccessTokenHeaders = RequestAccessTokenHeaders;
class RefreshAccessTokenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RefreshAccessTokenHeaders = RefreshAccessTokenHeaders;
class RevokeAccessTokenHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.RevokeAccessTokenHeaders = RevokeAccessTokenHeaders;
class AuthorizationManager {
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
     * Authorize a user by sending them through the [Box](https://box.com)
     * website and request their permission to act on their behalf.
     *
     * This is the first step when authenticating a user using
     * OAuth 2.0. To request a user's authorization to use the Box APIs
     * on their behalf you will need to send a user to the URL with this
     * format.
     * @param {AuthorizeUserQueryParams} queryParams Query parameters of authorizeUser method
     * @param {AuthorizeUserOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    authorizeUser(queryParams_1) {
        return __awaiter(this, arguments, void 0, function* (queryParams, optionalsInput = {}) {
            const optionals = new AuthorizeUserOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['response_type']: (0, utils_js_2.toString)(queryParams.responseType),
                ['client_id']: (0, utils_js_2.toString)(queryParams.clientId),
                ['redirect_uri']: (0, utils_js_2.toString)(queryParams.redirectUri),
                ['state']: (0, utils_js_2.toString)(queryParams.state),
                ['scope']: (0, utils_js_2.toString)(queryParams.scope),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.oauth2Url, '/authorize'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
    /**
     * Request an Access Token using either a client-side obtained OAuth 2.0
     * authorization code or a server-side JWT assertion.
     *
     * An Access Token is a string that enables Box to verify that a
     * request belongs to an authorized session. In the normal order of
     * operations you will begin by requesting authentication from the
     * [authorize](#get-authorize) endpoint and Box will send you an
     * authorization code.
     *
     * You will then send this code to this endpoint to exchange it for
     * an Access Token. The returned Access Token can then be used to to make
     * Box API calls.
     * @param {PostOAuth2Token} requestBody Request body of requestAccessToken method
     * @param {RequestAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<AccessToken>}
     */
    requestAccessToken(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new RequestAccessTokenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/oauth2/token'),
                method: 'POST',
                headers: headersMap,
                data: (0, postOAuth2Token_generated_js_1.serializePostOAuth2Token)(requestBody),
                contentType: 'application/x-www-form-urlencoded',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, accessToken_generated_js_1.deserializeAccessToken)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Refresh an Access Token using its client ID, secret, and refresh token.
     * @param {PostOAuth2TokenRefreshAccessTokenInput} requestBodyInput Request body of refreshAccessToken method
     * @param {RefreshAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<AccessToken>}
     */
    refreshAccessToken(requestBodyInput_1) {
        return __awaiter(this, arguments, void 0, function* (requestBodyInput, optionalsInput = {}) {
            const requestBody = new postOAuth2TokenRefreshAccessToken_generated_js_2.PostOAuth2TokenRefreshAccessToken({
                grantType: requestBodyInput.grantType,
                clientId: requestBodyInput.clientId,
                clientSecret: requestBodyInput.clientSecret,
                refreshToken: requestBodyInput.refreshToken,
            });
            const optionals = new RefreshAccessTokenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/oauth2/token#refresh'),
                method: 'POST',
                headers: headersMap,
                data: (0, postOAuth2TokenRefreshAccessToken_generated_js_1.serializePostOAuth2TokenRefreshAccessToken)(requestBody),
                contentType: 'application/x-www-form-urlencoded',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, accessToken_generated_js_1.deserializeAccessToken)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Revoke an active Access Token, effectively logging a user out
     * that has been previously authenticated.
     * @param {PostOAuth2Revoke} requestBody Request body of revokeAccessToken method
     * @param {RevokeAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    revokeAccessToken(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new RevokeAccessTokenOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/oauth2/revoke'),
                method: 'POST',
                headers: headersMap,
                data: (0, postOAuth2Revoke_generated_js_1.serializePostOAuth2Revoke)(requestBody),
                contentType: 'application/x-www-form-urlencoded',
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
    }
}
exports.AuthorizationManager = AuthorizationManager;
function serializeAuthorizeUserQueryParamsResponseTypeField(val) {
    return val;
}
function deserializeAuthorizeUserQueryParamsResponseTypeField(val) {
    if (val == 'code') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AuthorizeUserQueryParamsResponseTypeField",
    });
}
//# sourceMappingURL=authorization.generated.js.map