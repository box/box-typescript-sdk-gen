import { TrashFileRestored } from '../schemas/trashFileRestored.generated.js';
import { TrashFile } from '../schemas/trashFile.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class RestoreFileFromTrashOptionals {
    readonly requestBody: RestoreFileFromTrashRequestBody;
    readonly queryParams: RestoreFileFromTrashQueryParams;
    readonly headers: RestoreFileFromTrashHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RestoreFileFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<RestoreFileFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface RestoreFileFromTrashOptionalsInput {
    readonly requestBody?: RestoreFileFromTrashRequestBody;
    readonly queryParams?: RestoreFileFromTrashQueryParams;
    readonly headers?: RestoreFileFromTrashHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTrashedFileByIdOptionals {
    readonly queryParams: GetTrashedFileByIdQueryParams;
    readonly headers: GetTrashedFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTrashedFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetTrashedFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetTrashedFileByIdOptionalsInput {
    readonly queryParams?: GetTrashedFileByIdQueryParams;
    readonly headers?: GetTrashedFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTrashedFileByIdOptionals {
    readonly headers: DeleteTrashedFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTrashedFileByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTrashedFileByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTrashedFileByIdOptionalsInput {
    readonly headers?: DeleteTrashedFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreFileFromTrashRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface RestoreFileFromTrashRequestBody {
    /**
     * An optional new name for the file. */
    readonly name?: string;
    readonly parent?: RestoreFileFromTrashRequestBodyParentField;
    readonly rawData?: SerializedData;
}
export interface RestoreFileFromTrashQueryParams {
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
export declare class RestoreFileFromTrashHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RestoreFileFromTrashHeaders, 'extraHeaders'> & Partial<Pick<RestoreFileFromTrashHeaders, 'extraHeaders'>>);
}
export interface RestoreFileFromTrashHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetTrashedFileByIdQueryParams {
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
export declare class GetTrashedFileByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedFileByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedFileByIdHeaders, 'extraHeaders'>>);
}
export interface GetTrashedFileByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTrashedFileByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTrashedFileByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTrashedFileByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTrashedFileByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedFilesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedFilesManager, 'networkSession' | 'restoreFileFromTrash' | 'getTrashedFileById' | 'deleteTrashedFileById'> & Partial<Pick<TrashedFilesManager, 'networkSession'>>);
    /**
       * Restores a file that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the file to in case the
       * original folder has been deleted.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {RestoreFileFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashFileRestored>}
       */
    restoreFileFromTrash(fileId: string, optionalsInput?: RestoreFileFromTrashOptionalsInput): Promise<TrashFileRestored>;
    /**
       * Retrieves a file that has been moved to the trash.
       *
       * Please note that only if the file itself has been moved to the
       * trash can it be retrieved with this API call. If instead one of
       * its parent folders was moved to the trash, only that folder
       * can be inspected using the
       * [`GET /folders/:id/trash`](e://get_folders_id_trash) API.
       *
       * To list all items that have been moved to the trash, please
       * use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
       * API.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetTrashedFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashFile>}
       */
    getTrashedFileById(fileId: string, optionalsInput?: GetTrashedFileByIdOptionalsInput): Promise<TrashFile>;
    /**
       * Permanently deletes a file that is in the trash.
       * This action cannot be undone.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteTrashedFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTrashedFileById(fileId: string, optionalsInput?: DeleteTrashedFileByIdOptionalsInput): Promise<undefined>;
}
export interface TrashedFilesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeRestoreFileFromTrashRequestBodyParentField(val: RestoreFileFromTrashRequestBodyParentField): SerializedData;
export declare function deserializeRestoreFileFromTrashRequestBodyParentField(val: SerializedData): RestoreFileFromTrashRequestBodyParentField;
export declare function serializeRestoreFileFromTrashRequestBody(val: RestoreFileFromTrashRequestBody): SerializedData;
export declare function deserializeRestoreFileFromTrashRequestBody(val: SerializedData): RestoreFileFromTrashRequestBody;
//# sourceMappingURL=trashedFiles.generated.d.ts.map