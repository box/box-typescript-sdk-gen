import { WebLink } from '../schemas/webLink.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class FindWebLinkForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindWebLinkForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindWebLinkForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindWebLinkForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetSharedLinkForWebLinkOptionals {
    readonly headers: GetSharedLinkForWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetSharedLinkForWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetSharedLinkForWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetSharedLinkForWebLinkOptionalsInput {
    readonly headers?: GetSharedLinkForWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class AddShareLinkToWebLinkOptionals {
    readonly headers: AddShareLinkToWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AddShareLinkToWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AddShareLinkToWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AddShareLinkToWebLinkOptionalsInput {
    readonly headers?: AddShareLinkToWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateSharedLinkOnWebLinkOptionals {
    readonly headers: UpdateSharedLinkOnWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateSharedLinkOnWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateSharedLinkOnWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateSharedLinkOnWebLinkOptionalsInput {
    readonly headers?: UpdateSharedLinkOnWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RemoveSharedLinkFromWebLinkOptionals {
    readonly headers: RemoveSharedLinkFromWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RemoveSharedLinkFromWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RemoveSharedLinkFromWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RemoveSharedLinkFromWebLinkOptionalsInput {
    readonly headers?: RemoveSharedLinkFromWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface FindWebLinkForSharedLinkQueryParams {
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
export declare class FindWebLinkForSharedLinkHeaders {
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
    constructor(fields: Omit<FindWebLinkForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindWebLinkForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindWebLinkForSharedLinkHeadersInput {
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
export interface GetSharedLinkForWebLinkQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class GetSharedLinkForWebLinkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetSharedLinkForWebLinkHeaders, 'extraHeaders'> & Partial<Pick<GetSharedLinkForWebLinkHeaders, 'extraHeaders'>>);
}
export interface GetSharedLinkForWebLinkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type AddShareLinkToWebLinkRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField {
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
     * This value can only be `true` is `type` is `file`. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToWebLinkRequestBodySharedLinkField {
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
    readonly access?: AddShareLinkToWebLinkRequestBodySharedLinkAccessField;
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
    readonly permissions?: AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToWebLinkRequestBody {
    /**
     * The settings for the shared link to create on the web link.
     *
     * Use an empty object (`{}`) to use the default settings for shared
     * links. */
    readonly sharedLink?: AddShareLinkToWebLinkRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export interface AddShareLinkToWebLinkQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class AddShareLinkToWebLinkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AddShareLinkToWebLinkHeaders, 'extraHeaders'> & Partial<Pick<AddShareLinkToWebLinkHeaders, 'extraHeaders'>>);
}
export interface AddShareLinkToWebLinkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField {
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
     * This value can only be `true` is `type` is `file`. */
    readonly canEdit?: boolean;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnWebLinkRequestBodySharedLinkField {
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
    readonly access?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
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
    readonly permissions?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnWebLinkRequestBody {
    /**
     * The settings for the shared link to update. */
    readonly sharedLink?: UpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export interface UpdateSharedLinkOnWebLinkQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class UpdateSharedLinkOnWebLinkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateSharedLinkOnWebLinkHeaders, 'extraHeaders'> & Partial<Pick<UpdateSharedLinkOnWebLinkHeaders, 'extraHeaders'>>);
}
export interface UpdateSharedLinkOnWebLinkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface RemoveSharedLinkFromWebLinkRequestBodySharedLinkField {
    readonly rawData?: SerializedData;
}
export interface RemoveSharedLinkFromWebLinkRequestBody {
    /**
     * By setting this value to `null`, the shared link
     * is removed from the web link. */
    readonly sharedLink?: RemoveSharedLinkFromWebLinkRequestBodySharedLinkField | null;
    readonly rawData?: SerializedData;
}
export interface RemoveSharedLinkFromWebLinkQueryParams {
    /**
     * Explicitly request the `shared_link` fields
     * to be returned for this item. */
    readonly fields: string;
}
export declare class RemoveSharedLinkFromWebLinkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RemoveSharedLinkFromWebLinkHeaders, 'extraHeaders'> & Partial<Pick<RemoveSharedLinkFromWebLinkHeaders, 'extraHeaders'>>);
}
export interface RemoveSharedLinkFromWebLinkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksWebLinksManager, 'networkSession' | 'findWebLinkForSharedLink' | 'getSharedLinkForWebLink' | 'addShareLinkToWebLink' | 'updateSharedLinkOnWebLink' | 'removeSharedLinkFromWebLink'> & Partial<Pick<SharedLinksWebLinksManager, 'networkSession'>>);
    /**
     * Returns the web link represented by a shared link.
     *
     * A shared web link can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared web link when only given a shared link.
     * @param {FindWebLinkForSharedLinkQueryParams} queryParams Query parameters of findWebLinkForSharedLink method
     * @param {FindWebLinkForSharedLinkHeadersInput} headersInput Headers of findWebLinkForSharedLink method
     * @param {FindWebLinkForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<WebLink>}
     */
    findWebLinkForSharedLink(queryParams: FindWebLinkForSharedLinkQueryParams | undefined, headersInput: FindWebLinkForSharedLinkHeadersInput, optionalsInput?: FindWebLinkForSharedLinkOptionalsInput): Promise<WebLink>;
    /**
       * Gets the information for a shared link on a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetSharedLinkForWebLinkQueryParams} queryParams Query parameters of getSharedLinkForWebLink method
       * @param {GetSharedLinkForWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    getSharedLinkForWebLink(webLinkId: string, queryParams: GetSharedLinkForWebLinkQueryParams, optionalsInput?: GetSharedLinkForWebLinkOptionalsInput): Promise<WebLink>;
    /**
       * Adds a shared link to a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {AddShareLinkToWebLinkRequestBody} requestBody Request body of addShareLinkToWebLink method
       * @param {AddShareLinkToWebLinkQueryParams} queryParams Query parameters of addShareLinkToWebLink method
       * @param {AddShareLinkToWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    addShareLinkToWebLink(webLinkId: string, requestBody: AddShareLinkToWebLinkRequestBody | undefined, queryParams: AddShareLinkToWebLinkQueryParams, optionalsInput?: AddShareLinkToWebLinkOptionalsInput): Promise<WebLink>;
    /**
       * Updates a shared link on a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {UpdateSharedLinkOnWebLinkRequestBody} requestBody Request body of updateSharedLinkOnWebLink method
       * @param {UpdateSharedLinkOnWebLinkQueryParams} queryParams Query parameters of updateSharedLinkOnWebLink method
       * @param {UpdateSharedLinkOnWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    updateSharedLinkOnWebLink(webLinkId: string, requestBody: UpdateSharedLinkOnWebLinkRequestBody | undefined, queryParams: UpdateSharedLinkOnWebLinkQueryParams, optionalsInput?: UpdateSharedLinkOnWebLinkOptionalsInput): Promise<WebLink>;
    /**
       * Removes a shared link from a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {RemoveSharedLinkFromWebLinkRequestBody} requestBody Request body of removeSharedLinkFromWebLink method
       * @param {RemoveSharedLinkFromWebLinkQueryParams} queryParams Query parameters of removeSharedLinkFromWebLink method
       * @param {RemoveSharedLinkFromWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    removeSharedLinkFromWebLink(webLinkId: string, requestBody: RemoveSharedLinkFromWebLinkRequestBody | undefined, queryParams: RemoveSharedLinkFromWebLinkQueryParams, optionalsInput?: RemoveSharedLinkFromWebLinkOptionalsInput): Promise<WebLink>;
}
export interface SharedLinksWebLinksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val: AddShareLinkToWebLinkRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val: SerializedData): AddShareLinkToWebLinkRequestBodySharedLinkAccessField;
export declare function serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val: AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val: SerializedData): AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField;
export declare function serializeAddShareLinkToWebLinkRequestBodySharedLinkField(val: AddShareLinkToWebLinkRequestBodySharedLinkField): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(val: SerializedData): AddShareLinkToWebLinkRequestBodySharedLinkField;
export declare function serializeAddShareLinkToWebLinkRequestBody(val: AddShareLinkToWebLinkRequestBody): SerializedData;
export declare function deserializeAddShareLinkToWebLinkRequestBody(val: SerializedData): AddShareLinkToWebLinkRequestBody;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val: UpdateSharedLinkOnWebLinkRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBodySharedLinkField;
export declare function serializeUpdateSharedLinkOnWebLinkRequestBody(val: UpdateSharedLinkOnWebLinkRequestBody): SerializedData;
export declare function deserializeUpdateSharedLinkOnWebLinkRequestBody(val: SerializedData): UpdateSharedLinkOnWebLinkRequestBody;
export declare function serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val: RemoveSharedLinkFromWebLinkRequestBodySharedLinkField): SerializedData;
export declare function deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val: SerializedData): RemoveSharedLinkFromWebLinkRequestBodySharedLinkField;
export declare function serializeRemoveSharedLinkFromWebLinkRequestBody(val: RemoveSharedLinkFromWebLinkRequestBody): SerializedData;
export declare function deserializeRemoveSharedLinkFromWebLinkRequestBody(val: SerializedData): RemoveSharedLinkFromWebLinkRequestBody;
