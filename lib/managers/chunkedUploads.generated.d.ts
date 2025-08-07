import { UploadSession } from '../schemas/uploadSession.generated.js';
import { UploadedPart } from '../schemas/uploadedPart.generated.js';
import { UploadParts } from '../schemas/uploadParts.generated.js';
import { Files } from '../schemas/files.generated.js';
import { UploadPart } from '../schemas/uploadPart.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { FileFull } from '../schemas/fileFull.generated.js';
export declare class CreateFileUploadSessionOptionals {
    readonly headers: CreateFileUploadSessionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileUploadSessionOptionalsInput {
    readonly headers?: CreateFileUploadSessionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileUploadSessionForExistingFileOptionals {
    readonly headers: CreateFileUploadSessionForExistingFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionForExistingFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionForExistingFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileUploadSessionForExistingFileOptionalsInput {
    readonly headers?: CreateFileUploadSessionForExistingFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileUploadSessionByUrlOptionals {
    readonly headers: GetFileUploadSessionByUrlHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileUploadSessionByUrlOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileUploadSessionByUrlOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileUploadSessionByUrlOptionalsInput {
    readonly headers?: GetFileUploadSessionByUrlHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileUploadSessionByIdOptionals {
    readonly headers: GetFileUploadSessionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileUploadSessionByIdOptionalsInput {
    readonly headers?: GetFileUploadSessionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UploadFilePartByUrlOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFilePartByUrlOptionals, 'cancellationToken'> & Partial<Pick<UploadFilePartByUrlOptionals, 'cancellationToken'>>);
}
export interface UploadFilePartByUrlOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UploadFilePartOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFilePartOptionals, 'cancellationToken'> & Partial<Pick<UploadFilePartOptionals, 'cancellationToken'>>);
}
export interface UploadFilePartOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileUploadSessionByUrlOptionals {
    readonly headers: DeleteFileUploadSessionByUrlHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileUploadSessionByUrlOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileUploadSessionByUrlOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileUploadSessionByUrlOptionalsInput {
    readonly headers?: DeleteFileUploadSessionByUrlHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileUploadSessionByIdOptionals {
    readonly headers: DeleteFileUploadSessionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileUploadSessionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileUploadSessionByIdOptionalsInput {
    readonly headers?: DeleteFileUploadSessionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileUploadSessionPartsByUrlOptionals {
    readonly queryParams: GetFileUploadSessionPartsByUrlQueryParams;
    readonly headers: GetFileUploadSessionPartsByUrlHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileUploadSessionPartsByUrlOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileUploadSessionPartsByUrlOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileUploadSessionPartsByUrlOptionalsInput {
    readonly queryParams?: GetFileUploadSessionPartsByUrlQueryParams;
    readonly headers?: GetFileUploadSessionPartsByUrlHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileUploadSessionPartsOptionals {
    readonly queryParams: GetFileUploadSessionPartsQueryParams;
    readonly headers: GetFileUploadSessionPartsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileUploadSessionPartsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileUploadSessionPartsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileUploadSessionPartsOptionalsInput {
    readonly queryParams?: GetFileUploadSessionPartsQueryParams;
    readonly headers?: GetFileUploadSessionPartsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileUploadSessionCommitByUrlOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionCommitByUrlOptionals, 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionCommitByUrlOptionals, 'cancellationToken'>>);
}
export interface CreateFileUploadSessionCommitByUrlOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileUploadSessionCommitOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileUploadSessionCommitOptionals, 'cancellationToken'> & Partial<Pick<CreateFileUploadSessionCommitOptionals, 'cancellationToken'>>);
}
export interface CreateFileUploadSessionCommitOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateFileUploadSessionRequestBody {
    /**
     * The ID of the folder to upload the new file to. */
    readonly folderId: string;
    /**
     * The total number of bytes of the file to be uploaded. */
    readonly fileSize: number;
    /**
     * The name of new file. */
    readonly fileName: string;
    readonly rawData?: SerializedData;
}
export declare class CreateFileUploadSessionHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionHeaders, 'extraHeaders'>>);
}
export interface CreateFileUploadSessionHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFileUploadSessionForExistingFileRequestBody {
    /**
     * The total number of bytes of the file to be uploaded. */
    readonly fileSize: number;
    /**
     * The optional new name of new file. */
    readonly fileName?: string;
    readonly rawData?: SerializedData;
}
export declare class CreateFileUploadSessionForExistingFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'>>);
}
export interface CreateFileUploadSessionForExistingFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetFileUploadSessionByUrlHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileUploadSessionByUrlHeaders, 'extraHeaders'> & Partial<Pick<GetFileUploadSessionByUrlHeaders, 'extraHeaders'>>);
}
export interface GetFileUploadSessionByUrlHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetFileUploadSessionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileUploadSessionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileUploadSessionByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileUploadSessionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UploadFilePartByUrlHeaders {
    /**
     * The [RFC3230][1] message digest of the chunk uploaded.
     *
     * Only SHA1 is supported. The SHA1 digest must be base64
     * encoded. The format of this header is as
     * `sha=BASE64_ENCODED_DIGEST`.
     *
     * To get the value for the `SHA` digest, use the
     * openSSL command to encode the file part:
     * `openssl sha1 -binary <FILE_PART_NAME> | base64`.
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
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFilePartByUrlHeaders, 'extraHeaders'> & Partial<Pick<UploadFilePartByUrlHeaders, 'extraHeaders'>>);
}
export interface UploadFilePartByUrlHeadersInput {
    /**
     * The [RFC3230][1] message digest of the chunk uploaded.
     *
     * Only SHA1 is supported. The SHA1 digest must be base64
     * encoded. The format of this header is as
     * `sha=BASE64_ENCODED_DIGEST`.
     *
     * To get the value for the `SHA` digest, use the
     * openSSL command to encode the file part:
     * `openssl sha1 -binary <FILE_PART_NAME> | base64`.
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
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UploadFilePartHeaders {
    /**
     * The [RFC3230][1] message digest of the chunk uploaded.
     *
     * Only SHA1 is supported. The SHA1 digest must be base64
     * encoded. The format of this header is as
     * `sha=BASE64_ENCODED_DIGEST`.
     *
     * To get the value for the `SHA` digest, use the
     * openSSL command to encode the file part:
     * `openssl sha1 -binary <FILE_PART_NAME> | base64`.
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
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFilePartHeaders, 'extraHeaders'> & Partial<Pick<UploadFilePartHeaders, 'extraHeaders'>>);
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
     * `openssl sha1 -binary <FILE_PART_NAME> | base64`.
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
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileUploadSessionByUrlHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileUploadSessionByUrlHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileUploadSessionByUrlHeaders, 'extraHeaders'>>);
}
export interface DeleteFileUploadSessionByUrlHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileUploadSessionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileUploadSessionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFileUploadSessionPartsByUrlQueryParams {
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
export declare class GetFileUploadSessionPartsByUrlHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileUploadSessionPartsByUrlHeaders, 'extraHeaders'> & Partial<Pick<GetFileUploadSessionPartsByUrlHeaders, 'extraHeaders'>>);
}
export interface GetFileUploadSessionPartsByUrlHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
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
export declare class GetFileUploadSessionPartsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileUploadSessionPartsHeaders, 'extraHeaders'> & Partial<Pick<GetFileUploadSessionPartsHeaders, 'extraHeaders'>>);
}
export interface GetFileUploadSessionPartsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFileUploadSessionCommitByUrlRequestBody {
    /**
     * The list details for the uploaded parts. */
    readonly parts: readonly UploadPart[];
    readonly rawData?: SerializedData;
}
export declare class CreateFileUploadSessionCommitByUrlHeaders {
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
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionCommitByUrlHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionCommitByUrlHeaders, 'extraHeaders'>>);
}
export interface CreateFileUploadSessionCommitByUrlHeadersInput {
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
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFileUploadSessionCommitRequestBody {
    /**
     * The list details for the uploaded parts. */
    readonly parts: readonly UploadPart[];
    readonly rawData?: SerializedData;
}
export declare class CreateFileUploadSessionCommitHeaders {
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
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileUploadSessionCommitHeaders, 'extraHeaders'> & Partial<Pick<CreateFileUploadSessionCommitHeaders, 'extraHeaders'>>);
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
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ChunkedUploadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ChunkedUploadsManager, 'networkSession' | 'createFileUploadSession' | 'createFileUploadSessionForExistingFile' | 'getFileUploadSessionByUrl' | 'getFileUploadSessionById' | 'uploadFilePartByUrl' | 'uploadFilePart' | 'deleteFileUploadSessionByUrl' | 'deleteFileUploadSessionById' | 'getFileUploadSessionPartsByUrl' | 'getFileUploadSessionParts' | 'createFileUploadSessionCommitByUrl' | 'createFileUploadSessionCommit' | 'reducer' | 'uploadBigFile'> & Partial<Pick<ChunkedUploadsManager, 'networkSession'>>);
    /**
     * Creates an upload session for a new file.
     * @param {CreateFileUploadSessionRequestBody} requestBody Request body of createFileUploadSession method
     * @param {CreateFileUploadSessionOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
    createFileUploadSession(requestBody: CreateFileUploadSessionRequestBody, optionalsInput?: CreateFileUploadSessionOptionalsInput): Promise<UploadSession>;
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
    createFileUploadSessionForExistingFile(fileId: string, requestBody: CreateFileUploadSessionForExistingFileRequestBody, optionalsInput?: CreateFileUploadSessionForExistingFileOptionalsInput): Promise<UploadSession>;
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over GetFileUploadSessionById method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Return information about an upload session.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions) endpoint.
     * @param {string} url URL of getFileUploadSessionById method
     * @param {GetFileUploadSessionByUrlOptionalsInput} optionalsInput
     * @returns {Promise<UploadSession>}
     */
    getFileUploadSessionByUrl(url: string, optionalsInput?: GetFileUploadSessionByUrlOptionalsInput): Promise<UploadSession>;
    /**
       * Return information about an upload session.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions) endpoint.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {GetFileUploadSessionByIdOptionalsInput} optionalsInput
       * @returns {Promise<UploadSession>}
       */
    getFileUploadSessionById(uploadSessionId: string, optionalsInput?: GetFileUploadSessionByIdOptionalsInput): Promise<UploadSession>;
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over UploadFilePart method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Uploads a chunk of a file for an upload session.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of uploadFilePart method
     * @param {ByteStream} requestBody Request body of uploadFilePart method
     * @param {UploadFilePartByUrlHeadersInput} headersInput Headers of uploadFilePart method
     * @param {UploadFilePartByUrlOptionalsInput} optionalsInput
     * @returns {Promise<UploadedPart>}
     */
    uploadFilePartByUrl(url: string, requestBody: ByteStream, headersInput: UploadFilePartByUrlHeadersInput, optionalsInput?: UploadFilePartByUrlOptionalsInput): Promise<UploadedPart>;
    /**
       * Uploads a chunk of a file for an upload session.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {ByteStream} requestBody Request body of uploadFilePart method
       * @param {UploadFilePartHeadersInput} headersInput Headers of uploadFilePart method
       * @param {UploadFilePartOptionalsInput} optionalsInput
       * @returns {Promise<UploadedPart>}
       */
    uploadFilePart(uploadSessionId: string, requestBody: ByteStream, headersInput: UploadFilePartHeadersInput, optionalsInput?: UploadFilePartOptionalsInput): Promise<UploadedPart>;
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over DeleteFileUploadSessionById method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Abort an upload session and discard all data uploaded.
     *
     * This cannot be reversed.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of deleteFileUploadSessionById method
     * @param {DeleteFileUploadSessionByUrlOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    deleteFileUploadSessionByUrl(url: string, optionalsInput?: DeleteFileUploadSessionByUrlOptionalsInput): Promise<undefined>;
    /**
       * Abort an upload session and discard all data uploaded.
       *
       * This cannot be reversed.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {DeleteFileUploadSessionByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileUploadSessionById(uploadSessionId: string, optionalsInput?: DeleteFileUploadSessionByIdOptionalsInput): Promise<undefined>;
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over GetFileUploadSessionParts method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Return a list of the chunks uploaded to the upload session so far.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of getFileUploadSessionParts method
     * @param {GetFileUploadSessionPartsByUrlOptionalsInput} optionalsInput
     * @returns {Promise<UploadParts>}
     */
    getFileUploadSessionPartsByUrl(url: string, optionalsInput?: GetFileUploadSessionPartsByUrlOptionalsInput): Promise<UploadParts>;
    /**
       * Return a list of the chunks uploaded to the upload session so far.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {GetFileUploadSessionPartsOptionalsInput} optionalsInput
       * @returns {Promise<UploadParts>}
       */
    getFileUploadSessionParts(uploadSessionId: string, optionalsInput?: GetFileUploadSessionPartsOptionalsInput): Promise<UploadParts>;
    /**
     * Using this method with urls provided in response when creating a new upload session is preferred to use over CreateFileUploadSessionCommit method.
     * This allows to always upload your content to the closest Box data center and can significantly improve upload speed.
     *  Close an upload session and create a file from the uploaded chunks.
     *
     * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
     * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
     * @param {string} url URL of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitByUrlRequestBody} requestBody Request body of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitByUrlHeadersInput} headersInput Headers of createFileUploadSessionCommit method
     * @param {CreateFileUploadSessionCommitByUrlOptionalsInput} optionalsInput
     * @returns {Promise<undefined | Files>}
     */
    createFileUploadSessionCommitByUrl(url: string, requestBody: CreateFileUploadSessionCommitByUrlRequestBody, headersInput: CreateFileUploadSessionCommitByUrlHeadersInput, optionalsInput?: CreateFileUploadSessionCommitByUrlOptionalsInput): Promise<undefined | Files>;
    /**
       * Close an upload session and create a file from the uploaded chunks.
       *
       * The actual endpoint URL is returned by the [`Create upload session`](e://post-files-upload-sessions)
       * and [`Get upload session`](e://get-files-upload-sessions-id) endpoints.
       * @param {string} uploadSessionId The ID of the upload session.
      Example: "D5E3F7A"
       * @param {CreateFileUploadSessionCommitRequestBody} requestBody Request body of createFileUploadSessionCommit method
       * @param {CreateFileUploadSessionCommitHeadersInput} headersInput Headers of createFileUploadSessionCommit method
       * @param {CreateFileUploadSessionCommitOptionalsInput} optionalsInput
       * @returns {Promise<undefined | Files>}
       */
    createFileUploadSessionCommit(uploadSessionId: string, requestBody: CreateFileUploadSessionCommitRequestBody, headersInput: CreateFileUploadSessionCommitHeadersInput, optionalsInput?: CreateFileUploadSessionCommitOptionalsInput): Promise<undefined | Files>;
    /**
     * @param {PartAccumulator} acc
     * @param {ByteStream} chunk
     * @returns {Promise<PartAccumulator>}
     */
    private reducer;
    /**
     * Starts the process of chunk uploading a big file. Should return a File object representing uploaded file.
     * @param {ByteStream} file The stream of the file to upload.
     * @param {string} fileName The name of the file, which will be used for storage in Box.
     * @param {number} fileSize The total size of the file for the chunked upload in bytes.
     * @param {string} parentFolderId The ID of the folder where the file should be uploaded.
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<FileFull>}
     */
    uploadBigFile(file: ByteStream, fileName: string, fileSize: number, parentFolderId: string, cancellationToken?: CancellationToken): Promise<FileFull>;
}
export interface ChunkedUploadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateFileUploadSessionRequestBody(val: CreateFileUploadSessionRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionRequestBody(val: SerializedData): CreateFileUploadSessionRequestBody;
export declare function serializeCreateFileUploadSessionForExistingFileRequestBody(val: CreateFileUploadSessionForExistingFileRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionForExistingFileRequestBody(val: SerializedData): CreateFileUploadSessionForExistingFileRequestBody;
export declare function serializeCreateFileUploadSessionCommitByUrlRequestBody(val: CreateFileUploadSessionCommitByUrlRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionCommitByUrlRequestBody(val: SerializedData): CreateFileUploadSessionCommitByUrlRequestBody;
export declare function serializeCreateFileUploadSessionCommitRequestBody(val: CreateFileUploadSessionCommitRequestBody): SerializedData;
export declare function deserializeCreateFileUploadSessionCommitRequestBody(val: SerializedData): CreateFileUploadSessionCommitRequestBody;
//# sourceMappingURL=chunkedUploads.generated.d.ts.map