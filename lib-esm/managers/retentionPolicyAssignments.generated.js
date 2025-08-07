import { deserializeRetentionPolicyAssignments } from '../schemas/retentionPolicyAssignments.generated.js';
import { deserializeRetentionPolicyAssignment } from '../schemas/retentionPolicyAssignment.generated.js';
import { deserializeFilesUnderRetention } from '../schemas/filesUnderRetention.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetRetentionPolicyAssignmentsOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetRetentionPolicyAssignmentsHeaders({});
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
export class CreateRetentionPolicyAssignmentOptionals {
    constructor(fields) {
        this.headers = new CreateRetentionPolicyAssignmentHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetRetentionPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetRetentionPolicyAssignmentByIdHeaders({});
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
export class DeleteRetentionPolicyAssignmentByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteRetentionPolicyAssignmentByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFilesUnderRetentionPolicyAssignmentOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetFilesUnderRetentionPolicyAssignmentHeaders({});
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
export class GetRetentionPolicyAssignmentsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateRetentionPolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetRetentionPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteRetentionPolicyAssignmentByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFilesUnderRetentionPolicyAssignmentHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RetentionPolicyAssignmentsManager {
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
       * Returns a list of all retention policy assignments associated with a specified
       * retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {GetRetentionPolicyAssignmentsOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicyAssignments>}
       */
    async getRetentionPolicyAssignments(retentionPolicyId, optionalsInput = {}) {
        const optionals = new GetRetentionPolicyAssignmentsOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['type']: toString(queryParams.type),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', toString(retentionPolicyId), '/assignments'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicyAssignments(response.data),
            rawData: response.data,
        };
    }
    /**
     * Assigns a retention policy to an item.
     * @param {CreateRetentionPolicyAssignmentRequestBody} requestBody Request body of createRetentionPolicyAssignment method
     * @param {CreateRetentionPolicyAssignmentOptionalsInput} optionalsInput
     * @returns {Promise<RetentionPolicyAssignment>}
     */
    async createRetentionPolicyAssignment(requestBody, optionalsInput = {}) {
        const optionals = new CreateRetentionPolicyAssignmentOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateRetentionPolicyAssignmentRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a retention policy assignment.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {GetRetentionPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicyAssignment>}
       */
    async getRetentionPolicyAssignmentById(retentionPolicyAssignmentId, optionalsInput = {}) {
        const optionals = new GetRetentionPolicyAssignmentByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments/', toString(retentionPolicyAssignmentId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicyAssignment(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes a retention policy assignment
       * applied to content.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {DeleteRetentionPolicyAssignmentByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteRetentionPolicyAssignmentById(retentionPolicyAssignmentId, optionalsInput = {}) {
        const optionals = new DeleteRetentionPolicyAssignmentByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments/', toString(retentionPolicyAssignmentId)),
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
       * Returns a list of files under retention for a retention policy assignment.
       * @param {string} retentionPolicyAssignmentId The ID of the retention policy assignment.
      Example: "1233123"
       * @param {GetFilesUnderRetentionPolicyAssignmentOptionalsInput} optionalsInput
       * @returns {Promise<FilesUnderRetention>}
       */
    async getFilesUnderRetentionPolicyAssignment(retentionPolicyAssignmentId, optionalsInput = {}) {
        const optionals = new GetFilesUnderRetentionPolicyAssignmentOptionals({
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
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policy_assignments/', toString(retentionPolicyAssignmentId), '/files_under_retention'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFilesUnderRetention(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val) {
    return val;
}
export function deserializeGetRetentionPolicyAssignmentsQueryParamsTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'metadata_template') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetRetentionPolicyAssignmentsQueryParamsTypeField",
    });
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val) {
    return val;
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'metadata_template') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyAssignmentRequestBodyAssignToTypeField",
    });
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val) {
    return {
        ['type']: serializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateRetentionPolicyAssignmentRequestBodyAssignToField" to be defined',
        });
    }
    const type = deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateRetentionPolicyAssignmentRequestBodyAssignToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val) {
    return { ['field']: val.field, ['value']: val.value };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField"',
        });
    }
    if (!(val.field == void 0) && !sdIsString(val.field)) {
        throw new BoxSdkError({
            message: 'Expecting string for "field" of type "CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField"',
        });
    }
    const field = val.field == void 0 ? void 0 : val.field;
    if (!(val.value == void 0) && !sdIsString(val.value)) {
        throw new BoxSdkError({
            message: 'Expecting string for "value" of type "CreateRetentionPolicyAssignmentRequestBodyFilterFieldsField"',
        });
    }
    const value = val.value == void 0 ? void 0 : val.value;
    return {
        field: field,
        value: value,
    };
}
export function serializeCreateRetentionPolicyAssignmentRequestBody(val) {
    return {
        ['policy_id']: val.policyId,
        ['assign_to']: serializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val.assignTo),
        ['filter_fields']: val.filterFields == void 0
            ? val.filterFields
            : val.filterFields.map(function (item) {
                return serializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(item);
            }),
        ['start_date_field']: val.startDateField,
    };
}
export function deserializeCreateRetentionPolicyAssignmentRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    if (val.policy_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "policy_id" of type "CreateRetentionPolicyAssignmentRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.policy_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_id" of type "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    const policyId = val.policy_id;
    if (val.assign_to == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "assign_to" of type "CreateRetentionPolicyAssignmentRequestBody" to be defined',
        });
    }
    const assignTo = deserializeCreateRetentionPolicyAssignmentRequestBodyAssignToField(val.assign_to);
    if (!(val.filter_fields == void 0) && !sdIsList(val.filter_fields)) {
        throw new BoxSdkError({
            message: 'Expecting array for "filter_fields" of type "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    const filterFields = val.filter_fields == void 0
        ? void 0
        : sdIsList(val.filter_fields)
            ? val.filter_fields.map(function (itm) {
                return deserializeCreateRetentionPolicyAssignmentRequestBodyFilterFieldsField(itm);
            })
            : [];
    if (!(val.start_date_field == void 0) && !sdIsString(val.start_date_field)) {
        throw new BoxSdkError({
            message: 'Expecting string for "start_date_field" of type "CreateRetentionPolicyAssignmentRequestBody"',
        });
    }
    const startDateField = val.start_date_field == void 0 ? void 0 : val.start_date_field;
    return {
        policyId: policyId,
        assignTo: assignTo,
        filterFields: filterFields,
        startDateField: startDateField,
    };
}
//# sourceMappingURL=retentionPolicyAssignments.generated.js.map