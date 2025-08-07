import { deserializeRetentionPolicies } from '../schemas/retentionPolicies.generated.js';
import { deserializeRetentionPolicy } from '../schemas/retentionPolicy.generated.js';
import { serializeUserMini } from '../schemas/userMini.generated.js';
import { deserializeUserMini } from '../schemas/userMini.generated.js';
import { serializeUserBase } from '../schemas/userBase.generated.js';
import { deserializeUserBase } from '../schemas/userBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateRetentionPolicyOptionals {
    constructor(fields) {
        this.headers = new CreateRetentionPolicyHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetRetentionPolicyByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetRetentionPolicyByIdHeaders({});
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
export class UpdateRetentionPolicyByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateRetentionPolicyByIdHeaders({});
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
export class DeleteRetentionPolicyByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteRetentionPolicyByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetRetentionPoliciesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateRetentionPolicyHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetRetentionPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateRetentionPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteRetentionPolicyByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class RetentionPoliciesManager {
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
     * Retrieves all of the retention policies for an enterprise.
     * @param {GetRetentionPoliciesQueryParams} queryParams Query parameters of getRetentionPolicies method
     * @param {GetRetentionPoliciesHeadersInput} headersInput Headers of getRetentionPolicies method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<RetentionPolicies>}
     */
    async getRetentionPolicies(queryParams = {}, headersInput = new GetRetentionPoliciesHeaders({}), cancellationToken) {
        const headers = new GetRetentionPoliciesHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['policy_name']: toString(queryParams.policyName),
            ['policy_type']: toString(queryParams.policyType),
            ['created_by_user_id']: toString(queryParams.createdByUserId),
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
            ['limit']: toString(queryParams.limit),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicies(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a retention policy.
     * @param {CreateRetentionPolicyRequestBody} requestBody Request body of createRetentionPolicy method
     * @param {CreateRetentionPolicyOptionalsInput} optionalsInput
     * @returns {Promise<RetentionPolicy>}
     */
    async createRetentionPolicy(requestBody, optionalsInput = {}) {
        const optionals = new CreateRetentionPolicyOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateRetentionPolicyRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {GetRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicy>}
       */
    async getRetentionPolicyById(retentionPolicyId, optionalsInput = {}) {
        const optionals = new GetRetentionPolicyByIdOptionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', toString(retentionPolicyId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {UpdateRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<RetentionPolicy>}
       */
    async updateRetentionPolicyById(retentionPolicyId, optionalsInput = {}) {
        const optionals = new UpdateRetentionPolicyByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', toString(retentionPolicyId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateRetentionPolicyByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeRetentionPolicy(response.data),
            rawData: response.data,
        };
    }
    /**
       * Permanently deletes a retention policy.
       * @param {string} retentionPolicyId The ID of the retention policy.
      Example: "982312"
       * @param {DeleteRetentionPolicyByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteRetentionPolicyById(retentionPolicyId, optionalsInput = {}) {
        const optionals = new DeleteRetentionPolicyByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/retention_policies/', toString(retentionPolicyId)),
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
export function serializeGetRetentionPoliciesQueryParamsPolicyTypeField(val) {
    return val;
}
export function deserializeGetRetentionPoliciesQueryParamsPolicyTypeField(val) {
    if (val == 'finite') {
        return val;
    }
    if (val == 'indefinite') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetRetentionPoliciesQueryParamsPolicyTypeField",
    });
}
export function serializeCreateRetentionPolicyRequestBodyPolicyTypeField(val) {
    return val;
}
export function deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val) {
    if (val == 'finite') {
        return val;
    }
    if (val == 'indefinite') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyRequestBodyPolicyTypeField",
    });
}
export function serializeCreateRetentionPolicyRequestBodyDispositionActionField(val) {
    return val;
}
export function deserializeCreateRetentionPolicyRequestBodyDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyRequestBodyDispositionActionField",
    });
}
export function serializeCreateRetentionPolicyRequestBodyRetentionTypeField(val) {
    return val;
}
export function deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(val) {
    if (val == 'modifiable') {
        return val;
    }
    if (val == 'non_modifiable') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateRetentionPolicyRequestBodyRetentionTypeField",
    });
}
export function serializeCreateRetentionPolicyRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['policy_type']: serializeCreateRetentionPolicyRequestBodyPolicyTypeField(val.policyType),
        ['disposition_action']: serializeCreateRetentionPolicyRequestBodyDispositionActionField(val.dispositionAction),
        ['retention_length']: val.retentionLength,
        ['retention_type']: val.retentionType == void 0
            ? val.retentionType
            : serializeCreateRetentionPolicyRequestBodyRetentionTypeField(val.retentionType),
        ['can_owner_extend_retention']: val.canOwnerExtendRetention,
        ['are_owners_notified']: val.areOwnersNotified,
        ['custom_notification_recipients']: val.customNotificationRecipients == void 0
            ? val.customNotificationRecipients
            : val.customNotificationRecipients.map(function (item) {
                return serializeUserMini(item);
            }),
    };
}
export function deserializeCreateRetentionPolicyRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateRetentionPolicyRequestBody"',
        });
    }
    if (val.policy_name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "policy_name" of type "CreateRetentionPolicyRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.policy_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_name" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const policyName = val.policy_name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.policy_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "policy_type" of type "CreateRetentionPolicyRequestBody" to be defined',
        });
    }
    const policyType = deserializeCreateRetentionPolicyRequestBodyPolicyTypeField(val.policy_type);
    if (val.disposition_action == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "disposition_action" of type "CreateRetentionPolicyRequestBody" to be defined',
        });
    }
    const dispositionAction = deserializeCreateRetentionPolicyRequestBodyDispositionActionField(val.disposition_action);
    if (!(val.retention_length == void 0) && !sdIsString(val.retention_length)) {
        throw new BoxSdkError({
            message: 'Expecting string for "retention_length" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    const retentionType = val.retention_type == void 0
        ? void 0
        : deserializeCreateRetentionPolicyRequestBodyRetentionTypeField(val.retention_type);
    if (!(val.can_owner_extend_retention == void 0) &&
        !sdIsBoolean(val.can_owner_extend_retention)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_owner_extend_retention" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const canOwnerExtendRetention = val.can_owner_extend_retention == void 0
        ? void 0
        : val.can_owner_extend_retention;
    if (!(val.are_owners_notified == void 0) &&
        !sdIsBoolean(val.are_owners_notified)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "are_owners_notified" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const areOwnersNotified = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    if (!(val.custom_notification_recipients == void 0) &&
        !sdIsList(val.custom_notification_recipients)) {
        throw new BoxSdkError({
            message: 'Expecting array for "custom_notification_recipients" of type "CreateRetentionPolicyRequestBody"',
        });
    }
    const customNotificationRecipients = val.custom_notification_recipients == void 0
        ? void 0
        : sdIsList(val.custom_notification_recipients)
            ? val.custom_notification_recipients.map(function (itm) {
                return deserializeUserMini(itm);
            })
            : [];
    return {
        policyName: policyName,
        description: description,
        policyType: policyType,
        dispositionAction: dispositionAction,
        retentionLength: retentionLength,
        retentionType: retentionType,
        canOwnerExtendRetention: canOwnerExtendRetention,
        areOwnersNotified: areOwnersNotified,
        customNotificationRecipients: customNotificationRecipients,
    };
}
export function serializeUpdateRetentionPolicyByIdRequestBody(val) {
    return {
        ['policy_name']: val.policyName,
        ['description']: val.description,
        ['disposition_action']: val.dispositionAction,
        ['retention_type']: val.retentionType,
        ['retention_length']: val.retentionLength,
        ['status']: val.status,
        ['can_owner_extend_retention']: val.canOwnerExtendRetention,
        ['are_owners_notified']: val.areOwnersNotified,
        ['custom_notification_recipients']: val.customNotificationRecipients == void 0
            ? val.customNotificationRecipients
            : val.customNotificationRecipients.map(function (item) {
                return serializeUserBase(item);
            }),
    };
}
export function deserializeUpdateRetentionPolicyByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    if (!(val.policy_name == void 0) && !sdIsString(val.policy_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_name" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.disposition_action == void 0) &&
        !sdIsString(val.disposition_action)) {
        throw new BoxSdkError({
            message: 'Expecting string for "disposition_action" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const dispositionAction = val.disposition_action == void 0 ? void 0 : val.disposition_action;
    if (!(val.retention_type == void 0) && !sdIsString(val.retention_type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "retention_type" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const retentionType = val.retention_type == void 0 ? void 0 : val.retention_type;
    if (!(val.retention_length == void 0) && !sdIsString(val.retention_length)) {
        throw new BoxSdkError({
            message: 'Expecting string for "retention_length" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    if (!(val.status == void 0) && !sdIsString(val.status)) {
        throw new BoxSdkError({
            message: 'Expecting string for "status" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.can_owner_extend_retention == void 0) &&
        !sdIsBoolean(val.can_owner_extend_retention)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "can_owner_extend_retention" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const canOwnerExtendRetention = val.can_owner_extend_retention == void 0
        ? void 0
        : val.can_owner_extend_retention;
    if (!(val.are_owners_notified == void 0) &&
        !sdIsBoolean(val.are_owners_notified)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "are_owners_notified" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const areOwnersNotified = val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
    if (!(val.custom_notification_recipients == void 0) &&
        !sdIsList(val.custom_notification_recipients)) {
        throw new BoxSdkError({
            message: 'Expecting array for "custom_notification_recipients" of type "UpdateRetentionPolicyByIdRequestBody"',
        });
    }
    const customNotificationRecipients = val.custom_notification_recipients == void 0
        ? void 0
        : sdIsList(val.custom_notification_recipients)
            ? val.custom_notification_recipients.map(function (itm) {
                return deserializeUserBase(itm);
            })
            : [];
    return {
        policyName: policyName,
        description: description,
        dispositionAction: dispositionAction,
        retentionType: retentionType,
        retentionLength: retentionLength,
        status: status,
        canOwnerExtendRetention: canOwnerExtendRetention,
        areOwnersNotified: areOwnersNotified,
        customNotificationRecipients: customNotificationRecipients,
    };
}
//# sourceMappingURL=retentionPolicies.generated.js.map