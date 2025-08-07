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
exports.BoxDeveloperTokenAuth = void 0;
const network_generated_js_1 = require("../networking/network.generated.js");
const errors_js_1 = require("./errors.js");
const tokenStorage_generated_js_1 = require("./tokenStorage.generated.js");
const authorization_generated_js_1 = require("../managers/authorization.generated.js");
class BoxDeveloperTokenAuth {
    constructor(fields) {
        /**
         * Configuration object of DeveloperTokenAuth. */
        this.config = {};
        if (fields.token !== undefined) {
            this.token = fields.token;
        }
        if (fields.config !== undefined) {
            this.config = fields.config;
        }
        this.tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({
            token: { accessToken: this.token },
        });
    }
    /**
     * Retrieves stored developer token
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenStorage.get();
            if (token == void 0) {
                throw new errors_js_1.BoxSdkError({ message: 'No access token is available.' });
            }
            return token;
        });
    }
    /**
     * Developer token cannot be refreshed
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new errors_js_1.BoxSdkError({
                message: 'Developer token has expired. Please provide a new one.',
            });
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
            yield this.tokenStorage.clear();
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
exports.BoxDeveloperTokenAuth = BoxDeveloperTokenAuth;
//# sourceMappingURL=developerTokenAuth.generated.js.map