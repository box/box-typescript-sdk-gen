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
import { NetworkSession } from '../network.js';
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
export class CreateZipDownloadHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateZipDownloadHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateZipDownloadHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetZipDownloadContentHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetZipDownloadContentHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetZipDownloadContentHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetZipDownloadStatusHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetZipDownloadStatusHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetZipDownloadStatusHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DownloadZipHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DownloadZipHeadersArg, 'extraHeaders'>
      | Partial<Pick<DownloadZipHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ZipDownloadsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ZipDownloadsManager,
      | 'createZipDownload'
      | 'getZipDownloadContent'
      | 'getZipDownloadStatus'
      | 'downloadZip'
    >
  ) {
    Object.assign(this, fields);
  }
  async createZipDownload(
    requestBody: ZipDownloadRequest,
    headers: CreateZipDownloadHeadersArg = new CreateZipDownloadHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<ZipDownload> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/zip_downloads') as string,
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
    headers: GetZipDownloadContentHeadersArg = new GetZipDownloadContentHeadersArg(
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
    headers: GetZipDownloadStatusHeadersArg = new GetZipDownloadStatusHeadersArg(
      {}
    ),
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
    headers: DownloadZipHeadersArg = new DownloadZipHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const zipDownloadSession: ZipDownload = await this.createZipDownload(
      {
        items: requestBody.items,
        downloadFileName: requestBody.downloadFileName,
      } satisfies ZipDownloadRequest,
      new CreateZipDownloadHeadersArg({ extraHeaders: headers.extraHeaders }),
      cancellationToken
    );
    return await this.getZipDownloadContent(
      zipDownloadSession.downloadUrl!,
      new GetZipDownloadContentHeadersArg({
        extraHeaders: headers.extraHeaders,
      }),
      cancellationToken
    );
  }
}
