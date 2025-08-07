"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemV2025R0TypeField = serializeHubItemV2025R0TypeField;
exports.deserializeHubItemV2025R0TypeField = deserializeHubItemV2025R0TypeField;
exports.serializeHubItemV2025R0 = serializeHubItemV2025R0;
exports.deserializeHubItemV2025R0 = deserializeHubItemV2025R0;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeHubItemV2025R0TypeField(val) {
    return val;
}
function deserializeHubItemV2025R0TypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'web_link') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize HubItemV2025R0TypeField",
    });
}
function serializeHubItemV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeHubItemV2025R0TypeField(val.type),
        ['name']: val.name,
    };
}
function deserializeHubItemV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "HubItemV2025R0"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "HubItemV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubItemV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "HubItemV2025R0" to be defined',
        });
    }
    const type = deserializeHubItemV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "HubItemV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "HubItemV2025R0"',
        });
    }
    const name = val.name;
    return { id: id, type: type, name: name };
}
//# sourceMappingURL=hubItemV2025R0.generated.js.map