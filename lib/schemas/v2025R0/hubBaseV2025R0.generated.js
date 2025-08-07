"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubBaseV2025R0 = void 0;
exports.serializeHubBaseV2025R0TypeField = serializeHubBaseV2025R0TypeField;
exports.deserializeHubBaseV2025R0TypeField = deserializeHubBaseV2025R0TypeField;
exports.serializeHubBaseV2025R0 = serializeHubBaseV2025R0;
exports.deserializeHubBaseV2025R0 = deserializeHubBaseV2025R0;
exports.serializeHubBaseV2025R0Input = serializeHubBaseV2025R0Input;
exports.deserializeHubBaseV2025R0Input = deserializeHubBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class HubBaseV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `hubs`. */
        this.type = 'hubs';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.HubBaseV2025R0 = HubBaseV2025R0;
function serializeHubBaseV2025R0TypeField(val) {
    return val;
}
function deserializeHubBaseV2025R0TypeField(val) {
    if (val == 'hubs') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize HubBaseV2025R0TypeField",
    });
}
function serializeHubBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeHubBaseV2025R0TypeField(val.type),
    };
}
function deserializeHubBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "HubBaseV2025R0"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "HubBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "HubBaseV2025R0" to be defined',
        });
    }
    const type = deserializeHubBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeHubBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeHubBaseV2025R0TypeField(val.type),
    };
}
function deserializeHubBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "HubBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "HubBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeHubBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=hubBaseV2025R0.generated.js.map