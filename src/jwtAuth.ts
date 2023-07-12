import {
  AccessToken,
  TokenRequest,
  TokenRequestBoxSubjectType,
  TokenRequestGrantType,
} from './authSchemas.js';
import { readFileSync } from 'fs';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { Authentication } from './auth';
import { NetworkSession } from './network';
import { fetch, FetchResponse } from './fetch.js';

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

  constructor(
    fields: Omit<JwtConfig, 'fromConfigJsonString' | 'fromConfigFile'>
  ) {
    if (!fields.enterpriseId && !fields.userId) {
      throw new Error('Enterprise ID or User ID is needed');
    }
    Object.assign(this, fields);
    this.jwtAlgorithm = fields.jwtAlgorithm ?? 'RS256';
  }

  /**
   * Create a JwtConfig instance from a JSON string.
   * @param {string} configJsonString The JSON string to parse.
   * @returns {JwtConfig} The JwtConfig instance.
   */
  static fromConfigJsonString(configJsonString: string): JwtConfig {
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
    });
  }

  /**
   * Create a JwtConfig instance from a JSON file.
   * @param {string} configFilePath The path to the JSON file.
   * @returns {JwtConfig} The JwtConfig instance.
   * @throws {Error} If the file cannot be read.  If the file is not valid JSON.
   * If the file is missing required fields.
   */
  static fromConfigFile(configFilePath: string): JwtConfig {
    const config = readFileSync(configFilePath, 'utf8');
    return JwtConfig.fromConfigJsonString(config);
  }
}

/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {JwtConfig} config The JwtConfig instance.
 * @typedef {Object} JwtAuth
 */
export class JwtAuth implements Authentication {
  config: JwtConfig;
  token?: string;
  subjectId: string;
  subjectType: string;

  constructor({ config }: Pick<JwtAuth, 'config'>) {
    this.config = config;

    if (this.config.enterpriseId) {
      this.subjectId = this.config.enterpriseId!;
      this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    } else {
      this.subjectId = this.config.userId!;
      this.subjectType = 'user' as TokenRequestBoxSubjectType;
    }
  }

  /**
   * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
   * @returns {Promise<string>} A promise resolving to the access token.
   */
  async retrieveToken(networkSession?: NetworkSession): Promise<string> {
    if (!this.token) {
      await this.refreshToken(networkSession);
    }
    return this.token!;
  }

  /**
   * Get a new access token for the app user.
   * @returns {Promise<string>} A promise resolving to the access token.
   */
  async refreshToken(
    networkSession?: NetworkSession
  ): Promise<string | undefined> {
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
      jwtid: uuid(),
      keyid: this.config.jwtKeyId,
    };
    const keyParams = {
      key: this.config.privateKey,
      passphrase: this.config.privateKeyPassphrase,
    };

    const assertion = jwt.sign(claims, keyParams, jwtOptions);

    const requestBody: TokenRequest = {
      grant_type: BOX_JWT_GRANT_TYPE,
      assertion: assertion,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
    };
    const params = {
      method: 'POST',
      headers: {} as Record<string, any>,
      body: new URLSearchParams(
        requestBody as unknown as Record<string, string>
      ).toString(),
      contentType: 'application/x-www-form-urlencoded',
      networkSession,
    };

    const response = (await fetch(BOX_JWT_AUDIENCE, params)) as FetchResponse;
    const tokenResponse = JSON.parse(response.text) as AccessToken;
    this.token = tokenResponse.access_token;
    return this.token;
  }

  /**
   * Set authentication as user. The new token will be automatically fetched with a next API call.
   * @param {string} userId The ID of the user to authenticate as
   */
  asUser(userId: string) {
    this.subjectId = userId;
    this.subjectType = 'user' as TokenRequestBoxSubjectType;
    this.token = undefined;
  }

  /**
   * Set authentication as enterprise. The new token will be automatically fetched with a next API call.
   * @param {string} enterpriseId The ID of the enterprise to authenticate as
   */
  asEnterprise(enterpriseId: string) {
    this.subjectId = enterpriseId;
    this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    this.token = undefined;
  }
}