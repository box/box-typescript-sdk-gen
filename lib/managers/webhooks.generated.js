"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksManager = exports.DeleteWebhookByIdHeaders = exports.UpdateWebhookByIdHeaders = exports.GetWebhookByIdHeaders = exports.CreateWebhookHeaders = exports.GetWebhooksHeaders = exports.ValidateMessageOptionals = exports.DeleteWebhookByIdOptionals = exports.UpdateWebhookByIdOptionals = exports.GetWebhookByIdOptionals = exports.CreateWebhookOptionals = void 0;
exports.serializeCreateWebhookRequestBodyTargetTypeField = serializeCreateWebhookRequestBodyTargetTypeField;
exports.deserializeCreateWebhookRequestBodyTargetTypeField = deserializeCreateWebhookRequestBodyTargetTypeField;
exports.serializeCreateWebhookRequestBodyTargetField = serializeCreateWebhookRequestBodyTargetField;
exports.deserializeCreateWebhookRequestBodyTargetField = deserializeCreateWebhookRequestBodyTargetField;
exports.serializeCreateWebhookRequestBodyTriggersField = serializeCreateWebhookRequestBodyTriggersField;
exports.deserializeCreateWebhookRequestBodyTriggersField = deserializeCreateWebhookRequestBodyTriggersField;
exports.serializeCreateWebhookRequestBody = serializeCreateWebhookRequestBody;
exports.deserializeCreateWebhookRequestBody = deserializeCreateWebhookRequestBody;
exports.serializeUpdateWebhookByIdRequestBodyTargetTypeField = serializeUpdateWebhookByIdRequestBodyTargetTypeField;
exports.deserializeUpdateWebhookByIdRequestBodyTargetTypeField = deserializeUpdateWebhookByIdRequestBodyTargetTypeField;
exports.serializeUpdateWebhookByIdRequestBodyTargetField = serializeUpdateWebhookByIdRequestBodyTargetField;
exports.deserializeUpdateWebhookByIdRequestBodyTargetField = deserializeUpdateWebhookByIdRequestBodyTargetField;
exports.serializeUpdateWebhookByIdRequestBodyTriggersField = serializeUpdateWebhookByIdRequestBodyTriggersField;
exports.deserializeUpdateWebhookByIdRequestBodyTriggersField = deserializeUpdateWebhookByIdRequestBodyTriggersField;
exports.serializeUpdateWebhookByIdRequestBody = serializeUpdateWebhookByIdRequestBody;
exports.deserializeUpdateWebhookByIdRequestBody = deserializeUpdateWebhookByIdRequestBody;
const webhooks_generated_js_1 = require("../schemas/webhooks.generated.js");
const webhook_generated_js_1 = require("../schemas/webhook.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const utils_js_7 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class CreateWebhookOptionals {
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
exports.CreateWebhookOptionals = CreateWebhookOptionals;
class GetWebhookByIdOptionals {
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
exports.GetWebhookByIdOptionals = GetWebhookByIdOptionals;
class UpdateWebhookByIdOptionals {
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
exports.UpdateWebhookByIdOptionals = UpdateWebhookByIdOptionals;
class DeleteWebhookByIdOptionals {
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
exports.DeleteWebhookByIdOptionals = DeleteWebhookByIdOptionals;
class ValidateMessageOptionals {
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
exports.ValidateMessageOptionals = ValidateMessageOptionals;
class GetWebhooksHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetWebhooksHeaders = GetWebhooksHeaders;
class CreateWebhookHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateWebhookHeaders = CreateWebhookHeaders;
class GetWebhookByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetWebhookByIdHeaders = GetWebhookByIdHeaders;
class UpdateWebhookByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.UpdateWebhookByIdHeaders = UpdateWebhookByIdHeaders;
class DeleteWebhookByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.DeleteWebhookByIdHeaders = DeleteWebhookByIdHeaders;
class WebhooksManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    getWebhooks() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetWebhooksHeaders({}), cancellationToken) {
            const headers = new GetWebhooksHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, webhooks_generated_js_1.deserializeWebhooks)(response.data)), { rawData: response.data });
        });
    }
    /**
     * Creates a webhook.
     * @param {CreateWebhookRequestBody} requestBody Request body of createWebhook method
     * @param {CreateWebhookOptionalsInput} optionalsInput
     * @returns {Promise<Webhook>}
     */
    createWebhook(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateWebhookOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
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
            return Object.assign(Object.assign({}, (0, webhook_generated_js_1.deserializeWebhook)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Retrieves a specific webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {GetWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<Webhook>}
       */
    getWebhookById(webhookId_1) {
        return __awaiter(this, arguments, void 0, function* (webhookId, optionalsInput = {}) {
            const optionals = new GetWebhookByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks/', (0, utils_js_2.toString)(webhookId)),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, webhook_generated_js_1.deserializeWebhook)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Updates a webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {UpdateWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<Webhook>}
       */
    updateWebhookById(webhookId_1) {
        return __awaiter(this, arguments, void 0, function* (webhookId, optionalsInput = {}) {
            const optionals = new UpdateWebhookByIdOptionals({
                requestBody: optionalsInput.requestBody,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const requestBody = optionals.requestBody;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks/', (0, utils_js_2.toString)(webhookId)),
                method: 'PUT',
                headers: headersMap,
                data: serializeUpdateWebhookByIdRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, webhook_generated_js_1.deserializeWebhook)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Deletes a webhook.
       * @param {string} webhookId The ID of the webhook.
      Example: "3321123"
       * @param {DeleteWebhookByIdOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteWebhookById(webhookId_1) {
        return __awaiter(this, arguments, void 0, function* (webhookId, optionalsInput = {}) {
            const optionals = new DeleteWebhookByIdOptionals({
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/webhooks/', (0, utils_js_2.toString)(webhookId)),
                method: 'DELETE',
                headers: headersMap,
                responseFormat: 'no_content',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return void 0;
        });
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
    static validateMessage(body_1, headers_1, primaryKey_1) {
        return __awaiter(this, arguments, void 0, function* (body, headers, primaryKey, optionalsInput = {}) {
            const optionals = new ValidateMessageOptionals({
                secondaryKey: optionalsInput.secondaryKey,
                maxAge: optionalsInput.maxAge,
            });
            const secondaryKey = optionals.secondaryKey;
            const maxAge = optionals.maxAge;
            const deliveryTimestamp = (0, utils_js_5.dateTimeFromString)(headers['box-delivery-timestamp']);
            const currentEpoch = (0, utils_js_6.getEpochTimeInSeconds)();
            if (currentEpoch - maxAge > (0, utils_js_7.dateTimeToEpochSeconds)(deliveryTimestamp) ||
                (0, utils_js_7.dateTimeToEpochSeconds)(deliveryTimestamp) > currentEpoch) {
                return false;
            }
            if (!(primaryKey == void 0) &&
                !(headers['box-signature-primary'] == void 0) &&
                (yield (0, utils_js_4.compareSignatures)(yield (0, utils_js_3.computeWebhookSignature)(body, headers, primaryKey, false), headers['box-signature-primary']))) {
                return true;
            }
            if (!(primaryKey == void 0) &&
                !(headers['box-signature-primary'] == void 0) &&
                (yield (0, utils_js_4.compareSignatures)(yield (0, utils_js_3.computeWebhookSignature)(body, headers, primaryKey, true), headers['box-signature-primary']))) {
                return true;
            }
            if (!(secondaryKey == void 0) &&
                !(headers['box-signature-secondary'] == void 0) &&
                (yield (0, utils_js_4.compareSignatures)(yield (0, utils_js_3.computeWebhookSignature)(body, headers, secondaryKey, false), headers['box-signature-secondary']))) {
                return true;
            }
            if (!(secondaryKey == void 0) &&
                !(headers['box-signature-secondary'] == void 0) &&
                (yield (0, utils_js_4.compareSignatures)(yield (0, utils_js_3.computeWebhookSignature)(body, headers, secondaryKey, true), headers['box-signature-secondary']))) {
                return true;
            }
            return false;
        });
    }
}
exports.WebhooksManager = WebhooksManager;
function serializeCreateWebhookRequestBodyTargetTypeField(val) {
    return val;
}
function deserializeCreateWebhookRequestBodyTargetTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateWebhookRequestBodyTargetTypeField",
    });
}
function serializeCreateWebhookRequestBodyTargetField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateWebhookRequestBodyTargetTypeField(val.type),
    };
}
function deserializeCreateWebhookRequestBodyTargetField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateWebhookRequestBodyTargetField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateWebhookRequestBodyTargetField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeCreateWebhookRequestBodyTargetTypeField(val.type);
    return { id: id, type: type };
}
function serializeCreateWebhookRequestBodyTriggersField(val) {
    return val;
}
function deserializeCreateWebhookRequestBodyTriggersField(val) {
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
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateWebhookRequestBodyTriggersField",
    });
}
function serializeCreateWebhookRequestBody(val) {
    return {
        ['target']: serializeCreateWebhookRequestBodyTargetField(val.target),
        ['address']: val.address,
        ['triggers']: val.triggers.map(function (item) {
            return serializeCreateWebhookRequestBodyTriggersField(item);
        }),
    };
}
function deserializeCreateWebhookRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateWebhookRequestBody"',
        });
    }
    if (val.target == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "target" of type "CreateWebhookRequestBody" to be defined',
        });
    }
    const target = deserializeCreateWebhookRequestBodyTargetField(val.target);
    if (val.address == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "address" of type "CreateWebhookRequestBody" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.address)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "address" of type "CreateWebhookRequestBody"',
        });
    }
    const address = val.address;
    if (val.triggers == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "triggers" of type "CreateWebhookRequestBody" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.triggers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "triggers" of type "CreateWebhookRequestBody"',
        });
    }
    const triggers = (0, json_js_2.sdIsList)(val.triggers)
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
function serializeUpdateWebhookByIdRequestBodyTargetTypeField(val) {
    return val;
}
function deserializeUpdateWebhookByIdRequestBodyTargetTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateWebhookByIdRequestBodyTargetTypeField",
    });
}
function serializeUpdateWebhookByIdRequestBodyTargetField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeUpdateWebhookByIdRequestBodyTargetTypeField(val.type),
    };
}
function deserializeUpdateWebhookByIdRequestBodyTargetField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateWebhookByIdRequestBodyTargetField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeUpdateWebhookByIdRequestBodyTriggersField(val) {
    return val;
}
function deserializeUpdateWebhookByIdRequestBodyTriggersField(val) {
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
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UpdateWebhookByIdRequestBodyTriggersField",
    });
}
function serializeUpdateWebhookByIdRequestBody(val) {
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
function deserializeUpdateWebhookByIdRequestBody(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UpdateWebhookByIdRequestBody"',
        });
    }
    const target = val.target == void 0
        ? void 0
        : deserializeUpdateWebhookByIdRequestBodyTargetField(val.target);
    if (!(val.address == void 0) && !(0, json_js_1.sdIsString)(val.address)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "address" of type "UpdateWebhookByIdRequestBody"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.triggers == void 0) && !(0, json_js_2.sdIsList)(val.triggers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "triggers" of type "UpdateWebhookByIdRequestBody"',
        });
    }
    const triggers = val.triggers == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.triggers)
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