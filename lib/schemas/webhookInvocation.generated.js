"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeWebhookInvocationTypeField = serializeWebhookInvocationTypeField;
exports.deserializeWebhookInvocationTypeField = deserializeWebhookInvocationTypeField;
exports.serializeWebhookInvocationTriggerField = serializeWebhookInvocationTriggerField;
exports.deserializeWebhookInvocationTriggerField = deserializeWebhookInvocationTriggerField;
exports.serializeWebhookInvocation = serializeWebhookInvocation;
exports.deserializeWebhookInvocation = deserializeWebhookInvocation;
const webhook_generated_js_1 = require("./webhook.generated.js");
const webhook_generated_js_2 = require("./webhook.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const fileOrFolder_generated_js_1 = require("./fileOrFolder.generated.js");
const fileOrFolder_generated_js_2 = require("./fileOrFolder.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeWebhookInvocationTypeField(val) {
    return val;
}
function deserializeWebhookInvocationTypeField(val) {
    if (val == 'webhook_event') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize WebhookInvocationTypeField",
    });
}
function serializeWebhookInvocationTriggerField(val) {
    return val;
}
function deserializeWebhookInvocationTriggerField(val) {
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
        message: "Can't deserialize WebhookInvocationTriggerField",
    });
}
function serializeWebhookInvocation(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeWebhookInvocationTypeField(val.type),
        ['webhook']: val.webhook == void 0 ? val.webhook : (0, webhook_generated_js_1.serializeWebhook)(val.webhook),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['trigger']: val.trigger == void 0
            ? val.trigger
            : serializeWebhookInvocationTriggerField(val.trigger),
        ['source']: val.source == void 0 ? val.source : (0, fileOrFolder_generated_js_1.serializeFileOrFolder)(val.source),
    };
}
function deserializeWebhookInvocation(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WebhookInvocation"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebhookInvocation"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeWebhookInvocationTypeField(val.type);
    const webhook = val.webhook == void 0 ? void 0 : (0, webhook_generated_js_2.deserializeWebhook)(val.webhook);
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "WebhookInvocation"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const trigger = val.trigger == void 0
        ? void 0
        : deserializeWebhookInvocationTriggerField(val.trigger);
    const source = val.source == void 0 ? void 0 : (0, fileOrFolder_generated_js_2.deserializeFileOrFolder)(val.source);
    return {
        id: id,
        type: type,
        webhook: webhook,
        createdBy: createdBy,
        createdAt: createdAt,
        trigger: trigger,
        source: source,
    };
}
//# sourceMappingURL=webhookInvocation.generated.js.map