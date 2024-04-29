import { serializeFileRequest } from '../schemas.generated.js';
import { deserializeFileRequest } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFileRequestUpdateRequest } from '../schemas.generated.js';
import { deserializeFileRequestUpdateRequest } from '../schemas.generated.js';
import { serializeFileRequestCopyRequest } from '../schemas.generated.js';
import { deserializeFileRequestCopyRequest } from '../schemas.generated.js';
import { FileRequest } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FileRequestUpdateRequest } from '../schemas.generated.js';
import { FileRequestCopyRequest } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileRequestByIdOptionals {
  readonly headers: GetFileRequestByIdHeaders = new GetFileRequestByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetFileRequestByIdOptionalsInput {
  readonly headers?: GetFileRequestByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFileRequestByIdOptionals {
  readonly headers: UpdateFileRequestByIdHeaders =
    new UpdateFileRequestByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFileRequestByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateFileRequestByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface UpdateFileRequestByIdOptionalsInput {
  readonly headers?: UpdateFileRequestByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFileRequestByIdOptionals {
  readonly headers: DeleteFileRequestByIdHeaders =
    new DeleteFileRequestByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFileRequestByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteFileRequestByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteFileRequestByIdOptionalsInput {
  readonly headers?: DeleteFileRequestByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateFileRequestCopyOptionals {
  readonly headers: CreateFileRequestCopyHeaders =
    new CreateFileRequestCopyHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateFileRequestCopyOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateFileRequestCopyOptionals, 'headers' | 'cancellationToken'>
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
export interface CreateFileRequestCopyOptionalsInput {
  readonly headers?: CreateFileRequestCopyHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileRequestByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileRequestByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileRequestByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UpdateFileRequestByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateFileRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFileRequestByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFileRequestByIdHeadersInput {
  readonly ifMatch?: string;
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFileRequestByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFileRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileRequestByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFileRequestByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateFileRequestCopyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateFileRequestCopyHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFileRequestCopyHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFileRequestCopyHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FileRequestsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FileRequestsManager,
      | 'networkSession'
      | 'getFileRequestById'
      | 'updateFileRequestById'
      | 'deleteFileRequestById'
      | 'createFileRequestCopy'
    > &
      Partial<Pick<FileRequestsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileRequestById(
    fileRequestId: string,
    optionalsInput: GetFileRequestByIdOptionalsInput = {}
  ): Promise<FileRequest> {
    const optionals: GetFileRequestByIdOptionals =
      new GetFileRequestByIdOptionals({
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
        '/file_requests/',
        toString(fileRequestId) as string
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
    return deserializeFileRequest(response.data);
  }
  async updateFileRequestById(
    fileRequestId: string,
    requestBody: FileRequestUpdateRequest,
    optionalsInput: UpdateFileRequestByIdOptionalsInput = {}
  ): Promise<FileRequest> {
    const optionals: UpdateFileRequestByIdOptionals =
      new UpdateFileRequestByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['if-match']: toString(headers.ifMatch) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/file_requests/',
        toString(fileRequestId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeFileRequestUpdateRequest(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileRequest(response.data);
  }
  async deleteFileRequestById(
    fileRequestId: string,
    optionalsInput: DeleteFileRequestByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFileRequestByIdOptionals =
      new DeleteFileRequestByIdOptionals({
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
        '/file_requests/',
        toString(fileRequestId) as string
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async createFileRequestCopy(
    fileRequestId: string,
    requestBody: FileRequestCopyRequest,
    optionalsInput: CreateFileRequestCopyOptionalsInput = {}
  ): Promise<FileRequest> {
    const optionals: CreateFileRequestCopyOptionals =
      new CreateFileRequestCopyOptionals({
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
        '/file_requests/',
        toString(fileRequestId) as string,
        '/copy'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeFileRequestCopyRequest(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileRequest(response.data);
  }
}
export interface FileRequestsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
