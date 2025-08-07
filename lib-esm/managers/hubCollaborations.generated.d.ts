import { HubCollaborationsV2025R0 } from '../schemas/v2025R0/hubCollaborationsV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { HubCollaborationV2025R0 } from '../schemas/v2025R0/hubCollaborationV2025R0.generated.js';
import { HubCollaborationCreateRequestV2025R0 } from '../schemas/v2025R0/hubCollaborationCreateRequestV2025R0.generated.js';
import { HubCollaborationUpdateRequestV2025R0 } from '../schemas/v2025R0/hubCollaborationUpdateRequestV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetHubCollaborationsV2025R0Optionals {
    readonly headers: GetHubCollaborationsV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetHubCollaborationsV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetHubCollaborationsV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetHubCollaborationsV2025R0OptionalsInput {
    readonly headers?: GetHubCollaborationsV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateHubCollaborationV2025R0Optionals {
    readonly headers: CreateHubCollaborationV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateHubCollaborationV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateHubCollaborationV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateHubCollaborationV2025R0OptionalsInput {
    readonly headers?: CreateHubCollaborationV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetHubCollaborationByIdV2025R0Optionals {
    readonly headers: GetHubCollaborationByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetHubCollaborationByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetHubCollaborationByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetHubCollaborationByIdV2025R0OptionalsInput {
    readonly headers?: GetHubCollaborationByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class UpdateHubCollaborationByIdV2025R0Optionals {
    readonly headers: UpdateHubCollaborationByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<UpdateHubCollaborationByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<UpdateHubCollaborationByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface UpdateHubCollaborationByIdV2025R0OptionalsInput {
    readonly headers?: UpdateHubCollaborationByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteHubCollaborationByIdV2025R0Optionals {
    readonly headers: DeleteHubCollaborationByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteHubCollaborationByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteHubCollaborationByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteHubCollaborationByIdV2025R0OptionalsInput {
    readonly headers?: DeleteHubCollaborationByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetHubCollaborationsV2025R0QueryParams {
    /**
     * The unique identifier that represent a hub.
     *
     * The ID for any hub can be determined
     * by visiting this hub in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/hubs/123`
     * the `hub_id` is `123`. */
    readonly hubId: string;
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
export declare class GetHubCollaborationsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetHubCollaborationsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetHubCollaborationsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetHubCollaborationsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class CreateHubCollaborationV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateHubCollaborationV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CreateHubCollaborationV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CreateHubCollaborationV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetHubCollaborationByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetHubCollaborationByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetHubCollaborationByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetHubCollaborationByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class UpdateHubCollaborationByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<UpdateHubCollaborationByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<UpdateHubCollaborationByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface UpdateHubCollaborationByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteHubCollaborationByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteHubCollaborationByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<DeleteHubCollaborationByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface DeleteHubCollaborationByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class HubCollaborationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<HubCollaborationsManager, 'networkSession' | 'getHubCollaborationsV2025R0' | 'createHubCollaborationV2025R0' | 'getHubCollaborationByIdV2025R0' | 'updateHubCollaborationByIdV2025R0' | 'deleteHubCollaborationByIdV2025R0'> & Partial<Pick<HubCollaborationsManager, 'networkSession'>>);
    /**
     * Retrieves all collaborations for a hub.
     * @param {GetHubCollaborationsV2025R0QueryParams} queryParams Query parameters of getHubCollaborationsV2025R0 method
     * @param {GetHubCollaborationsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubCollaborationsV2025R0>}
     */
    getHubCollaborationsV2025R0(queryParams: GetHubCollaborationsV2025R0QueryParams, optionalsInput?: GetHubCollaborationsV2025R0OptionalsInput): Promise<HubCollaborationsV2025R0>;
    /**
     * Adds a collaboration for a single user or a single group to a hub.
     *
     * Collaborations can be created using email address, user IDs, or group IDs.
     * @param {HubCollaborationCreateRequestV2025R0} requestBody Request body of createHubCollaborationV2025R0 method
     * @param {CreateHubCollaborationV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubCollaborationV2025R0>}
     */
    createHubCollaborationV2025R0(requestBody: HubCollaborationCreateRequestV2025R0, optionalsInput?: CreateHubCollaborationV2025R0OptionalsInput): Promise<HubCollaborationV2025R0>;
    /**
       * Retrieves details for a hub collaboration by collaboration ID.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {GetHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubCollaborationV2025R0>}
       */
    getHubCollaborationByIdV2025R0(hubCollaborationId: string, optionalsInput?: GetHubCollaborationByIdV2025R0OptionalsInput): Promise<HubCollaborationV2025R0>;
    /**
       * Updates a hub collaboration.
       * Can be used to change the hub role.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {HubCollaborationUpdateRequestV2025R0} requestBody Request body of updateHubCollaborationByIdV2025R0 method
       * @param {UpdateHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubCollaborationV2025R0>}
       */
    updateHubCollaborationByIdV2025R0(hubCollaborationId: string, requestBody: HubCollaborationUpdateRequestV2025R0, optionalsInput?: UpdateHubCollaborationByIdV2025R0OptionalsInput): Promise<HubCollaborationV2025R0>;
    /**
       * Deletes a single hub collaboration.
       * @param {string} hubCollaborationId The ID of the hub collaboration.
      Example: "1234"
       * @param {DeleteHubCollaborationByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteHubCollaborationByIdV2025R0(hubCollaborationId: string, optionalsInput?: DeleteHubCollaborationByIdV2025R0OptionalsInput): Promise<undefined>;
}
export interface HubCollaborationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
