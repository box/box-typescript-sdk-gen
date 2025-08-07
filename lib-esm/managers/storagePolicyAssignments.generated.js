import { deserializeStoragePolicyAssignments } from '../schemas/storagePolicyAssignments.generated.js';
import { deserializeStoragePolicyAssignment } from '../schemas/storagePolicyAssignment.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetStoragePolicyAssignmentsOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyAssignmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateStoragePolicyAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateStoragePolicyAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetStoragePolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetStoragePolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateStoragePolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateStoragePolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteStoragePolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteStoragePolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetStoragePolicyAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateStoragePolicyAssignmentRequestBodyStoragePolicyField {
    constructor(fields) {
        /**
         * The type to assign. */
        this.type = 'storage_policy';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateStoragePolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetStoragePolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField {
    constructor(fields) {
        /**
         * The type to assign. */
        this.type = 'storage_policy';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class UpdateStoragePolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteStoragePolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class StoragePolicyAssignmentsManager {
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
     * Fetches all the storage policy assignment for an enterprise or user.
     * @param {GetStoragePolicyAssignmentsQueryParams} queryParams Query parameters of getStoragePolicyAssignments method
     * @param {GetStoragePolicyAssignmentsOptionalsInput} optionalsInput
     * @returns {Promise<StoragePolicyAssignments>}
     */
    async getStoragePolicyAssignments(queryParams, optionalsInput = {}) {
        const optionals = new GetStoragePolicyAssignmentsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['resolved_for_type']: toString(queryParams.resolvedForType),
            ['resolved_for_id']: toString(queryParams.resolvedForId),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeStoragePolicyAssignments(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a storage policy assignment for an enterprise or user.
     * @param {CreateStoragePolicyAssignmentRequestBody} requestBody Request body of createStoragePolicyAssignment method
     * @param {CreateStoragePolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<StoragePolicyAssignment>}
     */
    async createStoragePolicyAssignment(requestBody, optionalsInput = {}) {
        const optionals = new CreateStoragePolicyAssignmentOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateStoragePolicyAssignmentRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeStoragePolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Fetches a specific storage policy assignment.
       * @param {string} storagePolicyAssignmentId The ID of the storage policy assignment.
      Example: "932483"
       * @param {GetStoragePolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicyAssignment>}
       */
    async getStoragePolicyAssignmentById(storagePolicyAssignmentId, optionalsInput = {}) {
        const optionals = new GetStoragePolicyAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments/', toString(storagePolicyAssignmentId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeStoragePolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a specific storage policy assignment.
       * @param {string} storagePolicyAssignmentId The ID of the storage policy assignment.
      Example: "932483"
       * @param {UpdateStoragePolicyAssignmentByIdRequestBody} requestBody Request body of updateStoragePolicyAssignmentById method
       * @param {UpdateStoragePolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<StoragePolicyAssignment>}
       */
    async updateStoragePolicyAssignmentById(storagePolicyAssignmentId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateStoragePolicyAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments/', toString(storagePolicyAssignmentId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateStoragePolicyAssignmentByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeStoragePolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Delete a storage policy assignment.
       *
       * Deleting a storage policy assignment on a user
       * will have the user inherit the enterprise's default
       * storage policy.
       *
       * There is a rate limit for calling this endpoint of only
       * twice per user in a 24 hour time frame.
       * @param {string} storagePolicyAssignmentId The ID of the storage policy assignment.
      Example: "932483"
       * @param {DeleteStoragePolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteStoragePolicyAssignmentById(storagePolicyAssignmentId, optionalsInput = {}) {
        const optionals = new DeleteStoragePolicyAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/storage_policy_assignments/', toString(storagePolicyAssignmentId)),
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
export function serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val) {
    return val;
}
export function deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField(val) {
    if (val == 'user') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField",
    });
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val) {
    return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val) {
    if (val == 'storage_policy') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField",
    });
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val) {
    return {
        ['type']: serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField" to be defined',
        });
    }
    const type = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateStoragePolicyAssignmentRequestBodyStoragePolicyFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val) {
    return val;
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val) {
    if (val == 'user') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField",
    });
}
export function serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val) {
    return {
        ['type']: serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBodyAssignedToField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateStoragePolicyAssignmentRequestBodyAssignedToField" to be defined',
        });
    }
    const type = deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateStoragePolicyAssignmentRequestBodyAssignedToField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateStoragePolicyAssignmentRequestBodyAssignedToField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateStoragePolicyAssignmentRequestBody(val) {
    return {
        ['storage_policy']: serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val.storagePolicy),
        ['assigned_to']: serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val.assignedTo),
    };
}
export function deserializeCreateStoragePolicyAssignmentRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateStoragePolicyAssignmentRequestBody"',
        });
    }
    if (val.storage_policy == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "storage_policy" of type "CreateStoragePolicyAssignmentRequestBody" to be defined',
        });
    }
    const storagePolicy = deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField(val.storage_policy);
    if (val.assigned_to == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "assigned_to" of type "CreateStoragePolicyAssignmentRequestBody" to be defined',
        });
    }
    const assignedTo = deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField(val.assigned_to);
    return {
        storagePolicy: storagePolicy,
        assignedTo: assignedTo,
    };
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val) {
    return val;
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val) {
    if (val == 'storage_policy') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField",
    });
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val) {
    return {
        ['type']: serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField" to be defined',
        });
    }
    const type = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeUpdateStoragePolicyAssignmentByIdRequestBody(val) {
    return {
        ['storage_policy']: serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val.storagePolicy),
    };
}
export function deserializeUpdateStoragePolicyAssignmentByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateStoragePolicyAssignmentByIdRequestBody"',
        });
    }
    if (val.storage_policy == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "storage_policy" of type "UpdateStoragePolicyAssignmentByIdRequestBody" to be defined',
        });
    }
    const storagePolicy = deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField(val.storage_policy);
    return {
        storagePolicy: storagePolicy,
    };
}
//# sourceMappingURL=storagePolicyAssignments.generated.js.map