import { Metadatas } from '../schemas/metadatas.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { MetadataInstanceValue } from '../schemas/metadataInstanceValue.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileMetadataOptionals {
    readonly headers: GetFileMetadataHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileMetadataOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileMetadataOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileMetadataOptionalsInput {
    readonly headers?: GetFileMetadataHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileMetadataByIdOptionals {
    readonly headers: GetFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileMetadataByIdOptionalsInput {
    readonly headers?: GetFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFileMetadataByIdOptionals {
    readonly headers: CreateFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFileMetadataByIdOptionalsInput {
    readonly headers?: CreateFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileMetadataByIdOptionals {
    readonly headers: UpdateFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileMetadataByIdOptionalsInput {
    readonly headers?: UpdateFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileMetadataByIdOptionals {
    readonly headers: DeleteFileMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileMetadataByIdOptionalsInput {
    readonly headers?: DeleteFileMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileMetadataHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileMetadataHeaders, 'extraHeaders'> & Partial<Pick<GetFileMetadataHeaders, 'extraHeaders'>>);
}
export interface GetFileMetadataHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFileMetadataByIdScope = 'global' | 'enterprise' | string;
export declare class GetFileMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateFileMetadataByIdScope = 'global' | 'enterprise' | string;
export type CreateFileMetadataByIdRequestBody = {
    readonly [key: string]: any;
};
export declare class CreateFileMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<CreateFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface CreateFileMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFileMetadataByIdScope = 'global' | 'enterprise' | string;
export type UpdateFileMetadataByIdRequestBodyOpField = 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | string;
export interface UpdateFileMetadataByIdRequestBody {
    /**
     * The type of change to perform on the template. Some
     * of these are hazardous as they will change existing templates. */
    readonly op?: UpdateFileMetadataByIdRequestBodyOpField;
    /**
     * The location in the metadata JSON object
     * to apply the changes to, in the format of a
     * [JSON-Pointer](https://tools.ietf.org/html/rfc6901).
     *
     * The path must always be prefixed with a `/` to represent the root
     * of the template. The characters `~` and `/` are reserved
     * characters and must be escaped in the key. */
    readonly path?: string;
    readonly value?: MetadataInstanceValue;
    /**
     * The location in the metadata JSON object to move or copy a value
     * from. Required for `move` or `copy` operations and must be in the
     * format of a [JSON-Pointer](https://tools.ietf.org/html/rfc6901). */
    readonly from?: string;
    readonly rawData?: SerializedData;
}
export declare class UpdateFileMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type DeleteFileMetadataByIdScope = 'global' | 'enterprise' | string;
export declare class DeleteFileMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFileMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileMetadataManager, 'networkSession' | 'getFileMetadata' | 'getFileMetadataById' | 'createFileMetadataById' | 'updateFileMetadataById' | 'deleteFileMetadataById'> & Partial<Pick<FileMetadataManager, 'networkSession'>>);
    /**
       * Retrieves all metadata for a given file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileMetadataOptionalsInput} optionalsInput
       * @returns {Promise<Metadatas>}
       */
    getFileMetadata(fileId: string, optionalsInput?: GetFileMetadataOptionalsInput): Promise<Metadatas>;
    /**
       * Retrieves the instance of a metadata template that has been applied to a
       * file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    getFileMetadataById(fileId: string, scope: GetFileMetadataByIdScope, templateKey: string, optionalsInput?: GetFileMetadataByIdOptionalsInput): Promise<MetadataFull>;
    /**
       * Applies an instance of a metadata template to a file.
       *
       * In most cases only values that are present in the metadata template
       * will be accepted, except for the `global.properties` template which accepts
       * any key-value pair.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CreateFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {CreateFileMetadataByIdRequestBody} requestBody Request body of createFileMetadataById method
       * @param {CreateFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    createFileMetadataById(fileId: string, scope: CreateFileMetadataByIdScope, templateKey: string, requestBody: CreateFileMetadataByIdRequestBody, optionalsInput?: CreateFileMetadataByIdOptionalsInput): Promise<MetadataFull>;
    /**
       * Updates a piece of metadata on a file.
       *
       * The metadata instance can only be updated if the template has already been
       * applied to the file before. When editing metadata, only values that match
       * the metadata template schema will be accepted.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata instance will not be changed.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateFileMetadataByIdRequestBody[]} requestBody Request body of updateFileMetadataById method
       * @param {UpdateFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    updateFileMetadataById(fileId: string, scope: UpdateFileMetadataByIdScope, templateKey: string, requestBody: readonly UpdateFileMetadataByIdRequestBody[], optionalsInput?: UpdateFileMetadataByIdOptionalsInput): Promise<MetadataFull>;
    /**
       * Deletes a piece of file metadata.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteFileMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileMetadataById(fileId: string, scope: DeleteFileMetadataByIdScope, templateKey: string, optionalsInput?: DeleteFileMetadataByIdOptionalsInput): Promise<undefined>;
}
export interface FileMetadataManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFileMetadataByIdScope(val: GetFileMetadataByIdScope): SerializedData;
export declare function deserializeGetFileMetadataByIdScope(val: SerializedData): GetFileMetadataByIdScope;
export declare function serializeCreateFileMetadataByIdScope(val: CreateFileMetadataByIdScope): SerializedData;
export declare function deserializeCreateFileMetadataByIdScope(val: SerializedData): CreateFileMetadataByIdScope;
export declare function serializeCreateFileMetadataByIdRequestBody(val: CreateFileMetadataByIdRequestBody): SerializedData;
export declare function deserializeCreateFileMetadataByIdRequestBody(val: SerializedData): CreateFileMetadataByIdRequestBody;
export declare function serializeUpdateFileMetadataByIdScope(val: UpdateFileMetadataByIdScope): SerializedData;
export declare function deserializeUpdateFileMetadataByIdScope(val: SerializedData): UpdateFileMetadataByIdScope;
export declare function serializeUpdateFileMetadataByIdRequestBodyOpField(val: UpdateFileMetadataByIdRequestBodyOpField): SerializedData;
export declare function deserializeUpdateFileMetadataByIdRequestBodyOpField(val: SerializedData): UpdateFileMetadataByIdRequestBodyOpField;
export declare function serializeUpdateFileMetadataByIdRequestBody(val: UpdateFileMetadataByIdRequestBody): SerializedData;
export declare function deserializeUpdateFileMetadataByIdRequestBody(val: SerializedData): UpdateFileMetadataByIdRequestBody;
export declare function serializeDeleteFileMetadataByIdScope(val: DeleteFileMetadataByIdScope): SerializedData;
export declare function deserializeDeleteFileMetadataByIdScope(val: SerializedData): DeleteFileMetadataByIdScope;
