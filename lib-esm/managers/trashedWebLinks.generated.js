import { deserializeTrashWebLinkRestored } from '../schemas/trashWebLinkRestored.generated.js';
import { deserializeTrashWebLink } from '../schemas/trashWebLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RestoreWeblinkFromTrashOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.queryParams = {};
        this.headers = new RestoreWeblinkFromTrashHeaders({});
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
export class GetTrashedWebLinkByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetTrashedWebLinkByIdHeaders({});
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
export class DeleteTrashedWebLinkByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteTrashedWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class RestoreWeblinkFromTrashHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetTrashedWebLinkByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteTrashedWebLinkByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TrashedWebLinksManager {
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
       * Restores a web link that has been moved to the trash.
       *
       * An optional new parent ID can be provided to restore the  web link to in case
       * the original folder has been deleted.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {RestoreWeblinkFromTrashOptionalsInput} optionalsInput
       * @returns {Promise<TrashWebLinkRestored>}
       */
    async restoreWeblinkFromTrash(webLinkId, optionalsInput = {}) {
        const optionals = new RestoreWeblinkFromTrashOptionals({
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
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId)),
            method: 'POST',
            params: queryParamsMap,
            headers: headersMap,
            data: serializeRestoreWeblinkFromTrashRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTrashWebLinkRestored(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a web link that has been moved to the trash.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetTrashedWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<TrashWebLink>}
       */
    async getTrashedWebLinkById(webLinkId, optionalsInput = {}) {
        const optionals = new GetTrashedWebLinkByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId), '/trash'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTrashWebLink(response.data),
            rawData: response.data,
        };
    }
    /**
       * Permanently deletes a web link that is in the trash.
       * This action cannot be undone.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {DeleteTrashedWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteTrashedWebLinkById(webLinkId, optionalsInput = {}) {
        const optionals = new DeleteTrashedWebLinkByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId), '/trash'),
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
export function serializeRestoreWeblinkFromTrashRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializeRestoreWeblinkFromTrashRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RestoreWeblinkFromTrashRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RestoreWeblinkFromTrashRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { id: id };
}
export function serializeRestoreWeblinkFromTrashRequestBody(val) {
    return {
        ['name']: val.name,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent),
    };
}
export function deserializeRestoreWeblinkFromTrashRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RestoreWeblinkFromTrashRequestBody"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "RestoreWeblinkFromTrashRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const parent = val.parent == void 0
        ? void 0
        : deserializeRestoreWeblinkFromTrashRequestBodyParentField(val.parent);
    return {
        name: name,
        parent: parent,
    };
}
//# sourceMappingURL=trashedWebLinks.generated.js.map