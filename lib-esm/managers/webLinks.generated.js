import { deserializeWebLink } from '../schemas/webLink.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateWebLinkOptionals {
    constructor(fields) {
        this.headers = new CreateWebLinkHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetWebLinkByIdOptionals {
    constructor(fields) {
        this.headers = new GetWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateWebLinkByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.requestBody !== undefined) {
            this.requestBody = fields.requestBody;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteWebLinkByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteWebLinkByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateWebLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetWebLinkByIdHeaders {
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
export class UpdateWebLinkByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteWebLinkByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class WebLinksManager {
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
     * Creates a web link object within a folder.
     * @param {CreateWebLinkRequestBody} requestBody Request body of createWebLink method
     * @param {CreateWebLinkOptionalsInput} optionalsInput
     * @returns {Promise<WebLink>}
     */
    async createWebLink(requestBody, optionalsInput = {}) {
        const optionals = new CreateWebLinkOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateWebLinkRequestBody(requestBody),
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
       * Retrieve information about a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {GetWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    async getWebLinkById(webLinkId, optionalsInput = {}) {
        const optionals = new GetWebLinkByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['boxapi']: toString(headers.boxapi) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId)),
            method: 'GET',
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
       * Updates a web link object.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {UpdateWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<WebLink>}
       */
    async updateWebLinkById(webLinkId, optionalsInput = {}) {
        const optionals = new UpdateWebLinkByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateWebLinkByIdRequestBody(requestBody),
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
       * Deletes a web link.
       * @param {string} webLinkId The ID of the web link.
      Example: "12345"
       * @param {DeleteWebLinkByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteWebLinkById(webLinkId, optionalsInput = {}) {
        const optionals = new DeleteWebLinkByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/web_links/', toString(webLinkId)),
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
export function serializeCreateWebLinkRequestBodyParentField(val) {
    return { ['id']: val.id };
}
export function deserializeCreateWebLinkRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateWebLinkRequestBodyParentField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateWebLinkRequestBodyParentField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateWebLinkRequestBodyParentField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCreateWebLinkRequestBody(val) {
    return {
        ['url']: val.url,
        ['parent']: serializeCreateWebLinkRequestBodyParentField(val.parent),
        ['name']: val.name,
        ['description']: val.description,
    };
}
export function deserializeCreateWebLinkRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateWebLinkRequestBody"',
        });
    }
    if (val.url == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "url" of type "CreateWebLinkRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "CreateWebLinkRequestBody"',
        });
    }
    const url = val.url;
    if (val.parent == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "parent" of type "CreateWebLinkRequestBody" to be defined',
        });
    }
    const parent = deserializeCreateWebLinkRequestBodyParentField(val.parent);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateWebLinkRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "CreateWebLinkRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        url: url,
        parent: parent,
        name: name,
        description: description,
    };
}
export function serializeUpdateWebLinkByIdRequestBodyParentField(val) {
    return { ['id']: val.id, ['user_id']: val.userId };
}
export function deserializeUpdateWebLinkByIdRequestBodyParentField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateWebLinkByIdRequestBodyParentField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateWebLinkByIdRequestBodyParentField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    if (!(val.user_id == void 0) && !sdIsString(val.user_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "user_id" of type "UpdateWebLinkByIdRequestBodyParentField"',
        });
    }
    const userId = val.user_id == void 0 ? void 0 : val.user_id;
    return {
        id: id,
        userId: userId,
    };
}
export function serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val) {
    return val;
}
export function deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val) {
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
        message: "Can't deserialize UpdateWebLinkByIdRequestBodySharedLinkAccessField",
    });
}
export function serializeUpdateWebLinkByIdRequestBodySharedLinkField(val) {
    return {
        ['access']: val.access == void 0
            ? val.access
            : serializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val.access),
        ['password']: val.password,
        ['vanity_name']: val.vanityName,
        ['unshared_at']: val.unsharedAt == void 0
            ? val.unsharedAt
            : serializeDateTime(val.unsharedAt),
    };
}
export function deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const access = val.access == void 0
        ? void 0
        : deserializeUpdateWebLinkByIdRequestBodySharedLinkAccessField(val.access);
    if (!(val.password == void 0) && !sdIsString(val.password)) {
        throw new BoxSdkError({
            message: 'Expecting string for "password" of type "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const password = val.password == void 0 ? void 0 : val.password;
    if (!(val.vanity_name == void 0) && !sdIsString(val.vanity_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "vanity_name" of type "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const vanityName = val.vanity_name == void 0 ? void 0 : val.vanity_name;
    if (!(val.unshared_at == void 0) && !sdIsString(val.unshared_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "unshared_at" of type "UpdateWebLinkByIdRequestBodySharedLinkField"',
        });
    }
    const unsharedAt = val.unshared_at == void 0 ? void 0 : deserializeDateTime(val.unshared_at);
    return {
        access: access,
        password: password,
        vanityName: vanityName,
        unsharedAt: unsharedAt,
    };
}
export function serializeUpdateWebLinkByIdRequestBody(val) {
    return {
        ['url']: val.url,
        ['parent']: val.parent == void 0
            ? val.parent
            : serializeUpdateWebLinkByIdRequestBodyParentField(val.parent),
        ['name']: val.name,
        ['description']: val.description,
        ['shared_link']: val.sharedLink == void 0
            ? val.sharedLink
            : serializeUpdateWebLinkByIdRequestBodySharedLinkField(val.sharedLink),
    };
}
export function deserializeUpdateWebLinkByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateWebLinkByIdRequestBody"',
        });
    }
    if (!(val.url == void 0) && !sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "UpdateWebLinkByIdRequestBody"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    const parent = val.parent == void 0
        ? void 0
        : deserializeUpdateWebLinkByIdRequestBodyParentField(val.parent);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "UpdateWebLinkByIdRequestBody"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateWebLinkByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const sharedLink = val.shared_link == void 0
        ? void 0
        : deserializeUpdateWebLinkByIdRequestBodySharedLinkField(val.shared_link);
    return {
        url: url,
        parent: parent,
        name: name,
        description: description,
        sharedLink: sharedLink,
    };
}
//# sourceMappingURL=webLinks.generated.js.map