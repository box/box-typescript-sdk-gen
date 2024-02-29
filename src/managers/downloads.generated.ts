import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
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
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface DownloadFileQueryParams {
  readonly version?: string;
  readonly accessToken?: string;
}
export class DownloadFileHeaders {
  readonly range?: string;
  readonly boxapi?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DownloadFileHeaders, 'extraHeaders'>
      | Partial<Pick<DownloadFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DownloadsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<DownloadsManager, 'networkSession' | 'downloadFile'>
      | Partial<Pick<DownloadsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async downloadFile(
    fileId: string,
    queryParams: DownloadFileQueryParams = {} satisfies DownloadFileQueryParams,
    headers: DownloadFileHeaders = new DownloadFileHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['version']: toString(queryParams.version) as string,
      ['access_token']: toString(queryParams.accessToken) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['range']: toString(headers.range) as string,
        ['boxapi']: toString(headers.boxapi) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/content'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'binary',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return response.content;
  }
}
