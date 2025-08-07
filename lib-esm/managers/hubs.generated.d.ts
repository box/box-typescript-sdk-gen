import { HubsV2025R0 } from '../schemas/v2025R0/hubsV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { HubV2025R0 } from '../schemas/v2025R0/hubV2025R0.generated.js';
import { HubCreateRequestV2025R0 } from '../schemas/v2025R0/hubCreateRequestV2025R0.generated.js';
import { HubUpdateRequestV2025R0 } from '../schemas/v2025R0/hubUpdateRequestV2025R0.generated.js';
import { HubCopyRequestV2025R0 } from '../schemas/v2025R0/hubCopyRequestV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateHubV2025R0Optionals {
    readonly headers: CreateHubV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateHubV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateHubV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateHubV2025R0OptionalsInput {
    readonly headers?: CreateHubV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetHubByIdV2025R0Optionals {
    readonly headers: GetHubByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetHubByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetHubByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetHubByIdV2025R0OptionalsInput {
    readonly headers?: GetHubByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateHubByIdV2025R0Optionals {
    readonly headers: UpdateHubByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateHubByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateHubByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateHubByIdV2025R0OptionalsInput {
    readonly headers?: UpdateHubByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteHubByIdV2025R0Optionals {
    readonly headers: DeleteHubByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteHubByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteHubByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteHubByIdV2025R0OptionalsInput {
    readonly headers?: DeleteHubByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CopyHubV2025R0Optionals {
    readonly headers: CopyHubV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CopyHubV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CopyHubV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CopyHubV2025R0OptionalsInput {
    readonly headers?: CopyHubV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetHubsV2025R0QueryParamsDirectionField = 'ASC' | 'DESC' | string;
export interface GetHubsV2025R0QueryParams {
    /**
     * The query string to search for hubs. */
    readonly query?: string;
    /**
     * The scope of the hubs to retrieve. Possible values include `editable`,
     * `view_only`, and `all`. Default is `all`. */
    readonly scope?: string;
    /**
     * The field to sort results by.
     * Possible values include `name`, `updated_at`,
     * `last_accessed_at`, `view_count`, and `relevance`.
     * Default is `relevance`. */
    readonly sort?: string;
    /**
     * The direction to sort results in. This can be either in alphabetical ascending
     * (`ASC`) or descending (`DESC`) order. */
    readonly direction?: GetHubsV2025R0QueryParamsDirectionField;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetHubsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetHubsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetHubsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetHubsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateHubV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateHubV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CreateHubV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CreateHubV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type GetEnterpriseHubsV2025R0QueryParamsDirectionField = 'ASC' | 'DESC' | string;
export interface GetEnterpriseHubsV2025R0QueryParams {
    /**
     * The query string to search for hubs. */
    readonly query?: string;
    /**
     * The field to sort results by.
     * Possible values include `name`, `updated_at`,
     * `last_accessed_at`, `view_count`, and `relevance`.
     * Default is `relevance`. */
    readonly sort?: string;
    /**
     * The direction to sort results in. This can be either in alphabetical ascending
     * (`ASC`) or descending (`DESC`) order. */
    readonly direction?: GetEnterpriseHubsV2025R0QueryParamsDirectionField;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetEnterpriseHubsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetEnterpriseHubsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetEnterpriseHubsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetEnterpriseHubsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetHubByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetHubByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetHubByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetHubByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UpdateHubByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateHubByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<UpdateHubByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface UpdateHubByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteHubByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteHubByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<DeleteHubByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface DeleteHubByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CopyHubV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CopyHubV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CopyHubV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CopyHubV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class HubsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<HubsManager, 'networkSession' | 'getHubsV2025R0' | 'createHubV2025R0' | 'getEnterpriseHubsV2025R0' | 'getHubByIdV2025R0' | 'updateHubByIdV2025R0' | 'deleteHubByIdV2025R0' | 'copyHubV2025R0'> & Partial<Pick<HubsManager, 'networkSession'>>);
    /**
     * Retrieves all hubs for requesting user.
     * @param {GetHubsV2025R0QueryParams} queryParams Query parameters of getHubsV2025R0 method
     * @param {GetHubsV2025R0HeadersInput} headersInput Headers of getHubsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<HubsV2025R0>}
     */
    getHubsV2025R0(queryParams?: GetHubsV2025R0QueryParams, headersInput?: GetHubsV2025R0HeadersInput, cancellationToken?: CancellationToken): Promise<HubsV2025R0>;
    /**
     * Creates a new Hub.
     * @param {HubCreateRequestV2025R0} requestBody Request body of createHubV2025R0 method
     * @param {CreateHubV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubV2025R0>}
     */
    createHubV2025R0(requestBody: HubCreateRequestV2025R0, optionalsInput?: CreateHubV2025R0OptionalsInput): Promise<HubV2025R0>;
    /**
     * Retrieves all hubs for a given enterprise.
     *
     * Admins or Hub Co-admins of an enterprise
     * with GCM scope can make this call.
     * @param {GetEnterpriseHubsV2025R0QueryParams} queryParams Query parameters of getEnterpriseHubsV2025R0 method
     * @param {GetEnterpriseHubsV2025R0HeadersInput} headersInput Headers of getEnterpriseHubsV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<HubsV2025R0>}
     */
    getEnterpriseHubsV2025R0(queryParams?: GetEnterpriseHubsV2025R0QueryParams, headersInput?: GetEnterpriseHubsV2025R0HeadersInput, cancellationToken?: CancellationToken): Promise<HubsV2025R0>;
    /**
       * Retrieves details for a hub by its ID.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {GetHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    getHubByIdV2025R0(hubId: string, optionalsInput?: GetHubByIdV2025R0OptionalsInput): Promise<HubV2025R0>;
    /**
       * Updates a Hub. Can be used to change title, description, or Hub settings.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubUpdateRequestV2025R0} requestBody Request body of updateHubByIdV2025R0 method
       * @param {UpdateHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    updateHubByIdV2025R0(hubId: string, requestBody: HubUpdateRequestV2025R0, optionalsInput?: UpdateHubByIdV2025R0OptionalsInput): Promise<HubV2025R0>;
    /**
       * Deletes a single hub.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {DeleteHubByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteHubByIdV2025R0(hubId: string, optionalsInput?: DeleteHubByIdV2025R0OptionalsInput): Promise<undefined>;
    /**
       * Creates a copy of a Hub.
       *
       * The original Hub will not be modified.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubCopyRequestV2025R0} requestBody Request body of copyHubV2025R0 method
       * @param {CopyHubV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubV2025R0>}
       */
    copyHubV2025R0(hubId: string, requestBody: HubCopyRequestV2025R0, optionalsInput?: CopyHubV2025R0OptionalsInput): Promise<HubV2025R0>;
}
export interface HubsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetHubsV2025R0QueryParamsDirectionField(val: GetHubsV2025R0QueryParamsDirectionField): SerializedData;
export declare function deserializeGetHubsV2025R0QueryParamsDirectionField(val: SerializedData): GetHubsV2025R0QueryParamsDirectionField;
export declare function serializeGetEnterpriseHubsV2025R0QueryParamsDirectionField(val: GetEnterpriseHubsV2025R0QueryParamsDirectionField): SerializedData;
export declare function deserializeGetEnterpriseHubsV2025R0QueryParamsDirectionField(val: SerializedData): GetEnterpriseHubsV2025R0QueryParamsDirectionField;
