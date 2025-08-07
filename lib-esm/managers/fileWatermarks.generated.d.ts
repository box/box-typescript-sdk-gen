import { Watermark } from '../schemas/watermark.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileWatermarkOptionals {
    readonly headers: GetFileWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileWatermarkOptionalsInput {
    readonly headers?: GetFileWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileWatermarkOptionals {
    readonly headers: UpdateFileWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileWatermarkOptionalsInput {
    readonly headers?: UpdateFileWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileWatermarkOptionals {
    readonly headers: DeleteFileWatermarkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileWatermarkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileWatermarkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileWatermarkOptionalsInput {
    readonly headers?: DeleteFileWatermarkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileWatermarkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileWatermarkHeaders, 'extraHeaders'> & Partial<Pick<GetFileWatermarkHeaders, 'extraHeaders'>>);
}
export interface GetFileWatermarkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFileWatermarkRequestBodyWatermarkImprintField = 'default' | string;
export declare class UpdateFileWatermarkRequestBodyWatermarkField {
    /**
     * The type of watermark to apply.
     *
     * Currently only supports one option. */
    readonly imprint: UpdateFileWatermarkRequestBodyWatermarkImprintField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'> & Partial<Pick<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'>>);
}
export interface UpdateFileWatermarkRequestBodyWatermarkFieldInput {
    /**
     * The type of watermark to apply.
     *
     * Currently only supports one option. */
    readonly imprint?: UpdateFileWatermarkRequestBodyWatermarkImprintField;
    readonly rawData?: SerializedData;
}
export interface UpdateFileWatermarkRequestBody {
    /**
     * The watermark to imprint on the file. */
    readonly watermark: UpdateFileWatermarkRequestBodyWatermarkField;
    readonly rawData?: SerializedData;
}
export declare class UpdateFileWatermarkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileWatermarkHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileWatermarkHeaders, 'extraHeaders'>>);
}
export interface UpdateFileWatermarkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFileWatermarkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileWatermarkHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileWatermarkHeaders, 'extraHeaders'>>);
}
export interface DeleteFileWatermarkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileWatermarksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileWatermarksManager, 'networkSession' | 'getFileWatermark' | 'updateFileWatermark' | 'deleteFileWatermark'> & Partial<Pick<FileWatermarksManager, 'networkSession'>>);
    /**
       * Retrieve the watermark for a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    getFileWatermark(fileId: string, optionalsInput?: GetFileWatermarkOptionalsInput): Promise<Watermark>;
    /**
       * Applies or update a watermark on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileWatermarkRequestBody} requestBody Request body of updateFileWatermark method
       * @param {UpdateFileWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    updateFileWatermark(fileId: string, requestBody: UpdateFileWatermarkRequestBody, optionalsInput?: UpdateFileWatermarkOptionalsInput): Promise<Watermark>;
    /**
       * Removes the watermark from a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileWatermark(fileId: string, optionalsInput?: DeleteFileWatermarkOptionalsInput): Promise<undefined>;
}
export interface FileWatermarksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val: UpdateFileWatermarkRequestBodyWatermarkImprintField): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val: SerializedData): UpdateFileWatermarkRequestBodyWatermarkImprintField;
export declare function serializeUpdateFileWatermarkRequestBodyWatermarkField(val: UpdateFileWatermarkRequestBodyWatermarkField): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBodyWatermarkField(val: SerializedData): UpdateFileWatermarkRequestBodyWatermarkField;
export declare function serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val: UpdateFileWatermarkRequestBodyWatermarkFieldInput): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(val: SerializedData): UpdateFileWatermarkRequestBodyWatermarkFieldInput;
export declare function serializeUpdateFileWatermarkRequestBody(val: UpdateFileWatermarkRequestBody): SerializedData;
export declare function deserializeUpdateFileWatermarkRequestBody(val: SerializedData): UpdateFileWatermarkRequestBody;
