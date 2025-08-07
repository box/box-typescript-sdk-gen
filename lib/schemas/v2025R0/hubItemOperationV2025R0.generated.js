"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemOperationV2025R0ActionField = serializeHubItemOperationV2025R0ActionField;
exports.deserializeHubItemOperationV2025R0ActionField = deserializeHubItemOperationV2025R0ActionField;
exports.serializeHubItemOperationV2025R0 = serializeHubItemOperationV2025R0;
exports.deserializeHubItemOperationV2025R0 = deserializeHubItemOperationV2025R0;
const fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0_generated_js_1 = require("./fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0.generated.js");
const fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0_generated_js_2 = require("./fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubItemOperationV2025R0ActionField(val) {
    return val;
}
function deserializeHubItemOperationV2025R0ActionField(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize HubItemOperationV2025R0ActionField",
    });
}
function serializeHubItemOperationV2025R0(val) {
    return {
        ['action']: serializeHubItemOperationV2025R0ActionField(val.action),
        ['item']: (0, fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0_generated_js_1.serializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0)(val.item),
    };
}
function deserializeHubItemOperationV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubItemOperationV2025R0"',
        });
    }
    if (val.action == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "action" of type "HubItemOperationV2025R0" to be defined',
        });
    }
    const action = deserializeHubItemOperationV2025R0ActionField(val.action);
    if (val.item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item" of type "HubItemOperationV2025R0" to be defined',
        });
    }
    const item = (0, fileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0_generated_js_2.deserializeFileReferenceOrFolderReferenceOrWeblinkReferenceV2025R0)(val.item);
    return { action: action, item: item };
}
//# sourceMappingURL=hubItemOperationV2025R0.generated.js.map