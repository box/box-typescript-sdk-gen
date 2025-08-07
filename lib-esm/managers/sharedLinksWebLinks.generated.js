import { deserializeWebLink } from '../schemas/webLink.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FindWebLinkForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetSharedLinkForWebLinkOptionals {
    constructor(fields) {
        this.headers = new GetSharedLinkForWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class AddShareLinkToWebLinkOptionals {
    constructor(fields) {
        this.headers = new AddShareLinkToWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateSharedLinkOnWebLinkOptionals {
    constructor(fields) {
        this.headers = new UpdateSharedLinkOnWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RemoveSharedLinkFromWebLinkOptionals {
    constructor(fields) {
        this.headers = new RemoveSharedLinkFromWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class FindWebLinkForSharedLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifNoneMatch !== undefined) {
            this.ifNoneMatch = fields.ifNoneMatch;
        }
        if (fields.boxapi !== undefined) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetSharedLinkForWebLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AddShareLinkToWebLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateSharedLinkOnWebLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RemoveSharedLinkFromWebLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SharedLinksWebLinksManager {
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
     * Returns the web link represented by a shared link.
     *
     * A shared web link can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared web link when only given a shared link.
     * @param {FindWebLinkForSharedLinkQueryParams} queryParams Query parameters of findWebLinkForSharedLink method
     * @param {FindWebLinkForSharedLinkHeadersInput} headersInput Headers of findWebLinkForSharedLink method
     * @param {FindWebLinkForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<WebLink>}
     */
    async findWebLinkForSharedLink(queryParams = {}, headersInput, optionalsInput = {}) {
        const headers = new FindWebLinkForSharedLinkHeaders({
            ifNoneMatch: headersInput.ifNoneMatch,
            boxapi: headersInput.boxapi,
            extraHeaders: headersInput.extraHeaders,
        });
        const optionals = new FindWebLinkForSharedLinkOptionals({
            cancellationToken: optionalsInput.cancellationToken,
        });
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({
            ...{
                ['if-none-match']: toString(headers.ifNoneMatch),
                ['boxapi']: toString(headers.boxapi),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items#web_links'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebLink(response.data),
            rawData: response.data,
        };
    }
    /**
       * Gets the information for a shared link on a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetSharedLinkForWebLinkQueryParams} queryParams Query parameters of getSharedLinkForWebLink method
       * @param {GetSharedLinkForWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    async getSharedLinkForWebLink(webLinkId, queryParams, optionalsInput = {}) {
        const optionals = new GetSharedLinkForWebLinkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId), '#get_shared_link'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebLink(response.data),
            rawData: response.data,
        };
    }
    /**
       * Adds a shared link to a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {AddShareLinkToWebLinkRequestBody} requestBody Request body of addShareLinkToWebLink method
       * @param {AddShareLinkToWebLinkQueryParams} queryParams Query parameters of addShareLinkToWebLink method
       * @param {AddShareLinkToWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    async addShareLinkToWebLink(webLinkId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new AddShareLinkToWebLinkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId), '#add_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeAddShareLinkToWebLinkRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebLink(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a shared link on a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {UpdateSharedLinkOnWebLinkRequestBody} requestBody Request body of updateSharedLinkOnWebLink method
       * @param {UpdateSharedLinkOnWebLinkQueryParams} queryParams Query parameters of updateSharedLinkOnWebLink method
       * @param {UpdateSharedLinkOnWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    async updateSharedLinkOnWebLink(webLinkId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new UpdateSharedLinkOnWebLinkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId), '#update_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateSharedLinkOnWebLinkRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebLink(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a shared link from a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {RemoveSharedLinkFromWebLinkRequestBody} requestBody Request body of removeSharedLinkFromWebLink method
       * @param {RemoveSharedLinkFromWebLinkQueryParams} queryParams Query parameters of removeSharedLinkFromWebLink method
       * @param {RemoveSharedLinkFromWebLinkOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    async removeSharedLinkFromWebLink(webLinkId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new RemoveSharedLinkFromWebLinkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId), '#remove_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeRemoveSharedLinkFromWebLinkRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebLink(response.data),
            rawData: response.data,
        };
    }
}
export function serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AddShareLinkToWebLinkRequestBodySharedLinkAccessField",
    });
}
export function serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "AddShareLinkToWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
export function serializeAddShareLinkToWebLinkRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeAddShareLinkToWebLinkRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "AddShareLinkToWebLinkRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeAddShareLinkToWebLinkRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeAddShareLinkToWebLinkRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeAddShareLinkToWebLinkRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeAddShareLinkToWebLinkRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToWebLinkRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeAddShareLinkToWebLinkRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
export function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField",
    });
}
export function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
export function serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateSharedLinkOnWebLinkRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeUpdateSharedLinkOnWebLinkRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeUpdateSharedLinkOnWebLinkRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnWebLinkRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnWebLinkRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
export function serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val) {
    return {};
}
export function deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromWebLinkRequestBodySharedLinkField"',
        });
    }
    return {};
}
export function serializeRemoveSharedLinkFromWebLinkRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeRemoveSharedLinkFromWebLinkRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromWebLinkRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeRemoveSharedLinkFromWebLinkRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=sharedLinksWebLinks.generated.js.map