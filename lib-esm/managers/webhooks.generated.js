import { deserializeWebhooks } from '../schemas/webhooks.generated.js';
import { deserializeWebhook } from '../schemas/webhook.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { computeWebhookSignature } from '../internal/utils.js';
import { compareSignatures } from '../internal/utils.js';
import { dateTimeFromString } from '../internal/utils.js';
import { getEpochTimeInSeconds } from '../internal/utils.js';
import { dateTimeToEpochSeconds } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateWebhookOptionals {
    constructor(fields) {
        this.headers = new CreateWebhookHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetWebhookByIdOptionals {
    constructor(fields) {
        this.headers = new GetWebhookByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateWebhookByIdOptionals {
    constructor(fields) {
        this.requestBody = {};
        this.headers = new UpdateWebhookByIdHeaders({});
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
export class DeleteWebhookByIdOptionals {
    constructor(fields) {
        this.headers = new DeleteWebhookByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class ValidateMessageOptionals {
    constructor(fields) {
        this.secondaryKey = void 0;
        this.maxAge = 600;
        if (fields.secondaryKey !== undefined) {
            this.secondaryKey = fields.secondaryKey;
        }
        if (fields.maxAge !== undefined) {
            this.maxAge = fields.maxAge;
        }
    }
}
export class GetWebhooksHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateWebhookHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetWebhookByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateWebhookByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteWebhookByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class WebhooksManager {
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
     * Returns all defined webhooks for the requesting application.
     *
     * This API only returns webhooks that are applied to files or folders that are
     * owned by the authenticated user. This means that an admin can not see webhooks
     * created by a service account unless the admin has access to those folders, and
     * vice versa.
     * @param {GetWebhooksQueryParams} queryParams Query parameters of getWebhooks method
     * @param {GetWebhooksHeadersInput} headersInput Headers of getWebhooks method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Webhooks>}
     */
    async getWebhooks(queryParams = {}, headersInput = new GetWebhooksHeaders({}), cancellationToken) {
        const headers = new GetWebhooksHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebhooks(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates a webhook.
     * @param {CreateWebhookRequestBody} requestBody Request body of createWebhook method
     * @param {CreateWebhookOptionalsInput} optionalsInput
     * @returns {Promise<Webhook>}
     */
    async createWebhook(requestBody, optionalsInput = {}) {
        const optionals = new CreateWebhookOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateWebhookRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebhook(response.data),
            rawData: response.data,
        };
    }
    /**
       * Retrieves a specific webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {GetWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<Webhook>}
       */
    async getWebhookById(webhookId, optionalsInput = {}) {
        const optionals = new GetWebhookByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks/', toString(webhookId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebhook(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates a webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {UpdateWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<Webhook>}
       */
    async updateWebhookById(webhookId, optionalsInput = {}) {
        const optionals = new UpdateWebhookByIdOptionals({
            requestBody: optionalsInput.requestBody,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const requestBody = optionals.requestBody;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks/', toString(webhookId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateWebhookByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWebhook(response.data),
            rawData: response.data,
        };
    }
    /**
       * Deletes a webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {DeleteWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteWebhookById(webhookId, optionalsInput = {}) {
        const optionals = new DeleteWebhookByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks/', toString(webhookId)),
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
       * Validate a webhook message by verifying the signature and the delivery timestamp
       * @param {string} body The request body of the webhook message
       * @param {{
          readonly [key: string]: string;
      }} headers The headers of the webhook message
       * @param {string} primaryKey The primary signature to verify the message with
       * @param {ValidateMessageOptionalsInput} optionalsInput
       * @returns {Promise<boolean>}
       */
    static async validateMessage(body, headers, primaryKey, optionalsInput = {}) {
        const optionals = new ValidateMessageOptionals({
            secondaryKey: optionalsInput.secondaryKey,
            maxAge: optionalsInput.maxAge,
        });
        const secondaryKey = optionals.secondaryKey;
        const maxAge = optionals.maxAge;
        const deliveryTimestamp = dateTimeFromString(headers['box-delivery-timestamp']);
        const currentEpoch = getEpochTimeInSeconds();
        if (currentEpoch - maxAge > dateTimeToEpochSeconds(deliveryTimestamp) ||
            dateTimeToEpochSeconds(deliveryTimestamp) > currentEpoch) {
            return false;
        }
        if (!(primaryKey == void 0) &&
            !(headers['box-signature-primary'] == void 0) &&
            (await compareSignatures(await computeWebhookSignature(body, headers, primaryKey, false), headers['box-signature-primary']))) {
            return true;
        }
        if (!(primaryKey == void 0) &&
            !(headers['box-signature-primary'] == void 0) &&
            (await compareSignatures(await computeWebhookSignature(body, headers, primaryKey, true), headers['box-signature-primary']))) {
            return true;
        }
        if (!(secondaryKey == void 0) &&
            !(headers['box-signature-secondary'] == void 0) &&
            (await compareSignatures(await computeWebhookSignature(body, headers, secondaryKey, false), headers['box-signature-secondary']))) {
            return true;
        }
        if (!(secondaryKey == void 0) &&
            !(headers['box-signature-secondary'] == void 0) &&
            (await compareSignatures(await computeWebhookSignature(body, headers, secondaryKey, true), headers['box-signature-secondary']))) {
            return true;
        }
        return false;
    }
}
export function serializeCreateWebhookRequestBodyTargetTypeField(val) {
    return val;
}
export function deserializeCreateWebhookRequestBodyTargetTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateWebhookRequestBodyTargetTypeField",
    });
}
export function serializeCreateWebhookRequestBodyTargetField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateWebhookRequestBodyTargetTypeField(val.type),
    };
}
export function deserializeCreateWebhookRequestBodyTargetField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateWebhookRequestBodyTargetField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateWebhookRequestBodyTargetField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateWebhookRequestBodyTargetTypeField(val.type);
    return { id: id, type: type };
}
export function serializeCreateWebhookRequestBodyTriggersField(val) {
    return val;
}
export function deserializeCreateWebhookRequestBodyTriggersField(val) {
    if (val == 'FILE.UPLOADED') {
        return val;
    }
    if (val == 'FILE.PREVIEWED') {
        return val;
    }
    if (val == 'FILE.DOWNLOADED') {
        return val;
    }
    if (val == 'FILE.TRASHED') {
        return val;
    }
    if (val == 'FILE.DELETED') {
        return val;
    }
    if (val == 'FILE.RESTORED') {
        return val;
    }
    if (val == 'FILE.COPIED') {
        return val;
    }
    if (val == 'FILE.MOVED') {
        return val;
    }
    if (val == 'FILE.LOCKED') {
        return val;
    }
    if (val == 'FILE.UNLOCKED') {
        return val;
    }
    if (val == 'FILE.RENAMED') {
        return val;
    }
    if (val == 'COMMENT.CREATED') {
        return val;
    }
    if (val == 'COMMENT.UPDATED') {
        return val;
    }
    if (val == 'COMMENT.DELETED') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT.CREATED') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT.UPDATED') {
        return val;
    }
    if (val == 'METADATA_INSTANCE.CREATED') {
        return val;
    }
    if (val == 'METADATA_INSTANCE.UPDATED') {
        return val;
    }
    if (val == 'METADATA_INSTANCE.DELETED') {
        return val;
    }
    if (val == 'FOLDER.CREATED') {
        return val;
    }
    if (val == 'FOLDER.RENAMED') {
        return val;
    }
    if (val == 'FOLDER.DOWNLOADED') {
        return val;
    }
    if (val == 'FOLDER.RESTORED') {
        return val;
    }
    if (val == 'FOLDER.DELETED') {
        return val;
    }
    if (val == 'FOLDER.COPIED') {
        return val;
    }
    if (val == 'FOLDER.MOVED') {
        return val;
    }
    if (val == 'FOLDER.TRASHED') {
        return val;
    }
    if (val == 'WEBHOOK.DELETED') {
        return val;
    }
    if (val == 'COLLABORATION.CREATED') {
        return val;
    }
    if (val == 'COLLABORATION.ACCEPTED') {
        return val;
    }
    if (val == 'COLLABORATION.REJECTED') {
        return val;
    }
    if (val == 'COLLABORATION.REMOVED') {
        return val;
    }
    if (val == 'COLLABORATION.UPDATED') {
        return val;
    }
    if (val == 'SHARED_LINK.DELETED') {
        return val;
    }
    if (val == 'SHARED_LINK.CREATED') {
        return val;
    }
    if (val == 'SHARED_LINK.UPDATED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.COMPLETED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.DECLINED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.EXPIRED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateWebhookRequestBodyTriggersField",
    });
}
export function serializeCreateWebhookRequestBody(val) {
    return {
        ['target']: serializeCreateWebhookRequestBodyTargetField(val.target),
        ['address']: val.address,
        ['triggers']: val.triggers.map(function (item) {
            return serializeCreateWebhookRequestBodyTriggersField(item);
        }),
    };
}
export function deserializeCreateWebhookRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateWebhookRequestBody"',
        });
    }
    if (val.target == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "target" of type "CreateWebhookRequestBody" to be defined',
        });
    }
    const target = deserializeCreateWebhookRequestBodyTargetField(val.target);
    if (val.address == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "address" of type "CreateWebhookRequestBody" to be defined',
        });
    }
    if (!sdIsString(val.address)) {
        throw new BoxSdkError({
            message: 'Expecting string for "address" of type "CreateWebhookRequestBody"',
        });
    }
    const address = val.address;
    if (val.triggers == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "triggers" of type "CreateWebhookRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.triggers)) {
        throw new BoxSdkError({
            message: 'Expecting array for "triggers" of type "CreateWebhookRequestBody"',
        });
    }
    const triggers = sdIsList(val.triggers)
        ? val.triggers.map(function (itm) {
            return deserializeCreateWebhookRequestBodyTriggersField(itm);
        })
        : [];
    return {
        target: target,
        address: address,
        triggers: triggers,
    };
}
export function serializeUpdateWebhookByIdRequestBodyTargetTypeField(val) {
    return val;
}
export function deserializeUpdateWebhookByIdRequestBodyTargetTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateWebhookByIdRequestBodyTargetTypeField",
    });
}
export function serializeUpdateWebhookByIdRequestBodyTargetField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateWebhookByIdRequestBodyTargetTypeField(val.type),
    };
}
export function deserializeUpdateWebhookByIdRequestBodyTargetField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateWebhookByIdRequestBodyTargetField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "UpdateWebhookByIdRequestBodyTargetField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeUpdateWebhookByIdRequestBodyTargetTypeField(val.type);
    return {
        id: id,
        type: type,
    };
}
export function serializeUpdateWebhookByIdRequestBodyTriggersField(val) {
    return val;
}
export function deserializeUpdateWebhookByIdRequestBodyTriggersField(val) {
    if (val == 'FILE.UPLOADED') {
        return val;
    }
    if (val == 'FILE.PREVIEWED') {
        return val;
    }
    if (val == 'FILE.DOWNLOADED') {
        return val;
    }
    if (val == 'FILE.TRASHED') {
        return val;
    }
    if (val == 'FILE.DELETED') {
        return val;
    }
    if (val == 'FILE.RESTORED') {
        return val;
    }
    if (val == 'FILE.COPIED') {
        return val;
    }
    if (val == 'FILE.MOVED') {
        return val;
    }
    if (val == 'FILE.LOCKED') {
        return val;
    }
    if (val == 'FILE.UNLOCKED') {
        return val;
    }
    if (val == 'FILE.RENAMED') {
        return val;
    }
    if (val == 'COMMENT.CREATED') {
        return val;
    }
    if (val == 'COMMENT.UPDATED') {
        return val;
    }
    if (val == 'COMMENT.DELETED') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT.CREATED') {
        return val;
    }
    if (val == 'TASK_ASSIGNMENT.UPDATED') {
        return val;
    }
    if (val == 'METADATA_INSTANCE.CREATED') {
        return val;
    }
    if (val == 'METADATA_INSTANCE.UPDATED') {
        return val;
    }
    if (val == 'METADATA_INSTANCE.DELETED') {
        return val;
    }
    if (val == 'FOLDER.CREATED') {
        return val;
    }
    if (val == 'FOLDER.RENAMED') {
        return val;
    }
    if (val == 'FOLDER.DOWNLOADED') {
        return val;
    }
    if (val == 'FOLDER.RESTORED') {
        return val;
    }
    if (val == 'FOLDER.DELETED') {
        return val;
    }
    if (val == 'FOLDER.COPIED') {
        return val;
    }
    if (val == 'FOLDER.MOVED') {
        return val;
    }
    if (val == 'FOLDER.TRASHED') {
        return val;
    }
    if (val == 'WEBHOOK.DELETED') {
        return val;
    }
    if (val == 'COLLABORATION.CREATED') {
        return val;
    }
    if (val == 'COLLABORATION.ACCEPTED') {
        return val;
    }
    if (val == 'COLLABORATION.REJECTED') {
        return val;
    }
    if (val == 'COLLABORATION.REMOVED') {
        return val;
    }
    if (val == 'COLLABORATION.UPDATED') {
        return val;
    }
    if (val == 'SHARED_LINK.DELETED') {
        return val;
    }
    if (val == 'SHARED_LINK.CREATED') {
        return val;
    }
    if (val == 'SHARED_LINK.UPDATED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.COMPLETED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.DECLINED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.EXPIRED') {
        return val;
    }
    if (val == 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize UpdateWebhookByIdRequestBodyTriggersField",
    });
}
export function serializeUpdateWebhookByIdRequestBody(val) {
    return {
        ['target']: val.target == void 0
            ? val.target
            : serializeUpdateWebhookByIdRequestBodyTargetField(val.target),
        ['address']: val.address,
        ['triggers']: val.triggers == void 0
            ? val.triggers
            : val.triggers.map(function (item) {
                return serializeUpdateWebhookByIdRequestBodyTriggersField(item);
            }),
    };
}
export function deserializeUpdateWebhookByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateWebhookByIdRequestBody"',
        });
    }
    const target = val.target == void 0
        ? void 0
        : deserializeUpdateWebhookByIdRequestBodyTargetField(val.target);
    if (!(val.address == void 0) && !sdIsString(val.address)) {
        throw new BoxSdkError({
            message: 'Expecting string for "address" of type "UpdateWebhookByIdRequestBody"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.triggers == void 0) && !sdIsList(val.triggers)) {
        throw new BoxSdkError({
            message: 'Expecting array for "triggers" of type "UpdateWebhookByIdRequestBody"',
        });
    }
    const triggers = val.triggers == void 0
        ? void 0
        : sdIsList(val.triggers)
            ? val.triggers.map(function (itm) {
                return deserializeUpdateWebhookByIdRequestBodyTriggersField(itm);
            })
            : [];
    return {
        target: target,
        address: address,
        triggers: triggers,
    };
}
//# sourceMappingURL=webhooks.generated.js.map