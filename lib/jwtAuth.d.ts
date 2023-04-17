import jwt from 'jsonwebtoken';
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
     * @param {string} config_json_string The JSON string to parse.
     * @returns {JwtConfig} The JwtConfig instance.
     */
    static fromConfigJsonString(config_json_string: string): JwtConfig;
    /**
     * Create a JwtConfig instance from a JSON file.
     * @param {string} config_file_path The path to the JSON file.
     * @returns {JwtConfig} The JwtConfig instance.
     * @throws {Error} If the file cannot be read.  If the file is not valid JSON.
     * If the file is missing required fields.
     */
    static fromConfigFile(config_file_path: string): JwtConfig;
}
/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {JwtConfig} config The JwtConfig instance.
 * @typedef {Object} JwtAuth
 */
export declare class JwtAuth {
    config: JwtConfig;
    token?: string;
    subjectId: string;
    subjectType: string;
    constructor({ config }: Pick<JwtAuth, 'config'>);
    /**
     * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    retrieveToken(): Promise<string>;
    /**
     * Get a new access token for the app user.
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    refreshToken(): Promise<string | undefined>;
    /**
     * Authenticate as a user
     * @param {string} userId The ID of the user to authenticate as
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    authenticateUser(userId: string): Promise<string | undefined>;
    /**
     * Authenticate as an enterprise
     * @param {string} enterpriseId The ID of the enterprise to authenticate as
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    authenticateEnterprise(enterpriseId: string): Promise<string | undefined>;
}
