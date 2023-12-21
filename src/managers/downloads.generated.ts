import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
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
