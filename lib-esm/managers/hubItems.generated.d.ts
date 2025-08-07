import { HubItemsV2025R0 } from '../schemas/v2025R0/hubItemsV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { HubItemsManageResponseV2025R0 } from '../schemas/v2025R0/hubItemsManageResponseV2025R0.generated.js';
import { HubItemsManageRequestV2025R0 } from '../schemas/v2025R0/hubItemsManageRequestV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetHubItemsV2025R0Optionals {
    readonly headers: GetHubItemsV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface GetHubItemsV2025R0OptionalsInput {
    readonly headers?: GetHubItemsV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class ManageHubItemsV2025R0Optionals {
    readonly headers: ManageHubItemsV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<ManageHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<ManageHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface ManageHubItemsV2025R0OptionalsInput {
    readonly headers?: ManageHubItemsV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetHubItemsV2025R0QueryParams {
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
export declare class GetHubItemsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetHubItemsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ManageHubItemsV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<ManageHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<ManageHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface ManageHubItemsV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class HubItemsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<HubItemsManager, 'networkSession' | 'getHubItemsV2025R0' | 'manageHubItemsV2025R0'> & Partial<Pick<HubItemsManager, 'networkSession'>>);
    /**
     * Retrieves all items associated with a Hub.
     * @param {GetHubItemsV2025R0QueryParams} queryParams Query parameters of getHubItemsV2025R0 method
     * @param {GetHubItemsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubItemsV2025R0>}
     */
    getHubItemsV2025R0(queryParams: GetHubItemsV2025R0QueryParams, optionalsInput?: GetHubItemsV2025R0OptionalsInput): Promise<HubItemsV2025R0>;
    /**
       * Adds and/or removes Hub items from a Hub.
       * @param {string} hubId The unique identifier that represent a hub.
      
      The ID for any hub can be determined
      by visiting this hub in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/hubs/123`
      the `hub_id` is `123`.
      Example: "12345"
       * @param {HubItemsManageRequestV2025R0} requestBody Request body of manageHubItemsV2025R0 method
       * @param {ManageHubItemsV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<HubItemsManageResponseV2025R0>}
       */
    manageHubItemsV2025R0(hubId: string, requestBody: HubItemsManageRequestV2025R0, optionalsInput?: ManageHubItemsV2025R0OptionalsInput): Promise<HubItemsManageResponseV2025R0>;
}
export interface HubItemsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
