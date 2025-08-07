"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionPolicyAssignmentBase = void 0;
exports.serializeRetentionPolicyAssignmentBaseTypeField = serializeRetentionPolicyAssignmentBaseTypeField;
exports.deserializeRetentionPolicyAssignmentBaseTypeField = deserializeRetentionPolicyAssignmentBaseTypeField;
exports.serializeRetentionPolicyAssignmentBase = serializeRetentionPolicyAssignmentBase;
exports.deserializeRetentionPolicyAssignmentBase = deserializeRetentionPolicyAssignmentBase;
exports.serializeRetentionPolicyAssignmentBaseInput = serializeRetentionPolicyAssignmentBaseInput;
exports.deserializeRetentionPolicyAssignmentBaseInput = deserializeRetentionPolicyAssignmentBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class RetentionPolicyAssignmentBase {
    constructor(fields) {
        /**
         * The value will always be `retention_policy_assignment`. */
        this.type = 'retention_policy_assignment';
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
exports.RetentionPolicyAssignmentBase = RetentionPolicyAssignmentBase;
function serializeRetentionPolicyAssignmentBaseTypeField(val) {
    return val;
}
function deserializeRetentionPolicyAssignmentBaseTypeField(val) {
    if (val == 'retention_policy_assignment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyAssignmentBaseTypeField",
    });
}
function serializeRetentionPolicyAssignmentBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeRetentionPolicyAssignmentBaseTypeField(val.type),
    };
}
function deserializeRetentionPolicyAssignmentBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentBase"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignmentBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyAssignmentBase" to be defined',
        });
    }
    const type = deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeRetentionPolicyAssignmentBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeRetentionPolicyAssignmentBaseTypeField(val.type),
    };
}
function deserializeRetentionPolicyAssignmentBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyAssignmentBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyAssignmentBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyAssignmentBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=retentionPolicyAssignmentBase.generated.js.map