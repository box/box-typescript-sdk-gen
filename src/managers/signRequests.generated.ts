import { serializeSignRequest } from '../schemas/signRequest.generated.js';
import { deserializeSignRequest } from '../schemas/signRequest.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeSignRequests } from '../schemas/signRequests.generated.js';
import { deserializeSignRequests } from '../schemas/signRequests.generated.js';
import { serializeSignRequestCreateRequest } from '../schemas/signRequestCreateRequest.generated.js';
import { deserializeSignRequestCreateRequest } from '../schemas/signRequestCreateRequest.generated.js';
import { SignRequest } from '../schemas/signRequest.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { SignRequests } from '../schemas/signRequests.generated.js';
import { SignRequestCreateRequest } from '../schemas/signRequestCreateRequest.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CancelSignRequestOptionals {
  readonly headers: CancelSignRequestHeaders = new CancelSignRequestHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CancelSignRequestOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CancelSignRequestOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CancelSignRequestOptionalsInput {
  readonly headers?: CancelSignRequestHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class ResendSignRequestOptionals {
  readonly headers: ResendSignRequestHeaders = new ResendSignRequestHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<ResendSignRequestOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<ResendSignRequestOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface ResendSignRequestOptionalsInput {
  readonly headers?: ResendSignRequestHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetSignRequestByIdOptionals {
  readonly headers: GetSignRequestByIdHeaders = new GetSignRequestByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetSignRequestByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<GetSignRequestByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetSignRequestByIdOptionalsInput {
  readonly headers?: GetSignRequestByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateSignRequestOptionals {
  readonly headers: CreateSignRequestHeaders = new CreateSignRequestHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateSignRequestOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateSignRequestOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateSignRequestOptionalsInput {
  readonly headers?: CreateSignRequestHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CancelSignRequestHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CancelSignRequestHeaders, 'extraHeaders'> &
      Partial<Pick<CancelSignRequestHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CancelSignRequestHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ResendSignRequestHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<ResendSignRequestHeaders, 'extraHeaders'> &
      Partial<Pick<ResendSignRequestHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface ResendSignRequestHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetSignRequestByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetSignRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetSignRequestByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetSignRequestByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<GetSignRequestsHeaders, 'extraHeaders'> &
      Partial<Pick<GetSignRequestsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetSignRequestsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateSignRequestHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateSignRequestHeaders, 'extraHeaders'> &
      Partial<Pick<CreateSignRequestHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateSignRequestHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SignRequestsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SignRequestsManager,
      | 'networkSession'
      | 'cancelSignRequest'
      | 'resendSignRequest'
      | 'getSignRequestById'
      | 'getSignRequests'
      | 'createSignRequest'
    > &
      Partial<Pick<SignRequestsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async cancelSignRequest(
    signRequestId: string,
    optionalsInput: CancelSignRequestOptionalsInput = {}
  ): Promise<SignRequest> {
    const optionals: CancelSignRequestOptionals =
      new CancelSignRequestOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/sign_requests/',
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
    optionalsInput: ResendSignRequestOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: ResendSignRequestOptionals =
      new ResendSignRequestOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/sign_requests/',
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
    optionalsInput: GetSignRequestByIdOptionalsInput = {}
  ): Promise<SignRequest> {
    const optionals: GetSignRequestByIdOptionals =
      new GetSignRequestByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/sign_requests/',
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
    headersInput: GetSignRequestsHeadersInput = new GetSignRequestsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SignRequests> {
    const headers: GetSignRequestsHeaders = new GetSignRequestsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
        '/2.0/sign_requests'
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
    optionalsInput: CreateSignRequestOptionalsInput = {}
  ): Promise<SignRequest> {
    const optionals: CreateSignRequestOptionals =
      new CreateSignRequestOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/sign_requests'
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
export interface SignRequestsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
