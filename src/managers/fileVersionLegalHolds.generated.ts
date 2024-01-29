import { serializeFileVersionLegalHold } from '../schemas.generated.js';
import { deserializeFileVersionLegalHold } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFileVersionLegalHolds } from '../schemas.generated.js';
import { deserializeFileVersionLegalHolds } from '../schemas.generated.js';
import { FileVersionLegalHold } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FileVersionLegalHolds } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
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
export class GetFileVersionLegalHoldByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
    fields:
      | Omit<GetFileVersionLegalHoldsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileVersionLegalHoldsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileVersionLegalHoldsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FileVersionLegalHoldsManager,
          | 'networkSession'
          | 'getFileVersionLegalHoldById'
          | 'getFileVersionLegalHolds'
        >
      | Partial<Pick<FileVersionLegalHoldsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileVersionLegalHoldById(
    fileVersionLegalHoldId: string,
    headers: GetFileVersionLegalHoldByIdHeaders = new GetFileVersionLegalHoldByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionLegalHold> {
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
    headers: GetFileVersionLegalHoldsHeaders = new GetFileVersionLegalHoldsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionLegalHolds> {
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
