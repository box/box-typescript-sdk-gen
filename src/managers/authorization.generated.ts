import { serializeAccessToken } from '../schemas.generated.js';
import { deserializeAccessToken } from '../schemas.generated.js';
import { serializeOAuth2Error } from '../schemas.generated.js';
import { deserializeOAuth2Error } from '../schemas.generated.js';
import { serializePostOAuth2Token } from '../schemas.generated.js';
import { deserializePostOAuth2Token } from '../schemas.generated.js';
import { serializePostOAuth2TokenRefreshAccessToken } from '../schemas.generated.js';
import { deserializePostOAuth2TokenRefreshAccessToken } from '../schemas.generated.js';
import { serializePostOAuth2Revoke } from '../schemas.generated.js';
import { deserializePostOAuth2Revoke } from '../schemas.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { OAuth2Error } from '../schemas.generated.js';
import { PostOAuth2Token } from '../schemas.generated.js';
import { PostOAuth2TokenRefreshAccessToken } from '../schemas.generated.js';
import { PostOAuth2Revoke } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export type GetAuthorizeQueryParamsArgResponseTypeField = 'code';
export interface GetAuthorizeQueryParamsArg {
  readonly responseType: GetAuthorizeQueryParamsArgResponseTypeField;
  readonly clientId: string;
  readonly redirectUri?: string;
  readonly state?: string;
  readonly scope?: string;
}
export class GetAuthorizeHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetAuthorizeHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetAuthorizeHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateOauth2TokenHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateOauth2TokenHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateOauth2TokenHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateOauth2TokenRefreshHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateOauth2TokenRefreshHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateOauth2TokenRefreshHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateOauth2RevokeHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateOauth2RevokeHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateOauth2RevokeHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class AuthorizationManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      AuthorizationManager,
      | 'getAuthorize'
      | 'createOauth2Token'
      | 'createOauth2TokenRefresh'
      | 'createOauth2Revoke'
    >
  ) {
    Object.assign(this, fields);
  }
  async getAuthorize(
    queryParams: GetAuthorizeQueryParamsArg,
    headers: GetAuthorizeHeadersArg = new GetAuthorizeHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['response_type']: toString(queryParams.responseType) as string,
      ['client_id']: toString(queryParams.clientId) as string,
      ['redirect_uri']: toString(queryParams.redirectUri) as string,
      ['state']: toString(queryParams.state) as string,
      ['scope']: toString(queryParams.scope) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://account.box.com/api/oauth2/authorize') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async createOauth2Token(
    requestBody: PostOAuth2Token,
    headers: CreateOauth2TokenHeadersArg = new CreateOauth2TokenHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<AccessToken> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/oauth2/token') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializePostOAuth2Token(requestBody),
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeAccessToken(response.data);
  }
  async createOauth2TokenRefresh(
    requestBody: PostOAuth2TokenRefreshAccessToken,
    headers: CreateOauth2TokenRefreshHeadersArg = new CreateOauth2TokenRefreshHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<AccessToken> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/oauth2/token#refresh') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializePostOAuth2TokenRefreshAccessToken(requestBody),
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeAccessToken(response.data);
  }
  async createOauth2Revoke(
    requestBody: PostOAuth2Revoke,
    headers: CreateOauth2RevokeHeadersArg = new CreateOauth2RevokeHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/oauth2/revoke') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializePostOAuth2Revoke(requestBody),
        contentType: 'application/x-www-form-urlencoded',
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeGetAuthorizeQueryParamsArgResponseTypeField(
  val: GetAuthorizeQueryParamsArgResponseTypeField
): SerializedData {
  return val;
}
export function deserializeGetAuthorizeQueryParamsArgResponseTypeField(
  val: any
): GetAuthorizeQueryParamsArgResponseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetAuthorizeQueryParamsArgResponseTypeField"';
  }
  if (val == 'code') {
    return 'code';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
