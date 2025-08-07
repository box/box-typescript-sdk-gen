import { deserializeFolderFull } from '../schemas/folderFull.generated.js';
import { deserializeItems } from '../schemas/items.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFolderByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFolderByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFolderByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new UpdateFolderByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFolderByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new DeleteFolderByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderItemsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFolderItemsHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateFolderOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CopyFolderOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CopyFolderHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderByIdHeaders {
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
export class UpdateFolderByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFolderByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.ifMatch !== undefined) {
            this.ifMatch = fields.ifMatch;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFolderItemsHeaders {
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
export class CreateFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CopyFolderHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FoldersManager {
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
       * Retrieves details for a folder, including the first 100 entries
       * in the folder.
       *
       * Passing `sort`, `direction`, `offset`, and `limit`
       * parameters in query allows you to manage the
       * list of returned
       * [folder items](r://folder--full#param-item-collection).
       *
       * To fetch more items within the folder, use the
       * [Get items in a folder](e://get-folders-id-items) endpoint.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async getFolderById(folderId, optionalsInput = {}) {
        const optionals = new GetFolderByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['sort']: toString(queryParams.sort),
            ['direction']: toString(queryParams.direction),
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{
                ['if-none-match']: toString(headers.ifNoneMatch),
                ['boxapi']: toString(headers.boxapi),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId)),
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
       * Updates a folder. This can be also be used to move the folder,
       * create shared links, update collaborations, and more.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async updateFolderById(folderId, optionalsInput = {}) {
        const optionals = new UpdateFolderByIdOptionals({
            requestBody: optionalsInput.requestBody,
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({
            ...{ ['if-match']: toString(headers.ifMatch) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId)),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateFolderByIdRequestBody(requestBody),
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
       * Deletes a folder, either permanently or by moving it to
       * the trash.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFolderById(folderId, optionalsInput = {}) {
        const optionals = new DeleteFolderByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['recursive']: toString(queryParams.recursive),
        });
        const headersMap = prepareParams({
            ...{ ['if-match']: toString(headers.ifMatch) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId)),
            method: 'DELETE',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
       * Retrieves a page of items in a folder. These items can be files,
       * folders, and web links.
       *
       * To request more information about the folder itself, like its size,
       * use the [Get a folder](#get-folders-id) endpoint instead.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderItemsOptionalsInput} optionalsInput
       * @returns {Promise<Items>}
       */
    async getFolderItems(folderId, optionalsInput = {}) {
        const optionals = new GetFolderItemsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['usemarker']: toString(queryParams.usemarker),
            ['marker']: toString(queryParams.marker),
            ['offset']: toString(queryParams.offset),
            ['limit']: toString(queryParams.limit),
            ['sort']: toString(queryParams.sort),
            ['direction']: toString(queryParams.direction),
        });
        const headersMap = prepareParams({
            ...{ ['boxapi']: toString(headers.boxapi) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/items'),
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
    /**
     * Creates a new empty folder within the specified parent folder.
     * @param {CreateFolderRequestBody} requestBody Request body of createFolder method
     * @param {CreateFolderOptionalsInput} optionalsInput
     * @returns {Promise<FolderFull>}
     */
    async createFolder(requestBody, optionalsInput = {}) {
        const optionals = new CreateFolderOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders'),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeCreateFolderRequestBody(requestBody),
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
       * Creates a copy of a folder within a destination folder.
       *
       * The original folder will not be changed.
       * @param {string} folderId The unique identifier of the folder to copy.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder with the ID `0` can not be copied.
      Example: "0"
       * @param {CopyFolderRequestBody} requestBody Request body of copyFolder method
       * @param {CopyFolderOptionalsInput} optionalsInput
       * @returns {Promise<FolderFull>}
       */
    async copyFolder(folderId, requestBody, optionalsInput = {}) {
        const optionals = new CopyFolderOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/copy'),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeCopyFolderRequestBody(requestBody),
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
export function serializeGetFolderByIdQueryParamsSortField(val) {
    return val;
}
export function deserializeGetFolderByIdQueryParamsSortField(val) {
    if (val == 'id') {
        return val;
    }
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
        message: "Can't deserialize GetFolderByIdQueryParamsSortField",
    });
}
export function serializeGetFolderByIdQueryParamsDirectionField(val) {
    return val;
}
export function deserializeGetFolderByIdQueryParamsDirectionField(val) {
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
        message: "Can't deserialize GetFolderByIdQueryParamsDirectionField",
    });
}
export function serializeUpdateFolderByIdRequestBodySyncStateField(val) {
    return val;
}
export function deserializeUpdateFolderByIdRequestBodySyncStateField(val) {
    if (val == 'synced') {
        return val;
    }
    if (val == 'not_synced') {
        return val;
    }
    if (val == 'partially_synced') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFolderByIdRequestBodySyncStateField",
    });
}
export function serializeUpdateFolderByIdRequestBodyParentField(val) {
    return { ['id']: val.id, ['user_id']: val.userId };
}
export function deserializeUpdateFolderByIdRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderByIdRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateFolderByIdRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.user_id == void 0) && !sdIsString(val.user_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "user_id" of type "UpdateFolderByIdRequestBodyParentField"',
        });
    }
    const userId = val.user_id == void 0 ? void 0 : val.user_id;
    return {
        id: id,
        userId: userId,
    };
}
export function serializeUpdateFolderByIdRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateFolderByIdRequestBodySharedLinkAccessField",
    });
}
export function serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val) {
    return { ['can_download']: val.canDownload };
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderByIdRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateFolderByIdRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    return {
        canDownload: canDownload,
    };
}
export function serializeUpdateFolderByIdRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateFolderByIdRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeUpdateFolderByIdRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderByIdRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateFolderByIdRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateFolderByIdRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateFolderByIdRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val) {
    return val;
}
export function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFolderByIdRequestBodyFolderUploadEmailAccessField",
    });
}
export function serializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val.access),
    };
}
export function deserializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderByIdRequestBodyFolderUploadEmailField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodyFolderUploadEmailAccessField(val.access);
    return {
        access: access,
    };
}
export function serializeUpdateFolderByIdRequestBodyCollectionsField(val) {
    return { ['id']: val.id, ['type']: val.type };
}
export function deserializeUpdateFolderByIdRequestBodyCollectionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderByIdRequestBodyCollectionsField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateFolderByIdRequestBodyCollectionsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "UpdateFolderByIdRequestBodyCollectionsField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return {
        id: id,
        type: type,
    };
}
export function serializeUpdateFolderByIdRequestBody(val) {
    return {
        ['name']: val.name,
        ['description']: val.description,
        ['sync_state']: val.syncState == void 0
            ? val.syncState
            : serializeUpdateFolderByIdRequestBodySyncStateField(val.syncState),
        ['can_non_owners_invite']: val.canNonOwnersInvite,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeUpdateFolderByIdRequestBodyParentField(val.parent),
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateFolderByIdRequestBodySharedLinkField(val.sharedLink),
        ['folder_upload_email']: val.folderUploadEmail == void 0
            ? val.folderUploadEmail
            : serializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val.folderUploadEmail),
        ['tags']: val.tags == void 0
            ? val.tags
            : val.tags.map(function (item) {
                return item;
            }),
        ['is_collaboration_restricted_to_enterprise']: val.isCollaborationRestrictedToEnterprise,
        ['collections']: val.collections == void 0
            ? val.collections
            : val.collections.map(function (item) {
                return serializeUpdateFolderByIdRequestBodyCollectionsField(item);
            }),
        ['can_non_owners_view_collaborators']: val.canNonOwnersViewCollaborators,
    };
}
export function deserializeUpdateFolderByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderByIdRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const syncState = val.sync_state == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodySyncStateField(val.sync_state);
    if (!(val.can_non_owners_invite == void 0) &&
        !sdIsBoolean(val.can_non_owners_invite)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_non_owners_invite" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const canNonOwnersInvite = val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
    const parent = val.parent == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodyParentField(val.parent);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodySharedLinkField(val.shared_link);
    const folderUploadEmail = val.folder_upload_email == void 0
        ? void 0
        : deserializeUpdateFolderByIdRequestBodyFolderUploadEmailField(val.folder_upload_email);
    if (!(val.tags == void 0) && !sdIsList(val.tags)) {
        throw new BoxSdkError({
            message: 'Expecting array for "tags" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const tags = val.tags == void 0
        ? void 0
        : sdIsList(val.tags)
            ? val.tags.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "UpdateFolderByIdRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    if (!(val.is_collaboration_restricted_to_enterprise == void 0) &&
        !sdIsBoolean(val.is_collaboration_restricted_to_enterprise)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_collaboration_restricted_to_enterprise" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const isCollaborationRestrictedToEnterprise = val.is_collaboration_restricted_to_enterprise == void 0
        ? void 0
        : val.is_collaboration_restricted_to_enterprise;
    if (!(val.collections == void 0) && !sdIsList(val.collections)) {
        throw new BoxSdkError({
            message: 'Expecting array for "collections" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const collections = val.collections == void 0
        ? void 0
        : sdIsList(val.collections)
            ? val.collections.map(function (itm) {
                return deserializeUpdateFolderByIdRequestBodyCollectionsField(itm);
            })
            : [];
    if (!(val.can_non_owners_view_collaborators == void 0) &&
        !sdIsBoolean(val.can_non_owners_view_collaborators)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_non_owners_view_collaborators" of type "UpdateFolderByIdRequestBody"',
        });
    }
    const canNonOwnersViewCollaborators = val.can_non_owners_view_collaborators == void 0
        ? void 0
        : val.can_non_owners_view_collaborators;
    return {
        name: name,
        description: description,
        syncState: syncState,
        canNonOwnersInvite: canNonOwnersInvite,
        parent: parent,
        sharedLink: sharedLink,
        folderUploadEmail: folderUploadEmail,
        tags: tags,
        isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise,
        collections: collections,
        canNonOwnersViewCollaborators: canNonOwnersViewCollaborators,
    };
}
export function serializeGetFolderItemsQueryParamsSortField(val) {
    return val;
}
export function deserializeGetFolderItemsQueryParamsSortField(val) {
    if (val == 'id') {
        return val;
    }
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
        message: "Can't deserialize GetFolderItemsQueryParamsSortField",
    });
}
export function serializeGetFolderItemsQueryParamsDirectionField(val) {
    return val;
}
export function deserializeGetFolderItemsQueryParamsDirectionField(val) {
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
        message: "Can't deserialize GetFolderItemsQueryParamsDirectionField",
    });
}
export function serializeCreateFolderRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializeCreateFolderRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFolderRequestBodyParentField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateFolderRequestBodyParentField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateFolderRequestBodyParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCreateFolderRequestBodyFolderUploadEmailAccessField(val) {
    return val;
}
export function deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'collaborators') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateFolderRequestBodyFolderUploadEmailAccessField",
    });
}
export function serializeCreateFolderRequestBodyFolderUploadEmailField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeCreateFolderRequestBodyFolderUploadEmailAccessField(val.access),
    };
}
export function deserializeCreateFolderRequestBodyFolderUploadEmailField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFolderRequestBodyFolderUploadEmailField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeCreateFolderRequestBodyFolderUploadEmailAccessField(val.access);
    return {
        access: access,
    };
}
export function serializeCreateFolderRequestBodySyncStateField(val) {
    return val;
}
export function deserializeCreateFolderRequestBodySyncStateField(val) {
    if (val == 'synced') {
        return val;
    }
    if (val == 'not_synced') {
        return val;
    }
    if (val == 'partially_synced') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateFolderRequestBodySyncStateField",
    });
}
export function serializeCreateFolderRequestBody(val) {
    return {
        ['name']: val.name,
        ['parent']: serializeCreateFolderRequestBodyParentField(val.parent),
        ['folder_upload_email']: val.folderUploadEmail == void 0
            ? val.folderUploadEmail
            : serializeCreateFolderRequestBodyFolderUploadEmailField(val.folderUploadEmail),
        ['sync_state']: val.syncState == void 0
            ? val.syncState
            : serializeCreateFolderRequestBodySyncStateField(val.syncState),
    };
}
export function deserializeCreateFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateFolderRequestBody"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateFolderRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateFolderRequestBody"',
        });
    }
    const name = val.name;
    if (val.parent == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parent" of type "CreateFolderRequestBody" to be defined',
        });
    }
    const parent = deserializeCreateFolderRequestBodyParentField(val.parent);
    const folderUploadEmail = val.folder_upload_email == void 0
        ? void 0
        : deserializeCreateFolderRequestBodyFolderUploadEmailField(val.folder_upload_email);
    const syncState = val.sync_state == void 0
        ? void 0
        : deserializeCreateFolderRequestBodySyncStateField(val.sync_state);
    return {
        name: name,
        parent: parent,
        folderUploadEmail: folderUploadEmail,
        syncState: syncState,
    };
}
export function serializeCopyFolderRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializeCopyFolderRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CopyFolderRequestBodyParentField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CopyFolderRequestBodyParentField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CopyFolderRequestBodyParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCopyFolderRequestBody(val) {
    return {
        ['name']: val.name,
        ['parent']: serializeCopyFolderRequestBodyParentField(val.parent),
    };
}
export function deserializeCopyFolderRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CopyFolderRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CopyFolderRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.parent == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parent" of type "CopyFolderRequestBody" to be defined',
        });
    }
    const parent = deserializeCopyFolderRequestBodyParentField(val.parent);
    return { name: name, parent: parent };
}
//# sourceMappingURL=folders.generated.js.map