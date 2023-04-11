import {
  AccessToken,
  TokenRequest,
  TokenRequestBoxSubjectType,
  TokenRequestGrantType,
} from './authSchemas';

export class JWTConfig {
  clientId!: string;
  clientSecret!: string;
  jwtKeyId!: string;
  privateKey!: string;
  privateKeyPassphrase!: string;
  enterpriseId?: string;
  userId?: string;
  jwtAlgorithm?: string;

  constructor(
    fields: Omit<JWTConfig, 'fromConfigJsonString' | 'fromConfigFile'>
  ) {
    if (!fields.enterpriseId && !fields.userId) {
      throw new Error('Enterprise ID or User ID is needed');
    }
    Object.assign(this, fields);
    this.jwtAlgorithm = fields.jwtAlgorithm ?? 'RS256';
  }

  static fromConfigJsonString() {}

  static fromConfigFile() {}
}

export class JWTAuth {
  config: JWTConfig;
  token?: string;
  subjectId: string;
  subjectType: string;

  constructor(config: JWTConfig) {
    this.config = config;

    if (this.config.enterpriseId) {
      this.subjectId = this.config.enterpriseId!;
      this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    } else {
      this.subjectId = this.config.userId!;
      this.subjectType = 'user' as TokenRequestBoxSubjectType;
    }
  }

  async retrieveToken() {
    if (!this.token) {
      await this.refreshToken();
    }
    return this.token!;
  }

  async refreshToken() {
    return this.token!;
  }

  async authenticateUser(userId: string) {
    this.subjectId = userId;
    this.subjectType = 'user' as TokenRequestBoxSubjectType;
    return this.refreshToken();
  }

  async authenticateEnterprise(enterpriseId: string) {
    this.subjectId = enterpriseId;
    this.subjectType = 'enterprise' as TokenRequestBoxSubjectType;
    return this.refreshToken();
  }
}
