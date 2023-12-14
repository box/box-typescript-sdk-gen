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
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class CancelSignRequestHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CancelSignRequestHeaders, 'extraHeaders'>
      | Partial<Pick<CancelSignRequestHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ResendSignRequestHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<ResendSignRequestHeaders, 'extraHeaders'>
      | Partial<Pick<ResendSignRequestHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetSignRequestByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignRequestByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetSignRequestByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetSignRequestsQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetSignRequestsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignRequestsHeaders, 'extraHeaders'>
      | Partial<Pick<GetSignRequestsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateSignRequestHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateSignRequestHeaders, 'extraHeaders'>
      | Partial<Pick<CreateSignRequestHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SignRequestsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SignRequestsManager,
          | 'networkSession'
          | 'cancelSignRequest'
          | 'resendSignRequest'
          | 'getSignRequestById'
          | 'getSignRequests'
          | 'createSignRequest'
        >
      | Partial<Pick<SignRequestsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async cancelSignRequest(
    signRequestId: string,
    headers: CancelSignRequestHeaders = new CancelSignRequestHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequest> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_requests/',
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
    return deserializeSignRequest(response.data);
  }
  async resendSignRequest(
    signRequestId: string,
    headers: ResendSignRequestHeaders = new ResendSignRequestHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_requests/',
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
    headers: GetSignRequestByIdHeaders = new GetSignRequestByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequest> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_requests/',
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
    return deserializeSignRequest(response.data);
  }
  async getSignRequests(
    queryParams: GetSignRequestsQueryParams = {} satisfies GetSignRequestsQueryParams,
    headers: GetSignRequestsHeaders = new GetSignRequestsHeaders({}),
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
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_requests'
      ) as string,
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
    return deserializeSignRequests(response.data);
  }
  async createSignRequest(
    requestBody: SignRequestCreateRequest,
    headers: CreateSignRequestHeaders = new CreateSignRequestHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequest> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_requests'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeSignRequestCreateRequest(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignRequest(response.data);
  }
}
