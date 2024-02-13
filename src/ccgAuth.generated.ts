import { PostOAuth2Token } from './schemas.generated.js';
import { PostOAuth2TokenGrantTypeField } from './schemas.generated.js';
import { PostOAuth2TokenSubjectTokenTypeField } from './schemas.generated.js';
import { PostOAuth2Revoke } from './schemas.generated.js';
import { AccessToken } from './schemas.generated.js';
import { PostOAuth2TokenBoxSubjectTypeField } from './schemas.generated.js';
import { Authentication } from './auth.js';
import { NetworkSession } from './network.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { AuthorizationManager } from './managers/authorization.generated.js';
import { BoxSdkError } from './errors.js';
export class CcgConfig {
  readonly clientId!: string;
  readonly clientSecret!: string;
  readonly enterpriseId?: string;
  readonly userId?: string;
  readonly tokenStorage: TokenStorage = new InMemoryTokenStorage({});
  constructor(
    fields:
      | Omit<CcgConfig, 'tokenStorage'>
      | Partial<Pick<CcgConfig, 'tokenStorage'>>
  ) {
    Object.assign(this, fields);
  }
}
export class BoxCcgAuth implements Authentication {
  readonly config!: CcgConfig;
  readonly tokenStorage: TokenStorage;
  readonly subjectId?: string;
  readonly subjectType?: PostOAuth2TokenBoxSubjectTypeField;
  constructor(
    fields: Omit<
      BoxCcgAuth,
      | 'tokenStorage'
      | 'subjectId'
      | 'subjectType'
      | 'refreshToken'
      | 'retrieveToken'
      | 'asUser'
      | 'asEnterprise'
      | 'downscopeToken'
      | 'revokeToken'
    >
  ) {
    Object.assign(this, fields);
    this.tokenStorage = this.config.tokenStorage;
    this.subjectId = !(this.config.userId == void 0)
      ? this.config.userId
      : this.config.enterpriseId;
    this.subjectType = !(this.config.userId == void 0) ? 'user' : 'enterprise';
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const token: AccessToken = await authManager.requestAccessToken({
      grantType: 'client_credentials' as PostOAuth2TokenGrantTypeField,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      boxSubjectId: this.subjectId,
      boxSubjectType: this.subjectType,
    } satisfies PostOAuth2Token);
    await this.tokenStorage.store(token);
    return token;
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const oldToken: any = await this.tokenStorage.get();
    if (oldToken == void 0) {
      const newToken: AccessToken = await this.refreshToken(networkSession);
      return newToken;
    }
    return oldToken;
  }
  async asUser(
    userId: string,
    tokenStorage: TokenStorage = new InMemoryTokenStorage({})
  ): Promise<BoxCcgAuth> {
    const newConfig: CcgConfig = new CcgConfig({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      enterpriseId: this.config.enterpriseId,
      userId: userId,
      tokenStorage: tokenStorage,
    });
    return new BoxCcgAuth({ config: newConfig });
  }
  async asEnterprise(
    enterpriseId: string,
    tokenStorage: TokenStorage = new InMemoryTokenStorage({})
  ): Promise<BoxCcgAuth> {
    const newConfig: CcgConfig = new CcgConfig({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      enterpriseId: enterpriseId,
      userId: void 0,
      tokenStorage: tokenStorage,
    });
    return new BoxCcgAuth({ config: newConfig });
  }
  async downscopeToken(
    scopes: readonly string[],
    resource?: string,
    sharedLink?: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      throw new BoxSdkError({
        message:
          'No access token is available. Make an API call to retrieve a token before calling this method.',
      });
    }
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const downscopedToken: AccessToken = await authManager.requestAccessToken({
      grantType:
        'urn:ietf:params:oauth:grant-type:token-exchange' as PostOAuth2TokenGrantTypeField,
      subjectToken: token.accessToken,
      subjectTokenType:
        'urn:ietf:params:oauth:token-type:access_token' as PostOAuth2TokenSubjectTokenTypeField,
      resource: resource,
      scope: scopes.join(' ') as string,
      boxSharedLink: sharedLink,
    } satisfies PostOAuth2Token);
    return downscopedToken;
  }
  async revokeToken(networkSession?: NetworkSession): Promise<undefined> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    if (oldToken == void 0) {
      return void 0;
    }
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    await authManager.revokeAccessToken({
      token: oldToken.accessToken,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    } satisfies PostOAuth2Revoke);
    return await this.tokenStorage.clear();
  }
}
