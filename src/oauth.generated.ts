import { Authentication } from './auth.js';
import { NetworkSession } from './network.js';
import { AccessToken } from './schemas.generated.js';
import { AuthorizationManager } from './managers/authorization.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { sdToUrlParams } from './json.js';
import { toString } from './utils.js';
import { sdToJson } from './json.js';
import { SerializedData } from './json.js';
import { sdIsEmpty } from './json.js';
import { sdIsBoolean } from './json.js';
import { sdIsNumber } from './json.js';
import { sdIsString } from './json.js';
import { sdIsList } from './json.js';
import { sdIsMap } from './json.js';
const boxOauth2AuthUrl: string = 'https://account.box.com/api/oauth2/authorize';
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
    this.tokenStorage = this.config.tokenStorage;
  }
  getAuthorizeUrl(
    options: GetAuthorizeUrlOptions = {} satisfies GetAuthorizeUrlOptions
  ): string {
    const params: {
      readonly [key: string]: any;
    } = {
      ...{
        ['client_id']: !(options.clientId == void 0)
          ? options.clientId
          : this.config.clientId,
        ['response_type']: !(options.responseType == void 0)
          ? options.responseType
          : 'code',
      },
      ...(!(options.redirectUri == void 0)
        ? { ['redirect_uri']: options.redirectUri }
        : void 0),
      ...(!(options.state == void 0) ? { ['state']: options.state } : void 0),
      ...(!(options.scope == void 0) ? { ['scope']: options.scope } : void 0),
    };
    return ''.concat(boxOauth2AuthUrl, '?', sdToUrlParams(params)) as string;
  }
  async getTokensAuthorizationCodeGrant(
    authorizationCode: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const token: AccessToken = await authManager.createOauth2Token({
      grantType: 'authorization_code',
      code: authorizationCode,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    });
    await this.tokenStorage.store(token);
    return token;
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const token: any = await this.tokenStorage.get();
    if (token == void 0) {
      throw 'Access and refresh tokens not available. Authenticate before making any API call first.';
    }
    return token;
  }
  async refreshToken(
    networkSession?: NetworkSession,
    refreshToken?: string
  ): Promise<AccessToken> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    const tokenUsedForRefresh: any = !(refreshToken == void 0)
      ? refreshToken
      : !(oldToken == void 0)
      ? oldToken.refreshToken
      : void 0;
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const token: AccessToken = await authManager.createOauth2Token({
      grantType: 'refresh_token',
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      refreshToken: tokenUsedForRefresh,
    });
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
    await authManager.createOauth2Revoke({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      token: token.accessToken,
    });
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
      throw 'No access token is available.';
    }
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const downscopedToken: AccessToken = await authManager.createOauth2Token({
      grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
      subjectToken: token.accessToken,
      subjectTokenType: 'urn:ietf:params:oauth:token-type:access_token',
      scope: toString(scopes) as string,
      resource: resource,
      boxSharedLink: sharedLink,
    });
    return downscopedToken;
  }
}
export function serializeGetAuthorizeUrlOptions(
  val: GetAuthorizeUrlOptions
): SerializedData {
  return {
    ['clientId']: val.clientId == void 0 ? void 0 : val.clientId,
    ['redirectUri']: val.redirectUri == void 0 ? void 0 : val.redirectUri,
    ['responseType']: val.responseType == void 0 ? void 0 : val.responseType,
    ['state']: val.state == void 0 ? void 0 : val.state,
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
  };
}
export function deserializeGetAuthorizeUrlOptions(
  val: any
): GetAuthorizeUrlOptions {
  const clientId: undefined | string =
    val.clientId == void 0 ? void 0 : val.clientId;
  const redirectUri: undefined | string =
    val.redirectUri == void 0 ? void 0 : val.redirectUri;
  const responseType: undefined | string =
    val.responseType == void 0 ? void 0 : val.responseType;
  const state: undefined | string = val.state == void 0 ? void 0 : val.state;
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  return {
    clientId: clientId,
    redirectUri: redirectUri,
    responseType: responseType,
    state: state,
    scope: scope,
  } satisfies GetAuthorizeUrlOptions;
}
