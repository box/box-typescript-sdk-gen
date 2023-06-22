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
exports.OAuth = void 0;
const fetch_js_1 = require("./fetch.js");
const BOX_OAUTH2_AUTH_URL = 'https://account.box.com/api/oauth2/authorize';
const BOX_OAUTH2_TOKEN_URL = 'https://api.box.com/oauth2/token';
const BOX_OAUTH2_GRANT_TYPE = 'authorization_code', BOX_REFRESH_TOKEN_GRANT_TYPE = 'refresh_token';
/**
 * Determines if a given string could represent an authorization code or token.
 *
 * @param {string} codeOrToken The code or token to check.
 * @returns {boolean} True if codeOrToken is valid, false if not.
 * @private
 */
function isValidCodeOrToken(codeOrToken) {
    return typeof codeOrToken === 'string' && codeOrToken.length > 0;
}
/**
 * Determines if a token grant response is valid
 *
 * @param {Object} responseBody the body of the response to check
 * @returns {boolean} True if response body has expected fields, false if not.
 * @private
 */
function isValidOAuthTokenResponse(responseBody) {
    if (!isValidCodeOrToken(responseBody.access_token)) {
        return false;
    }
    if (typeof responseBody.expires_in !== 'number') {
        return false;
    }
    return isValidCodeOrToken(responseBody.refresh_token);
}
/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {OAuthConfig} config The OAuthConfig instance.
 * @typedef {Object} OAuthConfig
 */
class OAuth {
    constructor({ config }) {
        this.config = config;
    }
    /**
     * Get the authorization URL for the app user.
     * @param {Object} options The parameters for the authorization URL.
     * @param {string} options.clientId The Client ID of the application that is requesting to authenticate the user.
     * @param {string} options.redirectUri The URI to which Box redirects the browser after the user has granted or denied the application permission.
     * @param {string} options.responseType The type of response we'd like to receive. Must be 'code'.
     * @param {string} [options.state] A custom string of your choice. Box will pass the same string to the redirect URL when authentication is complete.
     * @param {string} [options.scope] A comma-separated list of application scopes you'd like to authenticate the user for.
     */
    getAuthorizeUrl(options) {
        const params = {
            client_id: (options === null || options === void 0 ? void 0 : options.clientId) || this.config.clientId,
            response_type: (options === null || options === void 0 ? void 0 : options.responseType) || 'code',
        };
        if (options === null || options === void 0 ? void 0 : options.redirectUri) {
            params['redirect_uri'] = options === null || options === void 0 ? void 0 : options.redirectUri;
        }
        if (options === null || options === void 0 ? void 0 : options.state) {
            params.state = options === null || options === void 0 ? void 0 : options.state;
        }
        if (options === null || options === void 0 ? void 0 : options.scope) {
            params.scope = options === null || options === void 0 ? void 0 : options.scope;
        }
        return `${BOX_OAUTH2_AUTH_URL}?${new URLSearchParams(params).toString()}`;
    }
    /**
     * Acquires token info using an authorization code.
     * @param {string} authorizationCode The authorization code acquired from the first step of the OAuth 2.0 process.
     * @param networkSession An object to keep network session state
     */
    getTokensAuthorizationCodeGrant(authorizationCode, networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = {
                grant_type: BOX_OAUTH2_GRANT_TYPE,
                code: authorizationCode,
                client_id: this.config.clientId,
                client_secret: this.config.clientSecret,
            };
            const params = {
                method: 'POST',
                headers: {},
                body: new URLSearchParams(requestBody).toString(),
                contentType: 'application/x-www-form-urlencoded',
                networkSession,
            };
            const response = (yield (0, fetch_js_1.fetch)(BOX_OAUTH2_TOKEN_URL, params));
            const tokenResponse = JSON.parse(response.text);
            if (!isValidOAuthTokenResponse(tokenResponse)) {
                throw new Error('Invalid token response');
            }
            this.token = tokenResponse;
            return this.token.access_token;
        });
    }
    /**
     * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
     * @param networkSession An object to keep network session state
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    retrieveToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.token) {
                throw Error('Access and refresh tokens not available. Authenticate before making any API call first.');
            }
            return this.token.access_token;
        });
    }
    /**
     * Get a new access token for the app user.
     * @param networkSession An object to keep network session state
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    refreshToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = {
                grant_type: BOX_REFRESH_TOKEN_GRANT_TYPE,
                client_id: this.config.clientId,
                client_secret: this.config.clientSecret,
                refresh_token: this.token.refresh_token,
            };
            const params = {
                method: 'POST',
                headers: {},
                body: new URLSearchParams(requestBody).toString(),
                contentType: 'application/x-www-form-urlencoded',
                networkSession,
            };
            const response = (yield (0, fetch_js_1.fetch)(BOX_OAUTH2_TOKEN_URL, params));
            this.token = JSON.parse(response.text);
            return this.token.access_token;
        });
    }
}
exports.OAuth = OAuth;
//# sourceMappingURL=oauth.js.map