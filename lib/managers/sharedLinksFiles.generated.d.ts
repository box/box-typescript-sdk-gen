import { FileFull } from '../schemas/fileFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class FindFileForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindFileForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindFileForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindFileForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSharedLinkForFileOptionals {
    readonly headers: GetSharedLinkForFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSharedLinkForFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSharedLinkForFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSharedLinkForFileOptionalsInput {
    readonly headers?: GetSharedLinkForFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddShareLinkToFileOptionals {
    readonly headers: AddShareLinkToFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddShareLinkToFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddShareLinkToFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddShareLinkToFileOptionalsInput {
    readonly headers?: AddShareLinkToFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSharedLinkOnFileOptionals {
    readonly headers: UpdateSharedLinkOnFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSharedLinkOnFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSharedLinkOnFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateSharedLinkOnFileOptionalsInput {
    readonly headers?: UpdateSharedLinkOnFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RemoveSharedLinkFromFileOptionals {
    readonly headers: RemoveSharedLinkFromFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RemoveSharedLinkFromFileOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RemoveSharedLinkFromFileOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RemoveSharedLinkFromFileOptionalsInput {
    readonly headers?: RemoveSharedLinkFromFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindFileForSharedLinkQueryParams {
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
export declare class FindFileForSharedLinkHeaders {
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
    constructor(fields: Omit<FindFileForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindFileForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindFileForSharedLinkHeadersInput {
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
export interface GetSharedLinkForFileQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class GetSharedLinkForFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSharedLinkForFileHeaders, 'extraHeaders'> & Partial<Pick<GetSharedLinkForFileHeaders, 'extraHeaders'>>);
}
export interface GetSharedLinkForFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddShareLinkToFileRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface AddShareLinkToFileRequestBodySharedLinkPermissionsField {
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
     * If the shared link allows for editing of files.
     * This can only be set when `access` is set to
     * `open` or `company`.
     * This value can only be `true` is `can_download` is
     * also `true`. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToFileRequestBodySharedLinkField {
    /**
     * The level of access for the shared link. This can be
     * restricted to anyone with the link (`open`), only people
     * within the company (`company`) and only those who
     * have been invited to the file (`collaborators`).
     *
     * If not set, this field defaults to the access level specified
     * by the enterprise admin. To create a shared link with this
     * default setting pass the `shared_link` object with
     * no `access` field, for example `{ "shared_link": {} }`.
     *
     * The `company` access level is only available to paid
     * accounts. */
    readonly access?: AddShareLinkToFileRequestBodySharedLinkAccessField;
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
    readonly permissions?: AddShareLinkToFileRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToFileRequestBody {
    /**
     * The settings for the shared link to create on the file.
     * Use an empty object (`{}`) to use the default settings for shared
     * links. */
    readonly sharedLink?: AddShareLinkToFileRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToFileQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class AddShareLinkToFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddShareLinkToFileHeaders, 'extraHeaders'> & Partial<Pick<AddShareLinkToFileHeaders, 'extraHeaders'>>);
}
export interface AddShareLinkToFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateSharedLinkOnFileRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField {
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
     * If the shared link allows for editing of files.
     * This can only be set when `access` is set to
     * `open` or `company`.
     * This value can only be `true` is `can_download` is
     * also `true`. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnFileRequestBodySharedLinkField {
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
    readonly access?: UpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
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
    readonly permissions?: UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnFileRequestBody {
    /**
     * The settings for the shared link to update. */
    readonly sharedLink?: UpdateSharedLinkOnFileRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnFileQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class UpdateSharedLinkOnFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSharedLinkOnFileHeaders, 'extraHeaders'> & Partial<Pick<UpdateSharedLinkOnFileHeaders, 'extraHeaders'>>);
}
export interface UpdateSharedLinkOnFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface RemoveSharedLinkFromFileRequestBodySharedLinkField {
    readonly rawData?: SerializedData;
}
export interface RemoveSharedLinkFromFileRequestBody {
    /**
     * By setting this value to `null`, the shared link
     * is removed from the file. */
    readonly sharedLink?: RemoveSharedLinkFromFileRequestBodySharedLinkField | null;
    readonly rawData?: SerializedData;
}
export interface RemoveSharedLinkFromFileQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class RemoveSharedLinkFromFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RemoveSharedLinkFromFileHeaders, 'extraHeaders'> & Partial<Pick<RemoveSharedLinkFromFileHeaders, 'extraHeaders'>>);
}
export interface RemoveSharedLinkFromFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksFilesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksFilesManager, 'networkSession' | 'findFileForSharedLink' | 'getSharedLinkForFile' | 'addShareLinkToFile' | 'updateSharedLinkOnFile' | 'removeSharedLinkFromFile'> & Partial<Pick<SharedLinksFilesManager, 'networkSession'>>);
    /**
     * Returns the file represented by a shared link.
     *
     * A shared file can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared file when only given a shared link.
     *
     * The `shared_link_permission_options` array field can be returned
     * by requesting it in the `fields` query parameter.
     * @param {FindFileForSharedLinkQueryParams} queryParams Query parameters of findFileForSharedLink method
     * @param {FindFileForSharedLinkHeadersInput} headersInput Headers of findFileForSharedLink method
     * @param {FindFileForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<FileFull>}
     */
    findFileForSharedLink(queryParams: FindFileForSharedLinkQueryParams | undefined, headersInput: FindFileForSharedLinkHeadersInput, optionalsInput?: FindFileForSharedLinkOptionalsInput): Promise<FileFull>;
    /**
       * Gets the information for a shared link on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetSharedLinkForFileQueryParams} queryParams Query parameters of getSharedLinkForFile method
       * @param {GetSharedLinkForFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    getSharedLinkForFile(fileId: string, queryParams: GetSharedLinkForFileQueryParams, optionalsInput?: GetSharedLinkForFileOptionalsInput): Promise<FileFull>;
    /**
       * Adds a shared link to a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {AddShareLinkToFileRequestBody} requestBody Request body of addShareLinkToFile method
       * @param {AddShareLinkToFileQueryParams} queryParams Query parameters of addShareLinkToFile method
       * @param {AddShareLinkToFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    addShareLinkToFile(fileId: string, requestBody: AddShareLinkToFileRequestBody | undefined, queryParams: AddShareLinkToFileQueryParams, optionalsInput?: AddShareLinkToFileOptionalsInput): Promise<FileFull>;
    /**
       * Updates a shared link on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateSharedLinkOnFileRequestBody} requestBody Request body of updateSharedLinkOnFile method
       * @param {UpdateSharedLinkOnFileQueryParams} queryParams Query parameters of updateSharedLinkOnFile method
       * @param {UpdateSharedLinkOnFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    updateSharedLinkOnFile(fileId: string, requestBody: UpdateSharedLinkOnFileRequestBody | undefined, queryParams: UpdateSharedLinkOnFileQueryParams, optionalsInput?: UpdateSharedLinkOnFileOptionalsInput): Promise<FileFull>;
    /**
       * Removes a shared link from a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {RemoveSharedLinkFromFileRequestBody} requestBody Request body of removeSharedLinkFromFile method
       * @param {RemoveSharedLinkFromFileQueryParams} queryParams Query parameters of removeSharedLinkFromFile method
       * @param {RemoveSharedLinkFromFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    removeSharedLinkFromFile(fileId: string, requestBody: RemoveSharedLinkFromFileRequestBody | undefined, queryParams: RemoveSharedLinkFromFileQueryParams, optionalsInput?: RemoveSharedLinkFromFileOptionalsInput): Promise<FileFull>;
}
export interface SharedLinksFilesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddShareLinkToFileRequestBodySharedLinkAccessField(val: AddShareLinkToFileRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(val: SerializedData): AddShareLinkToFileRequestBodySharedLinkAccessField;
export declare function serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val: AddShareLinkToFileRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val: SerializedData): AddShareLinkToFileRequestBodySharedLinkPermissionsField;
export declare function serializeAddShareLinkToFileRequestBodySharedLinkField(val: AddShareLinkToFileRequestBodySharedLinkField): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBodySharedLinkField(val: SerializedData): AddShareLinkToFileRequestBodySharedLinkField;
export declare function serializeAddShareLinkToFileRequestBody(val: AddShareLinkToFileRequestBody): SerializedData;
export declare function deserializeAddShareLinkToFileRequestBody(val: SerializedData): AddShareLinkToFileRequestBody;
export declare function serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val: UpdateSharedLinkOnFileRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val: SerializedData): UpdateSharedLinkOnFileRequestBodySharedLinkAccessField;
export declare function serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val: UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val: UpdateSharedLinkOnFileRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val: SerializedData): UpdateSharedLinkOnFileRequestBodySharedLinkField;
export declare function serializeUpdateSharedLinkOnFileRequestBody(val: UpdateSharedLinkOnFileRequestBody): SerializedData;
export declare function deserializeUpdateSharedLinkOnFileRequestBody(val: SerializedData): UpdateSharedLinkOnFileRequestBody;
export declare function serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val: RemoveSharedLinkFromFileRequestBodySharedLinkField): SerializedData;
export declare function deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val: SerializedData): RemoveSharedLinkFromFileRequestBodySharedLinkField;
export declare function serializeRemoveSharedLinkFromFileRequestBody(val: RemoveSharedLinkFromFileRequestBody): SerializedData;
export declare function deserializeRemoveSharedLinkFromFileRequestBody(val: SerializedData): RemoveSharedLinkFromFileRequestBody;
//# sourceMappingURL=sharedLinksFiles.generated.d.ts.map