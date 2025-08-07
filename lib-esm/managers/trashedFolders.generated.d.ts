import { TrashFolderRestored } from '../schemas/trashFolderRestored.generated.js';
import { TrashFolder } from '../schemas/trashFolder.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class RestoreFolderFromTrashOptionals {
    readonly requestBody: RestoreFolderFromTrashRequestBody;
    readonly queryParams: RestoreFolderFromTrashQueryParams;
    readonly headers: RestoreFolderFromTrashHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RestoreFolderFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<RestoreFolderFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface RestoreFolderFromTrashOptionalsInput {
    readonly requestBody?: RestoreFolderFromTrashRequestBody;
    readonly queryParams?: RestoreFolderFromTrashQueryParams;
    readonly headers?: RestoreFolderFromTrashHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTrashedFolderByIdOptionals {
    readonly queryParams: GetTrashedFolderByIdQueryParams;
    readonly headers: GetTrashedFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTrashedFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetTrashedFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetTrashedFolderByIdOptionalsInput {
    readonly queryParams?: GetTrashedFolderByIdQueryParams;
    readonly headers?: GetTrashedFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTrashedFolderByIdOptionals {
    readonly headers: DeleteTrashedFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTrashedFolderByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTrashedFolderByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTrashedFolderByIdOptionalsInput {
    readonly headers?: DeleteTrashedFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreFolderFromTrashRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface RestoreFolderFromTrashRequestBody {
    /**
     * An optional new name for the folder. */
    readonly name?: string;
    readonly parent?: RestoreFolderFromTrashRequestBodyParentField;
    readonly rawData?: SerializedData;
}
export interface RestoreFolderFromTrashQueryParams {
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
export declare class RestoreFolderFromTrashHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RestoreFolderFromTrashHeaders, 'extraHeaders'> & Partial<Pick<RestoreFolderFromTrashHeaders, 'extraHeaders'>>);
}
export interface RestoreFolderFromTrashHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetTrashedFolderByIdQueryParams {
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
export declare class GetTrashedFolderByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedFolderByIdHeaders, 'extraHeaders'>>);
}
export interface GetTrashedFolderByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTrashedFolderByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTrashedFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTrashedFolderByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTrashedFolderByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedFoldersManager, 'networkSession' | 'restoreFolderFromTrash' | 'getTrashedFolderById' | 'deleteTrashedFolderById'> & Partial<Pick<TrashedFoldersManager, 'networkSession'>>);
    /**
       * Restores a folder that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the folder to in case the
       * original folder has been deleted.
       *
       * During this operation, part of the file tree will be locked, mainly
       * the source folder and all of its descendants, as well as the destination
       * folder.
       *
       * For the duration of the operation, no other move, copy, delete, or restore
       * operation can performed on any of the locked folders.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {RestoreFolderFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashFolderRestored>}
       */
    restoreFolderFromTrash(folderId: string, optionalsInput?: RestoreFolderFromTrashOptionalsInput): Promise<TrashFolderRestored>;
    /**
       * Retrieves a folder that has been moved to the trash.
       *
       * Please note that only if the folder itself has been moved to the
       * trash can it be retrieved with this API call. If instead one of
       * its parent folders was moved to the trash, only that folder
       * can be inspected using the
       * [`GET /folders/:id/trash`](e://get_folders_id_trash) API.
       *
       * To list all items that have been moved to the trash, please
       * use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
       * API.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetTrashedFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashFolder>}
       */
    getTrashedFolderById(folderId: string, optionalsInput?: GetTrashedFolderByIdOptionalsInput): Promise<TrashFolder>;
    /**
       * Permanently deletes a folder that is in the trash.
       * This action cannot be undone.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteTrashedFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTrashedFolderById(folderId: string, optionalsInput?: DeleteTrashedFolderByIdOptionalsInput): Promise<undefined>;
}
export interface TrashedFoldersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeRestoreFolderFromTrashRequestBodyParentField(val: RestoreFolderFromTrashRequestBodyParentField): SerializedData;
export declare function deserializeRestoreFolderFromTrashRequestBodyParentField(val: SerializedData): RestoreFolderFromTrashRequestBodyParentField;
export declare function serializeRestoreFolderFromTrashRequestBody(val: RestoreFolderFromTrashRequestBody): SerializedData;
export declare function deserializeRestoreFolderFromTrashRequestBody(val: SerializedData): RestoreFolderFromTrashRequestBody;
