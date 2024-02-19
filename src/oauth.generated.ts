import { PostOAuth2TokenGrantTypeField } from './schemas.generated.js';
import { PostOAuth2TokenSubjectTokenTypeField } from './schemas.generated.js';
import { Authentication } from './auth.js';
import { NetworkSession } from './network.generated.js';
import { AccessToken } from './schemas.generated.js';
import { PostOAuth2Token } from './schemas.generated.js';
import { PostOAuth2Revoke } from './schemas.generated.js';
import { AuthorizationManager } from './managers/authorization.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { sdToUrlParams } from './json.js';
import { prepareParams } from './utils.js';
import { BoxSdkError } from './errors.js';
import { SerializedData } from './json.js';
export class OAuthConfig {
  readonly clientId!: string;
  readonly clientSecret!: string;
  readonly tokenStorage: TokenStorage = new InMemoryTokenStorage({});
  constructor(
    fields:
      | Omit<OAuthConfig, 'tokenStorage'>
      | Partial<Pick<OAuthConfig, 'tokenStorage'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetAuthorizeUrlOptions {
  readonly clientId?: string;
  readonly redirectUri?: string;
  readonly responseType?: string;
  readonly state?: string;
  readonly scope?: string;
}
export class BoxOAuth implements Authentication {
  readonly config!: OAuthConfig;
  readonly tokenStorage: TokenStorage;
  constructor(
    fields: Omit<
      BoxOAuth,
      | 'tokenStorage'
      | 'getAuthorizeUrl'
      | 'getTokensAuthorizationCodeGrant'
      | 'retrieveToken'
      | 'refreshToken'
      | 'revokeToken'
      | 'downscopeToken'
    >
  ) {
    Object.assign(this, fields);
    this.tokenStorage =
      this.config.tokenStorage == void 0
        ? new InMemoryTokenStorage({})
        : this.config.tokenStorage;
  }
  getAuthorizeUrl(
    options: GetAuthorizeUrlOptions = {} satisfies GetAuthorizeUrlOptions
  ): string {
    const paramsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['client_id']: !(options.clientId == void 0)
        ? options.clientId
        : this.config.clientId,
      ['response_type']: !(options.responseType == void 0)
        ? options.responseType
        : 'code',
      ['redirect_uri']: options.redirectUri,
      ['state']: options.state,
      ['scope']: options.scope,
    });
    return ''.concat(
      'https://account.box.com/api/oauth2/authorize?',
      sdToUrlParams(JSON.stringify(paramsMap) as SerializedData)
    ) as string;
  }
  async getTokensAuthorizationCodeGrant(
    authorizationCode: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const token: AccessToken = await authManager.requestAccessToken({
      grantType: 'authorization_code' as PostOAuth2TokenGrantTypeField,
      code: authorizationCode,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    } satisfies PostOAuth2Token);
    await this.tokenStorage.store(token);
    return token;
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      throw new BoxSdkError({
        message:
          'Access and refresh tokens not available. Authenticate before making any API call first.',
      });
    }
    return token;
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    const tokenUsedForRefresh: undefined | string = !(oldToken == void 0)
      ? oldToken.refreshToken
      : void 0;
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const token: AccessToken = await authManager.requestAccessToken({
      grantType: 'refresh_token' as PostOAuth2TokenGrantTypeField,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      refreshToken: tokenUsedForRefresh,
    } satisfies PostOAuth2Token);
    await this.tokenStorage.store(token);
    return token;
  }
  async revokeToken(networkSession?: NetworkSession): Promise<undefined> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      return void 0;
    }
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    await authManager.revokeAccessToken({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      token: token.accessToken,
    } satisfies PostOAuth2Revoke);
    await this.tokenStorage.clear();
    return void 0;
  }
  async downscopeToken(
    scopes: readonly string[],
    resource?: string,
    sharedLink?: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0 || token.accessToken == void 0) {
      throw new BoxSdkError({ message: 'No access token is available.' });
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
      scope: scopes.join(' ') as string,
      resource: resource,
      boxSharedLink: sharedLink,
    } satisfies PostOAuth2Token);
    return downscopedToken;
  }
}
