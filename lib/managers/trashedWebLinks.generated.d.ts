import { TrashWebLinkRestored } from '../schemas/trashWebLinkRestored.generated.js';
import { TrashWebLink } from '../schemas/trashWebLink.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class RestoreWeblinkFromTrashOptionals {
    readonly requestBody: RestoreWeblinkFromTrashRequestBody;
    readonly queryParams: RestoreWeblinkFromTrashQueryParams;
    readonly headers: RestoreWeblinkFromTrashHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RestoreWeblinkFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<RestoreWeblinkFromTrashOptionals, 'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface RestoreWeblinkFromTrashOptionalsInput {
    readonly requestBody?: RestoreWeblinkFromTrashRequestBody;
    readonly queryParams?: RestoreWeblinkFromTrashQueryParams;
    readonly headers?: RestoreWeblinkFromTrashHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetTrashedWebLinkByIdOptionals {
    readonly queryParams: GetTrashedWebLinkByIdQueryParams;
    readonly headers: GetTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetTrashedWebLinkByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetTrashedWebLinkByIdOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetTrashedWebLinkByIdOptionalsInput {
    readonly queryParams?: GetTrashedWebLinkByIdQueryParams;
    readonly headers?: GetTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteTrashedWebLinkByIdOptionals {
    readonly headers: DeleteTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteTrashedWebLinkByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteTrashedWebLinkByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteTrashedWebLinkByIdOptionalsInput {
    readonly headers?: DeleteTrashedWebLinkByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreWeblinkFromTrashRequestBodyParentField {
    /**
     * The ID of parent item. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface RestoreWeblinkFromTrashRequestBody {
    /**
     * An optional new name for the web link. */
    readonly name?: string;
    readonly parent?: RestoreWeblinkFromTrashRequestBodyParentField;
    readonly rawData?: SerializedData;
}
export interface RestoreWeblinkFromTrashQueryParams {
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
export declare class RestoreWeblinkFromTrashHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RestoreWeblinkFromTrashHeaders, 'extraHeaders'> & Partial<Pick<RestoreWeblinkFromTrashHeaders, 'extraHeaders'>>);
}
export interface RestoreWeblinkFromTrashHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetTrashedWebLinkByIdQueryParams {
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
export declare class GetTrashedWebLinkByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetTrashedWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<GetTrashedWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface GetTrashedWebLinkByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteTrashedWebLinkByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteTrashedWebLinkByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteTrashedWebLinkByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteTrashedWebLinkByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TrashedWebLinksManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TrashedWebLinksManager, 'networkSession' | 'restoreWeblinkFromTrash' | 'getTrashedWebLinkById' | 'deleteTrashedWebLinkById'> & Partial<Pick<TrashedWebLinksManager, 'networkSession'>>);
    /**
       * Restores a web link that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the  web link to in case
       * the original folder has been deleted.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {RestoreWeblinkFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashWebLinkRestored>}
       */
    restoreWeblinkFromTrash(webLinkId: string, optionalsInput?: RestoreWeblinkFromTrashOptionalsInput): Promise<TrashWebLinkRestored>;
    /**
       * Retrieves a web link that has been moved to the trash.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetTrashedWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashWebLink>}
       */
    getTrashedWebLinkById(webLinkId: string, optionalsInput?: GetTrashedWebLinkByIdOptionalsInput): Promise<TrashWebLink>;
    /**
       * Permanently deletes a web link that is in the trash.
       * This action cannot be undone.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {DeleteTrashedWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteTrashedWebLinkById(webLinkId: string, optionalsInput?: DeleteTrashedWebLinkByIdOptionalsInput): Promise<undefined>;
}
export interface TrashedWebLinksManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeRestoreWeblinkFromTrashRequestBodyParentField(val: RestoreWeblinkFromTrashRequestBodyParentField): SerializedData;
export declare function deserializeRestoreWeblinkFromTrashRequestBodyParentField(val: SerializedData): RestoreWeblinkFromTrashRequestBodyParentField;
export declare function serializeRestoreWeblinkFromTrashRequestBody(val: RestoreWeblinkFromTrashRequestBody): SerializedData;
export declare function deserializeRestoreWeblinkFromTrashRequestBody(val: SerializedData): RestoreWeblinkFromTrashRequestBody;
//# sourceMappingURL=trashedWebLinks.generated.d.ts.map