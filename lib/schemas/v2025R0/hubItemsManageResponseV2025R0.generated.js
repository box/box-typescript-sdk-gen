"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemsManageResponseV2025R0 = serializeHubItemsManageResponseV2025R0;
exports.deserializeHubItemsManageResponseV2025R0 = deserializeHubItemsManageResponseV2025R0;
const hubItemOperationResultV2025R0_generated_js_1 = require("./hubItemOperationResultV2025R0.generated.js");
const hubItemOperationResultV2025R0_generated_js_2 = require("./hubItemOperationResultV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubItemsManageResponseV2025R0(val) {
    return {
        ['operations']: val.operations.map(function (item) {
            return (0, hubItemOperationResultV2025R0_generated_js_1.serializeHubItemOperationResultV2025R0)(item);
        }),
    };
}
function deserializeHubItemsManageResponseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubItemsManageResponseV2025R0"',
        });
    }
    if (val.operations == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "operations" of type "HubItemsManageResponseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsList)(val.operations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "operations" of type "HubItemsManageResponseV2025R0"',
        });
    }
    const operations = (0, json_js_1.sdIsList)(val.operations)
        ? val.operations.map(function (itm) {
            return (0, hubItemOperationResultV2025R0_generated_js_2.deserializeHubItemOperationResultV2025R0)(itm);
        })
        : [];
    return { operations: operations };
}
//# sourceMappingURL=hubItemsManageResponseV2025R0.generated.js.map