import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { SerializedData } from '../serialization/json.js';
import { JwtAlgorithm } from '../internal/utils.js';
import { PrivateKeyDecryptor } from '../internal/utils.js';
export interface JwtConfigAppSettingsAppAuth {
    /**
     * Public key ID */
    readonly publicKeyId: string;
    /**
     * Private key */
    readonly privateKey: string;
    /**
     * Passphrase */
    readonly passphrase: string;
    readonly rawData?: SerializedData;
}
export interface JwtConfigAppSettings {
    /**
     * App client ID */
    readonly clientId: string;
    /**
     * App client secret */
    readonly clientSecret: string;
    /**
     * App auth settings */
    readonly appAuth: JwtConfigAppSettingsAppAuth;
    readonly rawData?: SerializedData;
}
export interface JwtConfigFile {
    /**
     * Enterprise ID */
    readonly enterpriseId?: string;
    /**
     * User ID */
    readonly userId?: string;
    /**
     * App settings */
    readonly boxAppSettings: JwtConfigAppSettings;
    readonly rawData?: SerializedData;
}
export declare class JwtConfig {
    /**
     * App client ID */
    readonly clientId: string;
    /**
     * App client secret */
    readonly clientSecret: string;
    /**
     * Public key ID */
    readonly jwtKeyId: string;
    /**
     * Private key */
    readonly privateKey: string;
    /**
     * Passphrase */
    readonly privateKeyPassphrase: string;
    /**
     * Enterprise ID */
    readonly enterpriseId?: string;
    /**
     * User ID */
    readonly userId?: string;
    readonly algorithm?: JwtAlgorithm;
    readonly tokenStorage: TokenStorage;
    readonly privateKeyDecryptor: PrivateKeyDecryptor;
    constructor(fields: Omit<JwtConfig, 'algorithm' | 'tokenStorage' | 'privateKeyDecryptor' | 'fromConfigJsonString' | 'fromConfigFile'> & Partial<Pick<JwtConfig, 'algorithm' | 'tokenStorage' | 'privateKeyDecryptor'>>);
    /**
     * Create an auth instance as defined by a string content of JSON file downloaded from the Box Developer Console.
     * See https://developer.box.com/en/guides/authentication/jwt/ for more information.
     * @param {string} configJsonString String content of JSON file containing the configuration.
     * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided, the token will be stored in memory
     * @param {PrivateKeyDecryptor} privateKeyDecryptor Object responsible for decrypting private key for jwt auth. If no custom implementation provided, the DefaultPrivateKeyDecryptor will be used.
     * @returns {JwtConfig}
     */
    static fromConfigJsonString(configJsonString: string, tokenStorage?: TokenStorage, privateKeyDecryptor?: PrivateKeyDecryptor): JwtConfig;
    /**
     * Create an auth instance as defined by a JSON file downloaded from the Box Developer Console.
     * See https://developer.box.com/en/guides/authentication/jwt/ for more information.
     * @param {string} configFilePath Path to the JSON file containing the configuration.
     * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided, the token will be stored in memory.
     * @param {PrivateKeyDecryptor} privateKeyDecryptor Object responsible for decrypting private key for jwt auth. If no custom implementation provided, the DefaultPrivateKeyDecryptor will be used.
     * @returns {JwtConfig}
     */
    static fromConfigFile(configFilePath: string, tokenStorage?: TokenStorage, privateKeyDecryptor?: PrivateKeyDecryptor): JwtConfig;
}
export interface JwtConfigInput {
    /**
     * App client ID */
    readonly clientId: string;
    /**
     * App client secret */
    readonly clientSecret: string;
    /**
     * Public key ID */
    readonly jwtKeyId: string;
    /**
     * Private key */
    readonly privateKey: string;
    /**
     * Passphrase */
    readonly privateKeyPassphrase: string;
    /**
     * Enterprise ID */
    readonly enterpriseId?: string;
    /**
     * User ID */
    readonly userId?: string;
    readonly algorithm?: undefined | JwtAlgorithm;
    readonly tokenStorage?: TokenStorage;
    readonly privateKeyDecryptor?: PrivateKeyDecryptor;
}
export declare class BoxJwtAuth implements Authentication {
    /**
     * An object containing all JWT configuration to use for authentication */
    readonly config: JwtConfig;
    /**
     * An object responsible for storing token. If no custom implementation provided, the token will be stored in memory. */
    readonly tokenStorage: TokenStorage;
    /**
     * The ID of the user or enterprise to authenticate as. If not provided, defaults to the enterprise ID if set, otherwise defaults to the user ID. */
    readonly subjectId?: string;
    /**
     * The type of the subject ID provided. Must be either 'user' or 'enterprise'. */
    readonly subjectType?: string;
    constructor(fields: Omit<BoxJwtAuth, 'tokenStorage' | 'subjectId' | 'subjectType' | 'refreshToken' | 'retrieveToken' | 'retrieveAuthorizationHeader' | 'withUserSubject' | 'withEnterpriseSubject' | 'downscopeToken' | 'revokeToken'>);
    /**
     * Get new access token using JWT auth.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
    /**
     * Get the current access token. If the current access token is expired or not found, this method will attempt to refresh the token.
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
     * Create a new BoxJWTAuth instance that uses the provided user ID as the subject of the JWT assertion.
     * May be one of this application's created App User. Depending on the configured User Access Level, may also be any other App User or Managed User in the enterprise.
     * <https://developer.box.com/en/guides/applications/>
     * <https://developer.box.com/en/guides/authentication/select/>
     * @param {string} userId The id of the user to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxJWTAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxJwtAuth}
     */
    withUserSubject(userId: string, tokenStorage?: TokenStorage): BoxJwtAuth;
    /**
     * Create a new BoxJWTAuth instance that uses the provided enterprise ID as the subject of the JWT assertion.
     * @param {string} enterpriseId The id of the enterprise to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxJWTAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxJwtAuth}
     */
    withEnterpriseSubject(enterpriseId: string, tokenStorage?: TokenStorage): BoxJwtAuth;
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
export declare function serializeJwtConfigAppSettingsAppAuth(val: JwtConfigAppSettingsAppAuth): SerializedData;
export declare function deserializeJwtConfigAppSettingsAppAuth(val: SerializedData): JwtConfigAppSettingsAppAuth;
export declare function serializeJwtConfigAppSettings(val: JwtConfigAppSettings): SerializedData;
export declare function deserializeJwtConfigAppSettings(val: SerializedData): JwtConfigAppSettings;
export declare function serializeJwtConfigFile(val: JwtConfigFile): SerializedData;
export declare function deserializeJwtConfigFile(val: SerializedData): JwtConfigFile;
//# sourceMappingURL=jwtAuth.generated.d.ts.map