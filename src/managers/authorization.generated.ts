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
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export type AuthorizeUserQueryParamsResponseTypeField = 'code';
export interface AuthorizeUserQueryParams {
  readonly responseType: AuthorizeUserQueryParamsResponseTypeField;
  readonly clientId: string;
  readonly redirectUri?: string;
  readonly state?: string;
  readonly scope?: string;
}
export class AuthorizeUserHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AuthorizeUserHeaders, 'extraHeaders'>
      | Partial<Pick<AuthorizeUserHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RequestAccessTokenHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RequestAccessTokenHeaders, 'extraHeaders'>
      | Partial<Pick<RequestAccessTokenHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RefreshAccessTokenHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RefreshAccessTokenHeaders, 'extraHeaders'>
      | Partial<Pick<RefreshAccessTokenHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class RevokeAccessTokenHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<RevokeAccessTokenHeaders, 'extraHeaders'>
      | Partial<Pick<RevokeAccessTokenHeaders, 'extraHeaders'>>
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
          | 'authorizeUser'
          | 'requestAccessToken'
          | 'refreshAccessToken'
          | 'revokeAccessToken'
        >
      | Partial<Pick<AuthorizationManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async authorizeUser(
    queryParams: AuthorizeUserQueryParams,
    headers: AuthorizeUserHeaders = new AuthorizeUserHeaders({}),
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
  async requestAccessToken(
    requestBody: PostOAuth2Token,
    headers: RequestAccessTokenHeaders = new RequestAccessTokenHeaders({}),
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
  async refreshAccessToken(
    requestBody: PostOAuth2TokenRefreshAccessToken,
    headers: RefreshAccessTokenHeaders = new RefreshAccessTokenHeaders({}),
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
  async revokeAccessToken(
    requestBody: PostOAuth2Revoke,
    headers: RevokeAccessTokenHeaders = new RevokeAccessTokenHeaders({}),
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
export function serializeAuthorizeUserQueryParamsResponseTypeField(
  val: AuthorizeUserQueryParamsResponseTypeField
): SerializedData {
  return val;
}
export function deserializeAuthorizeUserQueryParamsResponseTypeField(
  val: any
): AuthorizeUserQueryParamsResponseTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "AuthorizeUserQueryParamsResponseTypeField"',
    });
  }
  if (val == 'code') {
    return 'code';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
