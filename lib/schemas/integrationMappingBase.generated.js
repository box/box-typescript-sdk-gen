"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMappingBase = void 0;
exports.serializeIntegrationMappingBaseTypeField = serializeIntegrationMappingBaseTypeField;
exports.deserializeIntegrationMappingBaseTypeField = deserializeIntegrationMappingBaseTypeField;
exports.serializeIntegrationMappingBase = serializeIntegrationMappingBase;
exports.deserializeIntegrationMappingBase = deserializeIntegrationMappingBase;
exports.serializeIntegrationMappingBaseInput = serializeIntegrationMappingBaseInput;
exports.deserializeIntegrationMappingBaseInput = deserializeIntegrationMappingBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class IntegrationMappingBase {
    constructor(fields) {
        /**
         * Mapping type. */
        this.type = 'integration_mapping';
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
exports.IntegrationMappingBase = IntegrationMappingBase;
function serializeIntegrationMappingBaseTypeField(val) {
    return val;
}
function deserializeIntegrationMappingBaseTypeField(val) {
    if (val == 'integration_mapping') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize IntegrationMappingBaseTypeField",
    });
}
function serializeIntegrationMappingBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeIntegrationMappingBaseTypeField(val.type),
    };
}
function deserializeIntegrationMappingBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBase"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingBase" to be defined',
        });
    }
    const type = deserializeIntegrationMappingBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeIntegrationMappingBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeIntegrationMappingBaseTypeField(val.type),
    };
}
function deserializeIntegrationMappingBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeIntegrationMappingBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=integrationMappingBase.generated.js.map