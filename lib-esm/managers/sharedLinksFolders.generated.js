import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
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
export class FindFolderForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetSharedLinkForFolderOptionals {
    constructor(fields) {
        this.headers = new GetSharedLinkForFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class AddShareLinkToFolderOptionals {
    constructor(fields) {
        this.headers = new AddShareLinkToFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateSharedLinkOnFolderOptionals {
    constructor(fields) {
        this.headers = new UpdateSharedLinkOnFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RemoveSharedLinkFromFolderOptionals {
    constructor(fields) {
        this.headers = new RemoveSharedLinkFromFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class FindFolderForSharedLinkHeaders {
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
export class GetSharedLinkForFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AddShareLinkToFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateSharedLinkOnFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RemoveSharedLinkFromFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class SharedLinksFoldersManager {
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
     * Return the folder represented by a shared link.
     *
     * A shared folder can be represented by a shared link,
     * which can originate within the current enterprise or within another.
     *
     * This endpoint allows an application to retrieve information about a
     * shared folder when only given a shared link.
     * @param {FindFolderForSharedLinkQueryParams} queryParams Query parameters of findFolderForSharedLink method
     * @param {FindFolderForSharedLinkHeadersInput} headersInput Headers of findFolderForSharedLink method
     * @param {FindFolderForSharedLinkOptionalsInput} optionalsInput
     * @returns {Promise<FolderFull>}
     */
    async findFolderForSharedLink(queryParams = {}, headersInput, optionalsInput = {}) {
        const headers = new FindFolderForSharedLinkHeaders({
            ifNoneMatch: headersInput.ifNoneMatch,
            boxapi: headersInput.boxapi,
            extraHeaders: headersInput.extraHeaders,
        });
        const optionals = new FindFolderForSharedLinkOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items#folders'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Gets the information for a shared link on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetSharedLinkForFolderQueryParams} queryParams Query parameters of getSharedLinkForFolder method
       * @param {GetSharedLinkForFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async getSharedLinkForFolder(folderId, queryParams, optionalsInput = {}) {
        const optionals = new GetSharedLinkForFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '#get_shared_link'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Adds a shared link to a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {AddShareLinkToFolderRequestBody} requestBody Request body of addShareLinkToFolder method
       * @param {AddShareLinkToFolderQueryParams} queryParams Query parameters of addShareLinkToFolder method
       * @param {AddShareLinkToFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async addShareLinkToFolder(folderId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new AddShareLinkToFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '#add_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeAddShareLinkToFolderRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a shared link on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateSharedLinkOnFolderRequestBody} requestBody Request body of updateSharedLinkOnFolder method
       * @param {UpdateSharedLinkOnFolderQueryParams} queryParams Query parameters of updateSharedLinkOnFolder method
       * @param {UpdateSharedLinkOnFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async updateSharedLinkOnFolder(folderId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new UpdateSharedLinkOnFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '#update_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateSharedLinkOnFolderRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderFull(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a shared link from a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {RemoveSharedLinkFromFolderRequestBody} requestBody Request body of removeSharedLinkFromFolder method
       * @param {RemoveSharedLinkFromFolderQueryParams} queryParams Query parameters of removeSharedLinkFromFolder method
       * @param {RemoveSharedLinkFromFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async removeSharedLinkFromFolder(folderId, requestBody = {}, queryParams, optionalsInput = {}) {
        const optionals = new RemoveSharedLinkFromFolderOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({ ['fields']: toString(queryParams.fields) });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '#remove_shared_link'),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeRemoveSharedLinkFromFolderRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFolderFull(response.data),
            rawData: response.data,
        };
    }
}
export function serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize AddShareLinkToFolderRequestBodySharedLinkAccessField",
    });
}
export function serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "AddShareLinkToFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
export function serializeAddShareLinkToFolderRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeAddShareLinkToFolderRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeAddShareLinkToFolderRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "AddShareLinkToFolderRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeAddShareLinkToFolderRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeAddShareLinkToFolderRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeAddShareLinkToFolderRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeAddShareLinkToFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AddShareLinkToFolderRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeAddShareLinkToFolderRequestBodySharedLinkField(val.shared_link);
    return { sharedLink: sharedLink };
}
export function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateSharedLinkOnFolderRequestBodySharedLinkAccessField",
    });
}
export function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val) {
    return {
        ['can_download']: val.canDownload,
        ['can_preview']: val.canPreview,
        ['can_edit']: val.canEdit,
    };
}
export function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    if (!(val.can_preview == void 0) && !sdIsBoolean(val.can_preview)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_preview" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canPreview = val.can_preview == void 0 ? void 0 : val.can_preview;
    if (!(val.can_edit == void 0) && !sdIsBoolean(val.can_edit)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_edit" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField"',
        });
    }
    const canEdit = val.can_edit == void 0 ? void 0 : val.can_edit;
    return {
        canDownload: canDownload,
        canPreview: canPreview,
        canEdit: canEdit,
    };
}
export function serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateSharedLinkOnFolderRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeUpdateSharedLinkOnFolderRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeUpdateSharedLinkOnFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateSharedLinkOnFolderRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateSharedLinkOnFolderRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
export function serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val) {
    return {};
}
export function deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFolderRequestBodySharedLinkField"',
        });
    }
    return {};
}
export function serializeRemoveSharedLinkFromFolderRequestBody(val) {
    return {
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeRemoveSharedLinkFromFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RemoveSharedLinkFromFolderRequestBody"',
        });
    }
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeRemoveSharedLinkFromFolderRequestBodySharedLinkField(val.shared_link);
    return {
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=sharedLinksFolders.generated.js.map