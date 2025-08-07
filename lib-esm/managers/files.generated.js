import { deserializeFileFull } from '../schemas/fileFull.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { isBrowser } from '../internal/utils.js';
import { createCancellationController } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFileByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileByIdHeaders({});
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
export class UpdateFileByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new UpdateFileByIdHeaders({});
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
export class DeleteFileByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteFileByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CopyFileOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CopyFileHeaders({});
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
export class GetFileThumbnailUrlOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileThumbnailUrlHeaders({});
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
export class GetFileThumbnailByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFileThumbnailByIdHeaders({});
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
export class GetFileByIdHeaders {
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
        if (fields.xRepHints !== undefined) {
            this.xRepHints = fields.xRepHints;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFileByIdHeaders {
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
export class DeleteFileByIdHeaders {
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
export class CopyFileHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileThumbnailUrlHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileThumbnailByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FilesManager {
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
       * Retrieves the details about a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async getFileById(fileId, optionalsInput = {}) {
        const optionals = new GetFileByIdOptionals({
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
        const headersMap = prepareParams({
            ...{
                ['if-none-match']: toString(headers.ifNoneMatch),
                ['boxapi']: toString(headers.boxapi),
                ['x-rep-hints']: toString(headers.xRepHints),
            },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId)),
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
       * Updates a file. This can be used to rename or move a file,
       * create a shared link, or lock a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {UpdateFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async updateFileById(fileId, optionalsInput = {}) {
        const optionals = new UpdateFileByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId)),
            method: 'PUT',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeUpdateFileByIdRequestBody(requestBody),
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
       * Deletes a file, either permanently or by moving it to
       * the trash.
       *
       * The the enterprise settings determine whether the item will
       * be permanently deleted from Box or moved to the trash.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DeleteFileByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFileById(fileId, optionalsInput = {}) {
        const optionals = new DeleteFileByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['if-match']: toString(headers.ifMatch) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
       * Creates a copy of a file.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {CopyFileRequestBody} requestBody Request body of copyFile method
       * @param {CopyFileOptionalsInput} optionalsInput
       * @returns {Promise<FileFull>}
       */
    async copyFile(fileId, requestBody, optionalsInput = {}) {
        const optionals = new CopyFileOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/copy'),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeCopyFileRequestBody(requestBody),
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
       * Retrieves a thumbnail, or smaller image representation, of a file.
       *
       * Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in
       * the `.png` format and sizes of `32x32`, `160x160`, and `320x320`
       * can be returned in the `.jpg` format.
       *
       * Thumbnails can be generated for the image and video file formats listed
       * [found on our community site][1].
       *
       * [1]: https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileThumbnailUrlExtension} extension The file format for the thumbnail.
      Example: "png"
       * @param {GetFileThumbnailUrlOptionalsInput} optionalsInput
       * @returns {Promise<string>}
       */
    async getFileThumbnailUrl(fileId, extension, optionalsInput = {}) {
        const optionals = new GetFileThumbnailUrlOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['min_height']: toString(queryParams.minHeight),
            ['min_width']: toString(queryParams.minWidth),
            ['max_height']: toString(queryParams.maxHeight),
            ['max_width']: toString(queryParams.maxWidth),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const cancellationController = createCancellationController();
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/thumbnail.', toString(extension)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken == void 0
                ? cancellationController.signal
                : cancellationToken,
            followRedirects: false,
        }));
        if (isBrowser()) {
            cancellationController.abort();
            if (response.url == void 0) {
                throw new BoxSdkError({ message: 'Unable to get response URL' });
            }
            return response.url;
        }
        if ('location' in response.headers) {
            return response.headers.location;
        }
        if ('Location' in response.headers) {
            return response.headers.Location;
        }
        throw new BoxSdkError({ message: 'No location header in response' });
    }
    /**
       * Retrieves a thumbnail, or smaller image representation, of a file.
       *
       * Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in
       * the `.png` format and sizes of `32x32`, `160x160`, and `320x320`
       * can be returned in the `.jpg` format.
       *
       * Thumbnails can be generated for the image and video file formats listed
       * [found on our community site][1].
       *
       * [1]: https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileThumbnailByIdExtension} extension The file format for the thumbnail.
      Example: "png"
       * @param {GetFileThumbnailByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined | ByteStream>}
       */
    async getFileThumbnailById(fileId, extension, optionalsInput = {}) {
        const optionals = new GetFileThumbnailByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['min_height']: toString(queryParams.minHeight),
            ['min_width']: toString(queryParams.minWidth),
            ['max_height']: toString(queryParams.maxHeight),
            ['max_width']: toString(queryParams.maxWidth),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/files/', toString(fileId), '/thumbnail.', toString(extension)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'binary',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        if (toString(response.status) == '202') {
            return void 0;
        }
        return response.content;
    }
}
export function serializeUpdateFileByIdRequestBodyParentField(val) {
    return { ['id']: val.id, ['user_id']: val.userId };
}
export function deserializeUpdateFileByIdRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateFileByIdRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.user_id == void 0) && !sdIsString(val.user_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "user_id" of type "UpdateFileByIdRequestBodyParentField"',
        });
    }
    const userId = val.user_id == void 0 ? void 0 : val.user_id;
    return {
        id: id,
        userId: userId,
    };
}
export function serializeUpdateFileByIdRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeUpdateFileByIdRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateFileByIdRequestBodySharedLinkAccessField",
    });
}
export function serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val) {
    return { ['can_download']: val.canDownload };
}
export function deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBodySharedLinkPermissionsField"',
        });
    }
    if (!(val.can_download == void 0) && !sdIsBoolean(val.can_download)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_download" of type "UpdateFileByIdRequestBodySharedLinkPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0 ? void 0 : val.can_download;
    return {
        canDownload: canDownload,
    };
}
export function serializeUpdateFileByIdRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateFileByIdRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val.permissions),
    };
}
export function deserializeUpdateFileByIdRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateFileByIdRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateFileByIdRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateFileByIdRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodySharedLinkPermissionsField(val.permissions);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
        permissions: permissions,
    };
}
export function serializeUpdateFileByIdRequestBodyLockAccessField(val) {
    return val;
}
export function deserializeUpdateFileByIdRequestBodyLockAccessField(val) {
    if (val == 'lock') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFileByIdRequestBodyLockAccessField",
    });
}
export function serializeUpdateFileByIdRequestBodyLockField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateFileByIdRequestBodyLockAccessField(val.access),
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : serializeDateTime(val.expiresAt),
        ['is_download_prevented']: val.isDownloadPrevented,
    };
}
export function deserializeUpdateFileByIdRequestBodyLockField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBodyLockField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodyLockAccessField(val.access);
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "UpdateFileByIdRequestBodyLockField"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (!(val.is_download_prevented == void 0) &&
        !sdIsBoolean(val.is_download_prevented)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_download_prevented" of type "UpdateFileByIdRequestBodyLockField"',
        });
    }
    const isDownloadPrevented = val.is_download_prevented == void 0 ? void 0 : val.is_download_prevented;
    return {
        access: access,
        expiresAt: expiresAt,
        isDownloadPrevented: isDownloadPrevented,
    };
}
export function serializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val) {
    return val;
}
export function deserializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val) {
    if (val == 'open') {
        return val;
    }
    if (val == 'company') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFileByIdRequestBodyPermissionsCanDownloadField",
    });
}
export function serializeUpdateFileByIdRequestBodyPermissionsField(val) {
    return {
        ['can_download']: val.canDownload == void 0
            ? val.canDownload
            : serializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val.canDownload),
    };
}
export function deserializeUpdateFileByIdRequestBodyPermissionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBodyPermissionsField"',
        });
    }
    const canDownload = val.can_download == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodyPermissionsCanDownloadField(val.can_download);
    return {
        canDownload: canDownload,
    };
}
export function serializeUpdateFileByIdRequestBodyCollectionsField(val) {
    return { ['id']: val.id, ['type']: val.type };
}
export function deserializeUpdateFileByIdRequestBodyCollectionsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBodyCollectionsField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateFileByIdRequestBodyCollectionsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "UpdateFileByIdRequestBodyCollectionsField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return {
        id: id,
        type: type,
    };
}
export function serializeUpdateFileByIdRequestBody(val) {
    return {
        ['name']: val.name,
        ['description']: val.description,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeUpdateFileByIdRequestBodyParentField(val.parent),
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateFileByIdRequestBodySharedLinkField(val.sharedLink),
        ['lock']: val.lock == void 0
            ? val.lock
            : serializeUpdateFileByIdRequestBodyLockField(val.lock),
        ['disposition_at']: val.dispositionAt == void 0
            ? val.dispositionAt
            : serializeDateTime(val.dispositionAt),
        ['permissions']: val.permissions == void 0
            ? val.permissions
            : serializeUpdateFileByIdRequestBodyPermissionsField(val.permissions),
        ['collections']: val.collections == void 0
            ? val.collections
            : val.collections.map(function (item) {
                return serializeUpdateFileByIdRequestBodyCollectionsField(item);
            }),
        ['tags']: val.tags == void 0
            ? val.tags
            : val.tags.map(function (item) {
                return item;
            }),
    };
}
export function deserializeUpdateFileByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFileByIdRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateFileByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateFileByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const parent = val.parent == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodyParentField(val.parent);
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodySharedLinkField(val.shared_link);
    const lock = val.lock == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodyLockField(val.lock);
    if (!(val.disposition_at == void 0) && !sdIsString(val.disposition_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "disposition_at" of type "UpdateFileByIdRequestBody"',
        });
    }
    const dispositionAt = val.disposition_at == void 0
        ? void 0
        : deserializeDateTime(val.disposition_at);
    const permissions = val.permissions == void 0
        ? void 0
        : deserializeUpdateFileByIdRequestBodyPermissionsField(val.permissions);
    if (!(val.collections == void 0) && !sdIsList(val.collections)) {
        throw new BoxSdkError({
            message: 'Expecting array for "collections" of type "UpdateFileByIdRequestBody"',
        });
    }
    const collections = val.collections == void 0
        ? void 0
        : sdIsList(val.collections)
            ? val.collections.map(function (itm) {
                return deserializeUpdateFileByIdRequestBodyCollectionsField(itm);
            })
            : [];
    if (!(val.tags == void 0) && !sdIsList(val.tags)) {
        throw new BoxSdkError({
            message: 'Expecting array for "tags" of type "UpdateFileByIdRequestBody"',
        });
    }
    const tags = val.tags == void 0
        ? void 0
        : sdIsList(val.tags)
            ? val.tags.map(function (itm) {
                if (!sdIsString(itm)) {
                    throw new BoxSdkError({
                        message: 'Expecting string for "UpdateFileByIdRequestBody"',
                    });
                }
                return itm;
            })
            : [];
    return {
        name: name,
        description: description,
        parent: parent,
        sharedLink: sharedLink,
        lock: lock,
        dispositionAt: dispositionAt,
        permissions: permissions,
        collections: collections,
        tags: tags,
    };
}
export function serializeCopyFileRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializeCopyFileRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CopyFileRequestBodyParentField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CopyFileRequestBodyParentField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CopyFileRequestBodyParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCopyFileRequestBody(val) {
    return {
        ['name']: val.name,
        ['version']: val.version,
        ['parent']: serializeCopyFileRequestBodyParentField(val.parent),
    };
}
export function deserializeCopyFileRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CopyFileRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CopyFileRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.version == void 0) && !sdIsString(val.version)) {
        throw new BoxSdkError({
            message: 'Expecting string for "version" of type "CopyFileRequestBody"',
        });
    }
    const version = val.version == void 0 ? void 0 : val.version;
    if (val.parent == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parent" of type "CopyFileRequestBody" to be defined',
        });
    }
    const parent = deserializeCopyFileRequestBodyParentField(val.parent);
    return {
        name: name,
        version: version,
        parent: parent,
    };
}
export function serializeGetFileThumbnailUrlExtension(val) {
    return val;
}
export function deserializeGetFileThumbnailUrlExtension(val) {
    if (val == 'png') {
        return val;
    }
    if (val == 'jpg') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetFileThumbnailUrlExtension",
    });
}
export function serializeGetFileThumbnailByIdExtension(val) {
    return val;
}
export function deserializeGetFileThumbnailByIdExtension(val) {
    if (val == 'png') {
        return val;
    }
    if (val == 'jpg') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetFileThumbnailByIdExtension",
    });
}
//# sourceMappingURL=files.generated.js.map