"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeBoxVersionHeaderV2025R0 = serializeBoxVersionHeaderV2025R0;
exports.deserializeBoxVersionHeaderV2025R0 = deserializeBoxVersionHeaderV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeBoxVersionHeaderV2025R0(val) {
    return val;
}
function deserializeBoxVersionHeaderV2025R0(val) {
    if (val == '2025.0') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize BoxVersionHeaderV2025R0",
    });
}
//# sourceMappingURL=boxVersionHeaderV2025R0.generated.js.map