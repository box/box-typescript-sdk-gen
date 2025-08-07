import { deserializeCollaborationAllowlistEntries } from '../schemas/collaborationAllowlistEntries.generated.js';
import { deserializeCollaborationAllowlistEntry } from '../schemas/collaborationAllowlistEntry.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateCollaborationWhitelistEntryOptionals {
    constructor(fields) {
        this.headers = new CreateCollaborationWhitelistEntryHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCollaborationWhitelistEntryByIdOptionals {
    constructor(fields) {
        this.headers = new GetCollaborationWhitelistEntryByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteCollaborationWhitelistEntryByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteCollaborationWhitelistEntryByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCollaborationWhitelistEntriesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateCollaborationWhitelistEntryHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetCollaborationWhitelistEntryByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteCollaborationWhitelistEntryByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CollaborationAllowlistEntriesManager {
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
     * Returns the list domains that have been deemed safe to create collaborations
     * for within the current enterprise.
     * @param {GetCollaborationWhitelistEntriesQueryParams} queryParams Query parameters of getCollaborationWhitelistEntries method
     * @param {GetCollaborationWhitelistEntriesHeadersInput} headersInput Headers of getCollaborationWhitelistEntries method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<CollaborationAllowlistEntries>}
     */
    async getCollaborationWhitelistEntries(queryParams = {}, headersInput = new GetCollaborationWhitelistEntriesHeaders({}), cancellationToken) {
        const headers = new GetCollaborationWhitelistEntriesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationAllowlistEntries(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a new entry in the list of allowed domains to allow
     * collaboration for.
     * @param {CreateCollaborationWhitelistEntryRequestBody} requestBody Request body of createCollaborationWhitelistEntry method
     * @param {CreateCollaborationWhitelistEntryOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationAllowlistEntry>}
     */
    async createCollaborationWhitelistEntry(requestBody, optionalsInput = {}) {
        const optionals = new CreateCollaborationWhitelistEntryOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateCollaborationWhitelistEntryRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationAllowlistEntry(response.data),
            rawData: response.data,
        };
    }
    /**
       * Returns a domain that has been deemed safe to create collaborations
       * for within the current enterprise.
       * @param {string} collaborationWhitelistEntryId The ID of the entry in the list.
      Example: "213123"
       * @param {GetCollaborationWhitelistEntryByIdOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationAllowlistEntry>}
       */
    async getCollaborationWhitelistEntryById(collaborationWhitelistEntryId, optionalsInput = {}) {
        const optionals = new GetCollaborationWhitelistEntryByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries/', toString(collaborationWhitelistEntryId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationAllowlistEntry(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a domain from the list of domains that have been deemed safe to create
       * collaborations for within the current enterprise.
       * @param {string} collaborationWhitelistEntryId The ID of the entry in the list.
      Example: "213123"
       * @param {DeleteCollaborationWhitelistEntryByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteCollaborationWhitelistEntryById(collaborationWhitelistEntryId, optionalsInput = {}) {
        const optionals = new DeleteCollaborationWhitelistEntryByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_entries/', toString(collaborationWhitelistEntryId)),
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
export function serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val) {
    return val;
}
export function deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val) {
    if (val == 'inbound') {
        return val;
    }
    if (val == 'outbound') {
        return val;
    }
    if (val == 'both') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateCollaborationWhitelistEntryRequestBodyDirectionField",
    });
}
export function serializeCreateCollaborationWhitelistEntryRequestBody(val) {
    return {
        ['domain']: val.domain,
        ['direction']: serializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val.direction),
    };
}
export function deserializeCreateCollaborationWhitelistEntryRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationWhitelistEntryRequestBody"',
        });
    }
    if (val.domain == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "domain" of type "CreateCollaborationWhitelistEntryRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.domain)) {
        throw new BoxSdkError({
            message: 'Expecting string for "domain" of type "CreateCollaborationWhitelistEntryRequestBody"',
        });
    }
    const domain = val.domain;
    if (val.direction == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "direction" of type "CreateCollaborationWhitelistEntryRequestBody" to be defined',
        });
    }
    const direction = deserializeCreateCollaborationWhitelistEntryRequestBodyDirectionField(val.direction);
    return {
        domain: domain,
        direction: direction,
    };
}
//# sourceMappingURL=collaborationAllowlistEntries.generated.js.map