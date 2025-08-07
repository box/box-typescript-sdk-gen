import { deserializeItems } from '../schemas/items.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class GetTrashedItemsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TrashedItemsManager {
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
     * Retrieves the files and folders that have been moved
     * to the trash.
     *
     * Any attribute in the full files or folders objects can be passed
     * in with the `fields` parameter to retrieve those specific
     * attributes that are not returned by default.
     *
     * This endpoint defaults to use offset-based pagination, yet also supports
     * marker-based pagination using the `marker` parameter.
     * @param {GetTrashedItemsQueryParams} queryParams Query parameters of getTrashedItems method
     * @param {GetTrashedItemsHeadersInput} headersInput Headers of getTrashedItems method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Items>}
     */
    async getTrashedItems(queryParams = {}, headersInput = new GetTrashedItemsHeaders({}), cancellationToken) {
        const headers = new GetTrashedItemsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['limit']: toString(queryParams.limit),
            ['offset']: toString(queryParams.offset),
            ['usemarker']: toString(queryParams.usemarker),
            ['marker']: toString(queryParams.marker),
            ['direction']: toString(queryParams.direction),
            ['sort']: toString(queryParams.sort),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/trash/items'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeItems(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetTrashedItemsQueryParamsDirectionField(val) {
    return val;
}
export function deserializeGetTrashedItemsQueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetTrashedItemsQueryParamsDirectionField",
    });
}
export function serializeGetTrashedItemsQueryParamsSortField(val) {
    return val;
}
export function deserializeGetTrashedItemsQueryParamsSortField(val) {
    if (val == 'name') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'size') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetTrashedItemsQueryParamsSortField",
    });
}
//# sourceMappingURL=trashedItems.generated.js.map