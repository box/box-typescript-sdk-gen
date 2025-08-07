import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeWebhookMiniTypeField(val) {
    return val;
}
export function deserializeWebhookMiniTypeField(val) {
    if (val == 'webhook') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize WebhookMiniTypeField" });
}
export function serializeWebhookMiniTargetTypeField(val) {
    return val;
}
export function deserializeWebhookMiniTargetTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WebhookMiniTargetTypeField",
    });
}
export function serializeWebhookMiniTargetField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeWebhookMiniTargetTypeField(val.type),
    };
}
export function deserializeWebhookMiniTargetField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WebhookMiniTargetField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WebhookMiniTargetField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeWebhookMiniTargetTypeField(val.type);
    return { id: id, type: type };
}
export function serializeWebhookMini(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWebhookMiniTypeField(val.type),
        ['target']: val.target == void 0
            ? val.target
            : serializeWebhookMiniTargetField(val.target),
    };
}
export function deserializeWebhookMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WebhookMini"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
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