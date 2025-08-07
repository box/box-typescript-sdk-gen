"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubActionV2025R0 = serializeHubActionV2025R0;
exports.deserializeHubActionV2025R0 = deserializeHubActionV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeHubActionV2025R0(val) {
    return val;
}
function deserializeHubActionV2025R0(val) {
    if (val == 'add') {
        return val;
    }
    if (val == 'remove') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize HubActionV2025R0" });
}
//# sourceMappingURL=hubActionV2025R0.generated.js.map