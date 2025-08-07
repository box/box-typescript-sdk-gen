"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldListsUpdateV2025R0 = serializeShieldListsUpdateV2025R0;
exports.deserializeShieldListsUpdateV2025R0 = deserializeShieldListsUpdateV2025R0;
const shieldListContentRequestV2025R0_generated_js_1 = require("./shieldListContentRequestV2025R0.generated.js");
const shieldListContentRequestV2025R0_generated_js_2 = require("./shieldListContentRequestV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeShieldListsUpdateV2025R0(val) {
    return {
        ['name']: val.name,
        ['description']: val.description,
        ['content']: (0, shieldListContentRequestV2025R0_generated_js_1.serializeShieldListContentRequestV2025R0)(val.content),
    };
}
function deserializeShieldListsUpdateV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListsUpdateV2025R0"',
        });
    }
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "ShieldListsUpdateV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListsUpdateV2025R0"',
        });
    }
    const name = val.name;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "ShieldListsUpdateV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.content == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "content" of type "ShieldListsUpdateV2025R0" to be defined',
        });
    }
    const content = (0, shieldListContentRequestV2025R0_generated_js_2.deserializeShieldListContentRequestV2025R0)(val.content);
    return {
        name: name,
        description: description,
        content: content,
    };
}
//# sourceMappingURL=shieldListsUpdateV2025R0.generated.js.map