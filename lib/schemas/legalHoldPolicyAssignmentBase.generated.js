"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeLegalHoldPolicyAssignmentBaseTypeField = serializeLegalHoldPolicyAssignmentBaseTypeField;
exports.deserializeLegalHoldPolicyAssignmentBaseTypeField = deserializeLegalHoldPolicyAssignmentBaseTypeField;
exports.serializeLegalHoldPolicyAssignmentBase = serializeLegalHoldPolicyAssignmentBase;
exports.deserializeLegalHoldPolicyAssignmentBase = deserializeLegalHoldPolicyAssignmentBase;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeLegalHoldPolicyAssignmentBaseTypeField(val) {
    return val;
}
function deserializeLegalHoldPolicyAssignmentBaseTypeField(val) {
    if (val == 'legal_hold_policy_assignment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize LegalHoldPolicyAssignmentBaseTypeField",
    });
}
function serializeLegalHoldPolicyAssignmentBase(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeLegalHoldPolicyAssignmentBaseTypeField(val.type),
    };
}
function deserializeLegalHoldPolicyAssignmentBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignmentBase"',
        });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyAssignmentBase"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=legalHoldPolicyAssignmentBase.generated.js.map