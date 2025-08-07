import { Metadatas } from '../schemas/metadatas.generated.js';
import { MetadataFull } from '../schemas/metadataFull.generated.js';
import { MetadataInstanceValue } from '../schemas/metadataInstanceValue.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFolderMetadataOptionals {
    readonly headers: GetFolderMetadataHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderMetadataOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderMetadataOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderMetadataOptionalsInput {
    readonly headers?: GetFolderMetadataHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderMetadataByIdOptionals {
    readonly headers: GetFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderMetadataByIdOptionalsInput {
    readonly headers?: GetFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFolderMetadataByIdOptionals {
    readonly headers: CreateFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFolderMetadataByIdOptionalsInput {
    readonly headers?: CreateFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFolderMetadataByIdOptionals {
    readonly headers: UpdateFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateFolderMetadataByIdOptionalsInput {
    readonly headers?: UpdateFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderMetadataByIdOptionals {
    readonly headers: DeleteFolderMetadataByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderMetadataByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderMetadataByIdOptionalsInput {
    readonly headers?: DeleteFolderMetadataByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderMetadataHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderMetadataHeaders, 'extraHeaders'> & Partial<Pick<GetFolderMetadataHeaders, 'extraHeaders'>>);
}
export interface GetFolderMetadataHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFolderMetadataByIdScope = 'global' | 'enterprise' | string;
export declare class GetFolderMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface GetFolderMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateFolderMetadataByIdScope = 'global' | 'enterprise' | string;
export type CreateFolderMetadataByIdRequestBody = {
    readonly [key: string]: any;
};
export declare class CreateFolderMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<CreateFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface CreateFolderMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFolderMetadataByIdScope = 'global' | 'enterprise' | string;
export type UpdateFolderMetadataByIdRequestBodyOpField = 'add' | 'replace' | 'remove' | 'test' | 'move' | 'copy' | string;
export interface UpdateFolderMetadataByIdRequestBody {
    /**
     * The type of change to perform on the template. Some
     * of these are hazardous as they will change existing templates. */
    readonly op?: UpdateFolderMetadataByIdRequestBodyOpField;
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
export declare class UpdateFolderMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFolderMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type DeleteFolderMetadataByIdScope = 'global' | 'enterprise' | string;
export declare class DeleteFolderMetadataByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderMetadataByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderMetadataByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderMetadataByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderMetadataManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderMetadataManager, 'networkSession' | 'getFolderMetadata' | 'getFolderMetadataById' | 'createFolderMetadataById' | 'updateFolderMetadataById' | 'deleteFolderMetadataById'> & Partial<Pick<FolderMetadataManager, 'networkSession'>>);
    /**
       * Retrieves all metadata for a given folder. This can not be used on the root
       * folder with ID `0`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderMetadataOptionalsInput} optionalsInput
       * @returns {Promise<Metadatas>}
       */
    getFolderMetadata(folderId: string, optionalsInput?: GetFolderMetadataOptionalsInput): Promise<Metadatas>;
    /**
       * Retrieves the instance of a metadata template that has been applied to a
       * folder. This can not be used on the root folder with ID `0`.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {GetFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    getFolderMetadataById(folderId: string, scope: GetFolderMetadataByIdScope, templateKey: string, optionalsInput?: GetFolderMetadataByIdOptionalsInput): Promise<MetadataFull>;
    /**
       * Applies an instance of a metadata template to a folder.
       *
       * In most cases only values that are present in the metadata template
       * will be accepted, except for the `global.properties` template which accepts
       * any key-value pair.
       *
       * To display the metadata template in the Box web app the enterprise needs to be
       * configured to enable **Cascading Folder Level Metadata** for the user in the
       * admin console.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {CreateFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {CreateFolderMetadataByIdRequestBody} requestBody Request body of createFolderMetadataById method
       * @param {CreateFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    createFolderMetadataById(folderId: string, scope: CreateFolderMetadataByIdScope, templateKey: string, requestBody: CreateFolderMetadataByIdRequestBody, optionalsInput?: CreateFolderMetadataByIdOptionalsInput): Promise<MetadataFull>;
    /**
       * Updates a piece of metadata on a folder.
       *
       * The metadata instance can only be updated if the template has already been
       * applied to the folder before. When editing metadata, only values that match
       * the metadata template schema will be accepted.
       *
       * The update is applied atomically. If any errors occur during the
       * application of the operations, the metadata instance will not be changed.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {readonly UpdateFolderMetadataByIdRequestBody[]} requestBody Request body of updateFolderMetadataById method
       * @param {UpdateFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataFull>}
       */
    updateFolderMetadataById(folderId: string, scope: UpdateFolderMetadataByIdScope, templateKey: string, requestBody: readonly UpdateFolderMetadataByIdRequestBody[], optionalsInput?: UpdateFolderMetadataByIdOptionalsInput): Promise<MetadataFull>;
    /**
       * Deletes a piece of folder metadata.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderMetadataByIdScope} scope The scope of the metadata template.
      Example: "global"
       * @param {string} templateKey The name of the metadata template.
      Example: "properties"
       * @param {DeleteFolderMetadataByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFolderMetadataById(folderId: string, scope: DeleteFolderMetadataByIdScope, templateKey: string, optionalsInput?: DeleteFolderMetadataByIdOptionalsInput): Promise<undefined>;
}
export interface FolderMetadataManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFolderMetadataByIdScope(val: GetFolderMetadataByIdScope): SerializedData;
export declare function deserializeGetFolderMetadataByIdScope(val: SerializedData): GetFolderMetadataByIdScope;
export declare function serializeCreateFolderMetadataByIdScope(val: CreateFolderMetadataByIdScope): SerializedData;
export declare function deserializeCreateFolderMetadataByIdScope(val: SerializedData): CreateFolderMetadataByIdScope;
export declare function serializeCreateFolderMetadataByIdRequestBody(val: CreateFolderMetadataByIdRequestBody): SerializedData;
export declare function deserializeCreateFolderMetadataByIdRequestBody(val: SerializedData): CreateFolderMetadataByIdRequestBody;
export declare function serializeUpdateFolderMetadataByIdScope(val: UpdateFolderMetadataByIdScope): SerializedData;
export declare function deserializeUpdateFolderMetadataByIdScope(val: SerializedData): UpdateFolderMetadataByIdScope;
export declare function serializeUpdateFolderMetadataByIdRequestBodyOpField(val: UpdateFolderMetadataByIdRequestBodyOpField): SerializedData;
export declare function deserializeUpdateFolderMetadataByIdRequestBodyOpField(val: SerializedData): UpdateFolderMetadataByIdRequestBodyOpField;
export declare function serializeUpdateFolderMetadataByIdRequestBody(val: UpdateFolderMetadataByIdRequestBody): SerializedData;
export declare function deserializeUpdateFolderMetadataByIdRequestBody(val: SerializedData): UpdateFolderMetadataByIdRequestBody;
export declare function serializeDeleteFolderMetadataByIdScope(val: DeleteFolderMetadataByIdScope): SerializedData;
export declare function deserializeDeleteFolderMetadataByIdScope(val: SerializedData): DeleteFolderMetadataByIdScope;
//# sourceMappingURL=folderMetadata.generated.d.ts.map