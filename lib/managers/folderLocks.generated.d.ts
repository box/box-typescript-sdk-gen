import { FolderLocks } from '../schemas/folderLocks.generated.js';
import { FolderLock } from '../schemas/folderLock.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFolderLocksOptionals {
    readonly headers: GetFolderLocksHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderLocksOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderLocksOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFolderLocksOptionalsInput {
    readonly headers?: GetFolderLocksHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFolderLockOptionals {
    readonly headers: CreateFolderLockHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFolderLockOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateFolderLockOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateFolderLockOptionalsInput {
    readonly headers?: CreateFolderLockHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderLockByIdOptionals {
    readonly headers: DeleteFolderLockByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderLockByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderLockByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderLockByIdOptionalsInput {
    readonly headers?: DeleteFolderLockByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFolderLocksQueryParams {
    /**
     * The unique identifier that represent a folder.
     *
     * The ID for any folder can be determined
     * by visiting this folder in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/folder/123`
     * the `folder_id` is `123`.
     *
     * The root folder of a Box account is
     * always represented by the ID `0`. */
    readonly folderId: string;
}
export declare class GetFolderLocksHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderLocksHeaders, 'extraHeaders'> & Partial<Pick<GetFolderLocksHeaders, 'extraHeaders'>>);
}
export interface GetFolderLocksHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFolderLockRequestBodyLockedOperationsField {
    /**
     * Whether moving the folder should be locked. */
    readonly move: boolean;
    /**
     * Whether deleting the folder should be locked. */
    readonly delete: boolean;
    readonly rawData?: SerializedData;
}
export interface CreateFolderLockRequestBodyFolderField {
    /**
     * The content type the lock is being applied to. Only `folder`
     * is supported. */
    readonly type: string;
    /**
     * The ID of the folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateFolderLockRequestBody {
    /**
     * The operations to lock for the folder. If `locked_operations` is
     * included in the request, both `move` and `delete` must also be
     * included and both set to `true`. */
    readonly lockedOperations?: CreateFolderLockRequestBodyLockedOperationsField;
    /**
     * The folder to apply the lock to. */
    readonly folder: CreateFolderLockRequestBodyFolderField;
    readonly rawData?: SerializedData;
}
export declare class CreateFolderLockHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFolderLockHeaders, 'extraHeaders'> & Partial<Pick<CreateFolderLockHeaders, 'extraHeaders'>>);
}
export interface CreateFolderLockHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteFolderLockByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteFolderLockByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderLockByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderLockByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FolderLocksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FolderLocksManager, 'networkSession' | 'getFolderLocks' | 'createFolderLock' | 'deleteFolderLockById'> & Partial<Pick<FolderLocksManager, 'networkSession'>>);
    /**
     * Retrieves folder lock details for a given folder.
     *
     * You must be authenticated as the owner or co-owner of the folder to
     * use this endpoint.
     * @param {GetFolderLocksQueryParams} queryParams Query parameters of getFolderLocks method
     * @param {GetFolderLocksOptionalsInput} optionalsInput
     * @returns {Promise<FolderLocks>}
     */
    getFolderLocks(queryParams: GetFolderLocksQueryParams, optionalsInput?: GetFolderLocksOptionalsInput): Promise<FolderLocks>;
    /**
     * Creates a folder lock on a folder, preventing it from being moved and/or
     * deleted.
     *
     * You must be authenticated as the owner or co-owner of the folder to
     * use this endpoint.
     * @param {CreateFolderLockRequestBody} requestBody Request body of createFolderLock method
     * @param {CreateFolderLockOptionalsInput} optionalsInput
     * @returns {Promise<FolderLock>}
     */
    createFolderLock(requestBody: CreateFolderLockRequestBody, optionalsInput?: CreateFolderLockOptionalsInput): Promise<FolderLock>;
    /**
       * Deletes a folder lock on a given folder.
       *
       * You must be authenticated as the owner or co-owner of the folder to
       * use this endpoint.
       * @param {string} folderLockId The ID of the folder lock.
      Example: "12345"
       * @param {DeleteFolderLockByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFolderLockById(folderLockId: string, optionalsInput?: DeleteFolderLockByIdOptionalsInput): Promise<undefined>;
}
export interface FolderLocksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateFolderLockRequestBodyLockedOperationsField(val: CreateFolderLockRequestBodyLockedOperationsField): SerializedData;
export declare function deserializeCreateFolderLockRequestBodyLockedOperationsField(val: SerializedData): CreateFolderLockRequestBodyLockedOperationsField;
export declare function serializeCreateFolderLockRequestBodyFolderField(val: CreateFolderLockRequestBodyFolderField): SerializedData;
export declare function deserializeCreateFolderLockRequestBodyFolderField(val: SerializedData): CreateFolderLockRequestBodyFolderField;
export declare function serializeCreateFolderLockRequestBody(val: CreateFolderLockRequestBody): SerializedData;
export declare function deserializeCreateFolderLockRequestBody(val: SerializedData): CreateFolderLockRequestBody;
//# sourceMappingURL=folderLocks.generated.d.ts.map