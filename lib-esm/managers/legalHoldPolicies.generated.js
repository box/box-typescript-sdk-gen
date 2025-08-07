import { deserializeLegalHoldPolicies } from '../schemas/legalHoldPolicies.generated.js';
import { deserializeLegalHoldPolicy } from '../schemas/legalHoldPolicy.generated.js';
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
export class CreateLegalHoldPolicyOptionals {
    constructor(fields) {
        this.headers = new CreateLegalHoldPolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetLegalHoldPolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetLegalHoldPolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateLegalHoldPolicyByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateLegalHoldPolicyByIdHeaders({});
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
export class DeleteLegalHoldPolicyByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteLegalHoldPolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetLegalHoldPoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateLegalHoldPolicyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetLegalHoldPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateLegalHoldPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteLegalHoldPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class LegalHoldPoliciesManager {
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
     * Retrieves a list of legal hold policies that belong to
     * an enterprise.
     * @param {GetLegalHoldPoliciesQueryParams} queryParams Query parameters of getLegalHoldPolicies method
     * @param {GetLegalHoldPoliciesHeadersInput} headersInput Headers of getLegalHoldPolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<LegalHoldPolicies>}
     */
    async getLegalHoldPolicies(queryParams = {}, headersInput = new GetLegalHoldPoliciesHeaders({}), cancellationToken) {
        const headers = new GetLegalHoldPoliciesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['policy_name']: toString(queryParams.policyName),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicies(response.data),
            rawData: response.data,
        };
    }
    /**
     * Create a new legal hold policy.
     * @param {CreateLegalHoldPolicyRequestBody} requestBody Request body of createLegalHoldPolicy method
     * @param {CreateLegalHoldPolicyOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicy>}
     */
    async createLegalHoldPolicy(requestBody, optionalsInput = {}) {
        const optionals = new CreateLegalHoldPolicyOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateLegalHoldPolicyRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieve a legal hold policy.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {GetLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicy>}
       */
    async getLegalHoldPolicyById(legalHoldPolicyId, optionalsInput = {}) {
        const optionals = new GetLegalHoldPolicyByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies/', toString(legalHoldPolicyId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Update legal hold policy.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {UpdateLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicy>}
       */
    async updateLegalHoldPolicyById(legalHoldPolicyId, optionalsInput = {}) {
        const optionals = new UpdateLegalHoldPolicyByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies/', toString(legalHoldPolicyId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateLegalHoldPolicyByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Delete an existing legal hold policy.
       *
       * This is an asynchronous process. The policy will not be
       * fully deleted yet when the response returns.
       * @param {string} legalHoldPolicyId The ID of the legal hold policy.
      Example: "324432"
       * @param {DeleteLegalHoldPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteLegalHoldPolicyById(legalHoldPolicyId, optionalsInput = {}) {
        const optionals = new DeleteLegalHoldPolicyByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policies/', toString(legalHoldPolicyId)),
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
export function serializeCreateLegalHoldPolicyRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['filter_started_at']: val.filterStartedAt == void 0
            ? val.filterStartedAt
            : serializeDateTime(val.filterStartedAt),
        ['filter_ended_at']: val.filterEndedAt == void 0
            ? val.filterEndedAt
            : serializeDateTime(val.filterEndedAt),
        ['is_ongoing']: val.isOngoing,
    };
}
export function deserializeCreateLegalHoldPolicyRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateLegalHoldPolicyRequestBody"',
        });
    }
    if (val.policy_name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "policy_name" of type "CreateLegalHoldPolicyRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.policy_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_name" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const policyName = val.policy_name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.filter_started_at == void 0) &&
        !sdIsString(val.filter_started_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "filter_started_at" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const filterStartedAt = val.filter_started_at == void 0
        ? void 0
        : deserializeDateTime(val.filter_started_at);
    if (!(val.filter_ended_at == void 0) && !sdIsString(val.filter_ended_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "filter_ended_at" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const filterEndedAt = val.filter_ended_at == void 0
        ? void 0
        : deserializeDateTime(val.filter_ended_at);
    if (!(val.is_ongoing == void 0) && !sdIsBoolean(val.is_ongoing)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_ongoing" of type "CreateLegalHoldPolicyRequestBody"',
        });
    }
    const isOngoing = val.is_ongoing == void 0 ? void 0 : val.is_ongoing;
    return {
        policyName: policyName,
        description: description,
        filterStartedAt: filterStartedAt,
        filterEndedAt: filterEndedAt,
        isOngoing: isOngoing,
    };
}
export function serializeUpdateLegalHoldPolicyByIdRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['release_notes']: val.releaseNotes,
    };
}
export function deserializeUpdateLegalHoldPolicyByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    if (!(val.policy_name == void 0) && !sdIsString(val.policy_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_name" of type "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.release_notes == void 0) && !sdIsString(val.release_notes)) {
        throw new BoxSdkError({
            message: 'Expecting string for "release_notes" of type "UpdateLegalHoldPolicyByIdRequestBody"',
        });
    }
    const releaseNotes = val.release_notes == void 0 ? void 0 : val.release_notes;
    return {
        policyName: policyName,
        description: description,
        releaseNotes: releaseNotes,
    };
}
//# sourceMappingURL=legalHoldPolicies.generated.js.map