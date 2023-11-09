import { Authentication } from './auth';
import {
  TokenRequest,
  TokenRequestBoxSubjectType,
  TokenRequestGrantType,
} from './authSchemas';
import { FetchOptions, FetchResponse, fetch } from './fetch.js';
import { NetworkSession } from './network';
import { AccessToken, deserializeAccessToken } from './schemas.generated.js';
import { InMemoryTokenStorage, TokenStorage } from './tokenStorage.generated';

export class CcgConfig {
  clientId: string;
  clientSecret: string;
  enterpriseId?: string;
  userId?: string;
  tokenStorage?: TokenStorage;

  constructor(fields: CcgConfig) {
    this.clientId = fields.clientId;
    this.clientSecret = fields.clientSecret;
    this.enterpriseId = fields.enterpriseId;
    this.userId = fields.userId;
    this.tokenStorage = fields.tokenStorage ?? new InMemoryTokenStorage({});
  }
}

export class BoxCcgAuth implements Authentication {
  config: CcgConfig;
  token?: AccessToken;
  subjectId: string;
  subjectType: string;
  tokenStorage: TokenStorage;

  constructor({ config }: Pick<BoxCcgAuth, 'config'>) {
    if (!config.enterpriseId && !config.userId) {
      throw new Error('Enterprise ID or User ID is needed');
    }
    this.config = config;
    this.tokenStorage = config.tokenStorage!;

    if (this.config.userId) {
      this.subjectId = this.config.userId!;
      this.subjectType = 'user' as TokenRequestBoxSubjectType;
    } else {
      this.subjectId = this.config.enterpriseId!;
      this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    }
  }

  /**
   * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
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
    const requestBody = {
      grant_type: 'client_credentials' as TokenRequestGrantType,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      box_subject_id: this.subjectId,
      box_subject_type: this.subjectType,
    } as TokenRequest;

    const response = (await fetch('https://api.box.com/oauth2/token', {
      method: 'POST',
      data: requestBody as Record<string, any>,
      contentType: 'application/x-www-form-urlencoded',
      networkSession: networkSession,
    } as FetchOptions)) as FetchResponse;

    const newToken = deserializeAccessToken(response.data);
    await this.tokenStorage.store(newToken);
    return newToken;
  }

  async asUser(userId: string) {
    this.subjectId = userId;
    this.subjectType = 'user' as TokenRequestBoxSubjectType;
    await this.tokenStorage.clear();
  }

  async asEnterprise(enterpriseId: string) {
    this.subjectId = enterpriseId;
    this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    await this.tokenStorage.clear();
  }
}
