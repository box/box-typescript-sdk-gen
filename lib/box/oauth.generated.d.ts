import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
export declare class OAuthConfig {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<OAuthConfig, 'tokenStorage'> & Partial<Pick<OAuthConfig, 'tokenStorage'>>);
}
export interface OAuthConfigInput {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly tokenStorage?: TokenStorage;
}
export interface GetAuthorizeUrlOptions {
    /**
     * Box API key used for identifying the application the user is authenticating with */
    readonly clientId?: string;
    /**
     * The URI to which Box redirects the browser after the user has granted or denied the application permission. This URI match one of the redirect URIs in the configuration of your application. */
    readonly redirectUri?: string;
    /**
     * The type of response we would like to receive. */
    readonly responseType?: string;
    /**
     * A custom string of your choice. Box will pass the same string to the redirect URL when authentication is complete. This parameter can be used to identify a user on redirect, as well as protect against hijacked sessions and other exploits. */
    readonly state?: string;
    /**
     * A space-separated list of application scopes you'd like to authenticate the user for. This defaults to all the scopes configured for the application in its configuration page. */
    readonly scope?: string;
}
export declare class BoxOAuth implements Authentication {
    /**
     * Configuration object of OAuth. */
    readonly config: OAuthConfig;
    /**
     * An object responsible for storing token. If no custom implementation provided, the token will be stored in memory. */
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<BoxOAuth, 'tokenStorage' | 'getAuthorizeUrl' | 'getTokensAuthorizationCodeGrant' | 'retrieveToken' | 'refreshToken' | 'retrieveAuthorizationHeader' | 'revokeToken' | 'downscopeToken'>);
    /**
     * Get the authorization URL for the app user.
     * @param {GetAuthorizeUrlOptions} options
     * @returns {string}
     */
    getAuthorizeUrl(options?: GetAuthorizeUrlOptions): string;
    /**
     * Acquires token info using an authorization code.
     * @param {string} authorizationCode The authorization code to use to get tokens.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    getTokensAuthorizationCodeGrant(authorizationCode: string, networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * Get the current access token. If the current access token is expired or not found, this method will attempt to refresh the token.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * Get a new access token for the platform app user.
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
//# sourceMappingURL=oauth.generated.d.ts.map