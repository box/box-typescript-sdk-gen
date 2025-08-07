"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiAgentAllowedEntity = serializeAiAgentAllowedEntity;
exports.deserializeAiAgentAllowedEntity = deserializeAiAgentAllowedEntity;
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const groupBase_generated_js_1 = require("./groupBase.generated.js");
const groupBase_generated_js_2 = require("./groupBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAiAgentAllowedEntity(val) {
    if (val.type == 'user') {
        return (0, userBase_generated_js_1.serializeUserBase)(val);
    }
    if (val.type == 'group') {
        return (0, groupBase_generated_js_1.serializeGroupBase)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: 'unknown type' });
}
function deserializeAiAgentAllowedEntity(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentAllowedEntity"',
        });
    }
    if (val.type == 'user') {
        return (0, userBase_generated_js_2.deserializeUserBase)(val);
    }
    if (val.type == 'group') {
        return (0, groupBase_generated_js_2.deserializeGroupBase)(val);
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AiAgentAllowedEntity" });
}
//# sourceMappingURL=aiAgentAllowedEntity.generated.js.map