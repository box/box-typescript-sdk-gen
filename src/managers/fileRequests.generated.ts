import { serializeFileRequest } from '../schemas/fileRequest.generated';
import { deserializeFileRequest } from '../schemas/fileRequest.generated';
import { serializeClientError } from '../schemas/clientError.generated';
import { deserializeClientError } from '../schemas/clientError.generated';
import { serializeFileRequestUpdateRequest } from '../schemas/fileRequestUpdateRequest.generated';
import { deserializeFileRequestUpdateRequest } from '../schemas/fileRequestUpdateRequest.generated';
import { serializeFileRequestCopyRequest } from '../schemas/fileRequestCopyRequest.generated';
import { deserializeFileRequestCopyRequest } from '../schemas/fileRequestCopyRequest.generated';
import { ResponseFormat } from '../networking/fetchOptions.generated';
import { FileRequest } from '../schemas/fileRequest.generated';
import { ClientError } from '../schemas/clientError.generated';
import { FileRequestUpdateRequest } from '../schemas/fileRequestUpdateRequest.generated';
import { FileRequestCopyRequest } from '../schemas/fileRequestCopyRequest.generated';
import { BoxSdkError } from '../box/errors';
import { Authentication } from '../networking/auth.generated';
import { NetworkSession } from '../networking/network.generated';
import { FetchOptions } from '../networking/fetchOptions.generated';
import { FetchResponse } from '../networking/fetchResponse.generated';
import { prepareParams } from '../internal/utils';
import { toString } from '../internal/utils';
import { ByteStream } from '../internal/utils';
import { CancellationToken } from '../internal/utils';
import { sdToJson } from '../serialization/json';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export class GetFileRequestByIdOptionals {
  readonly headers: GetFileRequestByIdHeaders = new GetFileRequestByIdHeaders(
    {},
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<GetFileRequestByIdOptionals, 'headers' | 'cancellationToken'>
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
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
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
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
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
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
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateFileRequestCopyOptionalsInput {
  readonly headers?: CreateFileRequestCopyHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileRequestByIdHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileRequestByIdHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileRequestByIdHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UpdateFileRequestByIdHeaders {
  /**
   * Ensures this item hasn't recently changed before
   * making changes.
   *
   * Pass in the item's last observed `etag` value
   * into this header and the endpoint will fail
   * with a `412 Precondition Failed` if it
   * has changed since. */
  readonly ifMatch?: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateFileRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFileRequestByIdHeaders, 'extraHeaders'>>,
  ) {
    if (fields.ifMatch !== undefined) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFileRequestByIdHeadersInput {
  /**
   * Ensures this item hasn't recently changed before
   * making changes.
   *
   * Pass in the item's last observed `etag` value
   * into this header and the endpoint will fail
   * with a `412 Precondition Failed` if it
   * has changed since. */
  readonly ifMatch?: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFileRequestByIdHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFileRequestByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileRequestByIdHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFileRequestByIdHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateFileRequestCopyHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateFileRequestCopyHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFileRequestCopyHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFileRequestCopyHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
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
      Partial<Pick<FileRequestsManager, 'networkSession'>>,
  ) {
    if (fields.auth !== undefined) {
      this.auth = fields.auth;
    }
    if (fields.networkSession !== undefined) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
     * Retrieves the information about a file request.
     * @param {string} fileRequestId The unique identifier that represent a file request.
    
    The ID for any file request can be determined
    by visiting a file request builder in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/filerequest/123`
    the `file_request_id` is `123`.
    Example: "123"
     * @param {GetFileRequestByIdOptionalsInput} optionalsInput
     * @returns {Promise<FileRequest>}
     */
  async getFileRequestById(
    fileRequestId: string,
    optionalsInput: GetFileRequestByIdOptionalsInput = {},
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
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/file_requests/',
            toString(fileRequestId) as string,
          ) as string,
          method: 'GET',
          headers: headersMap,
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeFileRequest(response.data!),
      rawData: response.data!,
    };
  }
  /**
     * Updates a file request. This can be used to activate or
     * deactivate a file request.
     * @param {string} fileRequestId The unique identifier that represent a file request.
    
    The ID for any file request can be determined
    by visiting a file request builder in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/filerequest/123`
    the `file_request_id` is `123`.
    Example: "123"
     * @param {FileRequestUpdateRequest} requestBody Request body of updateFileRequestById method
     * @param {UpdateFileRequestByIdOptionalsInput} optionalsInput
     * @returns {Promise<FileRequest>}
     */
  async updateFileRequestById(
    fileRequestId: string,
    requestBody: FileRequestUpdateRequest,
    optionalsInput: UpdateFileRequestByIdOptionalsInput = {},
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
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/file_requests/',
            toString(fileRequestId) as string,
          ) as string,
          method: 'PUT',
          headers: headersMap,
          data: serializeFileRequestUpdateRequest(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeFileRequest(response.data!),
      rawData: response.data!,
    };
  }
  /**
     * Deletes a file request permanently.
     * @param {string} fileRequestId The unique identifier that represent a file request.
    
    The ID for any file request can be determined
    by visiting a file request builder in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/filerequest/123`
    the `file_request_id` is `123`.
    Example: "123"
     * @param {DeleteFileRequestByIdOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
  async deleteFileRequestById(
    fileRequestId: string,
    optionalsInput: DeleteFileRequestByIdOptionalsInput = {},
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
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/file_requests/',
            toString(fileRequestId) as string,
          ) as string,
          method: 'DELETE',
          headers: headersMap,
          responseFormat: 'no_content' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return void 0;
  }
  /**
     * Copies an existing file request that is already present on one folder,
     * and applies it to another folder.
     * @param {string} fileRequestId The unique identifier that represent a file request.
    
    The ID for any file request can be determined
    by visiting a file request builder in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/filerequest/123`
    the `file_request_id` is `123`.
    Example: "123"
     * @param {FileRequestCopyRequest} requestBody Request body of createFileRequestCopy method
     * @param {CreateFileRequestCopyOptionalsInput} optionalsInput
     * @returns {Promise<FileRequest>}
     */
  async createFileRequestCopy(
    fileRequestId: string,
    requestBody: FileRequestCopyRequest,
    optionalsInput: CreateFileRequestCopyOptionalsInput = {},
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
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/file_requests/',
            toString(fileRequestId) as string,
            '/copy',
          ) as string,
          method: 'POST',
          headers: headersMap,
          data: serializeFileRequestCopyRequest(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeFileRequest(response.data!),
      rawData: response.data!,
    };
  }
}
export interface FileRequestsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
