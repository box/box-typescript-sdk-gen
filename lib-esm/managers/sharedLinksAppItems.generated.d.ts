import { AppItem } from '../schemas/appItem.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class FindAppItemForSharedLinkOptionals {
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<FindAppItemForSharedLinkOptionals, 'cancellationToken'> & Partial<Pick<FindAppItemForSharedLinkOptionals, 'cancellationToken'>>);
}
export interface FindAppItemForSharedLinkOptionalsInput {
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class FindAppItemForSharedLinkHeaders {
    /**
     * A header containing the shared link and optional password for the
     * shared link.
     *
     * The format for this header is `shared_link=[link]&shared_link_password=[password]`. */
    readonly boxapi: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<FindAppItemForSharedLinkHeaders, 'extraHeaders'> & Partial<Pick<FindAppItemForSharedLinkHeaders, 'extraHeaders'>>);
}
export interface FindAppItemForSharedLinkHeadersInput {
    /**
     * A header containing the shared link and optional password for the
     * shared link.
     *
     * The format for this header is `shared_link=[link]&shared_link_password=[password]`. */
    readonly boxapi: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class SharedLinksAppItemsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<SharedLinksAppItemsManager, 'networkSession' | 'findAppItemForSharedLink'> & Partial<Pick<SharedLinksAppItemsManager, 'networkSession'>>);
    /**
     * Returns the app item represented by a shared link.
     *
     * The link can originate from the current enterprise or another.
     * @param {FindAppItemForSharedLinkHeadersInput} headersInput Headers of findAppItemForSharedLink method
     * @param {FindAppItemForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<AppItem>}
     */
    findAppItemForSharedLink(headersInput: FindAppItemForSharedLinkHeadersInput, optionalsInput?: FindAppItemForSharedLinkOptionalsInput): Promise<AppItem>;
}
export interface SharedLinksAppItemsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
