"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubCreateRequestV2025R0 = serializeHubCreateRequestV2025R0;
exports.deserializeHubCreateRequestV2025R0 = deserializeHubCreateRequestV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubCreateRequestV2025R0(val) {
    return { ['title']: val.title, ['description']: val.description };
}
function deserializeHubCreateRequestV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCreateRequestV2025R0"',
        });
    }
    if (val.title == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "title" of type "HubCreateRequestV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "HubCreateRequestV2025R0"',
        });
    }
    const title = val.title;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "HubCreateRequestV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        title: title,
        description: description,
    };
}
//# sourceMappingURL=hubCreateRequestV2025R0.generated.js.map