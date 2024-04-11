import { serializeZipDownload } from '../schemas.generated.js';
import { deserializeZipDownload } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeZipDownloadRequest } from '../schemas.generated.js';
import { deserializeZipDownloadRequest } from '../schemas.generated.js';
import { serializeZipDownloadStatus } from '../schemas.generated.js';
import { deserializeZipDownloadStatus } from '../schemas.generated.js';
import { ZipDownload } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { ZipDownloadRequest } from '../schemas.generated.js';
import { ZipDownloadStatus } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdToJson } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateZipDownloadHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateZipDownloadHeaders, 'extraHeaders'>
      | Partial<Pick<CreateZipDownloadHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateZipDownloadHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetZipDownloadContentHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetZipDownloadContentHeaders, 'extraHeaders'>
      | Partial<Pick<GetZipDownloadContentHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetZipDownloadContentHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetZipDownloadStatusHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetZipDownloadStatusHeaders, 'extraHeaders'>
      | Partial<Pick<GetZipDownloadStatusHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetZipDownloadStatusHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DownloadZipHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DownloadZipHeaders, 'extraHeaders'>
      | Partial<Pick<DownloadZipHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DownloadZipHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ZipDownloadsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ZipDownloadsManager,
          | 'networkSession'
          | 'createZipDownload'
          | 'getZipDownloadContent'
          | 'getZipDownloadStatus'
          | 'downloadZip'
        >
      | Partial<Pick<ZipDownloadsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async createZipDownload(
    requestBody: ZipDownloadRequest,
    headersInput: CreateZipDownloadHeadersInput = new CreateZipDownloadHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ZipDownload> {
    const headers: any = new CreateZipDownloadHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/zip_downloads'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeZipDownloadRequest(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeZipDownload(response.data);
  }
  async getZipDownloadContent(
    downloadUrl: string,
    headersInput: GetZipDownloadContentHeadersInput = new GetZipDownloadContentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const headers: any = new GetZipDownloadContentHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(downloadUrl, {
      method: 'GET',
      headers: headersMap,
      responseFormat: 'binary',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return response.content;
  }
  async getZipDownloadStatus(
    statusUrl: string,
    headersInput: GetZipDownloadStatusHeadersInput = new GetZipDownloadStatusHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ZipDownloadStatus> {
    const headers: any = new GetZipDownloadStatusHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(statusUrl, {
      method: 'GET',
      headers: headersMap,
      responseFormat: 'json',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return deserializeZipDownloadStatus(response.data);
  }
  async downloadZip(
    requestBody: ZipDownloadRequest,
    headersInput: DownloadZipHeadersInput = new DownloadZipHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const headers: any = new DownloadZipHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const zipDownloadSession: ZipDownload = await this.createZipDownload(
      {
        items: requestBody.items,
        downloadFileName: requestBody.downloadFileName,
      } satisfies ZipDownloadRequest,
      {
        extraHeaders: headers.extraHeaders,
      } satisfies CreateZipDownloadHeadersInput,
      cancellationToken
    );
    return await this.getZipDownloadContent(
      zipDownloadSession.downloadUrl!,
      {
        extraHeaders: headers.extraHeaders,
      } satisfies GetZipDownloadContentHeadersInput,
      cancellationToken
    );
  }
}
export interface ZipDownloadsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
