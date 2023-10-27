import { serializeSignRequest } from '../schemas.generated.js';
import { deserializeSignRequest } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeSignRequests } from '../schemas.generated.js';
import { deserializeSignRequests } from '../schemas.generated.js';
import { serializeSignRequestCreateRequest } from '../schemas.generated.js';
import { deserializeSignRequestCreateRequest } from '../schemas.generated.js';
import { SignRequest } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { SignRequests } from '../schemas.generated.js';
import { SignRequestCreateRequest } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
export class CancelSignRequestHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CancelSignRequestHeadersArg, 'extraHeaders'>
      | Partial<Pick<CancelSignRequestHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ResendSignRequestHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<ResendSignRequestHeadersArg, 'extraHeaders'>
      | Partial<Pick<ResendSignRequestHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetSignRequestByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignRequestByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetSignRequestByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetSignRequestsQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetSignRequestsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignRequestsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetSignRequestsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateSignRequestHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateSignRequestHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateSignRequestHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SignRequestsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SignRequestsManager,
      | 'cancelSignRequest'
      | 'resendSignRequest'
      | 'getSignRequestById'
      | 'getSignRequests'
      | 'createSignRequest'
    >
  ) {
    Object.assign(this, fields);
  }
  async cancelSignRequest(
    signRequestId: string,
    headers: CancelSignRequestHeadersArg = new CancelSignRequestHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequest> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/sign_requests/',
        toString(signRequestId) as string,
        '/cancel'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignRequest(deserializeJson(response.text));
  }
  async resendSignRequest(
    signRequestId: string,
    headers: ResendSignRequestHeadersArg = new ResendSignRequestHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/sign_requests/',
        toString(signRequestId) as string,
        '/resend'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getSignRequestById(
    signRequestId: string,
    headers: GetSignRequestByIdHeadersArg = new GetSignRequestByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SignRequest> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/sign_requests/',
        toString(signRequestId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignRequest(deserializeJson(response.text));
  }
  async getSignRequests(
    queryParams: GetSignRequestsQueryParamsArg = {} satisfies GetSignRequestsQueryParamsArg,
    headers: GetSignRequestsHeadersArg = new GetSignRequestsHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequests> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/sign_requests') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignRequests(deserializeJson(response.text));
  }
  async createSignRequest(
    requestBody: SignRequestCreateRequest,
    headers: CreateSignRequestHeadersArg = new CreateSignRequestHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequest> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/sign_requests') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(serializeSignRequestCreateRequest(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignRequest(deserializeJson(response.text));
  }
}
