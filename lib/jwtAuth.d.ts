import jwt from 'jsonwebtoken';
import { Authentication } from './auth';
import { NetworkSession } from './network';
/**
 *  A class managing the configuration for JWT authentication.
 * @typedef {Object} JwtConfig
 */
export declare class JwtConfig {
    clientId: string;
    clientSecret: string;
    jwtKeyId: string;
    privateKey: string;
    privateKeyPassphrase: string;
    enterpriseId?: string;
    userId?: string;
    jwtAlgorithm?: jwt.Algorithm;
    constructor(fields: Omit<JwtConfig, 'fromConfigJsonString' | 'fromConfigFile'>);
    /**
     * Create a JwtConfig instance from a JSON string.
     * @param {string} configJsonString The JSON string to parse.
     * @returns {JwtConfig} The JwtConfig instance.
     */
    static fromConfigJsonString(configJsonString: string): JwtConfig;
    /**
     * Create a JwtConfig instance from a JSON file.
     * @param {string} configFilePath The path to the JSON file.
     * @returns {JwtConfig} The JwtConfig instance.
     * @throws {Error} If the file cannot be read.  If the file is not valid JSON.
     * If the file is missing required fields.
     */
    static fromConfigFile(configFilePath: string): JwtConfig;
}
/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {JwtConfig} config The JwtConfig instance.
 * @typedef {Object} JwtAuth
 */
export declare class JwtAuth implements Authentication {
    config: JwtConfig;
    token?: string;
    subjectId: string;
    subjectType: string;
    constructor({ config }: Pick<JwtAuth, 'config'>);
    /**
     * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    retrieveToken(networkSession?: NetworkSession): Promise<string>;
    /**
     * Get a new access token for the app user.
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    refreshToken(networkSession?: NetworkSession): Promise<string | undefined>;
    /**
     * Set authentication as user. The new token will be automatically fetched with a next API call.
     * @param {string} userId The ID of the user to authenticate as
     */
    asUser(userId: string): void;
    /**
     * Set authentication as enterprise. The new token will be automatically fetched with a next API call.
     * @param {string} enterpriseId The ID of the enterprise to authenticate as
     */
    asEnterprise(enterpriseId: string): void;
}
