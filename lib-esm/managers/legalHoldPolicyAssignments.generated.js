import { deserializeLegalHoldPolicyAssignments } from '../schemas/legalHoldPolicyAssignments.generated.js';
import { deserializeLegalHoldPolicyAssignment } from '../schemas/legalHoldPolicyAssignment.generated.js';
import { deserializeFilesOnHold } from '../schemas/filesOnHold.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetLegalHoldPolicyAssignmentsOptionals {
    constructor(fields) {
        this.headers = new GetLegalHoldPolicyAssignmentsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateLegalHoldPolicyAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateLegalHoldPolicyAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetLegalHoldPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new GetLegalHoldPolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteLegalHoldPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteLegalHoldPolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetLegalHoldPolicyAssignmentFileOnHoldOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetLegalHoldPolicyAssignmentFileOnHoldHeaders({});
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
export class GetLegalHoldPolicyAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateLegalHoldPolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetLegalHoldPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteLegalHoldPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetLegalHoldPolicyAssignmentFileOnHoldHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class LegalHoldPolicyAssignmentsManager {
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
     * Retrieves a list of items a legal hold policy has been assigned to.
     * @param {GetLegalHoldPolicyAssignmentsQueryParams} queryParams Query parameters of getLegalHoldPolicyAssignments method
     * @param {GetLegalHoldPolicyAssignmentsOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicyAssignments>}
     */
    async getLegalHoldPolicyAssignments(queryParams, optionalsInput = {}) {
        const optionals = new GetLegalHoldPolicyAssignmentsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['policy_id']: toString(queryParams.policyId),
            ['assign_to_type']: toString(queryParams.assignToType),
            ['assign_to_id']: toString(queryParams.assignToId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicyAssignments(response.data),
            rawData: response.data,
        };
    }
    /**
     * Assign a legal hold to a file, file version, folder, or user.
     * @param {CreateLegalHoldPolicyAssignmentRequestBody} requestBody Request body of createLegalHoldPolicyAssignment method
     * @param {CreateLegalHoldPolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<LegalHoldPolicyAssignment>}
     */
    async createLegalHoldPolicyAssignment(requestBody, optionalsInput = {}) {
        const optionals = new CreateLegalHoldPolicyAssignmentOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateLegalHoldPolicyAssignmentRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieve a legal hold policy assignment.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {GetLegalHoldPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<LegalHoldPolicyAssignment>}
       */
    async getLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId, optionalsInput = {}) {
        const optionals = new GetLegalHoldPolicyAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments/', toString(legalHoldPolicyAssignmentId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeLegalHoldPolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Remove a legal hold from an item.
       *
       * This is an asynchronous process. The policy will not be
       * fully removed yet when the response returns.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {DeleteLegalHoldPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteLegalHoldPolicyAssignmentById(legalHoldPolicyAssignmentId, optionalsInput = {}) {
        const optionals = new DeleteLegalHoldPolicyAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments/', toString(legalHoldPolicyAssignmentId)),
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
       * Get a list of files with current file versions for a legal hold
       * assignment.
       *
       * In some cases you may want to get previous file versions instead. In these
       * cases, use the `GET  /legal_hold_policy_assignments/:id/file_versions_on_hold`
       * API instead to return any previous versions of a file for this legal hold
       * policy assignment.
       *
       * Due to ongoing re-architecture efforts this API might not return all file
       * versions held for this policy ID. Instead, this API will only return the
       * latest file version held in the newly developed architecture. The `GET
       * /file_version_legal_holds` API can be used to fetch current and past versions
       * of files held within the legacy architecture.
       *
       * This endpoint does not support returning any content that is on hold due to
       * a Custodian collaborating on a Hub.
       *
       * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
       * find a list of policy assignments for a given policy ID.
       * @param {string} legalHoldPolicyAssignmentId The ID of the legal hold policy assignment.
      Example: "753465"
       * @param {GetLegalHoldPolicyAssignmentFileOnHoldOptionalsInput} optionalsInput
       * @returns {Promise<FilesOnHold>}
       */
    async getLegalHoldPolicyAssignmentFileOnHold(legalHoldPolicyAssignmentId, optionalsInput = {}) {
        const optionals = new GetLegalHoldPolicyAssignmentFileOnHoldOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/legal_hold_policy_assignments/', toString(legalHoldPolicyAssignmentId), '/files_on_hold'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFilesOnHold(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val) {
    return val;
}
export function deserializeGetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'file_version') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (val == 'ownership') {
        return val;
    }
    if (val == 'interactions') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetLegalHoldPolicyAssignmentsQueryParamsAssignToTypeField",
    });
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val) {
    return val;
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'file_version') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if (val == 'ownership') {
        return val;
    }
    if (val == 'interaction') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField",
    });
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val) {
    return {
        ['type']: serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField" to be defined',
        });
    }
    const type = deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateLegalHoldPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateLegalHoldPolicyAssignmentRequestBody(val) {
    return {
        ['policy_id']: val.policyId,
        ['assign_to']: serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val.assignTo),
    };
}
export function deserializeCreateLegalHoldPolicyAssignmentRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateLegalHoldPolicyAssignmentRequestBody"',
        });
    }
    if (val.policy_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "policy_id" of type "CreateLegalHoldPolicyAssignmentRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.policy_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_id" of type "CreateLegalHoldPolicyAssignmentRequestBody"',
        });
    }
    const policyId = val.policy_id;
    if (val.assign_to == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "assign_to" of type "CreateLegalHoldPolicyAssignmentRequestBody" to be defined',
        });
    }
    const assignTo = deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField(val.assign_to);
    return {
        policyId: policyId,
        assignTo: assignTo,
    };
}
//# sourceMappingURL=legalHoldPolicyAssignments.generated.js.map