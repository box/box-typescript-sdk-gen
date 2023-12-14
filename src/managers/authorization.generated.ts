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
export type GetAuthorizeQueryParamsResponseTypeField = 'code';
export interface GetAuthorizeQueryParams {
  readonly responseType: GetAuthorizeQueryParamsResponseTypeField;
  readonly clientId: string;
  readonly redirectUri?: string;
  readonly state?: string;
  readonly scope?: string;
}
export class GetAuthorizeHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetAuthorizeHeaders, 'extraHeaders'>
      | Partial<Pick<GetAuthorizeHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateOauth2TokenHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateOauth2TokenHeaders, 'extraHeaders'>
      | Partial<Pick<CreateOauth2TokenHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateOauth2TokenRefreshHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateOauth2TokenRefreshHeaders, 'extraHeaders'>
      | Partial<Pick<CreateOauth2TokenRefreshHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateOauth2RevokeHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateOauth2RevokeHeaders, 'extraHeaders'>
      | Partial<Pick<CreateOauth2RevokeHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class AuthorizationManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          AuthorizationManager,
          | 'networkSession'
          | 'getAuthorize'
          | 'createOauth2Token'
          | 'createOauth2TokenRefresh'
          | 'createOauth2Revoke'
        >
      | Partial<Pick<AuthorizationManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getAuthorize(
    queryParams: GetAuthorizeQueryParams,
    headers: GetAuthorizeHeaders = new GetAuthorizeHeaders({}),
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
      ''.concat(this.networkSession.baseUrls.oauth2Url, '/authorize') as string,
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
    headers: CreateOauth2TokenHeaders = new CreateOauth2TokenHeaders({}),
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
    headers: CreateOauth2TokenRefreshHeaders = new CreateOauth2TokenRefreshHeaders(
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
    headers: CreateOauth2RevokeHeaders = new CreateOauth2RevokeHeaders({}),
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
export function serializeGetAuthorizeQueryParamsResponseTypeField(
  val: GetAuthorizeQueryParamsResponseTypeField
): SerializedData {
  return val;
}
export function deserializeGetAuthorizeQueryParamsResponseTypeField(
  val: any
): GetAuthorizeQueryParamsResponseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetAuthorizeQueryParamsResponseTypeField"';
  }
  if (val == 'code') {
    return 'code';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
