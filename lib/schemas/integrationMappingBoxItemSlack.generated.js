"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMappingBoxItemSlack = void 0;
exports.serializeIntegrationMappingBoxItemSlackTypeField = serializeIntegrationMappingBoxItemSlackTypeField;
exports.deserializeIntegrationMappingBoxItemSlackTypeField = deserializeIntegrationMappingBoxItemSlackTypeField;
exports.serializeIntegrationMappingBoxItemSlack = serializeIntegrationMappingBoxItemSlack;
exports.deserializeIntegrationMappingBoxItemSlack = deserializeIntegrationMappingBoxItemSlack;
exports.serializeIntegrationMappingBoxItemSlackInput = serializeIntegrationMappingBoxItemSlackInput;
exports.deserializeIntegrationMappingBoxItemSlackInput = deserializeIntegrationMappingBoxItemSlackInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class IntegrationMappingBoxItemSlack {
    constructor(fields) {
        /**
         * Type of the mapped item referenced in `id`. */
        this.type = 'folder';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.IntegrationMappingBoxItemSlack = IntegrationMappingBoxItemSlack;
function serializeIntegrationMappingBoxItemSlackTypeField(val) {
    return val;
}
function deserializeIntegrationMappingBoxItemSlackTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingBoxItemSlackTypeField",
    });
}
function serializeIntegrationMappingBoxItemSlack(val) {
    return {
        ['type']: serializeIntegrationMappingBoxItemSlackTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeIntegrationMappingBoxItemSlack(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBoxItemSlack"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingBoxItemSlack" to be defined',
        });
    }
    const type = deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBoxItemSlack" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBoxItemSlack"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeIntegrationMappingBoxItemSlackInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeIntegrationMappingBoxItemSlackTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeIntegrationMappingBoxItemSlackInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBoxItemSlackInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBoxItemSlackInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBoxItemSlackInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=integrationMappingBoxItemSlack.generated.js.map