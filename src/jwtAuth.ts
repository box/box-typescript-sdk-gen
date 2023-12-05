import type * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { Authentication } from './auth';
import {
  TokenRequestBoxSubjectType,
  TokenRequestGrantType,
} from './authSchemas.js';
import { AuthorizationManager } from './managers/authorization.generated';
import { NetworkSession } from './network';
import { AccessToken } from './schemas.generated.js';
import { InMemoryTokenStorage, TokenStorage } from './tokenStorage.generated';
import { isBrowser } from './utils.js';

const BOX_JWT_AUDIENCE = 'https://api.box.com/oauth2/token';
const BOX_JWT_GRANT_TYPE: TokenRequestGrantType =
  'urn:ietf:params:oauth:grant-type:jwt-bearer';

/**
 * Determines if a given string could represent an authorization code or token.
 *
 * @param {string} codeOrToken The code or token to check.
 * @returns {boolean} True if codeOrToken is valid, false if not.
 * @private
 */
function isValidCodeOrToken(codeOrToken: string) {
  return typeof codeOrToken === 'string' && codeOrToken.length > 0;
}

/**
 * Determines if a token grant response is valid
 *
 * @param {string} grantType the type of token grant
 * @param {Object} responseBody the body of the response to check
 * @returns {boolean} True if response body has expected fields, false if not.
 * @private
 */
function isValidTokenResponse(
  grantType: string,
  responseBody: Record<string, any> /* FIXME */
) {
  if (!isValidCodeOrToken(responseBody.access_token)) {
    return false;
  }
  if (typeof responseBody.expires_in !== 'number') {
    return false;
  }
  // Check the refresh_token for certain types of grants
  if (grantType === 'authorization_code' || grantType === 'refresh_token') {
    if (!isValidCodeOrToken(responseBody.refresh_token)) {
      return false;
    }
  }
  return true;
}

/**
 *  A class managing the configuration for JWT authentication.
 * @typedef {Object} JwtConfig
 */
export class JwtConfig {
  clientId!: string;
  clientSecret!: string;
  jwtKeyId!: string;
  privateKey!: string;
  privateKeyPassphrase!: string;
  enterpriseId?: string;
  userId?: string;
  jwtAlgorithm?: jwt.Algorithm;
  tokenStorage?: TokenStorage;

  constructor(
    fields: Omit<JwtConfig, 'fromConfigJsonString' | 'fromConfigFile'>
  ) {
    if (!fields.enterpriseId && !fields.userId) {
      throw new Error('Enterprise ID or User ID is needed');
    }
    Object.assign(this, fields);
    this.jwtAlgorithm = fields.jwtAlgorithm ?? 'RS256';
    this.tokenStorage = fields.tokenStorage ?? new InMemoryTokenStorage({});
  }

  /**
   * Create a JwtConfig instance from a JSON string.
   * @param {string} configJsonString The JSON string to parse.
   * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided,
   *  the token will be stored in memory.
   * @returns {JwtConfig} The JwtConfig instance.
   */
  static fromConfigJsonString(
    configJsonString: string,
    tokenStorage?: TokenStorage
  ): JwtConfig {
    let config;
    try {
      config = JSON.parse(configJsonString);
    } catch (err) {
      throw new Error('Unable to parse the JWT configuration.');
    }
    if (!config['boxAppSettings']) {
      throw new Error(
        'boxAppSettings is missing from the config file. Please check the config file.'
      );
    }
    if (!config['boxAppSettings']['appAuth']) {
      throw new Error(
        'appAuth is missing from the config file. Please check the config file.'
      );
    }

    return new JwtConfig({
      clientId: config['boxAppSettings']['clientID'],
      clientSecret: config['boxAppSettings']['clientSecret'],
      enterpriseId: config['enterpriseID'],
      userId: config['userID'],
      jwtKeyId: config['boxAppSettings']['appAuth']['publicKeyID'],
      privateKey: config['boxAppSettings']['appAuth']['privateKey'],
      privateKeyPassphrase: config['boxAppSettings']['appAuth']['passphrase'],
      tokenStorage: tokenStorage,
    });
  }

  /**
   * Create a JwtConfig instance from a JSON file.
   * @param {string} configFilePath The path to the JSON file.
   * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided,
   *  the token will be stored in memory.
   * @returns {JwtConfig} The JwtConfig instance.
   * @throws {Error} If the file cannot be read.  If the file is not valid JSON.
   * If the file is missing required fields.
   */
  static fromConfigFile(
    configFilePath: string,
    tokenStorage?: TokenStorage
  ): JwtConfig {
    if (isBrowser()) {
      throw new Error('JWT is unavailble in browser environment');
    }

    const { readFileSync } = eval('require')('fs');
    const config = readFileSync(configFilePath, 'utf8');
    return JwtConfig.fromConfigJsonString(config, tokenStorage);
  }
}

/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {JwtConfig} config The JwtConfig instance.
 * @typedef {Object} BoxJwtAuth
 */
export class BoxJwtAuth implements Authentication {
  config: JwtConfig;
  token?: AccessToken;
  subjectId: string;
  subjectType: string;
  tokenStorage: TokenStorage;

  constructor({ config }: Pick<BoxJwtAuth, 'config'>) {
    this.config = config;
    this.tokenStorage = config.tokenStorage!;

    if (this.config.enterpriseId) {
      this.subjectId = this.config.enterpriseId!;
      this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    } else {
      this.subjectId = this.config.userId!;
      this.subjectType = 'user' as TokenRequestBoxSubjectType;
    }
  }

  /**
   * Get the access token for the app user. If the token is not cached or is expired, a new one will be fetched.
   * @param networkSession An object to keep network session state
   * @returns {Promise<AccessToken>} A promise resolving to the access token.
   */
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const token = await this.tokenStorage.get();
    if (!token) {
      return (await this.refreshToken(networkSession))!;
    }
    return token;
  }

  /**
   * Get a new access token for the app user.
   * @param networkSession An object to keep network session state
   * @returns {Promise<AccessToken>} A promise resolving to the access token.
   */
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    if (isBrowser()) {
      throw new Error('JWT is unavailble in browser environment');
    }

    const expInSec = Math.floor(Date.now() / 1000) + 30;
    const claims = {
      exp: expInSec,
      box_sub_type: this.subjectType,
    };
    const jwtOptions: jwt.SignOptions = {
      algorithm: this.config.jwtAlgorithm,
      audience: BOX_JWT_AUDIENCE,
      subject: this.subjectId,
      issuer: this.config.clientId,
      jwtid: uuidv4(),
      keyid: this.config.jwtKeyId,
    };
    const keyParams = {
      key: this.config.privateKey,
      passphrase: this.config.privateKeyPassphrase,
    };

    const assertion = eval('require')('jsonwebtoken').sign(
      claims,
      keyParams,
      jwtOptions
    );

    const newToken = await new AuthorizationManager({
      networkSession,
    }).createOauth2Token({
      grantType: BOX_JWT_GRANT_TYPE,
      assertion,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    });

    await this.tokenStorage.store(newToken);
    return newToken;
  }

  /**
   * Set authentication as user. The new token will be automatically fetched with a next API call.
   * @param {string} userId The ID of the user to authenticate as
   */
  async asUser(userId: string) {
    this.subjectId = userId;
    this.subjectType = 'user' as TokenRequestBoxSubjectType;
    await this.tokenStorage.clear();
  }

  /**
   * Set authentication as enterprise. The new token will be automatically fetched with a next API call.
   * @param {string} enterpriseId The ID of the enterprise to authenticate as
   */
  async asEnterprise(enterpriseId: string) {
    this.subjectId = enterpriseId;
    this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    await this.tokenStorage.clear();
  }
}
