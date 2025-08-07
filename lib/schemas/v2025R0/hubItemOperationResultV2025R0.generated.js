"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemOperationResultV2025R0 = serializeHubItemOperationResultV2025R0;
exports.deserializeHubItemOperationResultV2025R0 = deserializeHubItemOperationResultV2025R0;
const hubItemReferenceV2025R0_generated_js_1 = require("./hubItemReferenceV2025R0.generated.js");
const hubItemReferenceV2025R0_generated_js_2 = require("./hubItemReferenceV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
function serializeHubItemOperationResultV2025R0(val) {
    return {
        ['action']: val.action,
        ['item']: val.item == void 0
            ? val.item
            : (0, hubItemReferenceV2025R0_generated_js_1.serializeHubItemReferenceV2025R0)(val.item),
        ['status']: val.status,
        ['error']: val.error,
    };
}
function deserializeHubItemOperationResultV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubItemOperationResultV2025R0"',
        });
    }
    if (!(val.action == void 0) && !(0, json_js_2.sdIsString)(val.action)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "action" of type "HubItemOperationResultV2025R0"',
        });
    }
    const action = val.action == void 0 ? void 0 : val.action;
    const item = val.item == void 0 ? void 0 : (0, hubItemReferenceV2025R0_generated_js_2.deserializeHubItemReferenceV2025R0)(val.item);
    if (!(val.status == void 0) && !(0, json_js_1.sdIsNumber)(val.status)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "status" of type "HubItemOperationResultV2025R0"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.error == void 0) && !(0, json_js_2.sdIsString)(val.error)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "error" of type "HubItemOperationResultV2025R0"',
        });
    }
    const error = val.error == void 0 ? void 0 : val.error;
    return {
        action: action,
        item: item,
        status: status,
        error: error,
    };
}
//# sourceMappingURL=hubItemOperationResultV2025R0.generated.js.map