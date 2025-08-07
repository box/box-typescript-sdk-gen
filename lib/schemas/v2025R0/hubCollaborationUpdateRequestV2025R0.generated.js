"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubCollaborationUpdateRequestV2025R0 = serializeHubCollaborationUpdateRequestV2025R0;
exports.deserializeHubCollaborationUpdateRequestV2025R0 = deserializeHubCollaborationUpdateRequestV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubCollaborationUpdateRequestV2025R0(val) {
    return { ['role']: val.role };
}
function deserializeHubCollaborationUpdateRequestV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCollaborationUpdateRequestV2025R0"',
        });
    }
    if (!(val.role == void 0) && !(0, json_js_1.sdIsString)(val.role)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "role" of type "HubCollaborationUpdateRequestV2025R0"',
        });
    }
    const role = val.role == void 0 ? void 0 : val.role;
    return { role: role };
}
//# sourceMappingURL=hubCollaborationUpdateRequestV2025R0.generated.js.map