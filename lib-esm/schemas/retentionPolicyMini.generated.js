import { deserializeRetentionPolicyBaseTypeField } from './retentionPolicyBase.generated.js';
import { serializeRetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { RetentionPolicyBase } from './retentionPolicyBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RetentionPolicyMini extends RetentionPolicyBase {
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
export function serializeRetentionPolicyMiniDispositionActionField(val) {
    return val;
}
export function deserializeRetentionPolicyMiniDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RetentionPolicyMiniDispositionActionField",
    });
}
export function serializeRetentionPolicyMini(val) {
    const base = serializeRetentionPolicyBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyMini"',
        });
    }
    return {
        ...base,
        ...{
            ['policy_name']: val.policyName,
            ['retention_length']: val.retentionLength,
            ['disposition_action']: val.dispositionAction == void 0
                ? val.dispositionAction
                : serializeRetentionPolicyMiniDispositionActionField(val.dispositionAction),
        },
    };
}
export function deserializeRetentionPolicyMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RetentionPolicyMini"',
        });
    }
    if (!(val.policy_name == void 0) && !sdIsString(val.policy_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_name" of type "RetentionPolicyMini"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.retention_length == void 0) && !sdIsString(val.retention_length)) {
        throw new BoxSdkError({
            message: 'Expecting string for "retention_length" of type "RetentionPolicyMini"',
        });
    }
    const retentionLength = val.retention_length == void 0 ? void 0 : val.retention_length;
    const dispositionAction = val.disposition_action == void 0
        ? void 0
        : deserializeRetentionPolicyMiniDispositionActionField(val.disposition_action);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "RetentionPolicyMini" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "RetentionPolicyMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "RetentionPolicyMini" to be defined',
        });
    }
    const type = deserializeRetentionPolicyBaseTypeField(val.type);
    return {
        policyName: policyName,
        retentionLength: retentionLength,
        dispositionAction: dispositionAction,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=retentionPolicyMini.generated.js.map