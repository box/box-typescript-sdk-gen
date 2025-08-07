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
exports.BoxOAuth = exports.OAuthConfig = void 0;
const network_generated_js_1 = require("../networking/network.generated.js");
const authorization_generated_js_1 = require("../managers/authorization.generated.js");
const tokenStorage_generated_js_1 = require("./tokenStorage.generated.js");
const json_js_1 = require("../serialization/json.js");
const utils_js_1 = require("../internal/utils.js");
const errors_js_1 = require("./errors.js");
class OAuthConfig {
    constructor(fields) {
        this.tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({});
        if (fields.clientId !== undefined) {
            this.clientId = fields.clientId;
        }
        if (fields.clientSecret !== undefined) {
            this.clientSecret = fields.clientSecret;
        }
        if (fields.tokenStorage !== undefined) {
            this.tokenStorage = fields.tokenStorage;
        }
    }
}
exports.OAuthConfig = OAuthConfig;
class BoxOAuth {
    constructor(fields) {
        if (fields.config !== undefined) {
            this.config = fields.config;
        }
        this.tokenStorage = this.config.tokenStorage;
    }
    /**
     * Get the authorization URL for the app user.
     * @param {GetAuthorizeUrlOptions} options
     * @returns {string}
     */
    getAuthorizeUrl(options = {}) {
        const paramsMap = (0, utils_js_1.prepareParams)({
            ['client_id']: !(options.clientId == void 0)
                ? options.clientId
                : this.config.clientId,
            ['response_type']: !(options.responseType == void 0)
                ? options.responseType
                : 'code',
            ['redirect_uri']: options.redirectUri,
            ['state']: options.state,
            ['scope']: options.scope,
        });
        return ''.concat('https://account.box.com/api/oauth2/authorize?', (0, json_js_1.sdToUrlParams)(JSON.stringify(paramsMap)));
    }
    /**
     * Acquires token info using an authorization code.
     * @param {string} authorizationCode The authorization code to use to get tokens.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    getTokensAuthorizationCodeGrant(authorizationCode, networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            const token = yield authManager.requestAccessToken({
                grantType: 'authorization_code',
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
                code: authorizationCode,
            });
            yield this.tokenStorage.store(token);
            return token;
        });
    }
    /**
     * Get the current access token. If the current access token is expired or not found, this method will attempt to refresh the token.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenStorage.get();
            if (token == void 0) {
                throw new errors_js_1.BoxSdkError({
                    message: 'Access and refresh tokens not available. Authenticate before making any API call first.',
                });
            }
            return token;
        });
    }
    /**
     * Get a new access token for the platform app user.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            const tokenUsedForRefresh = !(oldToken == void 0)
                ? oldToken.refreshToken
                : void 0;
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            const token = yield authManager.requestAccessToken({
                grantType: 'refresh_token',
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
                refreshToken: tokenUsedForRefresh,
            });
            yield this.tokenStorage.store(token);
            return token;
        });
    }
    /**
     * @param {NetworkSession} networkSession
     * @returns {Promise<string>}
     */
    retrieveAuthorizationHeader(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.retrieveToken(networkSession);
            return ''.concat('Bearer ', token.accessToken);
        });
    }
    /**
     * Revoke an active Access Token, effectively logging a user out that has been previously authenticated.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    revokeToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenStorage.get();
            if (token == void 0) {
                return void 0;
            }
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            yield authManager.revokeAccessToken({
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
                token: token.accessToken,
            });
            return void 0;
        });
    }
    /**
     * Downscope access token to the provided scopes. Returning a new access token with the provided scopes, with the original access token unchanged.
     * @param {readonly string[]} scopes The scope(s) to apply to the resulting token.
     * @param {string} resource The file or folder to get a downscoped token for. If None and shared_link None, the resulting token will not be scoped down to just a single item. The resource should be a full URL to an item, e.g. https://api.box.com/2.0/files/123456.
     * @param {string} sharedLink The shared link to get a downscoped token for. If None and item None, the resulting token will not be scoped down to just a single item.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    downscopeToken(scopes, resource, sharedLink, networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.retrieveToken(networkSession);
            if (token == void 0 || token.accessToken == void 0) {
                throw new errors_js_1.BoxSdkError({ message: 'No access token is available.' });
            }
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            const downscopedToken = yield authManager.requestAccessToken({
                grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
                subjectToken: token.accessToken,
                subjectTokenType: 'urn:ietf:params:oauth:token-type:access_token',
                scope: scopes.join(' '),
                resource: resource,
                boxSharedLink: sharedLink,
            });
            return downscopedToken;
        });
    }
}
exports.BoxOAuth = BoxOAuth;
//# sourceMappingURL=oauth.generated.js.map