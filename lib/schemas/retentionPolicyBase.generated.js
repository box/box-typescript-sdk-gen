"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionPolicyBase = void 0;
exports.serializeRetentionPolicyBaseTypeField = serializeRetentionPolicyBaseTypeField;
exports.deserializeRetentionPolicyBaseTypeField = deserializeRetentionPolicyBaseTypeField;
exports.serializeRetentionPolicyBase = serializeRetentionPolicyBase;
exports.deserializeRetentionPolicyBase = deserializeRetentionPolicyBase;
exports.serializeRetentionPolicyBaseInput = serializeRetentionPolicyBaseInput;
exports.deserializeRetentionPolicyBaseInput = deserializeRetentionPolicyBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class RetentionPolicyBase {
    constructor(fields) {
        /**
         * The value will always be `retention_policy`. */
        this.type = 'retention_policy';
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
exports.RetentionPolicyBase = RetentionPolicyBase;
function serializeRetentionPolicyBaseTypeField(val) {
    return val;
}
function deserializeRetentionPolicyBaseTypeField(val) {
    if (val == 'retention_policy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyBaseTypeField",
    });
}
function serializeRetentionPolicyBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeRetentionPolicyBaseTypeField(val.type),
    };
}
function deserializeRetentionPolicyBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyBase"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyBase" to be defined',
        });
    }
    const type = deserializeRetentionPolicyBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeRetentionPolicyBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyBaseTypeField(val.type),
    };
}
function deserializeRetentionPolicyBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=retentionPolicyBase.generated.js.map