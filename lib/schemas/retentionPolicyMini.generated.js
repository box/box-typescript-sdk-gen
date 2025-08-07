"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionPolicyMini = void 0;
exports.serializeRetentionPolicyMiniDispositionActionField = serializeRetentionPolicyMiniDispositionActionField;
exports.deserializeRetentionPolicyMiniDispositionActionField = deserializeRetentionPolicyMiniDispositionActionField;
exports.serializeRetentionPolicyMini = serializeRetentionPolicyMini;
exports.deserializeRetentionPolicyMini = deserializeRetentionPolicyMini;
const retentionPolicyBase_generated_js_1 = require("./retentionPolicyBase.generated.js");
const retentionPolicyBase_generated_js_2 = require("./retentionPolicyBase.generated.js");
const retentionPolicyBase_generated_js_3 = require("./retentionPolicyBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class RetentionPolicyMini extends retentionPolicyBase_generated_js_3.RetentionPolicyBase {
    constructor(fields) {
        super(fields);
        if (fields.policyName !== undefined) {
            this.policyName = fields.policyName;
        }
        if (fields.retentionLength !== undefined) {
            this.retentionLength = fields.retentionLength;
        }
        if (fields.dispositionAction !== undefined) {
            this.dispositionAction = fields.dispositionAction;
        }
    }
}
exports.RetentionPolicyMini = RetentionPolicyMini;
function serializeRetentionPolicyMiniDispositionActionField(val) {
    return val;
}
function deserializeRetentionPolicyMiniDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize RetentionPolicyMiniDispositionActionField",
    });
}
function serializeRetentionPolicyMini(val) {
    const base = (0, retentionPolicyBase_generated_js_2.serializeRetentionPolicyBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyMini"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['policy_name']: val.policyName,
        ['retention_length']: val.retentionLength,
        ['disposition_action']: val.dispositionAction == void 0
            ? val.dispositionAction
            : serializeRetentionPolicyMiniDispositionActionField(val.dispositionAction),
    });
}
function deserializeRetentionPolicyMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyMini"',
        });
    }
    if (!(val.policy_name == void 0) && !(0, json_js_1.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "RetentionPolicyMini"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.retention_length == void 0) && !(0, json_js_1.sdIsString)(val.retention_length)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "retention_length" of type "RetentionPolicyMini"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    const dispositionAction = val.disposition_action == void 0
        ? void 0
        : deserializeRetentionPolicyMiniDispositionActionField(val.disposition_action);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyMini" to be defined',
        });
    }
    const type = (0, retentionPolicyBase_generated_js_1.deserializeRetentionPolicyBaseTypeField)(val.type);
    return {
        policyName: policyName,
        retentionLength: retentionLength,
        dispositionAction: dispositionAction,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=retentionPolicyMini.generated.js.map