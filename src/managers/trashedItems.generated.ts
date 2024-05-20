import { serializeItems } from '../schemas/items.generated.js';
import { deserializeItems } from '../schemas/items.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { Items } from '../schemas/items.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
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
export type GetTrashedItemsQueryParamsDirectionField = 'ASC' | 'DESC';
export type GetTrashedItemsQueryParamsSortField = 'name' | 'date' | 'size';
export interface GetTrashedItemsQueryParams {
  readonly fields?: readonly string[];
  readonly limit?: number;
  readonly offset?: number;
  readonly usemarker?: boolean;
  readonly marker?: string;
  readonly direction?: GetTrashedItemsQueryParamsDirectionField;
  readonly sort?: GetTrashedItemsQueryParamsSortField;
}
export class GetTrashedItemsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTrashedItemsHeaders, 'extraHeaders'> &
      Partial<Pick<GetTrashedItemsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTrashedItemsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TrashedItemsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<TrashedItemsManager, 'networkSession' | 'getTrashedItems'> &
      Partial<Pick<TrashedItemsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getTrashedItems(
    queryParams: GetTrashedItemsQueryParams = {} satisfies GetTrashedItemsQueryParams,
    headersInput: GetTrashedItemsHeadersInput = new GetTrashedItemsHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Items> {
    const headers: GetTrashedItemsHeaders = new GetTrashedItemsHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
      ['limit']: toString(queryParams.limit) as string,
      ['offset']: toString(queryParams.offset) as string,
      ['usemarker']: toString(queryParams.usemarker) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['direction']: toString(queryParams.direction) as string,
      ['sort']: toString(queryParams.sort) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/folders/trash/items'
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
    return deserializeItems(response.data);
  }
}
export interface TrashedItemsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetTrashedItemsQueryParamsDirectionField(
  val: GetTrashedItemsQueryParamsDirectionField
): SerializedData {
  return val;
}
export function deserializeGetTrashedItemsQueryParamsDirectionField(
  val: SerializedData
): GetTrashedItemsQueryParamsDirectionField {
  if (val == 'ASC') {
    return val;
  }
  if (val == 'DESC') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetTrashedItemsQueryParamsDirectionField",
  });
}
export function serializeGetTrashedItemsQueryParamsSortField(
  val: GetTrashedItemsQueryParamsSortField
): SerializedData {
  return val;
}
export function deserializeGetTrashedItemsQueryParamsSortField(
  val: SerializedData
): GetTrashedItemsQueryParamsSortField {
  if (val == 'name') {
    return val;
  }
  if (val == 'date') {
    return val;
  }
  if (val == 'size') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetTrashedItemsQueryParamsSortField",
  });
}
