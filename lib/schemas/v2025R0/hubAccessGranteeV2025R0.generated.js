"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubAccessGranteeV2025R0 = serializeHubAccessGranteeV2025R0;
exports.deserializeHubAccessGranteeV2025R0 = deserializeHubAccessGranteeV2025R0;
const hubCollaborationUserV2025R0_generated_js_1 = require("./hubCollaborationUserV2025R0.generated.js");
const hubCollaborationUserV2025R0_generated_js_2 = require("./hubCollaborationUserV2025R0.generated.js");
const groupMiniV2025R0_generated_js_1 = require("./groupMiniV2025R0.generated.js");
const groupMiniV2025R0_generated_js_2 = require("./groupMiniV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
function serializeHubAccessGranteeV2025R0(val) {
    if (val.type == 'user') {
        return (0, hubCollaborationUserV2025R0_generated_js_1.serializeHubCollaborationUserV2025R0)(val);
    }
    if (val.type == 'group') {
        return (0, groupMiniV2025R0_generated_js_1.serializeGroupMiniV2025R0)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeHubAccessGranteeV2025R0(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubAccessGranteeV2025R0"',
        });
    }
    if (val.type == 'user') {
        return (0, hubCollaborationUserV2025R0_generated_js_2.deserializeHubCollaborationUserV2025R0)(val);
    }
    if (val.type == 'group') {
        return (0, groupMiniV2025R0_generated_js_2.deserializeGroupMiniV2025R0)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize HubAccessGranteeV2025R0",
    });
}
//# sourceMappingURL=hubAccessGranteeV2025R0.generated.js.map