"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeWebhookTriggersField = serializeWebhookTriggersField;
exports.deserializeWebhookTriggersField = deserializeWebhookTriggersField;
exports.serializeWebhook = serializeWebhook;
exports.deserializeWebhook = deserializeWebhook;
const webhookMini_generated_js_1 = require("./webhookMini.generated.js");
const webhookMini_generated_js_2 = require("./webhookMini.generated.js");
const webhookMini_generated_js_3 = require("./webhookMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeWebhookTriggersField(val) {
    return val;
}
function deserializeWebhookTriggersField(val) {
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
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize WebhookTriggersField" });
}
function serializeWebhook(val) {
    const base = (0, webhookMini_generated_js_3.serializeWebhookMini)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Webhook"' });
    }
    return Object.assign(Object.assign({}, base), {
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['address']: val.address,
        ['triggers']: val.triggers == void 0
            ? val.triggers
            : val.triggers.map(function (item) {
                return serializeWebhookTriggersField(item);
            }),
    });
}
function deserializeWebhook(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Webhook"' });
    }
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "Webhook"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.address == void 0) && !(0, json_js_1.sdIsString)(val.address)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "address" of type "Webhook"',
        });
    }
    const address = val.address == void 0 ? void 0 : val.address;
    if (!(val.triggers == void 0) && !(0, json_js_2.sdIsList)(val.triggers)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "triggers" of type "Webhook"',
        });
    }
    const triggers = val.triggers == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.triggers)
            ? val.triggers.map(function (itm) {
                return deserializeWebhookTriggersField(itm);
            })
            : [];
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Webhook"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : (0, webhookMini_generated_js_1.deserializeWebhookMiniTypeField)(val.type);
    const target = val.target == void 0
        ? void 0
        : (0, webhookMini_generated_js_2.deserializeWebhookMiniTargetField)(val.target);
    return {
        createdBy: createdBy,
        createdAt: createdAt,
        address: address,
        triggers: triggers,
        id: id,
        type: type,
        target: target,
    };
}
//# sourceMappingURL=webhook.generated.js.map