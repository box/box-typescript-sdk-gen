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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
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
export class ZipDownloadsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ZipDownloadsManager,
      'createZipDownload' | 'getZipDownloadContent' | 'getZipDownloadStatus'
    >
  ) {
    Object.assign(this, fields);
  }
  async createZipDownload(
    requestBody: ZipDownloadRequest,
    headers: CreateZipDownloadHeadersArg = new CreateZipDownloadHeadersArg({})
  ): Promise<ZipDownload> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/zip_downloads') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(serializeZipDownloadRequest(requestBody)),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeZipDownload(deserializeJson(response.text));
  }
  async getZipDownloadContent(
    zipDownloadId: string,
    headers: GetZipDownloadContentHeadersArg = new GetZipDownloadContentHeadersArg(
      {}
    )
  ): Promise<ByteStream> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://dl.boxcloud.com/2.0/zip_downloads/',
        toString(zipDownloadId) as string,
        '/content'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'binary',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return response.content;
  }
  async getZipDownloadStatus(
    zipDownloadId: string,
    headers: GetZipDownloadStatusHeadersArg = new GetZipDownloadStatusHeadersArg(
      {}
    )
  ): Promise<ZipDownloadStatus> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/zip_downloads/',
        toString(zipDownloadId) as string,
        '/status'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeZipDownloadStatus(deserializeJson(response.text));
  }
}
