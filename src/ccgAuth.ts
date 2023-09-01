import { Authentication } from './auth';
import {
  TokenRequest,
  TokenRequestBoxSubjectType,
  TokenRequestGrantType,
} from './authSchemas';
import { FetchOptions, FetchResponse, fetch } from './fetch.js';
import { NetworkSession } from './network';
import { AccessToken, deserializeAccessToken } from './schemas.generated.js';

export type CcgConfig = {
  clientId: string;
  clientSecret: string;
  enterpriseId?: string;
  userId?: string;
};

export class CcgAuth implements Authentication {
  config: CcgConfig;
  token?: AccessToken;
  subjectId: string;
  subjectType: string;

  constructor({ config }: Pick<CcgAuth, 'config'>) {
    if (!config.enterpriseId && !config.userId) {
      throw new Error('Enterprise ID or User ID is needed');
    }
    this.config = config;

    if (this.config.userId) {
      this.subjectId = this.config.userId!;
      this.subjectType = 'user' as TokenRequestBoxSubjectType;
    } else {
      this.subjectId = this.config.enterpriseId!;
      this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    }
  }

  async retrieveToken(networkSession?: NetworkSession) {
    if (!this.token) {
      await this.refreshToken(networkSession);
    }
    return this.token!;
  }

  async refreshToken(networkSession?: NetworkSession) {
    const requestBody = {
      grant_type: 'client_credentials' as TokenRequestGrantType,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      box_subject_id: this.subjectId,
      box_subject_type: this.subjectType,
    } as TokenRequest;

    const response = (await fetch('https://api.box.com/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams(
        requestBody as unknown as Record<string, string>
      ).toString(),
      contentType: 'application/x-www-form-urlencoded',
      networkSession: networkSession,
    } as FetchOptions)) as FetchResponse;

    this.token = deserializeAccessToken(JSON.parse(response.text));
    return this.token;
  }

  asUser(userId: string) {
    this.subjectId = userId;
    this.subjectType = 'user' as TokenRequestBoxSubjectType;
    this.token = undefined;
  }

  asEnterprise(enterpriseId: string) {
    this.subjectId = enterpriseId;
    this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    this.token = undefined;
  }
}
