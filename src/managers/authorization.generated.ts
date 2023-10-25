import { serializeAccessToken } from '../schemas.generated.js';
import { deserializeAccessToken } from '../schemas.generated.js';
import { serializeOAuth2Error } from '../schemas.generated.js';
import { deserializeOAuth2Error } from '../schemas.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { OAuth2Error } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
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
export class AuthorizationManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(fields: Omit<AuthorizationManager, 'getAuthorize'>) {
    Object.assign(this, fields);
  }
  async getAuthorize(
    queryParams: GetAuthorizeQueryParamsArg,
    headers: GetAuthorizeHeadersArg = new GetAuthorizeHeadersArg({})
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeGetAuthorizeQueryParamsArgResponseTypeField(
  val: GetAuthorizeQueryParamsArgResponseTypeField
): Json {
  return val;
}
export function deserializeGetAuthorizeQueryParamsArgResponseTypeField(
  val: any
): GetAuthorizeQueryParamsArgResponseTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetAuthorizeQueryParamsArgResponseTypeField"';
  }
  if (val == 'code') {
    return 'code';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
