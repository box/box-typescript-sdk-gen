import { deserializeMetadataCascadePolicies } from '../schemas/metadataCascadePolicies.generated.js';
import { deserializeMetadataCascadePolicy } from '../schemas/metadataCascadePolicy.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetMetadataCascadePoliciesOptionals {
    constructor(fields) {
        this.headers = new GetMetadataCascadePoliciesHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateMetadataCascadePolicyOptionals {
    constructor(fields) {
        this.headers = new CreateMetadataCascadePolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetMetadataCascadePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new GetMetadataCascadePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteMetadataCascadePolicyByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteMetadataCascadePolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class ApplyMetadataCascadePolicyOptionals {
    constructor(fields) {
        this.headers = new ApplyMetadataCascadePolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetMetadataCascadePoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateMetadataCascadePolicyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetMetadataCascadePolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteMetadataCascadePolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ApplyMetadataCascadePolicyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class MetadataCascadePoliciesManager {
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
     * Retrieves a list of all the metadata cascade policies
     * that are applied to a given folder. This can not be used on the root
     * folder with ID `0`.
     * @param {GetMetadataCascadePoliciesQueryParams} queryParams Query parameters of getMetadataCascadePolicies method
     * @param {GetMetadataCascadePoliciesOptionalsInput} optionalsInput
     * @returns {Promise<MetadataCascadePolicies>}
     */
    async getMetadataCascadePolicies(queryParams, optionalsInput = {}) {
        const optionals = new GetMetadataCascadePoliciesOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['folder_id']: toString(queryParams.folderId),
            ['owner_enterprise_id']: toString(queryParams.ownerEnterpriseId),
            ['marker']: toString(queryParams.marker),
            ['offset']: toString(queryParams.offset),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataCascadePolicies(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a new metadata cascade policy that applies a given
     * metadata template to a given folder and automatically
     * cascades it down to any files within that folder.
     *
     * In order for the policy to be applied a metadata instance must first
     * be applied to the folder the policy is to be applied to.
     * @param {CreateMetadataCascadePolicyRequestBody} requestBody Request body of createMetadataCascadePolicy method
     * @param {CreateMetadataCascadePolicyOptionalsInput} optionalsInput
     * @returns {Promise<MetadataCascadePolicy>}
     */
    async createMetadataCascadePolicy(requestBody, optionalsInput = {}) {
        const optionals = new CreateMetadataCascadePolicyOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateMetadataCascadePolicyRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataCascadePolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieve a specific metadata cascade policy assigned to a folder.
       * @param {string} metadataCascadePolicyId The ID of the metadata cascade policy.
      Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
       * @param {GetMetadataCascadePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<MetadataCascadePolicy>}
       */
    async getMetadataCascadePolicyById(metadataCascadePolicyId, optionalsInput = {}) {
        const optionals = new GetMetadataCascadePolicyByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies/', toString(metadataCascadePolicyId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeMetadataCascadePolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a metadata cascade policy.
       * @param {string} metadataCascadePolicyId The ID of the metadata cascade policy.
      Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
       * @param {DeleteMetadataCascadePolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteMetadataCascadePolicyById(metadataCascadePolicyId, optionalsInput = {}) {
        const optionals = new DeleteMetadataCascadePolicyByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies/', toString(metadataCascadePolicyId)),
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
       * Force the metadata on a folder with a metadata cascade policy to be applied to
       * all of its children. This can be used after creating a new cascade policy to
       * enforce the metadata to be cascaded down to all existing files within that
       * folder.
       * @param {string} metadataCascadePolicyId The ID of the cascade policy to force-apply.
      Example: "6fd4ff89-8fc1-42cf-8b29-1890dedd26d7"
       * @param {ApplyMetadataCascadePolicyRequestBody} requestBody Request body of applyMetadataCascadePolicy method
       * @param {ApplyMetadataCascadePolicyOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async applyMetadataCascadePolicy(metadataCascadePolicyId, requestBody, optionalsInput = {}) {
        const optionals = new ApplyMetadataCascadePolicyOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/metadata_cascade_policies/', toString(metadataCascadePolicyId), '/apply'),
            method: 'POST',
            headers: headersMap,
            data: serializeApplyMetadataCascadePolicyRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeCreateMetadataCascadePolicyRequestBodyScopeField(val) {
    return val;
}
export function deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val) {
    if (val == 'global') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateMetadataCascadePolicyRequestBodyScopeField",
    });
}
export function serializeCreateMetadataCascadePolicyRequestBody(val) {
    return {
        ['folder_id']: val.folderId,
        ['scope']: serializeCreateMetadataCascadePolicyRequestBodyScopeField(val.scope),
        ['templateKey']: val.templateKey,
    };
}
export function deserializeCreateMetadataCascadePolicyRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateMetadataCascadePolicyRequestBody"',
        });
    }
    if (val.folder_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder_id" of type "CreateMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.folder_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "folder_id" of type "CreateMetadataCascadePolicyRequestBody"',
        });
    }
    const folderId = val.folder_id;
    if (val.scope == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "scope" of type "CreateMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    const scope = deserializeCreateMetadataCascadePolicyRequestBodyScopeField(val.scope);
    if (val.templateKey == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "templateKey" of type "CreateMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.templateKey)) {
        throw new BoxSdkError({
            message: 'Expecting string for "templateKey" of type "CreateMetadataCascadePolicyRequestBody"',
        });
    }
    const templateKey = val.templateKey;
    return {
        folderId: folderId,
        scope: scope,
        templateKey: templateKey,
    };
}
export function serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val) {
    return val;
}
export function deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val) {
    if (val == 'none') {
        return val;
    }
    if (val == 'overwrite') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ApplyMetadataCascadePolicyRequestBodyConflictResolutionField",
    });
}
export function serializeApplyMetadataCascadePolicyRequestBody(val) {
    return {
        ['conflict_resolution']: serializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val.conflictResolution),
    };
}
export function deserializeApplyMetadataCascadePolicyRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ApplyMetadataCascadePolicyRequestBody"',
        });
    }
    if (val.conflict_resolution == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "conflict_resolution" of type "ApplyMetadataCascadePolicyRequestBody" to be defined',
        });
    }
    const conflictResolution = deserializeApplyMetadataCascadePolicyRequestBodyConflictResolutionField(val.conflict_resolution);
    return {
        conflictResolution: conflictResolution,
    };
}
//# sourceMappingURL=metadataCascadePolicies.generated.js.map