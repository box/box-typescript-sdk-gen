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
export class GetFileRequestByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileRequestByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileRequestByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class UpdateFileRequestByIdHeaders {
  readonly ifMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileRequestByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileRequestByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileRequestByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileRequestByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFileRequestByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateFileRequestCopyHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileRequestCopyHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFileRequestCopyHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileRequestsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FileRequestsManager,
          | 'networkSession'
          | 'getFileRequestById'
          | 'updateFileRequestById'
          | 'deleteFileRequestById'
          | 'createFileRequestCopy'
        >
      | Partial<Pick<FileRequestsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileRequestById(
    fileRequestId: string,
    headers: GetFileRequestByIdHeaders = new GetFileRequestByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<FileRequest> {
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
    headers: UpdateFileRequestByIdHeaders = new UpdateFileRequestByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileRequest> {
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
    headers: DeleteFileRequestByIdHeaders = new DeleteFileRequestByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
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
    headers: CreateFileRequestCopyHeaders = new CreateFileRequestCopyHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileRequest> {
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
