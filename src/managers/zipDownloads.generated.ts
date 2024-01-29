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
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdToJson } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
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
    headers: CreateZipDownloadHeaders = new CreateZipDownloadHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ZipDownload> {
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
    headers: GetZipDownloadContentHeaders = new GetZipDownloadContentHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
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
    headers: GetZipDownloadStatusHeaders = new GetZipDownloadStatusHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ZipDownloadStatus> {
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
    headers: DownloadZipHeaders = new DownloadZipHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const zipDownloadSession: ZipDownload = await this.createZipDownload(
      {
        items: requestBody.items,
        downloadFileName: requestBody.downloadFileName,
      } satisfies ZipDownloadRequest,
      new CreateZipDownloadHeaders({ extraHeaders: headers.extraHeaders }),
      cancellationToken
    );
    return await this.getZipDownloadContent(
      zipDownloadSession.downloadUrl!,
      new GetZipDownloadContentHeaders({ extraHeaders: headers.extraHeaders }),
      cancellationToken
    );
  }
}
