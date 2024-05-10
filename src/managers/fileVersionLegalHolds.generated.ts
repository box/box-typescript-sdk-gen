import { serializeFileVersionLegalHold } from '../schemas/fileVersionLegalHold.generated.js';
import { deserializeFileVersionLegalHold } from '../schemas/fileVersionLegalHold.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeFileVersionLegalHolds } from '../schemas/fileVersionLegalHolds.generated.js';
import { deserializeFileVersionLegalHolds } from '../schemas/fileVersionLegalHolds.generated.js';
import { FileVersionLegalHold } from '../schemas/fileVersionLegalHold.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { FileVersionLegalHolds } from '../schemas/fileVersionLegalHolds.generated.js';
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
export class GetFileVersionLegalHoldByIdOptionals {
  readonly headers: GetFileVersionLegalHoldByIdHeaders =
    new GetFileVersionLegalHoldByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileVersionLegalHoldByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileVersionLegalHoldByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface GetFileVersionLegalHoldByIdOptionalsInput {
  readonly headers?: GetFileVersionLegalHoldByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileVersionLegalHoldsOptionals {
  readonly headers: GetFileVersionLegalHoldsHeaders =
    new GetFileVersionLegalHoldsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileVersionLegalHoldsOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetFileVersionLegalHoldsOptionals, 'headers' | 'cancellationToken'>
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
export interface GetFileVersionLegalHoldsOptionalsInput {
  readonly headers?: GetFileVersionLegalHoldsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileVersionLegalHoldByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionLegalHoldByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetFileVersionLegalHoldsQueryParams {
  readonly policyId: string;
  readonly marker?: string;
  readonly limit?: number;
}
export class GetFileVersionLegalHoldsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileVersionLegalHoldsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileVersionLegalHoldsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionLegalHoldsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FileVersionLegalHoldsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FileVersionLegalHoldsManager,
      | 'networkSession'
      | 'getFileVersionLegalHoldById'
      | 'getFileVersionLegalHolds'
    > &
      Partial<Pick<FileVersionLegalHoldsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileVersionLegalHoldById(
    fileVersionLegalHoldId: string,
    optionalsInput: GetFileVersionLegalHoldByIdOptionalsInput = {}
  ): Promise<FileVersionLegalHold> {
    const optionals: GetFileVersionLegalHoldByIdOptionals =
      new GetFileVersionLegalHoldByIdOptionals({
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
        '/file_version_legal_holds/',
        toString(fileVersionLegalHoldId) as string
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
    return deserializeFileVersionLegalHold(response.data);
  }
  async getFileVersionLegalHolds(
    queryParams: GetFileVersionLegalHoldsQueryParams,
    optionalsInput: GetFileVersionLegalHoldsOptionalsInput = {}
  ): Promise<FileVersionLegalHolds> {
    const optionals: GetFileVersionLegalHoldsOptionals =
      new GetFileVersionLegalHoldsOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['policy_id']: toString(queryParams.policyId) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/file_version_legal_holds'
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
    return deserializeFileVersionLegalHolds(response.data);
  }
}
export interface FileVersionLegalHoldsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
