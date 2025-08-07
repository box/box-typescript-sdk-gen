import { FolderFull } from '../schemas/folderFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class FindFolderForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindFolderForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindFolderForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindFolderForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSharedLinkForFolderOptionals {
    readonly headers: GetSharedLinkForFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSharedLinkForFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSharedLinkForFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSharedLinkForFolderOptionalsInput {
    readonly headers?: GetSharedLinkForFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddShareLinkToFolderOptionals {
    readonly headers: AddShareLinkToFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddShareLinkToFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddShareLinkToFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddShareLinkToFolderOptionalsInput {
    readonly headers?: AddShareLinkToFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSharedLinkOnFolderOptionals {
    readonly headers: UpdateSharedLinkOnFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSharedLinkOnFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSharedLinkOnFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateSharedLinkOnFolderOptionalsInput {
    readonly headers?: UpdateSharedLinkOnFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RemoveSharedLinkFromFolderOptionals {
    readonly headers: RemoveSharedLinkFromFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RemoveSharedLinkFromFolderOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RemoveSharedLinkFromFolderOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RemoveSharedLinkFromFolderOptionalsInput {
    readonly headers?: RemoveSharedLinkFromFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindFolderForSharedLinkQueryParams {
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
export declare class FindFolderForSharedLinkHeaders {
    /**
     * Ensures an item is only returned if it has changed.
     *
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `304 Not Modified` if the item has not
     * changed since. */
    readonly ifNoneMatch?: string;
    /**
     * A header containing the shared link and optional password for the
     * shared link.
     *
     * The format for this header is as follows:
     *
     * `shared_link=[link]&shared_link_password=[password]`. */
    readonly boxapi: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<FindFolderForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindFolderForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindFolderForSharedLinkHeadersInput {
    /**
     * Ensures an item is only returned if it has changed.
     *
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `304 Not Modified` if the item has not
     * changed since. */
    readonly ifNoneMatch?: string;
    /**
     * A header containing the shared link and optional password for the
     * shared link.
     *
     * The format for this header is as follows:
     *
     * `shared_link=[link]&shared_link_password=[password]`. */
    readonly boxapi: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetSharedLinkForFolderQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class GetSharedLinkForFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSharedLinkForFolderHeaders, 'extraHeaders'> & Partial<Pick<GetSharedLinkForFolderHeaders, 'extraHeaders'>>);
}
export interface GetSharedLinkForFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddShareLinkToFolderRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface AddShareLinkToFolderRequestBodySharedLinkPermissionsField {
    /**
     * If the shared link allows for downloading of files.
     * This can only be set when `access` is set to
     * `open` or `company`. */
    readonly canDownload?: boolean;
    /**
     * If the shared link allows for previewing of files.
     * This value is always `true`. For shared links on folders
     * this also applies to any items in the folder. */
    readonly canPreview?: boolean;
    /**
     * This value can only be `false` for items
     * with a `type` of `folder`. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToFolderRequestBodySharedLinkField {
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
    readonly access?: AddShareLinkToFolderRequestBodySharedLinkAccessField;
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
     * as vanity URLs are a lot easier to guess than regular shared
     * links. */
    readonly vanityName?: string;
    /**
     * The timestamp at which this shared link will
     * expire. This field can only be set by
     * users with paid accounts. The value must be greater than the
     * current date and time. */
    readonly unsharedAt?: DateTime;
    readonly permissions?: AddShareLinkToFolderRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToFolderRequestBody {
    /**
     * The settings for the shared link to create on the folder.
     *
     * Use an empty object (`{}`) to use the default settings for shared
     * links. */
    readonly sharedLink?: AddShareLinkToFolderRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToFolderQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class AddShareLinkToFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddShareLinkToFolderHeaders, 'extraHeaders'> & Partial<Pick<AddShareLinkToFolderHeaders, 'extraHeaders'>>);
}
export interface AddShareLinkToFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField {
    /**
     * If the shared link allows for downloading of files.
     * This can only be set when `access` is set to
     * `open` or `company`. */
    readonly canDownload?: boolean;
    /**
     * If the shared link allows for previewing of files.
     * This value is always `true`. For shared links on folders
     * this also applies to any items in the folder. */
    readonly canPreview?: boolean;
    /**
     * This value can only be `false` for items
     * with a `type` of `folder`. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnFolderRequestBodySharedLinkField {
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
    readonly access?: UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
    /**
     * The password required to access the shared link. Set the
     * password to `null` to remove it.
     * Passwords must now be at least eight characters
     * long and include a number, upper case letter, or
     * a non-numeric or non-alphabetic character.
     * A password can only be set when `access` is set to `open`. */
    readonly password?: string;
    /**
     * Defines a custom vanity name to use in the shared link URL,
     * for example `https://app.box.com/v/my-shared-link`.
     *
     * Custom URLs should not be used when sharing sensitive content
     * as vanity URLs are a lot easier to guess than regular shared
     * links. */
    readonly vanityName?: string;
    /**
     * The timestamp at which this shared link will
     * expire. This field can only be set by
     * users with paid accounts. The value must be greater than the
     * current date and time. */
    readonly unsharedAt?: DateTime;
    readonly permissions?: UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnFolderRequestBody {
    /**
     * The settings for the shared link to update. */
    readonly sharedLink?: UpdateSharedLinkOnFolderRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnFolderQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class UpdateSharedLinkOnFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSharedLinkOnFolderHeaders, 'extraHeaders'> & Partial<Pick<UpdateSharedLinkOnFolderHeaders, 'extraHeaders'>>);
}
export interface UpdateSharedLinkOnFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface RemoveSharedLinkFromFolderRequestBodySharedLinkField {
    readonly rawData?: SerializedData;
}
export interface RemoveSharedLinkFromFolderRequestBody {
    /**
     * By setting this value to `null`, the shared link
     * is removed from the folder. */
    readonly sharedLink?: RemoveSharedLinkFromFolderRequestBodySharedLinkField | null;
    readonly rawData?: SerializedData;
}
export interface RemoveSharedLinkFromFolderQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class RemoveSharedLinkFromFolderHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RemoveSharedLinkFromFolderHeaders, 'extraHeaders'> & Partial<Pick<RemoveSharedLinkFromFolderHeaders, 'extraHeaders'>>);
}
export interface RemoveSharedLinkFromFolderHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksFoldersManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksFoldersManager, 'networkSession' | 'findFolderForSharedLink' | 'getSharedLinkForFolder' | 'addShareLinkToFolder' | 'updateSharedLinkOnFolder' | 'removeSharedLinkFromFolder'> & Partial<Pick<SharedLinksFoldersManager, 'networkSession'>>);
    /**
     * Return the folder represented by a shared link.
     *
     * A shared folder can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared folder when only given a shared link.
     * @param {FindFolderForSharedLinkQueryParams} queryParams Query parameters of findFolderForSharedLink method
     * @param {FindFolderForSharedLinkHeadersInput} headersInput Headers of findFolderForSharedLink method
     * @param {FindFolderForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<FolderFull>}
     */
    findFolderForSharedLink(queryParams: FindFolderForSharedLinkQueryParams | undefined, headersInput: FindFolderForSharedLinkHeadersInput, optionalsInput?: FindFolderForSharedLinkOptionalsInput): Promise<FolderFull>;
    /**
       * Gets the information for a shared link on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetSharedLinkForFolderQueryParams} queryParams Query parameters of getSharedLinkForFolder method
       * @param {GetSharedLinkForFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    getSharedLinkForFolder(folderId: string, queryParams: GetSharedLinkForFolderQueryParams, optionalsInput?: GetSharedLinkForFolderOptionalsInput): Promise<FolderFull>;
    /**
       * Adds a shared link to a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {AddShareLinkToFolderRequestBody} requestBody Request body of addShareLinkToFolder method
       * @param {AddShareLinkToFolderQueryParams} queryParams Query parameters of addShareLinkToFolder method
       * @param {AddShareLinkToFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    addShareLinkToFolder(folderId: string, requestBody: AddShareLinkToFolderRequestBody | undefined, queryParams: AddShareLinkToFolderQueryParams, optionalsInput?: AddShareLinkToFolderOptionalsInput): Promise<FolderFull>;
    /**
       * Updates a shared link on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateSharedLinkOnFolderRequestBody} requestBody Request body of updateSharedLinkOnFolder method
       * @param {UpdateSharedLinkOnFolderQueryParams} queryParams Query parameters of updateSharedLinkOnFolder method
       * @param {UpdateSharedLinkOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    updateSharedLinkOnFolder(folderId: string, requestBody: UpdateSharedLinkOnFolderRequestBody | undefined, queryParams: UpdateSharedLinkOnFolderQueryParams, optionalsInput?: UpdateSharedLinkOnFolderOptionalsInput): Promise<FolderFull>;
    /**
       * Removes a shared link from a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {RemoveSharedLinkFromFolderRequestBody} requestBody Request body of removeSharedLinkFromFolder method
       * @param {RemoveSharedLinkFromFolderQueryParams} queryParams Query parameters of removeSharedLinkFromFolder method
       * @param {RemoveSharedLinkFromFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    removeSharedLinkFromFolder(folderId: string, requestBody: RemoveSharedLinkFromFolderRequestBody | undefined, queryParams: RemoveSharedLinkFromFolderQueryParams, optionalsInput?: RemoveSharedLinkFromFolderOptionalsInput): Promise<FolderFull>;
}
export interface SharedLinksFoldersManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val: AddShareLinkToFolderRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val: SerializedData): AddShareLinkToFolderRequestBodySharedLinkAccessField;
export declare function serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val: AddShareLinkToFolderRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val: SerializedData): AddShareLinkToFolderRequestBodySharedLinkPermissionsField;
export declare function serializeAddShareLinkToFolderRequestBodySharedLinkField(val: AddShareLinkToFolderRequestBodySharedLinkField): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBodySharedLinkField(val: SerializedData): AddShareLinkToFolderRequestBodySharedLinkField;
export declare function serializeAddShareLinkToFolderRequestBody(val: AddShareLinkToFolderRequestBody): SerializedData;
export declare function deserializeAddShareLinkToFolderRequestBody(val: SerializedData): AddShareLinkToFolderRequestBody;
export declare function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val: UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val: SerializedData): UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField;
export declare function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val: UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val: UpdateSharedLinkOnFolderRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val: SerializedData): UpdateSharedLinkOnFolderRequestBodySharedLinkField;
export declare function serializeUpdateSharedLinkOnFolderRequestBody(val: UpdateSharedLinkOnFolderRequestBody): SerializedData;
export declare function deserializeUpdateSharedLinkOnFolderRequestBody(val: SerializedData): UpdateSharedLinkOnFolderRequestBody;
export declare function serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val: RemoveSharedLinkFromFolderRequestBodySharedLinkField): SerializedData;
export declare function deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val: SerializedData): RemoveSharedLinkFromFolderRequestBodySharedLinkField;
export declare function serializeRemoveSharedLinkFromFolderRequestBody(val: RemoveSharedLinkFromFolderRequestBody): SerializedData;
export declare function deserializeRemoveSharedLinkFromFolderRequestBody(val: SerializedData): RemoveSharedLinkFromFolderRequestBody;
//# sourceMappingURL=sharedLinksFolders.generated.d.ts.map