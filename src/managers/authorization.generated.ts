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
export class AuthorizeUserOptionals {
  readonly headers: AuthorizeUserHeaders = new AuthorizeUserHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<AuthorizeUserOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<AuthorizeUserOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface AuthorizeUserOptionalsInput {
  readonly headers?: AuthorizeUserHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class RequestAccessTokenOptionals {
  readonly headers: RequestAccessTokenHeaders = new RequestAccessTokenHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<RequestAccessTokenOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<RequestAccessTokenOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface RequestAccessTokenOptionalsInput {
  readonly headers?: RequestAccessTokenHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class RefreshAccessTokenOptionals {
  readonly headers: RefreshAccessTokenHeaders = new RefreshAccessTokenHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<RefreshAccessTokenOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<RefreshAccessTokenOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface RefreshAccessTokenOptionalsInput {
  readonly headers?: RefreshAccessTokenHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class RevokeAccessTokenOptionals {
  readonly headers: RevokeAccessTokenHeaders = new RevokeAccessTokenHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<RevokeAccessTokenOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<RevokeAccessTokenOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface RevokeAccessTokenOptionalsInput {
  readonly headers?: RevokeAccessTokenHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<AuthorizeUserHeaders, 'extraHeaders'> &
      Partial<Pick<AuthorizeUserHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<RequestAccessTokenHeaders, 'extraHeaders'> &
      Partial<Pick<RequestAccessTokenHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<RefreshAccessTokenHeaders, 'extraHeaders'> &
      Partial<Pick<RefreshAccessTokenHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<RevokeAccessTokenHeaders, 'extraHeaders'> &
      Partial<Pick<RevokeAccessTokenHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      AuthorizationManager,
      | 'networkSession'
      | 'authorizeUser'
      | 'requestAccessToken'
      | 'refreshAccessToken'
      | 'revokeAccessToken'
    > &
      Partial<Pick<AuthorizationManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async authorizeUser(
    queryParams: AuthorizeUserQueryParams,
    optionalsInput: AuthorizeUserOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new AuthorizeUserOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: RequestAccessTokenOptionalsInput = {}
  ): Promise<AccessToken> {
    const optionals: any = new RequestAccessTokenOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: RefreshAccessTokenOptionalsInput = {}
  ): Promise<AccessToken> {
    const requestBody: any = new PostOAuth2TokenRefreshAccessToken({
      grantType: requestBodyInput.grantType,
      clientId: requestBodyInput.clientId,
      clientSecret: requestBodyInput.clientSecret,
      refreshToken: requestBodyInput.refreshToken,
    });
    const optionals: any = new RefreshAccessTokenOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: RevokeAccessTokenOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new RevokeAccessTokenOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
