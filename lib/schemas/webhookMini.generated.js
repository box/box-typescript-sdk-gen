"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeWebhookMiniTypeField = serializeWebhookMiniTypeField;
exports.deserializeWebhookMiniTypeField = deserializeWebhookMiniTypeField;
exports.serializeWebhookMiniTargetTypeField = serializeWebhookMiniTargetTypeField;
exports.deserializeWebhookMiniTargetTypeField = deserializeWebhookMiniTargetTypeField;
exports.serializeWebhookMiniTargetField = serializeWebhookMiniTargetField;
exports.deserializeWebhookMiniTargetField = deserializeWebhookMiniTargetField;
exports.serializeWebhookMini = serializeWebhookMini;
exports.deserializeWebhookMini = deserializeWebhookMini;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeWebhookMiniTypeField(val) {
    return val;
}
function deserializeWebhookMiniTypeField(val) {
    if (val == 'webhook') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize WebhookMiniTypeField" });
}
function serializeWebhookMiniTargetTypeField(val) {
    return val;
}
function deserializeWebhookMiniTargetTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize WebhookMiniTargetTypeField",
    });
}
function serializeWebhookMiniTargetField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeWebhookMiniTargetTypeField(val.type),
    };
}
function deserializeWebhookMiniTargetField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WebhookMiniTargetField"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebhookMiniTargetField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeWebhookMiniTargetTypeField(val.type);
    return { id: id, type: type };
}
function serializeWebhookMini(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWebhookMiniTypeField(val.type),
        ['target']: val.target == void 0
            ? val.target
            : serializeWebhookMiniTargetField(val.target),
    };
}
function deserializeWebhookMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WebhookMini"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebhookMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeWebhookMiniTypeField(val.type);
    const target = val.target == void 0
        ? void 0
        : deserializeWebhookMiniTargetField(val.target);
    return { id: id, type: type, target: target };
}
//# sourceMappingURL=webhookMini.generated.js.map