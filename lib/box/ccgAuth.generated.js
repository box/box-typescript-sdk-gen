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
exports.BoxCcgAuth = exports.CcgConfig = void 0;
const network_generated_js_1 = require("../networking/network.generated.js");
const tokenStorage_generated_js_1 = require("./tokenStorage.generated.js");
const authorization_generated_js_1 = require("../managers/authorization.generated.js");
const errors_js_1 = require("./errors.js");
class CcgConfig {
    constructor(fields) {
        /**
         * Object responsible for storing token. If no custom implementation provided,the token will be stored in memory. */
        this.tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({});
        if (fields.clientId !== undefined) {
            this.clientId = fields.clientId;
        }
        if (fields.clientSecret !== undefined) {
            this.clientSecret = fields.clientSecret;
        }
        if (fields.enterpriseId !== undefined) {
            this.enterpriseId = fields.enterpriseId;
        }
        if (fields.userId !== undefined) {
            this.userId = fields.userId;
        }
        if (fields.tokenStorage !== undefined) {
            this.tokenStorage = fields.tokenStorage;
        }
    }
}
exports.CcgConfig = CcgConfig;
class BoxCcgAuth {
    constructor(fields) {
        if (fields.config !== undefined) {
            this.config = fields.config;
        }
        this.tokenStorage = this.config.tokenStorage;
        this.subjectId = !(this.config.userId == void 0)
            ? this.config.userId
            : this.config.enterpriseId;
        this.subjectType = !(this.config.userId == void 0)
            ? 'user'
            : 'enterprise';
    }
    /**
     * Get a new access token using CCG auth
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            const token = yield authManager.requestAccessToken({
                grantType: 'client_credentials',
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
                boxSubjectType: this.subjectType,
                boxSubjectId: this.subjectId,
            });
            yield this.tokenStorage.store(token);
            return token;
        });
    }
    /**
     * Return a current token or get a new one when not available.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            if (oldToken == void 0) {
                const newToken = yield this.refreshToken(networkSession);
                return newToken;
            }
            return oldToken;
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
     * Create a new BoxCCGAuth instance that uses the provided user ID as the subject ID.
     * May be one of this application's created App User. Depending on the configured User Access Level, may also be any other App User or Managed User in the enterprise.
     * <https://developer.box.com/en/guides/applications/>
     * <https://developer.box.com/en/guides/authentication/select/>
     * @param {string} userId The id of the user to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxCCGAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxCcgAuth}
     */
    withUserSubject(userId, tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({})) {
        const newConfig = new CcgConfig({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            enterpriseId: this.config.enterpriseId,
            userId: userId,
            tokenStorage: tokenStorage,
        });
        return new BoxCcgAuth({ config: newConfig });
    }
    /**
     * Create a new BoxCCGAuth instance that uses the provided enterprise ID as the subject ID.
     * @param {string} enterpriseId The id of the enterprise to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxCCGAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxCcgAuth}
     */
    withEnterpriseSubject(enterpriseId, tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({})) {
        const newConfig = new CcgConfig({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            enterpriseId: enterpriseId,
            userId: void 0,
            tokenStorage: tokenStorage,
        });
        return new BoxCcgAuth({ config: newConfig });
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
            if (token == void 0) {
                throw new errors_js_1.BoxSdkError({
                    message: 'No access token is available. Make an API call to retrieve a token before calling this method.',
                });
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
    /**
     * Revoke the current access token and remove it from token storage.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    revokeToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            if (oldToken == void 0) {
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
                token: oldToken.accessToken,
            });
            yield this.tokenStorage.clear();
            return void 0;
        });
    }
}
exports.BoxCcgAuth = BoxCcgAuth;
//# sourceMappingURL=ccgAuth.generated.js.map