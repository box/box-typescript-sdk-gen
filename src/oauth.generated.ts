import { Authentication } from './auth.js';
import { NetworkSession } from './network.js';
import { AccessToken } from './schemas.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { sdToUrlParams } from './json.js';
import { deserializeAccessToken } from './schemas.generated.js';
import { fetch } from './fetch.js';
import { FetchOptions } from './fetch.js';
import { FetchResponse } from './fetch.js';
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
const boxOauth2TokenUrl: string = 'https://api.box.com/oauth2/token';
const boxOauth2RevokeUrl: string = 'https://api.box.com/oauth2/revoke';
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
export interface GetAuthorizeUrlOptionsArg {
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
    options: GetAuthorizeUrlOptionsArg = {} satisfies GetAuthorizeUrlOptionsArg
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
    const response: FetchResponse = (await fetch(boxOauth2TokenUrl, {
      method: 'POST',
      data: {
        ['grant_type']: 'authorization_code',
        ['code']: authorizationCode,
        ['client_id']: this.config.clientId,
        ['client_secret']: this.config.clientSecret,
      },
      contentType: 'application/x-www-form-urlencoded',
      networkSession: networkSession,
    })) as FetchResponse;
    const token: AccessToken = deserializeAccessToken(response.data);
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
    const response: FetchResponse = (await fetch(boxOauth2TokenUrl, {
      method: 'POST',
      data: {
        ['grant_type']: 'refresh_token',
        ['client_id']: this.config.clientId,
        ['client_secret']: this.config.clientSecret,
        ['refresh_token']: tokenUsedForRefresh,
      },
      contentType: 'application/x-www-form-urlencoded',
      networkSession: networkSession,
    })) as FetchResponse;
    const token: AccessToken = deserializeAccessToken(response.data);
    await this.tokenStorage.store(token);
    return token;
  }
  async revokeToken(networkSession?: NetworkSession): Promise<undefined> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      return void 0;
    }
    (await fetch(boxOauth2RevokeUrl, {
      method: 'POST',
      data: {
        ['client_id']: this.config.clientId,
        ['client_secret']: this.config.clientSecret,
        ['token']: token.accessToken,
      },
      contentType: 'application/x-www-form-urlencoded',
      networkSession: networkSession,
    })) as FetchResponse;
    await this.tokenStorage.clear();
    return void 0;
  }
  async downscopeToken(
    scopes: readonly string[],
    networkSession?: NetworkSession,
    refreshToken?: string
  ): Promise<AccessToken> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    const tokenUsedForRefresh: any = !(refreshToken == void 0)
      ? refreshToken
      : !(oldToken == void 0)
      ? oldToken.refreshToken
      : void 0;
    if (tokenUsedForRefresh == void 0) {
      throw 'No refresh token is available.';
    }
    const response: FetchResponse = (await fetch(boxOauth2TokenUrl, {
      method: 'POST',
      data: {
        ['grant_type']: 'urn:ietf:params:oauth:grant-type:token-exchange',
        ['subject_token']: tokenUsedForRefresh,
        ['subject_token_type']: 'urn:ietf:params:oauth:token-type:access_token',
        ['scope']: toString(scopes) as string,
      },
      contentType: 'application/x-www-form-urlencoded',
      networkSession: networkSession,
    })) as FetchResponse;
    const token: AccessToken = deserializeAccessToken(response.data);
    await this.tokenStorage.store(token);
    return token;
  }
}
export function serializeGetAuthorizeUrlOptionsArg(
  val: GetAuthorizeUrlOptionsArg
): SerializedData {
  return {
    ['clientId']: val.clientId == void 0 ? void 0 : val.clientId,
    ['redirectUri']: val.redirectUri == void 0 ? void 0 : val.redirectUri,
    ['responseType']: val.responseType == void 0 ? void 0 : val.responseType,
    ['state']: val.state == void 0 ? void 0 : val.state,
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
  };
}
export function deserializeGetAuthorizeUrlOptionsArg(
  val: any
): GetAuthorizeUrlOptionsArg {
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
  } satisfies GetAuthorizeUrlOptionsArg;
}
