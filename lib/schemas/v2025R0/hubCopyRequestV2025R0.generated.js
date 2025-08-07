"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubCopyRequestV2025R0 = serializeHubCopyRequestV2025R0;
exports.deserializeHubCopyRequestV2025R0 = deserializeHubCopyRequestV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubCopyRequestV2025R0(val) {
    return { ['title']: val.title, ['description']: val.description };
}
function deserializeHubCopyRequestV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCopyRequestV2025R0"',
        });
    }
    if (!(val.title == void 0) && !(0, json_js_1.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "HubCopyRequestV2025R0"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "HubCopyRequestV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    return {
        title: title,
        description: description,
    };
}
//# sourceMappingURL=hubCopyRequestV2025R0.generated.js.map