import { serializeFileFull } from '../schemas/fileFull.generated.js';
import { deserializeFileFull } from '../schemas/fileFull.generated.js';
import { serializeUploadSession } from '../schemas/uploadSession.generated.js';
import { deserializeUploadSession } from '../schemas/uploadSession.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeUploadedPart } from '../schemas/uploadedPart.generated.js';
import { deserializeUploadedPart } from '../schemas/uploadedPart.generated.js';
import { serializeUploadParts } from '../schemas/uploadParts.generated.js';
import { deserializeUploadParts } from '../schemas/uploadParts.generated.js';
import { serializeFiles } from '../schemas/files.generated.js';
import { deserializeFiles } from '../schemas/files.generated.js';
import { serializeUploadPart } from '../schemas/uploadPart.generated.js';
import { deserializeUploadPart } from '../schemas/uploadPart.generated.js';
import { Buffer } from '../internal/utils.js';
import { HashName } from '../internal/utils.js';
import { FileFull } from '../schemas/fileFull.generated.js';
import { Iterator } from '../internal/utils.js';
import { UploadSession } from '../schemas/uploadSession.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { UploadedPart } from '../schemas/uploadedPart.generated.js';
import { UploadParts } from '../schemas/uploadParts.generated.js';
import { Files } from '../schemas/files.generated.js';
import { UploadPart } from '../schemas/uploadPart.generated.js';
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
import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { hexToBase64 } from '../internal/utils.js';
import { iterateChunks } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { reduceIterator } from '../internal/utils.js';
import { Hash } from '../internal/utils.js';
import { bufferLength } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateFileUploadSessionOptionals {
  readonly headers: CreateFileUploadSessionHeaders =
    new CreateFileUploadSessionHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateFileUploadSessionOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateFileUploadSessionOptionals, 'headers' | 'cancellationToken'>
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
export interface CreateFileUploadSessionOptionalsInput {
  readonly headers?: CreateFileUploadSessionHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateFileUploadSessionForExistingFileOptionals {
  readonly headers: CreateFileUploadSessionForExistingFileHeaders =
    new CreateFileUploadSessionForExistingFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateFileUploadSessionForExistingFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateFileUploadSessionForExistingFileOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface CreateFileUploadSessionForExistingFileOptionalsInput {
  readonly headers?: CreateFileUploadSessionForExistingFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileUploadSessionByIdOptionals {
  readonly headers: GetFileUploadSessionByIdHeaders =
    new GetFileUploadSessionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileUploadSessionByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface GetFileUploadSessionByIdOptionalsInput {
  readonly headers?: GetFileUploadSessionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UploadFilePartOptionals {
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<UploadFilePartOptionals, 'cancellationToken'> &
      Partial<Pick<UploadFilePartOptionals, 'cancellationToken'>>
  ) {
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UploadFilePartOptionalsInput {
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFileUploadSessionByIdOptionals {
  readonly headers: DeleteFileUploadSessionByIdHeaders =
    new DeleteFileUploadSessionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFileUploadSessionByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteFileUploadSessionByIdOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface DeleteFileUploadSessionByIdOptionalsInput {
  readonly headers?: DeleteFileUploadSessionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileUploadSessionPartsOptionals {
  readonly queryParams: GetFileUploadSessionPartsQueryParams =
    {} satisfies GetFileUploadSessionPartsQueryParams;
  readonly headers: GetFileUploadSessionPartsHeaders =
    new GetFileUploadSessionPartsHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileUploadSessionPartsOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileUploadSessionPartsOptionals,
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
export interface GetFileUploadSessionPartsOptionalsInput {
  readonly queryParams?: GetFileUploadSessionPartsQueryParams;
  readonly headers?: GetFileUploadSessionPartsHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateFileUploadSessionCommitOptionals {
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateFileUploadSessionCommitOptionals, 'cancellationToken'> &
      Partial<Pick<CreateFileUploadSessionCommitOptionals, 'cancellationToken'>>
  ) {
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateFileUploadSessionCommitOptionalsInput {
  readonly cancellationToken?: undefined | CancellationToken;
}
interface PartAccumulator {
  readonly lastIndex: number;
  readonly parts: readonly UploadPart[];
  readonly fileSize: number;
  readonly uploadSessionId: string;
  readonly fileHash: Hash;
}
export interface CreateFileUploadSessionRequestBody {
  /**
   * The ID of the folder to upload the new file to. */
  readonly folderId: string;
  /**
   * The total number of bytes of the file to be uploaded */
  readonly fileSize: number;
  /**
   * The name of new file */
  readonly fileName: string;
}
export class CreateFileUploadSessionHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateFileUploadSessionHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFileUploadSessionHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFileUploadSessionHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateFileUploadSessionForExistingFileRequestBody {
  /**
   * The total number of bytes of the file to be uploaded */
  readonly fileSize: number;
  /**
   * The optional new name of new file */
  readonly fileName?: string;
}
export class CreateFileUploadSessionForExistingFileHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<
      CreateFileUploadSessionForExistingFileHeaders,
      'extraHeaders'
    > &
      Partial<
        Pick<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'>
      >
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFileUploadSessionForExistingFileHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetFileUploadSessionByIdHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileUploadSessionByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileUploadSessionByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileUploadSessionByIdHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class UploadFilePartHeaders {
  /**
   * The [RFC3230][1] message digest of the chunk uploaded.
   *
   * Only SHA1 is supported. The SHA1 digest must be base64
   * encoded. The format of this header is as
   * `sha=BASE64_ENCODED_DIGEST`.
   *
   * To get the value for the `SHA` digest, use the
   * openSSL command to encode the file part:
   * `openssl sha1 -binary <FILE_PART_NAME> | base64`
   *
   * [1]: https://tools.ietf.org/html/rfc3230 */
  readonly digest!: string;
  /**
   * The byte range of the chunk.
   *
   * Must not overlap with the range of a part already
   * uploaded this session. Each part’s size must be
   * exactly equal in size to the part size specified
   * in the upload session that you created.
   * One exception is the last part of the file, as this can be smaller.
   *
   * When providing the value for `content-range`, remember that:
   *
   * * The lower bound of each part's byte range
   *   must be a multiple of the part size.
   * * The higher bound must be a multiple of the part size - 1. */
  readonly contentRange!: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UploadFilePartHeaders, 'extraHeaders'> &
      Partial<Pick<UploadFilePartHeaders, 'extraHeaders'>>
  ) {
    if (fields.digest) {
      this.digest = fields.digest;
    }
    if (fields.contentRange) {
      this.contentRange = fields.contentRange;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UploadFilePartHeadersInput {
  /**
   * The [RFC3230][1] message digest of the chunk uploaded.
   *
   * Only SHA1 is supported. The SHA1 digest must be base64
   * encoded. The format of this header is as
   * `sha=BASE64_ENCODED_DIGEST`.
   *
   * To get the value for the `SHA` digest, use the
   * openSSL command to encode the file part:
   * `openssl sha1 -binary <FILE_PART_NAME> | base64`
   *
   * [1]: https://tools.ietf.org/html/rfc3230 */
  readonly digest: string;
  /**
   * The byte range of the chunk.
   *
   * Must not overlap with the range of a part already
   * uploaded this session. Each part’s size must be
   * exactly equal in size to the part size specified
   * in the upload session that you created.
   * One exception is the last part of the file, as this can be smaller.
   *
   * When providing the value for `content-range`, remember that:
   *
   * * The lower bound of each part's byte range
   *   must be a multiple of the part size.
   * * The higher bound must be a multiple of the part size - 1. */
  readonly contentRange: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFileUploadSessionByIdHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFileUploadSessionByIdHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetFileUploadSessionPartsQueryParams {
  /**
   * The offset of the item at which to begin the response.
   *
   * Queries with offset parameter value
   * exceeding 10000 will be rejected
   * with a 400 response. */
  readonly offset?: number;
  /**
   * The maximum number of items to return per page. */
  readonly limit?: number;
}
export class GetFileUploadSessionPartsHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileUploadSessionPartsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileUploadSessionPartsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileUploadSessionPartsHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateFileUploadSessionCommitRequestBody {
  /**
   * The list details for the uploaded parts */
  readonly parts: readonly UploadPart[];
}
export class CreateFileUploadSessionCommitHeaders {
  /**
   * The [RFC3230][1] message digest of the whole file.
   *
   * Only SHA1 is supported. The SHA1 digest must be Base64
   * encoded. The format of this header is as
   * `sha=BASE64_ENCODED_DIGEST`.
   *
   * [1]: https://tools.ietf.org/html/rfc3230 */
  readonly digest!: string;
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
   * Ensures an item is only returned if it has changed.
   *
   * Pass in the item's last observed `etag` value
   * into this header and the endpoint will fail
   * with a `304 Not Modified` if the item has not
   * changed since. */
  readonly ifNoneMatch?: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateFileUploadSessionCommitHeaders, 'extraHeaders'> &
      Partial<Pick<CreateFileUploadSessionCommitHeaders, 'extraHeaders'>>
  ) {
    if (fields.digest) {
      this.digest = fields.digest;
    }
    if (fields.ifMatch) {
      this.ifMatch = fields.ifMatch;
    }
    if (fields.ifNoneMatch) {
      this.ifNoneMatch = fields.ifNoneMatch;
    }
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateFileUploadSessionCommitHeadersInput {
  /**
   * The [RFC3230][1] message digest of the whole file.
   *
   * Only SHA1 is supported. The SHA1 digest must be Base64
   * encoded. The format of this header is as
   * `sha=BASE64_ENCODED_DIGEST`.
   *
   * [1]: https://tools.ietf.org/html/rfc3230 */
  readonly digest: string;
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
   * Ensures an item is only returned if it has changed.
   *
   * Pass in the item's last observed `etag` value
   * into this header and the endpoint will fail
   * with a `304 Not Modified` if the item has not
   * changed since. */
  readonly ifNoneMatch?: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ChunkedUploadsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      ChunkedUploadsManager,
      | 'networkSession'
      | 'createFileUploadSession'
      | 'createFileUploadSessionForExistingFile'
      | 'getFileUploadSessionById'
      | 'uploadFilePart'
      | 'deleteFileUploadSessionById'
      | 'getFileUploadSessionParts'
      | 'createFileUploadSessionCommit'
      | 'reducer'
      | 'uploadBigFile'
    > &
      Partial<Pick<ChunkedUploadsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
   * Creates an upload session for a new file.
   * @param {CreateFileUploadSessionRequestBody} requestBody Request body of createFileUploadSession method
   * @param {CreateFileUploadSessionOptionalsInput} optionalsInput
   * @returns {Promise<UploadSession>}
   */
  async createFileUploadSession(
    requestBody: CreateFileUploadSessionRequestBody,
    optionalsInput: CreateFileUploadSessionOptionalsInput = {}
  ): Promise<UploadSession> {
    const optionals: CreateFileUploadSessionOptionals =
      new CreateFileUploadSessionOptionals({
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
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(response.data);
  }
  /**
     * Creates an upload session for an existing file.
     * @param {string} fileId The unique identifier that represents a file.
    
    The ID for any file can be determined
    by visiting a file in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/files/123`
    the `file_id` is `123`.
    Example: "12345"
     * @param {CreateFileUploadSessionForExistingFileRequestBody} requestBody Request body of createFileUploadSessionForExistingFile method
     * @param {CreateFileUploadSessionForExistingFileOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
  async createFileUploadSessionForExistingFile(
    fileId: string,
    requestBody: CreateFileUploadSessionForExistingFileRequestBody,
    optionalsInput: CreateFileUploadSessionForExistingFileOptionalsInput = {}
  ): Promise<UploadSession> {
    const optionals: CreateFileUploadSessionForExistingFileOptionals =
      new CreateFileUploadSessionForExistingFileOptionals({
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
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/',
        toString(fileId) as string,
        '/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionForExistingFileRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(response.data);
  }
  /**
     * Return information about an upload session.
     * @param {string} uploadSessionId The ID of the upload session.
    Example: "D5E3F7A"
     * @param {GetFileUploadSessionByIdOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
  async getFileUploadSessionById(
    uploadSessionId: string,
    optionalsInput: GetFileUploadSessionByIdOptionalsInput = {}
  ): Promise<UploadSession> {
    const optionals: GetFileUploadSessionByIdOptionals =
      new GetFileUploadSessionByIdOptionals({
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
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string
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
    return deserializeUploadSession(response.data);
  }
  /**
     * Updates a chunk of an upload session for a file.
     * @param {string} uploadSessionId The ID of the upload session.
    Example: "D5E3F7A"
     * @param {ByteStream} requestBody Request body of uploadFilePart method
     * @param {UploadFilePartHeadersInput} headersInput Headers of uploadFilePart method
     * @param {UploadFilePartOptionalsInput} optionalsInput
     * @returns {Promise<UploadedPart>}
     */
  async uploadFilePart(
    uploadSessionId: string,
    requestBody: ByteStream,
    headersInput: UploadFilePartHeadersInput,
    optionalsInput: UploadFilePartOptionalsInput = {}
  ): Promise<UploadedPart> {
    const headers: UploadFilePartHeaders = new UploadFilePartHeaders({
      digest: headersInput.digest,
      contentRange: headersInput.contentRange,
      extraHeaders: headersInput.extraHeaders,
    });
    const optionals: UploadFilePartOptionals = new UploadFilePartOptionals({
      cancellationToken: optionalsInput.cancellationToken,
    });
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['digest']: toString(headers.digest) as string,
        ['content-range']: toString(headers.contentRange) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        fileStream: requestBody,
        contentType: 'application/octet-stream',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadedPart(response.data);
  }
  /**
     * Abort an upload session and discard all data uploaded.
     *
     * This cannot be reversed.
     * @param {string} uploadSessionId The ID of the upload session.
    Example: "D5E3F7A"
     * @param {DeleteFileUploadSessionByIdOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
  async deleteFileUploadSessionById(
    uploadSessionId: string,
    optionalsInput: DeleteFileUploadSessionByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFileUploadSessionByIdOptionals =
      new DeleteFileUploadSessionByIdOptionals({
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
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string
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
  /**
     * Return a list of the chunks uploaded to the upload
     * session so far.
     * @param {string} uploadSessionId The ID of the upload session.
    Example: "D5E3F7A"
     * @param {GetFileUploadSessionPartsOptionalsInput} optionalsInput
     * @returns {Promise<UploadParts>}
     */
  async getFileUploadSessionParts(
    uploadSessionId: string,
    optionalsInput: GetFileUploadSessionPartsOptionalsInput = {}
  ): Promise<UploadParts> {
    const optionals: GetFileUploadSessionPartsOptionals =
      new GetFileUploadSessionPartsOptionals({
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
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string,
        '/parts'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadParts(response.data);
  }
  /**
     * Close an upload session and create a file from the
     * uploaded chunks.
     * @param {string} uploadSessionId The ID of the upload session.
    Example: "D5E3F7A"
     * @param {CreateFileUploadSessionCommitRequestBody} requestBody Request body of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitHeadersInput} headersInput Headers of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitOptionalsInput} optionalsInput
     * @returns {Promise<Files>}
     */
  async createFileUploadSessionCommit(
    uploadSessionId: string,
    requestBody: CreateFileUploadSessionCommitRequestBody,
    headersInput: CreateFileUploadSessionCommitHeadersInput,
    optionalsInput: CreateFileUploadSessionCommitOptionalsInput = {}
  ): Promise<Files> {
    const headers: CreateFileUploadSessionCommitHeaders =
      new CreateFileUploadSessionCommitHeaders({
        digest: headersInput.digest,
        ifMatch: headersInput.ifMatch,
        ifNoneMatch: headersInput.ifNoneMatch,
        extraHeaders: headersInput.extraHeaders,
      });
    const optionals: CreateFileUploadSessionCommitOptionals =
      new CreateFileUploadSessionCommitOptionals({
        cancellationToken: optionalsInput.cancellationToken,
      });
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['digest']: toString(headers.digest) as string,
        ['if-match']: toString(headers.ifMatch) as string,
        ['if-none-match']: toString(headers.ifNoneMatch) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string,
        '/commit'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionCommitRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(response.data);
  }
  /**
   * @param {PartAccumulator} acc
   * @param {ByteStream} chunk
   * @returns {Promise<PartAccumulator>}
   */
  private async reducer(
    acc: PartAccumulator,
    chunk: ByteStream
  ): Promise<PartAccumulator> {
    const lastIndex: number = acc.lastIndex;
    const parts: readonly UploadPart[] = acc.parts;
    const chunkBuffer: Buffer = await readByteStream(chunk);
    const hash: Hash = new Hash({ algorithm: 'sha1' as HashName });
    hash.updateHash(chunkBuffer);
    const sha1: string = await hash.digestHash('base64');
    const digest: string = ''.concat('sha=', sha1) as string;
    const chunkSize: number = bufferLength(chunkBuffer);
    const bytesStart: number = lastIndex + 1;
    const bytesEnd: number = lastIndex + chunkSize;
    const contentRange: string = ''.concat(
      'bytes ',
      (toString(bytesStart) as string)!,
      '-',
      (toString(bytesEnd) as string)!,
      '/',
      (toString(acc.fileSize) as string)!
    ) as string;
    const uploadedPart: UploadedPart = await this.uploadFilePart(
      acc.uploadSessionId,
      generateByteStreamFromBuffer(chunkBuffer),
      {
        digest: digest,
        contentRange: contentRange,
      } satisfies UploadFilePartHeadersInput
    );
    const part: UploadPart = uploadedPart.part!;
    const partSha1: string = hexToBase64(part.sha1!);
    if (!(partSha1 == sha1)) {
      throw new Error('Assertion failed');
    }
    if (!(part.size! == chunkSize)) {
      throw new Error('Assertion failed');
    }
    if (!(part.offset! == bytesStart)) {
      throw new Error('Assertion failed');
    }
    acc.fileHash.updateHash(chunkBuffer);
    return {
      lastIndex: bytesEnd,
      parts: parts.concat([part]),
      fileSize: acc.fileSize,
      uploadSessionId: acc.uploadSessionId,
      fileHash: acc.fileHash,
    } satisfies PartAccumulator;
  }
  /**
   * Starts the process of chunk uploading a big file. Should return a File object representing uploaded file.
   * @param {ByteStream} file The stream of the file to upload.
   * @param {string} fileName The name of the file, which will be used for storage in Box.
   * @param {number} fileSize The total size of the file for the chunked upload in bytes.
   * @param {string} parentFolderId The ID of the folder where the file should be uploaded.
   * @param {CancellationToken} cancellationToken Token used for request cancellation.
   * @returns {Promise<FileFull>}
   */
  async uploadBigFile(
    file: ByteStream,
    fileName: string,
    fileSize: number,
    parentFolderId: string,
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
    const uploadSession: UploadSession = await this.createFileUploadSession(
      {
        fileName: fileName,
        fileSize: fileSize,
        folderId: parentFolderId,
      } satisfies CreateFileUploadSessionRequestBody,
      {
        headers: new CreateFileUploadSessionHeaders({}),
        cancellationToken: cancellationToken,
      } satisfies CreateFileUploadSessionOptionalsInput
    );
    const uploadSessionId: string = uploadSession.id!;
    const partSize: number = uploadSession.partSize!;
    const totalParts: number = uploadSession.totalParts!;
    if (!(partSize * totalParts >= fileSize)) {
      throw new Error('Assertion failed');
    }
    if (!(uploadSession.numPartsProcessed == 0)) {
      throw new Error('Assertion failed');
    }
    const fileHash: Hash = new Hash({ algorithm: 'sha1' as HashName });
    const chunksIterator: Iterator = iterateChunks(file, partSize, fileSize);
    const results: PartAccumulator = await reduceIterator(
      chunksIterator,
      this.reducer.bind(this),
      {
        lastIndex: -1,
        parts: [],
        fileSize: fileSize,
        uploadSessionId: uploadSessionId,
        fileHash: fileHash,
      } satisfies PartAccumulator
    );
    const parts: readonly UploadPart[] = results.parts;
    const processedSessionParts: UploadParts =
      await this.getFileUploadSessionParts(uploadSessionId, {
        queryParams: {} satisfies GetFileUploadSessionPartsQueryParams,
        headers: new GetFileUploadSessionPartsHeaders({}),
        cancellationToken: cancellationToken,
      } satisfies GetFileUploadSessionPartsOptionalsInput);
    if (!(processedSessionParts.totalCount! == totalParts)) {
      throw new Error('Assertion failed');
    }
    const sha1: string = await fileHash.digestHash('base64');
    const digest: string = ''.concat('sha=', sha1) as string;
    const committedSession: Files = await this.createFileUploadSessionCommit(
      uploadSessionId,
      { parts: parts } satisfies CreateFileUploadSessionCommitRequestBody,
      { digest: digest } satisfies CreateFileUploadSessionCommitHeadersInput,
      {
        cancellationToken: cancellationToken,
      } satisfies CreateFileUploadSessionCommitOptionalsInput
    );
    return committedSession.entries![0];
  }
}
export interface ChunkedUploadsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateFileUploadSessionRequestBody(
  val: CreateFileUploadSessionRequestBody
): SerializedData {
  return {
    ['folder_id']: val.folderId,
    ['file_size']: val.fileSize,
    ['file_name']: val.fileName,
  };
}
export function deserializeCreateFileUploadSessionRequestBody(
  val: SerializedData
): CreateFileUploadSessionRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateFileUploadSessionRequestBody"',
    });
  }
  if (val.folder_id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "folder_id" of type "CreateFileUploadSessionRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.folder_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "folder_id" of type "CreateFileUploadSessionRequestBody"',
    });
  }
  const folderId: string = val.folder_id;
  if (val.file_size == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "file_size" of type "CreateFileUploadSessionRequestBody" to be defined',
    });
  }
  if (!sdIsNumber(val.file_size)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "file_size" of type "CreateFileUploadSessionRequestBody"',
    });
  }
  const fileSize: number = val.file_size;
  if (val.file_name == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "file_name" of type "CreateFileUploadSessionRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.file_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "file_name" of type "CreateFileUploadSessionRequestBody"',
    });
  }
  const fileName: string = val.file_name;
  return {
    folderId: folderId,
    fileSize: fileSize,
    fileName: fileName,
  } satisfies CreateFileUploadSessionRequestBody;
}
export function serializeCreateFileUploadSessionForExistingFileRequestBody(
  val: CreateFileUploadSessionForExistingFileRequestBody
): SerializedData {
  return {
    ['file_size']: val.fileSize,
    ['file_name']: val.fileName == void 0 ? void 0 : val.fileName,
  };
}
export function deserializeCreateFileUploadSessionForExistingFileRequestBody(
  val: SerializedData
): CreateFileUploadSessionForExistingFileRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateFileUploadSessionForExistingFileRequestBody"',
    });
  }
  if (val.file_size == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody" to be defined',
    });
  }
  if (!sdIsNumber(val.file_size)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "file_size" of type "CreateFileUploadSessionForExistingFileRequestBody"',
    });
  }
  const fileSize: number = val.file_size;
  if (!(val.file_name == void 0) && !sdIsString(val.file_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "file_name" of type "CreateFileUploadSessionForExistingFileRequestBody"',
    });
  }
  const fileName: undefined | string =
    val.file_name == void 0 ? void 0 : val.file_name;
  return {
    fileSize: fileSize,
    fileName: fileName,
  } satisfies CreateFileUploadSessionForExistingFileRequestBody;
}
export function serializeCreateFileUploadSessionCommitRequestBody(
  val: CreateFileUploadSessionCommitRequestBody
): SerializedData {
  return {
    ['parts']: val.parts.map(function (item: UploadPart): SerializedData {
      return serializeUploadPart(item);
    }) as readonly any[],
  };
}
export function deserializeCreateFileUploadSessionCommitRequestBody(
  val: SerializedData
): CreateFileUploadSessionCommitRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateFileUploadSessionCommitRequestBody"',
    });
  }
  if (val.parts == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "parts" of type "CreateFileUploadSessionCommitRequestBody" to be defined',
    });
  }
  if (!sdIsList(val.parts)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "parts" of type "CreateFileUploadSessionCommitRequestBody"',
    });
  }
  const parts: readonly UploadPart[] = sdIsList(val.parts)
    ? (val.parts.map(function (itm: SerializedData): UploadPart {
        return deserializeUploadPart(itm);
      }) as readonly any[])
    : [];
  return { parts: parts } satisfies CreateFileUploadSessionCommitRequestBody;
}
