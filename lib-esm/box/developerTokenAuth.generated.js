import { NetworkSession } from '../networking/network.generated.js';
import { BoxSdkError } from './errors.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { AuthorizationManager } from '../managers/authorization.generated.js';
export class BoxDeveloperTokenAuth {
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
        this.tokenStorage = new InMemoryTokenStorage({
            token: { accessToken: this.token },
        });
    }
    /**
     * Retrieves stored developer token
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    async retrieveToken(networkSession) {
        const token = await this.tokenStorage.get();
        if (token == void 0) {
            throw new BoxSdkError({ message: 'No access token is available.' });
        }
        return token;
    }
    /**
     * Developer token cannot be refreshed
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    async refreshToken(networkSession) {
        throw new BoxSdkError({
            message: 'Developer token has expired. Please provide a new one.',
        });
    }
    /**
     * @param {NetworkSession} networkSession
     * @returns {Promise<string>}
     */
    async retrieveAuthorizationHeader(networkSession) {
        const token = await this.retrieveToken(networkSession);
        return ''.concat('Bearer ', token.accessToken);
    }
    /**
     * Revoke an active Access Token, effectively logging a user out that has been previously authenticated.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    async revokeToken(networkSession) {
        const token = await this.tokenStorage.get();
        if (token == void 0) {
            return void 0;
        }
        const authManager = new AuthorizationManager({
            networkSession: !(networkSession == void 0)
                ? networkSession
                : new NetworkSession({}),
        });
        await authManager.revokeAccessToken({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            token: token.accessToken,
        });
        await this.tokenStorage.clear();
        return void 0;
    }
    /**
     * Downscope access token to the provided scopes. Returning a new access token with the provided scopes, with the original access token unchanged.
     * @param {readonly string[]} scopes The scope(s) to apply to the resulting token.
     * @param {string} resource The file or folder to get a downscoped token for. If None and shared_link None, the resulting token will not be scoped down to just a single item. The resource should be a full URL to an item, e.g. https://api.box.com/2.0/files/123456.
     * @param {string} sharedLink The shared link to get a downscoped token for. If None and item None, the resulting token will not be scoped down to just a single item.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    async downscopeToken(scopes, resource, sharedLink, networkSession) {
        const token = await this.retrieveToken(networkSession);
        if (token == void 0 || token.accessToken == void 0) {
            throw new BoxSdkError({ message: 'No access token is available.' });
        }
        const authManager = new AuthorizationManager({
            networkSession: !(networkSession == void 0)
                ? networkSession
                : new NetworkSession({}),
        });
        const downscopedToken = await authManager.requestAccessToken({
            grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
            subjectToken: token.accessToken,
            subjectTokenType: 'urn:ietf:params:oauth:token-type:access_token',
            scope: scopes.join(' '),
            resource: resource,
            boxSharedLink: sharedLink,
        });
        return downscopedToken;
    }
}
//# sourceMappingURL=developerTokenAuth.generated.js.map