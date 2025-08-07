import { deserializeWatermark } from '../schemas/watermark.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new GetFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new UpdateFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteFolderWatermarkOptionals {
    constructor(fields) {
        this.headers = new DeleteFolderWatermarkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFolderWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateFolderWatermarkRequestBodyWatermarkField {
    constructor(fields) {
        /**
         * The type of watermark to apply.
         *
         * Currently only supports one option. */
        this.imprint = 'default';
        if (fields.imprint !== undefined) {
            this.imprint = fields.imprint;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class UpdateFolderWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteFolderWatermarkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FolderWatermarksManager {
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
       * Retrieve the watermark for a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    async getFolderWatermark(folderId, optionalsInput = {}) {
        const optionals = new GetFolderWatermarkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/watermark'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWatermark(response.data),
            rawData: response.data,
        };
    }
    /**
       * Applies or update a watermark on a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {UpdateFolderWatermarkRequestBody} requestBody Request body of updateFolderWatermark method
       * @param {UpdateFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<Watermark>}
       */
    async updateFolderWatermark(folderId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateFolderWatermarkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/watermark'),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateFolderWatermarkRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWatermark(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes the watermark from a folder.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {DeleteFolderWatermarkOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteFolderWatermark(folderId, optionalsInput = {}) {
        const optionals = new DeleteFolderWatermarkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/', toString(folderId), '/watermark'),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val) {
    return val;
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val) {
    if (val == 'default') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateFolderWatermarkRequestBodyWatermarkImprintField",
    });
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkField(val) {
    return {
        ['imprint']: serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkField"',
        });
    }
    if (val.imprint == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "imprint" of type "UpdateFolderWatermarkRequestBodyWatermarkField" to be defined',
        });
    }
    const imprint = deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val) {
    return {
        ['imprint']: val.imprint == void 0
            ? val.imprint
            : serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint),
    };
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkFieldInput"',
        });
    }
    const imprint = val.imprint == void 0
        ? void 0
        : deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(val.imprint);
    return {
        imprint: imprint,
    };
}
export function serializeUpdateFolderWatermarkRequestBody(val) {
    return {
        ['watermark']: serializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark),
    };
}
export function deserializeUpdateFolderWatermarkRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateFolderWatermarkRequestBody"',
        });
    }
    if (val.watermark == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "watermark" of type "UpdateFolderWatermarkRequestBody" to be defined',
        });
    }
    const watermark = deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark);
    return { watermark: watermark };
}
//# sourceMappingURL=folderWatermarks.generated.js.map