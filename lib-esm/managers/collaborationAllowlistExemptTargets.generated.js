import { deserializeCollaborationAllowlistExemptTargets } from '../schemas/collaborationAllowlistExemptTargets.generated.js';
import { deserializeCollaborationAllowlistExemptTarget } from '../schemas/collaborationAllowlistExemptTarget.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateCollaborationWhitelistExemptTargetOptionals {
    constructor(fields) {
        this.headers = new CreateCollaborationWhitelistExemptTargetHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCollaborationWhitelistExemptTargetByIdOptionals {
    constructor(fields) {
        this.headers = new GetCollaborationWhitelistExemptTargetByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteCollaborationWhitelistExemptTargetByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteCollaborationWhitelistExemptTargetByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetCollaborationWhitelistExemptTargetsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateCollaborationWhitelistExemptTargetHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetCollaborationWhitelistExemptTargetByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteCollaborationWhitelistExemptTargetByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CollaborationAllowlistExemptTargetsManager {
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
     * Returns a list of users who have been exempt from the collaboration
     * domain restrictions.
     * @param {GetCollaborationWhitelistExemptTargetsQueryParams} queryParams Query parameters of getCollaborationWhitelistExemptTargets method
     * @param {GetCollaborationWhitelistExemptTargetsHeadersInput} headersInput Headers of getCollaborationWhitelistExemptTargets method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<CollaborationAllowlistExemptTargets>}
     */
    async getCollaborationWhitelistExemptTargets(queryParams = {}, headersInput = new GetCollaborationWhitelistExemptTargetsHeaders({}), cancellationToken) {
        const headers = new GetCollaborationWhitelistExemptTargetsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationAllowlistExemptTargets(response.data),
            rawData: response.data,
        };
    }
    /**
     * Exempts a user from the restrictions set out by the allowed list of domains
     * for collaborations.
     * @param {CreateCollaborationWhitelistExemptTargetRequestBody} requestBody Request body of createCollaborationWhitelistExemptTarget method
     * @param {CreateCollaborationWhitelistExemptTargetOptionalsInput} optionalsInput
     * @returns {Promise<CollaborationAllowlistExemptTarget>}
     */
    async createCollaborationWhitelistExemptTarget(requestBody, optionalsInput = {}) {
        const optionals = new CreateCollaborationWhitelistExemptTargetOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateCollaborationWhitelistExemptTargetRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationAllowlistExemptTarget(response.data),
            rawData: response.data,
        };
    }
    /**
       * Returns a users who has been exempt from the collaboration
       * domain restrictions.
       * @param {string} collaborationWhitelistExemptTargetId The ID of the exemption to the list.
      Example: "984923"
       * @param {GetCollaborationWhitelistExemptTargetByIdOptionalsInput} optionalsInput
       * @returns {Promise<CollaborationAllowlistExemptTarget>}
       */
    async getCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId, optionalsInput = {}) {
        const optionals = new GetCollaborationWhitelistExemptTargetByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets/', toString(collaborationWhitelistExemptTargetId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeCollaborationAllowlistExemptTarget(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a user's exemption from the restrictions set out by the allowed list
       * of domains for collaborations.
       * @param {string} collaborationWhitelistExemptTargetId The ID of the exemption to the list.
      Example: "984923"
       * @param {DeleteCollaborationWhitelistExemptTargetByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteCollaborationWhitelistExemptTargetById(collaborationWhitelistExemptTargetId, optionalsInput = {}) {
        const optionals = new DeleteCollaborationWhitelistExemptTargetByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/collaboration_whitelist_exempt_targets/', toString(collaborationWhitelistExemptTargetId)),
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
export function serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val) {
    return { ['id']: val.id };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationWhitelistExemptTargetRequestBodyUserField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateCollaborationWhitelistExemptTargetRequestBodyUserField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateCollaborationWhitelistExemptTargetRequestBodyUserField"',
        });
    }
    const id = val.id;
    return {
        id: id,
    };
}
export function serializeCreateCollaborationWhitelistExemptTargetRequestBody(val) {
    return {
        ['user']: serializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val.user),
    };
}
export function deserializeCreateCollaborationWhitelistExemptTargetRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateCollaborationWhitelistExemptTargetRequestBody"',
        });
    }
    if (val.user == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user" of type "CreateCollaborationWhitelistExemptTargetRequestBody" to be defined',
        });
    }
    const user = deserializeCreateCollaborationWhitelistExemptTargetRequestBodyUserField(val.user);
    return {
        user: user,
    };
}
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.js.map