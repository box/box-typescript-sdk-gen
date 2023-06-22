import { AccessToken } from './authSchemas.js';
import { Authentication } from './auth.js';
import { NetworkSession } from './network.js';
/**
 *  A class managing the configuration for OAuth authentication.
 * @typedef {Object} OAuthConfig
 */
export interface OAuthConfig {
    clientId: string;
    clientSecret: string;
}
/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {OAuthConfig} config The OAuthConfig instance.
 * @typedef {Object} OAuthConfig
 */
export declare class OAuth implements Authentication {
    config: OAuthConfig;
    token?: AccessToken;
    constructor({ config }: {
        config: OAuthConfig;
    });
    /**
     * Get the authorization URL for the app user.
     * @param {Object} options The parameters for the authorization URL.
     * @param {string} options.clientId The Client ID of the application that is requesting to authenticate the user.
     * @param {string} options.redirectUri The URI to which Box redirects the browser after the user has granted or denied the application permission.
     * @param {string} options.responseType The type of response we'd like to receive. Must be 'code'.
     * @param {string} [options.state] A custom string of your choice. Box will pass the same string to the redirect URL when authentication is complete.
     * @param {string} [options.scope] A comma-separated list of application scopes you'd like to authenticate the user for.
     */
    getAuthorizeUrl(options?: {
        clientId?: string;
        redirectUri?: string;
        responseType?: string;
        state?: string;
        scope?: string;
    }): string;
    /**
     * Acquires token info using an authorization code.
     * @param {string} authorizationCode The authorization code acquired from the first step of the OAuth 2.0 process.
     * @param networkSession An object to keep network session state
     */
    getTokensAuthorizationCodeGrant(authorizationCode: string, networkSession?: NetworkSession): Promise<string>;
    /**
     * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
     * @param networkSession An object to keep network session state
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    retrieveToken(networkSession?: NetworkSession): Promise<string>;
    /**
     * Get a new access token for the app user.
     * @param networkSession An object to keep network session state
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    refreshToken(networkSession?: NetworkSession): Promise<string | undefined>;
}
