import { FileFull } from '../schemas/fileFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class GetFileByIdOptionals {
    readonly queryParams: GetFileByIdQueryParams;
    readonly headers: GetFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileByIdOptionalsInput {
    readonly queryParams?: GetFileByIdQueryParams;
    readonly headers?: GetFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateFileByIdOptionals {
    readonly requestBody: UpdateFileByIdRequestBody;
    readonly queryParams: UpdateFileByIdQueryParams;
    readonly headers: UpdateFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateFileByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateFileByIdOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateFileByIdOptionalsInput {
    readonly requestBody?: UpdateFileByIdRequestBody;
    readonly queryParams?: UpdateFileByIdQueryParams;
    readonly headers?: UpdateFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteFileByIdOptionals {
    readonly headers: DeleteFileByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteFileByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteFileByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteFileByIdOptionalsInput {
    readonly headers?: DeleteFileByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CopyFileOptionals {
    readonly queryParams: CopyFileQueryParams;
    readonly headers: CopyFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CopyFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<CopyFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface CopyFileOptionalsInput {
    readonly queryParams?: CopyFileQueryParams;
    readonly headers?: CopyFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileThumbnailUrlOptionals {
    readonly queryParams: GetFileThumbnailUrlQueryParams;
    readonly headers: GetFileThumbnailUrlHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileThumbnailUrlOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileThumbnailUrlOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileThumbnailUrlOptionalsInput {
    readonly queryParams?: GetFileThumbnailUrlQueryParams;
    readonly headers?: GetFileThumbnailUrlHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileThumbnailByIdOptionals {
    readonly queryParams: GetFileThumbnailByIdQueryParams;
    readonly headers: GetFileThumbnailByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileThumbnailByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileThumbnailByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileThumbnailByIdOptionalsInput {
    readonly queryParams?: GetFileThumbnailByIdQueryParams;
    readonly headers?: GetFileThumbnailByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileByIdQueryParams {
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
}
export declare class GetFileByIdHeaders {
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
     * A header required to request specific `representations`
     * of a file. Use this in combination with the `fields` query
     * parameter to request a specific file representation.
     *
     * The general format for these representations is
     * `X-Rep-Hints: [...]` where `[...]` is one or many
     * hints in the format `[fileType?query]`.
     *
     * For example, to request a `png` representation in `32x32`
     * as well as `64x64` pixel dimensions provide the following
     * hints.
     *
     * `x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=64x64]`
     *
     * Additionally, a `text` representation is available for all
     * document file types in Box using the `[extracted_text]`
     * representation.
     *
     * `x-rep-hints: [extracted_text]`. */
    readonly xRepHints?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileByIdHeadersInput {
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
     * A header required to request specific `representations`
     * of a file. Use this in combination with the `fields` query
     * parameter to request a specific file representation.
     *
     * The general format for these representations is
     * `X-Rep-Hints: [...]` where `[...]` is one or many
     * hints in the format `[fileType?query]`.
     *
     * For example, to request a `png` representation in `32x32`
     * as well as `64x64` pixel dimensions provide the following
     * hints.
     *
     * `x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=64x64]`
     *
     * Additionally, a `text` representation is available for all
     * document file types in Box using the `[extracted_text]`
     * representation.
     *
     * `x-rep-hints: [extracted_text]`. */
    readonly xRepHints?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface UpdateFileByIdRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    /**
     * The input for `user_id` is optional. Moving to non-root folder is not allowed when `user_id` is present. Parent folder id should be zero when `user_id` is provided. */
    readonly userId?: string;
    readonly rawData?: SerializedData;
}
export type UpdateFileByIdRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface UpdateFileByIdRequestBodySharedLinkPermissionsField {
    /**
     * If the shared link allows for downloading of files.
     * This can only be set when `access` is set to
     * `open` or `company`. */
    readonly canDownload?: boolean;
    readonly rawData?: SerializedData;
}
export interface UpdateFileByIdRequestBodySharedLinkField {
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
    readonly access?: UpdateFileByIdRequestBodySharedLinkAccessField;
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
    readonly permissions?: UpdateFileByIdRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export type UpdateFileByIdRequestBodyLockAccessField = 'lock' | string;
export interface UpdateFileByIdRequestBodyLockField {
    /**
     * The type of this object. */
    readonly access?: UpdateFileByIdRequestBodyLockAccessField;
    /**
     * Defines the time at which the lock expires. */
    readonly expiresAt?: DateTime;
    /**
     * Defines if the file can be downloaded while it is locked. */
    readonly isDownloadPrevented?: boolean;
    readonly rawData?: SerializedData;
}
export type UpdateFileByIdRequestBodyPermissionsCanDownloadField = 'open' | 'company' | string;
export interface UpdateFileByIdRequestBodyPermissionsField {
    /**
     * Defines who is allowed to download this file. The possible
     * values are either `open` for everyone or `company` for
     * the other members of the user's enterprise.
     *
     * This setting overrides the download permissions that are
     * normally part of the `role` of a collaboration. When set to
     * `company`, this essentially removes the download option for
     * external users with `viewer` or `editor` a roles. */
    readonly canDownload?: UpdateFileByIdRequestBodyPermissionsCanDownloadField;
    readonly rawData?: SerializedData;
}
export interface UpdateFileByIdRequestBodyCollectionsField {
    /**
     * The unique identifier for this object. */
    readonly id?: string;
    /**
     * The type for this object. */
    readonly type?: string;
    readonly rawData?: SerializedData;
}
export interface UpdateFileByIdRequestBody {
    /**
     * An optional different name for the file. This can be used to
     * rename the file.
     *
     * File names must be unique within their parent folder. The name check is case-insensitive, so a file
     * named `New File` cannot be created in a parent folder that already contains a folder named `new file`. */
    readonly name?: string;
    /**
     * The description for a file. This can be seen in the right-hand sidebar panel
     * when viewing a file in the Box web app. Additionally, this index is used in
     * the search index of the file, allowing users to find the file by the content
     * in the description. */
    readonly description?: string;
    readonly parent?: UpdateFileByIdRequestBodyParentField;
    readonly sharedLink?: UpdateFileByIdRequestBodySharedLinkField | null;
    /**
     * Defines a lock on an item. This prevents the item from being
     * moved, renamed, or otherwise changed by anyone other than the user
     * who created the lock.
     *
     * Set this to `null` to remove the lock. */
    readonly lock?: UpdateFileByIdRequestBodyLockField | null;
    /**
     * The retention expiration timestamp for the given file. This
     * date cannot be shortened once set on a file. */
    readonly dispositionAt?: DateTime;
    /**
     * Defines who can download a file. */
    readonly permissions?: UpdateFileByIdRequestBodyPermissionsField;
    /**
     * An array of collections to make this file
     * a member of. Currently
     * we only support the `favorites` collection.
     *
     * To get the ID for a collection, use the
     * [List all collections][1] endpoint.
     *
     * Passing an empty array `[]` or `null` will remove
     * the file from all collections.
     *
     * [1]: e://get-collections */
    readonly collections?: readonly UpdateFileByIdRequestBodyCollectionsField[] | null;
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
    readonly rawData?: SerializedData;
}
export interface UpdateFileByIdQueryParams {
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
export declare class UpdateFileByIdHeaders {
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
    constructor(fields: Omit<UpdateFileByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateFileByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateFileByIdHeadersInput {
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
export declare class DeleteFileByIdHeaders {
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
    constructor(fields: Omit<DeleteFileByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteFileByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteFileByIdHeadersInput {
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
export interface CopyFileRequestBodyParentField {
    /**
     * The ID of folder to copy the file to. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CopyFileRequestBody {
    /**
     * An optional new name for the copied file.
     *
     * There are some restrictions to the file name. Names containing
     * non-printable ASCII characters, forward and backward slashes
     * (`/`, `\`), and protected names like `.` and `..` are
     * automatically sanitized by removing the non-allowed
     * characters. */
    readonly name?: string;
    /**
     * An optional ID of the specific file version to copy. */
    readonly version?: string;
    /**
     * The destination folder to copy the file to. */
    readonly parent: CopyFileRequestBodyParentField;
    readonly rawData?: SerializedData;
}
export interface CopyFileQueryParams {
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
export declare class CopyFileHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CopyFileHeaders, 'extraHeaders'> & Partial<Pick<CopyFileHeaders, 'extraHeaders'>>);
}
export interface CopyFileHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFileThumbnailUrlExtension = 'png' | 'jpg' | string;
export interface GetFileThumbnailUrlQueryParams {
    /**
     * The minimum height of the thumbnail. */
    readonly minHeight?: number;
    /**
     * The minimum width of the thumbnail. */
    readonly minWidth?: number;
    /**
     * The maximum height of the thumbnail. */
    readonly maxHeight?: number;
    /**
     * The maximum width of the thumbnail. */
    readonly maxWidth?: number;
}
export declare class GetFileThumbnailUrlHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileThumbnailUrlHeaders, 'extraHeaders'> & Partial<Pick<GetFileThumbnailUrlHeaders, 'extraHeaders'>>);
}
export interface GetFileThumbnailUrlHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetFileThumbnailByIdExtension = 'png' | 'jpg' | string;
export interface GetFileThumbnailByIdQueryParams {
    /**
     * The minimum height of the thumbnail. */
    readonly minHeight?: number;
    /**
     * The minimum width of the thumbnail. */
    readonly minWidth?: number;
    /**
     * The maximum height of the thumbnail. */
    readonly maxHeight?: number;
    /**
     * The maximum width of the thumbnail. */
    readonly maxWidth?: number;
}
export declare class GetFileThumbnailByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileThumbnailByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileThumbnailByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileThumbnailByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FilesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FilesManager, 'networkSession' | 'getFileById' | 'updateFileById' | 'deleteFileById' | 'copyFile' | 'getFileThumbnailUrl' | 'getFileThumbnailById'> & Partial<Pick<FilesManager, 'networkSession'>>);
    /**
       * Retrieves the details about a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    getFileById(fileId: string, optionalsInput?: GetFileByIdOptionalsInput): Promise<FileFull>;
    /**
       * Updates a file. This can be used to rename or move a file,
       * create a shared link, or lock a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    updateFileById(fileId: string, optionalsInput?: UpdateFileByIdOptionalsInput): Promise<FileFull>;
    /**
       * Deletes a file, either permanently or by moving it to
       * the trash.
       *
       * The the enterprise settings determine whether the item will
       * be permanently deleted from Box or moved to the trash.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteFileById(fileId: string, optionalsInput?: DeleteFileByIdOptionalsInput): Promise<undefined>;
    /**
       * Creates a copy of a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CopyFileRequestBody} requestBody Request body of copyFile method
       * @param {CopyFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    copyFile(fileId: string, requestBody: CopyFileRequestBody, optionalsInput?: CopyFileOptionalsInput): Promise<FileFull>;
    /**
       * Retrieves a thumbnail, or smaller image representation, of a file.
       *
       * Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in
       * the `.png` format and sizes of `32x32`, `160x160`, and `320x320`
       * can be returned in the `.jpg` format.
       *
       * Thumbnails can be generated for the image and video file formats listed
       * [found on our community site][1].
       *
       * [1]: https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileThumbnailUrlExtension} extension The file format for the thumbnail.
      Example: "png"
       * @param {GetFileThumbnailUrlOptionalsInput} optionalsInput
       * @returns {Promise<string>}
       */
    getFileThumbnailUrl(fileId: string, extension: GetFileThumbnailUrlExtension, optionalsInput?: GetFileThumbnailUrlOptionalsInput): Promise<string>;
    /**
       * Retrieves a thumbnail, or smaller image representation, of a file.
       *
       * Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in
       * the `.png` format and sizes of `32x32`, `160x160`, and `320x320`
       * can be returned in the `.jpg` format.
       *
       * Thumbnails can be generated for the image and video file formats listed
       * [found on our community site][1].
       *
       * [1]: https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileThumbnailByIdExtension} extension The file format for the thumbnail.
      Example: "png"
       * @param {GetFileThumbnailByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined | ByteStream>}
       */
    getFileThumbnailById(fileId: string, extension: GetFileThumbnailByIdExtension, optionalsInput?: GetFileThumbnailByIdOptionalsInput): Promise<undefined | ByteStream>;
}
export interface FilesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeUpdateFileByIdRequestBodyParentField(val: UpdateFileByIdRequestBodyParentField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyParentField(val: SerializedData): UpdateFileByIdRequestBodyParentField;
export declare function serializeUpdateFileByIdRequestBodySharedLinkAccessField(val: UpdateFileByIdRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodySharedLinkAccessField(val: SerializedData): UpdateFileByIdRequestBodySharedLinkAccessField;
export declare function serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val: UpdateFileByIdRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateFileByIdRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateFileByIdRequestBodySharedLinkField(val: UpdateFileByIdRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodySharedLinkField(val: SerializedData): UpdateFileByIdRequestBodySharedLinkField;
export declare function serializeUpdateFileByIdRequestBodyLockAccessField(val: UpdateFileByIdRequestBodyLockAccessField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyLockAccessField(val: SerializedData): UpdateFileByIdRequestBodyLockAccessField;
export declare function serializeUpdateFileByIdRequestBodyLockField(val: UpdateFileByIdRequestBodyLockField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyLockField(val: SerializedData): UpdateFileByIdRequestBodyLockField;
export declare function serializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val: UpdateFileByIdRequestBodyPermissionsCanDownloadField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val: SerializedData): UpdateFileByIdRequestBodyPermissionsCanDownloadField;
export declare function serializeUpdateFileByIdRequestBodyPermissionsField(val: UpdateFileByIdRequestBodyPermissionsField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyPermissionsField(val: SerializedData): UpdateFileByIdRequestBodyPermissionsField;
export declare function serializeUpdateFileByIdRequestBodyCollectionsField(val: UpdateFileByIdRequestBodyCollectionsField): SerializedData;
export declare function deserializeUpdateFileByIdRequestBodyCollectionsField(val: SerializedData): UpdateFileByIdRequestBodyCollectionsField;
export declare function serializeUpdateFileByIdRequestBody(val: UpdateFileByIdRequestBody): SerializedData;
export declare function deserializeUpdateFileByIdRequestBody(val: SerializedData): UpdateFileByIdRequestBody;
export declare function serializeCopyFileRequestBodyParentField(val: CopyFileRequestBodyParentField): SerializedData;
export declare function deserializeCopyFileRequestBodyParentField(val: SerializedData): CopyFileRequestBodyParentField;
export declare function serializeCopyFileRequestBody(val: CopyFileRequestBody): SerializedData;
export declare function deserializeCopyFileRequestBody(val: SerializedData): CopyFileRequestBody;
export declare function serializeGetFileThumbnailUrlExtension(val: GetFileThumbnailUrlExtension): SerializedData;
export declare function deserializeGetFileThumbnailUrlExtension(val: SerializedData): GetFileThumbnailUrlExtension;
export declare function serializeGetFileThumbnailByIdExtension(val: GetFileThumbnailByIdExtension): SerializedData;
export declare function deserializeGetFileThumbnailByIdExtension(val: SerializedData): GetFileThumbnailByIdExtension;
//# sourceMappingURL=files.generated.d.ts.map