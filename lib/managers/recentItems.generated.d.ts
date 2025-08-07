import { RecentItems } from '../schemas/recentItems.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export interface GetRecentItemsQueryParams {
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
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
}
export declare class GetRecentItemsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetRecentItemsHeaders, 'extraHeaders'> & Partial<Pick<GetRecentItemsHeaders, 'extraHeaders'>>);
}
export interface GetRecentItemsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RecentItemsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<RecentItemsManager, 'networkSession' | 'getRecentItems'> & Partial<Pick<RecentItemsManager, 'networkSession'>>);
    /**
     * Returns information about the recent items accessed
     * by a user, either in the last 90 days or up to the last
     * 1000 items accessed.
     * @param {GetRecentItemsQueryParams} queryParams Query parameters of getRecentItems method
     * @param {GetRecentItemsHeadersInput} headersInput Headers of getRecentItems method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<RecentItems>}
     */
    getRecentItems(queryParams?: GetRecentItemsQueryParams, headersInput?: GetRecentItemsHeadersInput, cancellationToken?: CancellationToken): Promise<RecentItems>;
}
export interface RecentItemsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=recentItems.generated.d.ts.map