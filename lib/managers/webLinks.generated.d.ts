import { WebLink } from '../schemas/webLink.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { DateTime } from '../internal/utils.js';
export declare class CreateWebLinkOptionals {
    readonly headers: CreateWebLinkHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateWebLinkOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateWebLinkOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateWebLinkOptionalsInput {
    readonly headers?: CreateWebLinkHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetWebLinkByIdOptionals {
    readonly headers: GetWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetWebLinkByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetWebLinkByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetWebLinkByIdOptionalsInput {
    readonly headers?: GetWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateWebLinkByIdOptionals {
    readonly requestBody: UpdateWebLinkByIdRequestBody;
    readonly headers: UpdateWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateWebLinkByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'> & Partial<Pick<UpdateWebLinkByIdOptionals, 'requestBody' | 'headers' | 'cancellationToken'>>);
}
export interface UpdateWebLinkByIdOptionalsInput {
    readonly requestBody?: UpdateWebLinkByIdRequestBody;
    readonly headers?: UpdateWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteWebLinkByIdOptionals {
    readonly headers: DeleteWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteWebLinkByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteWebLinkByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteWebLinkByIdOptionalsInput {
    readonly headers?: DeleteWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface CreateWebLinkRequestBodyParentField {
    /**
     * The ID of parent folder. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface CreateWebLinkRequestBody {
    /**
     * The URL that this web link links to. Must start with
     * `"http://"` or `"https://"`. */
    readonly url: string;
    /**
     * The parent folder to create the web link within. */
    readonly parent: CreateWebLinkRequestBodyParentField;
    /**
     * Name of the web link. Defaults to the URL if not set. */
    readonly name?: string;
    /**
     * Description of the web link. */
    readonly description?: string;
    readonly rawData?: SerializedData;
}
export declare class CreateWebLinkHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateWebLinkHeaders, 'extraHeaders'> & Partial<Pick<CreateWebLinkHeaders, 'extraHeaders'>>);
}
export interface CreateWebLinkHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetWebLinkByIdHeaders {
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
    constructor(fields: Omit<GetWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<GetWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface GetWebLinkByIdHeadersInput {
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
export interface UpdateWebLinkByIdRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    /**
     * The input for `user_id` is optional. Moving to non-root folder is not allowed when `user_id` is present. Parent folder id should be zero when `user_id` is provided. */
    readonly userId?: string;
    readonly rawData?: SerializedData;
}
export type UpdateWebLinkByIdRequestBodySharedLinkAccessField = 'open' | 'company' | 'collaborators' | string;
export interface UpdateWebLinkByIdRequestBodySharedLinkField {
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
    readonly access?: UpdateWebLinkByIdRequestBodySharedLinkAccessField;
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
    readonly rawData?: SerializedData;
}
export interface UpdateWebLinkByIdRequestBody {
    /**
     * The new URL that the web link links to. Must start with
     * `"http://"` or `"https://"`. */
    readonly url?: string;
    readonly parent?: UpdateWebLinkByIdRequestBodyParentField;
    /**
     * A new name for the web link. Defaults to the URL if not set. */
    readonly name?: string;
    /**
     * A new description of the web link. */
    readonly description?: string;
    /**
     * The settings for the shared link to update. */
    readonly sharedLink?: UpdateWebLinkByIdRequestBodySharedLinkField;
    readonly rawData?: SerializedData;
}
export declare class UpdateWebLinkByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<UpdateWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface UpdateWebLinkByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteWebLinkByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteWebLinkByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class WebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<WebLinksManager, 'networkSession' | 'createWebLink' | 'getWebLinkById' | 'updateWebLinkById' | 'deleteWebLinkById'> & Partial<Pick<WebLinksManager, 'networkSession'>>);
    /**
     * Creates a web link object within a folder.
     * @param {CreateWebLinkRequestBody} requestBody Request body of createWebLink method
     * @param {CreateWebLinkOptionalsInput} optionalsInput
     * @returns {Promise<WebLink>}
     */
    createWebLink(requestBody: CreateWebLinkRequestBody, optionalsInput?: CreateWebLinkOptionalsInput): Promise<WebLink>;
    /**
       * Retrieve information about a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    getWebLinkById(webLinkId: string, optionalsInput?: GetWebLinkByIdOptionalsInput): Promise<WebLink>;
    /**
       * Updates a web link object.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {UpdateWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    updateWebLinkById(webLinkId: string, optionalsInput?: UpdateWebLinkByIdOptionalsInput): Promise<WebLink>;
    /**
       * Deletes a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {DeleteWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteWebLinkById(webLinkId: string, optionalsInput?: DeleteWebLinkByIdOptionalsInput): Promise<undefined>;
}
export interface WebLinksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateWebLinkRequestBodyParentField(val: CreateWebLinkRequestBodyParentField): SerializedData;
export declare function deserializeCreateWebLinkRequestBodyParentField(val: SerializedData): CreateWebLinkRequestBodyParentField;
export declare function serializeCreateWebLinkRequestBody(val: CreateWebLinkRequestBody): SerializedData;
export declare function deserializeCreateWebLinkRequestBody(val: SerializedData): CreateWebLinkRequestBody;
export declare function serializeUpdateWebLinkByIdRequestBodyParentField(val: UpdateWebLinkByIdRequestBodyParentField): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBodyParentField(val: SerializedData): UpdateWebLinkByIdRequestBodyParentField;
export declare function serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val: UpdateWebLinkByIdRequestBodySharedLinkAccessField): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val: SerializedData): UpdateWebLinkByIdRequestBodySharedLinkAccessField;
export declare function serializeUpdateWebLinkByIdRequestBodySharedLinkField(val: UpdateWebLinkByIdRequestBodySharedLinkField): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val: SerializedData): UpdateWebLinkByIdRequestBodySharedLinkField;
export declare function serializeUpdateWebLinkByIdRequestBody(val: UpdateWebLinkByIdRequestBody): SerializedData;
export declare function deserializeUpdateWebLinkByIdRequestBody(val: SerializedData): UpdateWebLinkByIdRequestBody;
//# sourceMappingURL=webLinks.generated.d.ts.map