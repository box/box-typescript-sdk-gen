import { AccessToken } from '../schemas/accessToken.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
export interface DeveloperTokenConfig {
    readonly clientId?: string;
    readonly clientSecret?: string;
}
export declare class BoxDeveloperTokenAuth implements Authentication {
    readonly token: string;
    /**
     * Configuration object of DeveloperTokenAuth. */
    readonly config: DeveloperTokenConfig;
    /**
     * An object responsible for storing token. If no custom implementation provided, the token will be stored in memory. */
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<BoxDeveloperTokenAuth, 'tokenStorage' | 'config' | 'retrieveToken' | 'refreshToken' | 'retrieveAuthorizationHeader' | 'revokeToken' | 'downscopeToken'> & Partial<Pick<BoxDeveloperTokenAuth, 'config'>>);
    /**
     * Retrieves stored developer token
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * Developer token cannot be refreshed
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * @param {NetworkSession} networkSession
     * @returns {Promise<string>}
     */
    retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
    /**
     * Revoke an active Access Token, effectively logging a user out that has been previously authenticated.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    revokeToken(networkSession?: NetworkSession): Promise<undefined>;
    /**
     * Downscope access token to the provided scopes. Returning a new access token with the provided scopes, with the original access token unchanged.
     * @param {readonly string[]} scopes The scope(s) to apply to the resulting token.
     * @param {string} resource The file or folder to get a downscoped token for. If None and shared_link None, the resulting token will not be scoped down to just a single item. The resource should be a full URL to an item, e.g. https://api.box.com/2.0/files/123456.
     * @param {string} sharedLink The shared link to get a downscoped token for. If None and item None, the resulting token will not be scoped down to just a single item.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    downscopeToken(scopes: readonly string[], resource?: string, sharedLink?: string, networkSession?: NetworkSession): Promise<AccessToken>;
}
//# sourceMappingURL=developerTokenAuth.generated.d.ts.map