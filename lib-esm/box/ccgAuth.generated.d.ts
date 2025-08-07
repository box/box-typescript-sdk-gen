import { AccessToken } from '../schemas/accessToken.generated.js';
import { PostOAuth2TokenBoxSubjectTypeField } from '../schemas/postOAuth2Token.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
export declare class CcgConfig {
    /**
     * Box API key used for identifying the application the user is authenticating with */
    readonly clientId: string;
    /**
     * Box API secret used for making auth requests. */
    readonly clientSecret: string;
    /**
     * The ID of the Box Developer Edition enterprise. */
    readonly enterpriseId?: string;
    /**
     * The user id to authenticate. This value is not required. But if it is provided, then the user will be auto-authenticated at the time of the first API call. */
    readonly userId?: string;
    /**
     * Object responsible for storing token. If no custom implementation provided,the token will be stored in memory. */
    readonly tokenStorage: TokenStorage;
    constructor(fields: Omit<CcgConfig, 'tokenStorage'> & Partial<Pick<CcgConfig, 'tokenStorage'>>);
}
export interface CcgConfigInput {
    /**
     * Box API key used for identifying the application the user is authenticating with */
    readonly clientId: string;
    /**
     * Box API secret used for making auth requests. */
    readonly clientSecret: string;
    /**
     * The ID of the Box Developer Edition enterprise. */
    readonly enterpriseId?: string;
    /**
     * The user id to authenticate. This value is not required. But if it is provided, then the user will be auto-authenticated at the time of the first API call. */
    readonly userId?: string;
    /**
     * Object responsible for storing token. If no custom implementation provided,the token will be stored in memory. */
    readonly tokenStorage?: TokenStorage;
}
export declare class BoxCcgAuth implements Authentication {
    /**
     * Configuration object of Client Credentials Grant auth. */
    readonly config: CcgConfig;
    /**
     * An object responsible for storing token. If no custom implementation provided, the token will be stored in memory. */
    readonly tokenStorage: TokenStorage;
    /**
     * The ID of the user or enterprise to authenticate as. If not provided, defaults to the enterprise ID if set, otherwise defaults to the user ID. */
    readonly subjectId?: string;
    /**
     * The type of the subject ID provided. Must be either 'user' or 'enterprise'. */
    readonly subjectType?: PostOAuth2TokenBoxSubjectTypeField;
    constructor(fields: Omit<BoxCcgAuth, 'tokenStorage' | 'subjectId' | 'subjectType' | 'refreshToken' | 'retrieveToken' | 'retrieveAuthorizationHeader' | 'withUserSubject' | 'withEnterpriseSubject' | 'downscopeToken' | 'revokeToken'>);
    /**
     * Get a new access token using CCG auth
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * Return a current token or get a new one when not available.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * @param {NetworkSession} networkSession
     * @returns {Promise<string>}
     */
    retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
    /**
     * Create a new BoxCCGAuth instance that uses the provided user ID as the subject ID.
     * May be one of this application's created App User. Depending on the configured User Access Level, may also be any other App User or Managed User in the enterprise.
     * <https://developer.box.com/en/guides/applications/>
     * <https://developer.box.com/en/guides/authentication/select/>
     * @param {string} userId The id of the user to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxCCGAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxCcgAuth}
     */
    withUserSubject(userId: string, tokenStorage?: TokenStorage): BoxCcgAuth;
    /**
     * Create a new BoxCCGAuth instance that uses the provided enterprise ID as the subject ID.
     * @param {string} enterpriseId The id of the enterprise to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxCCGAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxCcgAuth}
     */
    withEnterpriseSubject(enterpriseId: string, tokenStorage?: TokenStorage): BoxCcgAuth;
    /**
     * Downscope access token to the provided scopes. Returning a new access token with the provided scopes, with the original access token unchanged.
     * @param {readonly string[]} scopes The scope(s) to apply to the resulting token.
     * @param {string} resource The file or folder to get a downscoped token for. If None and shared_link None, the resulting token will not be scoped down to just a single item. The resource should be a full URL to an item, e.g. https://api.box.com/2.0/files/123456.
     * @param {string} sharedLink The shared link to get a downscoped token for. If None and item None, the resulting token will not be scoped down to just a single item.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    downscopeToken(scopes: readonly string[], resource?: string, sharedLink?: string, networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * Revoke the current access token and remove it from token storage.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    revokeToken(networkSession?: NetworkSession): Promise<undefined>;
}
