import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
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
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class DownloadFileOptionals {
  readonly queryParams: DownloadFileQueryParams =
    {} satisfies DownloadFileQueryParams;
  readonly headers: DownloadFileHeaders = new DownloadFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DownloadFileOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DownloadFileOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DownloadFileOptionalsInput {
  readonly queryParams?: DownloadFileQueryParams;
  readonly headers?: DownloadFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface DownloadFileQueryParams {
  /**
   * The file version to download */
  readonly version?: string;
  /**
   * An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication.
   * When using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders. */
  readonly accessToken?: string;
}
export class DownloadFileHeaders {
  /**
   * The byte range of the content to download.
   *
   * The format `bytes={start_byte}-{end_byte}` can be used to specify
   * what section of the file to download. */
  readonly range?: string;
  /**
   * The URL, and optional password, for the shared link of this item.
   *
   * This header can be used to access items that have not been
   * explicitly shared with a user.
   *
   * Use the format `shared_link=[link]` or if a password is required then
   * use `shared_link=[link]&shared_link_password=[password]`.
   *
   * This header can be used on the file or folder shared, as well as on any files
   * or folders nested within the item. */
  readonly boxapi?: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DownloadFileHeaders, 'extraHeaders'> &
      Partial<Pick<DownloadFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.range) {
      this.range = fields.range;
    }
    if (fields.boxapi) {
      this.boxapi = fields.boxapi;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DownloadFileHeadersInput {
  /**
   * The byte range of the content to download.
   *
   * The format `bytes={start_byte}-{end_byte}` can be used to specify
   * what section of the file to download. */
  readonly range?: string;
  /**
   * The URL, and optional password, for the shared link of this item.
   *
   * This header can be used to access items that have not been
   * explicitly shared with a user.
   *
   * Use the format `shared_link=[link]` or if a password is required then
   * use `shared_link=[link]&shared_link_password=[password]`.
   *
   * This header can be used on the file or folder shared, as well as on any files
   * or folders nested within the item. */
  readonly boxapi?: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DownloadsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<DownloadsManager, 'networkSession' | 'downloadFile'> &
      Partial<Pick<DownloadsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
     * Returns the contents of a file in binary format.
     * @param {string} fileId The unique identifier that represents a file.
    
    The ID for any file can be determined
    by visiting a file in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/files/123`
    the `file_id` is `123`.
    Example: "12345"
     * @param {DownloadFileOptionalsInput} optionalsInput
     * @returns {Promise<ByteStream>}
     */
  async downloadFile(
    fileId: string,
    optionalsInput: DownloadFileOptionalsInput = {}
  ): Promise<ByteStream> {
    const optionals: DownloadFileOptionals = new DownloadFileOptionals({
      queryParams: optionalsInput.queryParams,
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    const response: FetchResponse = (await fetch({
      url: ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/files/',
        toString(fileId) as string,
        '/content'
      ) as string,
      method: 'GET',
      params: queryParamsMap,
      headers: headersMap,
      responseFormat: 'binary',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return response.content;
  }
}
export interface DownloadsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
