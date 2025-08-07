import { CollaborationAllowlistEntries } from '../schemas/collaborationAllowlistEntries.generated.js';
import { CollaborationAllowlistEntry } from '../schemas/collaborationAllowlistEntry.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateCollaborationWhitelistEntryOptionals {
    readonly headers: CreateCollaborationWhitelistEntryHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateCollaborationWhitelistEntryOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateCollaborationWhitelistEntryOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateCollaborationWhitelistEntryOptionalsInput {
    readonly headers?: CreateCollaborationWhitelistEntryHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetCollaborationWhitelistEntryByIdOptionals {
    readonly headers: GetCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetCollaborationWhitelistEntryByIdOptionalsInput {
    readonly headers?: GetCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteCollaborationWhitelistEntryByIdOptionals {
    readonly headers: DeleteCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteCollaborationWhitelistEntryByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteCollaborationWhitelistEntryByIdOptionalsInput {
    readonly headers?: DeleteCollaborationWhitelistEntryByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetCollaborationWhitelistEntriesQueryParams {
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetCollaborationWhitelistEntriesHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistEntriesHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistEntriesHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistEntriesHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type CreateCollaborationWhitelistEntryRequestBodyDirectionField = 'inbound' | 'outbound' | 'both' | string;
export interface CreateCollaborationWhitelistEntryRequestBody {
    /**
     * The domain to add to the list of allowed domains. */
    readonly domain: string;
    /**
     * The direction in which to allow collaborations. */
    readonly direction: CreateCollaborationWhitelistEntryRequestBodyDirectionField;
    readonly rawData?: SerializedData;
}
export declare class CreateCollaborationWhitelistEntryHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateCollaborationWhitelistEntryHeaders, 'extraHeaders'> & Partial<Pick<CreateCollaborationWhitelistEntryHeaders, 'extraHeaders'>>);
}
export interface CreateCollaborationWhitelistEntryHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetCollaborationWhitelistEntryByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'> & Partial<Pick<GetCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>>);
}
export interface GetCollaborationWhitelistEntryByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteCollaborationWhitelistEntryByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'> & Partial<Pick<DeleteCollaborationWhitelistEntryByIdHeaders, 'extraHeaders'>>);
}
export interface DeleteCollaborationWhitelistEntryByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CollaborationAllowlistEntriesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<CollaborationAllowlistEntriesManager, 'networkSession' | 'getCollaborationWhitelistEntries' | 'createCollaborationWhitelistEntry' | 'getCollaborationWhitelistEntryById' | 'deleteCollaborationWhitelistEntryById'> & Partial<Pick<CollaborationAllowlistEntriesManager, 'networkSession'>>);
    /**
     * Returns the list domains that have been deemed safe to create collaborations
     * for within the current enterprise.
     * @param {GetCollaborationWhitelistEntriesQueryParams} queryParams Query parameters of getCollaborationWhitelistEntries method
     * @param {GetCollaborationWhitelistEntriesHeadersInput} headersInput Headers of getCollaborationWhitelistEntries method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<CollaborationAllowlistEntries>}
     */
    getCollaborationWhitelistEntries(queryParams?: GetCollaborationWhitelistEntriesQueryParams, headersInput?: GetCollaborationWhitelistEntriesHeadersInput, cancellationToken?: CancellationToken): Promise<CollaborationAllowlistEntries>;
    /**
     * Creates a new entry in the list of allowed domains to allow
     * collaboration for.
     * @param {CreateCollaborationWhitelistEntryRequestBody} requestBody Request body of createCollaborationWhitelistEntry method
     * @param {CreateCollaborationWhitelistEntryOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationAllowlistEntry>}
     */
    createCollaborationWhitelistEntry(requestBody: CreateCollaborationWhitelistEntryRequestBody, optionalsInput?: CreateCollaborationWhitelistEntryOptionalsInput): Promise<CollaborationAllowlistEntry>;
    /**
       * Returns a domain that has been deemed safe to create collaborations
       * for within the current enterprise.
       * @param {string} collaborationWhitelistEntryId The ID of the entry in the list.
      Example: "213123"
       * @param {GetCollaborationWhitelistEntryByIdOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationAllowlistEntry>}
       */
    getCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string, optionalsInput?: GetCollaborationWhitelistEntryByIdOptionalsInput): Promise<CollaborationAllowlistEntry>;
    /**
       * Removes a domain from the list of domains that have been deemed safe to create
       * collaborations for within the current enterprise.
       * @param {string} collaborationWhitelistEntryId The ID of the entry in the list.
      Example: "213123"
       * @param {DeleteCollaborationWhitelistEntryByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId: string, optionalsInput?: DeleteCollaborationWhitelistEntryByIdOptionalsInput): Promise<undefined>;
}
export interface CollaborationAllowlistEntriesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val: CreateCollaborationWhitelistEntryRequestBodyDirectionField): SerializedData;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val: SerializedData): CreateCollaborationWhitelistEntryRequestBodyDirectionField;
export declare function serializeCreateCollaborationWhitelistEntryRequestBody(val: CreateCollaborationWhitelistEntryRequestBody): SerializedData;
export declare function deserializeCreateCollaborationWhitelistEntryRequestBody(val: SerializedData): CreateCollaborationWhitelistEntryRequestBody;
