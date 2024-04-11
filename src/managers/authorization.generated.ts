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
import { PostOAuth2TokenRefreshAccessTokenInput } from '../schemas.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { OAuth2Error } from '../schemas.generated.js';
import { PostOAuth2Token } from '../schemas.generated.js';
import { PostOAuth2TokenRefreshAccessToken } from '../schemas.generated.js';
import { PostOAuth2Revoke } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export interface AuthorizeUserHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface RequestAccessTokenHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface RefreshAccessTokenHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface RevokeAccessTokenHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    headersInput: AuthorizeUserHeadersInput = new AuthorizeUserHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new AuthorizeUserHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: RequestAccessTokenHeadersInput = new RequestAccessTokenHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<AccessToken> {
    const headers: any = new RequestAccessTokenHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    requestBodyInput: PostOAuth2TokenRefreshAccessTokenInput,
    headersInput: RefreshAccessTokenHeadersInput = new RefreshAccessTokenHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<AccessToken> {
    const requestBody: any = new PostOAuth2TokenRefreshAccessToken({
      grantType: requestBodyInput.grantType,
      clientId: requestBodyInput.clientId,
      clientSecret: requestBodyInput.clientSecret,
      refreshToken: requestBodyInput.refreshToken,
    });
    const headers: any = new RefreshAccessTokenHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: RevokeAccessTokenHeadersInput = new RevokeAccessTokenHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new RevokeAccessTokenHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
export interface AuthorizationManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeAuthorizeUserQueryParamsResponseTypeField(
  val: any
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
