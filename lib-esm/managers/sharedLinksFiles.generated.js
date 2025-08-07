import { deserializeFileFull } from '../schemas/fileFull.generated.js';
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
export class FindFileForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetSharedLinkForFileOptionals {
    constructor(fields) {
        this.headers = new GetSharedLinkForFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class AddShareLinkToFileOptionals {
    constructor(fields) {
        this.headers = new AddShareLinkToFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateSharedLinkOnFileOptionals {
    constructor(fields) {
        this.headers = new UpdateSharedLinkOnFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RemoveSharedLinkFromFileOptionals {
    constructor(fields) {
        this.headers = new RemoveSharedLinkFromFileHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class FindFileForSharedLinkHeaders {
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
export class GetSharedLinkForFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AddShareLinkToFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateSharedLinkOnFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RemoveSharedLinkFromFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SharedLinksFilesManager {
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
     * Returns the file represented by a shared link.
     *
     * A shared file can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared file when only given a shared link.
     *
     * The `shared_link_permission_options` array field can be returned
     * by requesting it in the `fields` query parameter.
     * @param {FindFileForSharedLinkQueryParams} queryParams Query parameters of findFileForSharedLink method
     * @param {FindFileForSharedLinkHeadersInput} headersInput Headers of findFileForSharedLink method
     * @param {FindFileForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<FileFull>}
     */
    async findFileForSharedLink(queryParams = {}, headersInput, optionalsInput = {}) {
        const headers = new FindFileForSharedLinkHeaders({
            ifNoneMatch: headersInput.ifNoneMatch,
            boxapi: headersInput.boxapi,
            extraHeaders: headersInput.extraHeaders,
        });
        const optionals = new FindFileForSharedLinkOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Gets the information for a shared link on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetSharedLinkForFileQueryParams} queryParams Query parameters of getSharedLinkForFile method
       * @param {GetSharedLinkForFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async getSharedLinkForFile(fileId, queryParams, optionalsInput = {}) {
        const optionals = new GetSharedLinkForFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '#get_shared_link'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Adds a shared link to a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {AddShareLinkToFileRequestBody} requestBody Request body of addShareLinkToFile method
       * @param {AddShareLinkToFileQueryParams} queryParams Query parameters of addShareLinkToFile method
       * @param {AddShareLinkToFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async addShareLinkToFile(fileId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new AddShareLinkToFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '#add_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeAddShareLinkToFileRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a shared link on a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateSharedLinkOnFileRequestBody} requestBody Request body of updateSharedLinkOnFile method
       * @param {UpdateSharedLinkOnFileQueryParams} queryParams Query parameters of updateSharedLinkOnFile method
       * @param {UpdateSharedLinkOnFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async updateSharedLinkOnFile(fileId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new UpdateSharedLinkOnFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '#update_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateSharedLinkOnFileRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a shared link from a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {RemoveSharedLinkFromFileRequestBody} requestBody Request body of removeSharedLinkFromFile method
       * @param {RemoveSharedLinkFromFileQueryParams} queryParams Query parameters of removeSharedLinkFromFile method
       * @param {RemoveSharedLinkFromFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async removeSharedLinkFromFile(fileId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new RemoveSharedLinkFromFileOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '#remove_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeRemoveSharedLinkFromFileRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileFull(response.data),
            rawData: response.data,
        };
    }
}
export function serializeAddShareLinkToFileRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize AddShareLinkToFileRequestBodySharedLinkAccessField",
    });
}
export function serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "AddShareLinkToFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
export function serializeAddShareLinkToFileRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeAddShareLinkToFileRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeAddShareLinkToFileRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeAddShareLinkToFileRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "AddShareLinkToFileRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeAddShareLinkToFileRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeAddShareLinkToFileRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeAddShareLinkToFileRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeAddShareLinkToFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFileRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeAddShareLinkToFileRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
export function serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateSharedLinkOnFileRequestBodySharedLinkAccessField",
    });
}
export function serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
export function serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateSharedLinkOnFileRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeUpdateSharedLinkOnFileRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeUpdateSharedLinkOnFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFileRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFileRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
export function serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val) {
    return {};
}
export function deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFileRequestBodySharedLinkField"',
        });
    }
    return {};
}
export function serializeRemoveSharedLinkFromFileRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeRemoveSharedLinkFromFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFileRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeRemoveSharedLinkFromFileRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=sharedLinksFiles.generated.js.map