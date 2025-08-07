import { deserializeAppItem } from '../schemas/appItem.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class FindAppItemForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class FindAppItemForSharedLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxapi !== undefined) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SharedLinksAppItemsManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
     * Returns the app item represented by a shared link.
     *
     * The link can originate from the current enterprise or another.
     * @param {FindAppItemForSharedLinkHeadersInput} headersInput Headers of findAppItemForSharedLink method
     * @param {FindAppItemForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<AppItem>}
     */
    async findAppItemForSharedLink(headersInput, optionalsInput = {}) {
        const headers = new FindAppItemForSharedLinkHeaders({
            boxapi: headersInput.boxapi,
            extraHeaders: headersInput.extraHeaders,
        });
        const optionals = new FindAppItemForSharedLinkOptionals({
            cancellationToken: optionalsInput.cancellationToken,
        });
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['boxapi']: toString(headers.boxapi) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items#app_items'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeAppItem(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=sharedLinksAppItems.generated.js.map