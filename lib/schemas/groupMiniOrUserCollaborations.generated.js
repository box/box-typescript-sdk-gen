"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeGroupMiniOrUserCollaborations = serializeGroupMiniOrUserCollaborations;
exports.deserializeGroupMiniOrUserCollaborations = deserializeGroupMiniOrUserCollaborations;
const groupMini_generated_js_1 = require("./groupMini.generated.js");
const groupMini_generated_js_2 = require("./groupMini.generated.js");
const userCollaborations_generated_js_1 = require("./userCollaborations.generated.js");
const userCollaborations_generated_js_2 = require("./userCollaborations.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeGroupMiniOrUserCollaborations(val) {
    if (val.type == 'group') {
        return (0, groupMini_generated_js_1.serializeGroupMini)(val);
    }
    if (val.type == 'user') {
        return (0, userCollaborations_generated_js_1.serializeUserCollaborations)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeGroupMiniOrUserCollaborations(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "GroupMiniOrUserCollaborations"',
        });
    }
    if (val.type == 'group') {
        return (0, groupMini_generated_js_2.deserializeGroupMini)(val);
    }
    if (val.type == 'user') {
        return (0, userCollaborations_generated_js_2.deserializeUserCollaborations)(val);
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GroupMiniOrUserCollaborations",
    });
}
//# sourceMappingURL=groupMiniOrUserCollaborations.generated.js.map