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
export class CreateZipDownloadOptionals {
  readonly headers: CreateZipDownloadHeaders = new CreateZipDownloadHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateZipDownloadOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateZipDownloadOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateZipDownloadOptionalsInput {
  readonly headers?: CreateZipDownloadHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetZipDownloadContentOptionals {
  readonly headers: GetZipDownloadContentHeaders =
    new GetZipDownloadContentHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetZipDownloadContentOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetZipDownloadContentOptionals, 'headers' | 'cancellationToken'>
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
export interface GetZipDownloadContentOptionalsInput {
  readonly headers?: GetZipDownloadContentHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetZipDownloadStatusOptionals {
  readonly headers: GetZipDownloadStatusHeaders =
    new GetZipDownloadStatusHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetZipDownloadStatusOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetZipDownloadStatusOptionals, 'headers' | 'cancellationToken'>
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
export interface GetZipDownloadStatusOptionalsInput {
  readonly headers?: GetZipDownloadStatusHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DownloadZipOptionals {
  readonly headers: DownloadZipHeaders = new DownloadZipHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DownloadZipOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DownloadZipOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DownloadZipOptionalsInput {
  readonly headers?: DownloadZipHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateZipDownloadHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateZipDownloadHeaders, 'extraHeaders'> &
      Partial<Pick<CreateZipDownloadHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetZipDownloadContentHeaders, 'extraHeaders'> &
      Partial<Pick<GetZipDownloadContentHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<GetZipDownloadStatusHeaders, 'extraHeaders'> &
      Partial<Pick<GetZipDownloadStatusHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<DownloadZipHeaders, 'extraHeaders'> &
      Partial<Pick<DownloadZipHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      ZipDownloadsManager,
      | 'networkSession'
      | 'createZipDownload'
      | 'getZipDownloadContent'
      | 'getZipDownloadStatus'
      | 'downloadZip'
    > &
      Partial<Pick<ZipDownloadsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async createZipDownload(
    requestBody: ZipDownloadRequest,
    optionalsInput: CreateZipDownloadOptionalsInput = {}
  ): Promise<ZipDownload> {
    const optionals: any = new CreateZipDownloadOptionals({
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
    optionalsInput: GetZipDownloadContentOptionalsInput = {}
  ): Promise<ByteStream> {
    const optionals: any = new GetZipDownloadContentOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetZipDownloadStatusOptionalsInput = {}
  ): Promise<ZipDownloadStatus> {
    const optionals: any = new GetZipDownloadStatusOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DownloadZipOptionalsInput = {}
  ): Promise<ByteStream> {
    const optionals: any = new DownloadZipOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const zipDownloadSession: ZipDownload = await this.createZipDownload(
      {
        items: requestBody.items,
        downloadFileName: requestBody.downloadFileName,
      } satisfies ZipDownloadRequest,
      {
        headers: new CreateZipDownloadHeaders({
          extraHeaders: headers.extraHeaders,
        }),
        cancellationToken: cancellationToken,
      } satisfies CreateZipDownloadOptionalsInput
    );
    return await this.getZipDownloadContent(zipDownloadSession.downloadUrl!, {
      headers: new GetZipDownloadContentHeaders({
        extraHeaders: headers.extraHeaders,
      }),
      cancellationToken: cancellationToken,
    } satisfies GetZipDownloadContentOptionalsInput);
  }
}
export interface ZipDownloadsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
