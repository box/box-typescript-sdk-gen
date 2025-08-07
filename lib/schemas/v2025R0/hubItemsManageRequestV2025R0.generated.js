"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemsManageRequestV2025R0 = serializeHubItemsManageRequestV2025R0;
exports.deserializeHubItemsManageRequestV2025R0 = deserializeHubItemsManageRequestV2025R0;
const hubItemOperationV2025R0_generated_js_1 = require("./hubItemOperationV2025R0.generated.js");
const hubItemOperationV2025R0_generated_js_2 = require("./hubItemOperationV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubItemsManageRequestV2025R0(val) {
    return {
        ['operations']: val.operations == void 0
            ? val.operations
            : val.operations.map(function (item) {
                return (0, hubItemOperationV2025R0_generated_js_1.serializeHubItemOperationV2025R0)(item);
            }),
    };
}
function deserializeHubItemsManageRequestV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubItemsManageRequestV2025R0"',
        });
    }
    if (!(val.operations == void 0) && !(0, json_js_1.sdIsList)(val.operations)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "operations" of type "HubItemsManageRequestV2025R0"',
        });
    }
    const operations = val.operations == void 0
        ? void 0
        : (0, json_js_1.sdIsList)(val.operations)
            ? val.operations.map(function (itm) {
                return (0, hubItemOperationV2025R0_generated_js_2.deserializeHubItemOperationV2025R0)(itm);
            })
            : [];
    return { operations: operations };
}
//# sourceMappingURL=hubItemsManageRequestV2025R0.generated.js.map