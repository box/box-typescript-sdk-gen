import { Files } from '../schemas/files.generated.js';
import { UploadUrl } from '../schemas/uploadUrl.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class UploadFileVersionOptionals {
    readonly queryParams: UploadFileVersionQueryParams;
    readonly headers: UploadFileVersionHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFileVersionOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UploadFileVersionOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UploadFileVersionOptionalsInput {
    readonly queryParams?: UploadFileVersionQueryParams;
    readonly headers?: UploadFileVersionHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UploadFileOptionals {
    readonly queryParams: UploadFileQueryParams;
    readonly headers: UploadFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UploadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UploadFileOptionalsInput {
    readonly queryParams?: UploadFileQueryParams;
    readonly headers?: UploadFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UploadWithPreflightCheckOptionals {
    readonly queryParams: UploadWithPreflightCheckQueryParams;
    readonly headers: UploadWithPreflightCheckHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UploadWithPreflightCheckOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UploadWithPreflightCheckOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UploadWithPreflightCheckOptionalsInput {
    readonly queryParams?: UploadWithPreflightCheckQueryParams;
    readonly headers?: UploadWithPreflightCheckHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface UploadFileVersionRequestBodyAttributesField {
    /**
     * An optional new name for the file. If specified, the file
     * will be renamed when the new version is uploaded. */
    readonly name: string;
    /**
     * Defines the time the file was last modified at.
     *
     * If not set, the upload time will be used. */
    readonly contentModifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export interface UploadFileVersionRequestBody {
    /**
     * The additional attributes of the file being uploaded. Mainly the
     * name and the parent folder. These attributes are part of the multi
     * part request body and are in JSON format.
     *
     * <Message warning>
     *
     *   The `attributes` part of the body must come **before** the
     *   `file` part. Requests that do not follow this format when
     *   uploading the file will receive a HTTP `400` error with a
     *   `metadata_after_file_contents` error code.
     *
     * </Message> */
    readonly attributes: UploadFileVersionRequestBodyAttributesField;
    /**
     * The content of the file to upload to Box.
     *
     * <Message warning>
     *
     *   The `attributes` part of the body must come **before** the
     *   `file` part. Requests that do not follow this format when
     *   uploading the file will receive a HTTP `400` error with a
     *   `metadata_after_file_contents` error code.
     *
     * </Message> */
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadFileVersionQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class UploadFileVersionHeaders {
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
     * An optional header containing the SHA1 hash of the file to
     * ensure that the file was not corrupted in transit. */
    readonly contentMd5?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFileVersionHeaders, 'extraHeaders'> & Partial<Pick<UploadFileVersionHeaders, 'extraHeaders'>>);
}
export interface UploadFileVersionHeadersInput {
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
     * An optional header containing the SHA1 hash of the file to
     * ensure that the file was not corrupted in transit. */
    readonly contentMd5?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface PreflightFileUploadCheckRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface PreflightFileUploadCheckRequestBody {
    /**
     * The name for the file. */
    readonly name?: string;
    /**
     * The size of the file in bytes. */
    readonly size?: number;
    readonly parent?: PreflightFileUploadCheckRequestBodyParentField;
    readonly rawData?: SerializedData;
}
export declare class PreflightFileUploadCheckHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<PreflightFileUploadCheckHeaders, 'extraHeaders'> & Partial<Pick<PreflightFileUploadCheckHeaders, 'extraHeaders'>>);
}
export interface PreflightFileUploadCheckHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UploadFileRequestBodyAttributesParentField {
    /**
     * The id of the parent folder. Use
     * `0` for the user's root folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface UploadFileRequestBodyAttributesField {
    /**
     * The name of the file.
     *
     * File names must be unique within their parent folder. The name check is case-insensitive, so a file
     * named `New File` cannot be created in a parent folder that already contains a folder named `new file`. */
    readonly name: string;
    /**
     * The parent folder to upload the file to. */
    readonly parent: UploadFileRequestBodyAttributesParentField;
    /**
     * Defines the time the file was originally created at.
     *
     * If not set, the upload time will be used. */
    readonly contentCreatedAt?: DateTime;
    /**
     * Defines the time the file was last modified at.
     *
     * If not set, the upload time will be used. */
    readonly contentModifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export interface UploadFileRequestBody {
    /**
     * The additional attributes of the file being uploaded. Mainly the
     * name and the parent folder. These attributes are part of the multi
     * part request body and are in JSON format.
     *
     * <Message warning>
     *
     *   The `attributes` part of the body must come **before** the
     *   `file` part. Requests that do not follow this format when
     *   uploading the file will receive a HTTP `400` error with a
     *   `metadata_after_file_contents` error code.
     *
     * </Message> */
    readonly attributes: UploadFileRequestBodyAttributesField;
    /**
     * The content of the file to upload to Box.
     *
     * <Message warning>
     *
     *   The `attributes` part of the body must come **before** the
     *   `file` part. Requests that do not follow this format when
     *   uploading the file will receive a HTTP `400` error with a
     *   `metadata_after_file_contents` error code.
     *
     * </Message> */
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadFileQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class UploadFileHeaders {
    /**
     * An optional header containing the SHA1 hash of the file to
     * ensure that the file was not corrupted in transit. */
    readonly contentMd5?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadFileHeaders, 'extraHeaders'> & Partial<Pick<UploadFileHeaders, 'extraHeaders'>>);
}
export interface UploadFileHeadersInput {
    /**
     * An optional header containing the SHA1 hash of the file to
     * ensure that the file was not corrupted in transit. */
    readonly contentMd5?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UploadWithPreflightCheckRequestBodyAttributesParentField {
    /**
     * The id of the parent folder. Use
     * `0` for the user's root folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface UploadWithPreflightCheckRequestBodyAttributesField {
    /**
     * The name of the file.
     *
     * File names must be unique within their parent folder. The name check is case-insensitive, so a file
     * named `New File` cannot be created in a parent folder that already contains a folder named `new file`. */
    readonly name: string;
    /**
     * The parent folder to upload the file to. */
    readonly parent: UploadWithPreflightCheckRequestBodyAttributesParentField;
    /**
     * Defines the time the file was originally created at.
     *
     * If not set, the upload time will be used. */
    readonly contentCreatedAt?: DateTime;
    /**
     * Defines the time the file was last modified at.
     *
     * If not set, the upload time will be used. */
    readonly contentModifiedAt?: DateTime;
    /**
     * The size of the file in bytes */
    readonly size: number;
    readonly rawData?: SerializedData;
}
export interface UploadWithPreflightCheckRequestBody {
    readonly attributes: UploadWithPreflightCheckRequestBodyAttributesField;
    /**
     * The content of the file to upload to Box.
     *
     * <Message warning>
     *
     *   The `attributes` part of the body must come **before** the
     *   `file` part. Requests that do not follow this format when
     *   uploading the file will receive a HTTP `400` error with a
     *   `metadata_after_file_contents` error code.
     *
     * </Message> */
    readonly file: ByteStream;
    readonly fileFileName?: string;
    readonly fileContentType?: string;
}
export interface UploadWithPreflightCheckQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: readonly string[];
}
export declare class UploadWithPreflightCheckHeaders {
    /**
     * An optional header containing the SHA1 hash of the file to
     * ensure that the file was not corrupted in transit. */
    readonly contentMd5?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UploadWithPreflightCheckHeaders, 'extraHeaders'> & Partial<Pick<UploadWithPreflightCheckHeaders, 'extraHeaders'>>);
}
export interface UploadWithPreflightCheckHeadersInput {
    /**
     * An optional header containing the SHA1 hash of the file to
     * ensure that the file was not corrupted in transit. */
    readonly contentMd5?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UploadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<UploadsManager, 'networkSession' | 'uploadFileVersion' | 'preflightFileUploadCheck' | 'uploadFile' | 'uploadWithPreflightCheck'> & Partial<Pick<UploadsManager, 'networkSession'>>);
    /**
       * Update a file's content. For file sizes over 50MB we recommend
       * using the Chunk Upload APIs.
       *
       * The `attributes` part of the body must come **before** the
       * `file` part. Requests that do not follow this format when
       * uploading the file will receive a HTTP `400` error with a
       * `metadata_after_file_contents` error code.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UploadFileVersionRequestBody} requestBody Request body of uploadFileVersion method
       * @param {UploadFileVersionOptionalsInput} optionalsInput
       * @returns {Promise<Files>}
       */
    uploadFileVersion(fileId: string, requestBody: UploadFileVersionRequestBody, optionalsInput?: UploadFileVersionOptionalsInput): Promise<Files>;
    /**
     * Performs a check to verify that a file will be accepted by Box
     * before you upload the entire file.
     * @param {PreflightFileUploadCheckRequestBody} requestBody Request body of preflightFileUploadCheck method
     * @param {PreflightFileUploadCheckHeadersInput} headersInput Headers of preflightFileUploadCheck method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<UploadUrl>}
     */
    preflightFileUploadCheck(requestBody?: PreflightFileUploadCheckRequestBody, headersInput?: PreflightFileUploadCheckHeadersInput, cancellationToken?: CancellationToken): Promise<UploadUrl>;
    /**
     * Uploads a small file to Box. For file sizes over 50MB we recommend
     * using the Chunk Upload APIs.
     *
     * The `attributes` part of the body must come **before** the
     * `file` part. Requests that do not follow this format when
     * uploading the file will receive a HTTP `400` error with a
     * `metadata_after_file_contents` error code.
     * @param {UploadFileRequestBody} requestBody Request body of uploadFile method
     * @param {UploadFileOptionalsInput} optionalsInput
     * @returns {Promise<Files>}
     */
    uploadFile(requestBody: UploadFileRequestBody, optionalsInput?: UploadFileOptionalsInput): Promise<Files>;
    /**
     *  Upload a file with a preflight check
     * @param {UploadWithPreflightCheckRequestBody} requestBody
     * @param {UploadWithPreflightCheckOptionalsInput} optionalsInput
     * @returns {Promise<Files>}
     */
    uploadWithPreflightCheck(requestBody: UploadWithPreflightCheckRequestBody, optionalsInput?: UploadWithPreflightCheckOptionalsInput): Promise<Files>;
}
export interface UploadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUploadFileVersionRequestBodyAttributesField(val: UploadFileVersionRequestBodyAttributesField): SerializedData;
export declare function deserializeUploadFileVersionRequestBodyAttributesField(val: SerializedData): UploadFileVersionRequestBodyAttributesField;
export declare function serializePreflightFileUploadCheckRequestBodyParentField(val: PreflightFileUploadCheckRequestBodyParentField): SerializedData;
export declare function deserializePreflightFileUploadCheckRequestBodyParentField(val: SerializedData): PreflightFileUploadCheckRequestBodyParentField;
export declare function serializePreflightFileUploadCheckRequestBody(val: PreflightFileUploadCheckRequestBody): SerializedData;
export declare function deserializePreflightFileUploadCheckRequestBody(val: SerializedData): PreflightFileUploadCheckRequestBody;
export declare function serializeUploadFileRequestBodyAttributesParentField(val: UploadFileRequestBodyAttributesParentField): SerializedData;
export declare function deserializeUploadFileRequestBodyAttributesParentField(val: SerializedData): UploadFileRequestBodyAttributesParentField;
export declare function serializeUploadFileRequestBodyAttributesField(val: UploadFileRequestBodyAttributesField): SerializedData;
export declare function deserializeUploadFileRequestBodyAttributesField(val: SerializedData): UploadFileRequestBodyAttributesField;
export declare function serializeUploadWithPreflightCheckRequestBodyAttributesParentField(val: UploadWithPreflightCheckRequestBodyAttributesParentField): SerializedData;
export declare function deserializeUploadWithPreflightCheckRequestBodyAttributesParentField(val: SerializedData): UploadWithPreflightCheckRequestBodyAttributesParentField;
export declare function serializeUploadWithPreflightCheckRequestBodyAttributesField(val: UploadWithPreflightCheckRequestBodyAttributesField): SerializedData;
export declare function deserializeUploadWithPreflightCheckRequestBodyAttributesField(val: SerializedData): UploadWithPreflightCheckRequestBodyAttributesField;
