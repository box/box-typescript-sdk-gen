import { FolderFull } from '../schemas/folderFull.generated.js';
import { Items } from '../schemas/items.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetFolderByIdOptionals {
    readonly queryParams: GetFolderByIdQueryParams;
    readonly headers: GetFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderByIdOptionalsInput {
    readonly queryParams?: GetFolderByIdQueryParams;
    readonly headers?: GetFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFolderByIdOptionals {
    readonly requestBody: UpdateFolderByIdRequestBody;
    readonly queryParams: UpdateFolderByIdQueryParams;
    readonly headers: UpdateFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFolderByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFolderByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateFolderByIdOptionalsInput {
    readonly requestBody?: UpdateFolderByIdRequestBody;
    readonly queryParams?: UpdateFolderByIdQueryParams;
    readonly headers?: UpdateFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFolderByIdOptionals {
    readonly queryParams: DeleteFolderByIdQueryParams;
    readonly headers: DeleteFolderByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFolderByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface DeleteFolderByIdOptionalsInput {
    readonly queryParams?: DeleteFolderByIdQueryParams;
    readonly headers?: DeleteFolderByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderItemsOptionals {
    readonly queryParams: GetFolderItemsQueryParams;
    readonly headers: GetFolderItemsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderItemsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderItemsOptionalsInput {
    readonly queryParams?: GetFolderItemsQueryParams;
    readonly headers?: GetFolderItemsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateFolderOptionals {
    readonly queryParams: CreateFolderQueryParams;
    readonly headers: CreateFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CreateFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CreateFolderOptionalsInput {
    readonly queryParams?: CreateFolderQueryParams;
    readonly headers?: CreateFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CopyFolderOptionals {
    readonly queryParams: CopyFolderQueryParams;
    readonly headers: CopyFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CopyFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CopyFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CopyFolderOptionalsInput {
    readonly queryParams?: CopyFolderQueryParams;
    readonly headers?: CopyFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetFolderByIdQueryParamsSortField = 'id' | 'name' | 'date' | 'size' | string;
export type GetFolderByIdQueryParamsDirectionField = 'ASC' | 'DESC' | string;
export interface GetFolderByIdQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested.
     *
     * Additionally this field can be used to query any metadata
     * applied to the file by specifying the `metadata` field as well
     * as the scope and key of the template to retrieve, for example
     * `?fields=metadata.enterprise_12345.contractTemplate`. */
    readonly fields?: readonly string[];
    /**
     * Defines the **second** attribute by which items
     * are sorted.
     *
     * The folder type affects the way the items
     * are sorted:
     *
     *   * **Standard folder**:
     *   Items are always sorted by
     *   their `type` first, with
     *   folders listed before files,
     *   and files listed
     *   before web links.
     *
     *   * **Root folder**:
     *   This parameter is not supported
     *   for marker-based pagination
     *   on the root folder
     *
     *   (the folder with an `id` of `0`).
     *
     *   * **Shared folder with parent path
     *   to the associated folder visible to
     *   the collaborator**:
     *   Items are always sorted by
     *   their `type` first, with
     *   folders listed before files,
     *   and files listed
     *   before web links. */
    readonly sort?: GetFolderByIdQueryParamsSortField;
    /**
     * The direction to sort results in. This can be either in alphabetical ascending
     * (`ASC`) or descending (`DESC`) order. */
    readonly direction?: GetFolderByIdQueryParamsDirectionField;
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
export declare class GetFolderByIdHeaders {
    /**
     * Ensures an item is only returned if it has changed.
     *
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `304 Not Modified` if the item has not
     * changed since. */
    readonly ifNoneMatch?: string;
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFolderByIdHeaders, 'extraHeaders'>>);
}
export interface GetFolderByIdHeadersInput {
    /**
     * Ensures an item is only returned if it has changed.
     *
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `304 Not Modified` if the item has not
     * changed since. */
    readonly ifNoneMatch?: string;
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateFolderByIdRequestBodySyncStateField = 'synced' | 'not_synced' | 'partially_synced' | string;
export interface UpdateFolderByIdRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    /**
     * The input for `user_id` is optional. Moving to non-root folder is not allowed when `user_id` is present. Parent folder id should be zero when `user_id` is provided. */
    readonly userId?: string;
    readonly rawData?: SerializedData;
}
export type UpdateFolderByIdRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface UpdateFolderByIdRequestBodySharedLinkPermissionsField {
    /**
     * If the shared link allows for downloading of files.
     * This can only be set when `access` is set to
     * `open` or `company`. */
    readonly canDownload?: boolean;
    readonly rawData?: SerializedData;
}
export interface UpdateFolderByIdRequestBodySharedLinkField {
    /**
     * The level of access for the shared link. This can be
     * restricted to anyone with the link (`open`), only people
     * within the company (`company`) and only those who
     * have been invited to the folder (`collaborators`).
     *
     * If not set, this field defaults to the access level specified
     * by the enterprise admin. To create a shared link with this
     * default setting pass the `shared_link` object with
     * no `access` field, for example `{ "shared_link": {} }`.
     *
     * The `company` access level is only available to paid
     * accounts. */
    readonly access?: UpdateFolderByIdRequestBodySharedLinkAccessField;
    /**
     * The password required to access the shared link. Set the
     * password to `null` to remove it.
     * Passwords must now be at least eight characters
     * long and include a number, upper case letter, or
     * a non-numeric or non-alphabetic character.
     * A password can only be set when `access` is set to `open`. */
    readonly password?: string | null;
    /**
     * Defines a custom vanity name to use in the shared link URL,
     * for example `https://app.box.com/v/my-shared-link`.
     *
     * Custom URLs should not be used when sharing sensitive content
     * as vanity URLs are a lot easier to guess than regular shared links. */
    readonly vanityName?: string;
    /**
     * The timestamp at which this shared link will
     * expire. This field can only be set by
     * users with paid accounts. */
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateFolderByIdRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export type UpdateFolderByIdRequestBodyFolderUploadEmailAccessField = 'open' | 'collaborators' | string;
export interface UpdateFolderByIdRequestBodyFolderUploadEmailField {
    /**
     * When this parameter has been set, users can email files
     * to the email address that has been automatically
     * created for this folder.
     *
     * To create an email address, set this property either when
     * creating or updating the folder.
     *
     * When set to `collaborators`, only emails from registered email
     * addresses for collaborators will be accepted. This includes
     * any email aliases a user might have registered.
     *
     * When set to `open` it will accept emails from any email
     * address. */
    readonly access?: UpdateFolderByIdRequestBodyFolderUploadEmailAccessField;
    readonly rawData?: SerializedData;
}
export interface UpdateFolderByIdRequestBodyCollectionsField {
    /**
     * The unique identifier for this object. */
    readonly id?: string;
    /**
     * The type for this object. */
    readonly type?: string;
    readonly rawData?: SerializedData;
}
export interface UpdateFolderByIdRequestBody {
    /**
     * The optional new name for this folder.
     *
     * The following restrictions to folder names apply: names containing
     * non-printable ASCII characters, forward and backward slashes
     * (`/`, `\`), names with trailing spaces, and names `.` and `..` are
     * not allowed.
     *
     * Folder names must be unique within their parent folder. The name check is case-insensitive,
     * so a folder named `New Folder` cannot be created in a parent folder that already contains
     * a folder named `new folder`. */
    readonly name?: string;
    /**
     * The optional description of this folder. */
    readonly description?: string;
    /**
     * Specifies whether a folder should be synced to a
     * user's device or not. This is used by Box Sync
     * (discontinued) and is not used by Box Drive. */
    readonly syncState?: UpdateFolderByIdRequestBodySyncStateField;
    /**
     * Specifies if users who are not the owner
     * of the folder can invite new collaborators to the folder. */
    readonly canNonOwnersInvite?: boolean;
    readonly parent?: UpdateFolderByIdRequestBodyParentField;
    readonly sharedLink?: UpdateFolderByIdRequestBodySharedLinkField;
    readonly folderUploadEmail?: UpdateFolderByIdRequestBodyFolderUploadEmailField | null;
    /**
     * The tags for this item. These tags are shown in
     * the Box web app and mobile apps next to an item.
     *
     * To add or remove a tag, retrieve the item's current tags,
     * modify them, and then update this field.
     *
     * There is a limit of 100 tags per item, and 10,000
     * unique tags per enterprise. */
    readonly tags?: readonly string[];
    /**
     * Specifies if new invites to this folder are restricted to users
     * within the enterprise. This does not affect existing
     * collaborations. */
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    /**
     * An array of collections to make this folder
     * a member of. Currently
     * we only support the `favorites` collection.
     *
     * To get the ID for a collection, use the
     * [List all collections][1] endpoint.
     *
     * Passing an empty array `[]` or `null` will remove
     * the folder from all collections.
     *
     * [1]: e://get-collections */
    readonly collections?: readonly UpdateFolderByIdRequestBodyCollectionsField[] | null;
    /**
     * Restricts collaborators who are not the owner of
     * this folder from viewing other collaborations on
     * this folder.
     *
     * It also restricts non-owners from inviting new
     * collaborators.
     *
     * When setting this field to `false`, it is required
     * to also set `can_non_owners_invite_collaborators` to
     * `false` if it has not already been set. */
    readonly canNonOwnersViewCollaborators?: boolean;
    readonly rawData?: SerializedData;
}
export interface UpdateFolderByIdQueryParams {
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
export declare class UpdateFolderByIdHeaders {
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
    };
    constructor(fields: Omit<UpdateFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFolderByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFolderByIdHeadersInput {
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
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface DeleteFolderByIdQueryParams {
    /**
     * Delete a folder that is not empty by recursively deleting the
     * folder and all of its content. */
    readonly recursive?: boolean;
}
export declare class DeleteFolderByIdHeaders {
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
    };
    constructor(fields: Omit<DeleteFolderByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFolderByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFolderByIdHeadersInput {
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
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFolderItemsQueryParamsSortField = 'id' | 'name' | 'date' | 'size' | string;
export type GetFolderItemsQueryParamsDirectionField = 'ASC' | 'DESC' | string;
export interface GetFolderItemsQueryParams {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     *
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested.
     *
     * Additionally this field can be used to query any metadata
     * applied to the file by specifying the `metadata` field as well
     * as the scope and key of the template to retrieve, for example
     * `?fields=metadata.enterprise_12345.contractTemplate`. */
    readonly fields?: readonly string[];
    /**
     * Specifies whether to use marker-based pagination instead of
     * offset-based pagination. Only one pagination method can
     * be used at a time.
     *
     * By setting this value to true, the API will return a `marker` field
     * that can be passed as a parameter to this endpoint to get the next
     * page of the response. */
    readonly usemarker?: boolean;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
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
    /**
     * Defines the **second** attribute by which items
     * are sorted.
     *
     * The folder type affects the way the items
     * are sorted:
     *
     *   * **Standard folder**:
     *   Items are always sorted by
     *   their `type` first, with
     *   folders listed before files,
     *   and files listed
     *   before web links.
     *
     *   * **Root folder**:
     *   This parameter is not supported
     *   for marker-based pagination
     *   on the root folder
     *
     *   (the folder with an `id` of `0`).
     *
     *   * **Shared folder with parent path
     *   to the associated folder visible to
     *   the collaborator**:
     *   Items are always sorted by
     *   their `type` first, with
     *   folders listed before files,
     *   and files listed
     *   before web links. */
    readonly sort?: GetFolderItemsQueryParamsSortField;
    /**
     * The direction to sort results in. This can be either in alphabetical ascending
     * (`ASC`) or descending (`DESC`) order. */
    readonly direction?: GetFolderItemsQueryParamsDirectionField;
}
export declare class GetFolderItemsHeaders {
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderItemsHeaders, 'extraHeaders'> & Partial<Pick<GetFolderItemsHeaders, 'extraHeaders'>>);
}
export interface GetFolderItemsHeadersInput {
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateFolderRequestBodyParentField {
    /**
     * The ID of parent folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export type CreateFolderRequestBodyFolderUploadEmailAccessField = 'open' | 'collaborators' | string;
export interface CreateFolderRequestBodyFolderUploadEmailField {
    /**
     * When this parameter has been set, users can email files
     * to the email address that has been automatically
     * created for this folder.
     *
     * To create an email address, set this property either when
     * creating or updating the folder.
     *
     * When set to `collaborators`, only emails from registered email
     * addresses for collaborators will be accepted. This includes
     * any email aliases a user might have registered.
     *
     * When set to `open` it will accept emails from any email
     * address. */
    readonly access?: CreateFolderRequestBodyFolderUploadEmailAccessField;
    readonly rawData?: SerializedData;
}
export type CreateFolderRequestBodySyncStateField = 'synced' | 'not_synced' | 'partially_synced' | string;
export interface CreateFolderRequestBody {
    /**
     * The name for the new folder.
     *
     * The following restrictions to folder names apply: names containing
     * non-printable ASCII characters, forward and backward slashes
     * (`/`, `\`), names with trailing spaces, and names `.` and `..` are
     * not allowed.
     *
     * Folder names must be unique within their parent folder. The name check is case-insensitive,
     * so a folder named `New Folder` cannot be created in a parent folder that already contains
     * a folder named `new folder`. */
    readonly name: string;
    /**
     * The parent folder to create the new folder within. */
    readonly parent: CreateFolderRequestBodyParentField;
    readonly folderUploadEmail?: CreateFolderRequestBodyFolderUploadEmailField;
    /**
     * Specifies whether a folder should be synced to a
     * user's device or not. This is used by Box Sync
     * (discontinued) and is not used by Box Drive. */
    readonly syncState?: CreateFolderRequestBodySyncStateField;
    readonly rawData?: SerializedData;
}
export interface CreateFolderQueryParams {
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
export declare class CreateFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateFolderHeaders, 'extraHeaders'> & Partial<Pick<CreateFolderHeaders, 'extraHeaders'>>);
}
export interface CreateFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CopyFolderRequestBodyParentField {
    /**
     * The ID of parent folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CopyFolderRequestBody {
    /**
     * An optional new name for the copied folder.
     *
     * There are some restrictions to the file name. Names containing
     * non-printable ASCII characters, forward and backward slashes
     * (`/`, `\`), as well as names with trailing spaces are
     * prohibited.
     *
     * Additionally, the names `.` and `..` are
     * not allowed either. */
    readonly name?: string;
    /**
     * The destination folder to copy the folder to. */
    readonly parent: CopyFolderRequestBodyParentField;
    readonly rawData?: SerializedData;
}
export interface CopyFolderQueryParams {
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
export declare class CopyFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CopyFolderHeaders, 'extraHeaders'> & Partial<Pick<CopyFolderHeaders, 'extraHeaders'>>);
}
export interface CopyFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FoldersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FoldersManager, 'networkSession' | 'getFolderById' | 'updateFolderById' | 'deleteFolderById' | 'getFolderItems' | 'createFolder' | 'copyFolder'> & Partial<Pick<FoldersManager, 'networkSession'>>);
    /**
       * Retrieves details for a folder, including the first 100 entries
       * in the folder.
       *
       * Passing `sort`, `direction`, `offset`, and `limit`
       * parameters in query allows you to manage the
       * list of returned
       * [folder items](r://folder--full#param-item-collection).
       *
       * To fetch more items within the folder, use the
       * [Get items in a folder](e://get-folders-id-items) endpoint.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    getFolderById(folderId: string, optionalsInput?: GetFolderByIdOptionalsInput): Promise<FolderFull>;
    /**
       * Updates a folder. This can be also be used to move the folder,
       * create shared links, update collaborations, and more.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    updateFolderById(folderId: string, optionalsInput?: UpdateFolderByIdOptionalsInput): Promise<FolderFull>;
    /**
       * Deletes a folder, either permanently or by moving it to
       * the trash.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFolderById(folderId: string, optionalsInput?: DeleteFolderByIdOptionalsInput): Promise<undefined>;
    /**
       * Retrieves a page of items in a folder. These items can be files,
       * folders, and web links.
       *
       * To request more information about the folder itself, like its size,
       * use the [Get a folder](#get-folders-id) endpoint instead.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderItemsOptionalsInput} optionalsInput
       * @returns {Promise<Items>}
       */
    getFolderItems(folderId: string, optionalsInput?: GetFolderItemsOptionalsInput): Promise<Items>;
    /**
     * Creates a new empty folder within the specified parent folder.
     * @param {CreateFolderRequestBody} requestBody Request body of createFolder method
     * @param {CreateFolderOptionalsInput} optionalsInput
     * @returns {Promise<FolderFull>}
     */
    createFolder(requestBody: CreateFolderRequestBody, optionalsInput?: CreateFolderOptionalsInput): Promise<FolderFull>;
    /**
       * Creates a copy of a folder within a destination folder.
       *
       * The original folder will not be changed.
       * @param {string} folderId The unique identifier of the folder to copy.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder with the ID `0` can not be copied.
      Example: "0"
       * @param {CopyFolderRequestBody} requestBody Request body of copyFolder method
       * @param {CopyFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    copyFolder(folderId: string, requestBody: CopyFolderRequestBody, optionalsInput?: CopyFolderOptionalsInput): Promise<FolderFull>;
}
export interface FoldersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFolderByIdQueryParamsSortField(val: GetFolderByIdQueryParamsSortField): SerializedData;
export declare function deserializeGetFolderByIdQueryParamsSortField(val: SerializedData): GetFolderByIdQueryParamsSortField;
export declare function serializeGetFolderByIdQueryParamsDirectionField(val: GetFolderByIdQueryParamsDirectionField): SerializedData;
export declare function deserializeGetFolderByIdQueryParamsDirectionField(val: SerializedData): GetFolderByIdQueryParamsDirectionField;
export declare function serializeUpdateFolderByIdRequestBodySyncStateField(val: UpdateFolderByIdRequestBodySyncStateField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySyncStateField(val: SerializedData): UpdateFolderByIdRequestBodySyncStateField;
export declare function serializeUpdateFolderByIdRequestBodyParentField(val: UpdateFolderByIdRequestBodyParentField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyParentField(val: SerializedData): UpdateFolderByIdRequestBodyParentField;
export declare function serializeUpdateFolderByIdRequestBodySharedLinkAccessField(val: UpdateFolderByIdRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(val: SerializedData): UpdateFolderByIdRequestBodySharedLinkAccessField;
export declare function serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val: UpdateFolderByIdRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateFolderByIdRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateFolderByIdRequestBodySharedLinkField(val: UpdateFolderByIdRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodySharedLinkField(val: SerializedData): UpdateFolderByIdRequestBodySharedLinkField;
export declare function serializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val: UpdateFolderByIdRequestBodyFolderUploadEmailAccessField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val: SerializedData): UpdateFolderByIdRequestBodyFolderUploadEmailAccessField;
export declare function serializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val: UpdateFolderByIdRequestBodyFolderUploadEmailField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val: SerializedData): UpdateFolderByIdRequestBodyFolderUploadEmailField;
export declare function serializeUpdateFolderByIdRequestBodyCollectionsField(val: UpdateFolderByIdRequestBodyCollectionsField): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBodyCollectionsField(val: SerializedData): UpdateFolderByIdRequestBodyCollectionsField;
export declare function serializeUpdateFolderByIdRequestBody(val: UpdateFolderByIdRequestBody): SerializedData;
export declare function deserializeUpdateFolderByIdRequestBody(val: SerializedData): UpdateFolderByIdRequestBody;
export declare function serializeGetFolderItemsQueryParamsSortField(val: GetFolderItemsQueryParamsSortField): SerializedData;
export declare function deserializeGetFolderItemsQueryParamsSortField(val: SerializedData): GetFolderItemsQueryParamsSortField;
export declare function serializeGetFolderItemsQueryParamsDirectionField(val: GetFolderItemsQueryParamsDirectionField): SerializedData;
export declare function deserializeGetFolderItemsQueryParamsDirectionField(val: SerializedData): GetFolderItemsQueryParamsDirectionField;
export declare function serializeCreateFolderRequestBodyParentField(val: CreateFolderRequestBodyParentField): SerializedData;
export declare function deserializeCreateFolderRequestBodyParentField(val: SerializedData): CreateFolderRequestBodyParentField;
export declare function serializeCreateFolderRequestBodyFolderUploadEmailAccessField(val: CreateFolderRequestBodyFolderUploadEmailAccessField): SerializedData;
export declare function deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(val: SerializedData): CreateFolderRequestBodyFolderUploadEmailAccessField;
export declare function serializeCreateFolderRequestBodyFolderUploadEmailField(val: CreateFolderRequestBodyFolderUploadEmailField): SerializedData;
export declare function deserializeCreateFolderRequestBodyFolderUploadEmailField(val: SerializedData): CreateFolderRequestBodyFolderUploadEmailField;
export declare function serializeCreateFolderRequestBodySyncStateField(val: CreateFolderRequestBodySyncStateField): SerializedData;
export declare function deserializeCreateFolderRequestBodySyncStateField(val: SerializedData): CreateFolderRequestBodySyncStateField;
export declare function serializeCreateFolderRequestBody(val: CreateFolderRequestBody): SerializedData;
export declare function deserializeCreateFolderRequestBody(val: SerializedData): CreateFolderRequestBody;
export declare function serializeCopyFolderRequestBodyParentField(val: CopyFolderRequestBodyParentField): SerializedData;
export declare function deserializeCopyFolderRequestBodyParentField(val: SerializedData): CopyFolderRequestBodyParentField;
export declare function serializeCopyFolderRequestBody(val: CopyFolderRequestBody): SerializedData;
export declare function deserializeCopyFolderRequestBody(val: SerializedData): CopyFolderRequestBody;
//# sourceMappingURL=folders.generated.d.ts.map